// /**
//  * Creative.jsx — "Beyond the Interface"
//  * A premium creative showcase section for Khushbu's portfolio.
//  * Matches the existing design language: ink/bone/gold tokens, glassmorphism,
//  * Framer Motion, Three.js atmosphere, editorial typography.
//  *
//  * Usage:
//  *   import Creative from "./sections/Creative";
//  *   <Creative />
//  *
//  * Place it between Process and Skills (after the work case studies).
//  * In Navbar/index, add ["Creative", "#creative"] if desired.
//  *
//  * Eyebrow number: use whatever fits your section order (shown as "05 — Creative").
//  * Adjust THREE.js import path to match your project (e.g. "three" or "../../lib/three").
//  */

// import { useRef, useEffect, useState, useMemo } from "react";
// import { motion, useScroll, useTransform, useSpring, AnimatePresence } from "framer-motion";
// import * as THREE from "three";
// import { Eyebrow } from "../Primitives";

// /* ─── design tokens (mirrors tailwind config) ─── */
// const GOLD = "#C8A96A";
// const BONE = "#EDEAE3";
// const INK  = "#0E0D0B";

// /* ─────────────────────────────────────────────── *
//  *  Three.js canvas — organic floating forms       *
//  * ─────────────────────────────────────────────── */
// function AtmosphereCanvas() {
//   const mountRef = useRef(null);

//   useEffect(() => {
//     const el = mountRef.current;
//     if (!el) return;

//     /* scene */
//     const W = el.clientWidth, H = el.clientHeight;
//     const scene    = new THREE.Scene();
//     const camera   = new THREE.PerspectiveCamera(55, W / H, 0.1, 100);
//     camera.position.z = 5;

//     const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
//     renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
//     renderer.setSize(W, H);
//     renderer.setClearColor(0x000000, 0);
//     el.appendChild(renderer.domElement);

//     /* mouse */
//     const mouse = new THREE.Vector2();
//     const onMouse = (e) => {
//       mouse.x = (e.clientX / window.innerWidth  - 0.5) * 2;
//       mouse.y = -(e.clientY / window.innerHeight - 0.5) * 2;
//     };
//     window.addEventListener("mousemove", onMouse);

//     /* floating organic meshes — ceramic-inspired tori & spheres */
//     const meshes = [];
//     const goldMat  = new THREE.MeshStandardMaterial({ color: GOLD, roughness: 0.55, metalness: 0.4, transparent: true, opacity: 0.55 });
//     const boneMat  = new THREE.MeshStandardMaterial({ color: BONE, roughness: 0.8, metalness: 0.0, transparent: true, opacity: 0.10 });
//     const configs = [
//       { geo: new THREE.TorusGeometry(0.6, 0.18, 32, 80),     mat: goldMat, pos: [-2.2,  1.0, -1.0], speed: 0.38, amp: 0.18 },
//       { geo: new THREE.SphereGeometry(0.42, 48, 48),          mat: boneMat, pos: [ 2.4,  0.6, -2.0], speed: 0.22, amp: 0.25 },
//       { geo: new THREE.TorusGeometry(0.38, 0.10, 24, 60),    mat: goldMat, pos: [ 1.8, -1.2, -1.5], speed: 0.51, amp: 0.14 },
//       { geo: new THREE.IcosahedronGeometry(0.3, 2),           mat: boneMat, pos: [-1.6, -0.7, -0.6], speed: 0.29, amp: 0.20 },
//       { geo: new THREE.TorusKnotGeometry(0.22, 0.07, 80, 14), mat: goldMat, pos: [ 0.4,  1.8, -2.5], speed: 0.44, amp: 0.16 },
//     ];
//     configs.forEach(({ geo, mat, pos, speed, amp }) => {
//       const m = new THREE.Mesh(geo, mat);
//       m.position.set(...pos);
//       m.userData = { speed, amp, origin: new THREE.Vector3(...pos) };
//       scene.add(m);
//       meshes.push(m);
//     });

//     /* particle field */
//     const pCount = 220;
//     const pPos   = new Float32Array(pCount * 3);
//     for (let i = 0; i < pCount; i++) {
//       pPos[i * 3]     = (Math.random() - 0.5) * 12;
//       pPos[i * 3 + 1] = (Math.random() - 0.5) * 8;
//       pPos[i * 3 + 2] = (Math.random() - 0.5) * 6;
//     }
//     const pGeo = new THREE.BufferGeometry();
//     pGeo.setAttribute("position", new THREE.BufferAttribute(pPos, 3));
//     const pMat = new THREE.PointsMaterial({ color: GOLD, size: 0.025, transparent: true, opacity: 0.35 });
//     scene.add(new THREE.Points(pGeo, pMat));

//     /* lights */
//     scene.add(new THREE.AmbientLight(0xffffff, 0.4));
//     const keyLight = new THREE.PointLight(GOLD, 2.5, 10);
//     keyLight.position.set(3, 3, 3);
//     scene.add(keyLight);
//     const fillLight = new THREE.PointLight(0xaab4c8, 1.0, 12);
//     fillLight.position.set(-4, -2, 2);
//     scene.add(fillLight);

