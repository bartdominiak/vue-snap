# Examples
This page demonstrates some of the examples of vue-snap usage.

## Basic

<BasicCarousel />

::: code-group

```html [App.vue]
<Carousel class="my-carousel">
  <Slide v-for="slide in slides" :key="slide">
    Slide {{ slide + 1 }}
  </Slide>
</Carousel>

<script setup>
  const slides = [ ...Array(12) ].map((_, i) => i);
</script>
```

```scss [styles.scss]
.my-carousel {
  .vs-carousel__wrapper {
    height: 200px;
  }
}
```

```css [styles.css]
.my-carousel .vs-carousel__wrapper {
  height: 200px;
}
```

:::

## Multiple Slides

<MultipleCarousel />

::: code-group

```html [App.vue]
<Carousel class="my-carousel">
  <Slide v-for="slide in slides" :key="slide">
    Slide {{ slide + 1 }}
  </Slide>
</Carousel>

<script setup>
  const slides = [ ...Array(12) ].map((_, i) => i);
</script>
```

```scss [styles.scss]
.my-carousel {
  .vs-carousel__wrapper {
    height: 200px;
  }

  .vs-carousel__slide {
    flex: 0 0 100%;

    @media (min-width: 500px) {
        flex: 0 0 50%;
    }

    @media (min-width: 768px) {
        flex: 0 0 33.33%;
    }
  }
}
```

```css [styles.css]
.my-carousel .vs-carousel__wrapper {
  height: 200px;
}

.my-carousel .vs-carousel__slide {
  flex: 0 0 100%;
}

@media (min-width: 500px) {
  .my-carousel .vs-carousel__slide {
    flex: 0 0 50%;
  }
}

@media (min-width: 768px) {
  .my-carousel .vs-carousel__slide {
    flex: 0 0 33.33%;
  }
}
```

:::

## Multiple Images

<ImageCarousel />

::: code-group

```html [App.vue]
<Carousel class="my-carousel-images">
  <Slide v-for="slide in slides" :key="slide">
    <img loading="lazy" src="/cactus.jpg" alt="Example slide description" />
  </Slide>
</Carousel>

<script setup>
  const slides = [ ...Array(12) ].map((_, i) => i);
</script>
```

```scss [styles.scss]
.my-carousel-images {
  .vs-carousel__wrapper {
    height: 200px;
  }

  .vs-carousel__slide {
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
  }
}
```

```css [styles.css]
.my-carousel-images .vs-carousel__wrapper {
  height: 200px;
}

.my-carousel-images .vs-carousel__slide {
  flex: 0 0 100%;
}

@media (min-width: 500px) {
  .my-carousel-images .vs-carousel__slide {
    flex: 0 0 50%;
  }
}

@media (min-width: 768px) {
  .my-carousel-images .vs-carousel__slide {
    flex: 0 0 33.33%;
  }
}

@media (min-width: 1024px) {
  .my-carousel-images .vs-carousel__slide {
    flex: 0 0 25%;
  }
}
```

:::

## Autoplay
<AutoplayCarousel />

::: code-group

```html [App.vue]
<template>
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
import { ref, onMounted } from 'vue';
const slides = [ ...Array(12) ].map((_, i) => i);

const carousel01 = ref();
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
  }, 1500);
});
</script>
```

```scss [styles.scss]
.my-carousel {
  .vs-carousel__wrapper {
    height: 200px;
  }

  .vs-carousel__slide {
    flex: 0 0 100%;

    @media (min-width: 500px) {
        flex: 0 0 50%;
    }

    @media (min-width: 768px) {
        flex: 0 0 33.33%;
    }
  }
}
```

```css [styles.css]
.my-carousel .vs-carousel__wrapper {
  height: 200px;
}

.my-carousel .vs-carousel__slide {
  flex: 0 0 100%;
}

@media (min-width: 500px) {
  .my-carousel .vs-carousel__slide {
    flex: 0 0 50%;
  }
}

@media (min-width: 768px) {
  .my-carousel .vs-carousel__slide {
    flex: 0 0 33.33%;
  }
}
```

:::

## Slide to X
<RandomCarousel />

::: code-group

```html [App.vue]
<template>
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
import { ref, onMounted } from 'vue';
const slides = [ ...Array(12) ].map((_, i) => i);

const carousel01 = ref();

onMounted(() => {
  setInterval(() => {
    const randNumber = Math.floor(Math.random() * (slides.length - 1));
    carousel01.value?.goToSlide(randNumber);
  }, 1500);
});
</script>
```

```scss [styles.scss]
.my-carousel {
  .vs-carousel__wrapper {
    height: 200px;
  }

  .vs-carousel__slide {
    flex: 0 0 100%;

    @media (min-width: 500px) {
        flex: 0 0 50%;
    }

    @media (min-width: 768px) {
        flex: 0 0 33.33%;
    }
  }
}
```

```css [styles.css]
.my-carousel .vs-carousel__wrapper {
  height: 200px;
}

.my-carousel .vs-carousel__slide {
  flex: 0 0 100%;
}

@media (min-width: 500px) {
  .my-carousel .vs-carousel__slide {
    flex: 0 0 50%;
  }
}

@media (min-width: 768px) {
  .my-carousel .vs-carousel__slide {
    flex: 0 0 33.33%;
  }
}
```

:::
