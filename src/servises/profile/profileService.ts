import { db } from "@/db/drizzle";
import { TUser, users } from "@/db/schemas/userTable";
import { eq } from "drizzle-orm/sql/expressions/conditions";

export const profileService = async (
  id: TUser["id"],
): Promise<TUser | { error: string }> => {
  try {
    const [user] = await db
      .select()
      .from(users)
      .where(eq(users.id, id))
      .execute();

    if (!user) {
      return { error: "User not found" };
    }

    return user;
  } catch (e) {
    return { error: (e as Error).message };
  }
};
