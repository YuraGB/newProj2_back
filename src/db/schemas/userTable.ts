import { sqliteTable } from "drizzle-orm/sqlite-core/table";
import { integer, text } from "drizzle-orm/sqlite-core";
import { InferSelectModel } from "drizzle-orm/table";

export const users = sqliteTable("users", {
  id: integer("id").primaryKey(),
  userName: text("username").notNull(),
  email: text("email").unique().notNull(),
  password: text("password").notNull(),
  gender: text().default("human"),
});

export type TUser = InferSelectModel<typeof users>;
