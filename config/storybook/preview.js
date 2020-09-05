import Vue from 'vue'

// VueSnap Lib
import VueSnap from '../../src/entry'
import '../../dist/vue-snap.css'

// VueLazy Lib
import VueLazy from 'vue-lazy'
import 'vue-lazy/dist/vue-lazy.css'

Vue.use(VueSnap)
Vue.use(VueLazy)
