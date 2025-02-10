import { Context } from "hono";
import { verify } from "hono/jwt";
import { getCookie } from "hono/cookie";

const jwtMiddleware = async (c: Context, next: () => Promise<void>) => {
  const token = getCookie(c, "token");
  if (!token) return c.json({ error: "Unauthorized" }, 401);

  try {
    const payload = await verify(token, process.env.JWT_SECRET!);

    c.set("user", payload);
    await next();
  } catch {
    return c.json({ error: "Invalid token" }, 401);
  }
};

export default jwtMiddleware;
