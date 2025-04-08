import { index, integer, text, uniqueIndex } from "drizzle-orm/sqlite-core";
import { sqliteTable } from "drizzle-orm/sqlite-core/table";
import { users } from "@/db/schemas/userTable";
import { InferSelectModel } from "drizzle-orm/table";

export const basketTable = sqliteTable(
  "basket",
  {
    id: integer("id").primaryKey({ autoIncrement: true }),
    userId: integer("user_id")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    productId: integer("product_id").notNull(),
    quantity: integer("quantity").notNull(),
    addedAt: text("added_at").notNull().default("CURRENT_TIMESTAMP"),
    updatedAt: text("updated_at").notNull(),
  },
  (table) => [
    index("user_idx").on(table.userId),
    uniqueIndex("user_product_idx").on(table.userId, table.productId),
  ],
);

export type TBasket = InferSelectModel<typeof basketTable>;
