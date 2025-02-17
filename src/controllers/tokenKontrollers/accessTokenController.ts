import { sign } from "hono/jwt";
import { Context } from "hono";
import { getCookie } from "hono/cookie";
import { getUserFromRefreshToken } from "@/controllers/authControllers/util/getUserFromRefreshToken";

export const accessTokenController = async (c: Context) => {
  const refreshToken = getCookie(c, "refreshToken");

  const user = await getUserFromRefreshToken(refreshToken);

  if (!user || "error" in user) {
    return c.json({ error: user.error }, 401);
  }

  const accessToken = await sign(
    {
      id: user.id,
      username: user.userName,
      exp: Math.floor(Date.now() / 1000) + 5 * 60,
    },
    Bun.env.JWT_SECRET!,
  );

  return c.json({ accessToken });
};
