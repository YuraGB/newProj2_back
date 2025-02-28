import { TProduct } from "@/db/schemas/productTable";
import { TIdentificationTypes } from "@/types/product";

export const productsService = async (
  identification: TIdentificationTypes | undefined,
): Promise<TProduct[]> => {
  let productsData;

  switch (identification) {
    case "home":
      productsData = await fetch(
        "https://dummyjson.com/products?limit=10&skip=10&select=title,price,thumbnail",
      );
      break;
    case "search":
      productsData = await fetch("https://dummyjson.com/products/");
      break;

    case "category":
      productsData = await fetch("https://dummyjson.com/products/");
      break;
    default:
      productsData = await fetch("https://dummyjson.com/products/");
      break;
  }

  const products = await productsData.json();

  if (!products) return [];

  if ("products" in products) {
    const { products: prodData } = products;
    return prodData;
  }

  return [];
};
