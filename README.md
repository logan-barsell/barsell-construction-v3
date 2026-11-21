# Barsell Construction

Static marketing site for Barsell Construction Inc., built with Next.js 15,
React 19, and Tailwind CSS 3.

## Development

```bash
npm install
npm run dev
```

Create the production static export with:

```bash
npm run build
```

The exported site is written to `out/`.

## Site structure

- `/` — homepage and service overview
- `/services` — all residential services
- `/services/[slug]` — individual service details
- `/projects` — completed-project index
- `/projects/[slug]` — project galleries
- `/approach` — company principles and mission
- `/contact` — direct contact details and social profiles

`/gallery` remains available as a compatibility route and uses `/projects` as
its canonical URL.

## Content architecture

- `src/data/site.js` contains shared company, contact, social, and navigation
  details.
- `src/data/services.js` contains service-page content.
- `src/data/projects.js` defines project metadata and connects each project to
  its gallery images.
- `src/data/principles.js` contains the shared approach and process content.
- `src/data/missionStatements.js` preserves the original mission language.

The site uses project photography only in the Projects section. Other pages use
the existing orange, black, and white brand palette with code-native icons and
geometric CSS details.
