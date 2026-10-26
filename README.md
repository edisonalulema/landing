# algopop.app

Marketing site for Algopop, built with [Astro](https://astro.build) as a fully static site and hosted on GitHub Pages (`public/CNAME` → algopop.app).

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # type-check + static build into dist/
npm run deploy   # build and push dist/ to the gh-pages branch
```

Most copy (services, case studies, process, FAQ, contact details) lives in `src/data/site.ts`.
The contact form posts to the existing Brevo form (`brevoAction` in that file).
