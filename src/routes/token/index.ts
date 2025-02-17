import { Hono } from "hono";
import { refreshTokenController } from "@/controllers/tokenKontrollers/refreshTokenController";
import { accessTokenController } from "@/controllers/tokenKontrollers/accessTokenController";

export const tokenRout = new Hono();

tokenRout
  // jwt tokens
  .post("/refresh", refreshTokenController)
  .post("/access", accessTokenController);

export default tokenRout;
