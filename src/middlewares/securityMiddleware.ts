import { Context, Next } from "hono";

const securityMiddleware = async (c: Context, next: Next) => {
  // XSS-attacks
  c.header(
    "Content-Security-Policy",
    "default-src 'self';script-src 'self' https://localhost:3000;style-src 'self' 'unsafe-inline';img-src 'self' https://cdn.dummyjson.com https://s3-us-west-2.amazonaws.com data: blob:;media-src 'self' https://localhost:3000 https://cdn.dummyjson.com blob:;font-src 'self' data:;connect-src 'self' https://cdn.dummyjson.com;",
  );

  // Clickjacking
  c.header("X-Frame-Options", "DENY");
  await next();
};

export default securityMiddleware;
