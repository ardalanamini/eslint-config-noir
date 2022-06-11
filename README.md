# eslint-config-noir

[![Test](https://github.com/ardalanamini/eslint-config-noir/actions/workflows/test.yml/badge.svg)](https://github.com/ardalanamini/eslint-config-noir/actions/workflows/test.yml)

Noir ESLint shareable config.

## Installation

You'll first need to install [ESLint](http://eslint.org):

```shell
npm i -D eslint
```

Next, install `eslint-config-noir`:

```shell
npm i -D eslint-config-noir
```

## Usage

Add `noir` to the `extends` section of your `.eslintrc` configuration file. You can omit the `eslint-config-` prefix:

```json
{
  "extends": [
    "eslint:recommended",
    "noir"
  ]
}
```

With [TypeScript](https://www.typescriptlang.org) support:

```json
{
  "extends": [
    "eslint:recommended",
    "noir",
    "noir/typescript"
  ]
}
```
