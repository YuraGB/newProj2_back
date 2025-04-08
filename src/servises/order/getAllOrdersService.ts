import { db } from "@/db/drizzle";
import { orderProducts, orders, TOrderWithProducts } from "@/db/schemas";
import { eq } from "drizzle-orm/sql/expressions/conditions";

export const getAllOrdersService = async (
  id: number,
): Promise<TOrderWithProducts[] | null> => {
  try {
    return await db.transaction(async (tx) => {
      const ordersData = await tx
        .select()
        .from(orders)
        .where(eq(orders.userId, id));

      if (!ordersData?.length) {
        return null;
      }

      return await Promise.all(
        ordersData.map(async (order) => {
          const products = await tx
            .select()
            .from(orderProducts)
            .where(eq(orderProducts.orderId, order.id));

          return {
            ...order,
            products,
          };
        }),
      );
    });
  } catch (e) {
    console.log(e);
    return null;
  }
};
