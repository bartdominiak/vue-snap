# vue-carousel

## About
This is PoC Carousel (Slider) based on Scroll Snap and Observer API. I'm currently looking for best way to improve sliders performence for one of my client. With scroll snap we're not obligated to load additional libs with heavy calculations.

## Bugs
- Scroll Snap not supported in IE,
- Sometimes after first load, Carousel starts in the middle of list,
- `scrollBy(1, 0)` and `scrollBy(-1, 0)` methods doesn't scroll by slide in Firefox, and Safari.
- Images are not loading after changed slide (Opera, Intersection API)

## Development

Install necessary depandancies
```
  yarn
```

Run in Development mode
```
  yarn dev
```

Run in Production build
```
  yarn build
```
