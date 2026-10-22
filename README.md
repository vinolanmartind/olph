# Our Lady of Perpetual Help - Church Website (Astro, static)

Same design as before: header + menu + footer written ONCE, Tamil/English, light/dark,
CSS-only mobile side bar and home slider. The result is plain static HTML (free hosting).

## Run on your PC (one time: install Node.js 18.20+ or 20+ or 22 from nodejs.org)
```
npm install        # first time only
npm run dev        # live preview at http://localhost:4321  (auto refresh)
npm run build      # makes the finished website in the  dist  folder
npm run preview    # test the finished dist folder
```

## Folder map
```
src/
  layouts/Layout.astro     <head>, CSS links, header + footer on every page
  components/Header.astro  menu links (edit the `menu` list at the top)  <- header, once
  components/Footer.astro  footer (address, phone, policy links)         <- footer, once
  pages/                   one file = one page (folder style URLs, no .html)
    index.astro                      /
    about.astro                      /about/
    church-timings/index.astro       /church-timings/
    church-timings/mass-timings.astro      /church-timings/mass-timings/
    church-timings/special-timings.astro   /church-timings/special-timings/
    youth/index.astro, events.astro, join.astro   /youth/ /youth/events/ /youth/join/
    events.astro, gallery.astro, contact.astro
public/asset/
  css/   base.css, header.css, footer.css + one css per page
  js/    main.js  (20 lines: remembers language + theme)
  images/ logo.png, slide1.jpg ... slide5.jpg  (slider: 1920 x 800 px)
```

## Everyday edits
- Page text: open the page in `src/pages/`, change the text between the `<main class="gospel">` tags.
  English = visible text, Tamil = `data-ta="..."` on the same tag.
- Menu link: edit the `menu` list in `src/components/Header.astro` (active page + open sub menu are automatic).
- Footer / phone / address: `src/components/Footer.astro`.
- New page: copy an existing page file in `src/pages/`, set `css="..."` (add `public/asset/css/yourpage.css`).
- Colours (light + dark): top of `public/asset/css/base.css`. Logo corner: `--logo-radius`.
- If a browser shows an old CSS/JS: change `const v = '11'` in `src/layouts/Layout.astro`.

## Free hosting
**Cloudflare Pages** (recommended): push this folder to GitHub, then Cloudflare Pages -> Connect to Git ->
Build command `npm run build`, Output directory `dist`. Every push updates the site.
**GitHub Pages / Netlify**: same idea (build command `npm run build`, publish folder `dist`).
Or run `npm run build` and upload the `dist` folder by hand (Netlify drag-and-drop, any static host).

## Still to replace (placeholders)
Phone numbers + email in `src/pages/contact.astro` and the footer phone, slider images, the 4 policy pages
(`privacy-policy`, `disclaimer-policy`, `terms`, `legal-policy`) that the footer links to.
