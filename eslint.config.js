import globals from 'globals';
import pluginJs from '@eslint/js';

/** @type {import('eslint').Linter.Config[]} */
export default [
  { languageOptions: { globals: globals.node } },
  pluginJs.configs.recommended,
  {
    rules: {
      'linebreak-style': ['error', 'unix'],
      'no-trailing-spaces': 'error',
      'eol-last': ['error', 'always'],
      'indent': ['error', 2],
    },
  },
];
