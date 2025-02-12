import { Hono } from "hono";
import jwtMiddleware from "@/middlewares/jwtMiddleware";
import { serveStatic } from "hono/bun";
import routes, { RouteType } from "@/routes";
import corsMiddleware from "@/middlewares/corsMiddleware";
import { compress } from "hono/compress";
import { cacheMiddleware } from "@/middlewares/cacheMiddleware";

const app = new Hono();
app
  .use(compress({ encoding: "gzip" }))
  .use("*", cacheMiddleware)
  .use("*", corsMiddleware)
  .get("/test", (c) => {
    c.status(200);
    return c.json({ test: "test" });
  })
  .use("/api/v1/profile", jwtMiddleware)
  .route("/api/v1", routes)
  .use("*", serveStatic({ root: "../static" }));

type AppType = RouteType;

export type { AppType };

export default app;
