import Vue from 'vue'
import App from './App.vue'
import VueSnap from 'vue-snap'
import 'vue-snap/dist/vue-snap.css'

Vue.use(VueSnap)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
