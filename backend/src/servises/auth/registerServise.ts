import { db } from "@/db/drizzle";
import { TUser, users } from "@/db/schemas/userTable";
import bcrypt from "bcryptjs";
import { TNewUser } from "@/types";
import dotenv from "dotenv";
dotenv.config({
  path: ".env",
});

export const registerService = async ({
  email,
  password,
  userName,
}: TNewUser): Promise<TUser | { error: string }> => {
  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    const [newUser] = await db
      .insert(users)
      .values({ email: email, password: hashedPassword, userName: userName })
      .returning();

    if (!newUser) {
      return { error: "User not created" };
    }

    return newUser;
  } catch (e) {
    return { error: (e as Error).message };
  }
};

export type RegisterServiceResult = ReturnType<typeof registerService>;
