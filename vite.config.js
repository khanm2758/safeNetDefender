///////////////////////////////////////////////////

import { defineConfig } from "vite";
import lightningcss from "vite-plugin-lightningcss";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  base: "/safeNetDefender/", // Add this line
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"), // ✅ Define alias for "src"
    },
  },

  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
        @use "@/styles/abstracts/_variables.scss" as *;
        @use "@/styles/abstracts/_mixins.scss" as *;
        @use "@/styles/abstracts/_functions.scss" as *;
        
        `, // ✅ Use "@use" with "as *"
      },
    },
  },

  plugins: [
    lightningcss({
      browserslist: "last 2 versions",
      minify: true,
    }),
  ],
});
