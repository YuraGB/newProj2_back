import { Hono } from "hono";
import { videoController } from "@/controllers/videoController";
import path from "node:path";
import fs from "node:fs";

const videoRoute = new Hono();

export const videosDirectory = path.resolve(
  __dirname,
  "../../assets/videos/output",
);

videoRoute
  .get("/videos/:videoFile", videoController)
  .get("/videos/manifest.mpd", (c) => {
    const manifestPath = path.normalize(
      path.join(videosDirectory, "manifest.mpd"),
    );
    const manifest = fs.readFileSync(manifestPath, "utf-8");
    return c.text(manifest, 200, { "Content-Type": "application/dash+xml" });
  });

export default videoRoute;
