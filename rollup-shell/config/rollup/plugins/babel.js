import { babel } from "@rollup/plugin-babel";
import makeBabelConfig from '@dhis2/cli-app-scripts/config/makeBabelConfig.js'

export default ({ mode }) => 
  babel({
    ...makeBabelConfig({
      moduleType: "es",
      mode,
    }),
    babelHelpers: "bundled", // TODO: Shared babel helpers
    exclude: "node_modules/**",
  })