import { motion } from "framer-motion";
import { Eyebrow } from "../Primitives";
import ProjectFooterNav from "../ProjectFooterNav";

const META = [
  ["Title", "AccessPath"],
  ["Status", "In Progress"],
  ["Year", "2026 — Present"],
  ["Type", "Accessibility-First Navigation & Mapping Platform"],
];

const PROBLEMS = [
  ["Scattered Accessibility Details", "Existing mapping apps make it hard to find reliable accessibility information about a destination, its facilities, and the routes to reach it."],
  ["Limited Route Comparison", "People with mobility and sensory disabilities can't easily compare routes based on their own needs and the barriers along the way."],
  ["Unclear Data Reliability", "Accessibility details can be outdated, and it's often unclear whether a condition is confirmed, reported recently, or simply unknown."],
];

const GOALS = [
  ["Accessibility-First Search", "Make accessibility details easier to discover when someone searches for a destination."],
  ["Route Comparison", "Explore ways to compare routes based on individual needs and known accessibility barriers."],
  ["Data Freshness", "Define a reporting workflow that separates confirmed barriers from unknown conditions and shows how recent each report is."],
  ["Functional MVP", "Explore a practical MVP combining interactive maps, accessibility information, and route updates."],
];

const SKILLS = [
  "UI/UX Design",
  "Product Design",
  "User Research",
  "Accessibility-First Design",
  "Wireframing & Prototyping",
  "Figma",
  "Frontend Development",
  "Mapping APIs & Data Integration",
];

export default function AccessPath({ onBack, onPrev, onNext } = {}) {
  return (
    <section id="accesspath" className="relative">

      {/* ── Intro ── */}
      <div className="mx-auto max-w-7xl px-6 pt-32 md:px-10 md:pt-48">
        <Eyebrow>Case Study — In Progress</Eyebrow>
        <div className="mt-8 flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-6xl leading-[0.9] tracking-tightest text-bone md:text-[8rem]"
          >
            Access<span className="italic text-gold">Path</span>
          </motion.h2>
          <p className="max-w-sm text-bone/55">
            A real-world accessibility mapping platform that aims to make it easier to find
            accessible locations, facilities, and routes. The work so far compares existing
            mapping applications, identifies gaps in their accessibility information, and
            explores how those details can be easier to discover when searching for a
            destination.
          </p>
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          <span className="rounded-full border border-gold/25 bg-gold/[0.06] px-3 py-1.5 font-mono text-[10px] uppercase tracking-wide text-gold/80">
            In Progress
          </span>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/5 md:grid-cols-4">
          {META.map(([k, v]) => (
            <div key={k} className="bg-ink-900 p-5">
              <div className="font-mono text-[10px] uppercase tracking-eyebrow text-muted">{k}</div>
              <div className="mt-2 text-bone">{v}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Problem ── */}
      <div className="mx-auto max-w-7xl px-6 pt-28 pb-20 md:px-10 md:pt-40">
        <Eyebrow>The Problem</Eyebrow>
        <h3 className="mt-6 max-w-2xl font-display text-3xl leading-tight tracking-tight text-bone md:text-5xl">
          Navigation that doesn't show what accessibility really looks like.
        </h3>
        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {PROBLEMS.map(([title, desc], i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-8%" }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.07, ease: [0.16, 1, 0.3, 1] }}
            >
              <div
                data-cursor="hover"
                className="group h-full rounded-2xl border border-white/8 bg-white/[0.02] p-6 transition-all duration-500 hover:-translate-y-1.5 hover:border-gold/40 hover:bg-white/[0.05]"
              >
                <div className="font-mono text-xs text-gold/70">Problem 0{i + 1}</div>
                <div className="mt-4 font-display text-xl text-bone">{title}</div>
                <p className="mt-2 text-sm leading-relaxed text-bone/45">{desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ── Planned Goals ── */}
      <div className="mx-auto max-w-7xl px-6 pb-28 md:px-10 md:pb-40">
        <Eyebrow>Planned Features & Goals</Eyebrow>
        <h3 className="mt-6 max-w-2xl font-display text-3xl leading-tight tracking-tight text-bone md:text-5xl">
          Where the project is headed.
        </h3>
        <p className="mt-5 max-w-xl text-bone/50">
          The long-term goal is a practical, user-friendly product that supports more inclusive
          navigation through accessible design, mapping integrations, and up-to-date
          accessibility information. These are goals being explored, not shipped features.
        </p>
        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {GOALS.map(([title, desc], i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-8%" }}
              transition={{ duration: 0.6, delay: (i % 2) * 0.1, ease: [0.16, 1, 0.3, 1] }}
              data-cursor="hover"
              className="group rounded-2xl border border-white/8 bg-white/[0.02] p-7 transition-all duration-500 hover:-translate-y-1.5 hover:border-gold/40 hover:bg-white/[0.05]"
            >
              <div className="flex items-start justify-between">
                <div className="font-display text-xl text-bone">{title}</div>
                <div className="font-mono text-xs text-gold/60">0{i + 1}</div>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-bone/45">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ── Skills ── */}
      <div className="mx-auto max-w-7xl px-6 pb-40 md:px-10 md:pb-56">
        <Eyebrow>Skills I Plan to Use</Eyebrow>
        <div className="mt-10 flex flex-wrap gap-3">
          {SKILLS.map((s, i) => (
            <motion.span
              key={s}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.04, ease: [0.16, 1, 0.3, 1] }}
              className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 font-mono text-xs uppercase tracking-wide text-bone/70 transition-colors hover:border-gold/40 hover:text-bone"
            >
              {s}
            </motion.span>
          ))}
        </div>
      </div>

      <ProjectFooterNav
        onBack={onBack}
        onPrev={onPrev}
        onNext={onNext}
        prevLabel="Fusion 36°"
        nextLabel="Next Project"
      />
    </section>
  );
}
