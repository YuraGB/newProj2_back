import { db } from "@/db/drizzle";
import { TUser, users } from "@/db/schemas/userTable";
import { eq } from "drizzle-orm/sql/expressions/conditions";
import { TUserWithoutPassword } from "@/types/auth";

export const profileService = async (
  id: TUser["id"],
): Promise<TUserWithoutPassword | { error: string }> => {
  try {
    const [user] = await db
      .select()
      .from(users)
      .where(eq(users.id, id))
      .execute();

    if (!user) {
      return { error: "User not found" };
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password, ...userWithoutPassword } = user;
    return userWithoutPassword;
  } catch (e) {
    return { error: (e as Error).message };
  }
};
