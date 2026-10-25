# Design System and UX Direction
## Reinvent Watch And Build — Amravati

## 1. Design objective

Create a premium, editorial, AWS-inspired community-event website that feels technically credible and student-accessible. The design should communicate the event's value quickly and lead visitors toward free registration.

Reference supplied by the organizer: https://reinvent-awslpu.vercel.app/#register

Use the reference for inspiration in visual hierarchy, bold typography, event storytelling, and community credibility. Do not copy its text, assets, dates, partner claims, or event-specific details. The Amravati event's approved identity and facts take precedence.

## 2. Visual principles

- Enterprise restraint with community warmth
- Bold, readable event typography
- Strong contrast and clear spacing
- Limited accent color
- Authentic photos over generic AI-looking stock imagery
- Purposeful motion only
- Registration CTA visible early and consistently
- Mobile-first design

## 3. Color tokens

Proposed starting palette; validate contrast during implementation.

```css
:root {
  --color-bg: #0d1117;
  --color-surface: #151b23;
  --color-surface-raised: #1c2430;
  --color-text: #f5f7fa;
  --color-text-muted: #aab4c0;
  --color-border: #303946;
  --color-accent: #ff9900;
  --color-accent-hover: #e88900;
  --color-focus: #ffd08a;
}
```

Use AWS-inspired orange as an accent, not as the background for large areas. Do not use official AWS marks or logos without confirming usage permission and applicable brand guidance.

## 4. Typography

- Use a clean sans-serif family with clear distinction between headings and body text.
- Headings: bold, compact, high contrast; scale responsively.
- Body: comfortable reading size and line height.
- Avoid excessive all-caps body copy.
- Limit the system to one primary family and, at most, one complementary display family.
- Prefer self-hosted or optimized font delivery where practical.

## 5. Layout and components

- Center content in a consistent max-width container.
- Use a consistent spacing scale and responsive grid.
- Keep paragraphs short and scan-friendly.
- Use cards only when they help compare benefits, agenda entries, organizers, or partner groups.
- Ensure CTA buttons have clear labels and sufficient touch targets.
- Use consistent border, radius, icon, and hover patterns.
- Use real logos only with permission and appropriate clear space.

## 6. Section design direction

1. **Navigation:** event wordmark/name, anchor links, primary registration button. Mobile menu must be keyboard-accessible.
2. **Hero:** oversized headline, concise value proposition, date/venue/₹0 strip, primary CTA, secondary “Explore the agenda” anchor. Use an original abstract cloud/network visual or approved event image.
3. **Event information strip:** compact details for date, time, venue, format, and free entry.
4. **Benefits:** clear cards for free entry, networking, cloud learning, and confirmed goodies/benefits.
5. **About:** short narrative explaining purpose, audience, and local community context.
6. **Agenda:** chronological timeline with times, session names, speakers, and breaks only when confirmed.
7. **Community collaboration:** partner/community logos and short descriptions; avoid implying sponsorship when it is only participation.
8. **Past events:** authentic photography, event names, dates, and verified metrics. Hide this section if evidence is unavailable.
9. **Organizers:** approved photos/names/roles and affiliations. Avoid unnecessary personal details.
10. **Venue and FAQ:** venue details, directions, eligibility, fee, registration, goodies, and certificate questions.
11. **Final registration CTA:** concise value reminder and direct Luma button.
12. **Footer:** contact and social links, community acknowledgments, disclaimers, and small developer credit.

## 7. Interaction behavior

- Smooth anchor navigation, while preserving reduced-motion preferences.
- Mobile navigation opens/closes with correct ARIA state and Escape support.
- FAQ accordion buttons expose expanded/collapsed state accessibly.
- CTA hover/focus styles are clear; keyboard focus must never be removed.
- A sticky mobile registration bar must not cover page content, browser controls, or footer actions. Account for safe-area insets.
- Avoid autoplay video, aggressive parallax, fake countdowns, and attention-grabbing animations.

## 8. Responsive behavior

Test at minimum:
- 320–360 px small phones
- 390–430 px common phones
- 768 px tablet
- 1024 px laptop/tablet landscape
- 1280–1440 px desktop

No horizontal overflow. Navigation, agenda, organizer cards, images, and CTAs must adapt without requiring precision tapping.

## 9. Accessibility requirements

- Semantic landmarks and heading order
- One clear H1
- Descriptive link text
- Text alternatives for meaningful images; empty alt for decorative imagery
- Sufficient text and UI contrast
- Keyboard-accessible controls and visible focus
- Reduced-motion support
- Avoid conveying status by color alone
- Test zoom and text resizing
- Do not put important event information only inside images

## 10. Image and brand governance

Use event photography and logos only when the organizer has rights/permission to publish them. Optimize assets and avoid stretching logos. Do not use the reference site's assets as if they belong to the Amravati event. The website must clearly represent the local organizing group and must not imply official AWS re:Invent endorsement without authorization.
