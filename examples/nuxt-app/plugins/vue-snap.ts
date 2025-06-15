import VueSnap from 'vue-snap'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(VueSnap);
})
