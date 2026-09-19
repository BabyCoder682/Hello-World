# Kallu Coder — Portfolio

A single-page, static portfolio. No build step, no dependencies — just
`index.html`, `style.css`, and `script.js`.

## Deploy to Vercel

**Option A — GitHub (recommended)**
1. Create a new GitHub repo and push these three files to it.
2. Go to https://vercel.com → **Add New → Project**.
3. Import the repo. Framework preset: choose **Other** (or leave it — Vercel
   auto-detects a static site since there's no build command needed).
4. Click **Deploy**. Done — you'll get a live `.vercel.app` URL.

**Option B — Vercel CLI (no GitHub needed)**
1. Install the CLI once: `npm install -g vercel`
2. From inside this folder, run: `vercel`
3. Answer the prompts (link to your Vercel account, project name, etc.)
4. Run `vercel --prod` to push it live.

## Editing content later

- Name, bio, journey stages, build log entries, and contact links are all
  plain text inside `index.html` — search for the section you want
  (`<section class="journey">`, `<section class="buildlog">`, etc.) and edit directly.
- Colors and fonts are defined as CSS variables at the top of `style.css`
  under `:root` — change them there and they apply everywhere.
- The typing animation in the hero terminal lives in `script.js` inside the
  `lines` array — edit the code snippet shown there.

## Notes

- Contact links assume the GitHub/Instagram handle `kallucoder` — double check
  those URLs match your actual usernames before deploying.
- The "Build log" section is meant to be updated as real projects happen —
  swap the "Planned" entries for real ones as you build them.
