import { basketTable, TBasket, TUser } from "@/db/schemas";
import { and, eq } from "drizzle-orm/sql/expressions/conditions";
import { db } from "@/db/drizzle";
import { TGetBasketProduct } from "@/types/basket";

/**
 * Basket service
 * @class BasketService
 */
class BasketService {
  async getUserBasketProducts(
    userId: TUser["id"],
  ): Promise<Array<TGetBasketProduct> | null> {
    try {
      return await db
        .select({
          productId: basketTable.productId,
          quantity: basketTable.quantity,
        })
        .from(basketTable)
        .where(eq(basketTable.userId, userId));
    } catch (e) {
      console.log("Error in basketService: ", e);
      return null;
    }
  }

  /**
   * Add product to basket
   * @param {number} userId
   * @param {number} productId
   * @param {number} quantity
   * @returns {Promise<TBasket | []>}
   */
  async addProductToBasket(
    userId: TUser["id"],
    productId: TBasket["productId"],
    quantity: TBasket["quantity"],
  ): Promise<TBasket | []> {
    try {
      const [basket] = await db
        .insert(basketTable)
        .values({
          userId,
          productId,
          quantity,
          addedAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        })
        .returning();

      return basket;
    } catch (e) {
      console.log("Error in basketService: ", e);
      return [];
    }
  }

  /**
   * Update product in basket
   * @param {number} userId
   * @param {number} productId
   * @param {number} quantity
   * @returns {Promise<TBasket | null>}
   */
  async updateProductInBasket(
    userId: TUser["id"],
    productId: TBasket["productId"],
    quantity: TBasket["quantity"],
  ): Promise<TBasket | null> {
    try {
      const [updatedProduct] = await db
        .update(basketTable)
        .set({ quantity })
        .where(
          and(
            eq(basketTable.userId, userId),
            eq(basketTable.productId, productId),
          ),
        )
        .returning();

      return updatedProduct;
    } catch (e) {
      console.log("Error in basketService: ", e);
      return null;
    }
  }

  /**
   * Merge basket with existing products
   * @param {number} userId
   * @param {Array<TGetBasketProduct>} basket
   * @returns {Promise<Array<TGetBasketProduct> | []>}
   */
  async mergeBasket(
    userId: TUser["id"],
    basket: TGetBasketProduct[],
  ): Promise<TGetBasketProduct[] | []> {
    try {
      console.log("here", userId);
      // Get existing users basket
      const existingBasket = await this.getUserBasketProducts(userId);

      if (!existingBasket) {
        return [];
      }

      // merge
      for (const product of basket) {
        const existingProduct = existingBasket.find(
          (item) => item.productId === product.productId,
        );

        if (existingProduct) {
          // if product exists update it
          await this.updateProductInBasket(
            userId,
            product.productId,
            product.quantity,
          );
        } else {
          // if product doesn't exist - add
          await this.addProductToBasket(
            userId,
            product.productId,
            product.quantity,
          );
        }
      }

      // return updated basket
      return (await this.getUserBasketProducts(userId)) ?? [];
    } catch (e) {
      console.log("Error in mergeBasket: ", e);
      return [];
    }
  }

  /**
   * Remove basket for user
   * @param {number}userId
   * @returns {Promise<{id: number} | null>}
   */
  async removeBasket(userId: TUser["id"]): Promise<{ id: number } | null> {
    try {
      const [removedBasket] = await db
        .delete(basketTable)
        .where(eq(basketTable.userId, userId))
        .returning({ id: basketTable.id });
      console.log("removedBasket", removedBasket);
      return removedBasket;
    } catch (e) {
      console.log("Error in removeBasket: ", e);
      return null;
    }
  }
}

export const basketService = new BasketService();
