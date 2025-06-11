<template>
  <div>
    <Carousel class="story-carousel story-carousel--colors">
    <Slide class="story-carousel__slide">
      Slide 1
    </Slide>
    <Slide class="story-carousel__slide">
      Slide 2
    </Slide>
    <Slide class="story-carousel__slide">
      Slide 3
    </Slide>
    <Slide class="story-carousel__slide">
      Slide 4
    </Slide>
    <Slide class="story-carousel__slide">
      Slide 5
    </Slide>
  </Carousel>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@300;400&display=swap');

body {
    font-family: 'Lato', sans-serif;
    font-weight: 300;
}

.story-carousel .story-carousel__slide {
  height: 200px;
  font-size: 18px;
  color: #fff;
}

.story-carousel--colors .story-carousel__slide:nth-child(n+1) {
  background: #2e5c8a;
}

.story-carousel--colors .story-carousel__slide:nth-child(2n+1) {
  background: #336699;
}
</style>
