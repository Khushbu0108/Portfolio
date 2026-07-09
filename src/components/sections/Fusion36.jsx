

// import { useRef } from "react";
// import { motion, useScroll, useTransform } from "framer-motion";
// import { Eyebrow, GlassCard } from "../Primitives";
// import ProjectFooterNav from "../ProjectFooterNav";

// const META = [
//   ["Role", "Product Design · Frontend Engineering"],
//   ["Year", "2026"],
//   ["Stack", "React · TypeScript · Vite · Tailwind · Framer Motion"],
//   ["Type", "0→1 Product Design & Engineering"],
// ];

// const PROBLEMS = [
//   ["No Digital Presence", "The shop had no website, no ordering platform, and no way for customers to explore the menu before arriving."],
//   ["Manual Ordering Only", "Every order was placed in person or by phone such asno customization, no order history, no pickup queue."],
//   ["No Drink Customization", "Customers couldn't build drinks online. Specialty modifications were communicated verbally, creating frequent errors."],
//   ["No Pickup Workflow", "Staff had no visibility into incoming orders. There was no queue, no status tracking, no digital handoff."],
//   ["Weak Digital Branding", "The brand had no visual identity online like no cohesive typography, color system, or digital presence to build on."],
// ];

// const GOALS = [
//   ["Premium Digital Presence", "Build a web platform that reflects the shop's craft and quality, not a generic ordering widget."],
//   ["Interactive Drink Builder", "Let customers configure every element of their drink such as base, milk, sweetness, ice, toppings before checkout."],
//   ["Streamlined Pickup Flow", "Give customers order confirmation and status; give staff a live dashboard to manage the queue."],
//   ["Modern Customer Experience", "Make browsing the menu, building a drink, and placing an order feel like using a product from a specialty brand."],
// ];

// const ROLES = [
//   ["Product Strategy", "Defined scope, prioritized features, and mapped end-to-end customer and staff workflows before writing code."],
//   ["UX Research", "Studied specialty coffee and boba ordering experiences in-store, mobile, and web to identify conventions and opportunities."],
//   ["UI Design", "Built a warm, premium visual system: typography, color, spacing, and component patterns grounded in the shop's identity."],
//   ["Frontend Engineering", "Implemented the full application in React with TypeScript, managing complex state across the drink builder, cart, and dashboards."],
//   ["Component Architecture", "Designed a reusable component library such as menus, configurators, cards, dashboards built to scale with new categories and features."],
//   ["Motion Design", "Used Framer Motion for physics-based animations in the drink builder and page transitions that feel deliberate, not decorative."],
// ];

// const FEATURES = [
//   ["Drink Builder", "A physics-based interactive configurator with live interactive glass rendering, category-aware liquid fill animations, and boba/ice particle effects."],
//   ["Full Menu System", "75+ drinks across 8 categories, each with size, milk, sweetness, ice, and topping variants, structured with TypeScript interfaces."],
//   ["Cart & Checkout", "Persistent cart with modifier summary, pricing breakdown, and order submission flow with confirmation state."],
//   ["Staff Dashboard", "Live order queue with status management like pending, in progress, ready giving staff clear visibility into every order."],
//   ["Owner Analytics", "Sales trends, top items, hourly volume, and revenue charts built with Recharts and LocalStorage order history."],
//   ["Mobile Responsive", "Every screen like configurator, menu, cart, dashboards adapts to phone, tablet, and desktop without layout compromise."],
// ];

// const ARCH = [
//   ["Frontend", "React · TypeScript · Vite", "Component-driven architecture with strict TypeScript interfaces for drinks, orders, cart items, and modifier options."],
//   ["Styling", "Tailwind CSS · Custom Tokens", "A warm design system such as cream, brown, gold expressed as Tailwind config tokens for consistent theming across all surfaces."],
//   ["Animation",
//   "Framer Motion",
//   "Crafted smooth page transitions, scroll-based interactions, hover effects, and micro-interactions using Framer Motion to create a polished and engaging user experience."],
//   ["Data Layer", "LocalStorage · State", "Order history, cart state, and menu data managed in React context and persisted to LocalStorage pending a backend API."],
// ];

// const CHALLENGES = [
//   {
//     n: "01",
//     title: "The Interactive Drink Builder",
//     body : "Designing an interactive drink customization experience required structuring complex user flows while keeping the interface intuitive. I focused on managing dynamic selections, providing real-time visual feedback, and creating a seamless ordering experience that remained responsive and easy to navigate across multiple customization options.",  },
//   {
//     n: "02",
//     title: "Connecting Customer & Staff Workflows",
//     body: "A single order had to move coherently from customer configuration → cart → checkout → staff queue → status update → customer confirmation. Designing this as a shared data model rather than isolated screens meant every surface stayed in sync without a real-time backend during the prototype phase.",
//   },
//   {
//     n: "03",
//     title: "Keeping Ordering Simple",
//     body: "A drink with five modifier dimensions (size, milk, sweetness, ice, toppings) can generate hundreds of combinations. The UX challenge was progressive disclosure surfacing relevant options at the right moment without making a casual order feel like filling out a form.",
//   },
// ];

// const PRINCIPLES = [
//   ["Warm Minimalism", "The UI uses restraint with generous whitespace, a limited palette, careful typography. So the product photography and drink visuals carry the visual weight."],
//   ["Motion With Purpose", "Every animation in the drink builder communicates cause and effect. The liquid fills when you choose a base. Ice appears when you select it. Nothing animates decoratively."],
//   ["Accessible Defaults", "Color contrast, focus states, and tap targets were treated as baseline requirements, not afterthoughts especially important for a public-facing ordering tool."],
//   ["Consistent Component Language", "Every card, button, modal, and form input shares the same visual DNA. New menu categories and features can be added without breaking the system."],
// ];

// const OUTCOMES = [
//   ["75+", "Drinks engineered"],
//   ["8", "Menu categories"],
//   ["3", "User surfaces — customer, staff, owner"],
//   ["1", "Coherent product system"],
// ];

// const SKILLS = [
//   "Product Thinking", "Frontend Engineering", "React", "TypeScript",
//   "State Management", "UI Engineering", "Responsive Design",
//   "Framer Motion", "Component Architecture", "UX Design",
//   "Information Architecture", "Dashboard Design", "Business Workflow Design",
// ];

// export default function Fusion36({ onBack, onPrev, onNext } = {}) {
//   const cardRef = useRef(null);
//   const { scrollYProgress: cardScroll } = useScroll({
//     target: cardRef,
//     offset: ["start end", "end start"],
//   });
//   const cardY1 = useTransform(cardScroll, [0, 1], [60, -80]);
//   const cardY2 = useTransform(cardScroll, [0, 1], [-40, 90]);

//   return (
//     <section id="fusion36" className="relative">

//       {/* ── Intro ── */}
//       <div className="mx-auto max-w-7xl px-6 pt-32 md:px-10 md:pt-48">
//         <Eyebrow>04 — Case Study</Eyebrow>
//         <div className="mt-8 flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
//           <motion.h2
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
//             className="font-display text-6xl leading-[0.9] tracking-tightest text-bone md:text-[8rem]"
//           >
//             Fusion{" "}
//             <span className="italic text-gold">36°</span>
//           </motion.h2>
//           <p className="max-w-sm text-bone/55">
//             A specialty coffee and boba shop with loyal customers and no digital surface to
//             match. Fusion 36° is the product I designed and engineered to close that gap —
//             a single ordering system, built mobile-first and refined for desktop, where
//             browsing, customizing, and checking out feel like one continuous experience
//             instead of three different ones.
//           </p>
//         </div>

//         {/* <p className="mt-8 max-w-3xl text-bone/45">
//           This wasn't a coffee shop website. It was a 0→1 product problem: translate an
//           in-person, verbal ordering ritual into an interface that scales across devices
//           without losing what made the brand feel premium. I owned it end to end, from
//           research and information architecture through the interaction design of the
//           drink builder to the production React/TypeScript codebase that ships it,
//           balancing brand identity, accessibility, and responsive layout at every
//           decision point.
//         </p> */}

//         <div className="mt-6 flex flex-wrap gap-2">
//           {["Product Thinking", "UX Strategy", "Frontend Engineering", "Responsive Design", "Interaction Design", "Brand Identity", "Cross-Device Experience"].map((d) => (
//             <span
//               key={d}
//               className="rounded-full border border-gold/25 bg-gold/[0.06] px-3 py-1.5 font-mono text-[10px] uppercase tracking-wide text-gold/80"
//             >
//               {d}
//             </span>
//           ))}
//         </div>

