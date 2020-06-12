import Carousel from '../components/Carousel.vue'
import Slide from '../components/Slide.vue'
import carouselMock from '../mocks/carousel.js'

import '../assets/_extend.scss'

export default {
  title: 'Carousel'
}

export const Single = () => ({
  data: () => ({ carouselMock }),
  components: { Carousel, Slide },
  template: `
    <carousel navigation>
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
    <carousel
      data-id="fixed"
      navigation
    >
      <slide
        v-for="{ id, content } in carouselMock"
        :key="id"
      >
        {{ content }}
      </slide>
    </carousel>
  `
})