//     /* resize */
//     const onResize = () => {
//       const w = el.clientWidth, h = el.clientHeight;
//       camera.aspect = w / h;
//       camera.updateProjectionMatrix();
//       renderer.setSize(w, h);
//     };
//     window.addEventListener("resize", onResize);

//     /* animate */
//     let raf;
//     const clock = new THREE.Clock();
//     const animate = () => {
//       raf = requestAnimationFrame(animate);
//       const t = clock.getElapsedTime();
//       meshes.forEach((m, i) => {
//         const { speed, amp, origin } = m.userData;
//         m.rotation.x = t * speed * 0.7;
//         m.rotation.y = t * speed;
//         m.position.y = origin.y + Math.sin(t * speed + i) * amp;
//         m.position.x = origin.x + Math.cos(t * speed * 0.5 + i) * amp * 0.5;
//       });
//       /* gentle camera follow mouse */
//       camera.position.x += (mouse.x * 0.4 - camera.position.x) * 0.025;
//       camera.position.y += (mouse.y * 0.3 - camera.position.y) * 0.025;
//       camera.lookAt(scene.position);
//       renderer.render(scene, camera);
//     };
//     animate();

//     return () => {
//       cancelAnimationFrame(raf);
//       window.removeEventListener("mousemove", onMouse);
//       window.removeEventListener("resize", onResize);
//       renderer.dispose();
//       if (el.contains(renderer.domElement)) el.removeChild(renderer.domElement);
//     };
//   }, []);

//   return (
//     <div
//       ref={mountRef}
//       className="pointer-events-none absolute inset-0 z-0"
//       aria-hidden
//     />
//   );
// }

// /* ─────────────────────────────────────────────── *
//  *  Placeholder image frame                        *
//  * ─────────────────────────────────────────────── */
// function ImageFrame({ src, alt = "", label = "", aspect = "4/5", className = "", delay = 0 }) {
//   const [hovered, setHovered] = useState(false);
//   const [loaded, setLoaded]   = useState(false);

//   return (
//     <motion.div
//       className={`group relative overflow-hidden rounded-2xl ${className}`}
//       style={{ aspectRatio: aspect }}
//       initial={{ opacity: 0, y: 48, scale: 0.95 }}
//       whileInView={{ opacity: 1, y: 0, scale: 1 }}
//       viewport={{ once: true, margin: "-8%" }}
//       transition={{ duration: 1.0, delay, ease: [0.16, 1, 0.3, 1] }}
//       onHoverStart={() => setHovered(true)}
//       onHoverEnd={() => setHovered(false)}
//       whileHover={{ y: -6 }}
//     >
//       {/* ── image or elegant placeholder ── */}
//       {src ? (
//         <motion.img
//           src={src}
//           alt={alt}
//           onLoad={() => setLoaded(true)}
//           animate={{ scale: hovered ? 1.06 : 1 }}
//           transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
//           className="h-full w-full object-cover"
//         />
//       ) : (
//         /* placeholder frame — swap src prop when you have your image */
//         <div className="relative flex h-full w-full items-center justify-center overflow-hidden bg-gradient-to-br from-white/[0.04] to-white/[0.01]">
//           {/* animated corner marks */}
//           {["tl", "tr", "bl", "br"].map((corner) => (
//             <span
//               key={corner}
//               className={`absolute h-5 w-5 border-gold/40 ${
//                 corner === "tl" ? "left-3 top-3 border-l border-t"
//                 : corner === "tr" ? "right-3 top-3 border-r border-t"
//                 : corner === "bl" ? "bottom-3 left-3 border-b border-l"
//                 : "bottom-3 right-3 border-b border-r"
//               }`}
//             />
//           ))}
//           {/* pulsing inner glow */}
//           <motion.div
//             animate={{ opacity: [0.06, 0.14, 0.06] }}
//             transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
//             className="absolute inset-[20%] rounded-xl bg-gold/20 blur-2xl"
//           />
//           <div className="z-10 flex flex-col items-center gap-2">
//             {/* camera aperture icon suggestion */}
//             <motion.svg
//               width="28" height="28" viewBox="0 0 28 28" fill="none"
//               animate={{ rotate: hovered ? 30 : 0, opacity: hovered ? 0.8 : 0.28 }}
//               transition={{ duration: 0.6 }}
//             >
//               <circle cx="14" cy="14" r="12" stroke={GOLD} strokeWidth="1" />
//               <circle cx="14" cy="14" r="4"  stroke={GOLD} strokeWidth="1" />
//               {[0,60,120,180,240,300].map((deg) => (
//                 <line key={deg}
//                   x1="14" y1="2" x2="14" y2="6"
//                   stroke={GOLD} strokeWidth="1" strokeLinecap="round"
//                   transform={`rotate(${deg} 14 14)`}
//                 />
//               ))}
//             </motion.svg>
//             <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-bone/25">
//               Add image
//             </span>
//           </div>
//           {/* border */}
//           <div className="absolute inset-0 rounded-2xl border border-white/[0.07]" />
//         </div>
//       )}

//       {/* hover glass overlay */}
//       <AnimatePresence>
//         {hovered && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             transition={{ duration: 0.35 }}
//             className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/20 to-transparent"
//           />
//         )}
//       </AnimatePresence>

