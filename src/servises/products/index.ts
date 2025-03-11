import { TProduct } from "@/db/schemas/productTable";
import { TIdentificationTypes } from "@/types/product";
import { TUser } from "@/db/schemas";
import {
  getProductsByIds,
  getUserBasketProducts,
} from "@/servises/products/helper";
import { TGetBasketProduct } from "@/types/basket";

export const productsService = async (
  identification: TIdentificationTypes | undefined,
  userid?: TUser["id"],
  productIds?: string,
): Promise<TProduct[] | TGetBasketProduct[] | []> => {
  let productsData;
  let products: TProduct[] = [];

  switch (identification) {
    case "home":
      productsData = await fetch(
        "https://dummyjson.com/products?limit=10&skip=10&select=id,title,price,thumbnail",
      );
      break;
    case "search":
      productsData = await fetch("https://dummyjson.com/products/");
      break;

    case "category":
      productsData = await fetch("https://dummyjson.com/products/");
      break;

    case "basket":
      products = await getProductsForBasket(userid, productIds);
      break;
    default:
      productsData = await fetch("https://dummyjson.com/products/");
  }

  if (productsData && "json" in productsData) {
    products = await productsData.json();
  }

  if ("products" in products) {
    const { products: prodData } = products as { products: TProduct[] };
    return prodData;
  }

  if (products.length) return products;

  return [];
};

const getProductsForBasket = async (
  userId?: TUser["id"],
  productIds?: string,
): Promise<TProduct[]> => {
  if (!userId && !productIds) return [];
  let productPromises;

  if (userId) {
    productPromises = await getUserBasketProducts(Number(userId));
  } else {
    if (productIds) {
      const ids = productIds.split(",");
      productPromises = await getProductsByIds(ids);
    }
  }
  return productPromises ?? [];
};
