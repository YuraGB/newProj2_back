import { Context } from "hono";
import { loginService } from "@/servises/auth/loginServise";
import setCookieHandler from "@/controllers/authControllers/util/setCookieHandler";

export const loginController = async (c: Context) => {
  const { email, password } = await c.req.json();

  if (!email || !password) return c.json({ error: "Missing credentials" }, 400);

  const result = await loginService(email, password);

  // Check if the result contains an error, otherwise return user info
  if ("error" in result) {
    return c.json(result, 401);
  }

  // set jwt into cookies
  await setCookieHandler(c, result);

  return c.json(result, 200);
};

export default loginController;
