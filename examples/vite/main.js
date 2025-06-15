import { createApp } from 'vue'
import App from './App.vue'

import VueSnap from '../../dist/vue-snap.es.js'
import '../../dist/vue-snap.css'

const myApp = createApp(App)

myApp.use(VueSnap)
myApp.mount('#app')
