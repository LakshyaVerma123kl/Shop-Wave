import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/Shop-Wave/", // Correctly set to your repository name
  plugins: [react()],
});
