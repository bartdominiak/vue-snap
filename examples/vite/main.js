import { createApp } from 'vue'
import App from './App.vue'

import VueSnap from 'vue-snap'
import 'vue-snap/style.css'

const myApp = createApp(App)

myApp.use(VueSnap)
myApp.mount('#app')
