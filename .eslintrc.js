const path = require('node:path');

module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    jest: false,
    node: true
  },
  extends: ['plugin:unicorn/recommended', 'plugin:solid/recommended', 'airbnb-base/legacy'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: 'module'
  },
  ignorePatterns: [
    'release',
    'electron',
    'dist-electron',
    'dist-solidjs',
    'config',
    'node_modules'
  ],
  plugins: ['solid'],
  settings: {
    'import/resolver': {
      node: {
        paths: [path.resolve(__dirname), path.resolve(__dirname, 'electron')]
      },
      alias: {
        map: [['src', path.resolve(__dirname, 'src')]],
        extensions: ['.js', '.jsx', '.json']
      }
    }
  },
  rules: {
    'linebreak-style': 0,
    'max-len': ['error', { code: 120 }],
    'no-nested-ternary': 'off',
    'unicorn/filename-case': 'off',
    'unicorn/prefer-query-selector': 'off',
    'unicorn/prevent-abbreviations': 'off',
    'unicorn/no-array-for-each': 'off',
    'unicorn/no-null': 'off',
    'import/prefer-default-export': 'off',
    'no-case-declarations': 'off',
    'no-param-reassign': 'off',
    semi: ['error', 'always'],
    quotes: ['error', 'single', { avoidEscape: true }],
    'unicorn/prefer-module': 'off',
    'unicorn/no-negated-condition': 'off',
    'no-use-before-define': ['error', 'nofunc'],
    'import/no-extraneous-dependencies': [0, { devDependencies: true }],
    'no-mixed-operators': 'off',
    'unicorn/no-array-reduce': 'off',
    'eol-last': 0,
    'unicorn/prefer-top-level-await': 'off',
    'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 0 }]
  }
};
