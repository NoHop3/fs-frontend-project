# Portfolio — Stefan Georgiev

Personal portfolio site. Single page: intro, selected work, about, contact.

Live at [stgdev.netlify.app](https://stgdev.netlify.app).

## Stack

Vite 7 · React 19 · TypeScript · Tailwind CSS v4. No router, no state library, no UI kit.

## Running it

```bash
cd front-end-project
npm install
npm run dev      # dev server
npm run build    # type-check + production build into dist/
npm run preview  # serve the production build
```

## Editing the content

All copy — the intro, the about text, the project list, the links — lives in
[`front-end-project/src/content/site.ts`](front-end-project/src/content/site.ts).
Adding a project means adding an object to the `projects` array; nothing else needs to change.

Colours and fonts are the CSS variables at the top of
[`front-end-project/src/index.css`](front-end-project/src/index.css), with a `:root` set for
light and a `.dark` set for dark.

## Deploying

Netlify builds from `netlify.toml` at the repo root: base `front-end-project`, publish `dist`.
