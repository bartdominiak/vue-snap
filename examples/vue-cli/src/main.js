import Vue from 'vue'
import App from './App.vue'
import VueSnap from '../../../dist/vue-snap.js'

Vue.use(VueSnap)

new Vue({
  render: (h) => { return h(App) },
}).$mount('#app')
