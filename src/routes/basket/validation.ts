import { z } from "zod";
export const basketValidationSchema = z.object({
  productId: z.number(),
  quantity: z.number(),
});

export const basketMergeValidationSchema = z.array(basketValidationSchema);
