import { Context } from "hono";
import { TPlaceOrder } from "@/types/order";
import { placeOrderService } from "@/servises/order/placeOrderServise";
import { TOrderWithProducts } from "@/db/schemas";

export const orderPurchaseSetController = async (c: Context) => {
  const order: TPlaceOrder = await c.req.json();
  const userId: number | undefined = await c.get("user")?.id;

  if (!order) return c.json({ error: "Missing order data" }, 400);

  const placeOrder = await placeOrderService(order, userId);

  if (!placeOrder) {
    return c.json({ error: "Order not placed" }, 400);
  }

  return c.json<TOrderWithProducts>(placeOrder);
};
