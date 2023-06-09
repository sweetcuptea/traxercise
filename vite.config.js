import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";
import legacy from "@vitejs/plugin-legacy";
import vue2 from "@vitejs/plugin-vue2";
import vue2Jsx from "@vitejs/plugin-vue2-jsx";
import { type } from "node:os";

// dependencies
import fonts from "vite-plugin-fonts";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/traxercise/",
  plugins: [
    vue2(),
    vue2Jsx(),
    legacy({
      targets: ["ie >= 11"],
      additionalLegacyPolyfills: ["regenerator-runtime/runtime"],
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import "./src/assets/scss/fonts.scss";
          @import "./src/assets/scss/variable.scss";
        `,
      },
    },
  },
});
