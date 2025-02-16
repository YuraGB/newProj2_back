import { sign } from "hono/jwt";
import { setCookie } from "hono/cookie";
import { Context } from "hono";
import { TUserWithoutPassword } from "@/types";

const setCookieHandler = async (
  c: Context,
  user: TUserWithoutPassword,
): Promise<string> => {
  const tokenTTL = 60 * 5;

  // jwt
  const refreshToken = await sign(
    {
      id: user.id,
      username: user.userName,
      exp: Math.floor(Date.now() / 1000) + tokenTTL * 100,
    },
    Bun.env.JWT_SECRET!,
  );

  const accessToken = await sign(
    {
      id: user.id,
      username: user.userName,
      exp: Math.floor(Date.now() / 1000) + tokenTTL,
    },
    Bun.env.JWT_SECRET!,
  );

  // refresh token into cookie
  setCookie(c, "refreshToken", refreshToken, {
    httpOnly: true,
    maxAge: tokenTTL,
    expires: new Date(Date.now() + tokenTTL * 10000),
    secure: true,
    sameSite: "None",
  });

  return accessToken;
};

export default setCookieHandler;
