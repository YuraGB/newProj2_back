import { Context } from "hono";
import { getCookie } from "hono/cookie";
import { getUserFromRefreshToken } from "@/controllers/authControllers/util/getUserFromRefreshToken";
import { getAccessToken } from "@/controllers/authControllers/util/getAccessToken";

export const userController = async (c: Context) => {
  const refreshToken = getCookie(c, "refreshToken");
  if (refreshToken) {
    const user = await getUserFromRefreshToken(refreshToken);
    if ("error" in user) {
      return c.json({ user: null });
    }
    const accessToken = await getAccessToken(user);

    return c.json({ user, accessToken });
  }
  return c.json({ user: null, accessToken: null });
};
