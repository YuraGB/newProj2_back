import { Context } from "hono";
import { getAllOrdersService } from "@/servises/order/getAllOrdersService";
import { getCookie } from "hono/cookie";

export const getAllOrdersController = async (c: Context) => {
  const user = c.get("user") as { id: string } | undefined;
  if (!user?.id) {
    return c.json(
      {
        error: "Unauthorized: user missing",
        canRefresh: getCookie(c, "refreshToken"),
      },
      401,
    );
  }

  const orders = await getAllOrdersService(+user.id);

  if (!orders || orders.length === 0) {
    return c.json({ error: "Orders not found" }, 404);
  }

  return c.json(orders, 200);
};
