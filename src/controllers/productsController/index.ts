import { Context } from "hono";
import { productsService } from "@/servises/products";
import { THPProductsSlider, TIdentificationTypes } from "@/types/product";

export const productsController = async (c: Context) => {
  // get identifier from query "home" | "all" | "search" ...
  const identifier = c.req.query("identifier") as
    | TIdentificationTypes
    | undefined;

  const products = (await productsService(identifier)) as THPProductsSlider[];
  return c.json({ products });
};
