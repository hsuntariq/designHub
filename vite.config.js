import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// import ghPages from "vite-plugin-gh-pages";

export default defineConfig({
  plugins: [react()], // Remove ghPages() for now
  base: "/",
  build: {
    outDir: "dist",
  },
});
