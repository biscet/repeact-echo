import { resolve } from "node:path";
import { defineConfig } from "vite";

import eslintPlugin from "vite-plugin-eslint";
import sass from "sass";
import autoprefixer from "autoprefixer";
import postcssPresetEnv from "postcss-preset-env";
import postcssWillChange from "postcss-will-change";
import stylelint from "vite-plugin-stylelint";
import electron from "vite-plugin-electron";
import solidPlugin from "vite-plugin-solid";

export default defineConfig(({ mode }) => {
  const plugins = [
    solidPlugin(),
    stylelint({ fix: true }),
    eslintPlugin({
      fix: true,
      exclude: [resolve(__dirname, "../node_modules/**")],
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
    plugins: plugins,
    server: {
      port: 3000,
      open: true,
    },
    define: {
      "process.env.NODE_ENV": JSON.stringify(mode),
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
