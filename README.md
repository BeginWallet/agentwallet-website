# Agent Wallet — marketing site

Public landing page for **Agent Wallet**: a headless, multi-chain CLI wallet for autonomous agents (by [Begin Wallet](https://github.com/BeginWallet)). This repo is the **Next.js** site only; the CLI lives elsewhere.

**Canonical URL:** [https://agentwallet.sh](https://agentwallet.sh)

**Repository:** [BeginWallet/agentwallet-website](https://github.com/BeginWallet/agentwallet-website)

## Stack

- **Next.js** 16 (App Router), **React** 19, **TypeScript**
- **Styling:** global CSS in `src/app/globals.css` (design tokens, utility-style classes — no Tailwind)
- **Fonts:** Google Fonts (`Inter Tight`, `Instrument Serif`, `JetBrains Mono`) loaded in `src/app/layout.tsx`

## Prerequisites

- Node.js 20+ (recommended)
- [pnpm](https://pnpm.io/) (repo includes `pnpm-lock.yaml`) — or use `npm` / `yarn` if you prefer matching lockfiles locally

## Commands

```bash
pnpm install
pnpm dev       # http://localhost:3000
pnpm build
pnpm start     # production server after build
pnpm lint
```

## Project layout

| Path | Role |
|------|------|
| `src/app/layout.tsx` | Root layout: metadata (`metadataBase` / OG / Twitter), theme script, font links |
| `src/app/page.tsx` | Home page: ordered section imports |
| `src/app/globals.css` | Themes (`:root`, `[data-theme="dark"]`), layout helpers (`.shell`, `.section`), component styles |
| `src/components/*.tsx` | One file per homepage section (`Nav`, `Hero`, `Chains`, …) |
| `public/` | Static assets (`logo-mark.svg`, `chains/*.svg`) |
| `.claude/launch.json` | Optional local launch config (`pnpm dev` on port 3000) |

## Theming

- **Stored preference:** `localStorage` key `aw-theme`: `light` | `dark`
- **DOM:** `document.documentElement.dataset.theme`
- Inline script in `layout.tsx` runs before paint to reduce flash; `ThemeToggle` syncs after mount

## Contributing / editing content

1. Copy and section order live in `src/app/page.tsx` — add or reorder imports there.
2. Prefer new homepage blocks as **`src/components/YourSection.tsx`** and reuse `.shell`, `.section`, and existing typography/button classes from `globals.css` where possible.
3. After changing marketing claims or URLs, update **`layout.tsx`** `metadata` / `openGraph` / `twitter` to match.

## License

See repository settings or root license file if one is added; this README does not imply a particular license.
