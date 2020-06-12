import Carousel from '../components/Carousel.vue'
import Slide from '../components/Slide.vue'
import carouselMock from '../mocks/carousel.js'

import { boolean } from '@storybook/addon-knobs'

import '../assets/_examples.scss'

export default {
  title: 'Carousel'
}

// Needs to be a function, is not working with simple object between stories
const commonProps = () => ({
  isNavigationKnob: {
    default: boolean('Navigation', true)
  },
  isVerticalKnob: {
    default: boolean('Vertical', false)
  },
  isScrollPageKnob: {
    default: boolean('Scroll per page', false)
  }
})

export const Default = () => ({
  data: () => ({ carouselMock }),
  components: { Carousel, Slide },
  props: commonProps(),
  template: `
    <carousel
      class="example-default"
      :navigation="isNavigationKnob"
      :vertical="isVerticalKnob"
      :scroll-page="isScrollPageKnob"
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

export const Multiple = () => ({
  data: () => ({ carouselMock }),
  components: { Carousel, Slide },
  props: commonProps(),
  template: `
    <carousel
      class="example-multiple example-default"
      :navigation="isNavigationKnob"
      :vertical="isVerticalKnob"
      :scroll-page="isScrollPageKnob"
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

export const Images = () => ({
  data: () => ({ carouselMock }),
  components: { Carousel, Slide },
  props: commonProps(),
  template: `
    <carousel
      class="example-images example-multiple"
      :navigation="isNavigationKnob"
      :vertical="isVerticalKnob"
      :scroll-page="isScrollPageKnob"
    >
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
