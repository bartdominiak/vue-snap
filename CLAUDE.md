## Core Philosophy
Write simple, readable, lightweight code. Prefer clarity over cleverness. Avoid overhead and premature complexity.

## Functions
- Use pure functions; avoid mutating state.
- Keep functions small with a single responsibility — one function does one thing.
- Make functions modular and standalone (no hidden dependencies on outer state).
- Use guard clauses (early return) to keep nesting shallow.
- Flatten asynchronous code with async/await over nested promise chains.

## Readability
- Name things clearly — descriptive names over comments. Code should read as self-documenting.
- Comment the *why*, not the *what*. Skip comments that just restate the code.
- Avoid magic numbers — extract them into named constants.
- Prefer composition over deep nesting; flat is readable.
- Keep a consistent style; let a formatter (Prettier/Biome) handle it automatically.

## State & Data
- No magic numbers/strings — name them as constants. Function-specific → top of the function; shared → top of the module.
- Immutability by default — `const` over `let`; return new objects instead of mutating.
- Validate inputs at boundaries; handle errors explicitly and fail fast.
- Never swallow errors silently.

## Architecture
- Modern, fast, lightweight — avoid library overhead.
  - Prefer native/stdlib solutions first.
  - Only add a dependency for genuinely complex, well-tested problems (e.g. date parsing, crypto). Don't reinvent those.
- Avoid premature abstraction — don't add layers, config, or generics until a real second use case exists.
- Split code into modules by concern; don't put everything in one file.
  - Heuristic: split when a file exceeds ~200 lines or mixes responsibilities.
- No dead code — delete unused code instead of commenting it out (version control remembers).
