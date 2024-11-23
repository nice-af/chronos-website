import globals from 'globals';
import tseslint from 'typescript-eslint';
import pluginVue from 'eslint-plugin-vue';
import eslintConfigPrettier from 'eslint-config-prettier';

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    ignores: ['**/*.{mjs,js}', '**/.nuxt/', '**/.output/'],
  },
  {
    languageOptions: { globals: { ...globals.browser, ...globals.node } },
  },
  ...tseslint.configs.recommendedTypeChecked,
  {
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
        extraFileExtensions: ['.vue'],
      },
    },
  },
  ...pluginVue.configs['flat/recommended'],
  eslintConfigPrettier,
  {
    files: ['**/*.{ts,vue}'],
    rules: {
      '@typescript-eslint/no-empty-object-type': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          args: 'all',
          argsIgnorePattern: '^_',
          caughtErrors: 'all',
          caughtErrorsIgnorePattern: '^_',
          destructuredArrayIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          ignoreRestSiblings: true,
        },
      ],
      '@typescript-eslint/unified-signatures': 'off',
      '@typescript-eslint/prefer-nullish-coalescing': 'error',
      // TODO should be enabled again once the tsconfig for it is fixed
      '@typescript-eslint/no-unsafe-call': 'off',
      // TODO should be enabled again once the tsconfig for it is fixed
      '@typescript-eslint/no-unsafe-member-access': 'off',
      '@typescript-eslint/no-unsafe-assignment': 'off',
      '@typescript-eslint/no-misused-promises': 'off',
      'vue/attribute-hyphenation': 'off',
      'vue/html-self-closing': [
        'error',
        {
          html: {
            void: 'always',
            normal: 'never',
            component: 'always',
          },
          svg: 'always',
          math: 'always',
        },
      ],
      'vue/multi-word-component-names': 'off',
      'vue/no-v-html': 'off',
      'vue/require-default-prop': 'off',
      'vue/require-typed-ref': 'error',
      'vue/v-on-event-hyphenation': ['error', 'never'],
      'vue/no-undef-components': ['error', { ignorePatterns: ['ClientOnly', 'model-viewer'] }],
    },
  },
  { files: ['**/*.vue'], languageOptions: { parserOptions: { parser: tseslint.parser } } },
];
