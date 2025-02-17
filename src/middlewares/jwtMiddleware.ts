import { Context } from "hono";
import { verify } from "hono/jwt";
import { getCookie } from "hono/cookie";

const jwtMiddleware = async (c: Context, next: () => Promise<void>) => {
  const authHeader = c.req.header("Authorization");
  const refreshToken = getCookie(c, "refreshToken");

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return c.json({ message: "Unauthorized", canRefresh: !!refreshToken }, 401);
  }

  const token = authHeader.split(" ")[1];
  try {
    const payload = await verify(token, process.env.JWT_SECRET!);

    c.set("user", payload);
    await next();
  } catch {
    return c.json({ error: "Invalid token" }, 401);
  }
};

export default jwtMiddleware;
