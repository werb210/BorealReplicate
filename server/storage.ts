import { type User, type InsertUser } from "@shared/schema";
import { randomUUID } from "crypto";

export type CapitalReadinessLead = {
  id: string;
  name: string;
  email: string;
  phone: string;
  industry: string;
  revenue: string;
  yearsInBusiness: string;
  existingDebt: string;
  score: number;
  tier: string;
  tag: "capital_readiness";
  createdAt: string;
};

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createCapitalReadinessLead(lead: Omit<CapitalReadinessLead, "id" | "createdAt">): Promise<CapitalReadinessLead>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private readinessLeads: Map<string, CapitalReadinessLead>;

  constructor() {
    this.users = new Map();
    this.readinessLeads = new Map();
  }

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find((user) => user.username === username);
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async createCapitalReadinessLead(lead: Omit<CapitalReadinessLead, "id" | "createdAt">): Promise<CapitalReadinessLead> {
    const id = randomUUID();
    const createdAt = new Date().toISOString();
    const record: CapitalReadinessLead = { ...lead, id, createdAt };
    this.readinessLeads.set(id, record);
    return record;
  }
}

export const storage = new MemStorage();
