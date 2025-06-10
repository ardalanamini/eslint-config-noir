import importPlugin from "eslint-plugin-import";
import { configs as plugin } from "typescript-eslint";
import { type TConfigWithExtends, type TConfigWithExtendsArray, ALLOWED_MAGIC_NUMBERS, smartConfig } from "#utils";

const config: TConfigWithExtends = {
  languageOptions: {
    ecmaVersion  : "latest",
    sourceType   : "module",
    parserOptions: {
      projectService: true,
    },
  },
  rules: {
    /**
     * Supported Rules -----------------------------------------------------------------------------------------------
     * @see https://typescript-eslint.io/rules/#supported-rules
     */

    "@typescript-eslint/array-type"                     : ["error", { default: "array-simple" }],
    "@typescript-eslint/ban-tslint-comment"             : "error",
    "@typescript-eslint/class-literal-property-style"   : ["error", "fields"],
    "@typescript-eslint/consistent-generic-constructors": ["error", "constructor"],
    "@typescript-eslint/consistent-indexed-object-style": ["error", "record"],
    "@typescript-eslint/consistent-return"              : "error",
    "@typescript-eslint/consistent-type-assertions"     : [
      "error",
      {
        assertionStyle             : "as",
        objectLiteralTypeAssertions: "allow-as-parameter",
      },
    ],
    "@typescript-eslint/consistent-type-definitions": ["error", "interface"],
    "@typescript-eslint/consistent-type-exports"    : ["error", { fixMixedExportsWithInlineTypeSpecifier: true }],
    "@typescript-eslint/consistent-type-imports"    : [
      "error", {
        prefer  : "type-imports",
        fixStyle: "inline-type-imports",
      },
    ],
    "@typescript-eslint/explicit-function-return-type": [
      "error",
      {
        allowExpressions                                    : true,
        allowTypedFunctionExpressions                       : true,
        allowHigherOrderFunctions                           : true,
        allowDirectConstAssertionInArrowFunctions           : true,
        allowConciseArrowFunctionExpressionsStartingWithVoid: true,
      },
    ],
    "@typescript-eslint/explicit-member-accessibility" : "error",
    "@typescript-eslint/explicit-module-boundary-types": "error",
    "@typescript-eslint/member-ordering"               : [
      "error",
      {
        default: {
          memberTypes: [
            // Index signature
            "signature",
            "call-signature",

            // Fields
            "public-static-field",
            "protected-static-field",
            "private-static-field",
            "#private-static-field",

            "public-decorated-field",
            "protected-decorated-field",
            "private-decorated-field",

            "public-instance-field",
            "protected-instance-field",
            "private-instance-field",
            "#private-instance-field",

            "public-abstract-field",
            "protected-abstract-field",

            "public-field",
            "protected-field",
            "private-field",
            "#private-field",

            "static-field",
            "instance-field",
            "abstract-field",

            "decorated-field",

            "field",

            // Static initialization
            "static-initialization",

            // Constructors
            "public-constructor",
            "protected-constructor",
            "private-constructor",

            "constructor",

            // Accessors
            "public-static-accessor",
            "protected-static-accessor",
            "private-static-accessor",
            "#private-static-accessor",

            "public-decorated-accessor",
            "protected-decorated-accessor",
            "private-decorated-accessor",

            "public-instance-accessor",
            "protected-instance-accessor",
            "private-instance-accessor",
            "#private-instance-accessor",

            "public-abstract-accessor",
            "protected-abstract-accessor",

            "public-accessor",
            "protected-accessor",
            "private-accessor",
            "#private-accessor",

            "static-accessor",
            "instance-accessor",
            "abstract-accessor",

            "decorated-accessor",

            "accessor",

            // Getters
            "public-static-get",
            "protected-static-get",
            "private-static-get",
            "#private-static-get",

            "public-decorated-get",
            "protected-decorated-get",
            "private-decorated-get",

            "public-instance-get",
            "protected-instance-get",
            "private-instance-get",
            "#private-instance-get",

            "public-abstract-get",
            "protected-abstract-get",

            "public-get",
            "protected-get",
            "private-get",
            "#private-get",

            "static-get",
            "instance-get",
            "abstract-get",

            "decorated-get",

            "get",

            // Setters
            "public-static-set",
            "protected-static-set",
            "private-static-set",
            "#private-static-set",

            "public-decorated-set",
            "protected-decorated-set",
            "private-decorated-set",

            "public-instance-set",
            "protected-instance-set",
            "private-instance-set",
            "#private-instance-set",

            "public-abstract-set",
            "protected-abstract-set",

            "public-set",
            "protected-set",
            "private-set",
            "#private-set",

            "static-set",
            "instance-set",
            "abstract-set",

            "decorated-set",

            "set",

            // Methods
            "public-static-method",
            "protected-static-method",
            "private-static-method",
            "#private-static-method",

            "public-decorated-method",
            "protected-decorated-method",
            "private-decorated-method",

            "public-instance-method",
            "protected-instance-method",
            "private-instance-method",
            "#private-instance-method",

            "public-abstract-method",
            "protected-abstract-method",

            "public-method",
            "protected-method",
            "private-method",
            "#private-method",

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
    "@typescript-eslint/no-array-delete"                : "error",
    "@typescript-eslint/no-confusing-non-null-assertion": "error",
    "@typescript-eslint/no-confusing-void-expression"   : [
      "error",
      {
        ignoreArrowShorthand: true,
        ignoreVoidOperator  : true,
      },
    ],
    "@typescript-eslint/no-duplicate-enum-values"      : "error",
    "@typescript-eslint/no-duplicate-type-constituents": "error",
    "@typescript-eslint/no-empty-object-type"          : [
      "error",
      { allowInterfaces: "with-single-extends" },
    ],
    "@typescript-eslint/no-invalid-void-type"                        : "error",
    "@typescript-eslint/no-meaningless-void-operator"                : "warn",
    "@typescript-eslint/no-mixed-enums"                              : "error",
    "@typescript-eslint/no-non-null-asserted-nullish-coalescing"     : "error",
    "@typescript-eslint/no-require-imports"                          : "error",
    "@typescript-eslint/no-unnecessary-condition"                    : "error",
    "@typescript-eslint/no-unnecessary-parameter-property-assignment": "error",
    "@typescript-eslint/no-unnecessary-qualifier"                    : "error",
    "@typescript-eslint/no-unnecessary-template-expression"          : "error",
    "@typescript-eslint/no-unnecessary-type-arguments"               : "error",
    "@typescript-eslint/no-unnecessary-type-parameters"              : "error",
    "@typescript-eslint/no-unsafe-enum-comparison"                   : "error",
    "@typescript-eslint/no-unsafe-function-type"                     : "error",
    "@typescript-eslint/no-unsafe-type-assertion"                    : "error",
    "@typescript-eslint/no-unsafe-unary-minus"                       : "error",
    "@typescript-eslint/no-useless-empty-export"                     : "error",
    "@typescript-eslint/no-wrapper-object-types"                     : "error",
    "@typescript-eslint/non-nullable-type-assertion-style"           : "error",
    "@typescript-eslint/prefer-find"                                 : "error",
    "@typescript-eslint/prefer-for-of"                               : "error",
    "@typescript-eslint/prefer-function-type"                        : "error",
    "@typescript-eslint/prefer-includes"                             : "error",
    "@typescript-eslint/prefer-nullish-coalescing"                   : "error",
    "@typescript-eslint/prefer-optional-chain"                       : "error",
    "@typescript-eslint/prefer-readonly"                             : "error",
    "@typescript-eslint/prefer-reduce-type-parameter"                : "error",
    "@typescript-eslint/prefer-return-this-type"                     : "error",
    "@typescript-eslint/prefer-string-starts-ends-with"              : [
      "error",
      { allowSingleElementEquality: "always" },
    ],
    "@typescript-eslint/ban-ts-comment"             : ["error", { "ts-expect-error": "allow-with-description" }],
    "@typescript-eslint/promise-function-async"     : "error",
    "@typescript-eslint/require-array-sort-compare" : ["error", { ignoreStringArrays: true }],
    "@typescript-eslint/switch-exhaustiveness-check": [
      "error", {
        allowDefaultCaseForExhaustiveSwitch: true,
        requireDefaultForNonUnion          : true,
        considerDefaultExhaustiveForUnions : true,
      },
    ],
    "@typescript-eslint/unified-signatures": ["error", { ignoreDifferentlyNamedParameters: true }],

    /**
     * Extension Rules -----------------------------------------------------------------------------------------------
     * @see https://typescript-eslint.io/rules/#extension-rules
     */

    "class-methods-use-this"                   : "off",
    "@typescript-eslint/class-methods-use-this": "error",

    "default-param-last"                   : "off",
    "@typescript-eslint/default-param-last": "error",

    "dot-notation"                   : "off",
    "@typescript-eslint/dot-notation": "error",

    "no-invalid-this"                   : "off",
    "@typescript-eslint/no-invalid-this": "error",

    "no-magic-numbers"                   : "off",
    "@typescript-eslint/no-magic-numbers": [
      "error",
      {
        ignore                       : ALLOWED_MAGIC_NUMBERS,
        ignoreDefaultValues          : true,
        ignoreEnums                  : true,
        ignoreNumericLiteralTypes    : true,
        ignoreReadonlyClassProperties: true,
      },
    ],

    "no-shadow"                   : "off",
    "@typescript-eslint/no-shadow": "error",

    "no-throw-literal"                   : "off",
    "@typescript-eslint/only-throw-error": "error",

    "no-use-before-define"                   : "off",
    "@typescript-eslint/no-use-before-define": "error",

    "no-useless-constructor"                   : "off",
    "@typescript-eslint/no-useless-constructor": "error",

    "no-return-await"                : "off",
    "@typescript-eslint/return-await": ["error", "in-try-catch"],
  },
};

config.settings ??= {};

config.settings["import/resolver"] = {
  typescript: true,
  node      : true,
};

export const typescript = smartConfig(
  importPlugin.flatConfigs.typescript,

  // :))
  // eslint-disable-next-line @typescript-eslint/no-unsafe-type-assertion
  plugin.recommended as TConfigWithExtendsArray,
  config,
);
