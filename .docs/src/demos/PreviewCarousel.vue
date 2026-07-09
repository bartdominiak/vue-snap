<template>
  <div>
    <div>
      <Carousel
        v-if="carouselMounted"
        ref="carousel01"
        class="my-carousel my-carousel-multiple-3"
        :hide-arrows="!arrowsVisible"
        :autoplay="autoplayOn"
        :autoplay-interval="3000"
        @mounted="logEvent('mounted', 'component mounted')"
        @slide-change="(index) => logEvent('slideChange', `moved to Slide ${index + 1}`)"
        @left-bound="logEvent('leftBound', 'reached left bound')"
        @right-bound="logEvent('rightBound', 'reached right bound')"
        @autoplay="(playing) => logEvent('autoplay', playing ? 'autoplay resumed' : 'autoplay paused')"
      >
        <Slide v-for="slide in slides" :key="slide">
          Slide {{ slide + 1 }}
        </Slide>
      </Carousel>
      <div
        v-else
        class="flex h-50 items-center justify-center rounded-xl border border-dashed border-black/15 text-sm text-ink/40"
      >
        Carousel unmounted
      </div>

      <div class="mt-4 flex flex-wrap gap-2">
        <button type="button" class="preview-btn" :disabled="!carouselMounted" @click="autoplayOn = !autoplayOn">
          <span class="h-2 w-2 rounded-full" :class="autoplayOn ? 'bg-brand' : 'bg-ink/30'" />
          Autoplay: {{ autoplayOn ? 'On' : 'Off' }}
        </button>
        <button type="button" class="preview-btn" @click="toggleMount">
          <span class="h-2 w-2 rounded-full" :class="carouselMounted ? 'bg-brand' : 'bg-ink/30'" />
          {{ carouselMounted ? 'Unmount' : 'Mount' }}
        </button>
        <button type="button" class="preview-btn" :disabled="!carouselMounted" @click="arrowsVisible = !arrowsVisible">
          <span class="h-2 w-2 rounded-full" :class="arrowsVisible ? 'bg-brand' : 'bg-ink/30'" />
          Arrows: {{ arrowsVisible ? 'Shown' : 'Hidden' }}
        </button>
      </div>

      <div class="mt-2 flex flex-wrap gap-2">
        <button type="button" class="preview-btn" :disabled="!carouselMounted" @click="carousel01?.changeSlide(-1)">
          Go left
        </button>
        <button type="button" class="preview-btn" :disabled="!carouselMounted" @click="carousel01?.changeSlide(1)">
          Go right
        </button>
        <button type="button" class="preview-btn" :disabled="!carouselMounted" @click="goToRandomSlide">
          Go to random slide
        </button>
      </div>
    </div>

    <!-- Events frame: fixed height, newest on top, scrolls when full. -->
    <div class="mt-4 flex h-64 flex-col overflow-hidden rounded-xl border border-black/8 bg-ink">
      <div class="flex items-center justify-between border-b border-white/10 px-3 py-2">
        <span class="font-mono text-xs font-medium text-white/70">Events</span>
        <button
          v-if="events.length"
          type="button"
          class="font-mono text-xs text-white/40 transition-colors hover:text-white/80"
          @click="events = []"
        >
          Clear
        </button>
      </div>

      <ul v-if="events.length" class="flex-1 space-y-1 overflow-y-auto p-2 font-mono text-xs">
        <li v-for="event in events" :key="event.id" class="flex items-center gap-2">
          <span class="h-1.5 w-1.5 shrink-0 rounded-full" :class="dotColor[event.type]" />
          <span class="w-14 shrink-0 text-white/30">{{ event.time }}</span>
          <span class="text-white/45">{{ event.type }}</span>
          <span class="truncate text-white/80">{{ event.message }}</span>
        </li>
      </ul>
      <p v-else class="flex flex-1 items-center justify-center px-4 text-center font-mono text-xs text-white/30">
        Interact with the carousel to see events fire.
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const MAX_EVENTS = 50;

const dotColor = {
  mounted: 'bg-white/40',
  slideChange: 'bg-brand-soft',
  leftBound: 'bg-amber-400',
  rightBound: 'bg-amber-400',
  autoplay: 'bg-sky-400',
};

const slides = [...Array(12)].map((_, i) => i);

const carousel01 = ref();
const autoplayOn = ref(true);
const arrowsVisible = ref(true);
const carouselMounted = ref(true);
const events = ref([]);

let eventId = 0;

const logEvent = (type, message) => {
  const time = new Date().toLocaleTimeString('en-GB');
  events.value = [{ id: eventId++, type, message, time }, ...events.value].slice(0, MAX_EVENTS);
};

const goToRandomSlide = () => {
  const target = Math.floor(Math.random() * slides.length);
  carousel01.value?.goToSlide(target);
};

// The carousel emits `mounted`, but has no unmount event — log that one here.
const toggleMount = () => {
  carouselMounted.value = !carouselMounted.value;
  if (!carouselMounted.value) logEvent('mounted', 'component unmounted');
};
</script>

<style>
.preview-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  border-radius: 12px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  background: #fff;
  padding: 8px 14px;
  font-size: 13px;
  font-weight: 600;
  color: #10231a;
  transition: background-color 0.15s ease;

  &:hover:not(:disabled) {
    background: rgba(0, 0, 0, 0.04);
  }

  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }
}

.my-carousel {
  margin-bottom: 1px;
  color: #fff;

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
    background-color: rgba(255, 255, 255, 0.1);
    color: #ffffff;
  }
}

.my-carousel-multiple-3 {
  .vs-carousel__slide {
    flex: 0 0 100%;

    @media (min-width: 768px) {
        flex: 0 0 33.33%;
    }
  }
}

.my-carousel-multiple-4 {
  .vs-carousel__slide {
    flex: 0 0 100%;

    @media (min-width: 768px) {
        flex: 0 0 33.33%;
    }

    @media (min-width: 1024px) {
        flex: 0 0 25%;
    }
  }
}

.my-carousel-multiple-5 {
  .vs-carousel__slide {
    flex: 0 0 100%;

    @media (min-width: 768px) {
        flex: 0 0 33.33%;
    }

    @media (min-width: 1024px) {
        flex: 0 0 25%;
    }

    @media (min-width: 1280px) {
        flex: 0 0 20%;
    }
  }
}

.my-carousel-multiple-6 {
  .vs-carousel__slide {
    flex: 0 0 100%;

    @media (min-width: 768px) {
        flex: 0 0 33.33%;
    }

    @media (min-width: 1024px) {
        flex: 0 0 25%;
    }

    @media (min-width: 1280px) {
        flex: 0 0 16.66%;
    }
  }
}

.my-carousel-images {
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
</style>
