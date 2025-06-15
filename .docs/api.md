# API
Here are all the available props and events for the Vue Snap Carousel component:

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `hideArrows` | Boolean | `false` | Disable arrows |
| `hideArrowsOnBound` | Boolean | `false` | Disable arrows on bound |
| `tag` | string | `ul` | Custom tag |
| `i18n` | object | `{ slideLeft: 'Slide left', slideRight: 'Slide right'}` | Transaltions |

## Events

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `page` | Event | - | Page change |
| `bound-left` | Event | - | First item reach |
| `bound-right` | Event | - | Last item reach |

## Slots

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `default` | Slot | - | Slot for Slides |
| `arrows` | Slot | - | Slot for Arrows |
