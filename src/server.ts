import { serve } from "bun";
import app from "./app";

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

console.log("🚀 Server running on https://localhost:3000");
