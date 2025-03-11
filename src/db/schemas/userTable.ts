import { sqliteTable } from "drizzle-orm/sqlite-core/table";
import { integer, text, uniqueIndex } from "drizzle-orm/sqlite-core";
import { InferSelectModel } from "drizzle-orm/table";

export const users = sqliteTable(
  "users",
  {
    id: integer("id").primaryKey(),
    userName: text("username").notNull(),
    email: text("email").unique().notNull(),
    password: text("password").notNull(),
    gender: text().default("human"),
  },
  (table) => [uniqueIndex("user_email").on(table.email)],
);

export type TUser = InferSelectModel<typeof users>;
