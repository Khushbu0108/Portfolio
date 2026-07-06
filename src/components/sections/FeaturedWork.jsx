// import { useEffect, useRef } from "react";
// import { gsap, ScrollTrigger } from "../../lib/gsap";
// import { Eyebrow } from "../Primitives";
// import { scrollToId } from "../../hooks/useLenis";

// const PROJECTS = [
//   {
//     n: "01",
//     title: "DigitalUH",
//     tag: "UX · Product · Mobile",
//     blurb: "From fragmented university systems to one proactive, personalized campus platform — built end-to-end in React Native.",
//     accent: "from-gold/25 to-slate2/10",
//     live: true,
//     anchor: "#digitaluh",
//   },
//   {
//     n: "02",
//     title: "Fusion 36°",
//     tag: "Product Design · Frontend Engineering · Digital Commerce",
//     blurb: "Designed and engineered a complete digital ordering platform for a local coffee and boba business — customer, staff, and owner surfaces, end-to-end.",
//     accent: "from-[#3B1F0A]/60 to-[#1A0D03]/80",
//     live: true,
//     anchor: "#fusion36",
//   },
//   {
//     n: "03",
//     title: "Project Three",
//     tag: "Replace · with · your asset",
//     blurb: "Placeholder card — swap in your third case study, image and copy.",
//     accent: "from-bone/10 to-slate2/15",
//     live: false,
//     anchor: null,
//   },
//   {
//     n: "04",
//     title: "Selected Studies",
//     tag: "Archive",
//     blurb: "A growing archive of experiments, side projects and UI explorations.",
//     accent: "from-gold/15 to-bone/5",
//     live: false,
//     anchor: null,
//   },
// ];

// export default function FeaturedWork() {
//   const section = useRef(null);
//   const track = useRef(null);

//   useEffect(() => {
//     const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
//     if (reduce) return;

//     const ctx = gsap.context(() => {
//       const total = track.current.scrollWidth - window.innerWidth;

//       gsap.to(track.current, {
//         x: -total,
//         ease: "none",
//         scrollTrigger: {
//           trigger: section.current,
//           start: "top top",
//           end: () => "+=" + total,
//           scrub: 1,
//           pin: true,
//           anticipatePin: 1,
//           invalidateOnRefresh: true,
//         },
//       });
//     }, section);

//     return () => ctx.revert();
//   }, []);

//   return (
//     <section id="work" ref={section} className="relative h-screen overflow-hidden">
//       <div className="absolute left-6 top-10 z-20 md:left-10">
//         <Eyebrow>02 — Featured Work</Eyebrow>
//       </div>
//       <div className="absolute right-6 top-12 z-20 hidden font-mono text-[11px] uppercase tracking-eyebrow text-muted md:block">
//         Drag-free · scroll to explore →
//       </div>

//       <div ref={track} className="flex h-full items-center will-change-transform">
//         {/* Intro panel */}
//         <div className="flex h-full w-screen flex-shrink-0 flex-col justify-center px-8 md:px-24">
//           <h2 className="max-w-2xl font-display text-5xl leading-[0.95] tracking-tightest text-bone md:text-8xl">
//             Selected
//             <br />
//             <span className="italic text-gold">work.</span>
//           </h2>
//           <p className="mt-6 max-w-sm text-bone/50">
//             Four pieces that show how I move between research, interface and code. Scroll to move
//             through them sideways.
//           </p>
//         </div>

//         {PROJECTS.map((proj) => (
//           <article
//             key={proj.n}
//             className="work-panel group relative mx-4 flex h-[72vh] w-[80vw] flex-shrink-0 overflow-hidden rounded-3xl md:mx-8 md:w-[52vw]"
//             data-cursor="hover"
//             onClick={() => proj.live && proj.anchor && scrollToId(proj.anchor)}
//             style={{ cursor: proj.live ? "pointer" : "default" }}
//           >
//             {/* placeholder visual */}
//             <div
//               className={`work-visual absolute inset-0 bg-gradient-to-br ${proj.accent}`}
//             >
//               <div className="absolute inset-0 opacity-30 [background-image:radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.25)_1px,transparent_0)] [background-size:22px_22px]" />
//             </div>
//             {!proj.live && (
//               <div className="glass absolute right-4 top-4 z-10 rounded-full px-3 py-1.5 font-mono text-[10px] uppercase tracking-wide text-bone/70">
//                 ▸ Replace image
//               </div>
//             )}
//             <div className="absolute inset-0 bg-gradient-to-t from-ink-900/85 via-ink-900/10 to-transparent" />

//             <div className="relative z-10 mt-auto w-full p-7 md:p-10">
//               <div className="flex items-end justify-between">
//                 <div>
//                   <div className="font-mono text-xs text-gold">{proj.n}</div>
//                   <h3 className="mt-2 font-display text-4xl tracking-tight text-bone md:text-6xl">
//                     {proj.title}
//                   </h3>
//                   <p className="mt-2 max-w-md text-sm text-bone/60">{proj.blurb}</p>
//                 </div>
//               </div>
//               <div className="mt-6 flex items-center gap-4">
//                 <span className="font-mono text-[11px] uppercase tracking-eyebrow text-bone/50">
//                   {proj.tag}
//                 </span>
//                 {proj.live && (
//                   <span className="rounded-full bg-gold px-3 py-1 text-[11px] font-medium text-ink transition-transform group-hover:translate-x-1">
//                     Open case study →
//                   </span>
//                 )}
//               </div>
//             </div>
//           </article>
//         ))}

