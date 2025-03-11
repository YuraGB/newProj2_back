import { TProduct } from "@/db/schemas/productTable";

export const singleProductService = async (
  id: TProduct["id"],
): Promise<TProduct | null> => {
  try {
    const product = await fetch(`https://dummyjson.com/products/${id}`);
    return await product.json();
  } catch (error) {
    console.log("Error in singleProductService: ", error);
    return null;
  }
};
