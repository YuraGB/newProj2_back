import { Context } from "hono";
import { getCookie } from "hono/cookie";
import setCookieHandler from "@/controllers/authControllers/util/setCookieHandler";
import { verify } from "hono/jwt";
import { profileService } from "@/servises/profile/profileService";

export const refreshTokenController = async (c: Context) => {
  const refreshToken = getCookie(c, "refreshToken");

  if (!refreshToken) {
    return c.json({ error: "Refresh token is missing or expired" }, 401);
  }

  let userId: string | unknown | undefined;
  try {
    const payload = await verify(refreshToken, process.env.JWT_SECRET!);

    if (!payload || !payload.id) {
      return c.json({ message: "Invalid refresh token" }, 403);
    }

    userId = payload.id;
  } catch {
    return c.json({ error: "Invalid token" }, 401);
  }

  const user = await profileService(Number(userId));

  if (!user || "error" in user) {
    return c.json({ error: "User not found" }, 401);
  }

  const newAccessToken = await setCookieHandler(c, user);

  return c.json({ user, accessToken: newAccessToken }, 200);
};
