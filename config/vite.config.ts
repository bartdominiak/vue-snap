import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';

import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [ vue() ],
  build: {
    minify: false,
    lib: {
      entry: resolve(__dirname, '../src/entry.js'),
      name: 'VueSnap',
      formats: ['es', 'umd', 'iife'],
      fileName: (format) => {
        if (format === 'iife') return 'vue-snap.js';
        return `vue-snap.${format}.js`;
      }
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue',
        }
      }
    }
  }
});
