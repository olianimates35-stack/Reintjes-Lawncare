# Reintjes Lawn Care, Demo Site

A single-page marketing site demo for Reintjes Lawn Care (Est. 2024, Mission
Hills, KS), built with plain HTML, CSS, and JavaScript. No build step
required.

## Real business info used on this site

Sourced from the business's real Nextdoor page
(nextdoor.com/pages/reintjes-lawn-care-and-land-clearing), Instagram profile
(instagram.com/reintjeslawncare), and direct confirmation from the owner:

- Owner: George Reintjes
- Business name: "Reintjes Lawn Care" (George is updating the Nextdoor page,
  currently listed as "Reintjes Lawn Care and Land Clearing," to match)
- Phone: (970) 390-5906
- Service area, confirmed by George: Mission Hills, Prairie Village, Leawood,
  Sunset Hill, and Waldo
- Hours, confirmed by George: 9 AM to 6 PM
- Confirmed services: mowing, landscaping, hardscaping (from the Instagram
  bio), plus land clearing, stump removal, bush/shrub trimming, and
  grading/raised-bed work (from real Nextdoor service requests), plus
  mulching, leaf cleanup, and snow removal (confirmed by George along with
  real pricing, below)
- Real starting pricing, confirmed by George: mowing $35 base, mulching
  $1.30/sq ft base, leaf cleanup $60/man hour base, snow removal $35 base.
  These are shown on the relevant service cards; services without a
  confirmed base rate show "Free quote" instead of an invented number.
- Free quotes via DM confirmed by the Instagram bio
- The Nextdoor "recommendations" are people asking for quotes, not feedback
  on finished work, so they were not used as testimonials. Three real
  completed-job reviews are used in the "Customer Love" section instead,
  quoted and attributed exactly as given:
  - A text message from David Bitters (full name confirmed by George)
  - Two Instagram comments, from @canyon_kiernan and @evan.moreland_
  - No star ratings were added to any of these since none of the sources
    carry one
  - George mentioned a second real text-message review but doesn't have the
    customer's first name yet. It is not on the site until that's confirmed;
    do not add a placeholder name for it.

## Structure

```
index.html        Site markup (hero, services, about, gallery, reviews, contact)
css/style.css     Styling (navy/blue/white theme matched to the brand logo)
js/script.js      Mobile nav toggle + demo contact form handling
assets/images/    Brand logo and lawn photography
```

## Running locally

Open `index.html` directly in a browser, or serve the folder:

```
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Notes

- The contact form is a front-end demo only; it does not send data anywhere.
- The only fact still marked with an amber, bracketed placeholder (search
  `placeholder-text` in `index.html`) is the "Fully Insured" hero badge.
  No source confirms this yet; only enable it once George actually verifies
  it, since it's a factual claim customers may rely on.
- The gallery uses real job photos supplied for this project. One additional
  photo (an overgrown, unmowed yard, likely a land-clearing job, matching
  their real service line) was intentionally left out of the gallery: it has
  no matching "after" photo in the current set, so it wasn't paired into a
  before/after claim. Add it back once a matching after-photo of the same
  property is available.
