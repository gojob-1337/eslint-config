module.exports = {
  extends: [
    "plugin:@typescript-eslint/recommended",
    "prettier",
    "plugin:prettier/recommended",
    "prettier/@typescript-eslint",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript"
  ],
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "simple-import-sort"],
  rules: {
    semi: ["error", "always"],
    "prettier/prettier": ["error", { singleQuote: true }],
    "@typescript-eslint/indent": ["error", 2],
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/prefer-interface": "off",
    "@typescript-eslint/explicit-member-accessibility": "off",
    "@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
    "@typescript-eslint/no-parameter-properties": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-use-before-define": "off",
    "@typescript-eslint/no-non-null-assertion": "off",
    "@typescript-eslint/member-ordering": 2,
    "simple-import-sort/sort": "error",
    "sort-imports": "off",
    "import/order": "off"
  }
};
