import express, { type Express, type Request, type Response, type NextFunction } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertUserSchema, type User } from "@shared/schema";
import { logger } from "./logger";
import { AppError } from "./errors";
import { metricsSnapshot } from "./metrics";

const requestLogger = logger.child({ scope: "routes" });

export interface RouteOptions {
  apiRateLimiter: (req: Request, res: Response, next: NextFunction) => void;
}

type PublicUser = Omit<User, "password">;

function toPublicUser(user: User): PublicUser {
  const { password: _password, ...publicUser } = user;
  return publicUser;
}

function asyncHandler(
  handler: (req: Request, res: Response, next: NextFunction) => Promise<void>,
) {
  return (req: Request, res: Response, next: NextFunction) => {
    handler(req, res, next).catch(next);
  };
}

function asyncRoute(
  path: string,
  handler: (req: Request, res: Response, next: NextFunction) => Promise<void>,
) {
  return asyncHandler(async (req, res, next) => {
    res.locals.routeId = `${req.baseUrl}${path}`;
    await handler(req, res, next);
  });
}

export async function registerRoutes(app: Express, options: RouteOptions): Promise<Server> {
  const router = express.Router();

  router.use(options.apiRateLimiter);

  router.get(
    "/health",
    asyncRoute("/health", async (_req, res) => {
      res.json({ status: "ok", uptime: process.uptime() });
    }),
  );

  router.get(
    "/metrics",
    asyncRoute("/metrics", async (_req, res) => {
      res.type("text/plain").send(metricsSnapshot());
    }),
  );

  router.get(
    "/users",
    asyncRoute("/users", async (_req, res) => {
      const users = await storage.listUsers();
      requestLogger.debug("listed users", { count: users.length });
      res.json(users.map(toPublicUser));
    }),
  );

  router.get(
    "/users/:id",
    asyncRoute("/users/:id", async (req, res) => {
      const user = await storage.getUser(req.params.id);
      if (!user) {
        throw new AppError("NOT_FOUND", "User not found");
      }

      res.json(toPublicUser(user));
    }),
  );

  router.post(
    "/users",
    asyncRoute("/users", async (req, res) => {
      const parsed = insertUserSchema.safeParse(req.body);
      if (!parsed.success) {
        requestLogger.warn("invalid user payload", { issues: parsed.error.issues.length });
        throw new AppError("VALIDATION_FAILED", "Invalid user payload");
      }

      const createdUser = await storage.createUser(parsed.data);
      res.status(201).json(toPublicUser(createdUser));
    }),
  );

  app.use("/api/v1", router);

  app.use("/api", (req, res, next) => {
    res.locals.routeId = `${req.baseUrl || ""}*`;
    next(new AppError("NOT_FOUND", "API route not found"));
  });

  const httpServer = createServer(app);

  return httpServer;
}
