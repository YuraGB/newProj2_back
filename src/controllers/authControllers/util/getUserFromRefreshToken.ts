import { verify } from "hono/jwt";
import { profileService } from "@/servises/profile/profileService";

export const getUserFromRefreshToken = async (
  refreshToken: string | undefined,
) => {
  if (!refreshToken) {
    return { error: "Refresh token is missing or expired" };
  }

  let userId: string | unknown | undefined;
  try {
    const payload = await verify(refreshToken, process.env.JWT_SECRET!);

    if (!payload || !payload.id) {
      return { error: "Invalid refresh token" };
    }

    userId = payload.id;
  } catch {
    return { error: "Invalid token" };
  }

  const user = await profileService(Number(userId));

  if (!user || "error" in user) {
    return { error: "User not found" };
  }

  return user;
};
