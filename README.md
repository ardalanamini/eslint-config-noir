# eslint-config-noir

[![Test](https://github.com/ardalanamini/eslint-config-noir/actions/workflows/test.yml/badge.svg)](https://github.com/ardalanamini/eslint-config-noir/actions/workflows/test.yml)
[![Npm Version](https://img.shields.io/npm/v/eslint-config-noir.svg)](https://www.npmjs.com/package/eslint-config-noir)
[![License](https://img.shields.io/github/license/ardalanamini/eslint-config-noir.svg)](https://github.com/ardalanamini/eslint-config-noir/blob/master/LICENSE)
[![Pull Requests](https://img.shields.io/badge/PRs-Welcome-brightgreen.svg)](https://github.com/ardalanamini/eslint-config-noir/pulls)
[![Known Vulnerabilities](https://snyk.io/test/github/ardalanamini/eslint-config-noir/badge.svg?targetFile=package.json)](https://snyk.io/test/github/ardalanamini/eslint-config-noir?targetFile=package.json)
[![Npm Total Downloads](https://img.shields.io/npm/dt/eslint-config-noir.svg)](https://www.npmjs.com/package/eslint-config-noir)
[![Npm Monthly Downloads](https://img.shields.io/npm/dm/eslint-config-noir.svg)](https://www.npmjs.com/package/eslint-config-noir)
[![Github Stars](https://img.shields.io/github/stars/ardalanamini/eslint-config-noir.svg?style=social&label=Stars)](https://github.com/ardalanamini/eslint-config-noir)
[![Github Forks](https://img.shields.io/github/forks/ardalanamini/eslint-config-noir.svg?style=social&label=Fork)](https://github.com/ardalanamini/eslint-config-noir)

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

With [Import](https://github.com/import-js/eslint-plugin-import) support:

> You'll first need to install [Import ESLint Plugin](https://github.com/import-js/eslint-plugin-import).

```json
{
  "extends": [
    "eslint:recommended",
    "noir",
    "plugin:@typescript-eslint/recommended",
    "plugin:import/recommended",
    "noir/import"
  ]
}
```

With [TypeScript](https://www.typescriptlang.org) support:

> You'll first need to install [TypeScript ESLint](https://typescript-eslint.io).

```json
{
  "extends": [
    "eslint:recommended",
    "noir",
    "plugin:@typescript-eslint/recommended",
    "noir/typescript"
  ]
}
```

Or all of the configs at once:

```json
{
  "extends": "noir/all"
}
```
