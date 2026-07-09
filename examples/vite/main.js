import { createApp } from 'vue'
import App from './App.vue'

import VueSnap from 'vue-snap'
import 'vue-snap/vue-snap.css'

const myApp = createApp(App)

myApp.use(VueSnap)
myApp.mount('#app')
