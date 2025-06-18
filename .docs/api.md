# API

# Vue Snap Carousel – API

## Props

| Prop                | Type    | Default                                               | Description                                        |
|---------------------|---------|-------------------------------------------------------|----------------------------------------------------|
| `hideArrows`        | Boolean | `false`                                               | Hides navigation arrows                            |
| `hideArrowsOnBound` | Boolean | `false`                                               | Hides arrows when at the first or last slide       |
| `tag`               | String  | `'ul'`                                                | HTML tag used for the slide container              |
| `i18n`              | Object  | `{ slideLeft: 'Slide left', slideRight: 'Slide right' }` | Translations for accessibility and tooltips        |

## Events

| Event          | Payload    | Description                              |
|----------------|------------|------------------------------------------|
| `mounted`      | -          | Emitted when the carousel is mounted     |
| `slide-change` | `Number`   | Emitted on slide change (new index)      |
| `left-bound`   | `Boolean`  | Emitted when the first slide is reached  |
| `right-bound`  | `Boolean`  | Emitted when the last slide is reached   |

## Slots

| Slot      | Description                    |
|-----------|--------------------------------|
| `default` | Slot for slide content         |
| `arrows`  | Slot for custom arrow controls |

## Functions

| Method        | Parameters                    | Description                                   |
|---------------|-------------------------------|-----------------------------------------------|
| `goToSlide`   | `index: Number`               | Navigates to a specific slide by index        |
| `changeSlide` | `direction: Number (1 or -1)` | Moves forward (1) or backward (-1) one slide  |
