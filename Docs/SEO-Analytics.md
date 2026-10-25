# SEO, Social Sharing, Analytics, and Visitor Count
## Reinvent Watch And Build — Amravati

## 1. SEO objectives

Help students searching for local student technology events, cloud computing events, and developer meetups understand what the event is and find the official event page. SEO supports discovery; it does not guarantee ranking or registration volume.

## 2. Suggested metadata

**Title template:**
`Reinvent Watch And Build Amravati | Student Cloud Community Event`

**Meta description draft:**
`Join Reinvent Watch And Build in Amravati, a student-focused event for cloud learning and developer connections. Check the confirmed agenda and register through Luma.`

Review the description after the agenda is confirmed. Do not mention unconfirmed speakers, activities, goodies, or certificates.

**Canonical URL:** `[CONFIRM: PRODUCTION_DOMAIN]`

Use Next.js App Router metadata APIs in `src/app/layout.tsx` or the page-level metadata export. Configure a single canonical production URL; do not canonicalize preview deployments to themselves.

## 3. Technical SEO checklist

- Server-render or statically generate the main event content.
- Use one meaningful H1 and logical heading hierarchy.
- Use semantic HTML for navigation, main content, sections, and footer.
- Use descriptive internal anchor IDs and link labels.
- Provide alt text for meaningful images; decorative images should use empty alt text.
- Generate `sitemap.xml` and `robots.txt` using Next.js conventions or an equivalent maintained method.
- Ensure production pages are indexable; preview deployments should not accidentally be indexed.
- Use HTTPS and a stable canonical domain.
- Add Open Graph title, description, URL, and image.
- Add Twitter/X card metadata where useful.
- Use a high-quality original social-sharing image with readable text at small sizes.
- Verify the live page in Google Search Console after domain verification.
- Check for broken links and indexing directives after deployment.

Structured data: only add an appropriate event schema if all required event fields are confirmed and the markup accurately reflects the public page. Do not publish invented date, location, organizer, or offer data in structured data.

## 4. Social preview

Required asset:
- `public/og-image.jpg` or an equivalent configured Open Graph image
- Use approved event branding and a concise event name
- Include Amravati and the tagline if legible
- Avoid copying the LPU reference artwork
- Verify the deployed preview using platform debugging tools where available

## 5. Analytics plan

Choose one provider before implementation. Candidate categories include a privacy-focused analytics product or Vercel Web Analytics. Review current provider behavior, retention, cookie/local-storage usage, consent obligations, and regional legal requirements before selecting.

Minimum metrics:
- Page views
- Sessions or unique visitors as defined by the provider
- Registration CTA clicks
- Traffic source / campaign where supported
- Device category where supported and appropriate

Suggested custom event:
- Name: `registration_cta_click`
- Parameters: `placement` (`hero`, `agenda`, `final_cta`, `sticky_mobile`), optional campaign label
- Do not send names, emails, registration answers, or other personal data.

Use UTM parameters on links shared through social channels if the analytics workflow can reliably attribute them. Keep the UTM scheme documented and consistent.

## 6. Visitor count: define the metric first

“Visitors” can mean different things:
- **Page views:** every page load or view counted by the analytics tool
- **Sessions:** visits grouped according to the provider's session rules
- **Unique visitors:** an estimate based on the provider's identifiers and time window

These values are not interchangeable. If the website has one page, page views still may include repeat visits and reloads.

### Recommended launch approach
Use analytics privately first. Add a public counter only if it serves a clear promotional purpose and the source can supply a reliable shared value.

If a visible counter is required:
1. Choose and document the exact metric and period (e.g., total page views since launch).
2. Use an analytics API or persistent counter service that supports the intended use.
3. Never expose secret API credentials in browser code.
4. Cache or rate-limit requests if needed; do not make every visitor's page render depend on an analytics API.
5. Provide a neutral fallback if the service is unavailable.
6. Do not use `localStorage` as a global visitor counter. It only stores a value in an individual browser.
7. Do not fabricate, seed, round up, or imply social proof from a value that has not been measured.
8. Do not describe CTA clicks as completed registrations.

## 7. Registration measurement

The primary path is website → Luma → completed registration.

Track outbound registration CTA clicks on the website. Use Luma's own reporting or a supported integration to measure completed registrations. If the two systems cannot be joined reliably, report them separately and do not calculate a misleading completion rate.

## 8. Privacy and consent

- Collect only metrics needed for the event website.
- Review the selected provider's privacy policy and configuration.
- Add a privacy notice and consent mechanism if required by the provider behavior or applicable law.
- Do not collect attendee personal data on the marketing site.
- Do not add third-party pixels without organizer approval.
- Ensure analytics failures never block registration navigation.

## 9. Pre-launch verification

- [ ] Correct title and description in deployed HTML
- [ ] Correct canonical domain
- [ ] Open Graph image and text verified
- [ ] Sitemap and robots rules accessible
- [ ] No unresolved placeholders in public content or structured data
- [ ] Analytics receives a test page view
- [ ] Registration CTA click event fires once per click
- [ ] No personal data is sent to analytics
- [ ] Public counter, if any, displays a real defined metric
- [ ] Luma completed-registration reporting is understood by organizers
