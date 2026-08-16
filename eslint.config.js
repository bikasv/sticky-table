import js from '@eslint/js';
import globals from 'globals';
import tseslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import reactPlugin from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import unusedImports from 'eslint-plugin-unused-imports';
import importNewlines from 'eslint-plugin-import-newlines';
import stylistic from '@stylistic/eslint-plugin';

export default [
  {
    ignores: ['dist/**', 'node_modules/**'],
  },
  {
    files: ['eslint.config.js'],
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
  },
  js.configs.recommended,
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: ['./tsconfig.json', './tsconfig.app.json', './tsconfig.node.json'],
        tsconfigRootDir: new URL('.', import.meta.url).pathname,
        sourceType: 'module',
        ecmaVersion: 'latest',
      },
      globals: {
        ...globals.browser,
      },
    },
    plugins: {
      '@stylistic': stylistic,
      'simple-import-sort': simpleImportSort,
      'unused-imports': unusedImports,
      'import-newlines': importNewlines,
      'react-refresh': reactRefresh,
      react: reactPlugin,
      '@typescript-eslint': tseslint,
      'react-hooks': reactHooks,
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      ...tseslint.configs['recommended-type-checked'].rules,
      ...tseslint.configs['stylistic-type-checked'].rules,
      ...reactPlugin.configs.flat.recommended.rules,
      ...reactPlugin.configs.flat['jsx-runtime'].rules,
      ...reactHooks.configs.flat.recommended.rules,
      '@stylistic/array-element-newline': ['error', 'consistent'],
      '@stylistic/arrow-parens': ['error', 'always'],
      '@stylistic/arrow-spacing': 'error',
      '@stylistic/block-spacing': 'error',
      '@stylistic/comma-dangle': ['error', 'always-multiline'],
      '@stylistic/comma-spacing': ['error', { before: false, after: true }],
      '@stylistic/dot-location': ['error', 'property'],
      '@stylistic/eol-last': ['error', 'always'],
      '@stylistic/function-call-spacing': ['error', 'never'],
      '@stylistic/function-call-argument-newline': ['error', 'consistent'],
      '@stylistic/indent': [2, 2],
      '@stylistic/jsx-child-element-spacing': 'error',
      '@stylistic/jsx-closing-bracket-location': 'error',
      '@stylistic/jsx-closing-tag-location': 'error',
      '@stylistic/jsx-curly-newline': ['error', { multiline: 'consistent', singleline: 'consistent' }],
      '@stylistic/jsx-curly-spacing': ['error', { when: 'never' }],
      '@stylistic/jsx-equals-spacing': ['error', 'never'],
      '@stylistic/jsx-first-prop-new-line': ['error', 'multiline-multiprop'],
      '@stylistic/jsx-indent-props': ['error', 2],
      '@stylistic/jsx-max-props-per-line': ['error', { maximum: { single: 2, multi: 1 } }],
      '@stylistic/jsx-quotes': ['error', 'prefer-double'],
      '@stylistic/jsx-self-closing-comp': ['error', { component: true, html: false }],
      '@stylistic/jsx-tag-spacing': ['error', { beforeSelfClosing: 'always' }],
      '@stylistic/jsx-wrap-multilines': ['error', { declaration: 'parens-new-line', assignment: 'parens-new-line', arrow: 'parens-new-line', condition: 'parens-new-line', logical: 'parens-new-line', prop: 'parens-new-line' }],
      '@stylistic/indent-binary-ops': [2, 2],
      '@stylistic/key-spacing': [2, { afterColon: true, beforeColon: false }],
      '@stylistic/keyword-spacing': [2, { after: true, before: true }],
      '@stylistic/max-statements-per-line': [2, { max: 1 }],
      '@stylistic/member-delimiter-style': 'error',
      '@stylistic/no-confusing-arrow': ['error', { onlyOneSimpleParam: true }],
      '@stylistic/no-extra-semi': 'error',
      '@stylistic/no-floating-decimal': 'error',
      '@stylistic/no-mixed-operators': 'error',
      '@stylistic/no-mixed-spaces-and-tabs': 'error',
      '@stylistic/no-multi-spaces': 'error',
      '@stylistic/no-multiple-empty-lines': 'error',
      '@stylistic/no-tabs': 'error',
      '@stylistic/no-trailing-spaces': 'error',
      '@stylistic/no-whitespace-before-property': 'error',
      '@stylistic/object-curly-newline': ['error', { multiline: true, consistent: true }],
      '@stylistic/object-curly-spacing': ['error', 'always'],
      '@stylistic/operator-linebreak': ['error', 'before'],
      '@stylistic/padding-line-between-statements': ['error', { blankLine: 'always', prev: ['const', 'let', 'var'], next: '*' }, { blankLine: 'any', prev: ['const', 'let', 'var'], next: ['const', 'let', 'var'] }],
      '@stylistic/quote-props': ['error', 'as-needed', { keywords: true }],
      '@stylistic/quotes': ['error', 'single'],
      '@stylistic/rest-spread-spacing': ['error', 'never'],
      '@stylistic/semi': 'error',
      '@stylistic/semi-spacing': 'error',
      '@stylistic/space-before-blocks': 'error',
      '@stylistic/space-before-function-paren': ['error', 'never'],
      '@stylistic/space-infix-ops': 'error',
      '@stylistic/spaced-comment': ['error', 'always'],
      '@stylistic/switch-colon-spacing': 'error',
      '@stylistic/template-curly-spacing': 'error',
      '@stylistic/type-annotation-spacing': 'error',
      '@stylistic/type-generic-spacing': 'error',
      '@stylistic/type-named-tuple-spacing': 'error',
      '@stylistic/wrap-regex': 'error',
      'import-newlines/enforce': ['error', { items: 3 }],
      'no-console': 'error',
      'no-duplicate-imports': 'error',
      'simple-import-sort/exports': 'error',
      'simple-import-sort/imports': 'error',
      'unused-imports/no-unused-imports': 'error',
    },
  },
];
