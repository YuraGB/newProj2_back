import { AppType } from "@/app";
import { TUser } from "@/db/schemas";

export type TNewUser = {
  email: string;
  password: string;
  userName: string;
};

export type TUserWithoutPassword = Omit<TUser, "password">;

export type { AppType };