//       {/* caption */}
//       {label && (
//         <motion.div
//           initial={{ y: 12, opacity: 0 }}
//           animate={hovered ? { y: 0, opacity: 1 } : { y: 12, opacity: 0 }}
//           transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
//           className="absolute bottom-0 left-0 right-0 p-5"
//         >
//           <div className="glass rounded-xl px-4 py-2.5">
//             <p className="font-mono text-[11px] uppercase tracking-eyebrow text-gold">{label}</p>
//           </div>
//         </motion.div>
//       )}

//       {/* soft vignette always */}
//       <div className="pointer-events-none absolute inset-0 rounded-2xl shadow-[inset_0_0_40px_rgba(0,0,0,0.35)]" />
//     </motion.div>
//   );
// }

// /* ─────────────────────────────────────────────── *
//  *  Painting gallery — organic asymmetric layout  *
//  * ─────────────────────────────────────────────── */
// function PaintingGallery() {
//   return (
//     <div className="relative">
//       {/* eyebrow */}
//       <motion.div
//         initial={{ opacity: 0, x: -12 }}
//         whileInView={{ opacity: 1, x: 0 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.7 }}
//         className="flex items-center gap-3"
//       >
//         <span className="inline-block h-px w-6 bg-gold/60" />
//         <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-gold">Painting</span>
//       </motion.div>

//       <motion.p
//         initial={{ opacity: 0, y: 16 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.8, delay: 0.1 }}
//         className="mt-4 max-w-xs font-display text-2xl leading-tight tracking-tight text-bone/80"
//       >
//         Colour as language before code.
//       </motion.p>

//       {/* asymmetric 3-image layout */}
//       <div className="mt-8 grid grid-cols-5 grid-rows-2 gap-3">
//         {/* large feature — left, tall */}
//         <div className="col-span-3 row-span-2">
//           <ImageFrame
//             aspect="3/4"
//             label="Acrylic study, 2024"
//             className="h-full"
//             delay={0}
//           />
//         </div>
//         {/* two stacked right */}
//         <div className="col-span-2 row-span-1">
//           <ImageFrame aspect="4/3" label="Watercolour, 2025" delay={0.12} />
//         </div>
//         <div className="col-span-2 row-span-1">
//           <ImageFrame aspect="4/3" label="Mixed media, 2025" delay={0.22} />
//         </div>
//       </div>
//     </div>
//   );
// }

// /* ─────────────────────────────────────────────── *
//  *  Ceramics gallery — organic stagger             *
//  * ─────────────────────────────────────────────── */
// function CeramicsGallery() {
//   return (
//     <div className="relative">
//       <motion.div
//         initial={{ opacity: 0, x: -12 }}
//         whileInView={{ opacity: 1, x: 0 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.7 }}
//         className="flex items-center gap-3"
//       >
//         <span className="inline-block h-px w-6 bg-gold/60" />
//         <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-gold">Ceramic Art</span>
//       </motion.div>

//       <motion.p
//         initial={{ opacity: 0, y: 16 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.8, delay: 0.1 }}
//         className="mt-4 max-w-xs font-display text-2xl leading-tight tracking-tight text-bone/80"
//       >
//         Form, texture, imperfection.
//       </motion.p>

//       {/* shifted organic layout — tall centre flanked by portrait pairs */}
//       <div className="mt-8 flex gap-3">
//         <div className="flex flex-1 flex-col gap-3">
//           <ImageFrame aspect="1/1"   label="Stoneware vessel, 2024" delay={0}    />
//           <ImageFrame aspect="4/5"   label="Raku glazed bowl, 2025"  delay={0.16} />
//         </div>
//         <div className="flex-[1.4]">
//           <ImageFrame aspect="9/16" label="Hand-built form, 2025"   delay={0.08} className="h-full" />
//         </div>
//       </div>
//     </div>
//   );
// }

// /* ─────────────────────────────────────────────── *
//  *  Photography gallery — wide cinematic           *
//  * ─────────────────────────────────────────────── */
// function PhotographyGallery() {
//   const trackRef = useRef(null);
//   const { scrollYProgress } = useScroll({ target: trackRef, offset: ["start end", "end start"] });
//   const x = useTransform(scrollYProgress, [0, 1], ["0%", "-8%"]);

//   return (
//     <div ref={trackRef} className="relative overflow-hidden">
//       <motion.div
//         initial={{ opacity: 0, x: -12 }}
//         whileInView={{ opacity: 1, x: 0 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.7 }}
//         className="flex items-center gap-3"
//       >
//         <span className="inline-block h-px w-6 bg-gold/60" />
//         <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-gold">Photography</span>
//       </motion.div>

//       <motion.p
//         initial={{ opacity: 0, y: 16 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.8, delay: 0.1 }}
//         className="mt-4 max-w-xs font-display text-2xl leading-tight tracking-tight text-bone/80"
//       >
//         Light as design material.
//       </motion.p>

//       {/* parallax-drifting wide strip */}
//       <motion.div style={{ x }} className="mt-8 flex gap-3">
//         <ImageFrame aspect="16/10" label="Street, Houston 2025"   delay={0}    className="min-w-[60%]" />
//         <ImageFrame aspect="3/4"   label="Portrait study, 2024"   delay={0.1}  className="min-w-[28%]" />
//         <ImageFrame aspect="16/10" label="Architectural, 2025"    delay={0.18} className="min-w-[55%]" />
//       </motion.div>
//     </div>
//   );
// }

