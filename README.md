# DESIGN EXPLODE

An experimental, typography-driven festival portfolio. **Fictional project.**
Visual direction inspired by [Design Bomb](https://www.designbomb.it/). It is not affiliated with Design Bomb
and uses none of its logos, copy, names, dates or photographs.

## Stack

Next.js 16 · React 19 · TypeScript · Tailwind CSS v4 · Framer Motion · Biome · Bun

## Palette: Pine & Tangerine

| Token | Hex | Use |
| --- | --- | --- |
| `pine` | `#0B1F1A` | base background |
| `pine-2` | `#12302A` | alternate dark sections |
| `mist` | `#E9F0E4` | text, inverted sections |
| `tangerine` | `#FF6B2C` | primary accent, CTA |
| `aqua` | `#3DD9D6` | labels, lines |
| `butter` | `#FFD23F` | cursor, highlights |
| `lilac` | `#B79CFF` | stickers, categories |

Defined in `app/globals.css` under `@theme`.

## Getting started

```bash
bun install
bun run dev      # http://localhost:3000
bun run lint
bun run build
```

## Structure
app/ routes: / /program /workshops /gallery /about
app/template.tsx page transition (overlay sweep)
components/design-explode/ reusable UI (hero, lineup, program, gallery, ...)
lib/design-explode/data.ts all content: lineup, events, projects, gallery, shop

All content is data-driven. Edit `lib/design-explode/data.ts` to change copy, images or the brand name.

## Images

Photos come from [Unsplash](https://unsplash.com/) via `next/image`
(`images.unsplash.com` is allowed in `next.config.ts`). If a photo ID stops working, replace it in `IMG`;
a gradient fallback renders in the meantime. Please keep photographer credits accurate.

## Accessibility & performance

- `prefers-reduced-motion` disables marquees, floating stickers, parallax and the custom cursor.
- The custom cursor is desktop/fine-pointer only and never hides the native cursor.
- The mobile menu closes with `Esc` and traps scroll while open.
- Decorative motion is CSS-only; Framer Motion is used for transitions and interactions.

## Deploy (Vercel CLI)

```bash
bunx vercel login
bunx vercel link        # first time only
bunx vercel             # preview
bunx vercel --prod      # production
```

## License

Code: MIT. Third-party photos belong to their respective authors (Unsplash License).
