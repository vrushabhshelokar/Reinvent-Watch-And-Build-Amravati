# Test Plan and Acceptance Checklist
## Reinvent Watch And Build — Amravati

## 1. Test objectives

Verify that the website accurately represents the event, works across devices, provides an accessible registration path, loads efficiently, and measures engagement without misleading visitors or exposing personal data.

## 2. Functional tests

### Navigation
- [ ] Desktop links scroll to the correct section.
- [ ] Mobile menu opens and closes correctly.
- [ ] Menu supports keyboard navigation and Escape where appropriate.
- [ ] Anchor navigation does not hide headings behind a sticky header.
- [ ] Current page and focus states are understandable.

### Event content
- [ ] Event name is consistent throughout the page.
- [ ] Date, time, time zone, venue, address, format, and entry fee match organizer-approved information.
- [ ] No unresolved `[CONFIRM: ...]` placeholder is present in the production build.
- [ ] Agenda is chronological and contains no invented sessions or speakers.
- [ ] Benefits match actual commitments.
- [ ] Goodies and certificates are accurately described.
- [ ] Organizer roles and partner designations are correct.
- [ ] Past-event photos and claims are authentic and approved.

### Registration
- [ ] Every CTA points to the same verified Luma event URL.
- [ ] URL uses HTTPS.
- [ ] Link opens correctly on desktop and mobile.
- [ ] Link labels communicate that registration occurs on Luma.
- [ ] If opened in a new tab, external-link security attributes are present.
- [ ] CTA remains usable when analytics is blocked or unavailable.
- [ ] Registration status is accurate.
- [ ] No on-site form falsely suggests registration is complete.

### Visitor analytics
- [ ] Page-view event fires as expected.
- [ ] Registration click event fires once per intentional click.
- [ ] CTA placement parameter is correct.
- [ ] No names, emails, form answers, or sensitive values are transmitted.
- [ ] Analytics outage does not break the page.
- [ ] Public visitor counter, if present, reflects its documented metric.
- [ ] Page views, unique visitors, CTA clicks, and completed registrations are not conflated.

## 3. Responsive tests

Test at minimum 320 px, 360 px, 390 px, 430 px, 768 px, 1024 px, 1280 px, and 1440 px widths.

- [ ] No horizontal scrolling caused by layout overflow.
- [ ] H1 and supporting text wrap cleanly.
- [ ] Buttons remain visible and easy to tap.
- [ ] Sticky mobile CTA does not obscure content or footer controls.
- [ ] Safe-area spacing is respected on supported mobile devices.
- [ ] Agenda and cards stack appropriately.
- [ ] Images retain intended aspect ratio.
- [ ] Navigation is usable in both portrait and landscape.

## 4. Accessibility tests

- [ ] Semantic landmarks and logical heading order.
- [ ] One primary H1.
- [ ] All interactive elements work with keyboard only.
- [ ] Visible focus indicators.
- [ ] Text and controls meet appropriate contrast requirements.
- [ ] Meaningful images have useful alt text; decorative images do not add noise.
- [ ] FAQ controls expose expanded state.
- [ ] Reduced-motion preference is respected.
- [ ] Page works with zoom and text resizing.
- [ ] Information is not conveyed only through color or images.

Use automated checks as a supplement, not a replacement, for manual keyboard and screen-reader review.

## 5. SEO tests

- [ ] Correct page title and description.
- [ ] Canonical URL points to production domain.
- [ ] Open Graph title, description, URL, and image are correct.
- [ ] Sitemap is accessible and includes intended canonical pages.
- [ ] Robots rules allow the production page to be crawled.
- [ ] Preview environments are not accidentally indexed.
- [ ] No placeholder data appears in metadata or structured data.
- [ ] Images and links have meaningful names.
- [ ] Production page renders meaningful content without requiring client interaction.
- [ ] Structured event data, if used, matches visible confirmed content.

## 6. Performance tests

- [ ] Images are appropriately sized and compressed.
- [ ] Fonts and scripts are not unnecessarily blocking rendering.
- [ ] No large animation dependency without a clear purpose.
- [ ] No layout shifts caused by missing dimensions.
- [ ] No avoidable hydration warnings or browser console errors.
- [ ] Test Core Web Vitals in a production-like environment.
- [ ] Verify analytics scripts do not materially delay the page or registration navigation.

## 7. Cross-browser checks

At minimum, test current stable versions of:
- Chrome desktop and Android
- Safari on iOS where available
- Firefox desktop
- Edge desktop

Check anchor navigation, fonts, sticky elements, external Luma navigation, and mobile menu behavior.

## 8. Security and privacy checks

- [ ] No secret keys are exposed in client bundles.
- [ ] External links and embedded resources are reviewed.
- [ ] Analytics settings match the privacy notice and consent approach.
- [ ] No attendee personal data is collected by the landing page.
- [ ] No unapproved third-party tracking scripts are present.
- [ ] Dependencies and lockfile are committed and reviewed.

## 9. Release acceptance

Release only when:
- All P0 tests pass.
- All launch-critical placeholders have been resolved.
- Organizer has approved event claims, imagery, logos, and affiliation wording.
- Luma registration is verified.
- Analytics test events have been observed.
- Production build succeeds.
- Known defects and accepted exceptions are documented.
