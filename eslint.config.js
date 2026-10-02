import js from '@eslint/js'
import globals from 'globals'
import importPlugin from 'eslint-plugin-import'
import nPlugin from 'eslint-plugin-n'
import promisePlugin from 'eslint-plugin-promise'

export default [
  {
    ignores: ['node_modules/**', 'coverage/**']
  },

  js.configs.recommended,

  {
    files: ['**/*.js'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.node
      }
    },
    plugins: {
      import: importPlugin,
      n: nPlugin,
      promise: promisePlugin
    },
    rules: {
      'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
      'no-undef': 'error',
      'no-console': 'off',
      'semi': ['error', 'never'],
      'quotes': ['error', 'single'],
      'object-curly-spacing': ['error', 'always'],
      'comma-dangle': ['error', 'never'],
      'keyword-spacing': 'error',
      'space-before-function-paren': ['error', 'always']
    }
  }
]
