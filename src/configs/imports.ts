import importPlugin from "eslint-plugin-import";
import { smartConfig } from "#utils";

export const imports = smartConfig(
  importPlugin.flatConfigs.recommended,
  {
    rules: {
      /**
       * Static analysis -----------------------------------------------------------------------------------------------
       * @see https://github.com/import-js/eslint-plugin-import#static-analysis
       */

      "import/no-absolute-path": "error",
      "import/no-cycle"        : "error",
      "import/no-self-import"  : "error",

      /**
       * It also gives an error if it's an alias import!
       */
      // "import/no-relative-parent-imports": "error",

      /**
       * Helpful warnings ----------------------------------------------------------------------------------------------
       * @see https://github.com/import-js/eslint-plugin-import#helpful-warnings
       */

      "import/no-named-as-default"       : "error",
      "import/no-named-as-default-member": "error",
      "import/no-deprecated"             : "error",

      /**
       * Module systems ------------------------------------------------------------------------------------------------
       * @see https://github.com/import-js/eslint-plugin-import#module-systems
       */

      /**
       * Style guide ---------------------------------------------------------------------------------------------------
       * @see https://github.com/import-js/eslint-plugin-import#style-guide
       */

      "import/first": "error",

      "import/exports-last": "error",

      "import/no-duplicates": ["error", { considerQueryString: true }],

      /**
       * Even after years, this doesn't work with importing `TypeScript` files with `.js` yet!
       * (there seems to be a PR, but still no progress)
       */
      // "import/extensions": [
      //   "error",
      //   "always",
      //   {
      //     ignorePackages : true,
      //     checkTypeImports: true,
      //   },
      // ],

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
    },
  },
);
