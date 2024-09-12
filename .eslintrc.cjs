/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution")

module.exports = {
  root: true,
  extends: [
    "eslint:recommended",
    "plugin:vue/vue3-essential",
    "@vue/eslint-config-typescript/recommended",
    "@vue/eslint-config-prettier/skip-formatting"
  ],
  parserOptions: {
    ecmaVersion: "latest"
  },
  plugins: ["no-relative-import-paths"],
  rules: {
    "no-relative-import-paths/no-relative-import-paths": ["warn", { rootDir: "src", prefix: "@" }]
  }
}
