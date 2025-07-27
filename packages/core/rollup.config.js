import { defineConfig } from "rollup";
import typescript from "@rollup/plugin-typescript";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import { dts } from "rollup-plugin-dts";
import del from "rollup-plugin-delete";

const external = ["fast-glob", "mime-types", "node-html-parser"];

export default defineConfig([
  // Main build
  {
    input: "src/index.ts",
    output: [
      {
        file: "dist/index.js",
        format: "cjs",
        sourcemap: false,
        exports: "named",
      },
      {
        file: "dist/index.mjs",
        format: "esm",
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
  // Type definitions
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
]);
