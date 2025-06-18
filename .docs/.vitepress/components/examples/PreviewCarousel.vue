<template>
  <Carousel
    ref="carousel01"
    class="my-carousel my-carousel-multiple-3"
    @left-bound="onLeftBounded"
    @right-bound="onRightBounded"
  >
    <Slide v-for="slide in slides" :key="slide">
      Slide {{ slide + 1 }}
    </Slide>
  </Carousel>

  <Carousel
    ref="carousel02"
    class="my-carousel my-carousel-multiple-4"
    @left-bound="onLeftBounded"
    @right-bound="onRightBounded"
  >
    <Slide v-for="slide in slides" :key="slide">
      Slide {{ slide + 1 }}
    </Slide>
  </Carousel>

  <Carousel
    ref="carousel03"
    class="my-carousel my-carousel-multiple-6"
    @left-bound="onLeftBounded"
    @right-bound="onRightBounded"
  >
    <Slide v-for="slide in slides" :key="slide">
      Slide {{ slide + 1 }}
    </Slide>
  </Carousel>
</template>

<script setup>
import { ref, onMounted } from 'vue';
const slides = [ ...Array(12) ].map((_, i) => i);

const carousel01 = ref();
const carousel02 = ref();
const carousel03 = ref();
const direction = ref(1);

const onLeftBounded = () => {
  direction.value = 1;
};

const onRightBounded = () => {
  direction.value = -1;
};

onMounted(() => {
  setInterval(() => {
    carousel01.value?.changeSlide(direction.value);
    carousel02.value?.changeSlide(direction.value);
    carousel03.value?.changeSlide(direction.value);
  }, 1500);
});
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@300;400&display=swap');

body {
    font-family: 'Lato', sans-serif;
    font-weight: 300;
    color: #fff;
    margin: 1px;
}

.my-carousel {
  margin-bottom: 1px;

  .vs-carousel__wrapper {
    height: 200px;
  }

  .vs-carousel__slide {
    &:nth-child(n+1) {
      background: #18794e;
    }

    &:nth-child(2n+1) {
      background: #299764;
    }
  }

  .vs-carousel__arrows {
    background-color: rgba(255, 255, 255, 0.1);
    color: #ffffff;
  }
}

.my-carousel-multiple-3 {
  .vs-carousel__slide {
    flex: 0 0 100%;

    @media (min-width: 768px) {
        flex: 0 0 33.33%;
    }
  }
}

.my-carousel-multiple-4 {
  .vs-carousel__slide {
    flex: 0 0 100%;

    @media (min-width: 768px) {
        flex: 0 0 33.33%;
    }

    @media (min-width: 1024px) {
        flex: 0 0 25%;
    }
  }
}

.my-carousel-multiple-5 {
  .vs-carousel__slide {
    flex: 0 0 100%;

    @media (min-width: 768px) {
        flex: 0 0 33.33%;
    }

    @media (min-width: 1024px) {
        flex: 0 0 25%;
    }

    @media (min-width: 1280px) {
        flex: 0 0 20%;
    }
  }
}

.my-carousel-multiple-6 {
  .vs-carousel__slide {
    flex: 0 0 100%;

    @media (min-width: 768px) {
        flex: 0 0 33.33%;
    }

    @media (min-width: 1024px) {
        flex: 0 0 25%;
    }

    @media (min-width: 1280px) {
        flex: 0 0 16.66%;
    }
  }
}

.my-carousel-images {
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
</style>
