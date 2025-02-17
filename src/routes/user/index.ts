import { Hono } from "hono";
import { userController } from "@/controllers/userController";

const userRoute = new Hono();

userRoute.get("/user", userController);

export default userRoute;
