import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "build", // Change build output folder
  },
  base: "/react-taskList-app/", // Match the `homepage` field in package.json
});
