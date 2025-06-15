<template>
  <Carousel class="story-carousel story-carousel--multiple story-carousel--images">
    <Slide class="story-carousel__slide">
      <img lazy src="/cactus.jpg" alt="Example slide description" />
    </Slide>
    <Slide class="story-carousel__slide">
      <img lazy src="/cactus.jpg" alt="Example slide description" />
    </Slide>
    <Slide class="story-carousel__slide">
      <img lazy src="/cactus.jpg" alt="Example slide description" />
    </Slide>
    <Slide class="story-carousel__slide">
      <img lazy src="/cactus.jpg" alt="Example slide description" />
    </Slide>
    <Slide class="story-carousel__slide">
      <img lazy src="/cactus.jpg" alt="Example slide description" />
    </Slide>
    <Slide class="story-carousel__slide">
      <img lazy src="/cactus.jpg" alt="Example slide description" />
    </Slide>
    <Slide class="story-carousel__slide">
      <img lazy src="/cactus.jpg" alt="Example slide description" />
    </Slide>
    <Slide class="story-carousel__slide">
      <img lazy src="/cactus.jpg" alt="Example slide description" />
    </Slide>
    <Slide class="story-carousel__slide">
      <img lazy src="/cactus.jpg" alt="Example slide description" />
    </Slide>
    <Slide class="story-carousel__slide">
      <img lazy src="/cactus.jpg" alt="Example slide description" />
    </Slide>
    <Slide class="story-carousel__slide">
      <img lazy src="/cactus.jpg" alt="Example slide description" />
    </Slide>
    <Slide class="story-carousel__slide">
      <img lazy src="/cactus.jpg" alt="Example slide description" />
    </Slide>
  </Carousel>
</template>

<script>
export default {
  name: 'MyComponent',
}
</script>

<style lang="scss">
.story-carousel {
    &__slide {
        height: 200px;
        font-size: 18px;
        color: #fff;
    }

    &--colors {
        .story-carousel__slide {
            &:nth-child(n+1) {
                background: #18794e;
            }

            &:nth-child(2n+1) {
                background: #299764;
            }
        }
    }

    &--multiple {
        .story-carousel__slide {
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

    &--images {
        .story-carousel__slide {
            img {
                height: 200px;
                width: auto;
            }
        }
    }
}
</style>
