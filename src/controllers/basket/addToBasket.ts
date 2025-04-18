import { Context } from "hono";
import { basketService } from "@/servises/basket";

export const addToBasketController = async (c: Context) => {
  const user = c.get("user") as { id: string };
  console.log("user", user);
  if (!user) {
    return c.json({ basket: [] }, 401);
  }

  const { productId, quantity } = await c.req.json();

  const productAdded = await basketService.addProductToBasket(
    Number(user.id),
    productId,
    quantity,
  );

  if (productAdded) {
    return c.json(productAdded);
  } else {
    return c.json({ error: "Product not added" }, 400);
  }
};