//         <div className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/5 md:grid-cols-4">
//           {META.map(([k, v]) => (
//             <div key={k} className="bg-ink-900 p-5">
//               <div className="font-mono text-[10px] uppercase tracking-eyebrow text-muted">{k}</div>
//               <div className="mt-2 text-bone">{v}</div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* ── Hero Visual Placeholder ── */}
//       {/* ── Hero Visual ── */}
// <div className="mx-auto mt-16 max-w-7xl px-6 md:px-10">
// <div
//   className="relative overflow-hidden rounded-3xl border border-white/8 bg-[#111]"
//   style={{ height: "90vh" }}
// >
//     <img
//   src="/images/fuison_images/landing.png"
//   alt="Fusion 36 Platform Overview"
//   className="w-full h-full object-cover object-top"
//   draggable={false}
// />

// <div className="absolute inset-0 bg-black/10" />
// </div>

   
// </div>
//           {/* ambient glow
//           <div className="pointer-events-none absolute left-1/4 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-gold/10 blur-[100px]" />
//           <div className="pointer-events-none absolute right-1/4 top-1/2 h-48 w-48 -translate-y-1/2 rounded-full bg-[#8B4513]/20 blur-[80px]" />
//         </div>
//       </div> */}

//       {/* ── Problem ── */}
//       <div className="mx-auto max-w-7xl px-6 pt-28 pb-20 md:px-10 md:pt-40">
//         <Eyebrow>The Problem</Eyebrow>
//         <h3 className="mt-6 max-w-2xl font-display text-3xl leading-tight tracking-tight text-bone md:text-5xl">
//           A great product with no digital surface to show for it.
//         </h3>
//         <p className="mt-5 max-w-xl text-bone/50">
//           Fusion 36 Degree had loyal customers and quality drinks but no way to reach people
//           online, take orders digitally, or give staff any operational visibility.
//         </p>
//         <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
//           {PROBLEMS.map(([title, desc], i) => (
//             <motion.div
//               key={title}
//               initial={{ opacity: 0, y: 26 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true, margin: "-8%" }}
//               transition={{ duration: 0.6, delay: (i % 3) * 0.07, ease: [0.16, 1, 0.3, 1] }}
//             >
//               <div
//                 data-cursor="hover"
//                 className="group h-full rounded-2xl border border-white/8 bg-white/[0.02] p-6 transition-all duration-500 hover:-translate-y-1.5 hover:border-gold/40 hover:bg-white/[0.05]"
//               >
//                 <div className="font-mono text-xs text-gold/70">Problem 0{i + 1}</div>
//                 <div className="mt-4 font-display text-xl text-bone">{title}</div>
//                 <p className="mt-2 text-sm leading-relaxed text-bone/45">{desc}</p>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>

//       {/* ── Goals ── */}
//       <div className="mx-auto max-w-7xl px-6 pb-28 md:px-10 md:pb-40">
//         <Eyebrow>Goals</Eyebrow>
//         <h3 className="mt-6 max-w-2xl font-display text-3xl leading-tight tracking-tight text-bone md:text-5xl">
//           Four things the platform had to get right.
//         </h3>
//         <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2">
//           {GOALS.map(([title, desc], i) => (
//             <motion.div
//               key={title}
//               initial={{ opacity: 0, y: 26 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true, margin: "-8%" }}
//               transition={{ duration: 0.6, delay: (i % 2) * 0.1, ease: [0.16, 1, 0.3, 1] }}
//               data-cursor="hover"
//               className="group rounded-2xl border border-white/8 bg-white/[0.02] p-7 transition-all duration-500 hover:-translate-y-1.5 hover:border-gold/40 hover:bg-white/[0.05]"
//             >
//               <div className="flex items-start justify-between">
//                 <div className="font-display text-xl text-bone">{title}</div>
//                 <div className="font-mono text-xs text-gold/60">0{i + 1}</div>
//               </div>
//               <p className="mt-3 text-sm leading-relaxed text-bone/45">{desc}</p>
//             </motion.div>
//           ))}
//         </div>
//       </div>

//       {/* ── My Role ── */}
//       <div className="mx-auto max-w-7xl px-6 pb-28 md:px-10 md:pb-40">
//         <Eyebrow>My Role</Eyebrow>
//         <h3 className="mt-6 max-w-2xl font-display text-3xl leading-tight tracking-tight text-bone md:text-5xl">
//           Sole designer and engineer, end-to-end.
//         </h3>
//         <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/5 sm:grid-cols-2 lg:grid-cols-3">
//           {ROLES.map(([title, desc], i) => (
//             <motion.div
//               key={title}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true, margin: "-8%" }}
//               transition={{ duration: 0.6, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
//               className="bg-ink-900 p-6"
//             >
//               <div className="font-display text-lg text-gold">{title}</div>
//               <p className="mt-3 text-sm leading-relaxed text-bone/45">{desc}</p>
//             </motion.div>
//           ))}
//         </div>
//       </div>

//       {/* ── Research ── */}
//       <div className="mx-auto max-w-7xl px-6 pb-28 md:px-10 md:pb-40">
//         <Eyebrow>Research & Inspiration</Eyebrow>
//         <h3 className="mt-6 max-w-2xl font-display text-3xl leading-tight tracking-tight text-bone md:text-5xl">
//           Built from observation, not assumption.
//         </h3>
//         <p className="mt-5 max-w-xl text-bone/50">
//           Before designing a single screen, I studied how specialty coffee brands, luxury product
//           configurators, and mobile ordering systems structure the experience between browsing,
//           personalizing, and placing an order.
//         </p>
//         <div className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/5 md:grid-cols-5">
//           {["Product Configurators", "Specialty Coffee Brands", "Luxury Product Experiences", "Mobile Ordering Apps", "Modern UX Systems"].map((item, i) => (
//             <motion.div
//               key={item}
//               initial={{ opacity: 0, y: 16 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.5, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
//               className="bg-ink-900 p-6"
//             >
//               <div className="font-mono text-[10px] uppercase tracking-eyebrow text-gold/60">0{i + 1}</div>
//               <div className="mt-3 font-display text-base text-bone">{item}</div>
//             </motion.div>
//           ))}
//         </div>

//         {/* ── 1 · User Personas ── */}
//         <div className="mt-20">
//           <div className="flex items-baseline gap-4">
//             <div className="font-mono text-[10px] uppercase tracking-eyebrow text-gold/60">01 · Who I designed for</div>
//             <div className="h-px flex-1 bg-white/8" />
//           </div>
//           <h4 className="mt-5 font-display text-2xl tracking-tight text-bone md:text-3xl">User Personas</h4>
//           <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
//             {[
//               { n: "01", name: "Busy Student", goal: "Order quickly between classes", pain: "Long lines and waiting", need: "Fast pickup and simple customization" },
//               { n: "02", name: "Coffee Enthusiast", goal: "Personalize every drink", pain: "Limited customization", need: "Rich drink builder with live preview" },
//               { n: "03", name: "Store Staff", goal: "Manage incoming orders efficiently", pain: "Manual order tracking", need: "Clear dashboard and order queue" },
//             ].map((p, i) => (
//               <motion.div
//                 key={p.name}
//                 initial={{ opacity: 0, y: 26 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true, margin: "-8%" }}
//                 transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
//               >
//                 <div
//                   data-cursor="hover"
//                   className="group h-full rounded-2xl border border-white/8 bg-white/[0.02] p-6 transition-all duration-500 hover:-translate-y-1.5 hover:border-gold/40 hover:bg-white/[0.05]"
//                 >
//                   <div className="flex items-center justify-between">
//                     <div className="font-mono text-xs text-gold/70">Persona {p.n}</div>
//                     <div className="h-8 w-8 rounded-full border border-white/10 bg-white/[0.03] font-mono text-[11px] leading-8 text-center text-bone/40 transition-colors duration-500 group-hover:border-gold/40 group-hover:text-gold/70">{p.n}</div>
//                   </div>
//                   <div className="mt-4 font-display text-xl text-bone">{p.name}</div>
//                   <div className="mt-5 space-y-3">
//                     {[["Goal", p.goal], ["Pain Point", p.pain], ["Need", p.need]].map(([label, val]) => (
//                       <div key={label}>
//                         <div className="font-mono text-[9px] uppercase tracking-eyebrow text-muted">{label}</div>
//                         <div className="mt-1 text-sm leading-relaxed text-bone/55">{val}</div>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>

//         {/* ── 2 · Customer Journey ── */}
//         <div className="mt-20">
//           <div className="flex items-baseline gap-4">
//             <div className="font-mono text-[10px] uppercase tracking-eyebrow text-gold/60">02 · The path to a drink</div>
//             <div className="h-px flex-1 bg-white/8" />
//           </div>
//           <h4 className="mt-5 font-display text-2xl tracking-tight text-bone md:text-3xl">Customer Journey</h4>
//           <div className="mt-8 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/5 sm:grid-cols-2 md:grid-cols-5">
//             {[
//               ["Discover", "Customers arrive craving something specific but open to being guided."],
//               ["Browse Menu", "Clear categories let them scan the range without feeling overwhelmed."],
//               ["Customize Drink", "Live preview turns configuration into a confident, playful moment."],
//               ["Checkout", "A transparent summary removes any doubt before they commit."],
//               ["Pickup", "A visible order status closes the loop and builds trust for next time."],
//             ].map(([step, insight], i) => (
//               <motion.div
//                 key={step}
//                 initial={{ opacity: 0, y: 16 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.5, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
//                 className="bg-ink-900 p-6"
//               >
//                 <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-eyebrow text-gold/60">
//                   <span>0{i + 1}</span>
//                   {i < 4 && <span className="hidden text-gold/30 md:inline">→</span>}
//                 </div>
//                 <div className="mt-3 font-display text-base text-bone">{step}</div>
//                 <p className="mt-2 text-xs leading-relaxed text-bone/45">{insight}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>

