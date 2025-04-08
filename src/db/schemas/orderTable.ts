import { sqliteTable, text, integer, real } from "drizzle-orm/sqlite-core";
import { relations } from "drizzle-orm";
import { InferSelectModel } from "drizzle-orm/table";
import { users } from "@/db/schemas/userTable";

export const orders = sqliteTable("orders", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  email: text("email").notNull(),

  userId: integer("userId").references(() => users.id),

  username: text("username").notNull(),
  lastname: text("lastname").notNull(),

  address: text("address").notNull(),
  city: text("city").notNull(),
  state: text("state").notNull(),
  zip: text("zip").notNull(),

  paymentType: text("payment_type", { enum: ["card", "cash"] }).notNull(),
  createdAt: text("created_at").default(new Date().toISOString()),
});

export const orderProducts = sqliteTable("order_products", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  orderId: integer("order_id").notNull(),
  productId: integer("product_id").notNull(),
  title: text("title").notNull(),
  thumbnail: text("thumbnail").notNull(),
  price: real("price").notNull(),
  quantity: integer("quantity").notNull(),
});

export const orderRelations = relations(orders, ({ many }) => ({
  products: many(orderProducts),
}));

export const orderProductRelations = relations(orderProducts, ({ one }) => ({
  order: one(orders, {
    fields: [orderProducts.orderId],
    references: [orders.id],
  }),
}));

export type TOrder = InferSelectModel<typeof orders>;
export type TOrderProducts = InferSelectModel<typeof orderProducts>;
export type TOrderWithProducts = TOrder & {
  products: TOrderProducts[];
};
