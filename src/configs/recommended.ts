import globals from "globals";
import { smartConfig } from "#utils";
import { exports } from "./exports.js";
import { imports } from "./imports.js";
import { javascript } from "./javascript.js";
import { stylistic } from "./stylistic.js";
import { typescript } from "./typescript.js";
import { unicorn } from "./unicorn.js";

export const recommended = smartConfig(
  javascript,
  stylistic,
  imports,
  exports,
  unicorn,
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
