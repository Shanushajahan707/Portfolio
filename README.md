# Personal Portfolio — Shanu Shajahan

A modern, responsive personal portfolio built with **Angular 19**, **Tailwind CSS**, and **AOS** scroll animations. It showcases my work as a MEAN Stack Developer — including live projects, technical skills, and ways to get in touch.

---

## ✨ Features

- **Hero section** with animated typing role, tech stack highlights, social links, and CV download
- **About section** with profile image, background, and quick-info cards
- **Projects showcase** with live demo/source links, technology tags, and hover interactions
- **Skills section** with animated proficiency bars, categorized stacks, and summary stats
- **Contact footer** with email CTA and social profiles
- **Sticky navbar** with smooth scrolling, active-section awareness, and a mobile menu
- **Scroll-to-top button** that appears after scrolling
- **Fully responsive** layout with a dark, cinematic theme and cyan accents
- **Accessibility-minded** markup with ARIA labels, focus rings, and reduced-motion-friendly transitions

---

## 🛠️ Tech Stack

| Category | Technologies |
| --- | --- |
| Framework | Angular 19 (NgModule architecture) |
| Language | TypeScript, HTML, CSS |
| Styling | Tailwind CSS 4, PostCSS, Autoprefixer |
| Animations | AOS (Animate On Scroll) |
| Icons | Font Awesome 6 |
| Fonts | Google Fonts — Delius Unicase |
| Testing | Karma + Jasmine |

---

## 📁 Project Structure

```text
portfolio/
├── public/                     # Static assets (images, CV, favicon)
│   └── Resume.pdf              # CV served by the hero section
├── src/
│   ├── app/
│   │   ├── component/
│   │   │   ├── navbar/         # Sticky navigation + mobile menu
│   │   │   ├── herosession/    # Hero / landing section
│   │   │   ├── about/          # About me section
│   │   │   ├── myprojects/     # Project cards (data lives in .ts)
│   │   │   ├── skills/         # Skill categories + proficiency bars
│   │   │   └── footer/         # Contact CTA + social links
│   │   ├── app.component.*     # Root shell + scroll-to-top button
│   │   ├── app.module.ts       # App module
│   │   └── app-routing.module.ts
│   ├── index.html              # HTML shell, fonts, AOS setup
│   ├── main.ts                 # Bootstrap entry point
│   └── styles.css              # Global styles + Tailwind import
├── angular.json
├── tailwind.config.ts
└── package.json
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** 18.19+ or 20.11+
- **npm** 9+
- Angular CLI 19 (optional, but recommended)

### Installation

```bash
git clone https://github.com/Shanushajahan707/portfolio.git
cd portfolio
npm install
```

### Development server

```bash
npm start
# or
ng serve
```

Open [http://localhost:4200](http://localhost:4200). The app reloads automatically when source files change.

---

## 🏗️ Building

```bash
npm run build
# or
ng build
```

The production build is written to `dist/portfolio/` with output hashing and optimization enabled.

To preview the production build locally:

```bash
npx http-server dist/portfolio/browser
```

---

## 🧪 Running Tests

```bash
npm test
# or
ng test
```

Unit tests run with Karma + Jasmine in Chrome.

---

## ✏️ Customization

Most content is data-driven and easy to update:

- **Projects** — edit the `projects` array in `src/app/component/myprojects/myprojects.component.ts`
- **Skills** — edit the `skills` array in `src/app/component/skills/skills.component.ts`
- **Hero text, roles, and social links** — `src/app/component/herosession/herosession.component.html`
- **About copy and quick info** — `src/app/component/about/about.component.html`
- **Contact details and socials** — `src/app/component/footer/footer.component.html` and `src/app/component/navbar/navbar.component.html`
- **CV download** — replace `public/Resume.pdf` and update `pdflocation` in `src/app/component/herosession/herosession.component.ts`
- **Theme colors** — `tailwind.config.ts` and the utility classes in the component templates
- **Fonts** — `src/index.html`

---

## ☁️ Deployment

The build output is a static site and can be hosted anywhere. Common options:

- **Vercel** — framework preset: Angular, output directory: `dist/portfolio/browser`
- **Netlify** — build command: `npm run build`, publish directory: `dist/portfolio/browser`
- **GitHub Pages / Render / Cloudflare Pages** — serve the same build output

Make sure the host rewrites unknown routes to `index.html` if you add client-side routing.

---

## 📬 Contact

- **Email:** [shanushajahan707@gmail.com](mailto:shanushajahan707@gmail.com)
- **GitHub:** [@Shanushajahan707](https://github.com/Shanushajahan707)
- **LinkedIn:** [shanushajahan](https://www.linkedin.com/in/shanushajahan/)

---

## 📄 License

This project is a personal portfolio and is shared for reference and inspiration. Please don't republish the personal content, images, or CV as your own.