//         {/* ── 3 · Competitive Analysis ── */}
//         <div className="mt-20">
//           <div className="flex items-baseline gap-4">
//             <div className="font-mono text-[10px] uppercase tracking-eyebrow text-gold/60">03 · Where the market falls short</div>
//             <div className="h-px flex-1 bg-white/8" />
//           </div>
//           <h4 className="mt-5 font-display text-2xl tracking-tight text-bone md:text-3xl">Competitive Analysis</h4>
//           <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
//             {[
//               ["Starbucks", "Strong mobile ordering", "Complex customization"],
//               ["Blue Bottle", "Premium branding", "Limited personalization"],
//               ["Gong Cha", "Wide drink selection", "Less intuitive digital experience"],
//               ["Sharetea", "Familiar ordering flow", "Minimal product storytelling"],
//             ].map(([brand, pro, con], i) => (
//               <motion.div
//                 key={brand}
//                 initial={{ opacity: 0, y: 26 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true, margin: "-8%" }}
//                 transition={{ duration: 0.6, delay: (i % 4) * 0.07, ease: [0.16, 1, 0.3, 1] }}
//               >
//                 <div
//                   data-cursor="hover"
//                   className="group h-full rounded-2xl border border-white/8 bg-white/[0.02] p-6 transition-all duration-500 hover:-translate-y-1.5 hover:border-gold/40 hover:bg-white/[0.05]"
//                 >
//                   <div className="font-display text-lg text-bone">{brand}</div>
//                   <div className="mt-5 space-y-3">
//                     <div className="flex items-start gap-2.5">
//                       <span className="mt-px font-mono text-sm text-gold">✓</span>
//                       <span className="text-sm leading-relaxed text-bone/55">{pro}</span>
//                     </div>
//                     <div className="flex items-start gap-2.5">
//                       <span className="mt-px font-mono text-sm text-bone/30">✕</span>
//                       <span className="text-sm leading-relaxed text-bone/40">{con}</span>
//                     </div>
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>

//           {/* Highlighted differentiator */}
//           <motion.div
//             initial={{ opacity: 0, y: 26 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true, margin: "-8%" }}
//             transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
//             className="relative mt-4 overflow-hidden rounded-2xl border border-gold/30 bg-gradient-to-br from-[#3B1F0A]/40 via-ink-900 to-ink-900 p-8 md:p-10"
//           >
//             <div className="pointer-events-none absolute left-1/4 top-1/2 h-40 w-40 -translate-y-1/2 rounded-full bg-gold/10 blur-[90px]" />
//             <div className="relative flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
//               <div className="max-w-2xl">
//                 <div className="font-mono text-[10px] uppercase tracking-eyebrow text-gold/60">The opportunity</div>
//                 <div className="mt-3 font-display text-2xl text-bone md:text-3xl">
//                   Fusion <span className="italic text-gold">36°</span>
//                 </div>
//                 <p className="mt-3 text-sm leading-relaxed text-bone/55">
//                   Combines premium branding, rich customization, intuitive ordering, and staff
//                   workflow into one unified experience.
//                 </p>
//               </div>
//               <div className="flex flex-wrap gap-2 md:max-w-[40%] md:justify-end">
//                 {["Premium branding", "Rich customization", "Intuitive ordering", "Staff workflow"].map((tag) => (
//                   <span
//                     key={tag}
//                     className="rounded-full border border-gold/25 bg-white/[0.03] px-3 py-1 font-mono text-[10px] uppercase tracking-wide text-gold/70"
//                   >
//                     {tag}
//                   </span>
//                 ))}
//               </div>
//             </div>
//           </motion.div>
//         </div>

//         {/* ── 4 · Key UX Insights ── */}
//         <div className="mt-20">
//           <div className="flex items-baseline gap-4">
//             <div className="font-mono text-[10px] uppercase tracking-eyebrow text-gold/60">04 · What the research surfaced</div>
//             <div className="h-px flex-1 bg-white/8" />
//           </div>
//           <h4 className="mt-5 font-display text-2xl tracking-tight text-bone md:text-3xl">Key UX Insights</h4>
//           <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
//             {[
//               "Customers value speed as much as customization.",
//               "Progressive disclosure reduces decision fatigue.",
//               "Visual feedback increases confidence while ordering.",
//               "Staff workflows should be designed alongside customer flows.",
//             ].map((insight, i) => (
//               <motion.div
//                 key={insight}
//                 initial={{ opacity: 0, y: 26 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true, margin: "-8%" }}
//                 transition={{ duration: 0.6, delay: (i % 4) * 0.07, ease: [0.16, 1, 0.3, 1] }}
//               >
//                 <div
//                   data-cursor="hover"
//                   className="group h-full rounded-2xl border border-white/8 bg-white/[0.02] p-6 transition-all duration-500 hover:-translate-y-1.5 hover:border-gold/40 hover:bg-white/[0.05]"
//                 >
//                   <div className="font-mono text-xs text-gold/70">0{i + 1}</div>
//                   <p className="mt-4 text-sm leading-relaxed text-bone/70">{insight}</p>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* ── Solution: Features ── */}
//       <div className="mx-auto max-w-7xl px-6 pb-20 md:px-10">
//         <Eyebrow>The Solution</Eyebrow>
//         <h3 className="mt-6 max-w-2xl font-display text-3xl leading-tight tracking-tight text-bone md:text-5xl">
//           One platform. Three surfaces. End-to-end.
//         </h3>
//         <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
//           {FEATURES.map(([title, desc], i) => (
//             <motion.div
//               key={title}
//               initial={{ opacity: 0, y: 26 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true, margin: "-8%" }}
//               transition={{ duration: 0.6, delay: (i % 3) * 0.07, ease: [0.16, 1, 0.3, 1] }}
//             >
//               <div
//                 data-cursor="hover"
//                 className="group h-full rounded-2xl border border-white/8 bg-white/[0.02] p-6 transition-all duration-500 hover:-translate-y-1.5 hover:border-gold/40 hover:bg-white/[0.05]"
//               >
//                 <div className="font-mono text-xs text-gold">0{i + 1}</div>
//                 <div className="mt-4 font-display text-xl text-bone">{title}</div>
//                 <p className="mt-2 text-sm leading-relaxed text-bone/45">{desc}</p>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>

//       {/* ── Screen Placeholders ── */}
//       <div className="mx-auto max-w-7xl px-6 pb-28 md:px-10 md:pb-40" ref={cardRef}>
//         <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
//           {[
//             ["Customer · Ordering Flow", "Menu browsing, drink builder, cart and checkout — the full customer journey.", "Order Flow Screenshot"],
//             ["Staff · Queue Dashboard", "Live incoming orders, status updates, and queue management for shop staff.", "Staff Dashboard Screenshot"],
//             ["Owner · Analytics", "Sales trends, top items, and revenue charts built for the business owner.", "Owner Analytics Screenshot"],
//           ].map(([label, desc, placeholder], i) => (
//             <motion.div
//               key={label}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true, margin: "-8%" }}
//               transition={{ duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
//             >
//               <div className="overflow-hidden rounded-2xl border border-white/8 bg-white/[0.02]">
//               {/* <div
//   className="relative overflow-hidden border-b border-white/8"
//   style={{ height: "34vh" }}
// >
//   <img
//     src={
//       i === 0
//         ? "/images/fuison_images/web_home.png"
//         : i === 1
//         ? "/images/fuison_images/staff.png"
//         : "/images/fuison_images/owner.png"
//     }
//     alt={label}
//     className="h-full w-full object-cover object-center"
//     draggable={false}
//   />
// </div> */}

// <div
//   className="relative overflow-hidden border-b border-white/8 bg-[#111]"
//   style={{ height: "26vh" }}
// >
//   <img
//     src={
//       i === 0
//         ? "/images/fuison_images/web_home.png"
//         : i === 1
//         ? "/images/fuison_images/staff.png"
//         : "/images/fuison_images/owner.png"
//     }
//     alt={label}
//     className="w-full h-full object-cover object-top"
//     draggable={false}
//   />
// </div>
//                 <div className="p-5">
//                   <div className="font-display text-base text-bone">{label.split(" · ")[1]}</div>
//                   <p className="mt-2 text-sm leading-relaxed text-bone/40">{desc}</p>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>

