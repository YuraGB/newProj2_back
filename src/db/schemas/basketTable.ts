import {
  index,
  integer,
  primaryKey,
  text,
  uniqueIndex,
} from "drizzle-orm/sqlite-core";
import { sqliteTable } from "drizzle-orm/sqlite-core/table";

export const basketTable = sqliteTable(
  "basket",
  {
    id: integer("id").primaryKey({ autoIncrement: true }),
    userId: integer("user_id").notNull(),
    productId: integer("product_id").notNull(),
    quantity: integer("quantity").notNull(),
    addedAt: text("added_at").notNull(),
    updatedAt: text("updated_at").notNull(),
  },
  (table) => [
    index("user_idx").on(table.userId),
    uniqueIndex("product_idx").on(table.productId),
  ],
);
