import { Context } from "hono";
import { profileService } from "@/servises/profile/profileService";

export const profileController = async (c: Context) => {
  const userSession = c.get("user");

  if (!userSession) {
    return c.json({ error: "Unauthorized" }, 401);
  }

  const user = await profileService(userSession.id);

  if (!user) {
    return c.json({ error: "User not found" }, 404);
  }

  if ("error" in user) {
    return c.json({ error: user.error }, 500);
  }

  return c.json(user);
};

export default profileController;
