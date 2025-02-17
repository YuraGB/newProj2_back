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
  .use("/api/v1/profile", jwtMiddleware)
  .route("/api/v1", routes);

app.use("/assets/*", serveStatic({ root: "../static" }));
app.use("/vite.svg", serveStatic({ root: "../static" }));
app.use("*", async (c, next) => {
  if (c.req.path.includes(".")) {
    return next();
  }

  return serveStatic({ root: "../static", path: "index.html" })(c, next);
});

type AppType = RouteType;

export type { AppType };

export default app;
