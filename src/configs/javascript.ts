import ESLint from "@eslint/js";
import { smartConfig } from "#utils";

export const javascript = smartConfig(
  ESLint.configs.recommended,
  {
    rules: {
      /**
       * Possible Problems ---------------------------------------------------------------------------------------------
       * @see https://eslint.org/docs/rules/#possible-problems
       */

      "array-callback-return"        : ["error", { allowVoid: true }],
      "no-await-in-loop"             : "error",
      "no-constant-binary-expression": "error",
      "no-constructor-return"        : "error",
      "no-duplicate-imports"         : ["error", { includeExports: true }],
      "no-fallthrough"               : [
        "error",
        {
          allowEmptyCase                : true,
          commentPattern                : String.raw`falls?\s?through`,
          reportUnusedFallthroughComment: true,
        },
      ],
      "no-new-native-nonconstructor"   : "error",
      "no-promise-executor-return"     : "error",
      "no-self-compare"                : "error",
      "no-template-curly-in-string"    : "error",
      "no-unmodified-loop-condition"   : "error",
      "no-unreachable-loop"            : "error",
      "no-unused-private-class-members": "error",
      "no-use-before-define"           : "error",
      "no-useless-assignment"          : "error",
      "require-atomic-updates"         : "error",

      /**
       * Suggestions ---------------------------------------------------------------------------------------------------
       * @see https://eslint.org/docs/rules/#suggestions
       */

      "accessor-pairs"  : "off",
      "arrow-body-style": ["error", "as-needed"],
      "block-scoped-var": "off",
      "camelcase"       : [
        "error",
        {
          properties         : "never",
          ignoreDestructuring: true,
          ignoreImports      : true,
          ignoreGlobals      : true,
        },
      ],
      "capitalized-comments"        : "off",
      "class-methods-use-this"      : "error",
      "complexity"                  : "off",
      "consistent-return"           : "off",
      "consistent-this"             : "error",
      "curly"                       : ["error", "multi-or-nest", "consistent"],
      "default-case"                : "error",
      "default-case-last"           : "error",
      "default-param-last"          : "error",
      "dot-notation"                : "error",
      "eqeqeq"                      : ["error", "always", { null: "ignore" }],
      "func-name-matching"          : ["error", "always", { considerPropertyDescriptor: true }],
      "func-names"                  : ["error", "always"],
      "func-style"                  : ["error", "declaration", { allowArrowFunctions: true }],
      "grouped-accessor-pairs"      : ["error", "getBeforeSet"],
      "guard-for-in"                : "error",
      "logical-assignment-operators": ["error", "always", { enforceForIfStatements: true }],
      "max-classes-per-file"        : [
        "error",
        {
          ignoreExpressions: true,
          max              : 1,
        },
      ],
      "max-depth"            : ["error", { max: 4 }],
      "max-nested-callbacks" : ["error", { max: 3 }],
      "max-params"           : ["error", { max: 3 }],
      "new-cap"              : "error",
      "no-array-constructor" : "error",
      "no-caller"            : "error",
      "no-console"           : ["error", { allow: ["info", "warn", "error"] }],
      "no-div-regex"         : "error",
      "no-else-return"       : ["error", { allowElseIf: false }],
      "no-empty-function"    : "error",
      "no-empty-static-block": "error",
      "no-eval"              : "error",
      "no-extra-bind"        : "error",
      "no-extra-label"       : "error",
      "no-implicit-globals"  : "error",
      "no-implied-eval"      : "error",
      "no-invalid-this"      : "error",
      "no-iterator"          : "error",
      "no-label-var"         : "error",
      "no-lone-blocks"       : "error",
      "no-lonely-if"         : "error",
      "no-magic-numbers"     : [
        "error",
        {
          ignoreArrayIndexes           : true,
          ignoreDefaultValues          : true,
          ignoreClassFieldInitialValues: true,
          ignore                       : [0, "0n", 1, "1n", 2, "2n", 10, "10n"],
        },
      ],
      "no-multi-assign"      : ["error", { ignoreNonDeclaration: true }],
      "no-multi-str"         : "error",
      "no-negated-condition" : "error",
      "no-new-func"          : "error",
      "no-object-constructor": "error",
      "no-octal-escape"      : "error",
      "no-proto"             : "error",
      "no-return-assign"     : "error",
      "no-return-await"      : "error",
      "no-script-url"        : "error",
      "no-sequences"         : "error",
      "no-shadow"            : "error",
      "no-throw-literal"     : "error",
      "no-unassigned-vars"   : "error",
      "no-undefined"         : "error",
      "no-underscore-dangle" : [
        "error",
        {
          allowAfterThis           : true,
          allowAfterSuper          : true,
          allowAfterThisConstructor: true,
          allowFunctionParams      : false,
        },
      ],
      "no-unneeded-ternary"           : "error",
      "no-useless-computed-key"       : ["error", { enforceForClassMembers: true }],
      "no-useless-concat"             : "error",
      "no-useless-constructor"        : "error",
      "no-useless-rename"             : "error",
      "no-useless-return"             : "error",
      "no-var"                        : "error",
      "operator-assignment"           : "error",
      "prefer-arrow-callback"         : ["error", { allowNamedFunctions: true }],
      "prefer-const"                  : ["error", { destructuring: "all" }],
      "prefer-exponentiation-operator": "error",
      "prefer-named-capture-group"    : "error",
      "prefer-numeric-literals"       : "error",
      "prefer-object-has-own"         : "error",
      "prefer-object-spread"          : "error",
      "prefer-promise-reject-errors"  : "error",
      "prefer-regex-literals"         : ["error", { disallowRedundantWrapping: true }],
      "prefer-rest-params"            : "error",
      "prefer-template"               : "error",
      "radix"                         : ["error", "as-needed"],
      "sort-imports"                  : [
        "error",
        {
          memberSyntaxSortOrder: ["none", "all", "single", "multiple"],
          allowSeparatedGroups : true,
        },
      ],
      "strict": ["error", "global"],
      "yoda"  : ["error", "never", { exceptRange: true }],

      /**
       * Layout & Formatting -------------------------------------------------------------------------------------------
       * @see https://eslint.org/docs/rules/#layout-formatting
       */

      "unicode-bom": "error",
    },
  },
);
