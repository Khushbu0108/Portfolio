import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { RevealText, Eyebrow } from "../Primitives";
import portrait from "../../assets/portrait.jpg";

const STATS = [
  ["BS", "Computer Science"],
  ["PH", "Population Health Minor"],
  ["UX", "Product & UX Design"],
];

export default function About() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["-8%", "12%"]);
  const imgScale = useTransform(scrollYProgress, [0, 1], [1.15, 1]);
  const marqueeX = useTransform(scrollYProgress, [0, 1], ["6%", "-24%"]);

  return (
    <section id="about" ref={ref} className="relative overflow-hidden py-32 md:py-48">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <Eyebrow>01 — About</Eyebrow>

        <div className="mt-12 grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-16">
          {/* Portrait, parallaxed */}
          <div className="md:col-span-4">
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl">
              <motion.img
                src={portrait}
                alt="Khushbu Talaviya"
                style={{ y: imgY, scale: imgScale }}
                className="h-[116%] w-full object-cover object-center grayscale-[0.2]"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-ink-900/40 to-transparent" />
              <div className="glass absolute bottom-4 left-4 rounded-full px-4 py-2 font-mono text-[11px] tracking-wide text-bone/80">
                Houston, TX
              </div>
            </div>
          </div>

          {/* Statement */}
          <div className="flex flex-col justify-center md:col-span-8">
            <div className="max-w-4xl">
              <RevealText
                as="h2"
                text="I build thoughtful digital products at the intersection of software engineering, design, and healthcare."
                className="font-display text-3xl leading-[1.08] tracking-tight text-bone sm:text-4xl md:text-[2.9rem] lg:text-[3.1rem]"
              />
            </div>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="mt-8 max-w-xl text-lg leading-relaxed text-bone/55"
            >
              As a Computer Science student with a Population Health minor, I work at the
              intersection of software engineering, human-centered design, and health
              technology, building frontend systems and digital products that are as
              considered in their architecture as they are in their experience. I'm drawn
              to problems where clinical complexity meets everyday usability, and where
              good engineering and intentional design together determine whether something
              actually works for people.
            </motion.p>

            <div className="mt-12 grid grid-cols-3 gap-6 border-t border-white/10 pt-8">
              {STATS.map(([big, small], i) => (
                <motion.div
                  key={big}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.1 * i }}
                >
                  <div className="font-display text-3xl text-gold md:text-4xl">
                    {big}
                  </div>
                  <div className="mt-1 text-xs uppercase tracking-wide text-muted">
                    {small}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* Drifting marquee, opposite scroll direction */}
      <motion.div
        style={{ x: marqueeX }}
        className="mt-28 flex select-none whitespace-nowrap font-display text-[10vw] leading-none tracking-tightest text-bone/[0.06] md:text-[7vw]"
        aria-hidden
      >
        Health Informatics · Medical Informatics · Digital Health · Human-Centered Design · Product Strategy · UX Research · Interaction Design · Design Systems · Front-End Engineering · Healthcare Technology ·
        Health Informatics · Medical Informatics · Digital Health ·
      </motion.div>
    </section>
  );
}
