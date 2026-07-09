import { ref } from 'vue';

// A deliberately tiny hash router — no dependency needed for four pages.
export const routes = [
  { path: 'home', label: 'Home' },
  { path: 'getting-started', label: 'Getting Started' },
  { path: 'examples', label: 'Examples' },
  { path: 'api', label: 'API' },
];

const parseHash = () => window.location.hash.replace(/^#\/?/, '') || 'home';

export const currentPath = ref(parseHash());

window.addEventListener('hashchange', () => {
  currentPath.value = parseHash();
  window.scrollTo({ top: 0 });
});

export const navigate = (path) => {
  window.location.hash = `/${path}`;
};
