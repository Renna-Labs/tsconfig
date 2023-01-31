# Renna Labs Typescript Config

[![npm version](https://badge.fury.io/js/@rennalabs%2Ftsconfig.svg)](https://badge.fury.io/js/@rennalabs%2Ftsconfig)

## Table of Contents

- [Renna Labs' Typescript Config](#rennalabs-typescript-config)
  - [Table of Contents](#table-of-contents)
  - [Installation](#installation)
  - [Configurations](#configurations)
    - [Default Config](#default-config)
    - [React Config](#react-config)
  - [Overriding Rules](#overriding-rules)

## Installation

This package has several [peer dependencies](https://docs.npmjs.com/files/package.json#peerdependencies).

Run `npm info "@rennalabs/tsconfig@latest" peerDependencies` to list the peer dependencies and versions.

1. Make sure your project is using a Node version >= `10.12.0`

2. Install dependencies

   - **Option 1:** With `npx`

     ```sh
     npx install-peerdeps --dev @rennalabs/tsconfig
     ```

     **Note:** `npx` is a package runner that comes with npm 5.2 and higher that makes installing peer dependencies easier

   - **Option 2:** Without `npx`

     ```sh
     npm install --save-dev @rennalabs/tsconfig @typescript-eslint/eslint-plugin@5.x.x @typescript-eslint/parser@5.x.x @babel/preset-react@7.x.x @babel/preset-typescript@7.x.x typescript@4.x.x

     # or

     yarn add --dev @rennalabs/tsconfig @typescript-eslint/eslint-plugin@5.x.x @typescript-eslint/parser@5.x.x @babel/preset-react@7.x.x @babel/preset-typescript@7.x.x typescript@4.x.x
     ```

3. Create a `tsconfig.json` file at the root of your project with the following:

   ```json
   {
     "root": true,
     "extends": "@rennalabs/tsconfig/tsconfig.json"
   }
   ```

   Then make sure to [specify your environment](#specifying-environments) based on your project.

## ESLint Configurations

We export two ESLint configurations for your usage:

1. [Default](#default-config)
2. [React](#react-config)

### Default Config

In your `.eslintrc`:

```json
{
  "root": true,
  "extends": "@rennalabs/tsconfig"
}
```

**In your `.babelrc`:**

```json
{
  "presets": ["@babel/preset-typescript"]
}
```

> **NOTE:** Make sure to [specify your environment](#specifying-environments) based on your project

### React Config

Includes everything in the default config, plus environment specification and react-specific rules with [`@rennalabs/eslint-config/react`](https://github.com/Renna-Labs/eslint-config#react-config).

**In your `.eslintrc`:**

```json
{
  "root": true,
  "extends": "@rennalabs/tsconfig/react"
}
```

**In your `.babelrc`:**

```json
{
  "presets": ["@babel/preset-react", "@babel/preset-typescript"]
}
```

## Overriding Rules

If you'd like to override any rules, you can add the rules to your `.eslintrc` and/or `tsconfig.json` filse.

- `.eslintrc`

```json
{
  "root": true,
  "extends": "@rennalabs/tsconfig",
  "rules": {
    "no-console": "off"
  }
}
```

- `tsconfig.json`

```json
{
  "compilerOptions": {
    "declaration": true
  }
}
```
