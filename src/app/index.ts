import { Hono } from "hono";
import jwtMiddleware from "@/middlewares/jwtMiddleware";
import { serveStatic } from "hono/bun";
import routes, { RouteType } from "@/routes";
import corsMiddleware from "@/middlewares/corsMiddleware";
import { compress } from "hono/compress";
import { cacheMiddleware } from "@/middlewares/cacheMiddleware";
import securityMiddleware from "@/middlewares/securityMiddleware";

const app = new Hono();

app
  .use(compress({ encoding: "gzip" }))
  // middlewares
  .use("*", cacheMiddleware)
  .use("*", corsMiddleware)
  .use("*", securityMiddleware)
  .use("/api/v1/profile", jwtMiddleware)
  // routes for api
  .route("/api/v1", routes)
  //static routes
  .use("/assets/*", serveStatic({ root: "../static" }))
  .use("/vite.svg", serveStatic({ root: "../static" }))
  .use("*", async (c, next) => {
    if (c.req.path.includes(".")) {
      return next();
    }

    return serveStatic({ root: "../static", path: "index.html" })(c, next);
  });

type AppType = RouteType;

export type { AppType };

export default app;
