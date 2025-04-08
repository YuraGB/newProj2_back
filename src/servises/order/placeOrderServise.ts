import { TPlaceOrder } from "@/types/order";
import { db } from "@/db/drizzle";
import { orderProducts, orders, TOrderWithProducts } from "@/db/schemas";

export const placeOrderService = async (
  data: TPlaceOrder,
  userId: number | undefined,
): Promise<TOrderWithProducts | null> => {
  const orderData: TPlaceOrder & { userId: number | null } = {
    ...data,
    userId: userId ?? null,
    products: data.products,
  };

  try {
    return await db.transaction(async (tx) => {
      const [order] = await tx
        .insert(orders)
        .values({
          userId: orderData.userId,
          email: orderData.user.email,
          username: orderData.user.username,
          lastname: orderData.user.lastname,
          address: orderData.address.address,
          city: orderData.address.city,
          state: orderData.address.state,
          zip: orderData.address.zip,
          paymentType: orderData.paymentMethod.type,
        })
        .returning();

      const productInserts = orderData.products.map((product) => ({
        orderId: order.id,
        productId: product.id,
        title: product.title,
        thumbnail: product.thumbnail,
        price: product.price,
        quantity: product.quantity,
      }));

      const products = await tx
        .insert(orderProducts)
        .values(productInserts)
        .returning();

      return {
        ...order,
        products,
      };
    });
  } catch (e) {
    console.log(e);
    return null;
  }
};
