import zlib from "node:zlib";

//@ts-expect-error polyfill
const make = (ctx: this | this, handle: zlib.Gzip) =>
  Object.assign(ctx, {
    writable: new WritableStream({
      //@ts-expect-error polyfill
      write: (chunk) => handle.write(chunk),
      //@ts-expect-error polyfill
      close: () => handle.end(),
    }),
    readable: new ReadableStream({
      type: "bytes",
      start(ctrl) {
        handle.on("data", (chunk: ArrayBufferView<ArrayBufferLike>) =>
          ctrl.enqueue(chunk),
        );
        handle.once("end", () => ctrl.close());
      },
    }),
  });

//@ts-expect-error polyfill
globalThis.CompressionStream ??= class CompressionStream {
  constructor(format: string) {
    make(
      this,
      format === "deflate"
        ? zlib.createDeflate()
        : format === "gzip"
          ? zlib.createGzip()
          : zlib.createDeflateRaw(),
    );
  }
};

// @ts-expect-error polyfill
globalThis.DecompressionStream ??= class DecompressionStream {
  constructor(format: string) {
    make(
      this,
      format === "deflate"
        ? zlib.createInflate()
        : format === "gzip"
          ? zlib.createGunzip()
          : zlib.createInflateRaw(),
    );
  }
};
