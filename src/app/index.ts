import { Hono } from "hono";
import jwtMiddleware from "@/middlewares/jwtMiddleware";
import { serveStatic } from "hono/bun";
import routes, { RouteType } from "@/routes";
import corsMiddleware from "@/middlewares/corsMiddleware";

const app = new Hono();
app
  .use("*", corsMiddleware)
  .use("/api/v1/profile", jwtMiddleware)
  .route("/api/v1", routes)
  .use("*", serveStatic({ root: "../frontend/dist" }));

type AppType = RouteType;

export type { AppType };

export default app;
