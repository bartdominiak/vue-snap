<template>
  <div>
    <h1>Horizontal</h1>
    <h2>Full width</h2>
    <carousel>
      <slide
        v-for="current in mocks"
        :key="current"
      >
        {{ current }}
      </slide>
    </carousel>

    <h2>Multiple slides</h2>
    <carousel data-id="fixed">
      <slide
        v-for="current in mocks"
        :key="current"
      >
        {{ current }}
      </slide>
    </carousel>

    <h2>Navigation</h2>
    <carousel
      navigation
      data-id="fixed"
    >
      <slide
        v-for="current in mocks"
        :key="current"
      >
        {{ current }}
      </slide>
    </carousel>
  </div>
</template>

<script>
export default {
  data: () => ({
    mocks: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
  })
}
</script>

<style lang="scss">
.vs-carousel {
  // Common styles
  &__slide {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 40px;
    color: white;

    &:nth-child(n+1) {
      background: #2e5c8a;
    }

    &:nth-child(2n+1) {
      background: #336699;
    }
  }

  // Fixed variant
  &__slide {
    [data-id="fixed"] & {
      flex: 0 0 100%;

      @media (min-width: 500px) {
        flex: 0 0 50%;
      }

      @media (min-width: 768px) {
        flex: 0 0 33.33%;
      }

      @media (min-width: 1024px) {
        flex: 0 0 25%;
      }

      @media (min-width: 1280px) and (max-width: 1440px) {
        flex: 0 0 20%;
      }
    }
  }
}

</style>
