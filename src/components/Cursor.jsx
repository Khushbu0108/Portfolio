import { useEffect, useRef, useState } from "react";
import { gsap } from "../lib/gsap";

export default function Cursor() {
  const dot = useRef(null);
  const ring = useRef(null);
  const glow = useRef(null);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) {
      setHidden(true);
      return;
    }

    const xs = { dot: gsap.quickTo(dot.current, "x", { duration: 0.12, ease: "power3" }) };
    const ys = { dot: gsap.quickTo(dot.current, "y", { duration: 0.12, ease: "power3" }) };
    const xr = gsap.quickTo(ring.current, "x", { duration: 0.5, ease: "power3" });
    const yr = gsap.quickTo(ring.current, "y", { duration: 0.5, ease: "power3" });
    const xg = gsap.quickTo(glow.current, "x", { duration: 0.9, ease: "power3" });
    const yg = gsap.quickTo(glow.current, "y", { duration: 0.9, ease: "power3" });

    const move = (e) => {
      xs.dot(e.clientX);
      ys.dot(e.clientY);
      xr(e.clientX);
      yr(e.clientY);
      xg(e.clientX);
      yg(e.clientY);
    };

    const enter = () => gsap.to(ring.current, { scale: 2.6, opacity: 0.5, duration: 0.4 });
    const leave = () => gsap.to(ring.current, { scale: 1, opacity: 1, duration: 0.4 });

    window.addEventListener("mousemove", move);
    const targets = () => document.querySelectorAll("a, button, [data-cursor='hover']");
    const bind = () =>
      targets().forEach((t) => {
        t.addEventListener("mouseenter", enter);
        t.addEventListener("mouseleave", leave);
      });
    bind();

    const mo = new MutationObserver(() => bind());
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("mousemove", move);
      mo.disconnect();
    };
  }, []);

  if (hidden) return null;

  return (
    <>
      <div
        ref={glow}
        className="pointer-events-none fixed left-0 top-0 z-[55] -translate-x-1/2 -translate-y-1/2"
        style={{
          width: 480,
          height: 480,
          background:
            "radial-gradient(circle, rgba(200,169,106,0.10) 0%, rgba(200,169,106,0) 60%)",
        }}
      />
      <div
        ref={ring}
        className="pointer-events-none fixed left-0 top-0 z-[70] -translate-x-1/2 -translate-y-1/2 rounded-full border border-bone/40"
        style={{ width: 34, height: 34, mixBlendMode: "difference" }}
      />
      <div
        ref={dot}
        className="pointer-events-none fixed left-0 top-0 z-[71] h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-bone"
        style={{ mixBlendMode: "difference" }}
      />
    </>
  );
}
