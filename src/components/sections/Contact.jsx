import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { MagneticButton, RevealText } from "../Primitives";

const SOCIALS = [
  ["Email", "mailto:ktalaviya573@gmail.com"],
  ["LinkedIn", "https://www.linkedin.com/in/khushbutalaviya/"],
  ["GitHub", "https://github.com/Khushbu0108"],
  // ["Dribbble", "#"],
];

export default function Contact() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end end"] });
  const scale = useTransform(scrollYProgress, [0, 1], [0.85, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [80, 0]);

  return (
    <section id="contact" ref={ref} className="relative overflow-hidden pt-32 md:pt-48">
      <div className="pointer-events-none absolute left-1/2 top-20 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-gold/10 blur-[160px]" />

      <motion.div
        style={{ scale, y }}
        className="mx-auto max-w-6xl px-6 text-center md:px-10"
      >
        <div className="eyebrow justify-center">07 — Contact</div>
        <RevealText
          as="h2"
          text="Let's build something memorable."
          className="mx-auto mt-8 max-w-4xl font-display text-5xl leading-[0.95] tracking-tightest text-bone sm:text-7xl md:text-[7rem]"
        />
        <p className="mx-auto mt-8 max-w-md text-lg text-bone/50">
          Seeking roles where software engineering, product design, and health technology converge
          to build digital tools that genuinely improve how people experience care. I reply to
          everything.
        </p>
        <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <MagneticButton href="mailto:ktalaviya573@gmail.com" variant="solid">
            ktalaviya573@gmail.com
          </MagneticButton>
          <MagneticButton
            href="/resume/Resume-3.pdf"
            variant="ghost"
            download
          >
            Download Résumé
          </MagneticButton>
        </div>
      </motion.div>

      <footer className="mt-32 border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 py-10 md:flex-row md:px-10">
          <div className="flex items-center gap-2.5">
            <span className="h-2 w-2 rounded-full bg-gold" />
            <span className="font-display text-lg">Khushbu Talaviya</span>
          </div>
          <nav className="flex flex-wrap items-center justify-center gap-6">
            {SOCIALS.map(([label, href]) => (
              <a
                key={label}
                href={href}
                className="group relative text-sm text-bone/55 transition-colors hover:text-bone"
              >
                {label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-gold transition-all duration-500 group-hover:w-full" />
              </a>
            ))}
          </nav>
          <div className="font-mono text-[11px] text-muted">© 2026 — Houston, TX</div>
        </div>
      </footer>
    </section>
  );
}
