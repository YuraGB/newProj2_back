import { serve } from "bun";
import app from "./app";
import "@/lib/polifil";

const startServer = () => {
  try {
    console.log("🚀 Server starting...");
    serve({
      fetch: app.fetch,
      port: 3000,
      // Share the same port across multiple processes
      // This is the important part!
      /**
       * https://bun.sh/guides/http/cluster
       * Linux only — Windows and macOS ignore the reusePort option. This is an operating system limitation with SO_REUSEPORT, unfortunately.
       */
      reusePort: true,
      development: true,
      tls: {
        cert: Bun.file("localhost.pem"),
        key: Bun.file("localhost-key.pem"),
      },
    });
  } catch (err) {
    console.error("❌ Server crashed:", err);
    setTimeout(startServer, 5000); // Перезапуск через 5 секунд
  }
};

// Запуск сервера
startServer();
