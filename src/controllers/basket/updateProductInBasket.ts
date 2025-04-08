import { Context } from "hono";
import { basketService } from "@/servises/basket";

export const updateProductInBasket = async (c: Context) => {
  const user = c.get("user") as { id: string };
  if (!user) {
    return c.json({ basket: [] });
  }

  const { productId, quantity } = await c.req.json();

  const basket = await basketService.updateProductInBasket(
    Number(user.id),
    productId,
    quantity,
  );

  if (!basket) {
    return c.json({ basket: [] });
  }

  return c.json({ basket });
};
