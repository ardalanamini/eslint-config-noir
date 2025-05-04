const configs = ["plugin:import/recommended"];

export { configs as extends };

export const plugins = ["import"];

export const rules = {
  /**
   * Static analysis ---------------------------------------------------------------------------------------------------
   * @see https://github.com/import-js/eslint-plugin-import#static-analysis
   */

  "import/no-absolute-path"          : "error",
  "import/no-cycle"                  : "error",
  "import/no-self-import"            : "error",
  "import/no-relative-parent-imports": "error",

  /**
   * Helpful warnings --------------------------------------------------------------------------------------------------
   * @see https://github.com/import-js/eslint-plugin-import#helpful-warnings
   */

  "import/no-named-as-default"       : "error",
  "import/no-named-as-default-member": "error",
  "import/no-deprecated"             : "error",

  /**
   * Module systems ----------------------------------------------------------------------------------------------------
   * @see https://github.com/import-js/eslint-plugin-import#module-systems
   */

  /**
   * Style guide -------------------------------------------------------------------------------------------------------
   * @see https://github.com/import-js/eslint-plugin-import#style-guide
   */

  "import/first": "error",

  "import/exports-last": "error",

  "import/no-duplicates": ["error", { considerQueryString: true }],

  "import/extensions": [
    "error", "always", {
      ignorePackages  : true,
      checkTypeImports: true,
    },
  ],

  "sort-imports": "off",
  "import/order": [
    "error",
    {
      groups     : ["type", "builtin", "external", "internal", "unknown", "sibling", "index", "parent", "object"],
      alphabetize: {
        order          : "asc",
        orderImportKind: "asc",
        caseInsensitive: false,
      },
      named: {
        enabled: true,
        types  : "types-first",
      },
    },
  ],

  "import/newline-after-import": ["error", { count: 1 }],
};
