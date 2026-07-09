<template>
  <div class="mx-auto max-w-4xl px-5 py-14">
    <h1 class="text-4xl font-bold tracking-tight">Examples</h1>
    <p class="mt-3 text-ink/60">A tour of common vue-snap usage. Every demo below is live.</p>

    <div class="mt-12 space-y-16">
      <DemoCard id="basic" title="Basic" description="One slide at a time — the default behaviour.">
        <template #demo><BasicCarousel /></template>
        <template #code>
          <CodeGroup :tabs="basicTabs" collapsible />
        </template>
      </DemoCard>

      <DemoCard
        id="multiple"
        title="Multiple slides"
        description="Show several slides per view by setting the slide flex-basis at each breakpoint."
      >
        <template #demo><MultipleCarousel /></template>
        <template #code>
          <CodeGroup :tabs="multipleTabs" collapsible />
        </template>
      </DemoCard>

      <DemoCard
        id="images"
        title="Multiple images"
        description="Slides can hold anything — here, lazy-loaded images cropped to fill."
      >
        <template #demo><ImageCarousel /></template>
        <template #code>
          <CodeGroup :tabs="imageTabs" collapsible />
        </template>
      </DemoCard>

      <DemoCard
        id="autoplay"
        title="Autoplay"
        description="Set autoplay to advance on a timer and autoplay-interval for the delay. It loops back to the start and pauses on hover."
      >
        <template #demo><AutoplayCarousel /></template>
        <template #code>
          <CodeGroup :tabs="autoplayTabs" collapsible />
        </template>
      </DemoCard>

      <DemoCard
        id="slide-to-x"
        title="Slide to X"
        description="Drive the carousel programmatically through a template ref — here, jumping to a random slide every 1.5s."
      >
        <template #demo><RandomCarousel /></template>
        <template #code>
          <CodeGroup :tabs="randomTabs" collapsible />
        </template>
      </DemoCard>
    </div>
  </div>
</template>

<script setup>
import DemoCard from '../components/DemoCard.vue';
import CodeGroup from '../components/CodeGroup.vue';
import BasicCarousel from '../demos/BasicCarousel.vue';
import MultipleCarousel from '../demos/MultipleCarousel.vue';
import ImageCarousel from '../demos/ImageCarousel.vue';
import AutoplayCarousel from '../demos/AutoplayCarousel.vue';
import RandomCarousel from '../demos/RandomCarousel.vue';

const basicVue = `<Carousel class="my-carousel">
  <Slide v-for="slide in slides" :key="slide">
    Slide {{ slide + 1 }}
  </Slide>
</Carousel>

<script setup>
  const slides = [ ...Array(12) ].map((_, i) => i);
<\/script>`;

const basicCss = `.my-carousel .vs-carousel__wrapper {
  height: 200px;
}`;

const multiCss = `.my-carousel .vs-carousel__wrapper {
  height: 200px;
}

.my-carousel .vs-carousel__slide {
  flex: 0 0 100%;
}

@media (min-width: 500px) {
  .my-carousel .vs-carousel__slide { flex: 0 0 50%; }
}

@media (min-width: 768px) {
  .my-carousel .vs-carousel__slide { flex: 0 0 33.33%; }
}`;

const imageVue = `<Carousel class="my-carousel-images">
  <Slide v-for="slide in slides" :key="slide">
    <img loading="lazy" src="/cactus.jpg" alt="Example slide description" />
  </Slide>
</Carousel>

<script setup>
  const slides = [ ...Array(12) ].map((_, i) => i);
<\/script>`;

const imageCss = `.my-carousel-images .vs-carousel__wrapper {
  height: 200px;
}

.my-carousel-images .vs-carousel__slide {
  flex: 0 0 100%;
}

@media (min-width: 500px) { .my-carousel-images .vs-carousel__slide { flex: 0 0 50%; } }
@media (min-width: 768px) { .my-carousel-images .vs-carousel__slide { flex: 0 0 33.33%; } }
@media (min-width: 1024px) { .my-carousel-images .vs-carousel__slide { flex: 0 0 25%; } }`;

const autoplayVue = `<Carousel
  class="my-carousel"
  autoplay
  :autoplay-interval="1500"
>
  <Slide v-for="slide in slides" :key="slide">
    Slide {{ slide + 1 }}
  </Slide>
</Carousel>

<script setup>
  const slides = [ ...Array(12) ].map((_, i) => i);
<\/script>`;

const randomVue = `<template>
  <Carousel
    ref="carousel01"
    class="my-carousel"
    @left-bound="onLeftBounded"
    @right-bound="onRightBounded"
  >
    <Slide v-for="slide in slides" :key="slide">
      Slide {{ slide + 1 }}
    </Slide>
  </Carousel>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
const slides = [ ...Array(12) ].map((_, i) => i);

const carousel01 = ref();
let intervalId = null

onMounted(() => {
  intervalId = setInterval(() => {
    const randNumber = Math.floor(Math.random() * (slides.length - 1))
    carousel01.value?.goToSlide(randNumber)
  }, 1500)
})

onBeforeUnmount(() => clearInterval(intervalId))
<\/script>`;

const basicTabs = [
  { label: 'App.vue', code: basicVue },
  { label: 'styles.css', code: basicCss },
];
const multipleTabs = [
  { label: 'App.vue', code: basicVue },
  { label: 'styles.css', code: multiCss },
];
const imageTabs = [
  { label: 'App.vue', code: imageVue },
  { label: 'styles.css', code: imageCss },
];
const autoplayTabs = [
  { label: 'App.vue', code: autoplayVue },
  { label: 'styles.css', code: multiCss },
];
const randomTabs = [
  { label: 'App.vue', code: randomVue },
  { label: 'styles.css', code: multiCss },
];
</script>
