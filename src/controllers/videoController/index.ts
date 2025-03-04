import { Context } from "hono";
import path from "node:path";
import fs from "node:fs";
import { videosDirectory } from "@/routes/video";

export const videoController = (c: Context) => {
  const videoFile = c.req.param("videoFile"); // Get the video file name from the URL
  const filePath = path.join(videosDirectory, videoFile); // Full path to the file

  // Check if the file exists
  if (fs.existsSync(filePath)) {
    // Read the file as a buffer
    const fileBuffer = fs.readFileSync(filePath);

    // Convert the Buffer to ArrayBuffer
    const arrayBuffer = fileBuffer.buffer.slice(
      fileBuffer.byteOffset,
      fileBuffer.byteOffset + fileBuffer.byteLength,
    );

    // Define MIME type for .m4s files
    const ext = path.extname(videoFile).toLowerCase();
    let mimeType = "application/octet-stream"; // Default MIME type

    if (ext === ".m4s") {
      mimeType = "video/mp4"; // Adjust MIME type for .m4s files
    }

    // Send the buffer as the response
    return c.body(arrayBuffer as ArrayBuffer, {
      headers: {
        "Content-Type": mimeType, // Set the MIME type
        "Content-Length": fileBuffer.length.toString(), // Content-Length header for the file size
      },
    });
  } else {
    console.log(`File not found: ${filePath}`);
    return c.text("File not found", 404); // Return 404 if the file is not found
  }
};
