import { spawn } from "bun";

const cpus =
  navigator.hardwareConcurrency <= 1
    ? navigator.hardwareConcurrency
    : navigator.hardwareConcurrency - 1; // Number of CPU cores
const buns = new Array(cpus);

for (let i = 0; i < cpus; i++) {
  buns[i] = spawn({
    cmd: ["bun", "./src/server.ts"],
    stdout: "inherit",
    stderr: "inherit",
    stdin: "inherit",
  });
}

function kill() {
  for (const bun of buns) {
    bun.kill();
  }
}

process.on("SIGINT", kill);
process.on("exit", kill);
