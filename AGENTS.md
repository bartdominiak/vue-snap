# vue-snap — agent guide

Vue 3 carousel library built on CSS Scroll Snap. ESM-only npm package; the compiled `dist/` is committed to the repo.

## Commands

```
bun install              # install deps (bun is the package manager everywhere)
bun run lint             # biome check src
bun run format           # biome format --write src
bun test                 # bun test runner (src/**/*.test.ts)
bun run release          # vue-tsc -b + vite build → dist/
```

CI (`.github/workflows/main.yml`) runs install → lint → test → release on every push. All four must pass.

## Layout

- `src/entry.ts` — public entry: exports `Carousel`, `Slide`, and the install plugin
- `src/components/` — `Carousel.vue`, `Slide.vue`, `carousel.scss` (styles sourced by the SFC via `<style src>`)
- `src/composables/` — `useCarousel.ts` (scroll/navigation), `useAutoplay.ts` (timer)
- `src/utils/helpers.ts` — small pure helpers + tests alongside (`*.test.ts`)
- `.docs/` — showcase site (separate bun project, deployed to vue-snap.vercel.app)
- `examples/` — runnable Vite and Nuxt apps consuming the published package
- `config` in root: `vite.config.ts`, split tsconfigs (`tsconfig.app/node/test.json` referenced from `tsconfig.json`)

## Conventions

- Conventional commits, lowercase (`feat:`, `fix:`, `chore:`, `docs:`, `refactor:`); breaking changes use `!` and a `BREAKING CHANGE:` footer
- Every user-facing change gets a `CHANGELOG.md` entry (Keep a Changelog format); internal-only changes do not
- Releases: bump `package.json` version + changelog in a `chore: release X.Y.Z` commit, then tag `X.Y.Z` (no `v` prefix), GitHub release, `npm publish`
- After changing `src/`, run `bun run release` and commit the updated `dist/` — it is part of the repo
- TypeScript stays on 6.x (`vue-tsc` does not support the TS 7 native compiler yet)
- SSR safety: guard all DOM/window access behind the `isClient` helper; no timers or listeners on the server
- Keep the bundle small — check the reported size after `bun run release`; avoid new runtime dependencies

## Code style

### Core Philosophy
Write simple, readable, lightweight code. Prefer clarity over cleverness. Avoid overhead and premature complexity.

### Functions
- Use pure functions; avoid mutating state.
- Keep functions small with a single responsibility — one function does one thing.
- Make functions modular and standalone (no hidden dependencies on outer state).
- Use guard clauses (early return) to keep nesting shallow.
- Flatten asynchronous code with async/await over nested promise chains.

### Readability
- Name things clearly — descriptive names over comments. Code should read as self-documenting.
- Comment the *why*, not the *what*. Skip comments that just restate the code.
- Avoid magic numbers — extract them into named constants.
- Prefer composition over deep nesting; flat is readable.
- Keep a consistent style; let a formatter (Prettier/Biome) handle it automatically.

### State & Data
- No magic numbers/strings — name them as constants. Function-specific → top of the function; shared → top of the module.
- Immutability by default — `const` over `let`; return new objects instead of mutating.
- Validate inputs at boundaries; handle errors explicitly and fail fast.
- Never swallow errors silently.

### Architecture
- Modern, fast, lightweight — avoid library overhead.
  - Prefer native/stdlib solutions first.
  - Only add a dependency for genuinely complex, well-tested problems (e.g. date parsing, crypto). Don't reinvent those.
- Avoid premature abstraction — don't add layers, config, or generics until a real second use case exists.
- Split code into modules by concern; don't put everything in one file.
  - Heuristic: split when a file exceeds ~200 lines or mixes responsibilities.
- No dead code — delete unused code instead of commenting it out (version control remembers).

Biome enforces formatting — run `bun run format` before committing.
