import { Context } from "hono";
import { editProfileService } from "@/servises/auth/editProfileServise";

export const editProfileController = async (c: Context) => {
  const { email, userName, id } = await c.req.json();
  if (!email || !userName || !id) {
    return c.json({ error: "Missing credentials" }, 400);
  }

  const result = await editProfileService({ email, userName, id });

  if ("error" in result) {
    return c.json({ error: "Couldn't update the user" }, 500);
  }

  return c.json(result, 200);
};