//         {/* ── Interactive Drink Builder — product showcase ── */}
//         <div className="mt-16 grid grid-cols-1 items-center gap-8 lg:grid-cols-5 lg:gap-12">
//           {/* Video — left column (~60%) */}
//           <motion.div
//             initial={{ opacity: 0, y: 28 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true, margin: "-8%" }}
//             transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
//             whileHover={{ y: -6 }}
//             data-cursor="hover"
//             className="relative lg:col-span-3"
//           >
//             {/* soft floating glow behind the video (painted first, sits behind) */}
//             <div className="pointer-events-none absolute -inset-6 rounded-[2.25rem] bg-gold/10 blur-[90px]" />

//             {/* gentle floating wrapper */}
//             <motion.div
//               animate={{ y: [0, -9, 0] }}
//               transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
//               className="group relative overflow-hidden rounded-2xl border border-white/10 shadow-2xl shadow-black/50 transition-colors duration-500 hover:border-gold/30"
//             >
//               <div className="relative flex aspect-[4/5] items-center justify-center overflow-hidden bg-gradient-to-br from-[#3B1F0A]/40 via-ink-900 to-ink-900 sm:aspect-[5/4]">
//                 <div className="pointer-events-none absolute inset-0 [background-image:radial-gradient(circle_at_1px_1px,rgba(200,169,106,0.06)_1px,transparent_0)] [background-size:24px_24px]" />
//                 <div className="pointer-events-none absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/10 blur-[80px]" />
//                 <video
//                   autoPlay
//                   loop
//                   muted
//                   playsInline
//                   preload="metadata"
//                   controls={false}
//                   className="relative h-full w-full object-contain"
//                 >
//                   <source src="/videos/drink-builder.mp4" type="video/mp4"  />
//                 </video>

//                 {/* Live Demo badge */}
//                 <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full border border-white/10 bg-black/40 px-3 py-1.5 backdrop-blur-md">
//                   <span className="relative flex h-2 w-2">
//                     <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400/70" />
//                     <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
//                   </span>
//                   <span className="font-mono text-[10px] uppercase tracking-eyebrow text-bone/80">Live Demo</span>
//                 </div>
//               </div>
//             </motion.div>
//           </motion.div>

//           {/* Copy + features — right column (~40%) */}
//           <motion.div
//             initial={{ opacity: 0, y: 28 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true, margin: "-8%" }}
//             transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
//             className="lg:col-span-2"
//           >
//             <div className="font-mono text-[10px] uppercase tracking-eyebrow text-gold/60">The centerpiece</div>
//             <h4 className="mt-4 font-display text-2xl leading-tight tracking-tight text-bone md:text-3xl">
//               Interactive Drink Builder
//             </h4>
//             <p className="mt-4 text-sm leading-relaxed text-bone/45">
//               A live customization experience where customers personalize base, milk, sweetness, ice, and toppings
//               with the cup updating in real time for a smooth, confident ordering flow.
//             </p>

//             <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-1">
//               {[
//                 ["Live Cup Preview", "Updates instantly as ingredients change."],
//                 ["Smart Customization", "Personalize size, milk, sweetness, ice, and toppings."],
//                 ["Smooth Ordering Flow", "Progressive interactions reduce decision fatigue."],
//                 ["Mobile First", "Designed for quick ordering on any device."],
//               ].map(([title, desc], i) => (
//                 <motion.div
//                   key={title}
//                   initial={{ opacity: 0, y: 16 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true, margin: "-8%" }}
//                   transition={{ duration: 0.5, delay: 0.15 + i * 0.07, ease: [0.16, 1, 0.3, 1] }}
//                   data-cursor="hover"
//                   className="group rounded-xl border border-white/8 bg-white/[0.02] p-4 transition-all duration-500 hover:-translate-y-1 hover:border-gold/40 hover:bg-white/[0.05]"
//                 >
//                   <div className="flex items-start gap-3">
//                     <span className="mt-0.5 font-mono text-xs text-gold/70 transition-colors duration-500 group-hover:text-gold">✓</span>
//                     <div>
//                       <div className="font-display text-sm text-bone">{title}</div>
//                       <p className="mt-1 text-xs leading-relaxed text-bone/40">{desc}</p>
//                     </div>
//                   </div>
//                 </motion.div>
//               ))}
//             </div>
//           </motion.div>
//         </div>
//       </div>

//       {/* ── Technical Architecture ── */}
//       <div className="mx-auto max-w-7xl px-6 pb-28 md:px-10 md:pb-40">
//         <Eyebrow>Technical Architecture</Eyebrow>
//         <h3 className="mt-6 max-w-2xl font-display text-3xl leading-tight tracking-tight text-bone md:text-5xl">
//           Designed to extend. Built to ship now.
//         </h3>
//         <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/5 md:grid-cols-4">
//           {ARCH.map(([label, tech, desc], i) => (
//             <motion.div
//               key={label}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true, margin: "-8%" }}
//               transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
//               className="bg-ink-900 p-6"
//             >
//               <div className="font-mono text-[10px] uppercase tracking-eyebrow text-muted">{label}</div>
//               <div className="mt-3 font-display text-lg text-gold">{tech}</div>
//               <p className="mt-3 text-sm leading-relaxed text-bone/45">{desc}</p>
//             </motion.div>
//           ))}
//         </div>
//       </div>

//       {/* ── Engineering Challenges ── */}
//       <div className="mx-auto max-w-7xl px-6 pb-28 md:px-10 md:pb-40">
//         <Eyebrow>Engineering Challenges</Eyebrow>
//         <h3 className="mt-6 max-w-2xl font-display text-3xl leading-tight tracking-tight text-bone md:text-5xl">
//           The problems that shaped the architecture.
//         </h3>
//         <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
//           {CHALLENGES.map((c, i) => (
//             <motion.div
//               key={c.n}
//               initial={{ opacity: 0, y: 26 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true, margin: "-8%" }}
//               transition={{ duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
//               data-cursor="hover"
//               className="group rounded-2xl border border-white/8 bg-white/[0.02] p-7 transition-all duration-500 hover:-translate-y-1.5 hover:border-gold/40 hover:bg-white/[0.05]"
//             >
//               <div className="font-mono text-xs text-gold">{c.n}</div>
//               <div className="mt-4 font-display text-xl text-bone">{c.title}</div>
//               <p className="mt-3 text-sm leading-relaxed text-bone/45">{c.body}</p>
//             </motion.div>
//           ))}
//         </div>
//       </div>

//       {/* ── Design Principles ── */}
//       <div className="mx-auto max-w-7xl px-6 pb-28 md:px-10 md:pb-40">
//         <Eyebrow>Design Principles</Eyebrow>
//         <h3 className="mt-6 max-w-2xl font-display text-3xl leading-tight tracking-tight text-bone md:text-5xl">
//           The values behind every decision.
//         </h3>
//         <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2">
//           {PRINCIPLES.map(([title, desc], i) => (
//             <motion.div
//               key={title}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true, margin: "-8%" }}
//               transition={{ duration: 0.6, delay: (i % 2) * 0.1, ease: [0.16, 1, 0.3, 1] }}
//               className="rounded-2xl border border-white/8 bg-white/[0.02] p-7"
//             >
//               <div className="font-display text-xl text-gold">{title}</div>
//               <p className="mt-3 text-sm leading-relaxed text-bone/45">{desc}</p>
//             </motion.div>
//           ))}
//         </div>
//       </div>

//       {/* ── Outcome ── */}
//       <div className="mx-auto max-w-7xl px-6 pb-28 md:px-10 md:pb-40">
//         <div className="rounded-2xl border border-gold/20 bg-gold/[0.04] p-8 md:p-10">
//           <div className="font-mono text-[10px] uppercase tracking-eyebrow text-gold">Outcome</div>
//           <p className="mt-4 max-w-3xl font-display text-2xl leading-snug text-bone md:text-3xl">
//             A local shop that had no digital presence now has a complete ordering platform with
//             a customer experience that matches the quality of the product itself.
//           </p>
//           <p className="mt-5 max-w-2xl text-sm leading-relaxed text-bone/50">
//             Beyond the customer-facing surface, the project demonstrated how a single engineer
//             thinking in systems like data model first, then UI, then workflows which can ship a coherent
//             multi-surface product without a team. The architecture is ready for a real backend and
//             payment integration when the business is ready to deploy.
//           </p>
//           <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4">
//             {OUTCOMES.map(([n, label]) => (
//               <div key={label}>
//                 <div className="font-display text-4xl text-gold md:text-5xl">{n}</div>
//                 <div className="mt-1 text-xs text-bone/45">{label}</div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* ── Skills ── */}
//       <div className="mx-auto max-w-7xl px-6 pb-28 md:px-10 md:pb-40">
//         <Eyebrow>Skills Demonstrated</Eyebrow>
//         <div className="mt-10 flex flex-wrap gap-3">
//           {SKILLS.map((s, i) => (
//             <motion.span
//               key={s}
//               initial={{ opacity: 0, y: 12 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.45, delay: i * 0.04, ease: [0.16, 1, 0.3, 1] }}
//               className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 font-mono text-xs uppercase tracking-wide text-bone/70 transition-colors hover:border-gold/40 hover:text-bone"
//             >
//               {s}
//             </motion.span>
//           ))}
//         </div>
//       </div>