// /* ─────────────────────────────────────────────── *
//  *  Floating quote — pulls together the section    *
//  * ─────────────────────────────────────────────── */
// function FloatingQuote() {
//   return (
//     <motion.blockquote
//       initial={{ opacity: 0, y: 40 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true, margin: "-10%" }}
//       transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
//       className="mx-auto max-w-2xl text-center"
//     >
//       <p className="font-display text-3xl leading-tight tracking-tight text-bone/70 sm:text-4xl">
//         "Every physical thing I make teaches me something{" "}
//         <span className="italic text-gold">digital work never can.</span>"
//       </p>
//     </motion.blockquote>
//   );
// }

// /* ─────────────────────────────────────────────── *
//  *  Main Section                                   *
//  * ─────────────────────────────────────────────── */
// export default function Creative() {
//   const sectionRef = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: sectionRef,
//     offset: ["start end", "end start"],
//   });

//   /* gold blob parallax */
//   const blobY = useTransform(scrollYProgress, [0, 1], ["0%", "60%"]);
//   const blobY2 = useTransform(scrollYProgress, [0, 1], ["0%", "-40%"]);

//   /* heading split-word parallax */
//   const headingX1 = useTransform(scrollYProgress, [0, 0.5], ["-4%", "0%"]);
//   const headingX2 = useTransform(scrollYProgress, [0, 0.5], ["4%", "0%"]);

//   return (
//     <section
//       id="creative"
//       ref={sectionRef}
//       className="relative overflow-hidden py-32 md:py-48"
//     >
//       {/* ── Three.js atmosphere ── */}
//       <AtmosphereCanvas />

//       {/* ── ambient blobs ── */}
//       <motion.div
//         style={{ y: blobY }}
//         className="pointer-events-none absolute -left-48 top-0 h-[700px] w-[700px]"
//         aria-hidden
//       >
//         <div className="h-full w-full rounded-full bg-gold/[0.07] blur-[160px]" />
//       </motion.div>
//       <motion.div
//         style={{ y: blobY2 }}
//         className="pointer-events-none absolute -right-32 bottom-20 h-[500px] w-[500px]"
//         aria-hidden
//       >
//         <div className="h-full w-full rounded-full bg-[#8BA4B8]/[0.06] blur-[120px]" />
//       </motion.div>

//       <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-10">

//         {/* ── Header ── */}
//         <div className="mb-20 md:mb-28">
//           <Eyebrow>05 — Creative</Eyebrow>

//           {/* Split headline with opposite parallax drift */}
//           <div className="mt-10 overflow-hidden">
//             <motion.h2
//               style={{ x: headingX1 }}
//               className="font-display text-[14vw] font-light leading-[0.88] tracking-tightest text-bone sm:text-[12vw] md:text-[9vw]"
//             >
//               Beyond the
//             </motion.h2>
//             <motion.h2
//               style={{ x: headingX2 }}
//               className="font-display text-[14vw] font-light italic leading-[0.88] tracking-tightest text-gold/80 sm:text-[12vw] md:text-[9vw]"
//             >
//               Interface.
//             </motion.h2>
//           </div>

//           <motion.p
//             initial={{ opacity: 0, y: 24 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true, margin: "-10%" }}
//             transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
//             className="mt-8 max-w-md text-lg leading-relaxed text-bone/50"
//           >
//             Creativity doesn't stop when I close my laptop. The things I make by hand —
//             paintings, ceramics, photographs — are where I first learn to see proportion,
//             texture, and light. That practice shapes every interface I design.
//           </motion.p>
//         </div>

//         {/* ── Galleries ── */}

//         {/* Row 1: Painting (left, wider) + Ceramics (right) */}
//         <div className="grid grid-cols-1 gap-16 md:grid-cols-2 md:gap-10 lg:gap-16">
//           <PaintingGallery />
//           <CeramicsGallery />
//         </div>

//         {/* Divider quote */}
//         <div className="my-24 md:my-32">
//           <FloatingQuote />
//         </div>

//         {/* Row 2: Photography — full width cinematic */}
//         <PhotographyGallery />

//         {/* ── Closing thought ── */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, margin: "-10%" }}
//           transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
//           className="mt-24 flex flex-col items-start gap-6 border-t border-white/10 pt-12 md:flex-row md:items-end md:justify-between"
//         >
//           <p className="max-w-sm text-sm leading-relaxed text-bone/40">
//             Hand-craft and code share the same loop: make, observe, refine, repeat. That
//             cycle is how I approach every product — from wireframe to shipped feature.
//           </p>
//           <div className="flex items-center gap-3">
//             <span className="h-1.5 w-1.5 rounded-full bg-gold/60" />
//             <span className="font-mono text-[11px] uppercase tracking-eyebrow text-muted">
//               Houston, TX · 2026
//             </span>
//           </div>
//         </motion.div>

