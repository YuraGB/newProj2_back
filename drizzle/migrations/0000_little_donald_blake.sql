CREATE TABLE `basket` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`user_id` integer NOT NULL,
	`product_id` integer NOT NULL,
	`quantity` integer NOT NULL,
	`added_at` text DEFAULT 'CURRENT_TIMESTAMP' NOT NULL,
	`updated_at` text NOT NULL,
	FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
CREATE INDEX `user_idx` ON `basket` (`user_id`);--> statement-breakpoint
CREATE UNIQUE INDEX `user_product_idx` ON `basket` (`user_id`,`product_id`);--> statement-breakpoint
CREATE TABLE `users` (
	`id` integer PRIMARY KEY NOT NULL,
	`username` text NOT NULL,
	`email` text NOT NULL,
	`password` text NOT NULL,
	`gender` text DEFAULT 'human'
);
--> statement-breakpoint
CREATE UNIQUE INDEX `users_email_unique` ON `users` (`email`);--> statement-breakpoint
CREATE UNIQUE INDEX `user_email` ON `users` (`email`);--> statement-breakpoint
CREATE TABLE `product_dimensions` (
	`product_id` integer PRIMARY KEY NOT NULL,
	`width` real NOT NULL,
	`height` real NOT NULL,
	`depth` real NOT NULL
);
--> statement-breakpoint
CREATE TABLE `product_images` (
	`id` integer PRIMARY KEY NOT NULL,
	`product_id` integer NOT NULL,
	`url` text NOT NULL
);
--> statement-breakpoint
CREATE TABLE `product_reviews` (
	`id` integer PRIMARY KEY NOT NULL,
	`product_id` integer NOT NULL,
	`rating` integer NOT NULL,
	`comment` text,
	`date` text NOT NULL,
	`reviewer_name` text NOT NULL,
	`reviewer_email` text NOT NULL
);
--> statement-breakpoint
CREATE TABLE `product` (
	`id` integer PRIMARY KEY NOT NULL,
	`title` text NOT NULL,
	`description` text,
	`category` text NOT NULL,
	`price` real NOT NULL,
	`discount_percentage` real,
	`rating` real,
	`stock` integer,
	`brand` text,
	`sku` text,
	`weight` real,
	`warranty_information` text,
	`shipping_information` text,
	`availability_status` text,
	`return_policy` text,
	`minimum_order_quantity` integer,
	`created_at` text NOT NULL,
	`updated_at` text NOT NULL,
	`barcode` text,
	`qr_code` text,
	`thumbnail` text
);
--> statement-breakpoint
CREATE TABLE `product_tags` (
	`product_id` integer NOT NULL,
	`tag` text NOT NULL,
	PRIMARY KEY(`product_id`, `tag`)
);
--> statement-breakpoint
CREATE TABLE `order_products` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`order_id` integer NOT NULL,
	`product_id` integer NOT NULL,
	`title` text NOT NULL,
	`thumbnail` text NOT NULL,
	`price` real NOT NULL,
	`quantity` integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE `orders` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`email` text NOT NULL,
	`userId` integer,
	`username` text NOT NULL,
	`lastname` text NOT NULL,
	`address` text NOT NULL,
	`city` text NOT NULL,
	`state` text NOT NULL,
	`zip` text NOT NULL,
	`payment_type` text NOT NULL,
	`created_at` text DEFAULT '2025-04-08T13:29:51.598Z',
	FOREIGN KEY (`userId`) REFERENCES `users`(`id`) ON UPDATE no action ON DELETE no action
);
