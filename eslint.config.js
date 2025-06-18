import globals from "globals";
import pluginVue from "eslint-plugin-vue";
import pluginTS from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import vueParser from "vue-eslint-parser";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.js"],
    languageOptions: {
      sourceType: "script",
      globals: globals.browser,
    },
  },

  {
    files: ["**/*.{ts}"],
    languageOptions: {
      globals: globals.browser,
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 2023,
        sourceType: "module",
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      "@typescript-eslint": pluginTS,
    }
  },

  {
    files: ["**/*.vue"],
    languageOptions: {
      globals: globals.browser,
      parser: vueParser,
      parserOptions: {
        parser: tsParser,
        ecmaVersion: 2023,
        sourceType: "module",
        extraFileExtensions: [".vue"],
      },
    },
    plugins: {
      vue: pluginVue,
      "@typescript-eslint": pluginTS,
    },
  },

  pluginVue.configs["flat/recommended"],
  {
    rules: {
      'vue/multi-word-component-names': 'off',
    },
  },
]);
