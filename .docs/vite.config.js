import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import tailwindcss from '@tailwindcss/vite';

// Resolve `vue-snap` to the freshly built library in this repo, so the
// showcase always reflects the local source instead of a published version.
const repoRoot = fileURLToPath(new URL('..', import.meta.url));

export default defineConfig({
  plugins: [vue(), tailwindcss()],
  resolve: {
    alias: {
      'vue-snap/dist/vue-snap.css': `${repoRoot}/dist/vue-snap.css`,
      'vue-snap': `${repoRoot}/dist/vue-snap.es.js`,
    },
  },
});
