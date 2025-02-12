import { Context } from "hono";

export const cacheMiddleware = (
  c: Context,
  next: () => Promise<void | Response>,
) => {
  c.header("Cache-Control", "public, max-age=31536000, immutable"); // 1 year
  return next();
};
