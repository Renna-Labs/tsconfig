# Renna Labs Typescript Config

[![npm version](https://badge.fury.io/js/@rennalabs%2Ftsconfig.svg)](https://badge.fury.io/js/@rennalabs%2Ftsconfig)

## Install

```sh
npx install-peerdeps --dev @rennalabs/tsconfig
```

## Usage

In your `.eslintrc.js`:

```tsx
module.exports = {
  extends: ['@rennalabs/tsconfig'],
  parserOptions: {
    project: './tsconfig.json'
  }
};
```

In your `tsconfig.json` you can extend our base config

```tsx
{
  "extends": "@rennalabs/tsconfig/tsconfig.json",
}
```

## License

MIT
