# Claude / coding agent — agentwallet-website

Project-specific notes for Claude Code and similar assistants working in this repo.

## Summary

Next.js **16** App Router marketing site for **Agent Wallet** (Begin Wallet). Homepage is a stacked set of React sections; styles live in **`src/app/globals.css`**. Canonical site URL in metadata: **`https://agentwallet.sh`**.

## Quick reference

| Task | Location |
|------|----------|
| Reorder or add homepage sections | `src/app/page.tsx` + `src/components/*.tsx` |
| SEO / OG / Twitter / icons | `src/app/layout.tsx` (`metadata`, `viewport`) |
| Colors, typography, layout utilities | `src/app/globals.css` (`:root`, `[data-theme="dark"]`, `.shell`, `.section`, …) |
| Theme toggle + persistence | `src/components/ThemeToggle.tsx` + `localStorage` `aw-theme` + `dataset.theme` + inline script in `layout.tsx` |
| Static files | `public/` |

## Tech

- React **19**, TypeScript **strict**, ESLint via **`eslint.config.mjs`** (`eslint-config-next`).
- **No Tailwind** in dependencies; keep styling in global CSS unless the team decides otherwise.
- **`next.config.ts`:** sets `turbopack.root` to the project directory for consistent resolution.

## Implementation habits

1. Match existing component patterns: default export, semantic HTML, same class naming as nearby sections.
2. When adding UI, reuse design tokens (`--accent`, `--fg-muted`, `--radius`, etc.) from `globals.css`.
3. Run **`pnpm lint`** and **`pnpm build`** after non-trivial changes.

## Out of scope

This repository does not implement wallet logic, chain RPCs, or agent protocols. If asked to “add wallet features,” clarify whether the request is **copy/UI** on this site or a different codebase.
