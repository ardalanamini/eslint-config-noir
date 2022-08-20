"use strict";

exports.rules = {
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

  "import/extensions": ["error", "always", { ignorePackages: true }],

  "sort-imports": "off",
  "import/order": [
    "error",
    {
      groups     : ["builtin", "external", "internal", "parent", "sibling", "index", "object", "type"],
      alphabetize: {
        order: "asc",
      },
    },
  ],

  "import/newline-after-import": ["error", { count: 1 }],
};
