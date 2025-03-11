import { basketService } from "@/servises/basket";
import { singleProductService } from "@/servises/product";
import { TProduct } from "@/db/schemas";

export const getUserBasketProducts = async (
  userId: number,
): Promise<(TProduct & { quantity: number })[]> => {
  const savedProducts = await basketService.getUserBasketProducts(userId);

  if (!savedProducts?.length) return [];

  const results = await Promise.allSettled(
    savedProducts.map(({ productId }) => singleProductService(+productId)),
  );

  return results
    .filter(
      (result): result is PromiseFulfilledResult<TProduct | null> =>
        result.status === "fulfilled" && result.value !== null,
    )
    .map((result) => {
      const product = result.value!;
      const quantity = savedProducts.find(
        ({ productId }) => productId === product.id,
      )?.quantity;

      return { ...product, quantity: quantity ?? 1 };
    });
};

export const getProductsByIds = async (
  productIds: string[],
): Promise<Awaited<TProduct>[]> => {
  const results = await Promise.allSettled(
    productIds.map((productId) => singleProductService(+productId)),
  );

  if (!results) return [];

  return results.reduce<(TProduct & { quantity: number })[]>((acc, result) => {
    if (result.status === "fulfilled" && result.value !== null) {
      const product = result.value;
      acc.push({ ...product, quantity: 1 });
    }
    return acc;
  }, []);
};
