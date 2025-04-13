import { Context } from "hono";
import { TPlaceOrder } from "@/types/order";
import { placeOrderService } from "@/servises/order/placeOrderServise";
import { TOrderWithProducts } from "@/db/schemas";
import { basketService } from "@/servises/basket";

export const orderPurchaseSetController = async (c: Context) => {
  const order: TPlaceOrder = await c.req.json();
  const userId: number | undefined = await c.get("user")?.id;

  if (!order) return c.json({ error: "Missing order data" }, 400);

  const placeOrder = await placeOrderService(order, userId);

  if (!placeOrder) {
    return c.json({ error: "Order not placed" }, 400);
  }

  const removedBasket = await basketService.removeBasket(Number(userId));

  if (!removedBasket) {
    return c.json({ error: "Basket not removed" }, 400);
  }

  return c.json<TOrderWithProducts>(placeOrder);
};
