import { Context } from "hono";
import { basketService } from "@/servises/basket";

export const getBasketController = async (c: Context) => {
  const user = c.get("user") as { id: string };
  if (!user) {
    return c.json({ basket: [] });
  }

  const basket = await basketService.getUserBasketProducts(Number(user.id));

  if (!basket || basket.length === 0) {
    return c.json({ basket: [] });
  }

  return c.json({ basket });
};
