// Warning! vue-snap lib doesnt contain v-lazy directive in final bundle
// ---
// Please note this directive have been written only to show easy example with LazyLoading (based on IntersectionObserver API)
// If you're looking for more complex way, please look over `v-intersect` directive or `v-lazy` component by Vuetify
// v-intersect: https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/directives/intersect/index.ts
// v-lazy: https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/components/VLazy/VLazy.ts

export default {
  inserted(el, binding) {
    const { value } = binding

    const config = {
      threshold: [0, 1]
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (entry && entry.isIntersecting) {
        el.src = value
        el.classList.add('lazyloaded')
        observer.disconnect()
      }
    }, config)

    observer.observe(el)
  }
}
