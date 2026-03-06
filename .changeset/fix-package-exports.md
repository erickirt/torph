---
"torph": patch
---

Fix package exports and reduce bundle size

- Remove source maps from published package (64.9 kB → 11.8 kB packed)
- Fix missing `.d.ts` type declarations for Vue and Svelte CJS consumers
- Fix broken type import paths in Vue/Svelte declarations (inline types instead of referencing non-existent paths)
- Add `main` and `module` top-level fields for legacy bundler compatibility
