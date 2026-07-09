<template>
  <div>
    <!-- Hero -->
    <section class="relative overflow-hidden">
      <div
        class="pointer-events-none absolute inset-0 -z-10 opacity-70"
        style="background: radial-gradient(60% 60% at 50% 0%, rgba(41,151,100,0.18), transparent 70%);"
      />
      <div class="mx-auto max-w-6xl px-5 pt-20 pb-14 text-center">
        <span class="inline-flex items-center gap-2 rounded-full border border-brand/20 bg-brand/5 px-3 py-1 text-xs font-medium text-brand">
          <span class="h-1.5 w-1.5 rounded-full bg-brand"></span>
          Native CSS Scroll Snapping · 4KB
        </span>

        <h1 class="mx-auto mt-6 max-w-3xl text-5xl font-bold tracking-tight sm:text-6xl">
          The <span class="text-brand">scroll-snap</span> carousel for Vue 3
        </h1>

        <p class="mx-auto mt-5 max-w-xl text-lg text-ink/60">
          Fully responsive, well-optimized, and tiny. Vue Snap leans on modern CSS
          so there are no heavy JavaScript computations or layout hacks.
        </p>

        <div class="mt-8 flex items-center justify-center gap-3">
          <a
            href="#/getting-started"
            class="rounded-xl bg-brand px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-brand/25 transition-transform hover:-translate-y-0.5"
          >
            Get started
          </a>
          <a
            href="#/examples"
            class="rounded-xl border border-black/10 bg-white px-5 py-3 text-sm font-semibold text-ink transition-colors hover:bg-black/5"
          >
            View examples
          </a>
        </div>

        <div class="mx-auto mt-4 inline-flex items-center gap-2 font-mono text-sm text-ink/50">
          <code class="rounded-lg bg-black/5 px-3 py-1.5">npm install vue-snap</code>
        </div>
      </div>
    </section>

    <!-- Live preview -->
    <section class="mx-auto max-w-4xl px-5 pb-8">
      <div class="rounded-2xl border border-black/8 bg-white p-4 shadow-sm sm:p-6">
        <PreviewCarousel />
      </div>
    </section>

    <!-- Features -->
    <section class="mx-auto max-w-6xl px-5 py-16">
      <div class="grid gap-5 sm:grid-cols-3">
        <div
          v-for="feature in features"
          :key="feature.title"
          class="rounded-2xl border border-black/8 bg-white p-6 shadow-sm"
        >
          <div class="mb-4 grid h-11 w-11 place-items-center rounded-xl bg-brand/10">
            <img :src="feature.icon" alt="" class="h-6 w-6" />
          </div>
          <h3 class="text-lg font-semibold">{{ feature.title }}</h3>
          <p class="mt-1.5 text-sm text-ink/60">{{ feature.details }}</p>
        </div>
      </div>
    </section>

    <!-- About -->
    <section class="mx-auto max-w-3xl px-5 pb-24">
      <h2 class="text-2xl font-semibold tracking-tight">About</h2>
      <p class="mt-4 leading-relaxed text-ink/70">
        The idea behind this plugin is to create a fully responsive and well-optimized
        carousel. We use modern CSS features like
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_scroll_snap"
          target="_blank"
          rel="noopener"
          class="font-medium text-brand underline-offset-2 hover:underline"
        >Scroll Snapping</a>, which lock the carousel onto specific slides after the
        user finishes scrolling. This keeps the library tiny — only the essentials —
        and avoids heavy JavaScript or CSS hacks.
      </p>
    </section>
  </div>
</template>

<script setup>
import PreviewCarousel from '../demos/PreviewCarousel.vue';

const features = [
  { title: 'Lightweight', details: 'Just 4KB, fast and efficient.', icon: '/mix-black.svg' },
  { title: 'Modern', details: 'Built with native CSS Scroll Snapping.', icon: '/layers-black.svg' },
  { title: 'Modular', details: 'Easily customizable, with minimal effort.', icon: '/spartial-black.svg' },
];
</script>
