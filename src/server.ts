import { serve } from "bun";
import app from "./app";
import "@/lib/polifil";

// Функція запуску сервера
const startServer = () => {
  console.log("🚀 Server starting...");

  try {
    serve({
      fetch: app.fetch,
      port: 3000,
      reusePort: true,
      development: true,
      tls: {
        cert: Bun.file("localhost.pem"),
        key: Bun.file("localhost-key.pem"),
      },
    });

    console.log("Server started on port 3000");
  } catch (err) {
    console.error("❌ Server crashed:", err);
    process.exit(1); // Завершити процес, щоб його перезапустив менеджер
  }
};

// 🔄 **Автоматичний перезапуск при завершенні процесу**
process.on("exit", (code) => {
  console.log(`🔄 Restarting server... (exit code: ${code})`);
  setTimeout(() => Bun.spawn(["bun", "run", "dev"]), 2000); // Перезапуск через 3 секунди
});

// 🚀 **Запуск сервера**
startServer();
