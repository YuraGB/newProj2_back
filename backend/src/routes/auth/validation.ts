import { z } from "zod";
export const loginValidationSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

export const registerValidationSchema = z.object({
  userName: z.string().min(2),
  email: z.string().email(),
  password: z.string().min(6),
});
