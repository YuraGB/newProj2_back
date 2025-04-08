import { orderFormSchema } from "@/routes/order/validation";
import { z } from "zod";

export type TPlaceOrder = z.infer<typeof orderFormSchema>;