//       </div>
//     </section>
//   );
// }
/**
 * Creative.jsx — "Beyond the Interface"
 * A premium creative showcase section for Khushbu's portfolio.
 * Matches the existing design language: ink/bone/gold tokens, glassmorphism,
 * Framer Motion, Three.js atmosphere, editorial typography.
 *
 * Usage:
 *   import Creative from "./sections/Creative";
 *   <Creative />
 *
 * Place it between Process and Skills (after the work case studies).
 * In Navbar/index, add ["Creative", "#creative"] if desired.
 *
 * Eyebrow number: use whatever fits your section order (shown as "05 — Creative").
 * Adjust THREE.js import path to match your project (e.g. "three" or "../../lib/three").
 */

import { useRef, useEffect, useState, useMemo } from "react";
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from "framer-motion";
import * as THREE from "three";
import { Eyebrow } from "../Primitives";




/* ─── design tokens (mirrors tailwind config) ─── */
const GOLD = "#C8A96A";
const BONE = "#EDEAE3";
const INK  = "#0E0D0B";

/* ─────────────────────────────────────────────── *
 *  Image slots — drop your real files in /assets  *
 *  and reference them here. Leave a slot as null   *
 *  to keep the elegant placeholder frame.          *
 * ─────────────────────────────────────────────── */
const IMAGES = {
  painting: {
    feature: "/public/images/screens/painting_1.PNG",
    a: "/public/images/screens/painting_2.PNG",
    b: "/public/images/screens/painting_3.PNG",
  },
  ceramics: {
    a: "/public/images/screens/ceramic_1.jpg",
    b: "/public/images/screens/ceramic_2.jpg",
    c: "/public/images/screens/ceramic_3.jpg",
  },
  photography: {
    a: "/public/images/screens/sfo.PNG",
    b: "/public/images/screens/sunset.jpg",
    c: "/public/images/screens/maine.jpeg",
  },
};

/* ─────────────────────────────────────────────── *
 *  Three.js canvas — organic floating forms       *
 * ─────────────────────────────────────────────── */
