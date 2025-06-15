<script setup>
import DefaultTheme from 'vitepress/theme'

const { Layout } = DefaultTheme
</script>

<template>
  <Layout>
    <template #home-hero-image>
      <HeroCarousel />
    </template>
  </Layout>
</template>

<style>
.image-container {
  transform: none;
}
</style>
