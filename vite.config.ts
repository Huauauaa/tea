import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// Project pages: https://<user>.github.io/<repo>/
// User/org site (<name>.github.io repo): base is "/"
const repo = process.env.GITHUB_REPOSITORY?.split("/")[1];
const isUserGithubIoSite = Boolean(repo?.endsWith(".github.io"));
const base =
  process.env.VITE_BASE_PATH ??
  (process.env.GITHUB_ACTIONS && repo
    ? isUserGithubIoSite
      ? "/"
      : `/${repo}/`
    : "/");

export default defineConfig({
  base,
  plugins: [react(), tailwindcss()],
});
