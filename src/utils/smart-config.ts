import type { TConfig, TConfigWithExtendsArray } from "./misc.js";
import { defineConfig } from "eslint/config";

export function smartConfig(...configs: TConfigWithExtendsArray[]): TConfig[] {
  try {
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const TSLint = require("typescript-eslint");

    return TSLint.config(...configs);
  } catch {
    return defineConfig(...configs);
  }
}
