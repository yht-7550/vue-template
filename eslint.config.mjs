import antfu from '@antfu/eslint-config'

export default antfu({
  type: 'lib', // 可选项：app
  // Format CSS, Less, Sass, and SCSS
  formatters: {
    css: 'prettier',
    prettierOptions: {
      tabWidth: 2,
      useTabs: false,
    },
  },

  // Enable stylistic formatting rules
  // stylistic: true,

  // Or customize the stylistic rules
  stylistic: {
    indent: 2, // 4, or 'tab'
    quotes: 'single', // 'single' or 'double'
    overrides: {
      'antfu/top-level-function': 'off',
      'no-console': 'warn',
      'vue/quote-props': ['error', 'always'],
      'ts/no-use-before-define': 'off',
    },
  },

  // TypeScript and Vue are autodetected, you can also explicitly enable them:
  typescript: {
    overrides: {
      'ts/explicit-function-return-type': 'off',
      'style/semi': ['error', {
        beforeStatementContinuationChars: 'never',
      }],
    },
  },
  vue: {
    overrides: {
      'vue/block-order': ['error', {
        order: ['script', 'template', 'style'],
      }],
      'vue/max-attributes-per-line': ['error', {
        singleline: {
          max: 4,
        },
        multiline: {
          max: 1,
        },
      }],
      'node/prefer-global/process': 'off',
      'unused-imports/no-unused-vars': 'warn',
      'vue/html-self-closing': 'off',
    },
  },

  // Disable jsonc and yaml support
  jsonc: false,
  yaml: false,
  ignores: ['**/node_modules/**', '**/dist/**', 'README.md'],
})
