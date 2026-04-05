import { copyFileSync, existsSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(fileURLToPath(new URL("..", import.meta.url)));
const indexHtml = join(root, "dist", "index.html");
const notFound = join(root, "dist", "404.html");

if (existsSync(indexHtml)) {
  copyFileSync(indexHtml, notFound);
}
