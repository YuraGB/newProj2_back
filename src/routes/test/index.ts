import { Context } from "hono";

export const testRoute = (c: Context) => c.json({ test: "test" });
