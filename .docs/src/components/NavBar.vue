<template>
  <header class="sticky top-0 z-50 border-b border-black/5 bg-white/80 backdrop-blur">
    <nav class="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
      <router-link
        to="/"
        class="flex items-center gap-2.5 font-semibold tracking-tight text-ink"
      >
        <img src="/logo.svg" alt="" class="h-6 w-auto" />
        <span>Vue Snap</span>
      </router-link>

      <!-- Desktop links -->
      <div class="hidden items-center gap-1 md:flex">
        <router-link
          v-for="link in navLinks"
          :key="link.path"
          :to="link.path"
          class="rounded-lg px-3 py-1.5 text-sm font-medium transition-colors"
          :class="route.path === link.path
            ? 'bg-brand/10 text-brand'
            : 'text-ink/60 hover:text-ink hover:bg-black/5'"
        >
          {{ link.label }}
        </router-link>

        <a
          href="https://github.com/bartdominiak/vue-snap"
          target="_blank"
          rel="noopener"
          class="ml-2 flex items-center gap-2 rounded-lg border border-black/10 px-2.5 py-1.5 text-ink/70 transition-colors hover:bg-black/5 hover:text-ink"
          aria-label="View on GitHub"
        >
          <svg viewBox="0 0 24 24" class="h-5 w-5" fill="currentColor" aria-hidden="true">
            <path d="M12 .5A11.5 11.5 0 0 0 .5 12a11.5 11.5 0 0 0 7.86 10.92c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.2 1.77 1.2 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.43-2.7 5.4-5.26 5.69.41.36.78 1.06.78 2.14v3.18c0 .31.2.67.8.56A11.5 11.5 0 0 0 23.5 12 11.5 11.5 0 0 0 12 .5Z" />
          </svg>
          <span class="flex items-center gap-1 text-sm font-semibold">
            <StarIcon />
            {{ formattedStars }}
          </span>
        </a>
      </div>

      <!-- Mobile toggle -->
      <button
        type="button"
        class="rounded-lg p-2 text-ink/70 transition-colors hover:bg-black/5 md:hidden"
        :aria-expanded="open"
        aria-label="Toggle menu"
        @click="open = !open"
      >
        <svg viewBox="0 0 24 24" class="h-6 w-6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
          <template v-if="open">
            <path d="M6 6l12 12M18 6L6 18" />
          </template>
          <template v-else>
            <path d="M4 7h16M4 12h16M4 17h16" />
          </template>
        </svg>
      </button>
    </nav>

    <!-- Mobile menu -->
    <div v-show="open" class="border-t border-black/5 bg-white px-5 py-3 md:hidden">
      <router-link
        v-for="link in navLinks"
        :key="link.path"
        :to="link.path"
        class="block rounded-lg px-3 py-2.5 text-sm font-medium transition-colors"
        :class="route.path === link.path
          ? 'bg-brand/10 text-brand'
          : 'text-ink/70 hover:bg-black/5'"
      >
        {{ link.label }}
      </router-link>

      <a
        href="https://github.com/bartdominiak/vue-snap"
        target="_blank"
        rel="noopener"
        class="mt-1 flex items-center gap-2 rounded-lg px-3 py-2.5 text-sm font-medium text-ink/70 transition-colors hover:bg-black/5"
      >
        <svg viewBox="0 0 24 24" class="h-5 w-5" fill="currentColor" aria-hidden="true">
          <path d="M12 .5A11.5 11.5 0 0 0 .5 12a11.5 11.5 0 0 0 7.86 10.92c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.2 1.77 1.2 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.43-2.7 5.4-5.26 5.69.41.36.78 1.06.78 2.14v3.18c0 .31.2.67.8.56A11.5 11.5 0 0 0 23.5 12 11.5 11.5 0 0 0 12 .5Z" />
        </svg>
        GitHub
        <span class="ml-auto flex items-center gap-1 text-ink/60">
          <StarIcon />
          {{ formattedStars }}
        </span>
      </a>
    </div>
  </header>
</template>

<script setup>
import { ref, computed, watch, onMounted, h } from 'vue';
import { useRoute } from 'vue-router';
import { navLinks } from '../router';

const route = useRoute();

// Shown immediately and used as fallback if the GitHub API is unreachable.
const FALLBACK_STARS = 169;
const STARS_ENDPOINT = 'https://api.github.com/repos/bartdominiak/vue-snap';

const StarIcon = () =>
  h(
    'svg',
    { viewBox: '0 0 24 24', class: 'h-3.5 w-3.5', fill: 'currentColor', 'aria-hidden': 'true' },
    [h('path', { d: 'm12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14l-5-4.87 6.91-1.01L12 2Z' })],
  );

const stars = ref(FALLBACK_STARS);

const formattedStars = computed(() =>
  stars.value >= 1000 ? `${(stars.value / 1000).toFixed(1)}k` : String(stars.value),
);

onMounted(async () => {
  try {
    const response = await fetch(STARS_ENDPOINT);
    if (!response.ok) return;
    const { stargazers_count } = await response.json();
    if (typeof stargazers_count === 'number') stars.value = stargazers_count;
  } catch {
    // Keep the fallback count on network/API failure.
  }
});

const open = ref(false);

// Close the menu after navigating to a new page.
watch(() => route.path, () => {
  open.value = false;
});
</script>
