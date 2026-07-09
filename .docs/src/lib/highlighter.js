import { createHighlighterCore } from 'shiki/core';
import { createJavaScriptRegexEngine } from 'shiki/engine/javascript';

const THEME = 'github-dark';

const DEFAULT_LANG = 'bash';
const EXT_TO_LANG = {
  vue: 'vue',
  css: 'css',
  scss: 'scss',
  js: 'javascript',
  mjs: 'javascript',
  ts: 'typescript',
};

// Load only the grammars the showcase actually uses, plus the pure-JS regex
// engine so no Oniguruma WASM ships. Shiki loads all of this once.
let highlighterPromise;

const getHighlighter = () => {
  if (!highlighterPromise) {
    highlighterPromise = createHighlighterCore({
      themes: [import('@shikijs/themes/github-dark')],
      langs: [
        import('@shikijs/langs/vue'),
        import('@shikijs/langs/css'),
        import('@shikijs/langs/scss'),
        import('@shikijs/langs/javascript'),
        import('@shikijs/langs/typescript'),
        import('@shikijs/langs/bash'),
      ],
      engine: createJavaScriptRegexEngine({ forgiving: true }),
    });
  }
  return highlighterPromise;
};

// Infer the language from a tab label like 'App.vue' or 'styles.scss'.
// Labels without a known extension (bun, npm, …) fall back to shell.
export const langFromLabel = (label) => {
  const ext = label.split('.').pop().toLowerCase();
  return EXT_TO_LANG[ext] ?? DEFAULT_LANG;
};

export const highlight = async (code, lang) => {
  const highlighter = await getHighlighter();
  return highlighter.codeToHtml(code, { lang, theme: THEME });
};
