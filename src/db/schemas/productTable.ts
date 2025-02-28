import { sqliteTable, text, integer, real } from "drizzle-orm/sqlite-core";
import { primaryKey } from "drizzle-orm/sqlite-core";
import { InferSelectModel } from "drizzle-orm/table";

// Головна таблиця продуктів
export const productTable = sqliteTable("product", {
  id: integer("id").primaryKey(),
  title: text("title").notNull(),
  description: text("description"),
  category: text("category").notNull(),
  price: real("price").notNull(),
  discountPercentage: real("discount_percentage"),
  rating: real("rating"),
  stock: integer("stock"),
  brand: text("brand"),
  sku: text("sku"),
  weight: real("weight"),
  warrantyInformation: text("warranty_information"),
  shippingInformation: text("shipping_information"),
  availabilityStatus: text("availability_status"),
  returnPolicy: text("return_policy"),
  minimumOrderQuantity: integer("minimum_order_quantity"),
  createdAt: text("created_at").notNull(),
  updatedAt: text("updated_at").notNull(),
  barcode: text("barcode"),
  qrCode: text("qr_code"),
  thumbnail: text("thumbnail"),
});

export type TProduct = InferSelectModel<typeof productTable>;

// Таблиця тегів продукту (many-to-many)
export const productTags = sqliteTable(
  "product_tags",
  {
    productId: integer("product_id").notNull(),
    tag: text("tag").notNull(),
  },
  (t) => ({
    pk: primaryKey({ columns: [t.productId, t.tag] }),
  }),
);

// Таблиця розмірів продукту (one-to-one)
export const productDimensions = sqliteTable("product_dimensions", {
  productId: integer("product_id").primaryKey(),
  width: real("width").notNull(),
  height: real("height").notNull(),
  depth: real("depth").notNull(),
});

// Таблиця зображень продукту (one-to-many)
export const productImages = sqliteTable("product_images", {
  id: integer("id").primaryKey(),
  productId: integer("product_id").notNull(),
  url: text("url").notNull(),
});

// Таблиця відгуків (one-to-many)
export const productReviews = sqliteTable("product_reviews", {
  id: integer("id").primaryKey(),
  productId: integer("product_id").notNull(),
  rating: integer("rating").notNull(),
  comment: text("comment"),
  date: text("date").notNull(),
  reviewerName: text("reviewer_name").notNull(),
  reviewerEmail: text("reviewer_email").notNull(),
});
