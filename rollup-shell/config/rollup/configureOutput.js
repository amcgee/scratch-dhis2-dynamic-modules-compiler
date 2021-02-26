import terser from "./plugins/terser.js";

export default ({ name, mode, dir, deps }) => {
  const getFormat = (name) =>
    !name.match(/(react(-dom)?)/) ? "system" : "umd";
  const umdGlobals = deps.reduce((globals, dep) => {
    if (getFormat(dep) === "umd") {
      globals[dep] = dep
    }
    return globals
  }, {});
  const isProduction = mode === "production";

  return {
    entryFileNames: `${name}.[hash].${getFormat(name)}${
      isProduction ? ".min.js" : ".js"
    }`,
    format: getFormat(name),
    name: getFormat(name) === "umd" ? name : undefined,
    globals: umdGlobals,
    dir,
    sourcemap: true,
    banner: `/* ${name} ${mode} version */`,
    interop: "auto",
    plugins: [isProduction && terser()],
  };
};
