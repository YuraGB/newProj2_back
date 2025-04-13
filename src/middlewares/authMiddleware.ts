import { Context } from "hono";
import { verify } from "hono/jwt";

const authMiddleware = async (c: Context, next: () => Promise<void>) => {
  const authHeader = c.req.header("Authorization");

  if (!authHeader) {
    return await next();
  }

  const token = authHeader.split(" ")[1];
  try {
    const payload = await verify(token, process.env.JWT_SECRET!);

    c.set("user", payload);
    return await next();
  } catch (e) {
    console.log("error", e);
    return await next();
  }
};

export default authMiddleware;
