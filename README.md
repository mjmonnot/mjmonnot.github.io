# mjmonnot.github.io

This repository contains the source for my personal site, hosted with GitHub Pages and built with the Jekyll **minima** theme.

The site highlights my work as an I-O psychologist and organization development consultant, including:

- A downloadable CV
- Summaries of selected peer-reviewed publications
- Thematic overviews of leadership, well-being, and organizational effectiveness
- Media and popular writing based on my research

---

## Structure

- `index.md` – Home page
- `cv.md` – CV page (links to `assets/pdfs/cv.pdf`)
- `publications.md` – Lists publications from `_data/publications.yml`
- `press.md` – Media & popular writing (Scientific American, THINK.IAFOR, Greater Good, European Financial Review)
- `themes/` – Thematic overview pages (e.g., leadership & well-being)
- `publications/` – Individual publication summaries (one Markdown file per article)
- `_data/publications.yml` – Metadata for each featured publication (title, year, journal, summary URL)
- `assets/pdfs/` – CV and (optionally) article PDFs

The site uses the `minima` theme, configured in `_config.yml`, which also defines navigation and social links.

---

## Editing or Adding Publications

1. **Add or update metadata**

   Edit `_data/publications.yml` and add a new entry:

   ```yaml
   - key: uniquekey2025_example
     year: 2025
     title: "Your Article Title"
     authors: "Last, F. M., & Coauthor, A. B."
     journal: "Journal Name"
     summary_url: "/publications/2025-your-article-slug.html"
