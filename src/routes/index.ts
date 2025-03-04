import { Hono } from "hono";
import profileRoute from "@/routes/profile";
import authRoute from "@/routes/auth";
import userRoute from "@/routes/user";
import productRoute from "@/routes/products";
import videoRoute from "@/routes/video";

const app = new Hono();
app.route("/", profileRoute);
app.route("/", userRoute);
app.route("/", authRoute);
app.route("/", productRoute);
app.route("/", videoRoute);

export type RouteType = typeof app;

export default app;
