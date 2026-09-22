# Ness Sport Global

Built with Next.js 16, React 19, TypeScript and Tailwind CSS 4.

## Run locally

```sh
npm install
npm run dev -- --port 3100
```

Open http://localhost:3100.

## Production

`npm run build` type-checks and exports the site to `out/`. It can be served by a static host. No database or environment secrets are required.

## Cloudflare Pages

The repo is ready to deploy on Cloudflare Pages. In the Pages project settings use:

- Build command: `npm run build`
- Build output directory: `out`
- Node version: read from `.nvmrc` (24)

Or deploy directly with Wrangler: `npm run cf:deploy` (project name `nsg-web`, configured in `wrangler.toml`). Cache headers are served from `public/_headers`.

## Edit content

Player names, regions, navigation and event details are in `lib/content.ts`. Longer player biographies, event stories and eight expertise overview pages are in `lib/stories.ts`. Detail pages are generated from that data. Helvetica is used for headings/navigation, with locally bundled Poppins for body text.

Optimized copies of supplied assets are in `public/images`. Original assets are preserved in the parent `Assets` folder. Run `node scripts/prepare-assets.mjs` from this directory to regenerate the copies while that folder is available.

The October events use 2026 based on the supplied brief and current year. Tour locations/programme and Unity Cup venue have not been supplied, so the pages explicitly leave these to be announced. Jay Gohel's regional label is shown as India · Saurashtra. His name was not silently matched to the differently spelled Jay Gohil in public databases, so his description remains grounded in the supplied information. The other profiles include researched career context, with links in expandable Career references sections. Priyank Panchal's biography acknowledges his 2025 retirement while preserving his place in the user's managed roster. The three missing reference screenshots are not used as content.

Homepage categories expand on click or keyboard activation; Escape closes the deepest open level. All detail pages have direct URLs and links back to the roster/work pages.

Page entrances, scroll reveals and hover animations respect reduced-motion preferences. Content remains available without JavaScript. Portraits use bounded, uncropped images; mobile layouts stack the navigation and editorial columns.

Validation: production build and TypeScript checks pass. All 28 exported HTML files (including framework error pages) were checked for missing local links and assets; none were found. Desktop and mobile menu/profile/event flows were inspected in the browser.

Hosting: a private Sites project is registered in `.openai/hosting.json`, but publication could not complete because the installed Sites publishing helper disappeared during this session. The local site and static export remain available; no public deployment was made.
