import globals from "globals";
import { smartConfig } from "#utils";
import { imports } from "./imports.js";
import { javascript } from "./javascript.js";
import { stylistic } from "./stylistic.js";
import { typescript } from "./typescript.js";

export const recommended = smartConfig(
  javascript,
  stylistic,
  imports,
  typescript,
  {
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
  },
);
