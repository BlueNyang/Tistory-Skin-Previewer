import { defineConfig } from "rollup";
import typescript from "@rollup/plugin-typescript";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import { dts } from "rollup-plugin-dts";
import del from "rollup-plugin-delete";

const external = [
  "astro",
  "vite",
  "@astro/types",
  "@tistory-skin-previewer/core",
];

export default defineConfig([
  // Main builds
  {
    input: {
      index: "src/index.ts",
      middleware: "src/middleware.ts",
    },
    output: [
      {
        dir: "dist",
        format: "cjs",
        entryFileNames: "[name].js",
        chunkFileNames: "[name]-[hash].js",
        sourcemap: false,
        exports: "named",
      },
      {
        dir: "dist",
        format: "esm",
        entryFileNames: "[name].mjs",
        chunkFileNames: "[name]-[hash].mjs",
        sourcemap: false,
      },
    ],
    external,
    plugins: [
      del({ targets: "dist/*" }),
      resolve({
        preferBuiltins: true,
      }),
      commonjs(),
      typescript({
        tsconfig: "./tsconfig.json",
        declaration: false, // dts 플러그인에서 별도 처리
        declarationMap: false,
        sourceMap: false,
      }),
    ],
  },
  // Type definitions for index
  {
    input: "src/index.ts",
    output: {
      file: "dist/index.d.ts",
      format: "esm",
    },
    external,
    plugins: [
      dts({
        tsconfig: "./tsconfig.json",
      }),
    ],
  },
  // Type definitions for middleware
  {
    input: "src/middleware.ts",
    output: {
      file: "dist/middleware.d.ts",
      format: "esm",
    },
    external,
    plugins: [
      dts({
        tsconfig: "./tsconfig.json",
      }),
    ],
  },
]);
