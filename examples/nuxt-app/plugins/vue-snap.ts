import VueSnap from '../../../dist/vue-snap.es.js'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(VueSnap);
})
