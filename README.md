# 3D Portfolio — Ahmad Ebrahim

> **Note:** This is my old portfolio. It is kept here as a legacy project and is no longer actively maintained.

An interactive, single-page 3D developer portfolio built with React, Three.js (React Three Fiber), GSAP and Tailwind CSS.

## Status

| Area | State |
| --- | --- |
| Sections (Hero, About, Projects, Clients, Experience, Contact, Footer) | Implemented |
| 3D scenes (Hacker room, rings, cube, target, rocket, React logo, demo computer) | Implemented |
| Contact form (EmailJS) | Implemented |
| Content (projects, reviews, work history) | Maintained in `src/constants/index.js` |
| Tests | None |

## Tech Stack

- **Framework:** React 18, Vite 5
- **3D / animation:** three, @react-three/fiber, @react-three/drei, maath, GSAP (@gsap/react), leva, react-globe.gl
- **Styling:** Tailwind CSS 3, PostCSS
- **Utilities:** @emailjs/browser, react-responsive
- **Tooling:** ESLint 9

## Getting Started

```bash
npm install
npm run dev       # start dev server
npm run build     # production build to dist/
npm run preview   # preview the production build
npm run lint      # run ESLint
```

## Project Structure

```
public/
  assets/ models/ textures/ videos/   # static images, 3D models, textures, demo videos
src/
  components/    # 3D models and UI pieces (HackerRoom, Rocket, Cube, Button, ...)
  sections/      # Page sections (Hero, About, Projects, Clients, Experience, Contact, ...)
  constants/     # Nav links, projects, reviews, work experience data
  App.jsx, main.jsx, index.css
```

## Customizing Content

Edit `src/constants/index.js` to update navigation links, projects, client reviews and work experience. The contact form sends mail through EmailJS; configure your service in `src/sections/Contact.jsx`.

## Maintaining This README

Update the **Status** table and relevant sections whenever a commit changes features, dependencies, scripts or structure.
