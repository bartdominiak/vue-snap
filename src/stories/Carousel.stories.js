import Carousel from '../components/Carousel.vue'
import Slide from '../components/Slide.vue'
import carouselMock from '../mocks/carousel.js'

import '../assets/_examples.scss'

export default {
  title: 'Carousel'
}

export const Default = () => ({
  data: () => ({ carouselMock }),
  components: { Carousel, Slide },
  template: `
    <carousel class="example-default">
      <slide
        v-for="{ id, content } in carouselMock"
        :key="id"
      >
        {{ content }}
      </slide>
    </carousel>
  `
})

export const Multiple = () => ({
  data: () => ({ carouselMock }),
  components: { Carousel, Slide },
  template: `
    <carousel class="example-multiple example-default">
      <slide
        v-for="{ id, content } in carouselMock"
        :key="id"
      >
        {{ content }}
      </slide>
    </carousel>
  `
})

export const Images = () => ({
  data: () => ({ carouselMock }),
  components: { Carousel, Slide },
  template: `
    <carousel class="example-images example-multiple">
      <slide
        v-for="{ id, content, image, name } in carouselMock"
        :key="id"
      >
        <img
          class="example-images__image"
          :src="image"
          :alt="name"
        />
      </slide>
    </carousel>
  `
})
