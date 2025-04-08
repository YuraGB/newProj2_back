import { Hono } from "hono";
import { postsController } from "@/controllers/postsController/insex";

const postsRoute = new Hono();

postsRoute.get("posts/:identifier", postsController);

export default postsRoute;
