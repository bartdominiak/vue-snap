<template>
  <div class="overflow-hidden rounded-xl border border-black/8 bg-ink text-[13px]">
    <!-- Collapsed: single toggle row, no tabs or code shown. -->
    <button
      v-if="collapsible && !open"
      type="button"
      class="flex w-full items-center gap-2 px-4 py-2.5 font-mono text-xs text-white/55 transition-colors hover:text-white/85"
      @click="open = true"
    >
      <span aria-hidden="true">&lt;/&gt;</span>
      Show code
    </button>

    <template v-else>
      <div class="flex items-center justify-between gap-2 border-b border-white/10 bg-black/20 px-2 py-1.5">
        <div class="flex items-center gap-1">
          <button
            v-for="(tab, i) in tabs"
            :key="tab.label"
            type="button"
            class="rounded-md px-3 py-1 font-mono text-xs transition-colors"
            :class="i === active
              ? 'bg-white/10 text-white'
              : 'text-white/45 hover:text-white/80'"
            @click="active = i"
          >
            {{ tab.label }}
          </button>
        </div>

        <button
          v-if="collapsible"
          type="button"
          class="mr-1 shrink-0 font-mono text-xs text-white/45 transition-colors hover:text-white/80"
          @click="open = false"
        >
          Hide
        </button>
      </div>

      <div
        v-if="highlighted[active]"
        class="shiki-code overflow-x-auto leading-relaxed"
        v-html="highlighted[active]"
      />
      <pre
        v-else
        class="overflow-x-auto p-4 font-mono leading-relaxed text-white/85"
      ><code>{{ tabs[active].code }}</code></pre>
    </template>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';
import { highlight, langFromLabel } from '../lib/highlighter';

const props = defineProps({
  // [{ label: 'App.vue', code: '...', lang?: 'vue' }]
  tabs: { type: Array, required: true },
  // Hide the code behind a "Show code" toggle, collapsed by default.
  collapsible: { type: Boolean, default: false },
});

const active = ref(0);
const open = ref(false);

// Highlighted HTML per tab, filled in asynchronously once Shiki is ready.
// Until then the template falls back to plain <pre> text.
const highlighted = ref([]);

watch(
  () => props.tabs,
  async (tabs) => {
    highlighted.value = await Promise.all(
      tabs.map((tab) => highlight(tab.code, tab.lang ?? langFromLabel(tab.label))),
    );
  },
  { immediate: true },
);
</script>

<style scoped>
/* Let the dark container show through Shiki's own background and keep the
   original padding. */
.shiki-code :deep(.shiki) {
  margin: 0;
  padding: 1rem;
  background: transparent !important;
}
</style>
