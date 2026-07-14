import { createApp } from 'vue';
import VueSnap from 'vue-snap';
import 'vue-snap/style.css';

import App from './App.vue';
import { router } from './router';
import './style.css';

createApp(App).use(router).use(VueSnap).mount('#app');
