"use strict";

exports.extends = [
  "eslint:recommended",
  "noir",
  "plugin:import/recommended",
  "noir/import",
  "plugin:@typescript-eslint/recommended",
  "noir/typescript",
  "plugin:import/typescript",
];

exports.parser = "@typescript-eslint/parser";

exports.plugins = [
  "@typescript-eslint",
  "import",
];

exports.settings = {
  "import/resolver": "typescript",
};
