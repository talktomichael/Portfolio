# Michael Ebong: portfolio website

People Operations, HR Systems & Organisational Effectiveness.
React, TypeScript and Vite. No backend: the contact form posts to Formspree.

## Run it locally

```bash
npm install
npm run dev        # http://localhost:5173
```

## Publish it (Vercel, recommended)

1. Put this folder in a GitHub repository.
2. On vercel.com, choose **Add New Project** and import the repository. Vercel detects Vite automatically.
3. Under **Environment Variables**, add `VITE_SITE_URL` with your final address, for example `https://michaelebong.com` (no trailing slash). This switches on the sitemap, canonical URLs and the social share image.
4. Deploy. `vercel.json` already sends every page address to the app, so links such as `/case-studies/custom-hris` work when opened directly.

Netlify works too: build command `npm run build`, publish directory `dist`. The `public/_redirects` file handles page addresses.

### After the first deploy

- In Formspree, open the form's settings and add your domain under **Restrict to domain**.
- Send yourself a test message from the Contact page and confirm it arrives.
- Link the word "Portfolio" in your CV header to the new address, then replace the CV (below).

## Everyday updates

| To change | Edit |
| --- | --- |
| Email, phone, LinkedIn, Formspree endpoint, hero statements | `src/content/site.ts` |
| The CV | Replace `public/Michael-Ebong-CV.pdf` with a file of the same name |
| Roles and career story | `src/content/experience.ts` |
| Case studies (add one by copying an existing entry) | `src/content/caseStudies.ts` |
| Principles, framework, learning, technical skills | `src/content/practice.ts` |
| Demonstrations and their synthetic data | `src/content/systems.ts` and `src/components/demos/Demos.tsx` |
| Colours, fonts, spacing, radius, motion | `src/styles/tokens.css` |
| Photo | `public/michael-ebong-560.*` and `public/michael-ebong-900.*` |

Content is kept separate from layout, so most updates touch only the `src/content` files. Redeploying is automatic on Vercel after you push a change.

## How it is built

- `src/lib/router.tsx`: a small router. Clean paths on the live site; `VITE_ROUTER=hash` produces a version that runs on hosts without URL rewriting (used for the Claude preview).
- `src/components/Typewriter.tsx`: the hero animation. It reserves the height of the tallest statement so nothing jumps, pauses when the tab is hidden, hides the moving text from screen readers (they hear one static sentence), and shows a still line when the visitor prefers reduced motion.
- `src/components/SystemMap.tsx`: the people system diagram that follows the typewriter; each stage links to its case study.
- `src/components/ContactForm.tsx`: client-side validation, Formspree submission, loading, success and error states, and a hidden spam trap. Formspree adds its own server-side validation and spam filtering.
- Fonts are self-hosted (Newsreader and IBM Plex Sans), so no third-party font requests.
- `scripts/seo.mjs` writes `robots.txt` and, when `VITE_SITE_URL` is set, `sitemap.xml`.

Tested at 320, 375, 390, 768, 1280 and 1440px wide.

All demonstrations use the fictional Harbourline Group and synthetic data.
