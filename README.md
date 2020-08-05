<p align="center">
  <a href="https://kushkipagos.com/" target="blank"><img src="https://login-primary-console.kushkipagos.com/11441fb761559cede844e04af1985956.svg" width="320" alt="Kushki Logo" /></a>
</p>

# Kushki ESLint config

Kushki [ESLint](https://eslint.org) configuration file for NodeJS projects written in [TypeScript](https://www.typescriptlang.org/) and using [prettier](https://prettier.io/). It is the ESLint equivalent for [@kushki/tslint](https://github.com/Kushki/kushki-tslint) config file.

## Installation

First, install this module running:

```bash
npm install @kushki/eslint-config --save-dev
```

Then, create a `.eslintrc.js` file:

```json
module.exports = {
  "extends": ["@kushki"],
}
```

## Usage

In your `package.json` file, add a script:

```json
{
  "lint:check": "npx eslint --ext=ts src"
}
```
