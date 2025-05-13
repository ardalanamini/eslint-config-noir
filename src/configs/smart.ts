import globals from "globals";
import {
  type TConfigWithExtendsArray,
  canUseImportPlugin,
  canUsePerfectionistPlugin,
  canUseStylisticPlugin, canUseTypescriptPlugin,
  smartConfig,
} from "#utils";
import { javascript } from "./javascript.js";

const configs: TConfigWithExtendsArray = [javascript];

if (canUseStylisticPlugin) {
  const { stylistic } = await import("./stylistic.js");

  configs.push(stylistic);
}

if (canUseImportPlugin) {
  const { imports } = await import("./imports.js");

  configs.push(imports);
}

if (canUsePerfectionistPlugin) {
  const { exports } = await import("./exports.js");

  configs.push(exports);
}

if (canUseTypescriptPlugin) {
  const { typescript } = await import("./typescript.js");

  configs.push(typescript);
}

configs.push({
  linterOptions: {
    reportUnusedDisableDirectives: "error",
    reportUnusedInlineConfigs    : "error",
  },
  languageOptions: {
    globals: {
      ...globals.commonjs,
      ...globals.node,
    },
  },
});

export const smart = smartConfig(...configs);
