import { Hono } from "hono";
import { productsController } from "@/controllers/productsController";
import { productPageController } from "@/controllers/productPageController";

const productsRoute = new Hono();

productsRoute.get("/products", productsController);
productsRoute.get("/products/:id", productPageController);

export default productsRoute;
