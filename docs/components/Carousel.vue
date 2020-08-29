<template>
  <ClientOnly>
    <carousel class="example-multiple">
      <slide
        v-for="item in 25"
        :key="item"
      >
        <lazy-image
          :src="$withBase('/girl.jpg')"
          alt="girl"
          width="200"
          height="200"
        />
      </slide>
    </carousel>
  </ClientOnly>
</template>

<style lang="scss">
.example-multiple {
  .vs-carousel__slide {
    flex: 0 0 100%;

    @media (min-width: 500px) {
      flex: 0 0 50%;
    }

    @media (min-width: 1024px) {
      flex: 0 0 33.33%;
    }

    @media (min-width: 1280px) and (max-width: 1440px) {
      flex: 0 0 25%;
    }
  }
}
</style>
