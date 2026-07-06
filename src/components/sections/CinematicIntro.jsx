import { useEffect, useRef, useState } from "react";
import { gsap } from "../../lib/gsap";

export default function CinematicIntro({ onComplete }) {
  const root = useRef(null);
  const count = useRef(null);
  const [n, setN] = useState(0);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      onComplete?.();
      return;
    }

    const obj = { v: 0 };
    const tl = gsap.timeline({ defaults: { ease: "power3.inOut" } });

    tl.to(obj, {
      v: 100,
      duration: 2.1,
      ease: "power2.inOut",
      onUpdate: () => setN(Math.round(obj.v)),
    })
      .to(".intro-word", { y: "0%", opacity: 1, stagger: 0.12, duration: 0.9 }, 0.4)
      .to(".intro-meta", { opacity: 1, duration: 0.6 }, 1.0)
      .to(".intro-count", { opacity: 0, duration: 0.4 }, "+=0.15")
      .to(".intro-word", { y: "-110%", duration: 0.7, stagger: 0.05, ease: "power3.in" }, "-=0.1")
      .to(
        ".intro-panel",
        {
          scaleY: 0,
          transformOrigin: "top",
          duration: 1.0,
          stagger: 0.08,
          ease: "power4.inOut",
        },
        "-=0.35"
      )
      .set(root.current, { pointerEvents: "none" })
      .add(() => onComplete?.(), "-=0.6")
      .to(root.current, { autoAlpha: 0, duration: 0.3 }, "-=0.2");

    return () => tl.kill();
  }, [onComplete]);

  return (
    <div ref={root} className="fixed inset-0 z-[90] flex items-center justify-center">
      {/* layered panels that lift like a curtain */}
      <div className="absolute inset-0 flex">
        {[0, 1, 2, 3, 4].map((i) => (
          <div key={i} className="intro-panel h-full flex-1 bg-ink-900" />
        ))}
      </div>

      <div className="relative z-10 px-6 text-center">
        <div className="overflow-hidden">
          <div
            className="intro-word font-display text-5xl leading-none tracking-tightest text-bone sm:text-7xl md:text-8xl"
            style={{ transform: "translateY(110%)", opacity: 0 }}
          >
            Khushbu
          </div>
        </div>
        <div className="overflow-hidden">
          <div
            className="intro-word font-display text-5xl italic leading-none tracking-tightest text-gold sm:text-7xl md:text-8xl"
            style={{ transform: "translateY(110%)", opacity: 0 }}
          >
            Talaviya
          </div>
        </div>
        <div
          className="intro-meta eyebrow mt-7 justify-center"
          style={{ opacity: 0 }}
        >
          CS · Population Health · Product Design · Health Tech
        </div>
      </div>

      <div
        ref={count}
        className="intro-count absolute bottom-8 right-8 font-mono text-sm text-muted"
      >
        {String(n).padStart(3, "0")}
      </div>
      <div className="intro-count absolute bottom-8 left-8 font-mono text-xs uppercase tracking-eyebrow text-muted">
        Loading experience
      </div>
    </div>
  );
}
