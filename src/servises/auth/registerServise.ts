import { db } from "@/db/drizzle";
import { users } from "@/db/schemas/userTable";
import bcrypt from "bcryptjs";
import { TNewUser, TUserWithoutPassword } from "@/types";
import dotenv from "dotenv";
dotenv.config({
  path: ".env",
});

export type RegisterServiceResult = {
  user?: TUserWithoutPassword;
  error?: string;
};

export const registerService = async ({
  email,
  password,
  userName,
}: TNewUser): Promise<RegisterServiceResult> => {
  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    const [newUser] = await db
      .insert(users)
      .values({ email: email, password: hashedPassword, userName: userName })
      .returning();

    if (!newUser) {
      return { error: "User not created" };
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password, ...userWithoutPassword } = newUser;
    return { user: userWithoutPassword };
  } catch (e) {
    return { error: (e as Error).message };
  }
};
