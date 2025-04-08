import { TUserWithoutPassword } from "@/types/auth";
import { sign } from "hono/jwt";

export const getAccessToken = async (user: TUserWithoutPassword) => {
  return await sign(
    {
      id: user.id,
      username: user.userName,
      exp: Math.floor(Date.now() / 1000) + 5 * 60,
    },
    Bun.env.JWT_SECRET!,
  );
};
