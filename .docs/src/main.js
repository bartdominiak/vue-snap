import { createApp } from 'vue';
import VueSnap from 'vue-snap';
import 'vue-snap/dist/vue-snap.css';

import App from './App.vue';
import './style.css';

createApp(App).use(VueSnap).mount('#app');
