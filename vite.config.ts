import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";

export default defineConfig({
  plugins: [
    react(),
    runtimeErrorOverlay(),
    ...(process.env.NODE_ENV !== "production" && process.env.REPL_ID !== undefined
      ? [
          await import("@replit/vite-plugin-cartographer").then((m) => m.cartographer()),
          await import("@replit/vite-plugin-dev-banner").then((m) => m.devBanner()),
        ]
      : []),
  ],
  resolve: {
    alias: {
      "@": resolve(process.cwd(), "client", "src"),
      "@shared": resolve(process.cwd(), "shared"),
      "@assets": resolve(process.cwd(), "attached_assets"),
    },
  },
  // Aplicația UI trăiește în client/
  root: resolve(process.cwd(), "client"),
  // IMPORTANT: build-ul final în dist/ (NU dist/public)
  build: {
    outDir: resolve(process.cwd(), "dist"),
    emptyOutDir: true,
  },
  // preview/dev porturi standard
  server: { 
    port: 5173,
    proxy: {
      "/api": {
        target: "http://127.0.0.1:5000",
        changeOrigin: true,
        secure: false,
        ws: true,
      },
    },
  },
  preview: { port: 4173 },
  // rutele SPA vor funcționa cu vercel.json (vezi mai jos)
});
