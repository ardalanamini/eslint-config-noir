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

Noir is an opinionated sharable ESLint config.

## Installation

### PNPM

```shell
pnpm add -D eslint eslint-config-noir
```

### NPM

```shell
npm i -D eslint eslint-config-noir
```

### Yarn

```shell
yarn add -D eslint eslint-config-noir
```

## Usage

Add `noir` configs to your ESLint flat configuration file:

```javascript
import { configs, smartConfig } from "eslint-config-noir";

export default smartConfig(
  configs.javascript,
);
```

### With [Stylistic](https://eslint.style) support:

```javascript
import { configs, smartConfig } from "eslint-config-noir";

export default smartConfig(
  configs.javascript,
  configs.stylistic,
);
```

### With [Import](https://github.com/import-js/eslint-plugin-import) support:

```javascript
import { configs, smartConfig } from "eslint-config-noir";

export default smartConfig(
  configs.javascript,
  configs.imports,
);
```

### With `Export` support:

```javascript
import { configs, smartConfig } from "eslint-config-noir";

export default smartConfig(
  configs.javascript,
  configs.exports,
);
```

### With [TypeScript](https://www.typescriptlang.org) support:

```javascript
import { configs, smartConfig } from "eslint-config-noir";

export default smartConfig(
  configs.javascript,
  configs.typescript,
  {
    languageOptions: {
      parserOptions: {
        project: "./tsconfig.json",
      },
    },
  },
);
```

### With [Unicorn](https://github.com/sindresorhus/eslint-plugin-unicorn) support:

```javascript
import { configs, smartConfig } from "eslint-config-noir";

export default smartConfig(
  configs.javascript,
  configs.unicorn,
);
```

### With all the configs at once:

```javascript
import { configs, smartConfig } from "eslint-config-noir";

export default smartConfig(
  configs.recommended,
  {
    languageOptions: {
      parserOptions: {
        project: "./tsconfig.json",
      },
    },
  },
);
```
