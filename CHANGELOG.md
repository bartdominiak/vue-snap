# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [1.1.0] - 2025-06-21
## Updated
- Refactored core logic into a custom useCarousel hook
- Removed unnecessary logic (e.g. resize events, lodash/debounce)
- Simplified and optimized carousel calculations
- Minified entire carousel bundle to just 4KB

## [1.0.3] - 2025-06-15

### Fixed
- Package.json import/export destination files

## [1.0.2] - 2025-06-15

### Fixed
- Package.json import/export destination files

## [1.0.1] - 2025-06-15

### Fixed
- Package.json import/export destination files

## [1.0.0] - 2025-06-15

### Added
- Vitepress docs
### Fixed
- Github Workflow Pipeline
### Removed
- Rollup configs
- Storybook

## [0.7.1] - 2021-05-07

### Added
- Mounted event
### Fixed
- Prevent duplicated event page trigger

## [0.7.0] - 2021-02-08
### Removed
- maxPages and its calculation (#55)

### Updated
- Replace changeSlide with simpler goToSlide, for consistent behavior with exposed go-to-page API + removal of dependent method that is not in use anymore (#55)
- Split getting current page index from setting it, supporting passing the index from outside, for example goToSlide method, so in some cases the index will change, even if there was no scroll event. (#55)

### Fixed
- Fix support for calculating a proper current slide index, when there is nothing left to scroll (#55)

## [0.6.7] - 2021-02-08
### Added
- Go to slide API (#54)

## [0.6.6] - 2020-12-06
### Updated
- Rollback rollup-plugin-vue(6.0.0 => 5.1.9)

## [0.6.5] - 2020-12-05
### Updated
- Dependencies

## [0.6.4] - 2020-11-29
### Added
- changeSlide, BoundLeft, BoundRight inside slot-scope

## [0.6.3] - 2020-11-23
### Updated
- elementScrollBy function name (#47)
- Dependencies

## [0.6.2] - 2020-11-01
### Fixed
- Slide children method

## [0.6.1] - 2020-09-24
### Updated
- Yarn lock file

## [0.6.0] - 2020-09-24
### Removed
- Removed maximum node version range (#41)
- Node version max range (#41)

### Added
- Added dynamic tag support (#41)
- Added i18n support with proper validation (#41)
- Reset list-style CSS (#41)

## [0.5.2] - 2020-09-21
### Updated
- Rollup configs
- Vue@2 and Vue@3 examples
- Docs
- Dependencies
- TravisCI Config (Auto-deploy only Vue@2 version)

## [0.5.1] - 2020-09-17
### Updated
- Docs

## [0.5.0] - 2020-09-17
### Added
- Emit page and bound events (#35)
- Slot/Props/Event descriptions

### Updated
- seamless-scroll-polyfill (1.1.0 => 1.2.1)
- Stories markups

## [0.4.0] - 2020-09-15
### Added
- Ability to disable arrows and arrowsOnBound (#30)

### Fixed
- Created onResizefn/onScrollFn variables to avoid memory leaks (#28)
- Improve bound calculation precision (#28)
- Avoiding undefined ref (#28)
- Decrease MutationObserver scope only to vsWrapper

### Updated
- Renamed Navigation slot to Arrows (#30)

## [0.3.4] - 2020-09-15
### Fixed
- seamless-scroll-polyfill(^1.1.0 => 1.1.0)

## [0.3.3] - 2020-09-15
### Fixed
- TravisCI Config with proper ENV variables

## [0.3.2] - 2020-09-15
### Added
- Automated travis deployment

## [0.3.1] - 2020-09-14
### Updated
- TravisCI configs

## [0.3.0] - 2020-09-05
### Added
- Dynamic slides support (#25)

### Updated
- Dependencies

## [0.2.0] - 2020-08-29
### Added
- VueLazy lib

### Updated
- Dependencies

### Deleted
- Static height in wrapper (#22)
- Old directives

## [0.1.0-beta.9] - 2020-08-26
### Updated
- Dependencies

### Added
- Missing type for button arrows (#21)

## [0.1.0-beta.8] - 2020-07-12
### Deleted
- develop branch

### Updated
- trigger deployment only on tag release

## [0.1.0-beta.7] - 2020-07-12
### Updated
- changed spread to Array.from (reduce bundle size)

## [0.1.0-beta.6] - 2020-07-12
### Fixed
- storybook typo

## [0.1.0-beta.5] - 2020-07-12
### Added
- storybook-static folder to .npmignore

## [0.1.0-beta.4] - 2020-07-12
### Fixed
- tag typo

## [0.1.0-beta.3] - 2020-07-12
### Added
- non-regular slide widths Support (#16)
- SSR Support (#13)
- Event optimisation with debounce
- Reorganize methods, and load only on need (like Events: Scroll, Resize, or on init)

### Updated
- docs with new installation proccess

### Moved
- rollup configs to seperate folders

## [0.1.0-beta.2] - 2020-06-24
### Added
- Rollup init

### Deleted
- Webpack configs

## [0.1.0-beta.1] - 2020-06-17
### Fixed
- Docs: example relative url

### Added
- seamless-scroll-polyfill package

### Deleted
- Docs: removed example url
- scss-loader and reduce final bundle size
- comments in final bundle

### Moved
- Vue as peerDependency

## [0.1.0-alpha.8] - 2020-06-14
### Fixed
- Docs: Workaround for non-supported SSR plugin

## [0.1.0-alpha.7] - 2020-06-14
### Added
- Docs: Intersection-observer polyfill

### Fixed
- Docs: taking VueSnap from dist folder (compiled version)

## [0.1.0-alpha.6] - 2020-06-14
### Added
- Scroll Smooth polyfill (#11)

## [0.1.0-alpha.5] - 2020-06-14
### Added
- Lazyload support
- Lazyload examples to docs and storybook

## [0.1.0-alpha.4] - 2020-06-13
### Added
- Examples to docs
- Babel presets

## [0.1.0-alpha.3] - 2020-06-13
### Added
- docs & storybook deployment

## [0.1.0-alpha.2] - 2020-06-13
### Added
- initialize eslint #8
- initilize git hooks (husky) #8
- initialize VuePress #6
- Storybook Addons (docs, a11y, actions, knobs, viewport, storysource) #2
- props/slots preview #2
- initilize travis #7

## [0.1.0-alpha.1] - 2020-06-12
### Added
- Project init
