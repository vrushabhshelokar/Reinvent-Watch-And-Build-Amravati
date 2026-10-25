# Product Requirements Document (PRD)
## Reinvent Watch And Build — Amravati

**Status:** Draft baseline; event-specific placeholders require organizer confirmation  
**Product type:** Promotional event landing page  
**Primary conversion:** Completed event registration on Luma

## 1. Product summary

Build a professional, responsive website promoting Reinvent Watch And Build — Amravati, a student-focused local technology event inspired by the broad community and technical spirit of AWS re:Invent. The site explains the event, communicates verified attendee benefits, establishes organizer credibility, and directs visitors to the official Luma registration page.

The site is promotional, not an event-management application. Luma remains the registration system of record.

## 2. Goals

### Primary goal
Increase completed registrations by making the event value, date, venue, free entry status, and registration path immediately clear.

### Secondary goals
- Establish trust through real organizers, participating communities, and authentic past-event evidence.
- Explain the event agenda and attendee benefits without unsupported claims.
- Provide a strong mobile experience for traffic from WhatsApp, Instagram, and LinkedIn.
- Measure website visits and registration-link engagement.
- Make event content easy for organizers to update.

## 3. Target audience

Primary audience: college students, including students curious about cloud computing, AWS, software development, and developer communities.

Assumptions to validate:
- Students may be new to AWS and should not be expected to have prior cloud experience.
- Many visitors will arrive on mobile devices from social shares.
- Visitors need practical details and reasons to attend before committing to registration.

## 4. Value proposition

A local student-focused gathering to explore cloud technology, learn from the confirmed program, and connect with fellow builders in Amravati.

Suggested tagline: **Watch. Learn. Build. Connect.**

Do not claim hands-on labs, workshops, speakers, certificates, cloud credits, guaranteed merchandise, or other perks unless organizers confirm that they are part of this event.

## 5. Success metrics

Measure:
- Unique visitors, using the chosen analytics provider's documented definition
- Page views / sessions
- Registration CTA clicks, segmented by CTA placement and campaign source where practical
- Completed registrations, sourced from Luma reporting where available
- CTA click-through rate = registration CTA clicks ÷ relevant sessions or visitors, with the denominator documented
- Registration completion rate only if Luma data supports a reliable comparison with outbound clicks

A click to Luma is not a completed registration. Do not present visits as people or registrations.

## 6. Scope

### In scope
- Single-page responsive marketing site
- 12-section hierarchy defined in `Content.md`
- Luma outbound registration links
- Event details and agenda content driven from typed data/configuration
- Organizer, community partner, and past-event content
- FAQ and venue guidance
- SEO metadata, social-sharing metadata, sitemap, and robots rules
- Visitor analytics and CTA-click tracking
- Accessibility, performance, and cross-browser checks
- Vercel deployment

### Out of scope for initial release
- Custom registration form or ticketing
- User accounts, authentication, or database
- Admin CMS
- Payment processing
- Custom backend solely to count visitors
- Attendee directory or private attendee data
- Unverified live attendee counts or scarcity messages

## 7. Functional requirements

**FR-01 — Event identity:** Show the approved event name and Amravati location clearly.

**FR-02 — Event details:** Show the confirmed date, time, venue, and entry fee. Unconfirmed values remain placeholders in development and block public launch.

**FR-03 — Registration:** Every registration CTA must point to the verified Luma URL. Open external registration links accessibly and consistently.

**FR-04 — Benefits:** Display free entry, networking, cloud learning, and only those additional benefits that are confirmed. AWS goodies must be described as guaranteed or subject to availability according to the organizer's actual commitment.

**FR-05 — Agenda:** Render confirmed agenda entries in chronological order. If agenda details are not ready, do not publish invented sessions or speakers.

**FR-06 — Community credibility:** Display only approved community names, logos, organizer names, roles, and affiliations.

**FR-07 — Past events:** Use genuine photos and verified facts. Hide the section if authentic content is unavailable.

**FR-08 — FAQ and venue:** Answer practical attendee questions and link to a verified map/directions destination when available.

**FR-09 — Responsive navigation:** Provide accessible desktop navigation and a mobile menu; support a mobile registration CTA if it does not obscure content.

**FR-10 — Analytics:** Record page views and registration CTA clicks without collecting unnecessary personal data.

**FR-11 — Visitor metric:** If a visible counter is used, label the metric precisely (e.g., “website visits” or “unique visitors”), document its source, and show real values only.

**FR-12 — SEO:** Provide unique title and description, canonical URL, social metadata, sitemap, robots rules, semantic content, and a production domain.

## 8. Non-functional requirements

- Mobile-first, responsive layouts
- Accessible keyboard operation and visible focus
- Semantic HTML and meaningful image alternative text
- Strong contrast and reduced-motion support
- Optimized images, fonts, and JavaScript
- No broken links or console errors in production
- No fabricated event claims, metrics, or urgency
- Clear distinction between local organizers and official AWS entities

## 9. Launch blockers

The following must be confirmed before launch:
- `[CONFIRM: EVENT_DATE]`
- `[CONFIRM: EVENT_START_TIME and TIME_ZONE]`
- `[CONFIRM: VENUE_NAME and FULL_ADDRESS]`
- `[CONFIRM: LUMA_REGISTRATION_URL]`
- `[CONFIRM: registration open/closed status]`
- `[CONFIRM: final agenda and speaker details, or remove unconfirmed entries]`
- `[CONFIRM: organizers, roles, partner communities, logo permissions]`
- `[CONFIRM: whether AWS goodies and certificates are guaranteed and under what conditions]`
- `[CONFIRM: approved event branding and any AWS affiliation/endorsement language]`
- `[CONFIRM: production domain]`

## 10. Acceptance criteria

The product is acceptable when:
1. All 12 sections are implemented or intentionally omitted with documented rationale where content is unavailable.
2. All visible event details are verified and no placeholders remain in the public build.
3. Every registration CTA opens the correct Luma page.
4. The mobile experience is usable at common phone widths.
5. Analytics can distinguish page visits from CTA clicks.
6. No visitor count is fabricated.
7. SEO and social previews are verified on the production domain.
8. Accessibility, performance, and release checks in `Testing.md` pass.
