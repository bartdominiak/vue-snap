<template>
  <section class="scroll-mt-24" :id="id">
    <div class="mb-3 flex items-baseline justify-between gap-4">
      <h3 class="text-xl font-semibold tracking-tight">{{ title }}</h3>
    </div>

    <p v-if="description" class="mb-5 max-w-2xl text-sm text-ink/60">
      {{ description }}
    </p>

    <div class="rounded-2xl border border-black/8 bg-white p-4 shadow-sm sm:p-6">
      <slot name="demo" />
    </div>

    <div v-if="$slots.code" class="mt-4">
      <slot name="code" />
    </div>
  </section>
</template>

<script setup>
defineProps({
  id: { type: String, default: undefined },
  title: { type: String, required: true },
  description: { type: String, default: '' },
});
</script>
