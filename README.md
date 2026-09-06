# Reintjes Lawn Care — Demo Site

A single-page marketing site demo for Reintjes Lawn Care (Est. 2024), built with
plain HTML, CSS, and JavaScript — no build step required.

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
- No real business details for Reintjes Lawn Care could be found online (no
  existing website, listing, or social presence turned up in search), so
  every unverified fact was replaced with an amber, bracketed placeholder
  (e.g. `[Add phone number]`) instead of an invented value. Search
  `placeholder-text` in `index.html` to find every spot that needs real
  info before this goes live:
  - Phone number, email, service area, and business hours (topbar + contact section)
  - The three hero trust badges (Free Estimates / Fully Insured / Satisfaction
    Guaranteed) — confirm each is actually true before re-enabling; "Fully
    Insured" in particular is a factual claim about insurance coverage and
    should only go live if verified.
  - The three blank stat-strip tiles (real numbers, e.g. years in business,
    lawns serviced, response time)
  - The three review cards under "Customer Love" are layout placeholders,
    not real customer quotes — swap in actual reviews once you have them.
- The gallery uses real job photos supplied for this project. One additional
  photo (an overgrown, unmowed yard) was intentionally left out of the
  gallery: it has no matching "after" photo in the current set, so it
  wasn't paired into a before/after claim. Add it back once a matching
  after-photo of the same property is available.
