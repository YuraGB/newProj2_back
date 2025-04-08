import { Context } from "hono";
import { productsService } from "@/servises/products";
import { THPProductsSlider, TIdentificationTypes } from "@/types/product";

export const productsController = async (c: Context) => {
  const currentUser = c.get("user");
  // get identifier from query "home" | "all" | "search" ...
  const identifier = c.req.query("identifier") as
    | TIdentificationTypes
    | undefined;

  const productIds = c.req.query("ids") as TIdentificationTypes | undefined;

  if (identifier) {
    const products = (await productsService(
      identifier,
      currentUser?.id,
      productIds,
    )) as THPProductsSlider[];
    return c.json({ products });
  }
};
