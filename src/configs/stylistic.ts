import plugin from "@stylistic/eslint-plugin";
import { type Linter } from "eslint";
import { smartConfig } from "#utils";

const stylisticRules: Partial<Linter.RulesRecord> = {
  "array-bracket-newline": ["error", { multiline: true }],
  "array-bracket-spacing": "error",
  "array-element-newline": ["error", "consistent"],
  "arrow-parens"         : ["error", "as-needed", { requireForBlockBody: true }],
  "arrow-spacing"        : "error",
  "block-spacing"        : "error",
  "brace-style"          : ["error", "1tbs"],
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
  "function-call-argument-newline": ["error", "consistent"],
  "function-call-spacing"         : ["error", "never"],
  "function-paren-newline"        : ["error", "multiline"],
  "generator-star-spacing"        : [
    "error",
    {
      before: true,
      after : false,
    },
  ],
  "implicit-arrow-linebreak": ["error", "beside"],
  "indent"                  : [
    "error",
    2,
    {
      SwitchCase              : 1,
      VariableDeclarator      : "first",
      MemberExpression        : 1,
      FunctionDeclaration     : { parameters: "first" },
      FunctionExpression      : { parameters: "first" },
      StaticBlock             : { body: 1 },
      CallExpression          : { arguments: "first" },
      ArrayExpression         : "first",
      ObjectExpression        : "first",
      ImportDeclaration       : "first",
      flatTernaryExpressions  : false,
      offsetTernaryExpressions: true,
    },
  ],
  "jsx-closing-bracket-location": ["error", "tag-aligned"],
  "jsx-closing-tag-location"    : ["error", "tag-aligned"],
  "jsx-curly-newline"           : ["error", "consistent"],
  "jsx-curly-spacing"           : [
    "error",
    {
      when      : "never",
      attributes: { allowMultiline: false },
      children  : true,
    },
  ],
  "jsx-equals-spacing"       : ["error", "never"],
  "jsx-first-prop-new-line"  : ["error", "multiline"],
  "jsx-function-call-newline": ["error", "multiline"],
  "jsx-indent"               : ["error", 2],
  "jsx-indent-props"         : ["error", 2],
  "jsx-max-props-per-line"   : [
    "error",
    {
      when   : "multiline",
      maximum: 1,
    },
  ],
  "jsx-newline": [
    "error",
    {
      prevent        : true,
      allowMultilines: true,
    },
  ],
  "jsx-one-expression-per-line": ["error", { allow: "non-jsx" }],
  "jsx-pascal-case"            : "error",
  "jsx-props-no-multi-spaces"  : "error",
  "jsx-quotes"                 : ["error", "prefer-double"],
  "jsx-self-closing-comp"      : [
    "error",
    {
      component: true,
      html     : true,
    },
  ],
  "jsx-tag-spacing": [
    "error",
    {
      closingSlash     : "never",
      beforeSelfClosing: "always",
      afterOpening     : "never",
      beforeClosing    : "proportional-always",
    },
  ],
  "jsx-wrap-multilines": [
    "error", {
      declaration  : "parens-new-line",
      assignment   : "parens-new-line",
      return       : "parens-new-line",
      arrow        : "parens-new-line",
      condition    : "parens-new-line",
      logical      : "parens-new-line",
      prop         : "parens-new-line",
      propertyValue: "parens-new-line",
    },
  ],
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
      beforeBlockComment  : true,
      beforeLineComment   : true,
      afterHashbangComment: true,
      allowBlockStart     : true,
      allowClassStart     : true,
      allowObjectStart    : true,
      allowArrayStart     : true,
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
  "max-statements-per-line": ["error", { max: 1 }],
  "member-delimiter-style" : [
    "error", {
      multiline: {
        delimiter  : "semi",
        requireLast: true,
      },
      singleline: {
        delimiter  : "semi",
        requireLast: true,
      },
      multilineDetection: "brackets",
    },
  ],
  "multiline-comment-style" : "off",
  "multiline-ternary"       : ["error", "always-multiline"],
  "new-parens"              : ["error", "never"],
  "newline-per-chained-call": ["error", { ignoreChainWithDepth: 2 }],
  "no-confusing-arrow"      : "error",
  "no-extra-parens"         : "error",
  "no-extra-semi"           : "error",
  "no-floating-decimal"     : "error",
  "no-mixed-operators"      : "error",
  "no-mixed-spaces-and-tabs": "error",
  "no-multi-spaces"         : "error",
  "no-multiple-empty-lines" : [
    "error",
    {
      max   : 2,
      maxEOF: 0,
      maxBOF: 0,
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
  "object-property-newline"     : "error",
  "one-var-declaration-per-line": ["error", "initializations"],
  "operator-linebreak"          : ["error", "before"],
  "padded-blocks"               : [
    "error",
    {
      blocks  : "never",
      classes : "always",
      switches: "never",
    },
  ],
  "quote-props": ["error", "consistent-as-needed"],
  "quotes"     : [
    "error",
    "double",
    {
      avoidEscape          : true,
      allowTemplateLiterals: "avoidEscape",
    },
  ],
  "rest-spread-spacing": ["error", "never"],
  "semi"               : ["error", "always"],
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
  "space-in-parens"        : ["error", "never"],
  "space-infix-ops"        : "error",
  "space-unary-ops"        : "error",
  "spaced-comment"         : ["error", "always"],
  "switch-colon-spacing"   : "error",
  "template-curly-spacing" : ["error", "always"],
  "template-tag-spacing"   : "error",
  "type-annotation-spacing": [
    "error",
    {
      before   : false,
      after    : true,
      overrides: {
        arrow: {
          before: true,
          after : true,
        },
      },
    },
  ],
  "type-generic-spacing"    : "error",
  "type-named-tuple-spacing": "error",
  "wrap-iife"               : ["error", "inside", { functionPrototypeMethods: true }],
  "yield-star-spacing"      : ["error", "before"],
};

const rules = Object.fromEntries(Object.entries(stylisticRules).map(([key, value]) => [`@stylistic/${ key }`, value]));

export const stylistic = smartConfig(
  plugin.configs.recommended,
  { rules },
);
