# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [0.5.0] - 2020-09-17
### Added
- Emit page and bound events (#35)

### Updated
- seamless-scroll-polyfill(1.1.0 => 1.2.1)

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
