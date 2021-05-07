import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import copy from "rollup-plugin-copy";
import generatePackage from "rollup-plugin-generate-package-json";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import typescript from "rollup-plugin-typescript2";
import remove from "rollup-plugin-delete";
import multi from "rollup-plugin-multi-input";

const config = {
  input: ["./src/**/*.ts(x)?"],
  output: [{ dir: "lib", format: "esm", exports: "named" }],
  plugins: [
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
        license: pkg.license,
        keywords: pkg.keywords,
        dependencies: pkg.dependencies,
      }),
    }),
    copy({
      targets: [
        { src: "README.md", dest: "lib/" },
        { src: "LICENSE.md", dest: "lib/" },
      ],
    }),
    remove({
      targets: ["lib/*"],
    }),
  ],
};

export default config;