//       {/* ── Mobile Screens Placeholder ── */}
//       <div className="mx-auto max-w-7xl px-6 pb-28 md:px-10 md:pb-40">
//         <Eyebrow>Mobile Experience</Eyebrow>
//         <h3 className="mt-6 font-display text-3xl leading-tight tracking-tight text-bone md:text-4xl">
//           Every screen, every device.
//         </h3>
//         <div className="mt-10 flex flex-wrap justify-center gap-5">
//           {["Home", "Menu", "Drink Builder", "Cart", "Confirmation"].map((screen, i) => (
//             <motion.div
//               key={screen}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.5, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
//               className={`
//                 ${i === 2 || i === 3 ? "aspect-[9/20]" : "aspect-[9/19]"}
//                 w-[170px]
//                 md:w-[180px]
//                 lg:w-[185px]
//                 overflow-hidden
//                 rounded-[28px]
//                 border
//                 border-white/10
//                 bg-[#111]
//                 flex
//                 items-center
//                 justify-center
//                 p-2
//               `}
//             >
//               <img
//   src={
//     i === 0
//       ? "/images/fuison_images/home.jpg"
//       : i === 1
//       ? "/images/fuison_images/menu.PNG"
//       : i === 2
//       ? "/images/fuison_images/custom.jpg"
//       : i === 3
//       ? "/images/fuison_images/review.jpg"
//       : "/images/fuison_images/order_placed.jpg"
//   }
//   alt={screen}
//   className="max-w-full max-h-full object-contain"
//   draggable={false}
// />
//             </motion.div>
//           ))}
//         </div>
//       </div>

//       {/* ── Reflection ── */}
//       <div className="mx-auto max-w-7xl px-6 pb-40 md:px-10 md:pb-56">
//         <Eyebrow>Reflection</Eyebrow>
//         <motion.blockquote
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, margin: "-10%" }}
//           transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
//           className="mt-10 max-w-4xl font-display text-3xl leading-snug tracking-tight text-bone md:text-5xl"
//         >
//           The most important design decision on this project wasn't visual. It was building the
//           data model so that the customer, staff, and owner surfaces all operated on the same
//           order object.
//         </motion.blockquote>
//         <motion.p
//           initial={{ opacity: 0, y: 24 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
//           className="mt-8 max-w-2xl text-lg leading-relaxed text-bone/45"
//         >
//           Fusion 36 started as a UI exercise and became a systems design problem. Once I understood
//           that three different users: customer, staff, owner. All needed to act on the same
//           underlying data, every component decision became easier. It reinforced that product
//           thinking and engineering aren't separate phases. They have to happen simultaneously, or
//           the seams show up in the interface.
//         </motion.p>
//         <div className="mt-16 h-px w-full bg-white/8" />
//         <div className="mt-12 flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
//           <div className="font-mono text-[11px] uppercase tracking-eyebrow text-muted">
//             Fusion 36 Degree · 2025 — 2026
//           </div>
//           <div className="flex flex-wrap gap-3">
//             {["React", "TypeScript", "Framer Motion", "Tailwind"].map((t) => (
//               <span
//                 key={t}
//                 className="rounded-full border border-white/10 px-3 py-1 font-mono text-[10px] uppercase tracking-wide text-bone/40"
//               >
//                 {t}
//               </span>
//             ))}
//           </div>
//         </div>
//       </div>

//       <ProjectFooterNav
//     onBack={onBack}
//     onPrev={onPrev}
//     onNext={onNext}
//     prevLabel="DigitalUH"
//     nextLabel="Next Project"
// />

//     </section>
//   );
// }






import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Eyebrow, GlassCard } from "../Primitives";
import ProjectFooterNav from "../ProjectFooterNav";

const META = [
  ["Role", "Product Design · Frontend Engineering"],
  ["Year", "2026"],
  ["Stack", "React · TypeScript · Vite · Tailwind · Framer Motion"],
  ["Type", "0→1 Product Design & Engineering"],
];

const PROBLEMS = [
  ["No Digital Presence", "The shop had no website, no ordering platform, and no way for customers to explore the menu before arriving."],
  ["Manual Ordering Only", "Every order was placed in person or by phone like no customization, no order history, no pickup queue."],
  ["No Drink Customization", "Customers couldn't build drinks online. Specialty modifications were communicated verbally, creating frequent errors."],
  ["No Pickup Workflow", "Staff had no visibility into incoming orders. There was no queue, no status tracking, no digital handoff."],
  ["Weak Digital Branding", "The brand had no cohesive digital identity like no online typography, color system, or visual presence to build on."],
];

const GOALS = [
  ["Premium Digital Presence", "Build a web platform that reflects the shop's craft and quality, not a generic ordering widget."],
  ["Interactive Drink Builder", "Let customers configure every element of their drink: base, milk, sweetness, ice, toppings before checkout."],
  ["Streamlined Pickup Flow", "Give customers order confirmation and status; give staff a live dashboard to manage the queue."],
  ["Modern Customer Experience", "Make browsing the menu, building a drink, and placing an order feel like using a product from a specialty brand."],
];

const ROLES = [
  ["Product Strategy", "Defined scope, prioritized features, and mapped end-to-end customer and staff workflows before writing code."],
  ["UX Research", "Studied specialty coffee and boba ordering experiences in-store, mobile, and web to identify conventions and opportunities."],
  ["UI Design", "Built a warm, premium visual system: typography, color, spacing, and component patterns grounded in the shop's identity."],
  ["Frontend Engineering", "Implemented the full application in React with TypeScript, managing complex state across the drink builder, cart, and dashboards."],
  ["Component Architecture", "Designed a reusable component library such as menus, configurators, cards, dashboards where built to scale with new categories and features."],
  ["Motion Design", "Used Framer Motion for physics-based animations in the drink builder and page transitions that feel deliberate, not decorative."],
];

const FEATURES = [
  ["Drink Builder", "A physics-based interactive configurator with live interactive glass rendering, category-aware liquid fill animations, and boba/ice particle effects."],
  ["Full Menu System", "75+ drinks across 8 categories, each with size, milk, sweetness, ice, and topping variants, structured with TypeScript interfaces."],
  ["Cart & Checkout", "Persistent cart with modifier summary, pricing breakdown, and order submission flow with confirmation state."],
  ["Staff Dashboard", "Live order queue with status management like pending, in progress, ready which giving staff clear visibility into every order."],
  ["Owner Analytics", "Sales trends, top items, hourly volume, and revenue charts built with Recharts on sample order history (LocalStorage)."],
  ["Mobile Responsive", "Every screen configurator, menu, cart, dashboards which adapts to phone, tablet, and desktop without layout compromise."],
];

const ARCH = [
  ["Frontend", "React · TypeScript · Vite", "Component-driven architecture with strict TypeScript interfaces for drinks, orders, cart items, and modifier options."],
  ["Styling", "Tailwind CSS · Custom Tokens", "A warm design system - cream, brown, gold expressed as Tailwind config tokens for consistent theming across all surfaces."],
  ["Animation",
  "Framer Motion",
  "Crafted smooth page transitions, scroll-based interactions, hover effects, and micro-interactions using Framer Motion to create a polished and engaging user experience."],
  ["Data Layer", "LocalStorage · State", "Order history, cart state, and menu data managed in React context and persisted to LocalStorage pending a backend API."],
];

const CHALLENGES = [
  {
    n: "01",
    title: "The Interactive Drink Builder",
    body : "Designing an interactive drink customization experience required structuring complex user flows while keeping the interface intuitive. I focused on managing dynamic selections, providing real-time visual feedback, and creating a seamless ordering experience that remained responsive and easy to navigate across multiple customization options.",  },
  {
    n: "02",
    title: "Connecting Customer & Staff Workflows",
    body: "A single order had to move coherently from customer configuration → cart → checkout → staff queue → status update → customer confirmation. Designing this as a shared data model rather than isolated screens meant every surface stayed in sync without a real-time backend during the prototype phase.",
  },
  {
    n: "03",
    title: "Keeping Ordering Simple",
    body: "A drink with five modifier dimensions (size, milk, sweetness, ice, toppings) can generate hundreds of combinations. The UX challenge was progressive disclosure surfacing relevant options at the right moment without making a casual order feel like filling out a form.",
  },
];

