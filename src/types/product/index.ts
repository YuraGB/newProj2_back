// ---- get products by identification

import { TProduct } from "@/db/schemas/productTable";

export type TIdentificationTypes = "home" | "category" | "search" | "all";

export type THPProductsSlider = Pick<
  TProduct,
  "thumbnail" | "id" | "title" | "price"
>;
