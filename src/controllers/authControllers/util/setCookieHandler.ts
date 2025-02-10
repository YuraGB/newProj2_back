import { TUser } from "@/db/schemas";
import { sign } from "hono/jwt";
import { setCookie } from "hono/cookie";
import { Context } from "hono";

const setCookieHandler = async (c: Context, user: TUser): Promise<void> => {
  const tokenTTL = 60 * 5;

  const token = await sign(
    {
      id: user.id,
      username: user.userName,
      exp: Math.floor(Date.now() / 1000) + tokenTTL,
    },
    Bun.env.JWT_SECRET!,
  );

  setCookie(c, "token", token, {
    httpOnly: true,
    maxAge: tokenTTL,
    expires: new Date(Date.now() + tokenTTL * 1000),
    secure: true,
    sameSite: "None",
  });
};

export default setCookieHandler;
