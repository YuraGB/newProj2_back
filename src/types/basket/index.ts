import { TBasket } from "@/db/schemas";

export type TGetBasketProduct = Pick<TBasket, "productId" | "quantity">;
