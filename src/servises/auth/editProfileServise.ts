import { TUserWithoutPassword } from "@/types/auth";
import { db } from "@/db/drizzle";
import { users } from "@/db/schemas";
import { eq } from "drizzle-orm/sql/expressions/conditions";

export const editProfileService = async (
  data: Omit<TUserWithoutPassword, "gender">,
) => {
  const { userName, email, id } = data;
  try {
    return await db.transaction(async (tx) => {
      const [result] = await tx
        .update(users)
        .set({ userName, email })
        .where(eq(users.id, id))
        .returning();

      if (!result) {
        return { error: "Transaction of updating failed" };
      }

      return result;
    });
  } catch (error) {
    return { error: "Transaction failed: " + (error as Error).message };
  }
};
