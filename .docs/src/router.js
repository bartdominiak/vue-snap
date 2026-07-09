import { createRouter, createWebHistory } from 'vue-router';
import Home from './views/Home.vue';
import GettingStarted from './views/GettingStarted.vue';
import Examples from './views/Examples.vue';
import Api from './views/Api.vue';

export const routes = [
  { path: '/', name: 'home', component: Home, meta: { label: 'Home' } },
  { path: '/getting-started', name: 'getting-started', component: GettingStarted, meta: { label: 'Getting Started' } },
  { path: '/examples', name: 'examples', component: Examples, meta: { label: 'Examples' } },
  { path: '/api', name: 'api', component: Api, meta: { label: 'API' } },
];

// Nav items for the header, derived from the route table.
export const navLinks = routes.map(({ path, meta }) => ({ path, label: meta.label }));

export const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior: () => ({ top: 0 }),
});
