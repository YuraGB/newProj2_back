// ---- get products by identifier

import { TProduct } from "@/db/schemas/productTable";

export type TIdentificationTypes =
  | "home"
  | "category"
  | "ids"
  | "search"
  | "all"
  | "basket";

export type THPProductsSlider = Pick<
  TProduct,
  "thumbnail" | "id" | "title" | "price"
>;
