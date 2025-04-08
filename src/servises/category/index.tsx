import { TProduct } from "@/db/schemas";

export const categoryService = async (
  categoryName: string,
): Promise<TProduct[] | null> => {
  try {
    const data = await fetch(
      `https://dummyjson.com/products/category/${categoryName}`,
    );
    const { products }: { products: TProduct[] } = await data.json();
    return products;
  } catch (e) {
    console.log(e);
    return null;
  }
};

export const categoryListService = async (): Promise<string[] | null> => {
  try {
    const data = await fetch("https://dummyjson.com/products/category-list");
    return await data.json();
  } catch (e) {
    console.log(e);
    return null;
  }
};
