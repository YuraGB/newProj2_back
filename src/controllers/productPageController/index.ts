import { Context } from "hono";
import { productPageService } from "@/servises/product";

export const productPageController = async (c: Context) => {
  const productId = c.req.param("id");

  if (!productId) {
    return c.json({ error: "No Product id provided" }, 400);
  }

  const product = await productPageService(productId);

  return c.json({ product });
};
