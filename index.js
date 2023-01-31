module.exports = {
  extends: ['@rennalabs/eslint-config', 'plugin:@typescript-eslint/recommended'],
  plugins: ['@typescript-eslint'],
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 13,
    sourceType: 'module'
  },
  rules: {
    'no-param-reassign': 'off',
    'no-void': 'off',
    'consistent-return': 'off',
    'no-restricted-syntax': 'off',
    'arrow-body-style': 'off',
    'no-undef': 'off',
    'prefer-arrow-callback': 'off'
  }
};
