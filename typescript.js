"use strict";

exports.rules = {
  /**
   * Supported Rules ---------------------------------------------------------------------------------------------------
   * @see https://typescript-eslint.io/rules/#supported-rules
   */

  "@typescript-eslint/array-type"                     : ["error", { default: "array-simple" }],
  "@typescript-eslint/ban-tslint-comment"             : "error",
  "@typescript-eslint/class-literal-property-style"   : ["error", "fields"],
  "@typescript-eslint/consistent-generic-constructors": ["error", "constructor"],
  "@typescript-eslint/consistent-indexed-object-style": ["error", "record"],
  "@typescript-eslint/consistent-type-assertions"     : [
    "error",
    {
      assertionStyle             : "as",
      objectLiteralTypeAssertions: "allow-as-parameter",
    },
  ],
  "@typescript-eslint/consistent-type-definitions"  : ["error", "interface"],
  "@typescript-eslint/consistent-type-exports"      : "error",
  "@typescript-eslint/consistent-type-imports"      : ["error", { prefer: "no-type-imports" }],
  "@typescript-eslint/explicit-function-return-type": [
    "error",
    {
      allowTypedFunctionExpressions                       : true,
      allowHigherOrderFunctions                           : true,
      allowDirectConstAssertionInArrowFunctions           : true,
      allowConciseArrowFunctionExpressionsStartingWithVoid: true,
    },
  ],
  "@typescript-eslint/explicit-member-accessibility" : "error",
  "@typescript-eslint/explicit-module-boundary-types": "error",
  "@typescript-eslint/member-delimiter-style"        : "error",
  "@typescript-eslint/member-ordering"               : [
    "error",
    {
      default: {
        memberTypes: [
          // Index signature
          "signature",

          // Fields
          "public-static-field",
          "protected-static-field",
          "private-static-field",

          "public-decorated-field",
          "protected-decorated-field",
          "private-decorated-field",

          "public-instance-field",
          "protected-instance-field",
          "private-instance-field",

          "public-abstract-field",
          "protected-abstract-field",
          "private-abstract-field",

          "public-field",
          "protected-field",
          "private-field",

          "static-field",
          "instance-field",
          "abstract-field",

          "decorated-field",

          "field",

          // Constructors
          "public-constructor",
          "protected-constructor",
          "private-constructor",

          "constructor",

          // Getters
          "public-static-get",
          "protected-static-get",
          "private-static-get",

          "public-decorated-get",
          "protected-decorated-get",
          "private-decorated-get",

          "public-instance-get",
          "protected-instance-get",
          "private-instance-get",

          "public-abstract-get",
          "protected-abstract-get",
          "private-abstract-get",

          "public-get",
          "protected-get",
          "private-get",

          "static-get",
          "instance-get",
          "abstract-get",

          "decorated-get",

          "get",

          // Setters
          "public-static-set",
          "protected-static-set",
          "private-static-set",

          "public-decorated-set",
          "protected-decorated-set",
          "private-decorated-set",

          "public-instance-set",
          "protected-instance-set",
          "private-instance-set",

          "public-abstract-set",
          "protected-abstract-set",
          "private-abstract-set",

          "public-set",
          "protected-set",
          "private-set",

          "static-set",
          "instance-set",
          "abstract-set",

          "decorated-set",

          "set",

          // Methods
          "public-static-method",
          "protected-static-method",
          "private-static-method",

          "public-decorated-method",
          "protected-decorated-method",
          "private-decorated-method",

          "public-instance-method",
          "protected-instance-method",
          "private-instance-method",

          "public-abstract-method",
          "protected-abstract-method",
          "private-abstract-method",

          "public-method",
          "protected-method",
          "private-method",

          "static-method",
          "instance-method",
          "abstract-method",

          "decorated-method",

          "method",
        ],
        order: "alphabetically",
      },
    },
  ],
  "@typescript-eslint/method-signature-style"         : ["error", "method"],
  "@typescript-eslint/no-confusing-non-null-assertion": "error",
  "@typescript-eslint/no-confusing-void-expression"   : [
    "error",
    {
      ignoreArrowShorthand: true,
      ignoreVoidOperator  : true,
    },
  ],
  "@typescript-eslint/no-duplicate-enum-values"               : "error",
  "@typescript-eslint/no-invalid-void-type"                   : "error",
  "@typescript-eslint/no-meaningless-void-operator"           : "error",
  "@typescript-eslint/no-non-null-asserted-nullish-coalescing": "error",
  "@typescript-eslint/no-require-imports"                     : "error",
  "@typescript-eslint/no-unnecessary-condition"               : "error",
  "@typescript-eslint/no-unnecessary-qualifier"               : "error",
  "@typescript-eslint/no-unnecessary-type-arguments"          : "error",
  "@typescript-eslint/no-useless-empty-export"                : "error",
  "@typescript-eslint/non-nullable-type-assertion-style"      : "error",
  "@typescript-eslint/prefer-for-of"                          : "error",
  "@typescript-eslint/prefer-function-type"                   : "error",
  "@typescript-eslint/prefer-includes"                        : "error",
  "@typescript-eslint/prefer-nullish-coalescing"              : "error",
  "@typescript-eslint/prefer-optional-chain"                  : "error",
  "@typescript-eslint/prefer-readonly"                        : "error",
  "@typescript-eslint/prefer-reduce-type-parameter"           : "error",
  "@typescript-eslint/prefer-return-this-type"                : "error",
  "@typescript-eslint/prefer-string-starts-ends-with"         : "error",
  "@typescript-eslint/prefer-ts-expect-error"                 : "error",
  "@typescript-eslint/promise-function-async"                 : "error",
  "@typescript-eslint/require-array-sort-compare"             : ["error", { ignoreStringArrays: true }],
  "@typescript-eslint/sort-type-union-intersection-members"   : "error",
  "@typescript-eslint/switch-exhaustiveness-check"            : "error",
  "@typescript-eslint/type-annotation-spacing"                : "error",
  "@typescript-eslint/unified-signatures"                     : ["error", { ignoreDifferentlyNamedParameters: true }],

  /**
   * Extension Rules ---------------------------------------------------------------------------------------------------
   * @see https://typescript-eslint.io/rules/#extension-rules
   */

  "brace-style"                   : "off",
  "@typescript-eslint/brace-style": "error",

  "comma-dangle"                   : "off",
  "@typescript-eslint/comma-dangle": ["error", "always-multiline"],

  "comma-spacing"                   : "off",
  "@typescript-eslint/comma-spacing": [
    "error",
    {
      before: false,
      after : true,
    },
  ],

  "default-param-last"                   : "off",
  "@typescript-eslint/default-param-last": "error",

  "dot-notation"                   : "off",
  "@typescript-eslint/dot-notation": "error",

  "func-call-spacing"                   : "off",
  "@typescript-eslint/func-call-spacing": ["error", "never"],

  indent                     : "off",
  "@typescript-eslint/indent": [
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

  "keyword-spacing"                   : "off",
  "@typescript-eslint/keyword-spacing": [
    "error",
    {
      before: true,
      after : true,
    },
  ],

  "lines-between-class-members"                   : "off",
  "@typescript-eslint/lines-between-class-members": ["error", "always"],

  "no-invalid-this"                   : "off",
  "@typescript-eslint/no-invalid-this": "error",

  "no-magic-numbers"                   : "off",
  "@typescript-eslint/no-magic-numbers": [
    "error",
    {
      ignore                       : [0, 1, 2, 10],
      ignoreDefaultValues          : true,
      ignoreEnums                  : true,
      ignoreNumericLiteralTypes    : true,
      ignoreReadonlyClassProperties: true,
    },
  ],

  "no-shadow"                   : "off",
  "@typescript-eslint/no-shadow": "error",

  "no-throw-literal"                   : "off",
  "@typescript-eslint/no-throw-literal": "error",

  "no-use-before-define"                   : "off",
  "@typescript-eslint/no-use-before-define": "error",

  "no-useless-constructor"                   : "off",
  "@typescript-eslint/no-useless-constructor": "error",

  "object-curly-spacing"                   : "off",
  "@typescript-eslint/object-curly-spacing": [
    "error",
    "always",
    {
      arraysInObjects : true,
      objectsInObjects: true,
    },
  ],

  quotes                     : "off",
  "@typescript-eslint/quotes": ["error", "double", { avoidEscape: true }],

  "no-return-await"                : "off",
  "@typescript-eslint/return-await": ["error", "in-try-catch"],

  semi                     : "off",
  "@typescript-eslint/semi": ["error", "always"],

  "space-before-blocks"                   : "off",
  "@typescript-eslint/space-before-blocks": "error",

  "space-before-function-paren"                   : "off",
  "@typescript-eslint/space-before-function-paren": [
    "error",
    {
      anonymous : "always",
      named     : "never",
      asyncArrow: "always",
    },
  ],

  "space-infix-ops"                   : "off",
  "@typescript-eslint/space-infix-ops": "error",
};
