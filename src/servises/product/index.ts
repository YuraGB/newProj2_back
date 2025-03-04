import { TProduct } from "@/db/schemas/productTable";

export const productPageService = async (
  id: string,
): Promise<TProduct | null> => {
  try {
    const product = await fetch(`https://dummyjson.com/products/${id}`);
    return await product.json();
  } catch (e) {
    return null;
  }
};
