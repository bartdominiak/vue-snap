import { actions } from '@storybook/addon-actions'
import Carousel from './Carousel.vue'
import Slide from '../Slide/Slide.vue'
import carouselMock from './Carousel.mocks.js'
import './_carousel.scss'

export default {
  title: 'Carousel',
  component: Carousel
};

export const Default = (_, { argTypes }) => ({
  props: Object.keys(argTypes),
  data: () => ({ carouselMock }),
  components: { Carousel, Slide },
  methods: actions('pageClick', 'boundLeftClick', 'boundRightClick'),
  template: `
    <carousel
      class="story-carousel story-carousel--colors"
      :hide-arrows="hideArrows"
      :hide-arrows-on-bound="hideArrowsOnBound"
      @page="pageClick"
      @bound-left="boundLeftClick"
      @bound-right="boundRightClick"
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

export const Multiple = (_, { argTypes }) => ({
  props: Object.keys(argTypes),
  data: () => ({ carouselMock }),
  components: { Carousel, Slide },
  methods: actions('pageClick', 'boundLeftClick', 'boundRightClick'),
  template: `
    <carousel
      class="story-carousel story-carousel--colors story-carousel--multiple"
      :hide-arrows="hideArrows"
      :hide-arrows-on-bound="hideArrowsOnBound"
      @page="pageClick"
      @bound-left="boundLeftClick"
      @bound-right="boundRightClick"
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

export const NonRegular = (_, { argTypes }) => ({
  props: Object.keys(argTypes),
  data: () => ({ carouselMock }),
  components: { Carousel, Slide },
  methods: actions('pageClick', 'boundLeftClick', 'boundRightClick'),
  template: `
    <carousel
      class="story-carousel story-carousel--colors story-carousel--non-regular"
      :hide-arrows="hideArrows"
      :hide-arrows-on-bound="hideArrowsOnBound"
      @page="pageClick"
      @bound-left="boundLeftClick"
      @bound-right="boundRightClick"
    >
      <slide
        v-for="{ id, content, width } in carouselMock"
        :key="id"
        :style="{ flexBasis: width + 'px' }"
      >
        {{ content }}
      </slide>
    </carousel>
  `
})

export const Images = (_, { argTypes }) => ({
  props: Object.keys(argTypes),
  data: () => ({ carouselMock }),
  components: { Carousel, Slide },
  methods: actions('pageClick', 'boundLeftClick', 'boundRightClick'),
  template: `
    <carousel
      class="story-carousel story-carousel--multiple story-carousel--images"
      :hide-arrows="hideArrows"
      :hide-arrows-on-bound="hideArrowsOnBound"
      @page="pageClick"
      @bound-left="boundLeftClick"
      @bound-right="boundRightClick"
    >
      <slide
        v-for="{ id, content, image, name } in carouselMock"
        :key="id"
      >
        <img
          :src="image"
          :alt="name"
        />
      </slide>
    </carousel>
  `
})

export const ImagesLazy = (_, { argTypes }) => ({
  props: Object.keys(argTypes),
  data: () => ({ carouselMock }),
  components: { Carousel, Slide },
  methods: actions('pageClick', 'boundLeftClick', 'boundRightClick'),
  template: `
    <carousel
      class="story-carousel story-carousel--multiple story-carousel--images"
      :hide-arrows="hideArrows"
      :hide-arrows-on-bound="hideArrowsOnBound"
      @page="pageClick"
      @bound-left="boundLeftClick"
      @bound-right="boundRightClick"
    >
      <slide
        v-for="{ id, content, image, name } in carouselMock"
        :key="id"
      >
        <lazy-image
          :src="image"
          :alt="name"
          width="200"
          height="200"
        />
      </slide>
    </carousel>
  `
})
