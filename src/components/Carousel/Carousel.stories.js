import { boolean } from '@storybook/addon-knobs'

// Mocks
import carouselMock from './Carousel.mocks.js'

// Demo styles
import './_carousel.scss'

export default {
  title: 'Carousel',
	parameters: {
		layout: 'fullscreen'
	}
}

// Needs to be a function, its not working with simple object between stories
const commonProps = () => ({
  isNavigationKnob: {
    default: boolean('Navigation', true)
  }
})

export const Default = () => ({
  data: () => ({ carouselMock }),
  props: commonProps(),
  template: `
    <carousel
      class="example-default"
      :navigation-arrows="isNavigationKnob"
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
  props: commonProps(),
  template: `
    <carousel
      class="example-multiple example-default"
      :navigation-arrows="isNavigationKnob"
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

export const NonRegular = () => ({
  data: () => ({ carouselMock }),
  props: commonProps(),
  template: `
    <carousel
      class="example-default"
      :navigation-arrows="isNavigationKnob"
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

export const Images = () => ({
  data: () => ({ carouselMock }),
  props: commonProps(),
  template: `
    <carousel
      class="example-images example-multiple"
      :navigation-arrows="isNavigationKnob"
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

export const ImagesDynamic = () => ({
  data: () => ({
    carouselMock: [
      {
        id: 'example-slide-0',
        content: 'Slide 1',
        name: 'Example slide description',
        image: '/cactus.jpg',
        href: '#',
        width: '280'
      }
    ]
  }),
  props: commonProps(),
  methods: {
    addSlide() {
      const index = this.carouselMock.length + 1

      const item = {
        id: `example-slide-${index}`,
        content: 'Slide 1',
        name: 'Example slide description',
        image: 'https://via.placeholder.com/200',
        href: '#'
      }

      this.carouselMock.push(item)
    },
    removeSlide() {
      this.carouselMock.pop()
    }
  },
  template: `
    <div>
      <carousel
        class="example-images example-multiple"
        :navigation-arrows="isNavigationKnob"
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

      <button @click="addSlide">
        Add Slide
      </button>

      <button @click="removeSlide">
        Remove Slide
      </button>
    </div>
  `
})

export const Lazy = () => ({
  data: () => ({
    carouselMock
  }),
  props: commonProps(),
  template: `
    <carousel
      class="example-lazy example-images example-multiple"
      :navigation-arrows="isNavigationKnob"
    >
      <slide
        v-for="{ id, content, image, name } in carouselMock"
        :key="id"
      >
        <lazy-image
          class="example-images__image example-lazy__image"
          :src="image"
          :alt="name"
          width="200"
          height="200"
        />
      </slide>
    </carousel>
  `
})
