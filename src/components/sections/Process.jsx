// import { useRef, useState } from "react";
// import { motion, useScroll, useMotionValueEvent, useTransform } from "framer-motion";
// import { Eyebrow } from "../Primitives";

// const STEPS = [
//   ["Understand Context", "I start by mapping the real environment such as users, workflows, constraints and stakeholder goals. In healthcare and complex systems, skipping this step means solving the wrong problem entirely."],
//   ["Identify the Problem", "Research gets synthesized into a focused problem statement grounded in root causes, not symptoms. I use data, user insights and product thinking to decide what's worth building before touching a wireframe."],
//   ["Design With Purpose", "From low-fidelity sketches to polished component systems like the design system, every decision is tied back to usability, accessibility and the specific context of use. In health technology, clarity isn't optional."],
//   ["Validate & Refine", "Prototypes get tested with real users. Interactions, information hierarchy and edge cases are challenged early so engineering doesn't inherit ambiguous decisions."],
//   ["Build & Evaluate", "I implement in React or hand off pixel-faithful specs. After launch, I look at real usage for insights into what works, what doesn't, and what the next iteration should address."],
// ];

// export default function Process() {
//   const ref = useRef(null);
//   const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
//   const [active, setActive] = useState(0);
//   useMotionValueEvent(scrollYProgress, "change", (v) => {
//     setActive(Math.min(STEPS.length - 1, Math.floor(v * STEPS.length)));
//   });
//   const barScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

//   return (
//     <section id="process" ref={ref} className="relative" style={{ height: `${STEPS.length * 80}vh` }}>
//       <div className="sticky top-0 flex h-screen items-center overflow-hidden">
//         <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-12 px-6 md:grid-cols-2 md:px-10">
//           {/* sticky index */}
//           <div>
//             <Eyebrow>04 — How I Work</Eyebrow>
//             <div className="relative mt-10 h-[34vh]">
//               {STEPS.map(([title], i) => (
//                 <motion.div
//                   key={title}
//                   animate={{
//                     opacity: i === active ? 1 : 0,
//                     y: i === active ? 0 : 30,
//                     filter: i === active ? "blur(0px)" : "blur(6px)",
//                   }}
//                   transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
//                   className="absolute inset-0"
//                 >
//                   <div className="font-mono text-sm text-gold">
//                     0{i + 1} / 0{STEPS.length}
//                   </div>
//                   <h3 className="mt-3 font-display text-6xl leading-none tracking-tightest text-bone md:text-8xl">
//                     {title}
//                   </h3>
//                 </motion.div>
//               ))}
//             </div>
//             {/* progress bar */}
//             <div className="mt-6 h-px w-full origin-left bg-white/10">
//               <motion.div style={{ scaleX: barScale }} className="h-px w-full origin-left bg-gold" />
//             </div>
//           </div>

//           {/* descriptions */}
//           <div className="flex flex-col justify-center gap-5">
//             {STEPS.map(([title, desc], i) => (
//               <motion.div
//                 key={title}
//                 animate={{ opacity: i === active ? 1 : 0.25 }}
//                 transition={{ duration: 0.5 }}
//                 className="border-l-2 pl-5"
//                 style={{ borderColor: i === active ? "#C8A96A" : "rgba(255,255,255,0.1)" }}
//               >
//                 <div className="text-sm font-medium text-bone">{title}</div>
//                 <p className="mt-1 text-sm leading-relaxed text-bone/45">{desc}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


import { useRef, useState } from "react";
import { motion, useScroll, useMotionValueEvent, useTransform } from "framer-motion";
import { Eyebrow } from "../Primitives";

const STEPS = [
  ["Understand Context", "I start by mapping the real environment for users, workflows, constraints, and stakeholder goals. In healthcare and complex systems, skipping this step means solving the wrong problem entirely."],
  ["Identify the Problem", "Research gets synthesized into a focused problem statement grounded in root causes, not symptoms. I use data, user insights and product thinking to decide what's worth building before touching a wireframe."],
  ["Design With Purpose", "From low-fidelity sketches to a polished, documented component system, every decision is tied back to usability, accessibility, and the specific context of use. In health technology, clarity isn't optional."],
  // TODO: once you run a real moderated usability test, you can restore a stronger claim like "Prototypes get tested with real users."
  ["Validate & Refine", "Prototypes get pressure-tested against real task flows and edge cases so engineering doesn't inherit ambiguous decisions. Interactions and information hierarchy are challenged before they harden into code."],
  ["Build & Evaluate", "I implement in React or hand off pixel-faithful specs, then evaluate the result against the original problem to decide what works, what doesn't, and what the next iteration should address."],
];

export default function Process() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const [active, setActive] = useState(0);
  useMotionValueEvent(scrollYProgress, "change", (v) => {
    setActive(Math.min(STEPS.length - 1, Math.floor(v * STEPS.length)));
  });
  const barScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section id="process" ref={ref} className="relative" style={{ height: `${STEPS.length * 80}vh` }}>
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-12 px-6 md:grid-cols-2 md:px-10">
          {/* sticky index */}
          <div>
            <Eyebrow>04 — How I Work</Eyebrow>
            <div className="relative mt-10 h-[34vh]">
              {STEPS.map(([title], i) => (
                <motion.div
                  key={title}
                  animate={{
                    opacity: i === active ? 1 : 0,
                    y: i === active ? 0 : 30,
                    filter: i === active ? "blur(0px)" : "blur(6px)",
                  }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute inset-0"
                >
                  <div className="font-mono text-sm text-gold">
                    0{i + 1} / 0{STEPS.length}
                  </div>
                  <h3 className="mt-3 font-display text-6xl leading-none tracking-tightest text-bone md:text-8xl">
                    {title}
                  </h3>
                </motion.div>
              ))}
            </div>
            {/* progress bar */}
            <div className="mt-6 h-px w-full origin-left bg-white/10">
              <motion.div style={{ scaleX: barScale }} className="h-px w-full origin-left bg-gold" />
            </div>
          </div>

          {/* descriptions */}
          <div className="flex flex-col justify-center gap-5">
            {STEPS.map(([title, desc], i) => (
              <motion.div
                key={title}
                animate={{ opacity: i === active ? 1 : 0.25 }}
                transition={{ duration: 0.5 }}
                className="border-l-2 pl-5"
                style={{ borderColor: i === active ? "#C8A96A" : "rgba(255,255,255,0.1)" }}
              >
                <div className="text-sm font-medium text-bone">{title}</div>
                <p className="mt-1 text-sm leading-relaxed text-bone/45">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
