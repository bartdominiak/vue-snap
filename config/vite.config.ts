import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';

import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts';

export default defineConfig({
  plugins: [
    vue(),
    dts({
      tsconfigPath: resolve(__dirname, '../tsconfig.app.json'),
    }),
  ],
  build: {
    minify: true,
    lib: {
      entry: resolve(__dirname, '../src/entry.ts'),
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
        exports: 'named',
        globals: {
          vue: 'Vue',
        }
      }
    }
  }
});
