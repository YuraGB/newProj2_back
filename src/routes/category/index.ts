import { Hono } from "hono";
import {
  categoryController,
  categoryListController,
} from "@/controllers/categoryController";

const categoryRoute = new Hono();

categoryRoute.get("/category/:categoryName", categoryController);
categoryRoute.get("/category-list", categoryListController);

export default categoryRoute;
