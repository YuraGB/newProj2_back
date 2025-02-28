import { Hono } from "hono";
import { productsController } from "@/controllers/productsController";

const productsRoute = new Hono();

productsRoute.get("/products", productsController);

export default productsRoute;
