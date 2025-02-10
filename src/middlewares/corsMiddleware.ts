import { cors } from "hono/cors";

export default cors({
  origin: Bun.env.CLIENT_URL! ?? "https://localhost:5173",
  allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  exposeHeaders: ["Authorization", "Content-Type"],
  credentials: true,
});
