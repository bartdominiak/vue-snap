<template>
  <div class="mx-auto max-w-3xl px-5 py-14">
    <h1 class="text-4xl font-bold tracking-tight">Getting started</h1>

    <h2 class="mt-12 text-2xl font-semibold tracking-tight">Requirements</h2>
    <ul class="mt-4 space-y-1.5 text-ink/70">
      <li class="flex items-center gap-2"><Dot /> Vue 3</li>
      <li class="flex items-center gap-2"><Dot /> Node.js v22+</li>
    </ul>

    <h2 class="mt-12 text-2xl font-semibold tracking-tight">Installation</h2>
    <div class="mt-4">
      <CodeGroup :tabs="installTabs" />
    </div>

    <h2 class="mt-12 text-2xl font-semibold tracking-tight">Global registration</h2>
    <div class="mt-4">
      <CodeGroup :tabs="[{ label: 'main.js', code: globalCode }]" />
    </div>

    <h2 class="mt-12 text-2xl font-semibold tracking-tight">Local registration</h2>
    <div class="mt-4">
      <CodeGroup :tabs="[{ label: 'App.vue', code: localCode }]" />
    </div>

    <h2 class="mt-12 text-2xl font-semibold tracking-tight">Nuxt</h2>
    <p class="mt-4 text-ink/70">1. Create a plugin at <code class="rounded bg-black/5 px-1.5 py-0.5 font-mono text-sm">plugins/vue-snap.ts</code>, then import the styles in <code class="rounded bg-black/5 px-1.5 py-0.5 font-mono text-sm">nuxt.config.ts</code>.</p>
    <div class="mt-4">
      <CodeGroup :tabs="nuxtTabs" />
    </div>

    <div class="mt-14 flex justify-end">
      <router-link to="/examples" class="text-sm font-semibold text-brand hover:underline">Examples →</router-link>
    </div>
  </div>
</template>

<script setup>
import { h } from 'vue';
import CodeGroup from '../components/CodeGroup.vue';

const Dot = () => h('span', { class: 'h-1.5 w-1.5 rounded-full bg-brand' });

const installTabs = [
  { label: 'bun', code: 'bun add vue-snap' },
  { label: 'npm', code: 'npm install vue-snap' },
  { label: 'pnpm', code: 'pnpm install vue-snap' },
  { label: 'yarn', code: 'yarn install vue-snap' },
];

const globalCode = `import { createApp } from 'vue';
import VueSnap from 'vue-snap';
import 'vue-snap/dist/vue-snap.css';

const myApp = createApp(App);

myApp.use(VueSnap);`;

const localCode = `<script>
import { Carousel, Slide } from 'vue-snap';
import 'vue-snap/vue-snap.css';

export default {
  components: {
    Carousel,
    Slide
  }
};
<\/script>`;

const nuxtTabs = [
  {
    label: 'plugins/vue-snap.ts',
    code: `import VueSnap from 'vue-snap'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(VueSnap);
});`,
  },
  {
    label: 'nuxt.config.ts',
    code: `export default defineNuxtConfig({
  css: ['vue-snap/dist/vue-snap.css']
});`,
  },
];
</script>
