import { z } from "zod";

const textField = z.string().trim().min(1).max(200);
const phoneField = z.string().trim().min(10).max(20);

export const contactFormSchema = z.object({
  company: textField.min(2).max(100),
  firstName: textField.min(2).max(100),
  lastName: textField.min(2).max(100),
  email: z.string().trim().email().max(254),
  phone: phoneField,
  utm: z.record(z.string().nullable()).optional(),
}).strict();

export const creditReadinessSchema = z.object({
  companyName: textField.min(2).max(100),
  fullName: textField.min(2).max(100),
  email: z.string().trim().email().max(254),
  phone: phoneField,
  industry: textField.max(100),
  yearsInBusiness: z.enum(["Zero", "Under 1 Year", "1 to 3 Years", "Over 3 Years"]),
  annualRevenue: textField.max(100),
  monthlyRevenue: textField.max(100),
  arBalance: textField.max(100),
  collateral: textField.max(100),
}).strict();

export const leadIngestionSchema = z.object({
  companyName: textField.min(2).max(100),
  firstName: textField.min(2).max(100),
  lastName: textField.min(2).max(100),
  email: z.string().trim().email().max(254),
  phone: phoneField,
}).strict();

export const capitalReadinessIntakeSchema = z.object({
  name: textField.min(2).max(100),
  email: z.string().trim().email().max(254),
  phone: phoneField,
  industry: textField.max(100),
  revenue: textField.max(100),
  yearsInBusiness: z.string().trim().min(1).max(50),
  existingDebt: z.string().trim().min(1).max(20),
}).strict();


export const publicLeadScoreSchema = z.object({
  revenue: z.union([z.number(), z.string()]).optional(),
  industry: z.string().trim().max(100).optional(),
  years: z.union([z.number(), z.string()]).optional(),
  amount: z.union([z.number(), z.string()]).optional(),
  email: z.string().trim().email().max(254),
  phone: phoneField,
  utm: z.record(z.string().nullable()).optional(),
}).strict();
