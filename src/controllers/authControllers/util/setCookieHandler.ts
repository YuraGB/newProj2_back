import { sign } from "hono/jwt";
import { setCookie } from "hono/cookie";
import { Context } from "hono";
import { TUserWithoutPassword } from "@/types/auth";

const setCookieHandler = async (
  c: Context,
  user: TUserWithoutPassword,
): Promise<string> => {
  const tokenTTL = 60;

  // jwt
  const refreshToken = await sign(
    {
      id: user.id,
      username: user.userName,
      exp: (Math.floor(Date.now() / 1000) + tokenTTL + 10) * 1000,
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
    maxAge: tokenTTL * 10000,
    expires: new Date(Date.now() + tokenTTL * 10000),
    secure: true,
    sameSite: "None",
  });

  return accessToken;
};

export default setCookieHandler;
