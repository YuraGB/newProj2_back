PRAGMA foreign_keys=OFF;--> statement-breakpoint
CREATE TABLE `__new_orders` (
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
	`created_at` text DEFAULT '2025-04-08T16:00:10.263Z',
	FOREIGN KEY (`userId`) REFERENCES `users`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
INSERT INTO `__new_orders`("id", "email", "userId", "username", "lastname", "address", "city", "state", "zip", "payment_type", "created_at") SELECT "id", "email", "userId", "username", "lastname", "address", "city", "state", "zip", "payment_type", "created_at" FROM `orders`;--> statement-breakpoint
DROP TABLE `orders`;--> statement-breakpoint
ALTER TABLE `__new_orders` RENAME TO `orders`;--> statement-breakpoint
PRAGMA foreign_keys=ON;