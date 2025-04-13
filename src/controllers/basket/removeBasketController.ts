import { Context } from "hono";
import { basketService } from "@/servises/basket";

export const removeBasketController = async (c: Context) => {
  const user = c.get("user") as { id: string } | undefined;
  if (!user?.id) {
    return c.json({ error: "Unauthorized: user missing" }, 401);
  }

  const removedBasket = await basketService.removeBasket(Number(user.id));

  if (!removedBasket) {
    return c.json({ error: "Product not found" }, 404);
  }

  return c.json({ message: "The basket is removed" }, 200);
};
