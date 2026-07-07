# Akshata Bagewadi — Portfolio

A premium, pastel-glassmorphism portfolio built with React (Vite), Framer Motion, AOS, React Icons, Typed.js, and EmailJS.

## Getting Started

```bash
npm install
npm run dev
```

Then open the URL Vite prints (usually `http://localhost:5173`).

To build for production:

```bash
npm run build
npm run preview
```

## Project Structure

```
akshata-portfolio/
├── public/
│   ├── resume.pdf              # Generated resume — replace with your latest version anytime
│   ├── profile-placeholder.svg # Placeholder avatar — replace with your real photo
│   ├── projects/                # Placeholder project thumbnails — replace with real screenshots
│   └── favicon.svg
├── src/
│   ├── data/
│   │   └── portfolioData.js    # ALL site content lives here — edit this file first
│   ├── components/             # One folder per section, each with a .jsx and matching .css
│   ├── App.jsx                 # Composes every section in order
│   ├── main.jsx
│   ├── index.css               # Theme tokens (colors, fonts, glass card styles) + globals
│   └── App.css
├── index.html
├── package.json
└── vite.config.js
```

## Things to personalize before you deploy

1. **Profile photo** — replace `public/profile-placeholder.svg` with a real photo (e.g. `profile.jpg`), and update `profileImage` in `src/data/portfolioData.js` to point to it.
2. **Project screenshots** — replace the SVGs in `public/projects/` with real screenshots of Book My Ticket, the Crop Recommendation System, and the multiplier design work.
3. **Project links** — `github` and `demo` fields in `portfolioData.js` currently point to your GitHub profile / `#`. Update each to the specific repo and live demo URL once available.
4. **Certifications** — the `certifications` array in `portfolioData.js` has one placeholder entry. Add your real certifications (title, issuer, date, credential URL) and remove the placeholder.
5. **EmailJS (contact form)** — create a free account at [emailjs.com](https://www.emailjs.com/), set up an email service and template, then replace `serviceId`, `templateId`, and `publicKey` in the `emailjsConfig` object in `portfolioData.js`. Until you do, the form will show a friendly error instead of sending.
6. **Resume** — `public/resume.pdf` was generated from your resume content. Swap it for your own file anytime (keep the filename `resume.pdf`, or update `resumeFile` in `portfolioData.js`).

## Deploying

This is a static Vite app — after `npm run build`, the `dist/` folder can be deployed to Vercel, Netlify, GitHub Pages, or any static host.
