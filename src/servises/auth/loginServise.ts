import bcrypt from "bcryptjs";
import { db } from "@/db/drizzle";
import { users } from "@/db/schemas/userTable";
import { eq } from "drizzle-orm/sql/expressions/conditions";

export const loginService = async (email: string, password: string) => {
  try {
    const [user] = await db
      .select()
      .from(users)
      .where(eq(users.email, email))
      .execute();

    if (!user) return { error: "User not found" };

    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid) return { error: "Invalid password" };

    return user;
  } catch (e) {
    return { error: (e as Error).message };
  }
};
