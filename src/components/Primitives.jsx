import { motion } from "framer-motion";
import useMagnetic from "../hooks/useMagnetic";
import { scrollToId } from "../hooks/useLenis";

/* ---------- Word / line reveal driven by viewport entry ---------- */
export function RevealText({ text, as = "h2", className = "", delay = 0, stagger = 0.06 }) {
  const Tag = motion[as] || motion.h2;
  const words = text.split(" ");
  return (
    <Tag
    
  className={`${className} whitespace-normal`}
  initial="hidden"
  whileInView="show"
      viewport={{ once: true, margin: "-12% 0px" }}
      variants={{ show: { transition: { staggerChildren: stagger, delayChildren: delay } } }}
    >
      {words.map((w, i) => (
        <span key={i} className="inline-block overflow-hidden align-bottom whitespace-normal">
          <motion.span
            className="inline-block"
            variants={{
              hidden: { y: "115%", rotate: 4, opacity: 0 },
              show: {
                y: "0%",
                rotate: 0,
                opacity: 1,
                transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
              },
            }}
          >
            {w}&nbsp;
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}

/* ---------- Eyebrow label ---------- */
export function Eyebrow({ children, className = "" }) {
  return (
    <motion.div
      className={`eyebrow flex items-center gap-3 ${className}`}
      initial={{ opacity: 0, x: -8 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
    >
      <span className="inline-block h-px w-8 bg-gold/60" />
      {children}
    </motion.div>
  );
}

/* ---------- Magnetic button ---------- */
export function MagneticButton({ children, href, onClick, className = "", variant = "solid" }) {
  const mag = useMagnetic(0.4);
  const styles =
    variant === "solid"
      ? "bg-bone text-ink hover:bg-gold"
      : "border border-bone/25 text-bone hover:border-gold hover:text-gold";

  const handle = (e) => {
    if (href && href.startsWith("#")) {
      e.preventDefault();
      scrollToId(href);
    }
    onClick?.(e);
  };

  const Comp = href ? "a" : "button";
  return (
    <Comp
      {...mag}
      href={href}
      onClick={handle}
      className={`group relative inline-flex items-center gap-3 rounded-full px-7 py-3.5 text-sm font-medium tracking-wide transition-colors duration-500 ease-luxe ${styles} ${className}`}
    >
      <span className="relative z-10">{children}</span>
      <span className="relative z-10 block h-1.5 w-1.5 rounded-full bg-current transition-transform duration-500 group-hover:translate-x-1" />
    </Comp>
  );
}

/* ---------- Glass card ---------- */
export function GlassCard({ children, className = "" }) {
  return (
    <div className={`glass rounded-2xl ${className}`}>{children}</div>
  );
}

/* ---------- Decorative gradient blob ---------- */
export function Blob({ className = "", color = "rgba(200,169,106,0.18)", size = 520 }) {
  return (
    <div
      className={`blob ${className}`}
      style={{ width: size, height: size, background: color }}
    />
  );
}
