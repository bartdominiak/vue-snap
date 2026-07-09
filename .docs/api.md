# API

## `Carousel`

### Props

| Prop                | Type    | Default                                                  | Description                                             |
|----------------------|---------|-----------------------------------------------------------|-----------------------------------------------------------|
| `tag`                | String  | `'ul'`                                                    | HTML tag used for the slide container                     |
| `hideArrowsOnBound`  | Boolean | `false`                                                    | Hides the relevant arrow when the first/last slide is active |
| `autoplay`           | Boolean | `false`                                                    | Automatically advances slides, looping back to the start  |
| `autoplayInterval`   | Number  | `3000`                                                     | Delay in milliseconds between autoplay advances            |
| `i18n`               | Object  | `{ slideLeft: 'Slide left', slideRight: 'Slide right' }`   | Accessible labels for the built-in arrow buttons            |

Hovering the carousel pauses autoplay; it resumes on mouse leave.

### Events

| Event         | Payload   | Description                                              |
|----------------|-----------|-------------------------------------------------------------|
| `mounted`      | `Boolean` | Emitted once the carousel has mounted                      |
| `slide-change` | `Number`  | Emitted when the active slide changes, with the new index  |
| `left-bound`   | `Boolean` | Emitted when the first slide becomes active                |
| `right-bound`  | `Boolean` | Emitted when the last slide becomes active                 |
| `autoplay`     | `Boolean` | Emitted when autoplay pauses (`false`) or resumes (`true`) |

### Slots

| Slot      | Props                                          | Description                        |
|-----------|-------------------------------------------------|---------------------------------------|
| `default` | –                                                | Slide content, typically `<Slide>` items |
| `arrows`  | `{ changeSlide, isBoundLeft, isBoundRight }`     | Replace the default arrow buttons    |

### Exposed methods

Access these via a template ref on `<Carousel>`.

| Method        | Parameters                    | Description                                    |
|---------------|--------------------------------|--------------------------------------------------|
| `goToSlide`   | `index: number`                | Scrolls to the slide at the given index          |
| `changeSlide` | `direction: 1 \| -1`           | Moves forward (`1`) or backward (`-1`) one slide |

## `Slide`

### Props

| Prop  | Type   | Default | Description                            |
|-------|--------|---------|------------------------------------------|
| `tag` | String | `'li'`  | HTML tag rendered for the slide element |
