import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts", "src/middleware.ts"],
  format: ["cjs", "esm"],
  dts: true,
  clean: true,
  splitting: false,
  sourcemap: true,
  treeshake: true,
  minify: false,
  external: ["astro", "vite", "@astro/types"],
});
