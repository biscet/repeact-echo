import { resolve } from "node:path";
import { defineConfig } from "vite";

import sass from "sass";
import autoprefixer from "autoprefixer";
import postcssPresetEnv from "postcss-preset-env";
import postcssWillChange from "postcss-will-change";
import electron from "vite-plugin-electron";
import solidPlugin from "vite-plugin-solid";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";

export default defineConfig(({ mode }) => {
  const plugins = [
    solidPlugin(),
    ViteImageOptimizer({
      test: /\.(jpe?g|png)$/i,
      png: {
        quality: 95,
        compressionLevel: 7,
      },
      jpeg: {
        quality: 20,
      },
      jpg: {
        quality: 20,
      },
    }),
  ];

  if (process.env.ELECTRON === "true") {
    plugins.push(
      electron([
        { entry: "electron/main.js" },
        {
          entry: "electron/preload.js",
          onstart(options) {
            options.reload();
          },
        },
      ])
    );
  }

  return {
    plugins: [...plugins],
    define: {
      "process.env.NODE_ENV": JSON.stringify(mode),
    },
    build: {
      minify: "terser",
      terserOptions: {
        compress: {
          dead_code: true,
          drop_console: true,
          drop_debugger: true,
        },
        mangle: true,
        format: {
          comments: false,
        },
      },
      outDir: "dist-solidjs",
      emptyOutDir: true,
      brotliSize: false,
      sourcemap: "inline",
      chunkSizeWarningLimit: 1500,
      cssCodeSplit: true,
      cssMinify: true,
      rollupOptions: {
        output: {
          chunkFileNames: "assets/chunks/[name].[hash].js",
          entryFileNames: "assets/js/[name].[hash].js",
        },
      },
    },
    css: {
      preprocessorOptions: {
        sass: {
          implementation: sass,
        },
      },
      postcss: {
        plugins: [autoprefixer(), postcssPresetEnv(), postcssWillChange()],
      },
    },
    esbuild: {
      loader: "jsx",
    },
    babel: {
      configFile: resolve(__dirname, "../.babelrc.js"),
    },
    resolve: {
      alias: {
        src: resolve(__dirname, "../src"),
      },
    },
  };
});
