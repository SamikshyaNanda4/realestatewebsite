import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  preview: {
    host: true, // allow external access
    port: 4173,
    allowedHosts: ["futeservices.levelvein.online"],
  },
});
