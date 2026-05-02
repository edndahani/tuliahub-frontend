import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";
import svgr from "vite-plugin-svgr";
import EnvironmentalPlugin from "vite-plugin-environment";

const env = loadEnv(process.env.NODE_ENV || "", process.cwd(), "");

const API_URL = env.VITE_API_URL;

export default defineConfig({
  plugins: [react(), tailwindcss(), svgr(), EnvironmentalPlugin("all")],
  server: {
    host: true,
    proxy: {
      "/api": {
        target: API_URL,
        changeOrigin: true,
        configure: () => {},
      },
      "^/fallback/.*": {
        target: API_URL,
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/fallback/, ""),
      },
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  optimizeDeps: {
    exclude: ["@tanstack/react-table"],
  },
});
