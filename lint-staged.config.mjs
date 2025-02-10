/** @type {import('lint-staged').Configuration} */
export default {
  '*.{js,jsx,ts,tsx}': ['eslint --fix'],
  '*.vue': ['eslint --fix'],
  '*.{scss,less,css}': ['eslint --fix'],
}
