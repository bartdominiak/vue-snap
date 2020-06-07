# vue-carousel

## About
This is PoC Carousel (Slider) based on Scroll Snap and Observer API. I'm currently looking for best way to improve sliders performence for one of my client. With scroll snap we're not obligated to load additional libs with heavy calculations.

## Bugs
- Scroll Snap not supported yet by IE,
- Sometimes after first load, Carousel starts on middle of list instead first,
- `scrollBy(1, 0)` or `scrollBy(-1, 0)` doesn't scroll by slide (Firefox, Safari),
- Image doesnt load on slide change in Opera (Observer API)

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
