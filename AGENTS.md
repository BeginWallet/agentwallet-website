# Agent instructions — agentwallet-website

Use this file as project context when editing this repository in Cursor or similar tools.

## What this is

A **marketing-only** Next.js site for Agent Wallet (`metadataBase`: `https://agentwallet.sh`). It is **not** the CLI or wallet runtime.

## Commands

- Install: `pnpm install` (or npm/yarn; lockfile is pnpm).
- Dev: `pnpm dev` → `localhost:3000`.
- Checks: `pnpm lint`, `pnpm build`.

## Structure

- **`src/app/page.tsx`** — Defines homepage section **order**. Each section is a component under `src/components/`.
- **`src/app/layout.tsx`** — SEO metadata, viewport theme colors, font preconnect/links, blocking theme initializer script (must stay before first paint if we care about FOUC).
- **`src/app/globals.css`** — All styling: CSS variables for light/dark, `.shell` max-width container, `.section` spacing, component class names.

## Conventions

- **Imports:** `@/components/...`, `@/` maps to `./src/*` (`tsconfig.json`).
- **Styling:** Prefer extending **`globals.css`** and existing classes. Do **not** add Tailwind unless the project adopts it explicitly.
- **Client components:** Add `"use client"` only where needed (`useEffect`, `useState`, click handlers).
- **Theme:** Persist with `localStorage` key **`aw-theme`**, mirror to **`document.documentElement.dataset.theme`** (`light` | `dark`). Keep `layout.tsx` inline script aligned with `ThemeToggle` behavior.

## Editing the landing page

- New block: create `src/components/Name.tsx`, style via `globals.css` or scoped classes already used by siblings, export and import from `page.tsx`.
- **Assets:** put SVGs/images under **`public/`** (e.g. `public/chains/`).

## What not to do

- Do not confuse this repo with the Agent Wallet CLI; don’t invent API endpoints here unless product asks for them.
- Avoid drive-by refactors across many sections; touch only files needed for the task.
- Canonical URLs and social previews are centralized in **`layout.tsx`** — keep them consistent when copy changes meaningfully.
