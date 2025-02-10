import { Hono } from "hono";
import loginController from "@/controllers/authControllers/loginController";
import registerController from "@/controllers/authControllers/registerController";
import {
  loginValidationSchema,
  registerValidationSchema,
} from "@/routes/auth/validation";
import { zValidator } from "@hono/zod-validator";

const authRout = new Hono()
  .post("/login", zValidator("json", loginValidationSchema), loginController)
  .post(
    "/register",
    zValidator("json", registerValidationSchema),
    registerController,
  );

export default authRout;
