# Examples
This page demonstrates some of the examples of vue-snap usage.

## Basic

<BasicCarousel />

::: code-group

```html [App.vue]
<Carousel class="my-carousel">
  <Slide>
    Slide 1
  </Slide>
  <Slide>
    Slide 2
  </Slide>
  <Slide>
    Slide 3
  </Slide>
</Carousel>
```

```scss [styles.scss]
.my-carousel {
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
    background: rgba(0, 0, 0, 0.1);
  }
}
```

```css [styles.css]
.my-carousel .vs-carousel__wrapper {
  height: 200px;
}

.my-carousel .vs-carousel__slide:nth-child(n+1) {
  background: #18794e;
}

.my-carousel .vs-carousel__slide:nth-child(2n+1) {
  background: #299764;
}

.my-carousel .vs-carousel__arrows {
  background: rgba(0, 0, 0, 0.1);
}
```

:::

## Multiple Slides

<MultipleCarousel />

::: code-group

```html [App.vue]
<Carousel class="my-carousel">
  <Slide>
    Slide 1
  </Slide>
  <Slide>
    Slide 2
  </Slide>
  <Slide>
    Slide 3
  </Slide>
</Carousel>
```

```scss [styles.scss]
.my-carousel {
  .vs-carousel__wrapper {
    height: 200px;
  }

  .vs-carousel__slide {
    flex: 0 0 100%;

    &:nth-child(n+1) {
      background: #18794e;
    }

    &:nth-child(2n+1) {
      background: #299764;
    }

    @media (min-width: 500px) {
        flex: 0 0 50%;
    }

    @media (min-width: 768px) {
        flex: 0 0 33.33%;
    }
  }

  .vs-carousel__arrows {
    background: rgba(0, 0, 0, 0.1);
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

.my-carousel .vs-carousel__slide:nth-child(n+1) {
  background: #18794e;
}

.my-carousel .vs-carousel__slide:nth-child(2n+1) {
  background: #299764;
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

.my-carousel .vs-carousel__arrows {
  background: rgba(0, 0, 0, 0.1);
}
```

:::

## Multiple Images

<ImageCarousel />

::: code-group

```html [App.vue]
<Carousel class="my-carousel-images">
  <Slide>
    <img loading="lazy" src="/cactus.jpg" alt="Example slide description" />
  </Slide>
  <Slide>
    <img loading="lazy" src="/cactus.jpg" alt="Example slide description" />
  </Slide>
  <Slide>
    <img loading="lazy" src="/cactus.jpg" alt="Example slide description" />
  </Slide>
</Carousel>
```

```scss [styles.scss]
.my-carousel-images {
  color: #ffffff;
  font-size: 18px;

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

  .vs-carousel__arrows {
    background: rgba(0, 0, 0, 0.1);
  }
}
```

```css [styles.css]
.my-carousel-images {
  color: #ffffff;
  font-size: 18px;
}

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

.my-carousel-images .vs-carousel__arrows {
  background: rgba(0, 0, 0, 0.1);
}
```

:::
