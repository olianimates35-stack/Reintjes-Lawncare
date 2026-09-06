# Reintjes Lawn Care, Demo Site

A single-page marketing site demo for Reintjes Lawn Care and Land Clearing
(Est. 2024, Mission Hills, KS), built with plain HTML, CSS, and JavaScript.
No build step required.

## Real business info used on this site

Sourced from the business's real Nextdoor page
(nextdoor.com/pages/reintjes-lawn-care-and-land-clearing) and Instagram
profile (instagram.com/reintjeslawncare), both provided by the client:

- Owner: George Reintjes
- Phone: (970) 390-5906
- Location: Mission Hills, KS, serving the Kansas City metro
  (requesters seen from KC MO, Overland Park, and Leawood)
- Confirmed services: mowing, landscaping, hardscaping (from the Instagram
  bio), plus land clearing, stump removal, bush/shrub trimming, and
  grading/raised-bed work (from real Nextdoor service requests)
- Free quotes via DM confirmed by the Instagram bio
- The Nextdoor "recommendations" are people asking for quotes, not feedback
  on finished work, so they were not used as testimonials. Two real
  completed-job reviews (Instagram comments from @canyon_kiernan and
  @evan.moreland_) are used in the "Customer Love" section instead, quoted
  and attributed exactly as posted. No star ratings were added since
  Instagram comments don't carry one.

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
- Everything still marked with an amber, bracketed placeholder (search
  `placeholder-text` in `index.html`) is genuinely unconfirmed, not
  something to guess at:
  - **"Fully Insured" hero badge**: no source confirms this; only enable it
    once actually verified, since it's a factual claim customers may rely on.
  - **Business hours**: not listed on Nextdoor or Instagram; add the real
    hours once known.
- The gallery uses real job photos supplied for this project. One additional
  photo (an overgrown, unmowed yard, likely a land-clearing job, matching
  their real service line) was intentionally left out of the gallery: it has
  no matching "after" photo in the current set, so it wasn't paired into a
  before/after claim. Add it back once a matching after-photo of the same
  property is available.
