import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";
import svgr from "vite-plugin-svgr";
import EnvironmentalPlugin from "vite-plugin-environment";

export default defineConfig(({ mode }) => {
  // 1. Load env variables based on the mode (dev/prod)
  const env = loadEnv(mode, process.cwd(), "");

  return {
    // 2. Use EnvironmentalPlugin selectively to avoid the build error
    // Only pass the variables you actually use in your React code
    plugins: [
      react(),
      tailwindcss(),
      svgr(),
      EnvironmentalPlugin({
        VITE_API_URL: env.VITE_API_URL,
        NODE_ENV: mode,
      }),
    ],
    server: {
      host: true,
      proxy: {
        "/api": {
          target: env.VITE_API_URL,
          changeOrigin: true,
        },
        "^/fallback/.*": {
          target: env.VITE_API_URL,
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
    // Keep this if you actually had issues with the table, 
    // otherwise, you can remove it.
    optimizeDeps: {
      exclude: ["@tanstack/react-table"],
    },
  };
});