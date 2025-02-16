import { Context } from "hono";
import { registerService } from "@/servises/auth/registerServise";
import setCookieHandler from "@/controllers/authControllers/util/setCookieHandler";

export const registerController = async (c: Context) => {
  const { userName, password, email } = await c.req.json();

  if (!userName || !password || !email)
    return c.json({ error: "Missing data" }, 400);

  const result = await registerService({ userName, password, email });

  // Check if the result contains an error, otherwise return user info
  if ("error" in result) {
    return c.json(result, 400); // Return 400 for errors
  }

  const { user } = result;

  if (!user) {
    return c.json({ error: "User not created" }, 400);
  }

  // generate jwt (access and refresh) tokens
  // refresh set into cookies
  // return access token
  const accessToken = await setCookieHandler(c, user);

  return c.json({ user: user, accessToken }, 201);
};

export default registerController;
