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
  methods: actions('pageEvent', 'boundLeftEvent', 'boundRightEvent', 'mountedEvent'),
  template: `
    <carousel
      class="story-carousel story-carousel--colors"
      :hide-arrows="hideArrows"
      :hide-arrows-on-bound="hideArrowsOnBound"
      @page="pageEvent"
      @bound-left="boundLeftEvent"
      @bound-right="boundRightEvent"
      @mounted="mountedEvent"
    >
      <slide
        class="story-carousel__slide"
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
  methods: actions('pageEvent', 'boundLeftEvent', 'boundRightEvent', 'mountedEvent'),
  template: `
    <carousel
      class="story-carousel story-carousel--colors story-carousel--multiple"
      :hide-arrows="hideArrows"
      :hide-arrows-on-bound="hideArrowsOnBound"
      @page="pageEvent"
      @bound-left="boundLeftEvent"
      @bound-right="boundRightEvent"
      @mounted="mountedEvent"
    >
      <slide
        class="story-carousel__slide"
        v-for="{ id, content } in carouselMock"
        :key="id"
      >
        {{ content }}
      </slide>
    </carousel>
  `
})

export const MultipleCustomArrows = (_, { argTypes }) => ({
  props: Object.keys(argTypes),
  data: () => ({ carouselMock }),
  components: { Carousel, Slide },
  methods: actions('pageEvent', 'boundLeftEvent', 'boundRightEvent', 'mountedEvent'),
  template: `
    <carousel
      class="story-carousel story-carousel--colors story-carousel--multiple"
      :hide-arrows="hideArrows"
      :hide-arrows-on-bound="hideArrowsOnBound"
      @page="pageEvent"
      @bound-left="boundLeftEvent"
      @bound-right="boundRightEvent"
      @mounted="mountedEvent"
    >
      <slide
        class="story-carousel__slide"
        v-for="{ id, content } in carouselMock"
        :key="id"
      >
        {{ content }}
      </slide>

      <template #arrows="{ changeSlide, boundLeft, boundRight }">
        <button @click="changeSlide(-1)">
          left
        </button>

        <button @click="changeSlide(1)">
          right
        </button>

        <p v-if="boundLeft">
          boundLeft!
        </p>

        <p v-else-if="boundRight">
          boundRight!
        </p>
      </template>
    </carousel>
  `
})

export const MultipleCustomArrowsIcons = (_, { argTypes }) => ({
  props: Object.keys(argTypes),
  data: () => ({ carouselMock }),
  components: { Carousel, Slide },
  methods: actions('pageEvent', 'boundLeftEvent', 'boundRightEvent', 'mountedEvent'),
  template: `
    <carousel
      class="story-carousel story-carousel--colors story-carousel--multiple"
      :hide-arrows="hideArrows"
      :hide-arrows-on-bound="hideArrowsOnBound"
      @page="pageEvent"
      @bound-left="boundLeftEvent"
      @bound-right="boundRightEvent"
      @mounted="mountedEvent"
    >
      <slide
        class="story-carousel__slide"
        v-for="{ id, content } in carouselMock"
        :key="id"
      >
        {{ content }}
      </slide>

      <template #arrowLeftIcon>L</template>
      <template #arrowRightIcon>R</template>
    </carousel>
  `
})

export const NonRegular = (_, { argTypes }) => ({
  props: Object.keys(argTypes),
  data: () => ({ carouselMock }),
  components: { Carousel, Slide },
  methods: actions('pageEvent', 'boundLeftEvent', 'boundRightEvent', 'mountedEvent'),
  template: `
    <carousel
      class="story-carousel story-carousel--colors story-carousel--non-regular"
      :hide-arrows="hideArrows"
      :hide-arrows-on-bound="hideArrowsOnBound"
      @page="pageEvent"
      @bound-left="boundLeftEvent"
      @bound-right="boundRightEvent"
      @mounted="mountedEvent"
    >
      <slide
        class="story-carousel__slide"
        v-for="{ id, content, width } in carouselMock"
        :key="id"
        :style="{ flexBasis: width + 'px' }"
      >
        {{ content }}
      </slide>
    </carousel>
  `
})

export const WithScrollbar = (_, { argTypes }) => ({
  props: Object.keys(argTypes),
  data: () => ({ carouselMock }),
  components: { Carousel, Slide },
  methods: actions('pageEvent', 'boundLeftEvent', 'boundRightEvent', 'mountedEvent'),
  template: `
    <carousel
      class="story-carousel story-carousel--colors story-carousel--multiple"
      :hide-arrows="hideArrows"
      :hide-arrows-on-bound="hideArrowsOnBound"
      :hide-scrollbar="hideScrollbar"
      @page="pageEvent"
      @bound-left="boundLeftEvent"
      @bound-right="boundRightEvent"
      @mounted="mountedEvent"
    >
      <slide
        class="story-carousel__slide"
        v-for="{ id, content } in carouselMock"
        :key="id"
      >
        {{ content }}
      </slide>
    </carousel>
  `
})
WithScrollbar.args = {
  hideScrollbar: false
}

export const Images = (_, { argTypes }) => ({
  props: Object.keys(argTypes),
  data: () => ({ carouselMock }),
  components: { Carousel, Slide },
  methods: actions('pageEvent', 'boundLeftEvent', 'boundRightEvent', 'mountedEvent'),
  template: `
    <carousel
      class="story-carousel story-carousel--multiple story-carousel--images"
      :hide-arrows="hideArrows"
      :hide-arrows-on-bound="hideArrowsOnBound"
      @page="pageEvent"
      @bound-left="boundLeftEvent"
      @bound-right="boundRightEvent"
      @mounted="mountedEvent"
    >
      <slide
        class="story-carousel__slide"
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
  methods: actions('pageEvent', 'boundLeftEvent', 'boundRightEvent', 'mountedEvent'),
  template: `
    <carousel
      class="story-carousel story-carousel--multiple story-carousel--images"
      :hide-arrows="hideArrows"
      :hide-arrows-on-bound="hideArrowsOnBound"
      @page="pageEvent"
      @bound-left="boundLeftEvent"
      @bound-right="boundRightEvent"
      @mounted="mountedEvent"
    >
      <slide
        class="story-carousel__slide"
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
