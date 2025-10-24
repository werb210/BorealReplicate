import { type User, type InsertUser } from "@shared/schema";
import { randomUUID, randomBytes, scrypt as callbackScrypt } from "crypto";
import { promisify } from "util";
import { AppError } from "./errors";

const scrypt = promisify(callbackScrypt);

// modify the interface with any CRUD methods
// you might need

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  listUsers(): Promise<User[]>;
  createUser(user: InsertUser): Promise<User>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;

  constructor() {
    this.users = new Map();
  }

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async listUsers(): Promise<User[]> {
    return Array.from(this.users.values());
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const existing = await this.getUserByUsername(insertUser.username);
    if (existing) {
      throw new AppError("USER_EXISTS");
    }

    const salt = randomBytes(16).toString("hex");
    const hashedBuffer = (await scrypt(insertUser.password, salt, 64)) as Buffer;
    const hashedPassword = `${salt}:${hashedBuffer.toString("hex")}`;

    const id = randomUUID();
    const user: User = {
      id,
      username: insertUser.username,
      password: hashedPassword,
    };

    this.users.set(id, user);
    return user;
  }
}

export const storage = new MemStorage();
