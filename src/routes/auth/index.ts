import { Hono } from "hono";
import loginController from "@/controllers/authControllers/loginController";
import registerController from "@/controllers/authControllers/registerController";
import {
  loginValidationSchema,
  registerValidationSchema,
} from "@/routes/auth/validation";
import { zValidator } from "@hono/zod-validator";
import { setCookie } from "hono/cookie";
import { editProfileController } from "@/controllers/authControllers/editProfileController";
import { refreshTokenController } from "@/controllers/authControllers/refreshTokenController";

const authRout = new Hono()
  .post("/login", zValidator("json", loginValidationSchema), loginController)
  .post("/refresh", refreshTokenController)
  .post(
    "/register",
    zValidator("json", registerValidationSchema),
    registerController,
  )
  .post("/edit_user", editProfileController)
  .post("/logout", (c) => {
    setCookie(c, "token", "", {
      httpOnly: true,
      secure: true,
      sameSite: "strict",
      path: "/",
      expires: new Date(0),
    });

    return c.json({ message: "Logged out successfully" });
  });

export default authRout;
