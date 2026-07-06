import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { MagneticButton } from "../Primitives";
import { scrollToId } from "../../hooks/useLenis";
import portrait from "../../assets/portrait.jpg";

export default function Hero({ ready }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const p = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.4 });

  // Portrait: from full-bleed to a framed card that drifts right
  const imgScale = useTransform(p, [0, 1], [1, 0.46]);
  const imgX = useTransform(p, [0, 1], ["0%", "20%"]);
  const imgY = useTransform(p, [0, 1], ["0%", "-4%"]);
  const imgRadius = useTransform(p, [0, 0.4], ["0px", "26px"]);
  const imgBrightness = useTransform(p, [0, 1], [0.85, 0.62]);

  // Typography layers move at different speeds (depth)
  const nameTopX = useTransform(p, [0, 1], ["0%", "-26%"]);
  const nameBotX = useTransform(p, [0, 1], ["0%", "24%"]);
  const nameOpacity = useTransform(p, [0.05, 0.35], [0, 1]);
  const nameY = useTransform(p, [0, 1], ["0%", "-30%"]);

  // Roles reveal late & rise
  const metaOpacity = useTransform(p, [0.4, 0.7], [0, 1]);
  const metaY = useTransform(p, [0.4, 0.7], [40, 0]);

  // Background blobs — slowest layer
  const blobY = useTransform(p, [0, 1], ["0%", "40%"]);
  const blobY2 = useTransform(p, [0, 1], ["0%", "-25%"]);

  // Fade overlays out as the user begins scrolling
  const ctaOpacity = useTransform(p, [0, 0.15], [1, 0]);
  const cueOpacity = useTransform(p, [0, 0.1], [1, 0]);

  const filter = useTransform(imgBrightness, (b) => `brightness(${b})`);

  return (
    <section id="top" ref={ref} className="relative h-[230vh]">
      <div className="sticky top-0 flex h-screen items-center justify-center overflow-hidden">
        {/* atmosphere */}
        <motion.div
          style={{ y: blobY }}
          className="blob -left-40 top-10 h-[600px] w-[600px]"
        >
          <div className="h-full w-full rounded-full bg-gold/10 blur-[120px]" />
        </motion.div>
        <motion.div
          style={{ y: blobY2 }}
          className="blob -right-32 bottom-0 h-[520px] w-[520px]"
        >
          <div className="h-full w-full rounded-full bg-slate2/10 blur-[120px]" />
        </motion.div>

        {/* Oversized name — sits BEHIND the portrait */}
        <div className="pointer-events-none absolute inset-0 z-10 flex flex-col items-center justify-center">
          <motion.h1
            style={{ x: nameTopX, y: nameY, opacity: nameOpacity }}
            className="whitespace-nowrap font-display text-[20vw] font-light leading-[0.8] tracking-tightest text-bone md:text-[16vw]"
          >
            KHUSHBU
          </motion.h1>
          <motion.h1
            style={{ x: nameBotX, y: nameY, opacity: nameOpacity }}
            className="whitespace-nowrap font-display text-[20vw] font-light italic leading-[0.8] tracking-tightest text-bone/30 md:text-[16vw]"
          >
            talaviya
          </motion.h1>
        </div>

        {/* Portrait */}
        <motion.div
          style={{ scale: imgScale, x: imgX, y: imgY, borderRadius: imgRadius }}
          className="relative z-20 h-[78vh] w-[88vw] overflow-hidden md:h-[88vh] md:w-[58vh]"
        >
          <motion.img
            src={portrait}
            alt="Khushbu Talaviya"
            style={{ filter }}
            className="h-full w-full object-cover object-top grayscale-[0.15]"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-900/70 via-transparent to-ink-900/20" />
        </motion.div>

        {/* Eyebrow + roles, revealed by scroll */}
        <motion.div
          style={{ opacity: metaOpacity, y: metaY }}
          className="absolute bottom-[12vh] left-6 z-30 md:left-12"
        >
          {/* <div className="eyebrow mb-3">Portfolio — 2026</div> */}
          <p className="max-w-xs font-display text-2xl leading-tight text-bone md:text-3xl">
            Software engineer & product designer with a focus on
            <span className="italic text-gold"> health technology</span> and human-centered
            experiences.
          </p>
        </motion.div>

        {/* Intro CTA (fades in once intro done, fades out on scroll) */}
        <motion.div
          style={{ opacity: ctaOpacity }}
          className="absolute bottom-10 right-6 z-30 flex items-center gap-4 md:right-12"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={ready ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <MagneticButton href="#work" variant="ghost">
              View work
            </MagneticButton>
          </motion.div>
        </motion.div>

        {/* Scroll cue */}
        <motion.button
          onClick={() => scrollToId("#about")}
          style={{ opacity: cueOpacity }}
          className="absolute bottom-10 left-1/2 z-30 flex -translate-x-1/2 flex-col items-center gap-2 text-muted"
        >
          <span className="font-mono text-[10px] uppercase tracking-eyebrow">Scroll</span>
          <span className="relative h-10 w-px overflow-hidden bg-bone/15">
            <span className="absolute inset-x-0 top-0 h-1/2 w-px animate-[scrollline_1.8s_ease-in-out_infinite] bg-gold" />
          </span>
        </motion.button>
      </div>

      <style>{`
        @keyframes scrollline { 0%{transform:translateY(-100%)} 100%{transform:translateY(200%)} }
      `}</style>
    </section>
  );
}
