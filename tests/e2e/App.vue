<template>
  <div>
    <p data-testid="current-index">{{ currentIndex }}</p>
    <Carousel data-testid="carousel" @slide-change="currentIndex = $event">
      <Slide v-for="n in SLIDE_COUNT" :key="n">Slide {{ n }}</Slide>
    </Carousel>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Carousel, Slide } from '../../src/entry';

const SLIDE_COUNT = 5;

const currentIndex = ref(0);
</script>

<style>
.vs-carousel__wrapper {
  width: 300px;
  height: 150px;
}
</style>
