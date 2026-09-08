# Reintjes Lawn Care, Website

A multi-page marketing site for Reintjes Lawn Care (Est. 2024, Mission Hills,
KS), built with plain HTML, CSS, and JavaScript. No build step, no
framework, no dependencies beyond Google Fonts.

## Why multi-page

The original version of this site was a single scrolling landing page.
It's now a real six-page site, one URL per topic, because that's how actual
local-service sites are structured and because it lets each page target
its own search intent (a "services" page ranks for service+pricing
searches, a "service areas" page ranks for city-specific searches, etc.)
instead of cramming everything under one URL.

```
/                   Home: overview, services preview, areas preview, gallery preview, reviews
/services/          All 9 services with real pricing, FAQ (with FAQPage schema)
/service-areas/     Dedicated local-SEO page for each of the 5 communities served
/gallery/           All 9 real job photos
/about/             Company story, how the process works
/contact/           Free quote form and direct contact info
```

Each page directory has its own `index.html`, so URLs are clean
(`/services/`, not `/services.html`) and every page carries its own
`<title>`, meta description, canonical tag, Open Graph tags, and
BreadcrumbList structured data.

## SEO / GEO

- `robots.txt` allows all crawlers, explicitly including AI crawlers
  (GPTBot, ChatGPT-User, PerplexityBot, ClaudeBot, Google-Extended), and
  points to the sitemap.
- `sitemap.xml` indexes all 6 pages.
- `llms.txt` gives AI assistants a clean, structured summary of the
  business, services, real pricing, and page map, so they can answer
  questions about Reintjes Lawn Care accurately instead of guessing.
- JSON-LD structured data:
  - `LandscapingBusiness` (LocalBusiness) on the home page, with real
    address locality, phone, founder, service area, and an `Offer` catalog
    covering all 9 services (with real prices where confirmed)
  - `Review` nodes on the home page for the 3 real reviews, with no
    `reviewRating` and no `aggregateRating`, since none of the sources
    (a text message, two Instagram comments) include a star rating.
    Fabricating one would misrepresent the business.
  - `BreadcrumbList` on every interior page
  - `FAQPage` on `/services/`, matching the visible FAQ accordion

## Structure

```
index.html, services/, service-areas/, gallery/, about/, contact/   Pages (see above)
css/style.css     Shared design system (navy/blue/cream, custom SVG icon set)
js/script.js      Mobile nav toggle, FAQ accordion, demo contact form handling
assets/images/    Real brand logo and real job photos (no stock photography)
robots.txt, sitemap.xml, llms.txt   SEO/GEO indexing files
```

## Running locally

Serve the project root (relative asset paths are root-relative, so this
needs to run from the repo root, not from inside a page's folder):

```
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Real business info used on this site

Sourced from the business's real Nextdoor page
(nextdoor.com/pages/reintjes-lawn-care-and-land-clearing), Instagram profile
(instagram.com/reintjeslawncare), and direct confirmation from the owner:

- Owner: George Reintjes
- Business name: "Reintjes Lawn Care" (George's preference; Nextdoor's
  longer listing name is being updated to match)
- Phone: (970) 390-5906
- Service area, confirmed by George: Mission Hills, Prairie Village, Leawood,
  Sunset Hill, and Waldo
- Hours, confirmed by George: 9 AM to 6 PM
- Real starting pricing, confirmed by George: mowing $35 base, mulching
  $1.30/sq ft base, leaf cleanup $60/man hour base, snow removal $35 base.
  Services without a confirmed base rate show "Free quote" instead of an
  invented number.
- Three real completed-job reviews, quoted and attributed exactly as given:
  a text message from David Bitters, and two Instagram comments
  (@canyon_kiernan, @evan.moreland_). No star ratings, since none of the
  sources have one.

## Notes

- The contact form is a front-end demo only; it does not send data anywhere.
- The canonical/OG/schema URLs use `https://www.reintjeslawncare.org/`, the
  real, purchased domain for this business.
- The "Fully Insured" claim was removed entirely (not just flagged) since no
  source confirms it. Don't re-add it without the owner explicitly
  confirming coverage.
- One additional photo (an overgrown, unmowed yard, likely a land-clearing
  job) was intentionally left out of the gallery: it has no matching
  "after" photo in the current set, so it wasn't paired into a false
  before/after claim. Add it back once a matching after-photo exists.
