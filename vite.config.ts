import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";
import { fileURLToPath } from "url";
import path from "path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@env": path.resolve(__dirname, "./src/env"),
      "@assets": path.resolve(__dirname, "./src/assets"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@hooks": path.resolve(__dirname, "./src/hooks"),
      "@helpers": path.resolve(__dirname, "./src/helpers"),
      "@interfaces": path.resolve(__dirname, "./src/interfaces"),
      "@types": path.resolve(__dirname, "./src/types"),
      "@locale": path.resolve(__dirname, "./src/locale"),
      "@config": path.resolve(__dirname, "./src/config"),
      "@subcomponentsPage": path.resolve(
        __dirname,
        "./src/components/page/subcomponents"
      ),
      "@subcomponentsG": path.resolve(
        __dirname,
        "./src/components/subcomponents"
      ),
    },
  },
});
