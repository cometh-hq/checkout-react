import { defineConfig } from "vite"
import dts from "vite-plugin-dts"
import { peerDependencies, dependencies } from "./package.json"
import { resolve } from "path"

export default defineConfig({
  build: {
    lib: {
      entry: "./src/index.ts", // Specifies the entry point for building the library.
      name: "checkout-react", // Sets the name of the generated library.
      fileName: (format) => `index.${format}.js`, // Generates the output file name based on the format.
      formats: ["cjs", "es"] // Specifies the output formats (CommonJS and ES modules).
    },
    rollupOptions: {
      external: [...Object.keys(peerDependencies), ...Object.keys(dependencies)] // Defines external dependencies for Rollup bundling.
    },
    sourcemap: true, // Generates source maps for debugging.
    emptyOutDir: true // Clears the output directory before building.
  },
  plugins: [
    dts({
      tsconfigPath: resolve(__dirname, "tsconfig.app.json")
    })
  ] // Uses the 'vite-plugin-dts' plugin for generating TypeScript declaration files (d.ts).
})
