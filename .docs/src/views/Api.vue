<template>
  <div class="mx-auto max-w-4xl px-5 py-14">
    <h1 class="text-4xl font-bold tracking-tight">API</h1>

    <!-- Carousel -->
    <h2 class="mt-12 flex items-center gap-2 text-2xl font-semibold tracking-tight">
      <code class="rounded-lg bg-brand/10 px-2 py-0.5 font-mono text-brand">Carousel</code>
    </h2>

    <ApiTable title="Props" :columns="['Prop', 'Type', 'Default', 'Description']" :rows="carouselProps" />
    <p class="mt-3 text-sm text-ink/55">Hovering the carousel pauses autoplay; it resumes on mouse leave.</p>

    <ApiTable title="Events" :columns="['Event', 'Payload', 'Description']" :rows="carouselEvents" />
    <ApiTable title="Slots" :columns="['Slot', 'Props', 'Description']" :rows="carouselSlots" />

    <ApiTable
      title="Exposed methods"
      :columns="['Method', 'Parameters', 'Description']"
      :rows="carouselMethods"
    />
    <p class="mt-3 text-sm text-ink/55">Access these via a template ref on <code class="rounded bg-black/5 px-1.5 py-0.5 font-mono text-xs">&lt;Carousel&gt;</code>.</p>

    <!-- Slide -->
    <h2 class="mt-16 flex items-center gap-2 text-2xl font-semibold tracking-tight">
      <code class="rounded-lg bg-brand/10 px-2 py-0.5 font-mono text-brand">Slide</code>
    </h2>
    <ApiTable title="Props" :columns="['Prop', 'Type', 'Default', 'Description']" :rows="slideProps" />
  </div>
</template>

<script setup>
import ApiTable from '../components/ApiTable.vue';

const carouselProps = [
  ['tag', 'String', "'ul'", 'HTML tag used for the slide container'],
  ['hideArrowsOnBound', 'Boolean', 'false', 'Hides the relevant arrow when the first/last slide is active'],
  ['autoplay', 'Boolean', 'false', 'Automatically advances slides, looping back to the start'],
  ['autoplayInterval', 'Number', '3000', 'Delay in milliseconds between autoplay advances'],
  ['i18n', 'Object', "{ slideLeft, slideRight }", 'Accessible labels for the built-in arrow buttons'],
];

const carouselEvents = [
  ['mounted', 'Boolean', 'Emitted once the carousel has mounted'],
  ['slide-change', 'Number', 'Emitted when the active slide changes, with the new index'],
  ['left-bound', 'Boolean', 'Emitted when the first slide becomes active'],
  ['right-bound', 'Boolean', 'Emitted when the last slide becomes active'],
  ['autoplay', 'Boolean', 'Emitted when autoplay pauses (false) or resumes (true)'],
];

const carouselSlots = [
  ['default', '–', 'Slide content, typically <Slide> items'],
  ['arrows', '{ changeSlide, isBoundLeft, isBoundRight }', 'Replace the default arrow buttons'],
];

const carouselMethods = [
  ['goToSlide', 'index: number', 'Scrolls to the slide at the given index'],
  ['changeSlide', 'direction: 1 | -1', 'Moves forward (1) or backward (-1) one slide'],
];

const slideProps = [
  ['tag', 'String', "'li'", 'HTML tag rendered for the slide element'],
];
</script>
