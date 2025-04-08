import { Context } from "hono";
import { getOrderService } from "@/servises/order/getOrderService";
import { getCookie } from "hono/cookie";

export const getOrderController = async (c: Context) => {
  const user = c.get("user") as { id: string } | undefined;
  console.log("user", user);
  if (!user?.id) {
    return c.json(
      {
        error: "Unauthorized: user missing",
        canRefresh: getCookie(c, "refreshToken"),
      },
      401,
    );
  }

  const orderIdParam = c.req.param("id");
  const orderId = Number(orderIdParam);

  if (!orderIdParam || isNaN(orderId)) {
    return c.json({ error: "Invalid or missing order ID" }, 400);
  }

  const order = await getOrderService(orderId);

  if (!order) {
    return c.json({ error: "Order not found" }, 404);
  }

  if (order.userId !== Number(user.id)) {
    console.log("User ID:", user.id);
    console.log("Order User ID:", order.userId);
    return c.json({ error: "Forbidden: access denied" }, 403);
  }

  return c.json(order, 200);
};
