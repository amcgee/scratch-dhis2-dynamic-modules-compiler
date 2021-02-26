import path from "path";
import pkg from "../../package.json";

// Helpers
import configureOutput from "./configureOutput";

// Rollup plugins
import nodeResolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import json from "@rollup/plugin-json";
import babel from "./plugins/babel";
import postcss from "./plugins/postcss";
import importMap from "./plugins/importMap";
import replace from "./plugins/replace";
import copy from "./plugins/copy";

// Dependencies to build and mark as external
const deps = [
  "react",
  "react-dom",
  "styled-jsx/style",
  "@dhis2/d2-i18n",
  "@dhis2/app-runtime",
  "@dhis2/ui",
  "moment",
];

const baseDir = "./dist";
const baseScriptDir = path.join(baseDir, "static/js")

const bundler = (name, input, dir) => (mode = "development") => {
  return {
    input: /styled-jsx/.exec(name) ? "styled-jsx/dist/style.js" : input,
    output: configureOutput({ name, dir, mode, deps }),
    plugins: [
      nodeResolve(),
      replace({ mode }),
      json(),
      commonjs({
        include: /node_modules/,
      }),
      babel({ mode }),
      postcss({ mode }),
      copy({ baseDir }),
      importMap({ name, dir, mode, baseScriptDir }),
    ],
    external: deps.filter((dep) => dep !== name),
  };
};

const bundlers = [
  bundler(':dhis2/' + pkg.name, "./src/index.js", baseScriptDir),
  ...deps.map((dep) => bundler(dep, dep, path.join(baseScriptDir, "vendor"))),
];

const modes = process.env.NODE_ENV
  ? [process.env.NODE_ENV]
  : ["development", "production"];

const configs = [];
modes.forEach((mode) => bundlers.forEach((fn) => configs.push(fn(mode))));
export default configs;