//         {/* tail spacer */}
//         <div className="h-full w-[8vw] flex-shrink-0" />
//       </div>
//     </section>
//   );
// }
import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "../../lib/gsap";
import { Eyebrow } from "../Primitives";
import { scrollToId } from "../../hooks/useLenis";

const PROJECTS = [
  {
    n: "01",
    key: "digitaluh",
    title: "DigitalUH",
    tag: "UX · Product · Mobile",
    blurb: "From fragmented university systems to one proactive, personalized campus platform, built end-to-end in React Native.",
    accent: "from-gold/25 to-slate2/10",
    live: true,
    anchor: "#digitaluh",
  },
  {
    n: "02",
    key: "fusion36",
    title: "Fusion 36°",
    tag: "Product Design · Frontend Engineering · Digital Commerce",
    blurb: "Designed and engineered a complete digital ordering platform for a local coffee and boba business for customer, staff, and owner surfaces, end-to-end.",
    accent: "from-[#3B1F0A]/60 to-[#1A0D03]/80",
    live: true,
    anchor: "#fusion36",
  },
  // {
  //   n: "03",
  //   title: "Project Three",
  //   tag: "Replace · with · your asset",
  //   blurb: "Placeholder card — swap in your third case study, image and copy.",
  //   accent: "from-bone/10 to-slate2/15",
  //   live: false,
  //   anchor: null,
  // },
  // {
  //   title: "Selected Studies",
  //   tag: "Archive",
  //   blurb: "A growing archive of experiments, side projects and UI explorations.",
  //   accent: "from-gold/15 to-bone/5",
  //   live: false,
  //   anchor: null,
  // },
];

export default function FeaturedWork({ onOpenProject }) {
  const section = useRef(null);
  const track = useRef(null);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    const ctx = gsap.context(() => {
      const total = track.current.scrollWidth - window.innerWidth;

      gsap.to(track.current, {
        x: -total,
        ease: "none",
        scrollTrigger: {
          trigger: section.current,
          start: "top top",
          end: () => "+=" + total,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section id="work" ref={section} className="relative h-screen overflow-hidden">
      <div className="absolute left-6 top-10 z-20 md:left-10">
        <Eyebrow>02 — Featured Work</Eyebrow>
      </div>
      <div className="absolute right-6 top-12 z-20 hidden font-mono text-[11px] uppercase tracking-eyebrow text-muted md:block">
        Drag-free · scroll to explore →
      </div>

      <div ref={track} className="flex h-full items-center will-change-transform">
        {/* Intro panel */}
        <div className="flex h-full w-screen flex-shrink-0 flex-col justify-center px-8 md:px-24">
          <h2 className="max-w-2xl font-display text-5xl leading-[0.95] tracking-tightest text-bone md:text-8xl">
            Selected
            <br />
            <span className="italic text-gold">work.</span>
          </h2>
          <p className="mt-6 max-w-sm text-bone/50">
            Four pieces that show how I move between research, interface and code. Scroll to move
            through them sideways.
          </p>
        </div>

        {PROJECTS.map((proj) => (
          <article
            key={proj.n}
            className="work-panel group relative mx-4 flex h-[72vh] w-[80vw] flex-shrink-0 overflow-hidden rounded-3xl md:mx-8 md:w-[52vw]"
            data-cursor="hover"
            onClick={() => proj.live && onOpenProject && onOpenProject(proj.key)}
            style={{ cursor: proj.live ? "pointer" : "default" }}
          >
            {/* placeholder visual */}
            <div
              className={`work-visual absolute inset-0 bg-gradient-to-br ${proj.accent}`}
            >
              <div className="absolute inset-0 opacity-30 [background-image:radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.25)_1px,transparent_0)] [background-size:22px_22px]" />
            </div>
            {!proj.live && (
              <div className="glass absolute right-4 top-4 z-10 rounded-full px-3 py-1.5 font-mono text-[10px] uppercase tracking-wide text-bone/70">
                ▸ Replace image
              </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-ink-900/85 via-ink-900/10 to-transparent" />

            <div className="relative z-10 mt-auto w-full p-7 md:p-10">
              <div className="flex items-end justify-between">
                <div>
                  <div className="font-mono text-xs text-gold">{proj.n}</div>
                  <h3 className="mt-2 font-display text-4xl tracking-tight text-bone md:text-6xl">
                    {proj.title}
                  </h3>
                  <p className="mt-2 max-w-md text-sm text-bone/60">{proj.blurb}</p>
                </div>
              </div>
              <div className="mt-6 flex items-center gap-4">
                <span className="font-mono text-[11px] uppercase tracking-eyebrow text-bone/50">
                  {proj.tag}
                </span>
                {proj.live && (
                  <span className="rounded-full bg-gold px-3 py-1 text-[11px] font-medium text-ink transition-transform group-hover:translate-x-1">
                    Open case study →
                  </span>
                )}
              </div>
            </div>
          </article>
        ))}

        {/* tail spacer */}
        <div className="h-full w-[8vw] flex-shrink-0" />
      </div>
    </section>
  );
}
