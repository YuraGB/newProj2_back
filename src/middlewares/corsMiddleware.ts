import { cors } from "hono/cors";

export default cors({
  origin: Bun.env.CLIENT_URL! ?? "https://localhost:5174",
  allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS", "PATCH"],
  exposeHeaders: ["Authorization", "Content-Type"],
  credentials: true,
});
