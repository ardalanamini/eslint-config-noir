import gitignore from "eslint-config-flat-gitignore";
import eslintPlugin from "eslint-plugin-eslint-plugin";
import { configs, smartConfig } from "./src/index.js";

export default smartConfig(
  gitignore(),
  eslintPlugin.configs["flat/recommended"],
  configs.recommended,
);
