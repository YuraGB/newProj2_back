import { Hono } from "hono";
import profileRoute from "@/routes/profile";
import authRoute from "@/routes/auth";

const app = new Hono();
app.route("/", profileRoute);
app.route("/", authRoute);

export type RouteType = typeof app;

export default app;
