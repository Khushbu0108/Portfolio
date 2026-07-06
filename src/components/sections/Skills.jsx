import { motion } from "framer-motion";
import { Eyebrow } from "../Primitives";

const MARQUEE_A = ["UI Design", "UX Research", "Health Informatics", "Design Systems", "Clinical Workflow", "Accessibility", "Prototyping"];
const MARQUEE_B = ["React", "JavaScript", "Tailwind", "Population Health", "Medical Informatics", "Framer Motion", "Health Data", "Figma"];

const GROUPS = [
  ["Engineering", [
    "React & TypeScript",
    "JavaScript (ES6+)",
    "Tailwind CSS",
    "HTML & CSS",
    "Framer Motion / GSAP",
    "REST APIs & Supabase",
    "Git & GitHub",
    "Responsive UI",
  ]],
  ["Design & Product", [
    "UI/UX Design",
    "Design Systems",
    "Prototyping",
    "User Research",
    "Interaction Design",
    "Wireframing",
    "Accessibility",
    "Healthcare UX",
  ]],
  ["Health & Data", [
    "Health Informatics",
    "Medical Informatics",
    "Population Health Analytics",
    "Health Data Visualization",
    "EHR Fundamentals",
    "Clinical Workflow Analysis",
    "Data-Driven Decision Making",
    "Human-Centered Healthcare Design",
  ]],
];

function Marquee({ items, reverse }) {
  const row = [...items, ...items];
  return (
    <div className="relative flex overflow-hidden py-3">
      <div
        className="flex shrink-0 gap-6 whitespace-nowrap"
        style={{
          animation: `marquee 28s linear infinite${reverse ? " reverse" : ""}`,
        }}
      >
        {row.map((t, i) => (
          <span
            key={i}
            className="font-display text-4xl tracking-tight text-bone/15 md:text-6xl"
          >
            {t} <span className="text-gold/30">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="relative overflow-hidden py-28 md:py-40">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <Eyebrow>05 — Capabilities</Eyebrow>
      </div>

      <div className="mt-12 -rotate-1">
        <Marquee items={MARQUEE_A} />
      </div>
      <div className="rotate-1">
        <Marquee items={MARQUEE_B} reverse />
      </div>

      <div className="mx-auto mt-20 grid max-w-7xl grid-cols-1 gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/5 px-0 md:grid-cols-3">
        {GROUPS.map(([title, skills], gi) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-8%" }}
            transition={{ duration: 0.7, delay: gi * 0.12, ease: [0.16, 1, 0.3, 1] }}
            className="bg-ink-900 p-8 md:p-10"
          >
            <div className="font-display text-2xl text-gold">{title}</div>
            <ul className="mt-6 space-y-3">
              {skills.map((s) => (
                <li
                  key={s}
                  className="flex items-center gap-3 text-bone/70 transition-colors hover:text-bone"
                  data-cursor="hover"
                >
                  <span className="h-1 w-1 rounded-full bg-gold/60" />
                  {s}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      <style>{`@keyframes marquee { from{transform:translateX(0)} to{transform:translateX(-50%)} }`}</style>
    </section>
  );
}
