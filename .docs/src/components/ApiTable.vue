<template>
  <div class="mt-8">
    <h3 class="mb-3 text-lg font-semibold tracking-tight">{{ title }}</h3>
    <div class="overflow-x-auto rounded-xl border border-black/8">
      <table class="w-full border-collapse text-left text-sm">
        <thead>
          <tr class="bg-black/[0.03] text-xs uppercase tracking-wide text-ink/50">
            <th
              v-for="col in columns"
              :key="col"
              class="px-4 py-2.5 font-semibold"
            >
              {{ col }}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(row, i) in rows"
            :key="i"
            class="border-t border-black/6"
          >
            <td
              v-for="(cell, j) in row"
              :key="j"
              class="px-4 py-2.5 align-top"
              :class="j === 0 ? 'font-mono text-[13px] text-brand' : 'text-ink/70'"
            >
              <span :class="{ 'font-mono text-[13px]': j === 1 && columns[1] !== 'Description' }">{{ cell }}</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: { type: String, required: true },
  columns: { type: Array, required: true },
  rows: { type: Array, required: true },
});
</script>
