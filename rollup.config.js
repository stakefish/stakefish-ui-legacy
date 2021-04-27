import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import generatePackage from "rollup-plugin-generate-package-json";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import typescript from "rollup-plugin-typescript2";
import remove from "rollup-plugin-delete";
import multi from "rollup-plugin-multi-input";

const config = {
  input: ["./src/*.tsx"],
  output: [{ dir: "lib", format: "esm", exports: "named" }],
  plugins: [
    remove({ targets: ["lib/*"] }),
    multi(),
    peerDepsExternal(),
    resolve(),
    commonjs(),
    typescript(),
    generatePackage({
      baseContents: (pkg) => ({
        name: pkg.name,
        author: pkg.author,
        version: pkg.version,
        dependencies: pkg.dependencies,
      }),
    }),
  ],
};

export default config;
