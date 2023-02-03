module.exports = {
  root: true,
  extends: ['airbnb', 'airbnb/hooks', 'airbnb-typescript'],
  parser: '@typescript-eslint/parser',
  parserOptions: { project: ['./tsconfig.json'] },
  plugins: ['@typescript-eslint'],
  rules: {
    // typescript rules
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/lines-between-class-members': 'off',
    '@typescript-eslint/indent': 'off',
    '@typescript-eslint/naming-convention': 'off',
    '@typescript-eslint/comma-dangle': 'off',
    '@typescript-eslint/no-unused-expressions': 'off',
    '@typescript-eslint/no-redeclare': 'off',
    // react rules
    'react/prop-types': 'off',
    'react/jsx-no-bind': 'off',
    'react/function-component-definition': 'off',
    'react/jsx-no-constructed-context-values': 'off',
    'react/no-unstable-nested-components': 'off',
    'react/jsx-no-useless-fragment': 'off',
    'react/jsx-indent': 'off',
    'react/jsx-wrap-multilines': 'off',
    'react/state-in-constructor': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'react/static-property-placement': 'off',
    'react/require-default-props': 'off',
    'react/destructuring-assignment': 'off',
    'react/sort-comp': 'off',
    'react/no-danger': 'off',
    'react/no-array-index-key': 'off',
    // base eslint rules
    'no-nested-ternary': 'off',
    'default-case': 'off',
    'arrow-parens': 'off',
    'function-paren-newline': 'off',
    'react/jsx-curly-newline': 'off',
    'no-unused-expressions': 'off',
    camelcase: 'off',
    'no-confusing-arrow': 'off',
    'operator-linebreak': 'off',
    'object-curly-newline': 'off',
    'implicit-arrow-linebreak': 'off',
    'spaced-comment': 'off',
    'comma-dangle': [
      'error',
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'ignore'
      }
    ],
    'max-len': [
      'error',
      100,
      {
        ignoreTrailingComments: true,
        ignoreComments: true,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreRegExpLiterals: true,
        ignoreTemplateLiterals: true
      }
    ],
    'no-underscore-dangle': 'off',
    'class-methods-use-this': 'off',
    // import rules
    'import/no-extraneous-dependencies': 'off',
    'import/prefer-default-export': 'off',
    // jsx-a11y rules
    'jsx-a11y/control-has-associated-label': 'off',
    'jsx-a11y/mouse-events-have-key-events': 'off',
    'jsx-a11y/label-has-for': 'off',
    'jsx-a11y/anchor-is-valid': 'off',
    'jsx-a11y/no-autofocus': 'off'
  }
};
