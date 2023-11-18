module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'prettier',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', 'prettier', 'simple-import-sort'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'simple-import-sort/imports': [
      "error",{
      "groups": [
        // `react` first, `next` second, then packages starting with a character
        ["^react$", "^next", "^[a-z]"],
        // Packages starting with `@`
        ["^@"],
        // Packages starting with `~`
        ["^~"],
        ["^pages"],
        ["^components"],
        ["^.+\\.s?css$"],
        // Imports starting with `../`
        ["^\\.\\.(?!/?$)", "^\\.\\./?$"],
        // Imports starting with `./`
        ["^\\./(?=.*/)(?!/?$)", "^\\.(?!/?$)", "^\\./?$"],
        // Style imports
        ["^.+\\.s?css$"],
        // Side effect imports
        ["^\\u0000"]
      ]}
    ],
  },
};
