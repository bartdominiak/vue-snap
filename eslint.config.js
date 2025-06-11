import globals from "globals";
import pluginVue from "eslint-plugin-vue";
import { defineConfig } from "eslint/config";

export default defineConfig([
  { files: ["**/*.js"], languageOptions: { sourceType: "script" } },
  { files: ["**/*.{js,mjs,cjs,vue}"], languageOptions: { globals: globals.browser } },
  pluginVue.configs["flat/essential"],
  {
    files: ["**/*.{js,vue}"],
    rules: {
      "vue/multi-word-component-names": "off"
    }
  }
]);
