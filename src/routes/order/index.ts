import { Hono } from "hono";
import { zValidator } from "@hono/zod-validator";
import { orderFormSchema } from "@/routes/order/validation";
import { orderPurchaseSetController } from "@/controllers/orderControllers/orderPurcaseSetController";
import { getOrderController } from "@/controllers/orderControllers/getOrderController";
import { getAllOrdersController } from "@/controllers/orderControllers/getAllOrdersController";

const orderRoute = new Hono();

orderRoute.post(
  "purchase",
  zValidator("json", orderFormSchema),
  orderPurchaseSetController,
);

orderRoute.get("success/:id", getOrderController);
orderRoute.get("orders/:id", getOrderController);
orderRoute.get("orders", getAllOrdersController);

export default orderRoute;
