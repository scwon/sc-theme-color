import type { RollupOptions } from "rollup";
import terser from "@rollup/plugin-terser";

const options: RollupOptions = {
  input: "src/lib/main.ts",
  output: {
    file: "./dist/main.js",
    format: "esm",
    plugins: [terser()],
  },
};

export default options;
