import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Eyebrow } from "../Primitives";

const ITEMS = [
  {
    when: "2023 — Present",
    role: "B.S. Computer Science",
    org: "University of Houston",
    desc: "Coursework across data structures, algorithms, human-computer interaction, and software engineering. Building a foundation in both the theory and practical application of computing systems.",
    tag: "Education",
  },
  {
    when: "2024 — Present",
    role: "Population Health Minor",
    org: "University of Houston",
    desc: "Coursework in population health, health informatics, population informatics, and healthcare data, health analytics. Developing analytical skills to interpret health data and understand how digital systems can support better health outcomes at scale.",
    tag: "Education",
  },
  {
    when: "2025 — Present",
    role: "Student Library Assistant",
    org: "University of Houston — MD Anderson Library",
    desc: "Support daily library operations serving thousands of students each week, manage circulation records, troubleshoot account discrepancies, and assist patrons with university resources while maintaining accuracy and consistent service quality.",
    tag: "Part-time",
  },
  {
    when: "2025 — Present",
    role: "Vice Officer",
    org: "CodeCoogs Student Organization · University of Houston",
    desc: "Support the planning and execution of technical workshops, coding events, and networking sessions for Computer Science students. Collaborate with student leaders to coordinate club operations, improve member engagement, and maintain clear communication across the organization. Help foster an environment where students can build technical skills through peer learning, project discussions, and connections to career development resources.",
    tag: "Leadership",
  },
  {
    when: "2026",
    role: "UI/UX Designer & Front-End Developer",
    org: "DigitalUH (Self-initiated)",
    desc: "Designed and prototyped a full campus companion product; building the front-end in React Native with TypeScript, Supabase, and real university data integrations.",
    tag: "Featured",
  },
  {
    when: "2026",
    role: "Undergraduate Researcher",
    org: "UR2PhD Program — University of Houston",
    desc: "Analyzed large-scale turbulent flow simulation datasets using Python, statistical modeling, and data visualization. Designed reproducible data-processing pipelines to transform complex scientific data into actionable insights supporting computational fluid dynamics research.",
    tag: "Research",
  },
  {
    when: "2023 — 2025",
    role: "Computer Science Tutor",
    org: "Lone Star College — Montgomery Campus",
    desc: "Provided one-on-one and group tutoring in Python, Java, C++, SQL, and computer science fundamentals, helping students build problem-solving skills and strengthen their understanding of core academic coursework.",
    tag: "Part-time",
  },
];

export default function Experience() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 60%", "end 70%"] });
  const spine = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section id="experience" ref={ref} className="relative mx-auto max-w-5xl px-6 py-28 md:px-10 md:py-40">
      <Eyebrow>06 — Experience</Eyebrow>
      <h2 className="mt-6 font-display text-4xl tracking-tightest text-bone md:text-6xl">
        The road so far.
      </h2>

      <div className="relative mt-16 pl-8 md:pl-12">
        {/* spine */}
        <div className="absolute left-1 top-2 h-full w-px bg-white/10 md:left-2">
          <motion.div style={{ scaleY: spine }} className="h-full w-px origin-top bg-gold" />
        </div>

        <div className="space-y-14">
          {ITEMS.map((it, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-12%" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
            >
              <span className="absolute -left-[34px] top-1.5 h-3 w-3 rounded-full border-2 border-gold bg-ink-900 md:-left-[42px]" />
              <div className="flex flex-col gap-1 md:flex-row md:items-baseline md:justify-between">
                <span className="font-mono text-xs uppercase tracking-eyebrow text-muted">
                  {it.when}
                </span>
                <span
                  className={`w-fit rounded-full px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wide ${
                    it.tag === "Replace"
                      ? "bg-white/5 text-bone/40"
                      : "bg-gold/15 text-gold"
                  }`}
                >
                  {it.tag}
                </span>
              </div>
              <h3 className="mt-2 font-display text-2xl text-bone md:text-3xl">{it.role}</h3>
              <div className="text-bone/55">{it.org}</div>
              <p className="mt-2 max-w-xl text-sm leading-relaxed text-bone/40">{it.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
