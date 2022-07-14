"use strict";

exports.rules = {
  /**
   * Possible Problems -------------------------------------------------------------------------------------------------
   * @see https://eslint.org/docs/rules/#possible-problems
   */

  "array-callback-return"          : "off",
  "no-await-in-loop"               : "error",
  "no-constant-binary-expression"  : "error",
  "no-constructor-return"          : "error",
  "no-duplicate-imports"           : ["error", { includeExports: true }],
  "no-promise-executor-return"     : "error",
  "no-self-compare"                : "error",
  "no-template-curly-in-string"    : "error",
  "no-unmodified-loop-condition"   : "error",
  "no-unreachable-loop"            : "error",
  "no-unused-private-class-members": "error",
  "no-use-before-define"           : "error",
  "require-atomic-updates"         : "error",

  /**
   * Suggestions -------------------------------------------------------------------------------------------------------
   * @see https://eslint.org/docs/rules/#suggestions
   */

  "accessor-pairs"  : "off",
  "arrow-body-style": ["error", "as-needed"],
  "block-scoped-var": "off",
  camelcase         : [
    "error",
    {
      properties         : "never",
      ignoreDestructuring: true,
      ignoreImports      : true,
      ignoreGlobals      : true,
    },
  ],
  "capitalized-comments": [
    "error",
    "always",
    {
      ignoreInlineComments     : true,
      ignoreConsecutiveComments: true,
    },
  ],
  "class-methods-use-this": "error",
  complexity              : "off",
  "consistent-return"     : "off",
  "consistent-this"       : "error",
  curly                   : ["error", "multi-or-nest", "consistent"],
  "default-case"          : "error",
  "default-case-last"     : "error",
  "default-param-last"    : "error",
  "dot-notation"          : "error",
  eqeqeq                  : ["error", "always", { null: "ignore" }],
  "func-name-matching"    : ["error", "always", { considerPropertyDescriptor: true }],
  "func-names"            : ["error", "always"],
  "func-style"            : ["error", "declaration", { allowArrowFunctions: true }],
  "grouped-accessor-pairs": ["error", "getBeforeSet"],
  "guard-for-in"          : "error",
  "max-classes-per-file"  : [
    "error",
    {
      ignoreExpressions: true,
      max              : 1,
    },
  ],
  "max-depth"              : ["error", { max: 4 }],
  "max-nested-callbacks"   : ["error", { max: 3 }],
  "max-params"             : ["error", { max: 3 }],
  "multiline-comment-style": ["error", "starred-block"],
  "new-cap"                : "error",
  "no-array-constructor"   : "error",
  "no-caller"              : "error",
  "no-confusing-arrow"     : "error",
  "no-console"             : ["error", { allow: ["info", "warn", "error"] }],
  "no-div-regex"           : "error",
  "no-else-return"         : ["error", { allowElseIf: false }],
  "no-empty-function"      : "error",
  "no-eval"                : "error",
  "no-extra-bind"          : "error",
  "no-extra-label"         : "error",
  "no-implicit-globals"    : "error",
  "no-implied-eval"        : "error",
  "no-invalid-this"        : "error",
  "no-iterator"            : "error",
  "no-label-var"           : "error",
  "no-lone-blocks"         : "error",
  "no-lonely-if"           : "error",
  "no-magic-numbers"       : [
    "error",
    {
      ignoreDefaultValues: true,
      ignore             : [0, "0n", 1, "1n", 2, "2n", 10, "10n"],
    },
  ],
  "no-mixed-operators"  : "error",
  "no-multi-assign"     : ["error", { ignoreNonDeclaration: true }],
  "no-multi-str"        : "error",
  "no-negated-condition": "error",
  "no-new-func"         : "error",
  "no-new-object"       : "error",
  "no-octal-escape"     : "error",
  "no-proto"            : "error",
  "no-return-assign"    : "error",
  "no-return-await"     : "error",
  "no-script-url"       : "error",
  "no-sequences"        : "error",
  "no-shadow"           : "error",
  "no-throw-literal"    : "error",
  "no-undefined"        : "error",
  "no-underscore-dangle": [
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
  "quote-props"                   : ["error", "as-needed"],
  radix                           : ["error", "as-needed"],
  "sort-imports"                  : [
    "error",
    {
      memberSyntaxSortOrder: ["none", "all", "single", "multiple"],
      allowSeparatedGroups : true,
    },
  ],
  strict: ["error", "global"],
  yoda  : ["error", "never", { exceptRange: true }],

  /**
   * Layout & Formatting -----------------------------------------------------------------------------------------------
   * @see https://eslint.org/docs/rules/#layout-formatting
   */

  "array-bracket-newline": ["error", { multiline: true }],
  "array-bracket-spacing": "error",
  "array-element-newline": ["error", "consistent"],
  "arrow-parens"         : ["error", "as-needed", { requireForBlockBody: true }],
  "arrow-spacing"        : "error",
  "block-spacing"        : "error",
  "brace-style"          : "error",
  "comma-dangle"         : ["error", "always-multiline"],
  "comma-spacing"        : [
    "error",
    {
      before: false,
      after : true,
    },
  ],
  "comma-style"                   : ["error", "last"],
  "computed-property-spacing"     : ["error", "never", { enforceForClassMembers: true }],
  "dot-location"                  : ["error", "property"],
  "eol-last"                      : ["error", "always"],
  "func-call-spacing"             : ["error", "never"],
  "function-call-argument-newline": ["error", "consistent"],
  "function-paren-newline"        : ["error", "multiline"],
  "generator-star-spacing"        : [
    "error",
    {
      before: true,
      after : false,
    },
  ],
  "implicit-arrow-linebreak": ["error", "beside"],
  indent                    : [
    "error",
    2,
    {
      SwitchCase              : 1,
      VariableDeclarator      : "first",
      MemberExpression        : 1,
      FunctionDeclaration     : { parameters: "first" },
      FunctionExpression      : { parameters: "first" },
      CallExpression          : { arguments: "first" },
      ArrayExpression         : "first",
      ObjectExpression        : "first",
      ImportDeclaration       : "first",
      flatTernaryExpressions  : false,
      offsetTernaryExpressions: true,
    },
  ],
  "jsx-quotes" : ["error", "prefer-double"],
  "key-spacing": [
    "error",
    {
      beforeColon: false,
      afterColon : true,
      align      : {
        beforeColon: false,
        afterColon : true,
        on         : "colon",
        mode       : "strict",
      },
    },
  ],
  "keyword-spacing": [
    "error",
    {
      before: true,
      after : true,
    },
  ],
  "line-comment-position": ["error", { position: "above" }],
  "linebreak-style"      : ["error", "unix"],
  "lines-around-comment" : [
    "error",
    {
      beforeBlockComment: true,
      beforeLineComment : true,
      allowBlockStart   : true,
      allowClassStart   : true,
      allowObjectStart  : true,
      allowArrayStart   : true,
    },
  ],
  "lines-between-class-members": ["error", "always"],
  "max-len"                    : [
    "error",
    {
      code                  : 120,
      tabWidth              : 2,
      comments              : 120,
      ignoreUrls            : true,
      ignoreTemplateLiterals: true,
      ignoreRegExpLiterals  : true,
    },
  ],
  "max-statements-per-line" : ["error", { max: 1 }],
  "multiline-ternary"       : ["error", "always-multiline"],
  "new-parens"              : ["error", "never"],
  "newline-per-chained-call": ["error", { ignoreChainWithDepth: 2 }],
  "no-multi-spaces"         : "error",
  "no-multiple-empty-lines" : [
    "error",
    {
      max   : 2,
      maxEOF: 0,
    },
  ],
  "no-tabs"                         : "error",
  "no-trailing-spaces"              : "error",
  "no-whitespace-before-property"   : "error",
  "nonblock-statement-body-position": ["error", "beside"],
  "object-curly-newline"            : [
    "error",
    {
      multiline : true,
      consistent: true,
    },
  ],
  "object-curly-spacing": [
    "error",
    "always",
    {
      arraysInObjects : true,
      objectsInObjects: true,
    },
  ],
  "object-property-newline": "error",
  "operator-linebreak"     : ["error", "before"],
  "padded-blocks"          : [
    "error",
    {
      blocks  : "never",
      classes : "always",
      switches: "never",
    },
  ],
  quotes               : ["error", "double", { avoidEscape: true }],
  "rest-spread-spacing": ["error", "never"],
  semi                 : ["error", "always"],
  "semi-spacing"       : [
    "error",
    {
      before: false,
      after : true,
    },
  ],
  "semi-style"                 : ["error", "last"],
  "space-before-blocks"        : "error",
  "space-before-function-paren": [
    "error",
    {
      anonymous : "always",
      named     : "never",
      asyncArrow: "always",
    },
  ],
  "space-in-parens"       : ["error", "never"],
  "space-infix-ops"       : "error",
  "space-unary-ops"       : "error",
  "switch-colon-spacing"  : "error",
  "template-curly-spacing": ["error", "always"],
  "template-tag-spacing"  : "error",
  "unicode-bom"           : "error",
  "wrap-iife"             : ["error", "inside", { functionPrototypeMethods: true }],
  "yield-star-spacing"    : ["error", "before"],
};
