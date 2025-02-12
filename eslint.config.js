import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ["**/*.{js,mjs,cjs,ts}"] },
  { languageOptions: { globals: globals.browser } },
  { ignores: ["node_modules/*", "static/*", "src/global.d.ts"] },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
];
