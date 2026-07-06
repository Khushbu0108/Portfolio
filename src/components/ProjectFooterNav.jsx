/**
 * ProjectFooterNav.jsx
 * Elegant floating navigation controls shown at the end of a project case
 * study (DigitalUH / Fusion 36°). Stays subtly fixed to the bottom of the
 * viewport and fades in once the visitor has scrolled into the project,
 * matching the existing glass / gold / bone design language.
 *
 * Usage (inside a project section, right before the closing </section>):
 *   <ProjectFooterNav onBack={onBack} onPrev={onPrev} onNext={onNext}
 *                      prevLabel="DigitalUH" nextLabel="Fusion 36°" />
 *
 * Any of onPrev / onNext may be omitted — the control simply won't render
 * that side.
 */
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ProjectFooterNav({
  onBack,
  onPrev,
  onNext,
  prevLabel = "Previous",
  nextLabel = "Next",
}) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 480);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 24 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-x-0 bottom-6 z-40 flex justify-center px-4"
        >
          <div className="glass flex items-center gap-1 rounded-full p-1.5 shadow-[0_20px_60px_-12px_rgba(0,0,0,0.6)]">
            {onPrev ? (
              <button
                onClick={onPrev}
                data-cursor="hover"
                className="group flex items-center gap-2 rounded-full px-4 py-2.5 text-xs text-bone/60 transition-colors hover:text-bone"
              >
                <span className="transition-transform group-hover:-translate-x-0.5">←</span>
                <span className="hidden font-mono uppercase tracking-eyebrow sm:inline">
                  {prevLabel}
                </span>
              </button>
            ) : (
              <span className="hidden w-[88px] sm:block" aria-hidden />
            )}

            <button
              onClick={onBack}
              data-cursor="hover"
              className="rounded-full bg-gold px-5 py-2.5 font-mono text-[11px] uppercase tracking-eyebrow text-ink transition-transform hover:scale-[1.03]"
            >
              All Work
            </button>

            {onNext ? (
              <button
                onClick={onNext}
                data-cursor="hover"
                className="group flex items-center gap-2 rounded-full px-4 py-2.5 text-xs text-bone/60 transition-colors hover:text-bone"
              >
                <span className="hidden font-mono uppercase tracking-eyebrow sm:inline">
                  {nextLabel}
                </span>
                <span className="transition-transform group-hover:translate-x-0.5">→</span>
              </button>
            ) : (
              <span className="hidden w-[88px] sm:block" aria-hidden />
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
