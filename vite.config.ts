import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
// import { visualizer } from "rollup-plugin-visualizer";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "src": path.resolve(__dirname, "src"),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
           @use "@/styles/mixin-font" as *;
        `
      }
    }
  }
});
