# Khushbu Talaviya — Portfolio

A premium, cinematic, scroll-driven portfolio for a UI/UX Designer · Computer Science student · Front-End Developer.

**Stack:** React + Vite · Tailwind CSS · Framer Motion · GSAP ScrollTrigger · Lenis smooth scroll.

---

## Run it

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build → /dist
npm run preview  # preview the build
```

Requires Node 18+.

---

## Design system

- **Type:** Fraunces (display serif) · Hanken Grotesk (body) · JetBrains Mono (labels) — loaded via Google Fonts in `index.html`.
- **Palette:** ink black `#0A0A0B`, bone `#EDEAE3`, muted gold `#C8A96A`, slate accent `#6E8BA6`. Defined in `tailwind.config.js`.
- **Atmosphere:** film grain overlay, blurred gradient blobs, glassmorphism cards, custom glow cursor, magnetic buttons.

## Sections & their motion (each one moves differently on purpose)

| # | Section | Motion behavior |
|---|---------|-----------------|
| 1 | Cinematic Intro | Counter 0–100, name reveal, curtain-panel lift (GSAP timeline) |
| 2 | Hero | Full-bleed portrait scales down + drifts; oversized name parallaxes behind at different speeds; roles reveal late (Framer scroll) |
| 3 | About | Slow parallax portrait, line-by-line text reveal, counter-drifting marquee |
| 4 | Featured Work | **Horizontal** pinned scroll gallery (GSAP ScrollTrigger pin) |
| 5 | DigitalUH | Sticky phone showcase with crossfading screens + floating UI cards; scroll-drawn animated shuttle route; module grid |
| 6 | Design Process | Sticky index that swaps steps as you scroll, drawing progress bar |
| 7 | Skills | Opposing marquee rows + categorized grid |
| 8 | Experience | Timeline with scroll-drawn spine |
| 9 | Contact | Scale-in closing CTA, magnetic buttons, footer |

---

## ▸ What to replace (placeholders are marked in-app)

Your **real portrait is already wired in** (`src/assets/portrait.jpg`) for the Hero and About sections.

Everything below is a clearly-labelled placeholder:

1. **Project cards** — `src/components/sections/FeaturedWork.jsx`
   Cards 02–04 say “Replace image”. Swap the gradient `work-visual` div for an `<img>` of your real project shots, and edit titles/blurbs in the `PROJECTS` array.

2. **Phone screens** — `src/components/sections/DigitalUHScreens.jsx`
   The four screens (`ScreenShuttle`, `ScreenMap`, `ScreenDining`, `ScreenAI`) are representative mock UIs. Replace each component’s body with `<img src={yourScreen} className="h-full w-full object-cover" />` exported from Figma.

3. **Experience** — `src/components/sections/Experience.jsx`
   Update the `ITEMS` array. Entries tagged “Replace” are placeholders.

4. **Contact** — `src/components/sections/Contact.jsx`
   Replace `hello@example.com`, the résumé link, and the `SOCIALS` URLs (LinkedIn / GitHub / Dribbble).

5. **Copy** — About paragraph, DigitalUH meta (role/year), and section intros are easy to edit inline.

---

## Notes

- Smooth scrolling, GSAP and Framer share one rAF loop (`src/hooks/useLenis.js`) so pinned sections and scroll-linked transforms stay in sync.
- `prefers-reduced-motion` is respected: the intro is skipped and heavy scroll effects are softened.
- The cursor falls back to the system cursor on touch devices.
