# Release and Deployment Guide
## Reinvent Watch And Build — Amravati

## 1. Deployment target

- Hosting: Vercel
- Repository: GitHub
- Framework: Next.js App Router
- Production domain: `[CONFIRM: PRODUCTION_DOMAIN]`
- Registration provider: Luma
- Analytics provider: `[CONFIRM: ANALYTICS_PROVIDER]`

## 2. Required configuration

Create `.env.example` with documented variable names and safe placeholders. Do not commit real secrets.

Example:

```dotenv
# Public canonical URL for production metadata
NEXT_PUBLIC_SITE_URL=https://[CONFIRM-PRODUCTION-DOMAIN]

# Public analytics project/site ID, if required by the selected provider
NEXT_PUBLIC_ANALYTICS_ID=

# Optional: only if the chosen analytics integration supports a public endpoint/config
NEXT_PUBLIC_ANALYTICS_ENDPOINT=
```

Only add variables that the selected integration actually needs. Never expose private API keys through `NEXT_PUBLIC_*`. If a future counter service requires a secret, access it through a server-only endpoint or a trusted provider integration; do not ship the secret to the browser.

Keep the Luma URL and event details in the typed event configuration unless there is a specific reason to use environment configuration. Validate the Luma URL before release.

## 3. Local validation

Run the commands supported by the actual package scripts. A typical workflow is:

```bash
npm ci
npm run lint
npm run build
npm run start
```

If the project does not define a `lint` script, add it or use the documented equivalent. Resolve TypeScript errors, build errors, warnings that affect production behavior, and console errors before launch.

## 4. Vercel setup

1. Push the project to a GitHub repository.
2. Import the repository into Vercel.
3. Confirm the detected Next.js framework and build settings.
4. Configure environment variables for Preview and Production separately.
5. Deploy a preview build.
6. Review the preview with organizers and complete `Testing.md`.
7. Configure the production domain and DNS records.
8. Verify HTTPS and the canonical production URL.
9. Deploy to production after sign-off.

Do not use the production domain as canonical until it is configured and verified.

## 5. Pre-release content gate

The release must be blocked if any of these remain unresolved:
- `[CONFIRM: EVENT_DATE]`
- `[CONFIRM: EVENT_START_TIME / END_TIME]`
- `[CONFIRM: VENUE_NAME / FULL_ADDRESS]`
- `[CONFIRM: LUMA_REGISTRATION_URL]`
- `[CONFIRM: PRODUCTION_DOMAIN]`
- `[CONFIRM: agenda and speaker information, or remove unconfirmed details]`
- `[CONFIRM: goodies, certificate, credits, or other attendee benefits]`
- `[CONFIRM: organizer names, affiliations, participating communities, and permissions]`
- `[CONFIRM: approved branding and affiliation language]`

The event fee is planned as ₹0, but organizers must reconfirm before publication.

## 6. Post-deployment verification

- [ ] Open the production URL on desktop and mobile.
- [ ] Verify all registration buttons open the correct Luma page.
- [ ] Check date, time, venue, fee, agenda, and benefit copy.
- [ ] Confirm no placeholder text is visible.
- [ ] Inspect page title, meta description, canonical URL, and social preview.
- [ ] Open sitemap and robots endpoints.
- [ ] Test analytics page-view and CTA events.
- [ ] Confirm the visitor metric definition if a public counter exists.
- [ ] Check browser console and network errors.
- [ ] Verify image loading and layout at mobile widths.
- [ ] Confirm organizer contact and social links.
- [ ] Submit the domain to Google Search Console if appropriate.
- [ ] Record the deployment date, commit hash, and sign-off.

## 7. Rollback

If production has a broken registration link, incorrect event details, exposed secret, or critical layout defect:
1. Pause promotion of the broken URL if possible.
2. Roll back to the last known-good Vercel deployment or revert the faulty commit.
3. Verify the Luma URL and production page.
4. Correct the issue in a preview deployment.
5. Re-run the affected tests before redeploying.

## 8. Change management

Event date, venue, Luma URL, agenda, benefits, organizer roster, and production domain are high-impact fields. Update the central data source, run validation, test every CTA, and review metadata/social previews after changes.

## 9. Launch sign-off

- Product/content owner: `[CONFIRM: NAME / ROLE]`
- Technical reviewer: `[CONFIRM: NAME / ROLE]`
- Organizer approval date: `[CONFIRM: DATE]`
- Production URL: `[CONFIRM: URL]`
- Release commit: `[FILL AFTER RELEASE]`
- Known issues: `[FILL BEFORE RELEASE, OR NONE]`