const PRINCIPLES = [
  ["Warm Minimalism", "The UI uses restraint with generous whitespace, a limited palette, careful typography. So the product photography and drink visuals carry the visual weight."],
  ["Motion With Purpose", "Every animation in the drink builder communicates cause and effect. The liquid fills when you choose a base. Ice appears when you select it. Nothing animates decoratively."],
  ["Accessible Defaults", "Color contrast, focus states, and tap targets were treated as baseline requirements, not afterthoughts especially important for a public-facing ordering tool."],
  ["Consistent Component Language", "Every card, button, modal, and form input shares the same visual DNA. New menu categories and features can be added without breaking the system."],
];

const OUTCOMES = [
  ["75+", "Drinks engineered"],
  ["8", "Menu categories"],
  ["3", "User surfaces — customer, staff, owner"],
  ["1", "Coherent product system"],
];

const SKILLS = [
  "Product Thinking", "Frontend Engineering", "React", "TypeScript",
  "State Management", "UI Engineering", "Responsive Design",
  "Framer Motion", "Component Architecture", "UX Design",
  "Information Architecture", "Dashboard Design", "Business Workflow Design",
];

export default function Fusion36({ onBack, onPrev, onNext } = {}) {
  const cardRef = useRef(null);
  const { scrollYProgress: cardScroll } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });
  const cardY1 = useTransform(cardScroll, [0, 1], [60, -80]);
  const cardY2 = useTransform(cardScroll, [0, 1], [-40, 90]);

  return (
    <section id="fusion36" className="relative">

      {/* ── Intro ── */}
      <div className="mx-auto max-w-7xl px-6 pt-32 md:px-10 md:pt-48">
        <Eyebrow>04 — Case Study</Eyebrow>
        <div className="mt-8 flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-6xl leading-[0.9] tracking-tightest text-bone md:text-[8rem]"
          >
            Fusion{" "}
            <span className="italic text-gold">36°</span>
          </motion.h2>
          <p className="max-w-sm text-bone/55">
            A specialty coffee and boba shop with loyal customers and no digital surface to
            match. Fusion 36° is the product I designed and engineered to close that gap 
            a single ordering system, built mobile-first and refined for desktop, where
            browsing, customizing, and checking out feel like one continuous experience
            instead of three different ones.
          </p>
        </div>

        {/* <p className="mt-8 max-w-3xl text-bone/45">
          This wasn't a coffee shop website. It was a 0→1 product problem: translate an
          in-person, verbal ordering ritual into an interface that scales across devices
          without losing what made the brand feel premium. I owned it end to end, from
          research and information architecture through the interaction design of the
          drink builder to the production React/TypeScript codebase that ships it,
          balancing brand identity, accessibility, and responsive layout at every
          decision point.
        </p> */}

        <div className="mt-6 flex flex-wrap gap-2">
          {["Product Thinking", "UX Strategy", "Frontend Engineering", "Responsive Design", "Interaction Design", "Brand Identity", "Cross-Device Experience"].map((d) => (
            <span
              key={d}
              className="rounded-full border border-gold/25 bg-gold/[0.06] px-3 py-1.5 font-mono text-[10px] uppercase tracking-wide text-gold/80"
            >
              {d}
            </span>
          ))}
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

      {/* ── Hero Visual Placeholder ── */}
      {/* ── Hero Visual ── */}
<div className="mx-auto mt-16 max-w-7xl px-6 md:px-10">
<div
  className="relative overflow-hidden rounded-3xl border border-white/8 bg-[#111]"
  style={{ height: "90vh" }}
>
    <img
  src="/images/fuison_images/landing.png"
  alt="Fusion 36 Platform Overview"
  className="w-full h-full object-cover object-top"
  draggable={false}
/>

<div className="absolute inset-0 bg-black/10" />
</div>

   
</div>
          {/* ambient glow
          <div className="pointer-events-none absolute left-1/4 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-gold/10 blur-[100px]" />
          <div className="pointer-events-none absolute right-1/4 top-1/2 h-48 w-48 -translate-y-1/2 rounded-full bg-[#8B4513]/20 blur-[80px]" />
        </div>
      </div> */}

      {/* ── Problem ── */}
      <div className="mx-auto max-w-7xl px-6 pt-28 pb-20 md:px-10 md:pt-40">
        <Eyebrow>The Problem</Eyebrow>
        <h3 className="mt-6 max-w-2xl font-display text-3xl leading-tight tracking-tight text-bone md:text-5xl">
          A great product with no digital surface to show for it.
        </h3>
        <p className="mt-5 max-w-xl text-bone/50">
          Fusion 36° had loyal customers and quality drinks but no way to reach people
          online, take orders digitally, or give staff any operational visibility.
        </p>
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

      {/* ── Goals ── */}
      <div className="mx-auto max-w-7xl px-6 pb-28 md:px-10 md:pb-40">
        <Eyebrow>Goals</Eyebrow>
        <h3 className="mt-6 max-w-2xl font-display text-3xl leading-tight tracking-tight text-bone md:text-5xl">
          Four things the platform had to get right.
        </h3>
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

      {/* ── My Role ── */}
      <div className="mx-auto max-w-7xl px-6 pb-28 md:px-10 md:pb-40">
        <Eyebrow>My Role</Eyebrow>
        <h3 className="mt-6 max-w-2xl font-display text-3xl leading-tight tracking-tight text-bone md:text-5xl">
          Sole designer and engineer, end-to-end.
        </h3>
        <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/5 sm:grid-cols-2 lg:grid-cols-3">
          {ROLES.map(([title, desc], i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-8%" }}
              transition={{ duration: 0.6, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
              className="bg-ink-900 p-6"
            >
              <div className="font-display text-lg text-gold">{title}</div>
              <p className="mt-3 text-sm leading-relaxed text-bone/45">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ── Research ── */}
      <div className="mx-auto max-w-7xl px-6 pb-28 md:px-10 md:pb-40">
        <Eyebrow>Research & Inspiration</Eyebrow>
        <h3 className="mt-6 max-w-2xl font-display text-3xl leading-tight tracking-tight text-bone md:text-5xl">
          Built from observation, not assumption.
        </h3>
        <p className="mt-5 max-w-xl text-bone/50">
          Before designing a single screen, I studied how specialty coffee brands, luxury product
          configurators, and mobile ordering systems structure the experience between browsing,
          personalizing, and placing an order. The personas and insights below are working hypotheses drawn from that study and my own observation.
           A starting point I’d validate with user interviews, not finished research.
        </p>
        <div className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/5 md:grid-cols-5">
          {["Product Configurators", "Specialty Coffee Brands", "Luxury Product Experiences", "Mobile Ordering Apps", "Modern UX Systems"].map((item, i) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
              className="bg-ink-900 p-6"
            >
              <div className="font-mono text-[10px] uppercase tracking-eyebrow text-gold/60">0{i + 1}</div>
              <div className="mt-3 font-display text-base text-bone">{item}</div>
            </motion.div>
          ))}
        </div>

        {/* ── 1 · User Personas ── */}
        <div className="mt-20">
          <div className="flex items-baseline gap-4">
            <div className="font-mono text-[10px] uppercase tracking-eyebrow text-gold/60">01 · Who I designed for</div>
            <div className="h-px flex-1 bg-white/8" />
          </div>
          <h4 className="mt-5 font-display text-2xl tracking-tight text-bone md:text-3xl">User Personas</h4>
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { n: "01", name: "Busy Student", goal: "Order quickly between classes", pain: "Long lines and waiting", need: "Fast pickup and simple customization" },
              { n: "02", name: "Coffee Enthusiast", goal: "Personalize every drink", pain: "Limited customization", need: "Rich drink builder with live preview" },
              { n: "03", name: "Store Staff", goal: "Manage incoming orders efficiently", pain: "Manual order tracking", need: "Clear dashboard and order queue" },
            ].map((p, i) => (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-8%" }}
                transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              >
                <div
                  data-cursor="hover"
                  className="group h-full rounded-2xl border border-white/8 bg-white/[0.02] p-6 transition-all duration-500 hover:-translate-y-1.5 hover:border-gold/40 hover:bg-white/[0.05]"
                >
                  <div className="flex items-center justify-between">
                    <div className="font-mono text-xs text-gold/70">Persona {p.n}</div>
                    <div className="h-8 w-8 rounded-full border border-white/10 bg-white/[0.03] font-mono text-[11px] leading-8 text-center text-bone/40 transition-colors duration-500 group-hover:border-gold/40 group-hover:text-gold/70">{p.n}</div>
                  </div>
                  <div className="mt-4 font-display text-xl text-bone">{p.name}</div>
                  <div className="mt-5 space-y-3">
                    {[["Goal", p.goal], ["Pain Point", p.pain], ["Need", p.need]].map(([label, val]) => (
                      <div key={label}>
                        <div className="font-mono text-[9px] uppercase tracking-eyebrow text-muted">{label}</div>
                        <div className="mt-1 text-sm leading-relaxed text-bone/55">{val}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ── 2 · Customer Journey ── */}
        <div className="mt-20">
          <div className="flex items-baseline gap-4">
            <div className="font-mono text-[10px] uppercase tracking-eyebrow text-gold/60">02 · The path to a drink</div>
            <div className="h-px flex-1 bg-white/8" />
          </div>
          <h4 className="mt-5 font-display text-2xl tracking-tight text-bone md:text-3xl">Customer Journey</h4>
          <div className="mt-8 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/5 sm:grid-cols-2 md:grid-cols-5">
            {[
              ["Discover", "Customers arrive craving something specific but open to being guided."],
              ["Browse Menu", "Clear categories let them scan the range without feeling overwhelmed."],
              ["Customize Drink", "Live preview turns configuration into a confident, playful moment."],
              ["Checkout", "A transparent summary removes any doubt before they commit."],
              ["Pickup", "A visible order status closes the loop and builds trust for next time."],
            ].map(([step, insight], i) => (
              <motion.div
                key={step}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
                className="bg-ink-900 p-6"
              >
                <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-eyebrow text-gold/60">
                  <span>0{i + 1}</span>
                  {i < 4 && <span className="hidden text-gold/30 md:inline">→</span>}
                </div>
                <div className="mt-3 font-display text-base text-bone">{step}</div>
                <p className="mt-2 text-xs leading-relaxed text-bone/45">{insight}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ── 3 · Competitive Analysis ── */}
        <div className="mt-20">
          <div className="flex items-baseline gap-4">
            <div className="font-mono text-[10px] uppercase tracking-eyebrow text-gold/60">03 · Where the market falls short</div>
            <div className="h-px flex-1 bg-white/8" />
          </div>
          <h4 className="mt-5 font-display text-2xl tracking-tight text-bone md:text-3xl">Competitive Analysis</h4>
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["Starbucks", "Strong mobile ordering", "Complex customization"],
              ["Blue Bottle", "Premium branding", "Limited personalization"],
              ["Gong Cha", "Wide drink selection", "Less intuitive digital experience"],
              ["Sharetea", "Familiar ordering flow", "Minimal product storytelling"],
            ].map(([brand, pro, con], i) => (
              <motion.div
                key={brand}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-8%" }}
                transition={{ duration: 0.6, delay: (i % 4) * 0.07, ease: [0.16, 1, 0.3, 1] }}
              >
                <div
                  data-cursor="hover"
                  className="group h-full rounded-2xl border border-white/8 bg-white/[0.02] p-6 transition-all duration-500 hover:-translate-y-1.5 hover:border-gold/40 hover:bg-white/[0.05]"
                >
                  <div className="font-display text-lg text-bone">{brand}</div>
                  <div className="mt-5 space-y-3">
                    <div className="flex items-start gap-2.5">
                      <span className="mt-px font-mono text-sm text-gold">✓</span>
                      <span className="text-sm leading-relaxed text-bone/55">{pro}</span>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <span className="mt-px font-mono text-sm text-bone/30">✕</span>
                      <span className="text-sm leading-relaxed text-bone/40">{con}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Highlighted differentiator */}
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-8%" }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="relative mt-4 overflow-hidden rounded-2xl border border-gold/30 bg-gradient-to-br from-[#3B1F0A]/40 via-ink-900 to-ink-900 p-8 md:p-10"
          >
            <div className="pointer-events-none absolute left-1/4 top-1/2 h-40 w-40 -translate-y-1/2 rounded-full bg-gold/10 blur-[90px]" />
            <div className="relative flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div className="max-w-2xl">
                <div className="font-mono text-[10px] uppercase tracking-eyebrow text-gold/60">The opportunity</div>
                <div className="mt-3 font-display text-2xl text-bone md:text-3xl">
                  Fusion <span className="italic text-gold">36°</span>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-bone/55">
                  Combines premium branding, rich customization, intuitive ordering, and staff
                  workflow into one unified experience.
                </p>
              </div>
              <div className="flex flex-wrap gap-2 md:max-w-[40%] md:justify-end">
                {["Premium branding", "Rich customization", "Intuitive ordering", "Staff workflow"].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-gold/25 bg-white/[0.03] px-3 py-1 font-mono text-[10px] uppercase tracking-wide text-gold/70"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* ── 4 · Key UX Insights ── */}
        <div className="mt-20">
          <div className="flex items-baseline gap-4">
            <div className="font-mono text-[10px] uppercase tracking-eyebrow text-gold/60">04 · What the research pointed to</div>
            <div className="h-px flex-1 bg-white/8" />
          </div>
          <h4 className="mt-5 font-display text-2xl tracking-tight text-bone md:text-3xl">Key UX Insights</h4>
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              "Customers value speed as much as customization.",
              "Progressive disclosure reduces decision fatigue.",
              "Visual feedback increases confidence while ordering.",
              "Staff workflows should be designed alongside customer flows.",
            ].map((insight, i) => (
              <motion.div
                key={insight}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-8%" }}
                transition={{ duration: 0.6, delay: (i % 4) * 0.07, ease: [0.16, 1, 0.3, 1] }}
              >
                <div
                  data-cursor="hover"
                  className="group h-full rounded-2xl border border-white/8 bg-white/[0.02] p-6 transition-all duration-500 hover:-translate-y-1.5 hover:border-gold/40 hover:bg-white/[0.05]"
                >
                  <div className="font-mono text-xs text-gold/70">0{i + 1}</div>
                  <p className="mt-4 text-sm leading-relaxed text-bone/70">{insight}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Solution: Features ── */}
      <div className="mx-auto max-w-7xl px-6 pb-20 md:px-10">
        <Eyebrow>The Solution</Eyebrow>
        <h3 className="mt-6 max-w-2xl font-display text-3xl leading-tight tracking-tight text-bone md:text-5xl">
          One platform. Three surfaces. End-to-end.
        </h3>
        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map(([title, desc], i) => (
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
                <div className="font-mono text-xs text-gold">0{i + 1}</div>
                <div className="mt-4 font-display text-xl text-bone">{title}</div>
                <p className="mt-2 text-sm leading-relaxed text-bone/45">{desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ── Screen Placeholders ── */}
      <div className="mx-auto max-w-7xl px-6 pb-28 md:px-10 md:pb-40" ref={cardRef}>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {[
            ["Customer · Ordering Flow", "Menu browsing, drink builder, cart and checkout - the full customer journey.", "Order Flow Screenshot"],
            ["Staff · Queue Dashboard", "Live incoming orders, status updates, and queue management for shop staff.", "Staff Dashboard Screenshot"],
            ["Owner · Analytics", "Sales trends, top items, and revenue charts built for the business owner.", "Owner Analytics Screenshot"],
          ].map(([label, desc, placeholder], i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-8%" }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="overflow-hidden rounded-2xl border border-white/8 bg-white/[0.02]">
              {/* <div
  className="relative overflow-hidden border-b border-white/8"
  style={{ height: "34vh" }}
>
  <img
    src={
      i === 0
        ? "/images/fuison_images/web_home.png"
        : i === 1
        ? "/images/fuison_images/staff.png"
        : "/images/fuison_images/owner.png"
    }
    alt={label}
    className="h-full w-full object-cover object-center"
    draggable={false}
  />
</div> */}

<div
  className="relative overflow-hidden border-b border-white/8 bg-[#111]"
  style={{ height: "26vh" }}
>
  <img
    src={
      i === 0
        ? "/images/fuison_images/web_home.png"
        : i === 1
        ? "/images/fuison_images/staff.png"
        : "/images/fuison_images/owner.png"
    }
    alt={label}
    className="w-full h-full object-cover object-top"
    draggable={false}
  />
</div>
                <div className="p-5">
                  <div className="font-display text-base text-bone">{label.split(" · ")[1]}</div>
                  <p className="mt-2 text-sm leading-relaxed text-bone/40">{desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── Interactive Drink Builder — product showcase ── */}
        <div className="mt-16 grid grid-cols-1 items-center gap-8 lg:grid-cols-5 lg:gap-12">
          {/* Video — left column (~60%) */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-8%" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -6 }}
            data-cursor="hover"
            className="relative lg:col-span-3"
          >
            {/* soft floating glow behind the video (painted first, sits behind) */}
            <div className="pointer-events-none absolute -inset-6 rounded-[2.25rem] bg-gold/10 blur-[90px]" />

            {/* gentle floating wrapper */}
            <motion.div
              animate={{ y: [0, -9, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 shadow-2xl shadow-black/50 transition-colors duration-500 hover:border-gold/30"
            >
              <div className="relative flex aspect-[4/5] items-center justify-center overflow-hidden bg-gradient-to-br from-[#3B1F0A]/40 via-ink-900 to-ink-900 sm:aspect-[5/4]">
                <div className="pointer-events-none absolute inset-0 [background-image:radial-gradient(circle_at_1px_1px,rgba(200,169,106,0.06)_1px,transparent_0)] [background-size:24px_24px]" />
                <div className="pointer-events-none absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/10 blur-[80px]" />
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="metadata"
                  controls={false}
                  className="relative h-full w-full object-contain"
                >
                  <source src="/videos/drink-builder.mp4" type="video/mp4"  />
                </video>

                {/* Live Demo badge */}
                <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full border border-white/10 bg-black/40 px-3 py-1.5 backdrop-blur-md">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400/70" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-eyebrow text-bone/80">Live Demo</span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Copy + features — right column (~40%) */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-8%" }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-2"
          >
            <div className="font-mono text-[10px] uppercase tracking-eyebrow text-gold/60">The centerpiece</div>
            <h4 className="mt-4 font-display text-2xl leading-tight tracking-tight text-bone md:text-3xl">
              Interactive Drink Builder
            </h4>
            <p className="mt-4 text-sm leading-relaxed text-bone/45">
              A live customization experience where customers personalize base, milk, sweetness, ice, and toppings
              with the cup updating in real time for a smooth, confident ordering flow.
            </p>

            <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-1">
              {[
                ["Live Cup Preview", "Updates instantly as ingredients change."],
                ["Smart Customization", "Personalize size, milk, sweetness, ice, and toppings."],
                ["Smooth Ordering Flow", "Progressive interactions reduce decision fatigue."],
                ["Mobile First", "Designed for quick ordering on any device."],
              ].map(([title, desc], i) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-8%" }}
                  transition={{ duration: 0.5, delay: 0.15 + i * 0.07, ease: [0.16, 1, 0.3, 1] }}
                  data-cursor="hover"
                  className="group rounded-xl border border-white/8 bg-white/[0.02] p-4 transition-all duration-500 hover:-translate-y-1 hover:border-gold/40 hover:bg-white/[0.05]"
                >
                  <div className="flex items-start gap-3">
                    <span className="mt-0.5 font-mono text-xs text-gold/70 transition-colors duration-500 group-hover:text-gold">✓</span>
                    <div>
                      <div className="font-display text-sm text-bone">{title}</div>
                      <p className="mt-1 text-xs leading-relaxed text-bone/40">{desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* ── Technical Architecture ── */}
      <div className="mx-auto max-w-7xl px-6 pb-28 md:px-10 md:pb-40">
        <Eyebrow>Technical Architecture</Eyebrow>
        <h3 className="mt-6 max-w-2xl font-display text-3xl leading-tight tracking-tight text-bone md:text-5xl">
          Designed to extend. Built to ship now.
        </h3>
        <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/5 md:grid-cols-4">
          {ARCH.map(([label, tech, desc], i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-8%" }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="bg-ink-900 p-6"
            >
              <div className="font-mono text-[10px] uppercase tracking-eyebrow text-muted">{label}</div>
              <div className="mt-3 font-display text-lg text-gold">{tech}</div>
              <p className="mt-3 text-sm leading-relaxed text-bone/45">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ── Engineering Challenges ── */}
      <div className="mx-auto max-w-7xl px-6 pb-28 md:px-10 md:pb-40">
        <Eyebrow>Engineering Challenges</Eyebrow>
        <h3 className="mt-6 max-w-2xl font-display text-3xl leading-tight tracking-tight text-bone md:text-5xl">
          The problems that shaped the architecture.
        </h3>
        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {CHALLENGES.map((c, i) => (
            <motion.div
              key={c.n}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-8%" }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              data-cursor="hover"
              className="group rounded-2xl border border-white/8 bg-white/[0.02] p-7 transition-all duration-500 hover:-translate-y-1.5 hover:border-gold/40 hover:bg-white/[0.05]"
            >
              <div className="font-mono text-xs text-gold">{c.n}</div>
              <div className="mt-4 font-display text-xl text-bone">{c.title}</div>
              <p className="mt-3 text-sm leading-relaxed text-bone/45">{c.body}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ── Design Principles ── */}
      <div className="mx-auto max-w-7xl px-6 pb-28 md:px-10 md:pb-40">
        <Eyebrow>Design Principles</Eyebrow>
        <h3 className="mt-6 max-w-2xl font-display text-3xl leading-tight tracking-tight text-bone md:text-5xl">
          The values behind every decision.
        </h3>
        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {PRINCIPLES.map(([title, desc], i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-8%" }}
              transition={{ duration: 0.6, delay: (i % 2) * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="rounded-2xl border border-white/8 bg-white/[0.02] p-7"
            >
              <div className="font-display text-xl text-gold">{title}</div>
              <p className="mt-3 text-sm leading-relaxed text-bone/45">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ── Outcome ── */}
      <div className="mx-auto max-w-7xl px-6 pb-28 md:px-10 md:pb-40">
        <div className="rounded-2xl border border-gold/20 bg-gold/[0.04] p-8 md:p-10">
          <div className="font-mono text-[10px] uppercase tracking-eyebrow text-gold">Outcome</div>
          <p className="mt-4 max-w-3xl font-display text-2xl leading-snug text-bone md:text-3xl">
            A local shop that had no digital presence now has a complete ordering platform with
            a customer experience that matches the quality of the product itself.
          </p>
          <p className="mt-5 max-w-2xl text-sm leading-relaxed text-bone/50">
            Beyond the customer-facing surface, the project demonstrated how a single engineer
            thinking in systems like data model first, then UI, then workflows which can ship a coherent
            multi-surface product without a team. The architecture is ready for a real backend and
            payment integration when the business is ready to deploy.
          </p>
          <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4">
            {OUTCOMES.map(([n, label]) => (
              <div key={label}>
                <div className="font-display text-4xl text-gold md:text-5xl">{n}</div>
                <div className="mt-1 text-xs text-bone/45">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Skills ── */}
      <div className="mx-auto max-w-7xl px-6 pb-28 md:px-10 md:pb-40">
        <Eyebrow>Skills Demonstrated</Eyebrow>
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

      {/* ── Mobile Screens Placeholder ── */}
      <div className="mx-auto max-w-7xl px-6 pb-28 md:px-10 md:pb-40">
        <Eyebrow>Mobile Experience</Eyebrow>
        <h3 className="mt-6 font-display text-3xl leading-tight tracking-tight text-bone md:text-4xl">
          Every screen, every device.
        </h3>
        <div className="mt-10 flex flex-wrap justify-center gap-5">
          {["Home", "Menu", "Drink Builder", "Cart", "Confirmation"].map((screen, i) => (
            <motion.div
              key={screen}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
              className={`
                ${i === 2 || i === 3 ? "aspect-[9/20]" : "aspect-[9/19]"}
                w-[170px]
                md:w-[180px]
                lg:w-[185px]
                overflow-hidden
                rounded-[28px]
                border
                border-white/10
                bg-[#111]
                flex
                items-center
                justify-center
                p-2
              `}
            >
              <img
  src={
    i === 0
      ? "/images/fuison_images/home.jpg"
      : i === 1
      ? "/images/fuison_images/menu.PNG"
      : i === 2
      ? "/images/fuison_images/custom.jpg"
      : i === 3
      ? "/images/fuison_images/review.jpg"
      : "/images/fuison_images/order_placed.jpg"
  }
  alt={screen}
  className="max-w-full max-h-full object-contain"
  draggable={false}
/>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ── Reflection ── */}
      <div className="mx-auto max-w-7xl px-6 pb-40 md:px-10 md:pb-56">
        <Eyebrow>Reflection</Eyebrow>
        <motion.blockquote
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 max-w-4xl font-display text-3xl leading-snug tracking-tight text-bone md:text-5xl"
        >
          The most important design decision on this project wasn't visual. It was building the
          data model so that the customer, staff, and owner surfaces all operated on the same
          order object.
        </motion.blockquote>
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 max-w-2xl text-lg leading-relaxed text-bone/45"
        >
          Fusion 36° started as a UI exercise and became a systems design problem. Once I understood
          that three different users such as customer, staff, and owner. All needed to act on the same
          underlying data, every component decision became easier. It reinforced that product
          thinking and engineering aren't separate phases. They have to happen simultaneously, or
          the seams show up in the interface.
        </motion.p>
        <div className="mt-16 h-px w-full bg-white/8" />
        <div className="mt-12 flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
          <div className="font-mono text-[11px] uppercase tracking-eyebrow text-muted">
            Fusion 36° · 2026
          </div>
          <div className="flex flex-wrap gap-3">
            {["React", "TypeScript", "Framer Motion", "Tailwind"].map((t) => (
              <span
                key={t}
                className="rounded-full border border-white/10 px-3 py-1 font-mono text-[10px] uppercase tracking-wide text-bone/40"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>

      <ProjectFooterNav
    onBack={onBack}
    onPrev={onPrev}
    onNext={onNext}
    prevLabel="DigitalUH"
    nextLabel="Next Project"
/>

    </section>
  );
}

