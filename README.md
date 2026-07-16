# Trainora — B2B Marketing AI Training Platform

Demo web app for route / user-journey scanning. Trainora is a fictional B2B marketing-tech product for training and activating AI models.

## Quick start

```bash
npm install
npm run dev
```

Open the URL Vite prints (usually `http://localhost:5173`).

## Auth for product routes

App routes under `/app/*` require login. Use any email/password on `/login`, or complete `/signup` → onboarding.

## Major user flows (for scanners)

1. **Self-serve trial** — `/` → `/signup` → `/onboarding/*` → `/app`
2. **Sales demo** — `/` → `/demo` → `/demo/confirmed` → `/resources` or `/signup`
3. **Paid checkout** — `/pricing` → `/checkout/:planId` → `/checkout/:planId/success` → onboarding
4. **Returning user** — `/login` or `/login/sso` → `/app`
5. **Password reset** — `/forgot-password` → `/forgot-password/sent` → `/reset-password` → `/login`
6. **Campaign launch** — `/app/campaigns/new` (4 steps) → results → retrain
7. **Training job** — `/app/training/new` (4 steps) → job detail → logs → model
8. **Audience import** — `/app/audiences/import` (3 steps) → audience detail
9. **Integration connect** — `/integrations/:id` → `/app/integrations/:id/connect` → success
10. **Billing upgrade** — `/app/settings/billing/upgrade` → success or enterprise demo
11. **Team invite** — `/app/settings/team/invite` → sent
12. **Admin** — `/app/admin` → audit log / environments / API keys
13. **Content → product** — `/blog/:slug`, `/docs/:slug`, `/solutions/:slug` into trial/demo/docs

## Scripts

- `npm run dev` — local development
- `npm run build` — production build
- `npm run preview` — preview production build
