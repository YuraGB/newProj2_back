import { BunSQLiteDatabase, drizzle } from "drizzle-orm/bun-sqlite";
import { Database } from "bun:sqlite";
import { mkdirSync, existsSync } from "fs";
import { migrate } from "drizzle-orm/bun-sql/migrator";
import * as schema from "./schemas";
import * as path from "node:path";
import * as fs from "node:fs";
import { BunSQLDatabase } from "drizzle-orm/bun-sql/driver";

const sqlite = new Database("sqlite.db");

export const db: BunSQLiteDatabase<typeof schema> = drizzle(sqlite, { schema });
const migrationsFolder = path.resolve(__dirname, "../../drizzle/migrations");
const metaFolder = "./drizzle/meta";

if (!existsSync(migrationsFolder)) {
  mkdirSync(migrationsFolder, { recursive: true });
  console.log("Migrations folder created!");
}

if (!existsSync(metaFolder)) {
  mkdirSync(metaFolder, { recursive: true });
  console.log("Meta folder created!");
}
// Перевіряємо наявність файлу _journal.json, якщо його немає - створюємо
const journalPath = `${metaFolder}/_journal.json`;
if (!existsSync(journalPath)) {
  console.log(`_journal.json not found, creating...`);
  fs.writeFileSync(journalPath, "{}");
  console.log("_journal.json created!");
}

// Запуск міграцій
await migrate(db as unknown as BunSQLDatabase<Record<string, unknown>>, {
  migrationsFolder,
});
