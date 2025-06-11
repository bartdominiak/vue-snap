import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';

import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, '../src/entry.js'),
      name: 'VueSnap',
      fileName: (format) => `vue-snap.${format}.js`
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue',
        }
      }
    }
  },
  plugins: [ vue() ]
});
