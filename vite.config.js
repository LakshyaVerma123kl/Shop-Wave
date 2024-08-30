import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/Shop-Wave/", // Ensure this matches your GitHub repository name
  plugins: [react()],
});
