import js from '@eslint/js';
import tsParser from '@typescript-eslint/parser';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
export default [
  { ignores: ['dist/**', 'node_modules/**'] },
  { ...js.configs.recommended, languageOptions: { ...js.configs.recommended.languageOptions, globals: { process: 'readonly', console: 'readonly' } } },
  { files: ['**/*.{ts,tsx}'], languageOptions: { parser: tsParser, parserOptions: { ecmaVersion: 'latest', sourceType: 'module', ecmaFeatures: { jsx: true } }, globals: { console: 'readonly', document: 'readonly', window: 'readonly', navigator: 'readonly', localStorage: 'readonly', process: 'readonly' } }, plugins: { '@typescript-eslint': tsPlugin, 'react-hooks': reactHooks, 'react-refresh': reactRefresh }, rules: { ...tsPlugin.configs.recommended.rules, ...reactHooks.configs.recommended.rules, 'react-refresh/only-export-components': ['warn', { allowConstantExport: true }] } }
];
