# Petro Solutions Website

Marketing site for Petro Solutions — petroleum equipment, service, installation, and merchant services. Built on Next.js 16 / React 19 / Tailwind v4, deployed to Cloudflare Workers via [`@opennextjs/cloudflare`](https://opennext.js.org/cloudflare).

The `dialhub/` folder is a **separate** Next.js project with its own deploy pipeline. It is intentionally untouched by this project's build, lint, and deployment workflows.

## Local development

```bash
npm install
npm run dev          # http://localhost:3000
```

## Production build (local)

```bash
npm run build        # plain Next.js production build
npm run lint         # ESLint
```

## Cloudflare preview & deploy

```bash
# Local preview against the Workers runtime (uses miniflare under the hood)
npm run preview

# Build for Cloudflare (Next.js + OpenNext transform) — no deploy
npm run cf:build

# Build and deploy to the petro-solutions-website Worker
npm run deploy
```

## CI / CD

GitHub Actions workflow: [`.github/workflows/deploy-petro-solutions.yml`](.github/workflows/deploy-petro-solutions.yml)

- **Trigger**: push to `main`, ignoring changes confined to `dialhub/**` and markdown files. Manual `workflow_dispatch` is also enabled.
- **Worker target**: `petro-solutions-website` (defined in [`wrangler.jsonc`](wrangler.jsonc))
- **Package manager**: npm

### Required GitHub Secrets

| Secret | Where to get it |
|---|---|
| `CLOUDFLARE_API_TOKEN` | Cloudflare Dashboard → My Profile → API Tokens → Create Token (use the *Edit Cloudflare Workers* template) |
| `CLOUDFLARE_ACCOUNT_ID` | Cloudflare Dashboard → Workers & Pages → right side of the overview page |

### Required Cloudflare Worker Secrets

These are runtime secrets read by `app/api/contact/route.ts`. Set them once per environment with `wrangler secret put`:

```bash
npx wrangler secret put SMTP_PASS
npx wrangler secret put TURNSTILE_SECRET_KEY
```

Non-secret runtime values (`CONTACT_EMAIL`, `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`) live in [`wrangler.jsonc`](wrangler.jsonc) under `vars`.

The public Turnstile site key (`NEXT_PUBLIC_TURNSTILE_SITE_KEY`) is read at build time from [`.env.production`](.env.production), which is committed to git on purpose — it ships in the client bundle and is therefore public.

## Custom domain

The Worker is currently deployed at `https://petro-solutions-website.<account>.workers.dev`. To attach a production domain, uncomment the `routes` block in [`wrangler.jsonc`](wrangler.jsonc) and add the domain in Cloudflare → Workers & Pages → petro-solutions-website → Settings → Triggers → Custom Domains.

## Project structure

```
.
├── app/                       Next.js App Router (pages, api routes, sitemap, robots)
├── components/                Petro UI components (header, footer, home sections)
├── public/petro-solutions/    Field photos + OMSPS credit application PDF
├── wrangler.jsonc             Cloudflare Worker config (petro-solutions-website)
├── open-next.config.ts        OpenNext Cloudflare adapter config
├── next.config.ts
├── .env.production            Public-only env values (NEXT_PUBLIC_*)
├── .env.local.example         Template for local SMTP + Turnstile creds
└── dialhub/                   Sibling project — DO NOT MODIFY
```
