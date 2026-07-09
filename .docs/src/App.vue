<template>
  <div class="flex min-h-screen flex-col">
    <NavBar />

    <main class="flex-1">
      <component :is="view" />
    </main>

    <footer class="border-t border-black/5 bg-white">
      <div class="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-5 py-8 text-sm text-ink/50 sm:flex-row">
        <div class="flex items-center gap-2">
          <img src="/logo.svg" alt="" class="h-4 w-auto opacity-70" />
          <span>Vue Snap — CSS Scroll Snap Carousel</span>
        </div>
        <div class="flex items-center gap-4">
          <span>Released under the MIT License</span>
          <a
            href="https://github.com/bartdominiak/vue-snap"
            target="_blank"
            rel="noopener"
            class="font-medium text-ink/70 hover:text-brand"
          >GitHub</a>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { currentPath } from './router';
import NavBar from './components/NavBar.vue';
import Home from './views/Home.vue';
import GettingStarted from './views/GettingStarted.vue';
import Examples from './views/Examples.vue';
import Api from './views/Api.vue';

const views = {
  home: Home,
  'getting-started': GettingStarted,
  examples: Examples,
  api: Api,
};

const view = computed(() => views[currentPath.value] ?? Home);
</script>
