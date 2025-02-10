import { Hono } from "hono";
import profileController from "@/controllers/profileController";

const profileRoute = new Hono().get("/profile", (c) => {
  return profileController(c);
});

export default profileRoute;