function AtmosphereCanvas() {
  const mountRef = useRef(null);

  useEffect(() => {
    const el = mountRef.current;
    if (!el) return;

    /* scene */
    const W = el.clientWidth, H = el.clientHeight;
    const scene    = new THREE.Scene();
    const camera   = new THREE.PerspectiveCamera(55, W / H, 0.1, 100);
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(W, H);
    renderer.setClearColor(0x000000, 0);
    el.appendChild(renderer.domElement);

    /* mouse */
    const mouse = new THREE.Vector2();
    const onMouse = (e) => {
      mouse.x = (e.clientX / window.innerWidth  - 0.5) * 2;
      mouse.y = -(e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener("mousemove", onMouse);

    /* floating organic meshes — ceramic-inspired tori & spheres */
    const meshes = [];
    const goldMat  = new THREE.MeshStandardMaterial({ color: GOLD, roughness: 0.55, metalness: 0.4, transparent: true, opacity: 0.55 });
    const boneMat  = new THREE.MeshStandardMaterial({ color: BONE, roughness: 0.8, metalness: 0.0, transparent: true, opacity: 0.10 });
    const configs = [
      { geo: new THREE.TorusGeometry(0.6, 0.18, 32, 80),     mat: goldMat, pos: [-2.2,  1.0, -1.0], speed: 0.38, amp: 0.18 },
      { geo: new THREE.SphereGeometry(0.42, 48, 48),          mat: boneMat, pos: [ 2.4,  0.6, -2.0], speed: 0.22, amp: 0.25 },
      { geo: new THREE.TorusGeometry(0.38, 0.10, 24, 60),    mat: goldMat, pos: [ 1.8, -1.2, -1.5], speed: 0.51, amp: 0.14 },
      { geo: new THREE.IcosahedronGeometry(0.3, 2),           mat: boneMat, pos: [-1.6, -0.7, -0.6], speed: 0.29, amp: 0.20 },
      { geo: new THREE.TorusKnotGeometry(0.22, 0.07, 80, 14), mat: goldMat, pos: [ 0.4,  1.8, -2.5], speed: 0.44, amp: 0.16 },
    ];
    configs.forEach(({ geo, mat, pos, speed, amp }) => {
      const m = new THREE.Mesh(geo, mat);
      m.position.set(...pos);
      m.userData = { speed, amp, origin: new THREE.Vector3(...pos) };
      scene.add(m);
      meshes.push(m);
    });

    /* particle field */
    const pCount = 220;
    const pPos   = new Float32Array(pCount * 3);
    for (let i = 0; i < pCount; i++) {
      pPos[i * 3]     = (Math.random() - 0.5) * 12;
      pPos[i * 3 + 1] = (Math.random() - 0.5) * 8;
      pPos[i * 3 + 2] = (Math.random() - 0.5) * 6;
    }
    const pGeo = new THREE.BufferGeometry();
    pGeo.setAttribute("position", new THREE.BufferAttribute(pPos, 3));
    const pMat = new THREE.PointsMaterial({ color: GOLD, size: 0.025, transparent: true, opacity: 0.35 });
    scene.add(new THREE.Points(pGeo, pMat));

    /* lights */
    scene.add(new THREE.AmbientLight(0xffffff, 0.4));
    const keyLight = new THREE.PointLight(GOLD, 2.5, 10);
    keyLight.position.set(3, 3, 3);
    scene.add(keyLight);
    const fillLight = new THREE.PointLight(0xaab4c8, 1.0, 12);
    fillLight.position.set(-4, -2, 2);
    scene.add(fillLight);

    /* resize */
    const onResize = () => {
      const w = el.clientWidth, h = el.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener("resize", onResize);

    /* animate */
    let raf;
    const clock = new THREE.Clock();
    const animate = () => {
      raf = requestAnimationFrame(animate);
      const t = clock.getElapsedTime();
      meshes.forEach((m, i) => {
        const { speed, amp, origin } = m.userData;
        m.rotation.x = t * speed * 0.7;
        m.rotation.y = t * speed;
        m.position.y = origin.y + Math.sin(t * speed + i) * amp;
        m.position.x = origin.x + Math.cos(t * speed * 0.5 + i) * amp * 0.5;
      });
      /* gentle camera follow mouse */
      camera.position.x += (mouse.x * 0.4 - camera.position.x) * 0.025;
      camera.position.y += (mouse.y * 0.3 - camera.position.y) * 0.025;
      camera.lookAt(scene.position);
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMouse);
      window.removeEventListener("resize", onResize);
      renderer.dispose();
      if (el.contains(renderer.domElement)) el.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="pointer-events-none absolute inset-0 z-0"
      aria-hidden
    />
  );
}

/* ─────────────────────────────────────────────── *
 *  Placeholder image frame                        *
 * ─────────────────────────────────────────────── */
function ImageFrame({ src, alt = "", label = "", aspect = "4/5", className = "", delay = 0, onOpen }) {
  const [hovered, setHovered] = useState(false);
  const [loaded, setLoaded]   = useState(false);
  const frameRef = useRef(null);

  // subtle tilt parallax, mouse-follow — premium feel, disabled on touch
  const rx = useSpring(0, { stiffness: 220, damping: 22, mass: 0.6 });
  const ry = useSpring(0, { stiffness: 220, damping: 22, mass: 0.6 });
  const tx = useSpring(0, { stiffness: 200, damping: 24 });
  const ty = useSpring(0, { stiffness: 200, damping: 24 });

  const handleMove = (e) => {
    const el = frameRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    ry.set(px * 6); // rotateY follows horizontal
    rx.set(-py * 6); // rotateX follows vertical
    tx.set(px * 10);
    ty.set(py * 10);
  };

  const handleLeave = () => {
    setHovered(false);
    rx.set(0);
    ry.set(0);
    tx.set(0);
    ty.set(0);
  };

  return (
    <motion.div
      ref={frameRef}
      className={`group relative overflow-hidden rounded-2xl ${className} ${src ? "cursor-zoom-in" : ""}`}
      style={{ aspectRatio: aspect, perspective: 800 }}
      initial={{ opacity: 0, y: 48, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-8%" }}
      transition={{ duration: 1.0, delay, ease: [0.16, 1, 0.3, 1] }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={handleLeave}
      onMouseMove={handleMove}
      onClick={() => src && onOpen && onOpen({ src, alt, label })}
      data-cursor="hover"
      whileHover={{ y: -6 }}
    >
      {/* ── image or elegant placeholder ── */}
      {src ? (
        <motion.img
          src={src}
          alt={alt}
          onLoad={() => setLoaded(true)}
          style={{ rotateX: rx, rotateY: ry, x: tx, y: ty }}
          animate={{ scale: hovered ? 1.08 : 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="h-full w-full object-cover will-change-transform"
        />
      ) : (
        /* placeholder frame — swap src prop when you have your image */
        <div className="relative flex h-full w-full items-center justify-center overflow-hidden bg-gradient-to-br from-white/[0.04] to-white/[0.01]">
          {/* animated corner marks */}
          {["tl", "tr", "bl", "br"].map((corner) => (
            <span
              key={corner}
              className={`absolute h-5 w-5 border-gold/40 ${
                corner === "tl" ? "left-3 top-3 border-l border-t"
                : corner === "tr" ? "right-3 top-3 border-r border-t"
                : corner === "bl" ? "bottom-3 left-3 border-b border-l"
                : "bottom-3 right-3 border-b border-r"
              }`}
            />
          ))}
          {/* pulsing inner glow */}
          <motion.div
            animate={{ opacity: [0.06, 0.14, 0.06] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-[20%] rounded-xl bg-gold/20 blur-2xl"
          />
          <div className="z-10 flex flex-col items-center gap-2">
            {/* camera aperture icon suggestion */}
            <motion.svg
              width="28" height="28" viewBox="0 0 28 28" fill="none"
              animate={{ rotate: hovered ? 30 : 0, opacity: hovered ? 0.8 : 0.28 }}
              transition={{ duration: 0.6 }}
            >
              <circle cx="14" cy="14" r="12" stroke={GOLD} strokeWidth="1" />
              <circle cx="14" cy="14" r="4"  stroke={GOLD} strokeWidth="1" />
              {[0,60,120,180,240,300].map((deg) => (
                <line key={deg}
                  x1="14" y1="2" x2="14" y2="6"
                  stroke={GOLD} strokeWidth="1" strokeLinecap="round"
                  transform={`rotate(${deg} 14 14)`}
                />
              ))}
            </motion.svg>
            <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-bone/25">
              Add image
            </span>
          </div>
          {/* border */}
          <div className="absolute inset-0 rounded-2xl border border-white/[0.07]" />
        </div>
      )}

      {/* hover glass overlay */}
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/20 to-transparent"
          />
        )}
      </AnimatePresence>

      {/* caption */}
      {label && (
        <motion.div
          initial={{ y: 12, opacity: 0 }}
          animate={hovered ? { y: 0, opacity: 1 } : { y: 12, opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="absolute bottom-0 left-0 right-0 p-5"
        >
          <div className="glass rounded-xl px-18 py-2.5 flex items-center justify-center">
  <p className="font-mono text-[9px] uppercase tracking-[0.12em] text-gold whitespace-nowrap">
    {label}
  </p>
</div>
        </motion.div>
      )}

      {/* soft vignette always */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl shadow-[inset_0_0_40px_rgba(0,0,0,0.35)]" />
    </motion.div>
  );
}

/* ─────────────────────────────────────────────── *
 *  Painting gallery — organic asymmetric layout  *
 * ─────────────────────────────────────────────── */
function PaintingGallery({ openLightbox }) {
  return (
    <div className="relative">
      {/* eyebrow */}
      <motion.div
        initial={{ opacity: 0, x: -12 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="flex items-center gap-3"
      >
        <span className="inline-block h-px w-6 bg-gold/60" />
        <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-gold">Painting</span>
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="mt-4 max-w-xs font-display text-2xl leading-tight tracking-tight text-bone/80"
      >
        Colour as language before code.
      </motion.p>

      {/* asymmetric 3-image layout */}
      <div className="mt-8 grid grid-cols-5 grid-rows-2 gap-3">
        {/* large feature — left, tall */}
        <div className="col-span-3 row-span-2">
          <ImageFrame
            aspect="3/4"
            label="Heritage in Clay"
            className="h-full"
            delay={0}
            src={IMAGES.painting.feature}
            onOpen={openLightbox}
          />
        </div>
        {/* two stacked right */}
        <div className="col-span-2 row-span-1">
          <ImageFrame aspect="4/3" label="Fragments of Identity" delay={0.12} src={IMAGES.painting.a} onOpen={openLightbox} />
        </div>
        <div className="col-span-2 row-span-1">
          <ImageFrame aspect="4/3" label="Geometry of Emotion" delay={0.22} src={IMAGES.painting.b} onOpen={openLightbox} />
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────── *
 *  Ceramics gallery — organic stagger             *
 * ─────────────────────────────────────────────── */
function CeramicsGallery({ openLightbox }) {
  return (
    <div className="relative">
      <motion.div
        initial={{ opacity: 0, x: -12 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="flex items-center gap-3"
      >
        <span className="inline-block h-px w-6 bg-gold/60" />
        <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-gold">Ceramic Art</span>
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="mt-4 max-w-xs font-display text-2xl leading-tight tracking-tight text-bone/80"
      >
        Form, texture, imperfection.
      </motion.p>

      {/* shifted organic layout — tall centre flanked by portrait pairs */}
      <div className="mt-8 flex gap-3">
        <div className="flex flex-1 flex-col gap-3">
          <ImageFrame aspect="1/1"   label="Captured Moments" delay={0}    src={IMAGES.ceramics.a} onOpen={openLightbox} />
          <ImageFrame aspect="4/5"   label="Playful Forms"  delay={0.16} src={IMAGES.ceramics.b} onOpen={openLightbox} />
        </div>
        <div className="flex-[1.4]">
          <ImageFrame aspect="9/16" label="Coastal Collection"   delay={0.08} className="h-full" src={IMAGES.ceramics.c} onOpen={openLightbox} />
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────── *
 *  Photography gallery — wide cinematic           *
 * ─────────────────────────────────────────────── */
function PhotographyGallery({ openLightbox }) {
  const trackRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: trackRef, offset: ["start end", "end start"] });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-8%"]);

  return (
    <div ref={trackRef} className="relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, x: -12 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="flex items-center gap-3"
      >
        <span className="inline-block h-px w-6 bg-gold/60" />
        <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-gold">Photography</span>
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="mt-4 max-w-xs font-display text-2xl leading-tight tracking-tight text-bone/80"
      >
        Light as design material.
      </motion.p>

      {/* parallax-drifting wide strip */}
      <motion.div style={{ x }} className="mt-8 flex gap-3">
        <ImageFrame aspect="16/10" label="San Francisco"   delay={0}    className="min-w-[60%]" src={IMAGES.photography.a} onOpen={openLightbox} />
        <ImageFrame aspect="3/4"   label="Texas Coast"   delay={0.1}  className="min-w-[28%]" src={IMAGES.photography.b} onOpen={openLightbox} />
        <ImageFrame aspect="16/10" label="New York"    delay={0.18} className="min-w-[55%]" src={IMAGES.photography.c} onOpen={openLightbox} />
      </motion.div>
    </div>
  );
}

/* ─────────────────────────────────────────────── *
 *  Floating quote — pulls together the section    *
 * ─────────────────────────────────────────────── */
function FloatingQuote() {
  return (
    <motion.blockquote
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
      className="mx-auto max-w-2xl text-center"
    >
      <p className="font-display text-3xl leading-tight tracking-tight text-bone/70 sm:text-4xl">
        "Every physical thing I make teaches me something{" "}
        <span className="italic text-gold">digital work never can.</span>"
      </p>
    </motion.blockquote>
  );
}

/* ─────────────────────────────────────────────── *
 *  Main Section                                   *
 * ─────────────────────────────────────────────── */
export default function Creative() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // premium click-to-expand lightbox, shared across all three galleries
  const [lightbox, setLightbox] = useState(null);
  const openLightbox = (item) => setLightbox(item);
  const closeLightbox = () => setLightbox(null);

  /* gold blob parallax */
  const blobY = useTransform(scrollYProgress, [0, 1], ["0%", "60%"]);
  const blobY2 = useTransform(scrollYProgress, [0, 1], ["0%", "-40%"]);

  /* heading split-word parallax */
  const headingX1 = useTransform(scrollYProgress, [0, 0.5], ["-4%", "0%"]);
  const headingX2 = useTransform(scrollYProgress, [0, 0.5], ["4%", "0%"]);

  return (
    <section
      id="creative"
      ref={sectionRef}
      className="relative overflow-hidden py-32 md:py-48"
    >
      {/* ── Three.js atmosphere ── */}
      <AtmosphereCanvas />

      {/* ── ambient blobs ── */}
      <motion.div
        style={{ y: blobY }}
        className="pointer-events-none absolute -left-48 top-0 h-[700px] w-[700px]"
        aria-hidden
      >
        <div className="h-full w-full rounded-full bg-gold/[0.07] blur-[160px]" />
      </motion.div>
      <motion.div
        style={{ y: blobY2 }}
        className="pointer-events-none absolute -right-32 bottom-20 h-[500px] w-[500px]"
        aria-hidden
      >
        <div className="h-full w-full rounded-full bg-[#8BA4B8]/[0.06] blur-[120px]" />
      </motion.div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-10">

        {/* ── Header ── */}
        <div className="mb-20 md:mb-28">
          <Eyebrow>05 — Creative</Eyebrow>

          {/* Split headline with opposite parallax drift */}
          <div className="mt-10 overflow-hidden">
            <motion.h2
              style={{ x: headingX1 }}
              className="font-display text-[14vw] font-light leading-[0.88] tracking-tightest text-bone sm:text-[12vw] md:text-[9vw]"
            >
              Beyond the
            </motion.h2>
            <motion.h2
              style={{ x: headingX2 }}
              className="font-display text-[14vw] font-light italic leading-[0.88] tracking-tightest text-gold/80 sm:text-[12vw] md:text-[9vw]"
            >
              Interface.
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 max-w-md text-lg leading-relaxed text-bone/50"
          >
            Creativity doesn't stop when I close my laptop. The things I make by hand —
            paintings, ceramics, photographs — are where I first learn to see proportion,
            texture, and light. That practice shapes every interface I design.
          </motion.p>
        </div>

        {/* ── Galleries ── */}

        {/* Row 1: Painting (left, wider) + Ceramics (right) */}
        <div className="grid grid-cols-1 gap-16 md:grid-cols-2 md:gap-10 lg:gap-16">
          <PaintingGallery openLightbox={openLightbox} />
          <CeramicsGallery openLightbox={openLightbox} />
        </div>

        {/* Divider quote */}
        <div className="my-24 md:my-32">
          <FloatingQuote />
        </div>

        {/* Row 2: Photography — full width cinematic */}
        <PhotographyGallery openLightbox={openLightbox} />

        {/* ── Closing thought ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="mt-24 flex flex-col items-start gap-6 border-t border-white/10 pt-12 md:flex-row md:items-end md:justify-between"
        >
          <p className="max-w-sm text-sm leading-relaxed text-bone/40">
            Hand-craft and code share the same loop: make, observe, refine, repeat. That
            cycle is how I approach every product — from wireframe to shipped feature.
          </p>
          <div className="flex items-center gap-3">
            <span className="h-1.5 w-1.5 rounded-full bg-gold/60" />
            <span className="font-mono text-[11px] uppercase tracking-eyebrow text-muted">
              Houston, TX · 2026
            </span>
          </div>
        </motion.div>

      </div>

      {/* ── Lightbox — premium full-screen viewer ── */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[80] flex items-center justify-center bg-ink-900/90 p-6 backdrop-blur-md"
            onClick={closeLightbox}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 10 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="relative max-h-[85vh] max-w-4xl overflow-hidden rounded-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={lightbox.src}
                alt={lightbox.alt}
                className="max-h-[85vh] w-auto rounded-2xl object-contain"
              />
              {lightbox.label && (
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-ink-900/90 to-transparent p-6">
                  <p className="font-mono text-[11px] uppercase tracking-eyebrow text-gold">
                    {lightbox.label}
                  </p>
                </div>
              )}
            </motion.div>
            <button
              onClick={closeLightbox}
              data-cursor="hover"
              className="glass absolute right-6 top-6 flex h-10 w-10 items-center justify-center rounded-full text-bone/70 transition-colors hover:text-bone"
              aria-label="Close"
            >
              ✕
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
