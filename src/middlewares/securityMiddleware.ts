import { Context, Next } from "hono";

const securityMiddleware = async (c: Context, next: Next) => {
  // XSS-attacks
  c.header(
    "Content-Security-Policy",
    `default-src 'self'; script-src 'self' https://localhost:3000`,
  );

  // Clickjacking
  c.header("X-Frame-Options", "DENY");
  await next();
};

export default securityMiddleware;
