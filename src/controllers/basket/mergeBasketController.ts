import { Context } from "hono";
import { basketService } from "@/servises/basket";

export const mergeBasketController = async (c: Context) => {
  const currentUser = c.get("user") as { id: string };
  const basket = await c.req.json();

  if (!currentUser) {
    return c.json({ error: "No user found" }, 401);
  }

  if (!basket?.length) {
    return c.json({ error: "No basket found" }, 400);
  }

  const updatedBasket = await basketService.mergeBasket(
    +currentUser.id,
    basket,
  );

  if (updatedBasket.length) {
    return c.json({ message: "basket was updated" });
  }

  return c.json({ error: "Not updated" });
};
