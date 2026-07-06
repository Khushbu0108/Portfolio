// // /**
// //  * DigitalUH.jsx — Cinematic case study, v3
// //  * Drop-in replacement. Nothing else in the portfolio changes.
// //  *
// //  * 6 sections: Problem → Research → Strategy → Solution (pinned) → Architecture → Final Grid
// //  * Deps: framer-motion (already in project). No new installs needed.
// //  */

// // import { useRef, useState, useCallback } from "react";
// // import {
// //   motion,
// //   useScroll,
// //   useTransform,
// //   useMotionValueEvent,
// //   useInView,
// //   AnimatePresence,
// // } from "framer-motion";
// // import { Eyebrow, GlassCard } from "../Primitives";
// // import { PhoneFrame, SCREENS } from "./DigitalUHScreens";

// // const EL = [0.16, 1, 0.3, 1];

// // /* ══════════════════════════════════════════════
// //    PHONE SHELL — shared wrapper
// // ══════════════════════════════════════════════ */
// // function Shell({ dark = false, children }) {
// //   return (
// //     <div className={`relative h-full overflow-hidden ${dark ? "bg-[#111318]" : "bg-[#0a0a0b]"}`}>
// //       <div className="absolute left-1/2 top-2.5 z-30 h-[13px] w-[76px] -translate-x-1/2 rounded-full bg-black" />
// //       <div className="absolute inset-x-0 top-0 z-20 flex items-center justify-between px-5 pt-2 font-mono text-[8px] text-white/30">
// //         <span>9:41</span><span>●●● WiFi 🔋</span>
// //       </div>
// //       <div className="absolute inset-0 pt-8">{children}</div>
// //     </div>
// //   );
// // }

// // /* ─── OLD SCREENS ─── */
// // function OldHome() {
// //   return <Shell dark><div className="px-3 pt-1 text-white">
// //     <div className="text-[9px] font-bold uppercase tracking-widest text-white/40">UHGo</div>
// //     <div className="mt-2 grid grid-cols-3 gap-1.5">
// //       {["Grades","Schedule","Maps","Dining","Shuttle","Library","Directory","News","More"].map(t => (
// //         <div key={t} className="flex flex-col items-center gap-1 rounded-xl border border-white/8 bg-white/[0.04] py-3">
// //           <div className="h-5 w-5 rounded-lg bg-white/15" />
// //           <div className="text-[7px] text-white/35">{t}</div>
// //         </div>
// //       ))}
// //     </div>
// //     <div className="mt-2 rounded-xl border border-white/8 bg-white/[0.03] p-2 text-[8px] text-white/20">University announcements feed…</div>
// //     <div className="absolute right-2 top-10 rounded bg-red-500/75 px-1.5 py-0.5 text-[7px] text-white">Poor hierarchy</div>
// //   </div></Shell>;
// // }

// // function OldMap() {
// //   return <Shell dark><div className="px-3 pt-1 text-white">
// //     <div className="text-[9px] font-bold uppercase tracking-widest text-white/40">UHGo · Maps</div>
// //     <div className="mt-2 flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-2 py-1.5 text-[9px] text-white/30">🔍 Search buildings…</div>
// //     <div className="mt-1.5 rounded-lg border border-red-500/30 bg-red-500/5 px-2 py-1.5 text-[8px] text-red-400/80">⚠ "PGH" — no results found</div>
// //     <div className="mt-2 h-32 rounded-lg border border-white/5 bg-white/[0.02] flex items-center justify-center text-[8px] text-white/15">generic map view</div>
// //     <div className="mt-2 rounded border border-red-500/20 bg-red-500/5 px-2 py-1.5 text-[8px] text-red-400/60">✗ Fails on abbreviations</div>
// //   </div></Shell>;
// // }

// // function OldDining() {
// //   return <Shell dark><div className="px-3 pt-1 text-white">
// //     <div className="text-[9px] font-bold uppercase tracking-widest text-white/40">UHGo · Dining</div>
// //     <div className="mt-2 space-y-1.5">
// //       {["Fresh Food Co. — Open","The Den — Open","Cougar Grounds — Closed"].map(s => (
// //         <div key={s} className="rounded border border-white/8 bg-white/[0.03] px-2 py-2 text-[9px] text-white/40">{s}</div>
// //       ))}
// //     </div>
// //     <div className="mt-3 rounded border border-red-500/25 bg-red-500/5 px-2 py-2 text-[8px] text-red-400/65">✗ No menus · No occupancy · No dietary info</div>
// //   </div></Shell>;
// // }

// // function OldShuttle() {
// //   return <Shell dark><div className="px-3 pt-1 text-white">
// //     <div className="text-[9px] font-bold uppercase tracking-widest text-white/40">UHGo · Transit</div>
// //     <div className="mt-2 space-y-1.5">
// //       {["Cougar Line","Cougar Ride","Sugar Land Shuttle","Ride & Dine"].map(s => (
// //         <div key={s} className="rounded border border-white/8 bg-white/[0.03] px-2 py-2.5 text-[9px] text-white/35">{s}</div>
// //       ))}
// //     </div>
// //     <div className="mt-2 rounded border border-red-500/25 bg-red-500/5 px-2 py-2 text-[8px] text-red-400/65">✗ No arrival times · No context</div>
// //   </div></Shell>;
// // }

// // function OldSchedule() {
// //   return <Shell dark><div className="px-3 pt-1 text-white">
// //     <div className="text-[9px] font-bold uppercase tracking-widest text-white/40">UHGo · Grades</div>
// //     <div className="mt-2 rounded-xl border border-white/10 bg-white/[0.04] p-3">
// //       <div className="text-[9px] text-white/50">Access grades via myUH portal</div>
// //       <div className="mt-2 rounded bg-white/10 py-2 text-center text-[8px] text-white/30">Sign in again →</div>
// //     </div>
// //     <div className="mt-2 rounded border border-red-500/25 bg-red-500/5 px-2 py-2 text-[8px] text-red-400/65">✗ Schedule buried · External login</div>
// //   </div></Shell>;
// // }

// // function OldEmergency() {
// //   return <Shell dark><div className="px-3 pt-1 text-white">
// //     <div className="text-[9px] font-bold uppercase tracking-widest text-white/40">UHGo · Menu</div>
// //     <div className="mt-2 space-y-1">
// //       {["Academics","Campus Life","Student Services","Health & Safety","Resources","Settings"].map(s => (
// //         <div key={s} className="flex justify-between rounded border border-white/8 bg-white/[0.03] px-2 py-2 text-[9px] text-white/35"><span>{s}</span><span>›</span></div>
// //       ))}
// //     </div>
// //     <div className="mt-2 rounded border border-red-500/25 bg-red-500/5 px-2 py-1.5 text-[8px] text-red-400/65">✗ Emergency contacts 3+ taps away</div>
// //   </div></Shell>;
// // }

// // function OldOrgs() {
// //   return <Shell dark><div className="px-3 pt-1 text-white">
// //     <div className="text-[9px] font-bold uppercase tracking-widest text-white/40">Organizations</div>
// //     <div className="mt-2 space-y-1">
// //       {["Accounting Club","AIA Society","Alpha Beta Gamma","Alpha Chi Omega","Alpha Phi Alpha"].map(s => (
// //         <div key={s} className="rounded border border-white/8 bg-white/[0.03] px-2 py-2 text-[9px] text-white/35">{s}</div>
// //       ))}
// //     </div>
// //     <div className="mt-2 rounded border border-red-500/25 bg-red-500/5 px-2 py-1.5 text-[8px] text-red-400/65">✗ Alphabetical · No relevance · Decision overload</div>
// //   </div></Shell>;
// // }

// // function OldProfile() {
// //   return <Shell dark><div className="px-3 pt-1 text-white">
// //     <div className="text-[9px] font-bold uppercase tracking-widest text-white/40">UHGo · Profile</div>
// //     <div className="mt-2 space-y-1.5">
// //       {["Name","Email","Student ID","Settings","Logout"].map(s => (
// //         <div key={s} className="flex justify-between rounded border border-white/8 bg-white/[0.03] px-2 py-2 text-[9px] text-white/30"><span>{s}</span><span className="text-white/15">›</span></div>
// //       ))}
// //     </div>
// //     <div className="mt-2 rounded border border-red-500/25 bg-red-500/5 px-2 py-1.5 text-[8px] text-red-400/65">✗ Settings page only · No balances · No advisor</div>
// //   </div></Shell>;
// // }

// // function OldStudyGroups() {
// //   return <Shell dark><div className="px-3 pt-3 text-white">
// //     <div className="text-[9px] font-bold uppercase tracking-widest text-white/40">UHGo · Social</div>
// //     <div className="mt-8 rounded border border-red-500/25 bg-red-500/5 p-4 text-[8px] text-red-400/65 leading-relaxed">
// //       ✗ Feature doesn't exist.<br /><br />Students use GroupMe and Discord outside the app.
// //     </div>
// //   </div></Shell>;
// // }

// // /* ─── NEW SCREENS ─── */
// // function NewHome() {
// //   return <Shell><div className="px-3 pt-1 text-white">
// //     <div className="text-[9px] text-white/35">Good morning, Khushbu</div>
// //     <div className="mt-2 rounded-xl border border-[#C8A96A]/25 bg-[#C8A96A]/[0.07] p-2.5">
// //       <div className="font-mono text-[8px] uppercase tracking-wider text-[#C8A96A]/60 mb-1.5">Today's Focus</div>
// //       <div className="space-y-1 text-[9px] text-white/65">
// //         <div>→ CHEM 1331 · SEC 100 at 11:00 <span className="text-white/30">(leave 10:48)</span></div>
// //         <div>→ Project 2 due tomorrow</div>
// //         <div>→ Dining Dollars low — $23.40</div>
// //       </div>
// //     </div>
// //     <div className="mt-2 grid grid-cols-4 gap-1.5">
// //       {[["🪪","ID"],["🍽","Dining"],["🚌","Shuttle"],["🤖","AI"]].map(([e,l]) => (
// //         <div key={l} className="flex flex-col items-center gap-1 rounded-xl border border-white/8 bg-white/[0.03] py-2">
// //           <span className="text-sm">{e}</span><div className="text-[6px] text-white/25">{l}</div>
// //         </div>
// //       ))}
// //     </div>
// //     <div className="mt-2 flex items-start gap-2 rounded-xl border border-white/8 bg-white/[0.02] p-2">
// //       <div className="h-6 w-6 flex-shrink-0 rounded-full bg-[#C8A96A]/20 flex items-center justify-center text-[10px]">🤖</div>
// //       <div className="text-[8px] text-white/50 leading-snug">The Den is quiet. Fresh Food has a 12-min wait. Eat now to make your 11AM.</div>
// //     </div>
// //     <div className="mt-2 rounded-xl border border-white/5 bg-white/[0.02] px-2 py-1.5 text-[8px] text-white/25">📢 Spring registration opens Monday · Career Fair — Fri</div>
// //   </div></Shell>;
// // }

// // function NewMap() {
// //   return <Shell><div className="px-3 pt-1 text-white">
// //     <div className="text-[9px] text-white/35">Campus Map</div>
// //     <div className="mt-2 flex items-center gap-1.5 rounded-xl border border-[#C8A96A]/35 bg-[#C8A96A]/10 px-2 py-1.5 text-[9px] text-[#C8A96A]">🔍 PGH — Philip G. Hoffman Hall</div>
// //     <div className="mt-1.5 rounded-xl bg-[#C8A96A]/[0.08] border border-[#C8A96A]/20 px-2 py-1.5">
// //       <div className="text-[9px] font-medium text-[#C8A96A]">Philip G. Hoffman Hall</div>
// //       <div className="text-[8px] text-white/40">PGH · 240m · ~4 min walk</div>
// //     </div>
// //     <div className="relative mt-2 h-24 overflow-hidden rounded-xl border border-white/8 bg-gradient-to-br from-[#1a1f2e] to-[#0d0f18]">
// //       <svg viewBox="0 0 140 90" className="absolute inset-0 h-full w-full">
// //         <path d="M10 80 C 50 30 90 60 130 20" fill="none" stroke="#C8A96A" strokeWidth="2" strokeDasharray="4 3" />
// //         <circle cx="10" cy="80" r="4" fill="#EDEAE3" />
// //         <circle cx="130" cy="20" r="5" fill="#C8A96A" />
// //         <text x="118" y="14" fontSize="6" fill="#C8A96A">PGH</text>
// //       </svg>
// //     </div>
// //     <div className="mt-2 flex gap-2">
// //       <div className="flex-1 rounded-xl bg-[#C8A96A] py-1.5 text-center text-[8px] font-medium text-black">Open in Maps →</div>
// //       <div className="rounded-xl border border-white/10 px-3 py-1.5 text-[8px] text-white/35">Save</div>
// //     </div>
// //     <div className="mt-2 flex gap-1">
// //       {["PGH","SEC","CBB","SR2"].map(a => (
// //         <div key={a} className="flex-1 rounded-lg bg-white/[0.04] py-1 text-center font-mono text-[7px] text-white/30">{a}</div>
// //       ))}
// //     </div>
// //   </div></Shell>;
// // }

// // function NewDining() {
// //   return <Shell><div className="px-3 pt-1 text-white">
// //     <div className="text-[9px] text-white/35">Dining · Near you</div>
// //     <div className="mt-1 text-[11px] font-medium text-white">On campus now</div>
// //     {[["Fresh Food Co.","70%","12 min",70],["The Den","20%","2 min",20],["Cougar Grounds","45%","6 min",45]].map(([n,s,t,p]) => (
// //       <div key={n} className="mt-1.5 rounded-xl border border-white/8 bg-white/[0.03] p-2">
// //         <div className="flex items-center justify-between text-[9px]">
// //           <span className="font-medium text-white/80">{n}</span>
// //           <span className="text-[#C8A96A]">{t}</span>
// //         </div>
// //         <div className="mt-1 h-1 overflow-hidden rounded-full bg-white/10">
// //           <div className="h-full rounded-full bg-[#C8A96A]" style={{ width: `${p}%` }} />
// //         </div>
// //         <div className="mt-1 flex gap-1">
// //           {["🥗 Veg","🍗 Halal","🌾 GF"].map(f => (
// //             <span key={f} className="rounded-full bg-white/[0.06] px-1.5 py-0.5 text-[6px] text-white/40">{f}</span>
// //           ))}
// //         </div>
// //       </div>
// //     ))}
// //     <div className="mt-2 rounded-xl border border-[#C8A96A]/20 bg-[#C8A96A]/5 px-2 py-1.5 text-[8px] text-[#C8A96A]/80">⚡ Dining Dollars: $23.40 — running low</div>
// //   </div></Shell>;
// // }

// // function NewShuttle() {
// //   return <Shell><div className="px-3 pt-1 text-white">
// //     <div className="text-[9px] text-white/35">Transportation</div>
// //     <div className="mt-1 text-[8px] text-[#C8A96A]">Next class: SEC 100 at 11:00</div>
// //     <div className="mt-2 rounded-xl border border-[#C8A96A]/30 bg-[#C8A96A]/10 p-2">
// //       <div className="text-[7px] uppercase tracking-wider text-[#C8A96A]/60">Recommended</div>
// //       <div className="text-[10px] font-medium text-white mt-0.5">Cougar Line → Tech Bridge</div>
// //       <div className="text-[8px] text-white/40">Arrives 3 min · SEC in 8 min</div>
// //     </div>
// //     <div className="relative mt-2 h-14 overflow-hidden rounded-xl border border-white/8">
// //       <svg viewBox="0 0 140 52" className="absolute inset-0 h-full w-full">
// //         <path d="M10 42 C 40 10 80 42 130 12" fill="none" stroke="#C8A96A" strokeWidth="1.5" strokeDasharray="3 2" />
// //         {[10,45,90,130].map((x,i) => <circle key={i} cx={x} cy={i%2===0?42:12} r="3.5" fill="#0a0a0b" stroke="#C8A96A" strokeWidth="1" />)}
// //         <circle cx="10" cy="42" r="4" fill="#EDEAE3" />
// //       </svg>
// //     </div>
// //     <div className="mt-2 space-y-1">
// //       {[["Cougar Line","3 min"],["Cougar Ride","On demand"],["Sugar Land","Hourly"],["Ride & Dine","5 min"]].map(([n,t]) => (
// //         <div key={n} className="flex justify-between rounded-lg bg-white/[0.03] px-2 py-1 text-[8px]">
// //           <span className="text-white/55">{n}</span><span className="text-[#C8A96A]">{t}</span>
// //         </div>
// //       ))}
// //     </div>
// //   </div></Shell>;
// // }

// // function NewSchedule() {
// //   return <Shell><div className="px-3 pt-1 text-white">
// //     <div className="text-[9px] text-white/35">Today</div>
// //     <div className="mt-1.5 space-y-1.5">
// //       {[{t:"9:00",n:"COSC 3360",r:"PGH 232",done:true},{t:"11:00",n:"CHEM 1331",r:"SEC 100",active:true},{t:"14:30",n:"MATH 2415",r:"CBB 120"}].map(c => (
// //         <div key={c.n} className={`flex items-center gap-2 rounded-xl border px-2 py-2 ${c.active?"border-[#C8A96A]/30 bg-[#C8A96A]/[0.07]":c.done?"border-white/5 opacity-35":"border-white/8 bg-white/[0.02]"}`}>
// //           <div className="w-8 font-mono text-[8px] text-white/40">{c.t}</div>
// //           <div className="flex-1">
// //             <div className={`text-[10px] font-medium ${c.active?"text-[#C8A96A]":"text-white/70"}`}>{c.n}</div>
// //             <div className="text-[7px] text-white/30">{c.r}</div>
// //           </div>
// //           {c.active && <div className="rounded-full bg-[#C8A96A]/20 px-2 py-0.5 text-[7px] text-[#C8A96A]">Now</div>}
// //         </div>
// //       ))}
// //     </div>
// //     <div className="mt-2 rounded-xl border border-white/8 bg-white/[0.02] p-2">
// //       <div className="font-mono text-[7px] uppercase tracking-wider text-white/25 mb-1.5">Deadlines</div>
// //       {[["COSC 3360 · Project 2","Tomorrow","red"],["CHEM 1331 · Lab","Friday",""],["MATH · HW 7","Sunday",""]].map(([a,b,c]) => (
// //         <div key={a} className="flex justify-between py-1 text-[8px] border-b border-white/5 last:border-0">
// //           <span className="text-white/45">{a}</span>
// //           <span className={c==="red"?"text-red-400/80":"text-white/25"}>{b}</span>
// //         </div>
// //       ))}
// //     </div>
// //   </div></Shell>;
// // }

// // function NewEmergency() {
// //   return <Shell><div className="px-3 pt-1 text-white">
// //     <div className="text-[9px] text-white/35">Emergency Assistance</div>
// //     <div className="mt-2 space-y-1.5">
// //       {[["🚔","University Police","Emergency & safety"],["💬","CAPS Counseling","Mental health"],["🏥","Student Health","Medical support"],["🏢","Facilities","Building emergencies"],["✈️","Intl. Students","Visa & travel"]].map(([ic,n,r]) => (
// //         <div key={n} className="flex items-center gap-2 rounded-xl border border-white/8 bg-white/[0.02] px-2 py-2">
// //           <div className="h-7 w-7 flex-shrink-0 rounded-full bg-white/5 flex items-center justify-center text-[10px]">{ic}</div>
// //           <div className="flex-1">
// //             <div className="text-[9px] font-medium text-white/80">{n}</div>
// //             <div className="text-[7px] text-white/30">{r}</div>
// //           </div>
// //           <div className="rounded-full border border-[#C8A96A]/25 bg-[#C8A96A]/10 px-2 py-0.5 text-[7px] text-[#C8A96A]">Call →</div>
// //         </div>
// //       ))}
// //     </div>
// //     <div className="mt-2 rounded-xl border border-[#C8A96A]/15 bg-[#C8A96A]/[0.04] px-2 py-1.5 text-[8px] text-[#C8A96A]/55">0 navigation steps from home screen</div>
// //   </div></Shell>;
// // }

// // function NewOrgs() {
// //   return <Shell><div className="px-3 pt-1 text-white">
// //     <div className="text-[9px] text-white/35">Clubs · Computer Science</div>
// //     <div className="mt-1.5 space-y-1.5">
// //       {[["C","CodeCoogs","CS Club","High match"],["X","CougarCS","Competitive Prog.","High match"],["H","UH Hackathon","Hackathon","Trending"],["A","AI & ML Society","Research","Recommended"]].map(([l,n,t,m]) => (
// //         <div key={n} className="flex items-center gap-2 rounded-xl border border-white/8 bg-white/[0.02] px-2 py-2">
// //           <div className="h-8 w-8 flex-shrink-0 rounded-xl bg-[#C8A96A]/15 flex items-center justify-center text-[#C8A96A] text-[11px] font-display">{l}</div>
// //           <div className="flex-1">
// //             <div className="text-[9px] font-medium text-white/80">{n}</div>
// //             <div className="text-[7px] text-white/30">{t}</div>
// //           </div>
// //           <span className="rounded-full border border-[#C8A96A]/20 bg-[#C8A96A]/5 px-2 py-0.5 text-[7px] text-[#C8A96A]/60">{m}</span>
// //         </div>
// //       ))}
// //     </div>
// //     <div className="mt-2 flex gap-1 flex-wrap">
// //       {["Hackathons","Cybersecurity","AI/ML"].map(t => (
// //         <span key={t} className="rounded-full border border-white/8 px-2 py-0.5 text-[7px] text-white/25">{t}</span>
// //       ))}
// //     </div>
// //   </div></Shell>;
// // }

// // function NewStudyGroups() {
// //   return <Shell><div className="px-3 pt-1 text-white">
// //     <div className="text-[9px] text-white/35">Study Groups · Your Courses</div>
// //     <div className="mt-1.5 space-y-1.5">
// //       {[["🧪","CHEM 1331","4 members · Today 6PM · Library 2F"],["💻","COSC 3360","3 members · Tomorrow 4PM · PGH"],["📐","MATH 2415","6 members · Friday 5PM · Cougar Village"]].map(([ic,n,d]) => (
// //         <div key={n} className="flex gap-2 rounded-xl border border-white/8 bg-white/[0.02] p-2">
// //           <div className="h-8 w-8 flex-shrink-0 rounded-xl bg-white/5 flex items-center justify-center text-sm">{ic}</div>
// //           <div><div className="text-[9px] font-medium text-white/80">{n}</div><div className="text-[7px] text-white/30">{d}</div></div>
// //         </div>
// //       ))}
// //     </div>
// //     <div className="mt-2 rounded-xl border border-dashed border-white/10 p-2 text-center text-[8px] text-white/20">+ Find classmates in CHEM 1331</div>
// //     <div className="mt-2 grid grid-cols-2 gap-1.5 text-[7px] text-white/30">
// //       <div className="rounded-lg bg-white/[0.03] border border-white/5 p-1.5">📎 Shared notes</div>
// //       <div className="rounded-lg bg-white/[0.03] border border-white/5 p-1.5">📅 Study sessions</div>
// //     </div>
// //   </div></Shell>;
// // }

// // function NewProfile() {
// //   return <Shell><div className="px-3 pt-1 text-white">
// //     <div className="text-[9px] text-white/35">Profile</div>
// //     <div className="mt-2 rounded-xl border border-[#C8A96A]/20 bg-gradient-to-br from-[#C8A96A]/10 to-transparent p-3">
// //       <div className="font-mono text-[7px] text-[#C8A96A]/50 mb-0.5">Digital Student ID</div>
// //       <div className="font-display text-[11px] text-white">Khushbu Patel</div>
// //       <div className="text-[8px] text-white/35">UH ID: 1234567 · CS + Pop. Health</div>
// //       <div className="mt-2 h-8 w-24 rounded-md bg-white/5 flex items-center justify-center font-mono text-[6px] text-white/15">▓▓▓ barcode ▓▓▓</div>
// //     </div>
// //     <div className="mt-2 grid grid-cols-2 gap-1.5">
// //       {[["Dining Dollars","$23.40","red",15],["ShastaBUCKS","$48.20","gold",45]].map(([l,v,c,p]) => (
// //         <div key={l} className="rounded-xl border border-white/8 bg-white/[0.02] p-2">
// //           <div className="text-[7px] text-white/25">{l}</div>
// //           <div className="font-display text-[14px] text-white mt-0.5">{v}</div>
// //           <div className="mt-1.5 h-1 overflow-hidden rounded-full bg-white/10">
// //             <div className={`h-full rounded-full ${c==="red"?"bg-red-400/60":"bg-[#C8A96A]/60"}`} style={{width:`${p}%`}} />
// //           </div>
// //         </div>
// //       ))}
// //     </div>
// //     <div className="mt-2 flex items-center gap-2 rounded-xl border border-white/8 bg-white/[0.02] p-2">
// //       <div className="h-7 w-7 rounded-full bg-[#C8A96A]/20 flex items-center justify-center text-[#C8A96A] text-[10px]">A</div>
// //       <div>
// //         <div className="text-[9px] text-white/70">Academic Advisor</div>
// //         <div className="text-[7px] text-white/30">advisor@uh.edu</div>
// //       </div>
// //       <div className="ml-auto text-[7px] text-[#C8A96A]/60">Email →</div>
// //     </div>
// //   </div></Shell>;
// // }

// // /* ══════════════════════════════════════════════
// //    DRAG COMPARE SLIDER
// // ══════════════════════════════════════════════ */
// // function CompareSlider({ Before, After }) {
// //   const [pct, setPct] = useState(50);
// //   const ref = useRef(null);
// //   const dragging = useRef(false);
// //   const move = useCallback((clientX) => {
// //     if (!ref.current) return;
// //     const { left, width } = ref.current.getBoundingClientRect();
// //     setPct(Math.max(4, Math.min(96, ((clientX - left) / width) * 100)));
// //   }, []);
// //   return (
// //     <div ref={ref}
// //       className="relative select-none overflow-hidden rounded-[2rem] border border-white/10 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.9)]"
// //       style={{ aspectRatio: "9/19", cursor: "col-resize", touchAction: "none" }}
// //       onMouseDown={() => { dragging.current = true; }}
// //       onMouseMove={e => { if (dragging.current) move(e.clientX); }}
// //       onMouseUp={() => { dragging.current = false; }}
// //       onMouseLeave={() => { dragging.current = false; }}
// //       onTouchMove={e => move(e.touches[0].clientX)}
// //     >
// //       <div className="absolute left-1/2 top-2.5 z-40 h-[14px] w-[80px] -translate-x-1/2 rounded-full bg-black" />
// //       <div className="absolute inset-0"><After /></div>
// //       <div className="absolute inset-0 overflow-hidden" style={{ clipPath: `inset(0 ${100-pct}% 0 0)` }}><Before /></div>
// //       <div className="pointer-events-none absolute inset-y-0 z-30 flex items-center justify-center" style={{ left: `${pct}%`, transform: "translateX(-50%)" }}>
// //         <div className="h-full w-[1.5px] bg-white/30" />
// //         <div className="absolute flex h-8 w-8 items-center justify-center rounded-full border border-white/20 bg-white/10 text-[11px] backdrop-blur-md text-white">⇔</div>
// //       </div>
// //     </div>
// //   );
// // }

// // /* ══════════════════════════════════════════════
// //    FEATURE PAIRS
// // ══════════════════════════════════════════════ */
// // const PAIRS = [
// //   { key:"home",        label:"Home",           captions:["Daily Focus + AI","Smart quick access","Proactive reminders"],        Before:OldHome,        After:NewHome },
// //   { key:"map",         label:"Campus Map",     captions:["Abbreviation search","Walking time estimate","Google Maps handoff"],   Before:OldMap,         After:NewMap },
// //   { key:"dining",      label:"Dining",         captions:["Smart recommendations","Menus + dietary filters","Occupancy alerts"],   Before:OldDining,      After:NewDining },
// //   { key:"shuttle",     label:"Transportation", captions:["Context-aware guidance","Live arrival times","Route recommendations"],  Before:OldShuttle,     After:NewShuttle },
// //   { key:"schedule",    label:"Schedule",       captions:["Today's classes surfaced","Assignment deadlines","No external logins"], Before:OldSchedule,    After:NewSchedule },
// //   { key:"emergency",   label:"Emergency",      captions:["One-tap calling","0 navigation steps","All contacts unified"],         Before:OldEmergency,   After:NewEmergency },
// //   { key:"orgs",        label:"Organizations",  captions:["Major-matched clubs","Trending skills","Personalized ranking"],         Before:OldOrgs,        After:NewOrgs },
// //   { key:"studygroups", label:"Study Groups",   captions:["Course-based discovery","Shared resources","Exam coordination"],       Before:OldStudyGroups, After:NewStudyGroups },
// //   { key:"profile",     label:"Profile",        captions:["Digital ID","Dining balances + insights","Advisor + personalization"], Before:OldProfile,     After:NewProfile },
// // ];

// // /* ══════════════════════════════════════════════
// //    PINNED SOLUTION SHOWCASE
// // ══════════════════════════════════════════════ */
// // function SolutionShowcase() {
// //   const stage = useRef(null);
// //   const { scrollYProgress } = useScroll({ target: stage, offset: ["start start", "end end"] });
// //   const [active, setActive] = useState(0);
// //   useMotionValueEvent(scrollYProgress, "change", v => {
// //     setActive(Math.min(PAIRS.length - 1, Math.floor(v * PAIRS.length)));
// //   });
// //   const feature = PAIRS[active];
// //   return (
// //     <div ref={stage} style={{ height: `${PAIRS.length * 100}vh` }} className="relative">
// //       <div className="sticky top-0 flex h-screen items-center overflow-hidden">
// //         <div className="pointer-events-none absolute left-1/2 top-1/2 h-[480px] w-[480px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/5 blur-[150px]" />
// //         <div className="mx-auto w-full max-w-7xl px-6 md:px-10">
// //           <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-12">
// //             {/* step list */}
// //             <div className="md:col-span-3">
// //               <div className="font-mono text-[10px] uppercase tracking-eyebrow text-muted mb-4">
// //                 {String(active+1).padStart(2,"0")} / {String(PAIRS.length).padStart(2,"0")}
// //               </div>
// //               <ul className="space-y-1.5">
// //                 {PAIRS.map((f,i) => (
// //                   <motion.li key={f.key}
// //                     animate={{ opacity: i===active?1:0.14, x: i===active?4:0 }}
// //                     transition={{ duration: 0.35, ease: EL }}
// //                     className="flex items-center gap-2 font-display text-xl text-bone md:text-2xl"
// //                   >
// //                     {i===active && <motion.span layoutId="nav-dot" className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gold" />}
// //                     {f.label}
// //                   </motion.li>
// //                 ))}
// //               </ul>
// //             </div>
// //             {/* phone */}
// //             <div className="flex justify-center md:col-span-5">
// //               <div className="w-[215px] md:w-[248px]">
// //                 <AnimatePresence mode="wait">
// //                   <motion.div key={feature.key}
// //                     initial={{ opacity:0, y:18, scale:0.96 }}
// //                     animate={{ opacity:1, y:0, scale:1 }}
// //                     exit={{ opacity:0, y:-10, scale:0.97 }}
// //                     transition={{ duration: 0.42, ease: EL }}
// //                   >
// //                     <CompareSlider Before={feature.Before} After={feature.After} />
// //                   </motion.div>
// //                 </AnimatePresence>
// //                 <p className="mt-3 text-center font-mono text-[9px] text-white/18">drag to compare</p>
// //               </div>
// //             </div>
// //             {/* captions */}
// //             <div className="md:col-span-4">
// //               <AnimatePresence mode="wait">
// //                 <motion.div key={feature.key+"_c"}
// //                   initial={{ opacity:0, x:14 }}
// //                   animate={{ opacity:1, x:0 }}
// //                   exit={{ opacity:0, x:-8 }}
// //                   transition={{ duration: 0.38, ease: EL }}
// //                 >
// //                   <div className="font-mono text-[10px] uppercase tracking-eyebrow text-gold/55 mb-4">{feature.label} · Redesigned</div>
// //                   <ul className="space-y-3">
// //                     {feature.captions.map((c,i) => (
// //                       <motion.li key={c}
// //                         initial={{ opacity:0, x:10 }}
// //                         animate={{ opacity:1, x:0 }}
// //                         transition={{ duration:0.32, delay:i*0.07, ease:EL }}
// //                         className="flex items-center gap-3 text-bone/65 text-base"
// //                       >
// //                         <div className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gold/55" />{c}
// //                       </motion.li>
// //                     ))}
// //                   </ul>
// //                 </motion.div>
// //               </AnimatePresence>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // /* ══════════════════════════════════════════════
// //    ARCH DIAGRAM
// // ══════════════════════════════════════════════ */
// // function ArchDiagram() {
// //   const ref = useRef(null);
// //   const inView = useInView(ref, { once:true, margin:"-15%" });
// //   const rows = [
// //     { label:"Student",   nodes:["Schedule","Location","Enrollment","Preferences"], accent:false },
// //     { label:"DigitalUH", nodes:["AI Assistant","Intent Classifier","Recommendation Engine","Campus Router"], accent:true },
// //     { label:"Services",  nodes:["Supabase (18 tables)","Google Maps API","Microsoft OAuth","Supabase Edge"], accent:false },
// //   ];
// //   return (
// //     <div ref={ref} className="overflow-hidden rounded-3xl border border-white/8 bg-white/[0.02] p-8">
// //       <div className="font-mono text-[10px] uppercase tracking-eyebrow text-gold/60 mb-8">System Architecture</div>
// //       <div className="space-y-8">
// //         {rows.map((row,ri) => (
// //           <div key={row.label} className="flex items-center gap-6">
// //             <div className="w-24 flex-shrink-0 font-mono text-[10px] text-bone/20">{row.label}</div>
// //             <div className="flex flex-wrap gap-2">
// //               {row.nodes.map((node,ni) => (
// //                 <motion.div key={node}
// //                   initial={{ opacity:0, scale:0.85 }}
// //                   animate={inView?{opacity:1,scale:1}:{}}
// //                   transition={{ duration:0.4, delay:ri*0.18+ni*0.08, ease:EL }}
// //                   className={`rounded-xl border px-3 py-2 text-sm ${row.accent?"border-gold/30 bg-gold/10 text-gold":"border-white/8 bg-white/[0.03] text-bone/55"}`}
// //                 >{node}</motion.div>
// //               ))}
// //             </div>
// //           </div>
// //         ))}
// //         <motion.div initial={{opacity:0}} animate={inView?{opacity:1}:{}} transition={{duration:0.6,delay:0.8}}
// //           className="flex flex-wrap gap-2 pl-[7.5rem]">
// //           {["PKCE Auth flow","Server-side Maps proxy","Real-time subscriptions","0 external logins"].map(t => (
// //             <span key={t} className="rounded-full border border-white/8 px-3 py-1 font-mono text-[9px] text-bone/25">{t}</span>
// //           ))}
// //         </motion.div>
// //       </div>
// //     </div>
// //   );
// // }

// // /* ══════════════════════════════════════════════
// //    SCROLL PROGRESS BAR
// // ══════════════════════════════════════════════ */
// // function ProgressBar() {
// //   const { scrollYProgress } = useScroll();
// //   const scaleX = useTransform(scrollYProgress, [0,1], [0,1]);
// //   return <motion.div style={{ scaleX, transformOrigin:"left" }} className="fixed inset-x-0 top-0 z-50 h-[1.5px] bg-gold/70" />;
// // }

// // /* ══════════════════════════════════════════════
// //    SECTION DIVIDER
// // ══════════════════════════════════════════════ */
// // function Div({ n, label }) {
// //   return (
// //     <div className="flex items-center gap-4 mb-12">
// //       <span className="font-mono text-[10px] text-gold/45">{String(n).padStart(2,"0")}</span>
// //       <div className="h-px flex-1 bg-white/8" />
// //       <span className="font-mono text-[10px] uppercase tracking-eyebrow text-white/20">{label}</span>
// //     </div>
// //   );
// // }

// // /* ══════════════════════════════════════════════
// //    MAIN EXPORT
// // ══════════════════════════════════════════════ */
// // const META = [
// //   ["Role","Lead UX & Front-End"],
// //   ["Year","2025 — 2026"],
// //   ["Platform","iOS · Android · Web"],
// //   ["Type","Concept → Prototype"],
// // ];

// // const NEW_SCREENS = [
// //   { label:"Home",        C:NewHome },
// //   { label:"Campus Map",  C:NewMap },
// //   { label:"Dining",      C:NewDining },
// //   { label:"Shuttle",     C:NewShuttle },
// //   { label:"Schedule",    C:NewSchedule },
// //   { label:"Emergency",   C:NewEmergency },
// //   { label:"Orgs",        C:NewOrgs },
// //   { label:"Study Groups",C:NewStudyGroups },
// //   { label:"Profile",     C:NewProfile },
// // ];

// // export default function DigitalUH() {
// //   return (
// //     <section id="digitaluh" className="relative">
// //       <ProgressBar />

// //       {/* HERO */}
// //       <div className="mx-auto max-w-7xl px-6 pt-32 md:px-10 md:pt-48">
// //         <Eyebrow>03 — Featured Case Study</Eyebrow>
// //         <div className="mt-8 flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
// //           <motion.h2 initial={{ opacity:0, y:40 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:1, ease:EL }}
// //             className="font-display text-6xl leading-[0.9] tracking-tightest text-bone md:text-[8rem]">
// //             Digital<span className="italic text-gold">UH</span>
// //           </motion.h2>
// //           <motion.p initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:0.9, delay:0.15, ease:EL }}
// //             className="max-w-sm text-bone/50">
// //             UHGo exists. Students use it because they have to. DigitalUH is what it should be — a campus platform designed around how students actually live.
// //           </motion.p>
// //         </div>
// //         <div className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/5 md:grid-cols-4">
// //           {META.map(([k,v]) => (
// //             <div key={k} className="bg-ink-900 p-5">
// //               <div className="font-mono text-[10px] uppercase tracking-eyebrow text-muted">{k}</div>
// //               <div className="mt-2 text-bone">{v}</div>
// //             </div>
// //           ))}
// //         </div>
// //       </div>

// //       {/* §1 THE PROBLEM */}
// //       <div className="mx-auto max-w-7xl px-6 pt-28 md:px-10 md:pt-40">
// //         <Div n={1} label="The Problem" />
// //         <motion.h3 initial={{ opacity:0, y:24 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:0.8, ease:EL }}
// //           className="max-w-2xl font-display text-3xl leading-tight text-bone md:text-5xl mb-16">
// //           UHGo was built to check institutional boxes.{" "}
// //           <span className="text-bone/30">Not to help students navigate their day.</span>
// //         </motion.h3>

// //         <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
// //           {[
// //             { label:"Home",         note:"Cluttered tiles. Poor hierarchy.",                   C:OldHome },
// //             { label:"Campus Map",   note:"Building abbreviations aren't recognized.",           C:OldMap },
// //             { label:"Dining",       note:"Students can't view menus or compare options.",       C:OldDining },
// //             { label:"Shuttle",      note:"Flat list. No arrival times. No context.",            C:OldShuttle },
// //             { label:"Schedule",     note:"Daily schedules hidden behind external logins.",      C:OldSchedule },
// //             { label:"Emergency",    note:"Important contacts take too many steps to find.",     C:OldEmergency },
// //             { label:"Organizations",note:"Hundreds of clubs. Zero personalization.",            C:OldOrgs },
// //             { label:"Profile",      note:"Settings page only — not a student dashboard.",       C:OldProfile },
// //           ].map(({label,note,C},i) => (
// //             <motion.div key={label}
// //               initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true, margin:"-5%" }}
// //               transition={{ duration:0.5, delay:(i%4)*0.07, ease:EL }} className="group">
// //               <div className="relative overflow-hidden rounded-[1.5rem] border border-red-500/15 transition-all duration-400 group-hover:border-red-500/30"
// //                 style={{ aspectRatio:"9/19" }}>
// //                 <div className="absolute left-1/2 top-2 z-30 h-[10px] w-[60px] -translate-x-1/2 rounded-full bg-black" />
// //                 <C />
// //                 <div className="absolute bottom-3 left-2 right-2 z-20 rounded-xl border border-red-500/25 bg-red-950/80 px-2 py-1.5 backdrop-blur text-[7px] text-red-400/75 leading-snug">{note}</div>
// //               </div>
// //               <div className="mt-2 text-center font-mono text-[10px] text-bone/30">{label}</div>
// //             </motion.div>
// //           ))}
// //         </div>
// //       </div>

// //       {/* §2 RESEARCH */}
// //       <div className="mx-auto max-w-7xl px-6 pt-28 md:px-10 md:pt-40">
// //         <Div n={2} label="Research" />
// //         <motion.h3 initial={{ opacity:0, y:24 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:0.8, ease:EL }}
// //           className="max-w-2xl font-display text-3xl leading-tight text-bone md:text-4xl mb-14">
// //           Every decision traces back to observed friction —{" "}
// //           <span className="text-bone/30">not assumptions.</span>
// //         </motion.h3>

// //         <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
// //           {[
// //             { e:"📋", stat:"1st day", label:"Search failure", note:"Abbreviation search fails exactly when freshmen need it most — first class, new building, time pressure." },
// //             { e:"🍽", stat:"", label:"Decision gap", note:"UHGo shows 'Open' or 'Closed'. Students need: how busy, what's on the menu, can I afford it, will I make it back?" },
// //             { e:"📅", stat:"10×", label:"Daily schedule checks", note:"Schedules checked every morning. Grades checked 6 times a semester. UHGo prioritizes grades." },
// //             { e:"🚌", stat:"", label:"Name blindness", note:"Cougar Ride, Ride & Dine, Sugar Land Shuttle — names that tell students nothing without reading docs they've never seen." },
// //             { e:"🆘", stat:"3+", label:"Taps to emergency", note:"Campus safety resources buried in menus designed for browsing — not for moments that don't allow for searching." },
// //             { e:"👥", stat:"0", label:"Study group tools", note:"Students form groups via GroupMe because UHGo offers nothing. The enrollment data to fix this already exists in the app." },
// //             { e:"🔄", stat:"", label:"External redirect loop", note:"Grades, schedules, and advisor info bounce students to external SSO portals. Each redirect is a moment of abandonment." },
// //             { e:"🎓", stat:"500+", label:"Organizations listed", note:"Alphabetical and unfiltered. Students scroll for 30 seconds and close the page. Relevance beats volume." },
// //             { e:"💳", stat:"", label:"Surprise at the register", note:"Dining Dollars run out silently. Students discover the problem at the cashier — avoidable with one proactive notification." },
// //           ].map(({e,stat,label,note},i) => (
// //             <motion.div key={label}
// //               initial={{ opacity:0, y:24 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true, margin:"-8%" }}
// //               transition={{ duration:0.55, delay:(i%3)*0.07, ease:EL }}
// //               className="rounded-2xl border border-white/8 bg-white/[0.02] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-gold/25"
// //             >
// //               <div className="flex items-start justify-between mb-2">
// //                 <span className="text-xl">{e}</span>
// //                 {stat && <span className="font-display text-2xl text-gold">{stat}</span>}
// //               </div>
// //               <div className="font-mono text-[10px] uppercase tracking-eyebrow text-gold/55 mb-1.5">{label}</div>
// //               <p className="text-[12px] leading-snug text-bone/45">{note}</p>
// //             </motion.div>
// //           ))}
// //         </div>
// //       </div>

// //       {/* §3 DESIGN STRATEGY */}
// //       <div className="mx-auto max-w-7xl px-6 pt-28 md:px-10 md:pt-40">
// //         <Div n={3} label="Design Strategy" />
// //         <motion.h3 initial={{ opacity:0, y:24 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:0.8, ease:EL }}
// //           className="max-w-xl font-display text-3xl leading-tight text-bone md:text-4xl mb-14">
// //           One philosophy behind every screen.
// //         </motion.h3>

// //         <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
// //           {[
// //             ["P1","Replace searching with guidance","If the app knows your next class, your location, and the time — it should tell you what to do next. Not wait to be asked."],
// //             ["P2","Design for the first two weeks","The highest-stress moments are the first days of each semester. That's when navigation fails, menus confuse, and apps get uninstalled."],
// //             ["P3","Surface the 3 things students actually use","Schedule, dining, and navigation account for 80% of daily use. Everything else goes one tap further — not equal to everything else."],
// //             ["P4","Make emergencies frictionless","Any experience that might be needed under stress must be reachable in zero navigation steps from the home screen."],
// //             ["P5","Relevance over volume","5 clubs matched to your major with upcoming events is more useful than 500 clubs listed alphabetically. Same data, different intent."],
// //             ["P6","Proactive over reactive","Alert the student before the balance is empty. Before the class starts. Before the deadline arrives. The app already has all the data."],
// //           ].map(([n,title,desc],i) => (
// //             <motion.div key={n}
// //               initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true, margin:"-8%" }}
// //               transition={{ duration:0.55, delay:(i%3)*0.07, ease:EL }}
// //               className="group rounded-2xl border border-white/8 bg-white/[0.02] p-6 transition-all duration-400 hover:-translate-y-1 hover:border-gold/25 hover:bg-white/[0.04]"
// //             >
// //               <div className="font-mono text-[10px] text-gold/50 mb-3">{n}</div>
// //               <div className="font-display text-xl text-bone mb-2">{title}</div>
// //               <p className="text-sm text-bone/40 leading-relaxed">{desc}</p>
// //             </motion.div>
// //           ))}
// //         </div>
// //       </div>

// //       {/* §4 THE SOLUTION */}
// //       <div className="pt-28 md:pt-40">
// //         <div className="mx-auto max-w-7xl px-6 md:px-10">
// //           <Div n={4} label="The Solution" />
// //           <motion.h3 initial={{ opacity:0, y:24 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:0.8, ease:EL }}
// //             className="max-w-2xl font-display text-3xl leading-tight text-bone md:text-5xl mb-4">
// //             Every screen, redesigned.{" "}
// //             <span className="text-bone/30">Drag to compare.</span>
// //           </motion.h3>
// //           <p className="text-bone/35 max-w-md mb-16 text-sm">Scroll through all nine features. Each comparison is interactive — drag the divider to see before and after.</p>
// //         </div>
// //         <SolutionShowcase />
// //       </div>

// //       {/* §5 ARCHITECTURE */}
// //       <div className="mx-auto max-w-7xl px-6 pt-28 md:px-10 md:pt-40">
// //         <Div n={5} label="Architecture" />
// //         <motion.h3 initial={{ opacity:0, y:24 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:0.8, ease:EL }}
// //           className="max-w-2xl font-display text-3xl leading-tight text-bone md:text-5xl mb-14">
// //           Built to feel like a product,{" "}
// //           <span className="text-bone/30">not a prototype.</span>
// //         </motion.h3>
// //         <ArchDiagram />
// //         <div className="mt-6 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/5 md:grid-cols-4">
// //           {[
// //             ["Frontend","React Native · TypeScript","Typed component architecture, strict prop interfaces shared across iOS, Android, and web."],
// //             ["Auth & Data","Microsoft OAuth · Supabase","PKCE-based OAuth for UH credentials. 18 Supabase tables shared across all modules."],
// //             ["AI Layer","Intent Classifier · Edge Functions","Rules-based classifier routes campus queries. Falls through to LLM for open-ended questions."],
// //             ["Maps","Google Maps · Server Proxy","Server-side API key proxy handles walking estimates and deep-link handoffs securely."],
// //           ].map(([label,tech,desc],i) => (
// //             <motion.div key={label}
// //               initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true, margin:"-8%" }}
// //               transition={{ duration:0.6, delay:i*0.08, ease:EL }}
// //               className="bg-ink-900 p-6">
// //               <div className="font-mono text-[10px] uppercase tracking-eyebrow text-muted">{label}</div>
// //               <div className="mt-3 font-display text-lg text-gold">{tech}</div>
// //               <p className="mt-3 text-sm leading-relaxed text-bone/45">{desc}</p>
// //             </motion.div>
// //           ))}
// //         </div>
// //       </div>

// //       {/* §6 FINAL PRODUCT */}
// //       <div className="mx-auto max-w-7xl px-6 pt-28 pb-40 md:px-10 md:pt-40 md:pb-56">
// //         <Div n={6} label="Final Product" />
// //         <motion.h3 initial={{ opacity:0, y:24 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:0.8, ease:EL }}
// //           className="max-w-xl font-display text-3xl leading-tight text-bone md:text-5xl mb-16">
// //           One coherent experience.{" "}
// //           <span className="italic text-gold">Nine redesigned screens.</span>
// //         </motion.h3>

// //         <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
// //           {NEW_SCREENS.map(({label,C},i) => (
// //             <motion.div key={label}
// //               initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true, margin:"-5%" }}
// //               transition={{ duration:0.55, delay:(i%5)*0.07, ease:EL }} className="group">
// //               <div className="relative overflow-hidden rounded-[1.6rem] border border-white/8 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.7)] transition-all duration-500 group-hover:-translate-y-2 group-hover:border-gold/20 group-hover:shadow-[0_30px_80px_-15px_rgba(200,169,106,0.12)]"
// //                 style={{ aspectRatio:"9/19" }}>
// //                 <div className="absolute left-1/2 top-2 z-30 h-[10px] w-[60px] -translate-x-1/2 rounded-full bg-black" />
// //                 <C />
// //               </div>
// //               <div className="mt-2 text-center font-mono text-[10px] text-bone/30">{label}</div>
// //             </motion.div>
// //           ))}
// //         </div>

// //         {/* reflection */}
// //         <motion.blockquote
// //           initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true, margin:"-10%" }}
// //           transition={{ duration:1, ease:EL }}
// //           className="mt-32 max-w-4xl font-display text-3xl leading-snug tracking-tight text-bone md:text-5xl"
// //         >
// //           The most important design decision wasn't visual.{" "}
// //           <span className="text-bone/30">It was deciding which problems were actually worth solving.</span>
// //         </motion.blockquote>

// //         <div className="mt-16 h-px w-full bg-white/8" />
// //         <div className="mt-12 flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
// //           <div className="font-mono text-[11px] uppercase tracking-eyebrow text-muted">DigitalUH · 2025 — 2026</div>
// //           <div className="flex flex-wrap gap-3">
// //             {["React Native","TypeScript","Supabase","Google Maps API","Framer Motion"].map(t => (
// //               <span key={t} className="rounded-full border border-white/10 px-3 py-1 font-mono text-[10px] uppercase tracking-wide text-bone/40">{t}</span>
// //             ))}
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }
// /**
//  * DigitalUH.jsx — Cinematic case study, v3
//  * Drop-in replacement. Nothing else in the portfolio changes.
//  *
//  * 6 sections: Problem → Research → Strategy → Solution (pinned) → Architecture → Final Grid
//  * Deps: framer-motion (already in project). No new installs needed.
//  */

// import { useRef, useState, useCallback } from "react";
// import {
//   motion,
//   useScroll,
//   useTransform,
//   useMotionValueEvent,
//   useInView,
//   AnimatePresence,
// } from "framer-motion";
// import { Eyebrow, GlassCard } from "../Primitives";
// import { PhoneFrame, SCREENS } from "./DigitalUHScreens";

// const EL = [0.16, 1, 0.3, 1];

// /* ══════════════════════════════════════════════
//    PHONE SHELL — shared wrapper
// ══════════════════════════════════════════════ */
// function Shell({ dark = false, children }) {
//   return (
//     <div className={`relative h-full overflow-hidden ${dark ? "bg-[#111318]" : "bg-[#0a0a0b]"}`}>
//       <div className="absolute left-1/2 top-2.5 z-30 h-[13px] w-[76px] -translate-x-1/2 rounded-full bg-black" />
//       <div className="absolute inset-x-0 top-0 z-20 flex items-center justify-between px-5 pt-2 font-mono text-[8px] text-white/30">
//         <span>9:41</span><span>●●● WiFi 🔋</span>
//       </div>
//       <div className="absolute inset-0 pt-8">{children}</div>
//     </div>
//   );
// }

// /* ─── OLD SCREENS ─── */
// function OldHome() {
//   return <Shell dark><div className="px-3 pt-1 text-white">
//     <div className="text-[9px] font-bold uppercase tracking-widest text-white/40">UHGo</div>
//     <div className="mt-2 grid grid-cols-3 gap-1.5">
//       {["Grades","Schedule","Maps","Dining","Shuttle","Library","Directory","News","More"].map(t => (
//         <div key={t} className="flex flex-col items-center gap-1 rounded-xl border border-white/8 bg-white/[0.04] py-3">
//           <div className="h-5 w-5 rounded-lg bg-white/15" />
//           <div className="text-[7px] text-white/35">{t}</div>
//         </div>
//       ))}
//     </div>
//     <div className="mt-2 rounded-xl border border-white/8 bg-white/[0.03] p-2 text-[8px] text-white/20">University announcements feed…</div>
//     <div className="absolute right-2 top-10 rounded bg-red-500/75 px-1.5 py-0.5 text-[7px] text-white">Poor hierarchy</div>
//   </div></Shell>;
// }

// function OldMap() {
//   return <Shell dark><div className="px-3 pt-1 text-white">
//     <div className="text-[9px] font-bold uppercase tracking-widest text-white/40">UHGo · Maps</div>
//     <div className="mt-2 flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-2 py-1.5 text-[9px] text-white/30">🔍 Search buildings…</div>
//     <div className="mt-1.5 rounded-lg border border-red-500/30 bg-red-500/5 px-2 py-1.5 text-[8px] text-red-400/80">⚠ "PGH" — no results found</div>
//     <div className="mt-2 h-32 rounded-lg border border-white/5 bg-white/[0.02] flex items-center justify-center text-[8px] text-white/15">generic map view</div>
//     <div className="mt-2 rounded border border-red-500/20 bg-red-500/5 px-2 py-1.5 text-[8px] text-red-400/60">✗ Fails on abbreviations</div>
//   </div></Shell>;
// }

// function OldDining() {
//   return <Shell dark><div className="px-3 pt-1 text-white">
//     <div className="text-[9px] font-bold uppercase tracking-widest text-white/40">UHGo · Dining</div>
//     <div className="mt-2 space-y-1.5">
//       {["Fresh Food Co. — Open","The Den — Open","Cougar Grounds — Closed"].map(s => (
//         <div key={s} className="rounded border border-white/8 bg-white/[0.03] px-2 py-2 text-[9px] text-white/40">{s}</div>
//       ))}
//     </div>
//     <div className="mt-3 rounded border border-red-500/25 bg-red-500/5 px-2 py-2 text-[8px] text-red-400/65">✗ No menus · No occupancy · No dietary info</div>
//   </div></Shell>;
// }

// function OldShuttle() {
//   return <Shell dark><div className="px-3 pt-1 text-white">
//     <div className="text-[9px] font-bold uppercase tracking-widest text-white/40">UHGo · Transit</div>
//     <div className="mt-2 space-y-1.5">
//       {["Cougar Line","Cougar Ride","Sugar Land Shuttle","Ride & Dine"].map(s => (
//         <div key={s} className="rounded border border-white/8 bg-white/[0.03] px-2 py-2.5 text-[9px] text-white/35">{s}</div>
//       ))}
//     </div>
//     <div className="mt-2 rounded border border-red-500/25 bg-red-500/5 px-2 py-2 text-[8px] text-red-400/65">✗ No arrival times · No context</div>
//   </div></Shell>;
// }

// function OldSchedule() {
//   return <Shell dark><div className="px-3 pt-1 text-white">
//     <div className="text-[9px] font-bold uppercase tracking-widest text-white/40">UHGo · Academics</div>
//     {/* Grades tile is the hero CTA */}
//     <div className="mt-2 rounded-xl border border-white/10 bg-white/[0.04] p-3 text-center">
//       <div className="text-[16px] mb-1">🎓</div>
//       <div className="text-[9px] font-medium text-white/60">Grades</div>
//       <div className="mt-2 rounded-lg bg-white/8 py-2 text-[8px] text-white/35">Open AccessUH →</div>
//     </div>
//     {/* redirect notice */}
//     <div className="mt-2 rounded-lg border border-white/8 bg-white/[0.02] p-2 text-[8px] text-white/25 leading-snug">
//       You'll be redirected to AccessUH. Sign in with your Cougar ID and password to continue.
//     </div>
//     {/* schedule buried deep */}
//     <div className="mt-2 space-y-1">
//       {["My Courses →","Enrollment →","Degree Plan →"].map(s => (
//         <div key={s} className="flex justify-between rounded border border-white/5 bg-white/[0.02] px-2 py-1.5 text-[8px] text-white/25"><span>{s}</span><span>›</span></div>
//       ))}
//     </div>
//     <div className="mt-2 rounded border border-red-500/25 bg-red-500/5 px-2 py-1.5 text-[8px] text-red-400/65">✗ No schedule view · AccessUH re-login every time</div>
//   </div></Shell>;
// }

// function OldEmergency() {
//   return <Shell dark><div className="px-3 pt-1 text-white">
//     <div className="text-[9px] font-bold uppercase tracking-widest text-white/40">UHGo · Menu</div>
//     <div className="mt-2 space-y-1">
//       {["Academics","Campus Life","Student Services","Health & Safety","Resources","Settings"].map(s => (
//         <div key={s} className="flex justify-between rounded border border-white/8 bg-white/[0.03] px-2 py-2 text-[9px] text-white/35"><span>{s}</span><span>›</span></div>
//       ))}
//     </div>
//     <div className="mt-2 rounded border border-red-500/25 bg-red-500/5 px-2 py-1.5 text-[8px] text-red-400/65">✗ Emergency contacts 3+ taps away</div>
//   </div></Shell>;
// }

// function OldOrgs() {
//   return <Shell dark><div className="px-3 pt-1 text-white">
//     <div className="text-[9px] font-bold uppercase tracking-widest text-white/40">Organizations</div>
//     <div className="mt-2 space-y-1">
//       {["Accounting Club","AIA Society","Alpha Beta Gamma","Alpha Chi Omega","Alpha Phi Alpha"].map(s => (
//         <div key={s} className="rounded border border-white/8 bg-white/[0.03] px-2 py-2 text-[9px] text-white/35">{s}</div>
//       ))}
//     </div>
//     <div className="mt-2 rounded border border-red-500/25 bg-red-500/5 px-2 py-1.5 text-[8px] text-red-400/65">✗ Alphabetical · No relevance · Decision overload</div>
//   </div></Shell>;
// }

// function OldProfile() {
//   return <Shell dark><div className="px-3 pt-1 text-white">
//     <div className="text-[9px] font-bold uppercase tracking-widest text-white/40">UHGo · Profile</div>
//     <div className="mt-2 space-y-1.5">
//       {["Name","Email","Student ID","Settings","Logout"].map(s => (
//         <div key={s} className="flex justify-between rounded border border-white/8 bg-white/[0.03] px-2 py-2 text-[9px] text-white/30"><span>{s}</span><span className="text-white/15">›</span></div>
//       ))}
//     </div>
//     <div className="mt-2 rounded border border-red-500/25 bg-red-500/5 px-2 py-1.5 text-[8px] text-red-400/65">✗ Settings page only · No balances · No advisor</div>
//   </div></Shell>;
// }

// function OldStudyGroups() {
//   return <Shell dark><div className="px-3 pt-3 text-white">
//     <div className="text-[9px] font-bold uppercase tracking-widest text-white/40">UHGo · Social</div>
//     <div className="mt-8 rounded border border-red-500/25 bg-red-500/5 p-4 text-[8px] text-red-400/65 leading-relaxed">
//       ✗ Feature doesn't exist.<br /><br />Students use GroupMe and Discord outside the app.
//     </div>
//   </div></Shell>;
// }

// /* ─── NEW SCREENS ─── */
// function NewHome() {
//   return <Shell><div className="px-3 pt-1 text-white">
//     <div className="text-[9px] text-white/35">Good morning, Khushbu</div>
//     <div className="mt-2 rounded-xl border border-[#C8A96A]/25 bg-[#C8A96A]/[0.07] p-2.5">
//       <div className="font-mono text-[8px] uppercase tracking-wider text-[#C8A96A]/60 mb-1.5">Today's Focus</div>
//       <div className="space-y-1 text-[9px] text-white/65">
//         <div>→ CHEM 1331 · SEC 100 at 11:00 <span className="text-white/30">(leave 10:48)</span></div>
//         <div>→ Project 2 due tomorrow</div>
//         <div>→ Dining Dollars low — $23.40</div>
//       </div>
//     </div>
//     <div className="mt-2 grid grid-cols-4 gap-1.5">
//       {[["🪪","ID"],["🍽","Dining"],["🚌","Shuttle"],["🤖","AI"]].map(([e,l]) => (
//         <div key={l} className="flex flex-col items-center gap-1 rounded-xl border border-white/8 bg-white/[0.03] py-2">
//           <span className="text-sm">{e}</span><div className="text-[6px] text-white/25">{l}</div>
//         </div>
//       ))}
//     </div>
//     <div className="mt-2 flex items-start gap-2 rounded-xl border border-white/8 bg-white/[0.02] p-2">
//       <div className="h-6 w-6 flex-shrink-0 rounded-full bg-[#C8A96A]/20 flex items-center justify-center text-[10px]">🤖</div>
//       <div className="text-[8px] text-white/50 leading-snug">The Den is quiet. Fresh Food has a 12-min wait. Eat now to make your 11AM.</div>
//     </div>
//     <div className="mt-2 rounded-xl border border-white/5 bg-white/[0.02] px-2 py-1.5 text-[8px] text-white/25">📢 Spring registration opens Monday · Career Fair — Fri</div>
//   </div></Shell>;
// }

// function NewMap() {
//   return <Shell><div className="px-3 pt-1 text-white">
//     <div className="text-[9px] text-white/35">Campus Map</div>
//     <div className="mt-2 flex items-center gap-1.5 rounded-xl border border-[#C8A96A]/35 bg-[#C8A96A]/10 px-2 py-1.5 text-[9px] text-[#C8A96A]">🔍 PGH — Philip G. Hoffman Hall</div>
//     <div className="mt-1.5 rounded-xl bg-[#C8A96A]/[0.08] border border-[#C8A96A]/20 px-2 py-1.5">
//       <div className="text-[9px] font-medium text-[#C8A96A]">Philip G. Hoffman Hall</div>
//       <div className="text-[8px] text-white/40">PGH · 240m · ~4 min walk</div>
//     </div>
//     <div className="relative mt-2 h-24 overflow-hidden rounded-xl border border-white/8 bg-gradient-to-br from-[#1a1f2e] to-[#0d0f18]">
//       <svg viewBox="0 0 140 90" className="absolute inset-0 h-full w-full">
//         <path d="M10 80 C 50 30 90 60 130 20" fill="none" stroke="#C8A96A" strokeWidth="2" strokeDasharray="4 3" />
//         <circle cx="10" cy="80" r="4" fill="#EDEAE3" />
//         <circle cx="130" cy="20" r="5" fill="#C8A96A" />
//         <text x="118" y="14" fontSize="6" fill="#C8A96A">PGH</text>
//       </svg>
//     </div>
//     <div className="mt-2 flex gap-2">
//       <div className="flex-1 rounded-xl bg-[#C8A96A] py-1.5 text-center text-[8px] font-medium text-black">Open in Maps →</div>
//       <div className="rounded-xl border border-white/10 px-3 py-1.5 text-[8px] text-white/35">Save</div>
//     </div>
//     <div className="mt-2 flex gap-1">
//       {["PGH","SEC","CBB","SR2"].map(a => (
//         <div key={a} className="flex-1 rounded-lg bg-white/[0.04] py-1 text-center font-mono text-[7px] text-white/30">{a}</div>
//       ))}
//     </div>
//   </div></Shell>;
// }

// function NewDining() {
//   return <Shell><div className="px-3 pt-1 text-white">
//     <div className="text-[9px] text-white/35">Dining · Near you</div>
//     <div className="mt-1 text-[11px] font-medium text-white">On campus now</div>
//     {[["Fresh Food Co.","70%","12 min",70],["The Den","20%","2 min",20],["Cougar Grounds","45%","6 min",45]].map(([n,s,t,p]) => (
//       <div key={n} className="mt-1.5 rounded-xl border border-white/8 bg-white/[0.03] p-2">
//         <div className="flex items-center justify-between text-[9px]">
//           <span className="font-medium text-white/80">{n}</span>
//           <span className="text-[#C8A96A]">{t}</span>
//         </div>
//         <div className="mt-1 h-1 overflow-hidden rounded-full bg-white/10">
//           <div className="h-full rounded-full bg-[#C8A96A]" style={{ width: `${p}%` }} />
//         </div>
//         <div className="mt-1 flex gap-1">
//           {["🥗 Veg","🍗 Halal","🌾 GF"].map(f => (
//             <span key={f} className="rounded-full bg-white/[0.06] px-1.5 py-0.5 text-[6px] text-white/40">{f}</span>
//           ))}
//         </div>
//       </div>
//     ))}
//     <div className="mt-2 rounded-xl border border-[#C8A96A]/20 bg-[#C8A96A]/5 px-2 py-1.5 text-[8px] text-[#C8A96A]/80">⚡ Dining Dollars: $23.40 — running low</div>
//   </div></Shell>;
// }

// function NewShuttle() {
//   return <Shell><div className="px-3 pt-1 text-white">
//     <div className="text-[9px] text-white/35">Transportation</div>
//     <div className="mt-1 text-[8px] text-[#C8A96A]">Next class: SEC 100 at 11:00</div>
//     <div className="mt-2 rounded-xl border border-[#C8A96A]/30 bg-[#C8A96A]/10 p-2">
//       <div className="text-[7px] uppercase tracking-wider text-[#C8A96A]/60">Recommended</div>
//       <div className="text-[10px] font-medium text-white mt-0.5">Cougar Line → Tech Bridge</div>
//       <div className="text-[8px] text-white/40">Arrives 3 min · SEC in 8 min</div>
//     </div>
//     <div className="relative mt-2 h-14 overflow-hidden rounded-xl border border-white/8">
//       <svg viewBox="0 0 140 52" className="absolute inset-0 h-full w-full">
//         <path d="M10 42 C 40 10 80 42 130 12" fill="none" stroke="#C8A96A" strokeWidth="1.5" strokeDasharray="3 2" />
//         {[10,45,90,130].map((x,i) => <circle key={i} cx={x} cy={i%2===0?42:12} r="3.5" fill="#0a0a0b" stroke="#C8A96A" strokeWidth="1" />)}
//         <circle cx="10" cy="42" r="4" fill="#EDEAE3" />
//       </svg>
//     </div>
//     <div className="mt-2 space-y-1">
//       {[["Cougar Line","3 min"],["Cougar Ride","On demand"],["Sugar Land","Hourly"],["Ride & Dine","5 min"]].map(([n,t]) => (
//         <div key={n} className="flex justify-between rounded-lg bg-white/[0.03] px-2 py-1 text-[8px]">
//           <span className="text-white/55">{n}</span><span className="text-[#C8A96A]">{t}</span>
//         </div>
//       ))}
//     </div>
//   </div></Shell>;
// }

// function NewSchedule() {
//   return <Shell><div className="px-3 pt-1 text-white">
//     <div className="text-[9px] text-white/35">Today</div>
//     <div className="mt-1.5 space-y-1.5">
//       {[{t:"9:00",n:"COSC 3360",r:"PGH 232",done:true},{t:"11:00",n:"CHEM 1331",r:"SEC 100",active:true},{t:"14:30",n:"MATH 2415",r:"CBB 120"}].map(c => (
//         <div key={c.n} className={`flex items-center gap-2 rounded-xl border px-2 py-2 ${c.active?"border-[#C8A96A]/30 bg-[#C8A96A]/[0.07]":c.done?"border-white/5 opacity-35":"border-white/8 bg-white/[0.02]"}`}>
//           <div className="w-8 font-mono text-[8px] text-white/40">{c.t}</div>
//           <div className="flex-1">
//             <div className={`text-[10px] font-medium ${c.active?"text-[#C8A96A]":"text-white/70"}`}>{c.n}</div>
//             <div className="text-[7px] text-white/30">{c.r}</div>
//           </div>
//           {c.active && <div className="rounded-full bg-[#C8A96A]/20 px-2 py-0.5 text-[7px] text-[#C8A96A]">Now</div>}
//         </div>
//       ))}
//     </div>
//     <div className="mt-2 rounded-xl border border-white/8 bg-white/[0.02] p-2">
//       <div className="font-mono text-[7px] uppercase tracking-wider text-white/25 mb-1.5">Deadlines</div>
//       {[["COSC 3360 · Project 2","Tomorrow","red"],["CHEM 1331 · Lab","Friday",""],["MATH · HW 7","Sunday",""]].map(([a,b,c]) => (
//         <div key={a} className="flex justify-between py-1 text-[8px] border-b border-white/5 last:border-0">
//           <span className="text-white/45">{a}</span>
//           <span className={c==="red"?"text-red-400/80":"text-white/25"}>{b}</span>
//         </div>
//       ))}
//     </div>
//   </div></Shell>;
// }

// function NewEmergency() {
//   return <Shell><div className="px-3 pt-1 text-white">
//     <div className="text-[9px] text-white/35">Emergency Assistance</div>
//     <div className="mt-2 space-y-1.5">
//       {[["🚔","University Police","Emergency & safety"],["💬","CAPS Counseling","Mental health"],["🏥","Student Health","Medical support"],["🏢","Facilities","Building emergencies"],["✈️","Intl. Students","Visa & travel"]].map(([ic,n,r]) => (
//         <div key={n} className="flex items-center gap-2 rounded-xl border border-white/8 bg-white/[0.02] px-2 py-2">
//           <div className="h-7 w-7 flex-shrink-0 rounded-full bg-white/5 flex items-center justify-center text-[10px]">{ic}</div>
//           <div className="flex-1">
//             <div className="text-[9px] font-medium text-white/80">{n}</div>
//             <div className="text-[7px] text-white/30">{r}</div>
//           </div>
//           <div className="rounded-full border border-[#C8A96A]/25 bg-[#C8A96A]/10 px-2 py-0.5 text-[7px] text-[#C8A96A]">Call →</div>
//         </div>
//       ))}
//     </div>
//     <div className="mt-2 rounded-xl border border-[#C8A96A]/15 bg-[#C8A96A]/[0.04] px-2 py-1.5 text-[8px] text-[#C8A96A]/55">0 navigation steps from home screen</div>
//   </div></Shell>;
// }

// function NewOrgs() {
//   return <Shell><div className="px-3 pt-1 text-white">
//     <div className="text-[9px] text-white/35">Clubs · Computer Science</div>
//     <div className="mt-1.5 space-y-1.5">
//       {[["C","CodeCoogs","CS Club","High match"],["X","CougarCS","Competitive Prog.","High match"],["H","UH Hackathon","Hackathon","Trending"],["A","AI & ML Society","Research","Recommended"]].map(([l,n,t,m]) => (
//         <div key={n} className="flex items-center gap-2 rounded-xl border border-white/8 bg-white/[0.02] px-2 py-2">
//           <div className="h-8 w-8 flex-shrink-0 rounded-xl bg-[#C8A96A]/15 flex items-center justify-center text-[#C8A96A] text-[11px] font-display">{l}</div>
//           <div className="flex-1">
//             <div className="text-[9px] font-medium text-white/80">{n}</div>
//             <div className="text-[7px] text-white/30">{t}</div>
//           </div>
//           <span className="rounded-full border border-[#C8A96A]/20 bg-[#C8A96A]/5 px-2 py-0.5 text-[7px] text-[#C8A96A]/60">{m}</span>
//         </div>
//       ))}
//     </div>
//     <div className="mt-2 flex gap-1 flex-wrap">
//       {["Hackathons","Cybersecurity","AI/ML"].map(t => (
//         <span key={t} className="rounded-full border border-white/8 px-2 py-0.5 text-[7px] text-white/25">{t}</span>
//       ))}
//     </div>
//   </div></Shell>;
// }

// function NewStudyGroups() {
//   return <Shell><div className="px-3 pt-1 text-white">
//     <div className="text-[9px] text-white/35">Study Groups · Your Courses</div>
//     <div className="mt-1.5 space-y-1.5">
//       {[["🧪","CHEM 1331","4 members · Today 6PM · Library 2F"],["💻","COSC 3360","3 members · Tomorrow 4PM · PGH"],["📐","MATH 2415","6 members · Friday 5PM · Cougar Village"]].map(([ic,n,d]) => (
//         <div key={n} className="flex gap-2 rounded-xl border border-white/8 bg-white/[0.02] p-2">
//           <div className="h-8 w-8 flex-shrink-0 rounded-xl bg-white/5 flex items-center justify-center text-sm">{ic}</div>
//           <div><div className="text-[9px] font-medium text-white/80">{n}</div><div className="text-[7px] text-white/30">{d}</div></div>
//         </div>
//       ))}
//     </div>
//     <div className="mt-2 rounded-xl border border-dashed border-white/10 p-2 text-center text-[8px] text-white/20">+ Find classmates in CHEM 1331</div>
//     <div className="mt-2 grid grid-cols-2 gap-1.5 text-[7px] text-white/30">
//       <div className="rounded-lg bg-white/[0.03] border border-white/5 p-1.5">📎 Shared notes</div>
//       <div className="rounded-lg bg-white/[0.03] border border-white/5 p-1.5">📅 Study sessions</div>
//     </div>
//   </div></Shell>;
// }

// function NewProfile() {
//   return <Shell><div className="px-3 pt-1 text-white">
//     <div className="text-[9px] text-white/35">Profile</div>
//     <div className="mt-2 rounded-xl border border-[#C8A96A]/20 bg-gradient-to-br from-[#C8A96A]/10 to-transparent p-3">
//       <div className="font-mono text-[7px] text-[#C8A96A]/50 mb-0.5">Digital Student ID</div>
//       <div className="font-display text-[11px] text-white">Khushbu Patel</div>
//       <div className="text-[8px] text-white/35">UH ID: 1234567 · CS + Pop. Health</div>
//       <div className="mt-2 h-8 w-24 rounded-md bg-white/5 flex items-center justify-center font-mono text-[6px] text-white/15">▓▓▓ barcode ▓▓▓</div>
//     </div>
//     <div className="mt-2 grid grid-cols-2 gap-1.5">
//       {[["Dining Dollars","$23.40","red",15],["ShastaBUCKS","$48.20","gold",45]].map(([l,v,c,p]) => (
//         <div key={l} className="rounded-xl border border-white/8 bg-white/[0.02] p-2">
//           <div className="text-[7px] text-white/25">{l}</div>
//           <div className="font-display text-[14px] text-white mt-0.5">{v}</div>
//           <div className="mt-1.5 h-1 overflow-hidden rounded-full bg-white/10">
//             <div className={`h-full rounded-full ${c==="red"?"bg-red-400/60":"bg-[#C8A96A]/60"}`} style={{width:`${p}%`}} />
//           </div>
//         </div>
//       ))}
//     </div>
//     <div className="mt-2 flex items-center gap-2 rounded-xl border border-white/8 bg-white/[0.02] p-2">
//       <div className="h-7 w-7 rounded-full bg-[#C8A96A]/20 flex items-center justify-center text-[#C8A96A] text-[10px]">A</div>
//       <div>
//         <div className="text-[9px] text-white/70">Academic Advisor</div>
//         <div className="text-[7px] text-white/30">advisor@uh.edu</div>
//       </div>
//       <div className="ml-auto text-[7px] text-[#C8A96A]/60">Email →</div>
//     </div>
//   </div></Shell>;
// }

// /* ─── AI ASSISTANT SCREENS ─── */
// function OldAI() {
//   return <Shell dark><div className="px-3 pt-2 text-white">
//     <div className="text-[9px] font-bold uppercase tracking-widest text-white/40">UHGo</div>
//     {/* No AI anywhere — just the same tile grid */}
//     <div className="mt-3 grid grid-cols-3 gap-1.5 opacity-50">
//       {["Grades","Schedule","Maps","Dining","Shuttle","Library","Directory","News","More"].map(t => (
//         <div key={t} className="flex flex-col items-center gap-1 rounded-xl border border-white/8 bg-white/[0.04] py-3">
//           <div className="h-5 w-5 rounded-lg bg-white/15" />
//           <div className="text-[7px] text-white/35">{t}</div>
//         </div>
//       ))}
//     </div>
//     <div className="mt-4 rounded-xl border border-red-500/20 bg-red-500/5 p-3 text-center">
//       <div className="text-[8px] text-red-400/70 leading-relaxed">
//         ✗ No AI assistant exists in UHGo.<br /><br />
//         Students Google campus questions, call the registrar, or ask friends.
//       </div>
//     </div>
//   </div></Shell>;
// }

// function NewAI() {
//   return <Shell><div className="px-3 pt-1 text-white">
//     <div className="text-[9px] text-white/35">Campus Assistant</div>
//     {/* chat messages */}
//     <div className="mt-2 space-y-2">
//       <div className="flex justify-end">
//         <div className="max-w-[80%] rounded-2xl rounded-tr-sm bg-[#C8A96A]/85 px-2.5 py-1.5 text-[9px] text-black">
//           Where's my next class?
//         </div>
//       </div>
//       <div className="flex justify-start">
//         <div className="max-w-[88%] rounded-2xl rounded-tl-sm bg-white/[0.07] px-2.5 py-1.5 text-[9px] text-white/80 leading-snug">
//           CHEM 1331 in SEC 100 at 11:00. Cougar Line gets you there in 6 min — leave by 10:48. ✨
//         </div>
//       </div>
//       <div className="flex justify-end">
//         <div className="max-w-[80%] rounded-2xl rounded-tr-sm bg-[#C8A96A]/85 px-2.5 py-1.5 text-[9px] text-black">
//           Any dining nearby after?
//         </div>
//       </div>
//       <div className="flex justify-start">
//         <div className="max-w-[88%] rounded-2xl rounded-tl-sm bg-white/[0.07] px-2.5 py-1.5 text-[9px] text-white/80 leading-snug">
//           The Den is a 3-min walk from SEC and quiet right now. Your Dining Dollars balance is $23.40.
//         </div>
//       </div>
//       <div className="flex justify-end">
//         <div className="max-w-[80%] rounded-2xl rounded-tr-sm bg-[#C8A96A]/85 px-2.5 py-1.5 text-[9px] text-black">
//           When's the next Cougar Line?
//         </div>
//       </div>
//       <div className="flex justify-start">
//         <div className="max-w-[88%] rounded-2xl rounded-tl-sm bg-white/[0.07] px-2.5 py-1.5 text-[9px] text-white/80 leading-snug">
//           Arriving at Student Center in 3 min. Next one in 11 min.
//         </div>
//       </div>
//     </div>
//     {/* input bar */}
//     <div className="absolute inset-x-3 bottom-5 flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-3 py-2 backdrop-blur">
//       <span className="flex-1 text-[8px] text-white/25">Ask anything about campus…</span>
//       <div className="h-5 w-5 rounded-full bg-[#C8A96A]/80 flex items-center justify-center text-[8px] text-black">↑</div>
//     </div>
//   </div></Shell>;
// }

// /* ══════════════════════════════════════════════
//    DRAG COMPARE SLIDER
// ══════════════════════════════════════════════ */
// function CompareSlider({ Before, After }) {
//   const [pct, setPct] = useState(50);
//   const ref = useRef(null);
//   const dragging = useRef(false);
//   const move = useCallback((clientX) => {
//     if (!ref.current) return;
//     const { left, width } = ref.current.getBoundingClientRect();
//     setPct(Math.max(4, Math.min(96, ((clientX - left) / width) * 100)));
//   }, []);
//   return (
//     <div ref={ref}
//       className="relative select-none overflow-hidden rounded-[2rem] border border-white/10 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.9)]"
//       style={{ aspectRatio: "9/19", cursor: "col-resize", touchAction: "none" }}
//       onMouseDown={() => { dragging.current = true; }}
//       onMouseMove={e => { if (dragging.current) move(e.clientX); }}
//       onMouseUp={() => { dragging.current = false; }}
//       onMouseLeave={() => { dragging.current = false; }}
//       onTouchMove={e => move(e.touches[0].clientX)}
//     >
//       <div className="absolute left-1/2 top-2.5 z-40 h-[14px] w-[80px] -translate-x-1/2 rounded-full bg-black" />
//       <div className="absolute inset-0"><After /></div>
//       <div className="absolute inset-0 overflow-hidden" style={{ clipPath: `inset(0 ${100-pct}% 0 0)` }}><Before /></div>
//       <div className="pointer-events-none absolute inset-y-0 z-30 flex items-center justify-center" style={{ left: `${pct}%`, transform: "translateX(-50%)" }}>
//         <div className="h-full w-[1.5px] bg-white/30" />
//         <div className="absolute flex h-8 w-8 items-center justify-center rounded-full border border-white/20 bg-white/10 text-[11px] backdrop-blur-md text-white">⇔</div>
//       </div>
//     </div>
//   );
// }

// /* ══════════════════════════════════════════════
//    FEATURE PAIRS
// ══════════════════════════════════════════════ */
// const PAIRS = [
//   { key:"home",        label:"Home",           captions:["Daily Focus + AI","Smart quick access","Proactive reminders"],                    Before:OldHome,        After:NewHome },
//   { key:"map",         label:"Campus Map",     captions:["Abbreviation search","Walking time estimate","Google Maps handoff"],               Before:OldMap,         After:NewMap },
//   { key:"dining",      label:"Dining",         captions:["Smart recommendations","Menus + dietary filters","Occupancy alerts"],               Before:OldDining,      After:NewDining },
//   { key:"shuttle",     label:"Transportation", captions:["Context-aware guidance","Live arrival times","Route recommendations"],              Before:OldShuttle,     After:NewShuttle },
//   { key:"schedule",    label:"Schedule",       captions:["Today's classes — no login","Assignment deadlines","Replaces AccessUH redirect"],   Before:OldSchedule,    After:NewSchedule },
//   { key:"ai",          label:"AI Assistant",   captions:["New feature — not in UHGo","Natural language campus queries","Schedule + shuttle + dining in one ask"], Before:OldAI, After:NewAI },
//   { key:"emergency",   label:"Emergency",      captions:["One-tap calling","0 navigation steps","All contacts unified"],                     Before:OldEmergency,   After:NewEmergency },
//   { key:"orgs",        label:"Organizations",  captions:["Major-matched clubs","Trending skills","Personalized ranking"],                     Before:OldOrgs,        After:NewOrgs },
//   { key:"studygroups", label:"Study Groups",   captions:["Course-based discovery","Shared resources","Exam coordination"],                   Before:OldStudyGroups, After:NewStudyGroups },
//   { key:"profile",     label:"Profile",        captions:["Digital ID","Dining balances + insights","Advisor + personalization"],             Before:OldProfile,     After:NewProfile },
// ];

// /* ══════════════════════════════════════════════
//    PINNED SOLUTION SHOWCASE
// ══════════════════════════════════════════════ */
// function SolutionShowcase() {
//   const stage = useRef(null);
//   const { scrollYProgress } = useScroll({ target: stage, offset: ["start start", "end end"] });
//   const [active, setActive] = useState(0);
//   useMotionValueEvent(scrollYProgress, "change", v => {
//     setActive(Math.min(PAIRS.length - 1, Math.floor(v * PAIRS.length)));
//   });
//   const feature = PAIRS[active];
//   return (
//     <div ref={stage} style={{ height: `${PAIRS.length * 100}vh` }} className="relative">
//       <div className="sticky top-0 flex h-screen items-center overflow-hidden">
//         <div className="pointer-events-none absolute left-1/2 top-1/2 h-[480px] w-[480px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/5 blur-[150px]" />
//         <div className="mx-auto w-full max-w-7xl px-6 md:px-10">
//           <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-12">
//             {/* step list */}
//             <div className="md:col-span-3">
//               <div className="font-mono text-[10px] uppercase tracking-eyebrow text-muted mb-4">
//                 {String(active+1).padStart(2,"0")} / {String(PAIRS.length).padStart(2,"0")}
//               </div>
//               <ul className="space-y-1.5">
//                 {PAIRS.map((f,i) => (
//                   <motion.li key={f.key}
//                     animate={{ opacity: i===active?1:0.14, x: i===active?4:0 }}
//                     transition={{ duration: 0.35, ease: EL }}
//                     className="flex items-center gap-2 font-display text-xl text-bone md:text-2xl"
//                   >
//                     {i===active && <motion.span layoutId="nav-dot" className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gold" />}
//                     {f.label}
//                   </motion.li>
//                 ))}
//               </ul>
//             </div>
//             {/* phone */}
//             <div className="flex justify-center md:col-span-5">
//               <div className="w-[215px] md:w-[248px]">
//                 <AnimatePresence mode="wait">
//                   <motion.div key={feature.key}
//                     initial={{ opacity:0, y:18, scale:0.96 }}
//                     animate={{ opacity:1, y:0, scale:1 }}
//                     exit={{ opacity:0, y:-10, scale:0.97 }}
//                     transition={{ duration: 0.42, ease: EL }}
//                   >
//                     <CompareSlider Before={feature.Before} After={feature.After} />
//                   </motion.div>
//                 </AnimatePresence>
//                 <p className="mt-3 text-center font-mono text-[9px] text-white/18">drag to compare</p>
//               </div>
//             </div>
//             {/* captions */}
//             <div className="md:col-span-4">
//               <AnimatePresence mode="wait">
//                 <motion.div key={feature.key+"_c"}
//                   initial={{ opacity:0, x:14 }}
//                   animate={{ opacity:1, x:0 }}
//                   exit={{ opacity:0, x:-8 }}
//                   transition={{ duration: 0.38, ease: EL }}
//                 >
//                   <div className="font-mono text-[10px] uppercase tracking-eyebrow text-gold/55 mb-4">{feature.label} · Redesigned</div>
//                   <ul className="space-y-3">
//                     {feature.captions.map((c,i) => (
//                       <motion.li key={c}
//                         initial={{ opacity:0, x:10 }}
//                         animate={{ opacity:1, x:0 }}
//                         transition={{ duration:0.32, delay:i*0.07, ease:EL }}
//                         className="flex items-center gap-3 text-bone/65 text-base"
//                       >
//                         <div className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gold/55" />{c}
//                       </motion.li>
//                     ))}
//                   </ul>
//                 </motion.div>
//               </AnimatePresence>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// /* ══════════════════════════════════════════════
//    ARCH DIAGRAM
// ══════════════════════════════════════════════ */
// function ArchDiagram() {
//   const ref = useRef(null);
//   const inView = useInView(ref, { once:true, margin:"-15%" });
//   const rows = [
//     { label:"Student",   nodes:["Schedule","Location","Enrollment","Preferences"], accent:false },
//     { label:"DigitalUH", nodes:["AI Assistant","Intent Classifier","Recommendation Engine","Campus Router"], accent:true },
//     { label:"Services",  nodes:["Supabase (18 tables)","Google Maps API","Microsoft OAuth","Supabase Edge"], accent:false },
//   ];
//   return (
//     <div ref={ref} className="overflow-hidden rounded-3xl border border-white/8 bg-white/[0.02] p-8">
//       <div className="font-mono text-[10px] uppercase tracking-eyebrow text-gold/60 mb-8">System Architecture</div>
//       <div className="space-y-8">
//         {rows.map((row,ri) => (
//           <div key={row.label} className="flex items-center gap-6">
//             <div className="w-24 flex-shrink-0 font-mono text-[10px] text-bone/20">{row.label}</div>
//             <div className="flex flex-wrap gap-2">
//               {row.nodes.map((node,ni) => (
//                 <motion.div key={node}
//                   initial={{ opacity:0, scale:0.85 }}
//                   animate={inView?{opacity:1,scale:1}:{}}
//                   transition={{ duration:0.4, delay:ri*0.18+ni*0.08, ease:EL }}
//                   className={`rounded-xl border px-3 py-2 text-sm ${row.accent?"border-gold/30 bg-gold/10 text-gold":"border-white/8 bg-white/[0.03] text-bone/55"}`}
//                 >{node}</motion.div>
//               ))}
//             </div>
//           </div>
//         ))}
//         <motion.div initial={{opacity:0}} animate={inView?{opacity:1}:{}} transition={{duration:0.6,delay:0.8}}
//           className="flex flex-wrap gap-2 pl-[7.5rem]">
//           {["PKCE Auth flow","Server-side Maps proxy","Real-time subscriptions","0 external logins"].map(t => (
//             <span key={t} className="rounded-full border border-white/8 px-3 py-1 font-mono text-[9px] text-bone/25">{t}</span>
//           ))}
//         </motion.div>
//       </div>
//     </div>
//   );
// }

// /* ══════════════════════════════════════════════
//    SCROLL PROGRESS BAR
// ══════════════════════════════════════════════ */
// function ProgressBar() {
//   const { scrollYProgress } = useScroll();
//   const scaleX = useTransform(scrollYProgress, [0,1], [0,1]);
//   return <motion.div style={{ scaleX, transformOrigin:"left" }} className="fixed inset-x-0 top-0 z-50 h-[1.5px] bg-gold/70" />;
// }

// /* ══════════════════════════════════════════════
//    SECTION DIVIDER
// ══════════════════════════════════════════════ */
// function Div({ n, label }) {
//   return (
//     <div className="flex items-center gap-4 mb-12">
//       <span className="font-mono text-[10px] text-gold/45">{String(n).padStart(2,"0")}</span>
//       <div className="h-px flex-1 bg-white/8" />
//       <span className="font-mono text-[10px] uppercase tracking-eyebrow text-white/20">{label}</span>
//     </div>
//   );
// }

// /* ══════════════════════════════════════════════
//    MAIN EXPORT
// ══════════════════════════════════════════════ */
// const META = [
//   ["Role","Lead UX & Front-End"],
//   ["Year","2025 — 2026"],
//   ["Platform","iOS · Android · Web"],
//   ["Type","Concept → Prototype"],
// ];

// const NEW_SCREENS = [
//   { label:"Home",         C:NewHome },
//   { label:"Campus Map",   C:NewMap },
//   { label:"Dining",       C:NewDining },
//   { label:"Shuttle",      C:NewShuttle },
//   { label:"Schedule",     C:NewSchedule },
//   { label:"AI Assistant", C:NewAI },
//   { label:"Emergency",    C:NewEmergency },
//   { label:"Orgs",         C:NewOrgs },
//   { label:"Study Groups", C:NewStudyGroups },
//   { label:"Profile",      C:NewProfile },
// ];

// export default function DigitalUH() {
//   return (
//     <section id="digitaluh" className="relative">
//       <ProgressBar />

//       {/* HERO */}
//       <div className="mx-auto max-w-7xl px-6 pt-32 md:px-10 md:pt-48">
//         <Eyebrow>03 — Featured Case Study</Eyebrow>
//         <div className="mt-8 flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
//           <motion.h2 initial={{ opacity:0, y:40 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:1, ease:EL }}
//             className="font-display text-6xl leading-[0.9] tracking-tightest text-bone md:text-[8rem]">
//             Digital<span className="italic text-gold">UH</span>
//           </motion.h2>
//           <motion.p initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:0.9, delay:0.15, ease:EL }}
//             className="max-w-sm text-bone/50">
//             UHGo exists. Students use it because they have to. DigitalUH is what it should be — a campus platform designed around how students actually live.
//           </motion.p>
//         </div>
//         <div className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/5 md:grid-cols-4">
//           {META.map(([k,v]) => (
//             <div key={k} className="bg-ink-900 p-5">
//               <div className="font-mono text-[10px] uppercase tracking-eyebrow text-muted">{k}</div>
//               <div className="mt-2 text-bone">{v}</div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* §1 THE PROBLEM */}
//       <div className="mx-auto max-w-7xl px-6 pt-28 md:px-10 md:pt-40">
//         <Div n={1} label="The Problem" />
//         <motion.h3 initial={{ opacity:0, y:24 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:0.8, ease:EL }}
//           className="max-w-2xl font-display text-3xl leading-tight text-bone md:text-5xl mb-16">
//           UHGo was built to check institutional boxes.{" "}
//           <span className="text-bone/30">Not to help students navigate their day.</span>
//         </motion.h3>

//         <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
//           {[
//             { label:"Home",         note:"Cluttered tiles. Poor hierarchy.",                   C:OldHome },
//             { label:"Campus Map",   note:"Building abbreviations aren't recognized.",           C:OldMap },
//             { label:"Dining",       note:"Students can't view menus or compare options.",       C:OldDining },
//             { label:"Shuttle",      note:"Flat list. No arrival times. No context.",            C:OldShuttle },
//             { label:"Schedule",     note:"Daily schedules hidden behind external logins.",      C:OldSchedule },
//             { label:"Emergency",    note:"Important contacts take too many steps to find.",     C:OldEmergency },
//             { label:"Organizations",note:"Hundreds of clubs. Zero personalization.",            C:OldOrgs },
//             { label:"Profile",      note:"Settings page only — not a student dashboard.",       C:OldProfile },
//             { label:"AI Assistant", note:"Doesn't exist. Students Google campus questions instead.", C:() => (
//               <Shell dark><div className="px-3 pt-3 text-white">
//                 <div className="text-[9px] font-bold uppercase tracking-widest text-white/40">UHGo</div>
//                 <div className="mt-6 flex flex-col items-center gap-3 text-center">
//                   <div className="h-12 w-12 rounded-2xl border border-white/10 bg-white/[0.04] flex items-center justify-center text-2xl opacity-30">🤖</div>
//                   <div className="text-[8px] text-white/20 leading-relaxed px-2">No campus assistant.<br />No natural language queries.<br />No contextual help.</div>
//                 </div>
//                 <div className="mt-6 rounded border border-red-500/25 bg-red-500/5 px-2 py-2 text-[8px] text-red-400/65 text-center">✗ Feature doesn't exist in UHGo</div>
//               </div></Shell>
//             )},
//           ].map(({label,note,C},i) => (
//             <motion.div key={label}
//               initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true, margin:"-5%" }}
//               transition={{ duration:0.5, delay:(i%4)*0.07, ease:EL }} className="group">
//               <div className="relative overflow-hidden rounded-[1.5rem] border border-red-500/15 transition-all duration-400 group-hover:border-red-500/30"
//                 style={{ aspectRatio:"9/19" }}>
//                 <div className="absolute left-1/2 top-2 z-30 h-[10px] w-[60px] -translate-x-1/2 rounded-full bg-black" />
//                 <C />
//                 <div className="absolute bottom-3 left-2 right-2 z-20 rounded-xl border border-red-500/25 bg-red-950/80 px-2 py-1.5 backdrop-blur text-[7px] text-red-400/75 leading-snug">{note}</div>
//               </div>
//               <div className="mt-2 text-center font-mono text-[10px] text-bone/30">{label}</div>
//             </motion.div>
//           ))}
//         </div>
//       </div>

//       {/* §2 RESEARCH */}
//       <div className="mx-auto max-w-7xl px-6 pt-28 md:px-10 md:pt-40">
//         <Div n={2} label="Research" />
//         <motion.h3 initial={{ opacity:0, y:24 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:0.8, ease:EL }}
//           className="max-w-2xl font-display text-3xl leading-tight text-bone md:text-4xl mb-14">
//           Every decision traces back to observed friction —{" "}
//           <span className="text-bone/30">not assumptions.</span>
//         </motion.h3>

//         <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
//           {[
//             { e:"📋", stat:"1st day", label:"Search failure", note:"Abbreviation search fails exactly when freshmen need it most — first class, new building, time pressure." },
//             { e:"🍽", stat:"", label:"Decision gap", note:"UHGo shows 'Open' or 'Closed'. Students need: how busy, what's on the menu, can I afford it, will I make it back?" },
//             { e:"📅", stat:"10×", label:"Daily schedule checks", note:"Schedules checked every morning. Grades checked 6× a semester. UHGo leads with Grades, which route to AccessUH and require re-authentication every time." },
//             { e:"🚌", stat:"", label:"Name blindness", note:"Cougar Ride, Ride & Dine, Sugar Land Shuttle — names that tell students nothing without reading docs they've never seen." },
//             { e:"🆘", stat:"3+", label:"Taps to emergency", note:"Campus safety resources buried in menus designed for browsing — not for moments that don't allow for searching." },
//             { e:"👥", stat:"0", label:"Study group tools", note:"Students form groups via GroupMe because UHGo offers nothing. The enrollment data to fix this already exists in the app." },
//             { e:"🔄", stat:"", label:"External redirect loop", note:"Grades, schedules, and advisor info bounce students to external SSO portals. Each redirect is a moment of abandonment." },
//             { e:"🎓", stat:"500+", label:"Organizations listed", note:"Alphabetical and unfiltered. Students scroll for 30 seconds and close the page. Relevance beats volume." },
//             { e:"💳", stat:"", label:"Surprise at the register", note:"Dining Dollars run out silently. Students discover the problem at the cashier — avoidable with one proactive notification." },
//             { e:"🤖", stat:"0", label:"AI features in UHGo", note:"Students Google 'UH building PGH', call the registrar for shuttle times, and text friends about dining. A campus assistant would answer all of these in one place." },
//           ].map(({e,stat,label,note},i) => (
//             <motion.div key={label}
//               initial={{ opacity:0, y:24 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true, margin:"-8%" }}
//               transition={{ duration:0.55, delay:(i%3)*0.07, ease:EL }}
//               className="rounded-2xl border border-white/8 bg-white/[0.02] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-gold/25"
//             >
//               <div className="flex items-start justify-between mb-2">
//                 <span className="text-xl">{e}</span>
//                 {stat && <span className="font-display text-2xl text-gold">{stat}</span>}
//               </div>
//               <div className="font-mono text-[10px] uppercase tracking-eyebrow text-gold/55 mb-1.5">{label}</div>
//               <p className="text-[12px] leading-snug text-bone/45">{note}</p>
//             </motion.div>
//           ))}
//         </div>
//       </div>

//       {/* §3 DESIGN STRATEGY */}
//       <div className="mx-auto max-w-7xl px-6 pt-28 md:px-10 md:pt-40">
//         <Div n={3} label="Design Strategy" />
//         <motion.h3 initial={{ opacity:0, y:24 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:0.8, ease:EL }}
//           className="max-w-xl font-display text-3xl leading-tight text-bone md:text-4xl mb-14">
//           One philosophy behind every screen.
//         </motion.h3>

//         <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
//           {[
//             ["P1","Replace searching with guidance","If the app knows your next class, your location, and the time — it should tell you what to do next. Not wait to be asked."],
//             ["P2","Design for the first two weeks","The highest-stress moments are the first days of each semester. That's when navigation fails, menus confuse, and apps get uninstalled."],
//             ["P3","Surface the 3 things students actually use","Schedule, dining, and navigation account for 80% of daily use. Everything else goes one tap further — not equal to everything else."],
//             ["P4","Make emergencies frictionless","Any experience that might be needed under stress must be reachable in zero navigation steps from the home screen."],
//             ["P5","Relevance over volume","5 clubs matched to your major with upcoming events is more useful than 500 clubs listed alphabetically. Same data, different intent."],
//             ["P6","Proactive over reactive","Alert the student before the balance is empty. Before the class starts. Before the deadline arrives. The app already has all the data."],
//           ].map(([n,title,desc],i) => (
//             <motion.div key={n}
//               initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true, margin:"-8%" }}
//               transition={{ duration:0.55, delay:(i%3)*0.07, ease:EL }}
//               className="group rounded-2xl border border-white/8 bg-white/[0.02] p-6 transition-all duration-400 hover:-translate-y-1 hover:border-gold/25 hover:bg-white/[0.04]"
//             >
//               <div className="font-mono text-[10px] text-gold/50 mb-3">{n}</div>
//               <div className="font-display text-xl text-bone mb-2">{title}</div>
//               <p className="text-sm text-bone/40 leading-relaxed">{desc}</p>
//             </motion.div>
//           ))}
//         </div>
//       </div>

//       {/* §4 THE SOLUTION */}
//       <div className="pt-28 md:pt-40">
//         <div className="mx-auto max-w-7xl px-6 md:px-10">
//           <Div n={4} label="The Solution" />
//           <motion.h3 initial={{ opacity:0, y:24 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:0.8, ease:EL }}
//             className="max-w-2xl font-display text-3xl leading-tight text-bone md:text-5xl mb-4">
//             Every screen, redesigned.{" "}
//             <span className="text-bone/30">Drag to compare.</span>
//           </motion.h3>
//           <p className="text-bone/35 max-w-md mb-16 text-sm">Scroll through all nine features. Each comparison is interactive — drag the divider to see before and after.</p>
//         </div>
//         <SolutionShowcase />
//       </div>

//       {/* §5 ARCHITECTURE */}
//       <div className="mx-auto max-w-7xl px-6 pt-28 md:px-10 md:pt-40">
//         <Div n={5} label="Architecture" />
//         <motion.h3 initial={{ opacity:0, y:24 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:0.8, ease:EL }}
//           className="max-w-2xl font-display text-3xl leading-tight text-bone md:text-5xl mb-14">
//           Built to feel like a product,{" "}
//           <span className="text-bone/30">not a prototype.</span>
//         </motion.h3>
//         <ArchDiagram />
//         <div className="mt-6 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/5 md:grid-cols-4">
//           {[
//             ["Frontend","React Native · TypeScript","Typed component architecture, strict prop interfaces shared across iOS, Android, and web."],
//             ["Auth & Data","Microsoft OAuth · Supabase","PKCE-based OAuth for UH credentials. 18 Supabase tables shared across all modules."],
//             ["AI Layer","Intent Classifier · Edge Functions","Rules-based classifier routes campus queries. Falls through to LLM for open-ended questions."],
//             ["Maps","Google Maps · Server Proxy","Server-side API key proxy handles walking estimates and deep-link handoffs securely."],
//           ].map(([label,tech,desc],i) => (
//             <motion.div key={label}
//               initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true, margin:"-8%" }}
//               transition={{ duration:0.6, delay:i*0.08, ease:EL }}
//               className="bg-ink-900 p-6">
//               <div className="font-mono text-[10px] uppercase tracking-eyebrow text-muted">{label}</div>
//               <div className="mt-3 font-display text-lg text-gold">{tech}</div>
//               <p className="mt-3 text-sm leading-relaxed text-bone/45">{desc}</p>
//             </motion.div>
//           ))}
//         </div>
//       </div>

//       {/* §6 FINAL PRODUCT */}
//       <div className="mx-auto max-w-7xl px-6 pt-28 pb-40 md:px-10 md:pt-40 md:pb-56">
//         <Div n={6} label="Final Product" />
//         <motion.h3 initial={{ opacity:0, y:24 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:0.8, ease:EL }}
//           className="max-w-xl font-display text-3xl leading-tight text-bone md:text-5xl mb-16">
//           One coherent experience.{" "}
//           <span className="italic text-gold">Ten redesigned screens.</span>
//         </motion.h3>

//         <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
//           {NEW_SCREENS.map(({label,C},i) => (
//             <motion.div key={label}
//               initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true, margin:"-5%" }}
//               transition={{ duration:0.55, delay:(i%5)*0.07, ease:EL }} className="group">
//               <div className="relative overflow-hidden rounded-[1.6rem] border border-white/8 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.7)] transition-all duration-500 group-hover:-translate-y-2 group-hover:border-gold/20 group-hover:shadow-[0_30px_80px_-15px_rgba(200,169,106,0.12)]"
//                 style={{ aspectRatio:"9/19" }}>
//                 <div className="absolute left-1/2 top-2 z-30 h-[10px] w-[60px] -translate-x-1/2 rounded-full bg-black" />
//                 <C />
//               </div>
//               <div className="mt-2 text-center font-mono text-[10px] text-bone/30">{label}</div>
//             </motion.div>
//           ))}
//         </div>

//         {/* reflection */}
//         <motion.blockquote
//           initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true, margin:"-10%" }}
//           transition={{ duration:1, ease:EL }}
//           className="mt-32 max-w-4xl font-display text-3xl leading-snug tracking-tight text-bone md:text-5xl"
//         >
//           The most important design decision wasn't visual.{" "}
//           <span className="text-bone/30">It was deciding which problems were actually worth solving.</span>
//         </motion.blockquote>

//         <div className="mt-16 h-px w-full bg-white/8" />
//         <div className="mt-12 flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
//           <div className="font-mono text-[11px] uppercase tracking-eyebrow text-muted">DigitalUH · 2025 — 2026</div>
//           <div className="flex flex-wrap gap-3">
//             {["React Native","TypeScript","Supabase","Google Maps API","Framer Motion"].map(t => (
//               <span key={t} className="rounded-full border border-white/10 px-3 py-1 font-mono text-[10px] uppercase tracking-wide text-bone/40">{t}</span>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
/**
 * DigitalUH.jsx — Cinematic case study, v4
 * Drop-in replacement. Nothing else in the portfolio changes.
 *
 * 6 sections: Problem → Research → Strategy → Solution (pinned) → Architecture → Final Grid
 * Deps: framer-motion (already in project). No new installs needed.
 *
 * ─── IMAGE SETUP ────────────────────────────────────────────────
 * Place the 8 UHGo screenshots in your Next.js public folder:
 *
 *   /public/images/uhgo/
 *     uhgo-home.png      → IMG_3089
 *     uhgo-map.png       → IMG_3090
 *     uhgo-dining.png    → IMG_3091
 *     uhgo-shuttle.png   → IMG_3092
 *     uhgo-emergency.png → IMG_3093
 *     uhgo-orgs.png      → IMG_3094
 *     uhgo-events.png    → IMG_3095
 *     uhgo-profile.png   → IMG_3096
 *
 * The Old* screen components reference these as /images/uhgo/*.png
 * ────────────────────────────────────────────────────────────────
 */

// import { useRef, useState, useCallback } from "react";
// import {
//   motion,
//   useScroll,
//   useTransform,
//   useMotionValueEvent,
//   useInView,
//   AnimatePresence,
// } from "framer-motion";
// import { Eyebrow, GlassCard } from "../Primitives";
// import { PhoneFrame, SCREENS } from "./DigitalUHScreens";

// const EL = [0.16, 1, 0.3, 1];

// /* ══════════════════════════════════════════════
//    PHONE SHELL — shared wrapper
// ══════════════════════════════════════════════ */
// function Shell({ dark = false, children }) {
//   return (
//     <div className={`relative h-full overflow-hidden ${dark ? "bg-[#111318]" : "bg-[#0a0a0b]"}`}>
//       <div className="absolute left-1/2 top-2.5 z-30 h-[13px] w-[76px] -translate-x-1/2 rounded-full bg-black" />
//       <div className="absolute inset-x-0 top-0 z-20 flex items-center justify-between px-5 pt-2 font-mono text-[8px] text-white/30">
//         <span>9:41</span><span>●●● WiFi 🔋</span>
//       </div>
//       <div className="absolute inset-0 pt-8">{children}</div>
//     </div>
//   );
// }

// /* ─────────────────────────────────────────────────────────────────
//    REAL UHGO SCREENSHOTS
//    Each function renders the actual UHGo app screenshot inside the
//    phone frame. object-top so we see the nav bar and key content.
//    The red annotation badge floats above via absolute positioning.
// ───────────────────────────────────────────────────────────────── */

// function RealScreenshot({ src, alt, note, objectPosition = "top" }) {
//   return (
//     <div className="relative h-full w-full overflow-hidden bg-[#c8102e]">
//       <img
//         src={src}
//         alt={alt}
//         className="h-full w-full object-cover"
//         style={{ objectPosition }}
//         draggable={false}
//       />
//       {/* red annotation badge pinned to bottom */}
//       {note && (
//         <div className="absolute inset-x-0 bottom-0 z-10 bg-gradient-to-t from-black/80 to-transparent px-3 pb-3 pt-6">
//           <div className="rounded-xl border border-red-500/40 bg-red-950/90 px-3 py-2 text-[8px] text-red-300/90 backdrop-blur leading-snug">
//             {note}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// /* ─── OLD SCREENS — real UHGo screenshots ─── */

// function OldHome() {
//   return (
//     <RealScreenshot
//       src="../../../public/images/screens/old_home.png"
//       alt="UHGo Home screen"
//       note="✗ Everything surfaces equally. Grade shortcuts dominate. No daily context or prioritization."
//     />
//   );
// }

// function OldMap() {
//   return (
//     <RealScreenshot
//       src="../../../public/images/screens/old_map.png"
//       alt="UHGo Map screen"
//       note="✗ Search returns room numbers (PGH 200) not buildings. Abbreviation-only queries fail silently."
//       objectPosition="top"
//     />
//   );
// }

// function OldDining() {
//   return (
//     <RealScreenshot
//       src="../../../public/images/screens/old_dining.png"
//       alt="UHGo Dining screen"
//       note="✗ Menus exist but only per-location after multiple taps. No occupancy, no smart recommendations."
//     />
//   );
// }

// function OldShuttle() {
//   return (
//     <RealScreenshot
//       src="../../../public/images/screens/old_shuttle.png"
//       alt="UHGo Live Vehicle Tracking"
//       note="✗ Dots clustered on a generic map. No arrival times, no stop names, no route context."
//     />
//   );
// }

// /* Schedule: UHGo has no dedicated schedule view — Home is the closest */
// function OldSchedule() {
//   return (
//     <div className="relative h-full w-full overflow-hidden bg-[#111318]">
//       <img
//         // src="/images/uhgo/uhgo-home.png"
//         alt="UHGo — no schedule feature"
//         className="h-full w-full object-cover opacity-12 grayscale"
//         draggable={false}
//       />

//       <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 px-4 text-center">
//         <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-3xl opacity-25">
//           📅
//         </div>

//         <p className="text-[9px] leading-relaxed text-white/30">
//           No daily schedule experience.
//           <br />
//           Students leave the app and
//           <br />
//           sign in to AccessUH.
//         </p>

//         <div className="rounded-xl border border-red-500/30 bg-red-950/80 px-3 py-2 text-[8px] text-red-400/75">
//           ✗ Feature doesn't exist
//         </div>
//       </div>
//     </div>
//   );
// }

// function OldEmergency() {
//   return (
//     <RealScreenshot
//       src="../../../public/images/screens/old_emergency.png"
//       alt="UHGo UH Police screen"
//       note="✗ Only UH Police is surfaced here. CAPS, Health Center, Facilities, and Intl. Student Services require separate navigation."
//     />
//   );
// }

// function OldOrgs() {
//   return (
//     <RealScreenshot
//       src="../../../public/images/screens/old_orgs.png"
//       alt="UHGo Organizations screen"
//       note="✗ 108 organizations listed alphabetically with no relevance to major, interest, or activity level."
//     />
//   );
// }

// function OldProfile() {
//   return (
//     <RealScreenshot
//       src="../../../public/images/screens/old_profile.png"
//       alt="UHGo My Profile screen"
//       note="✗ Name and email only. No dining balance, no advisor, no ID — nothing actionable."
//     />
//   );
// }

// /* Study Groups: genuinely doesn't exist — keep honest "missing" state */
// function OldStudyGroups() {
//   return (
//     <div className="relative h-full w-full overflow-hidden bg-[#111318]">
//       {/* ghost of the home screen at very low opacity to imply "in the app" */}
//       <img
//         src="images/uhgo/uhgo-home.png"
//         alt="UHGo — no study groups feature"
//         className="h-full w-full object-cover opacity-15 grayscale"
//         draggable={false}
//       />
//       {/* overlay content */}
//       <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 px-4 text-center">
//         <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-3xl opacity-30">👥</div>
//         <p className="text-[9px] text-white/35 leading-relaxed">
//           Study Groups doesn't exist in UHGo.<br />Students use GroupMe and Discord.
//         </p>
//         <div className="rounded-xl border border-red-500/30 bg-red-950/80 px-3 py-2 text-[8px] text-red-400/80">
//           ✗ Feature not available
//         </div>
//       </div>
//     </div>
//   );
// }

// /* ─── NEW SCREENS ─── */
// function NewHome() {
//   return <Shell><div className="px-3 pt-1 text-white">
//     <div className="text-[9px] text-white/35">Good morning, Khushbu</div>
//     <div className="mt-2 rounded-xl border border-[#C8A96A]/25 bg-[#C8A96A]/[0.07] p-2.5">
//       <div className="font-mono text-[8px] uppercase tracking-wider text-[#C8A96A]/60 mb-1.5">Today's Focus</div>
//       <div className="space-y-1 text-[9px] text-white/65">
//         <div>→ CHEM 1331 · SEC 100 at 11:00 <span className="text-white/30">(leave 10:48)</span></div>
//         <div>→ Project 2 due tomorrow</div>
//         <div>→ Dining Dollars low — $23.40</div>
//       </div>
//     </div>
//     <div className="mt-2 grid grid-cols-4 gap-1.5">
//       {[["🪪","ID"],["🍽","Dining"],["🚌","Shuttle"],["🤖","AI"]].map(([e,l]) => (
//         <div key={l} className="flex flex-col items-center gap-1 rounded-xl border border-white/8 bg-white/[0.03] py-2">
//           <span className="text-sm">{e}</span><div className="text-[6px] text-white/25">{l}</div>
//         </div>
//       ))}
//     </div>
//     <div className="mt-2 flex items-start gap-2 rounded-xl border border-white/8 bg-white/[0.02] p-2">
//       <div className="h-6 w-6 flex-shrink-0 rounded-full bg-[#C8A96A]/20 flex items-center justify-center text-[10px]">🤖</div>
//       <div className="text-[8px] text-white/50 leading-snug">The Den is quiet. Fresh Food has a 12-min wait. Eat now to make your 11AM.</div>
//     </div>
//     <div className="mt-2 rounded-xl border border-white/5 bg-white/[0.02] px-2 py-1.5 text-[8px] text-white/25">📢 Spring registration opens Monday · Career Fair — Fri</div>
//   </div></Shell>;
// }

// function NewMap() {
//   return <Shell><div className="px-3 pt-1 text-white">
//     <div className="text-[9px] text-white/35">Campus Map</div>
//     <div className="mt-2 flex items-center gap-1.5 rounded-xl border border-[#C8A96A]/35 bg-[#C8A96A]/10 px-2 py-1.5 text-[9px] text-[#C8A96A]">🔍 PGH — Philip G. Hoffman Hall</div>
//     <div className="mt-1.5 rounded-xl bg-[#C8A96A]/[0.08] border border-[#C8A96A]/20 px-2 py-1.5">
//       <div className="text-[9px] font-medium text-[#C8A96A]">Philip G. Hoffman Hall</div>
//       <div className="text-[8px] text-white/40">PGH · 240m · ~4 min walk</div>
//     </div>
//     <div className="relative mt-2 h-24 overflow-hidden rounded-xl border border-white/8 bg-gradient-to-br from-[#1a1f2e] to-[#0d0f18]">
//       <svg viewBox="0 0 140 90" className="absolute inset-0 h-full w-full">
//         <path d="M10 80 C 50 30 90 60 130 20" fill="none" stroke="#C8A96A" strokeWidth="2" strokeDasharray="4 3" />
//         <circle cx="10" cy="80" r="4" fill="#EDEAE3" />
//         <circle cx="130" cy="20" r="5" fill="#C8A96A" />
//         <text x="118" y="14" fontSize="6" fill="#C8A96A">PGH</text>
//       </svg>
//     </div>
//     <div className="mt-2 flex gap-2">
//       <div className="flex-1 rounded-xl bg-[#C8A96A] py-1.5 text-center text-[8px] font-medium text-black">Open in Maps →</div>
//       <div className="rounded-xl border border-white/10 px-3 py-1.5 text-[8px] text-white/35">Save</div>
//     </div>
//     <div className="mt-2 flex gap-1">
//       {["PGH","SEC","CBB","SR2"].map(a => (
//         <div key={a} className="flex-1 rounded-lg bg-white/[0.04] py-1 text-center font-mono text-[7px] text-white/30">{a}</div>
//       ))}
//     </div>
//   </div></Shell>;
// }

// function NewDining() {
//   return <Shell><div className="px-3 pt-1 text-white">
//     <div className="text-[9px] text-white/35">Dining · Near you</div>
//     <div className="mt-1 text-[11px] font-medium text-white">On campus now</div>
//     {[["Fresh Food Co.","70%","12 min",70],["The Den","20%","2 min",20],["Cougar Grounds","45%","6 min",45]].map(([n,s,t,p]) => (
//       <div key={n} className="mt-1.5 rounded-xl border border-white/8 bg-white/[0.03] p-2">
//         <div className="flex items-center justify-between text-[9px]">
//           <span className="font-medium text-white/80">{n}</span>
//           <span className="text-[#C8A96A]">{t}</span>
//         </div>
//         <div className="mt-1 h-1 overflow-hidden rounded-full bg-white/10">
//           <div className="h-full rounded-full bg-[#C8A96A]" style={{ width: `${p}%` }} />
//         </div>
//         <div className="mt-1 flex gap-1">
//           {["🥗 Veg","🍗 Halal","🌾 GF"].map(f => (
//             <span key={f} className="rounded-full bg-white/[0.06] px-1.5 py-0.5 text-[6px] text-white/40">{f}</span>
//           ))}
//         </div>
//       </div>
//     ))}
//     <div className="mt-2 rounded-xl border border-[#C8A96A]/20 bg-[#C8A96A]/5 px-2 py-1.5 text-[8px] text-[#C8A96A]/80">⚡ Dining Dollars: $23.40 — running low</div>
//   </div></Shell>;
// }

// function NewShuttle() {
//   return <Shell><div className="px-3 pt-1 text-white">
//     <div className="text-[9px] text-white/35">Transportation</div>
//     <div className="mt-1 text-[8px] text-[#C8A96A]">Next class: SEC 100 at 11:00</div>
//     <div className="mt-2 rounded-xl border border-[#C8A96A]/30 bg-[#C8A96A]/10 p-2">
//       <div className="text-[7px] uppercase tracking-wider text-[#C8A96A]/60">Recommended</div>
//       <div className="text-[10px] font-medium text-white mt-0.5">Cougar Line → Tech Bridge</div>
//       <div className="text-[8px] text-white/40">Arrives 3 min · SEC in 8 min</div>
//     </div>
//     <div className="relative mt-2 h-14 overflow-hidden rounded-xl border border-white/8">
//       <svg viewBox="0 0 140 52" className="absolute inset-0 h-full w-full">
//         <path d="M10 42 C 40 10 80 42 130 12" fill="none" stroke="#C8A96A" strokeWidth="1.5" strokeDasharray="3 2" />
//         {[10,45,90,130].map((x,i) => <circle key={i} cx={x} cy={i%2===0?42:12} r="3.5" fill="#0a0a0b" stroke="#C8A96A" strokeWidth="1" />)}
//         <circle cx="10" cy="42" r="4" fill="#EDEAE3" />
//       </svg>
//     </div>
//     <div className="mt-2 space-y-1">
//       {[["Cougar Line","3 min"],["Cougar Ride","On demand"],["Sugar Land","Hourly"],["Ride & Dine","5 min"]].map(([n,t]) => (
//         <div key={n} className="flex justify-between rounded-lg bg-white/[0.03] px-2 py-1 text-[8px]">
//           <span className="text-white/55">{n}</span><span className="text-[#C8A96A]">{t}</span>
//         </div>
//       ))}
//     </div>
//   </div></Shell>;
// }

// function NewSchedule() {
//   return <Shell><div className="px-3 pt-1 text-white">
//     <div className="text-[9px] text-white/35">Today</div>
//     <div className="mt-1.5 space-y-1.5">
//       {[{t:"9:00",n:"COSC 3360",r:"PGH 232",done:true},{t:"11:00",n:"CHEM 1331",r:"SEC 100",active:true},{t:"14:30",n:"MATH 2415",r:"CBB 120"}].map(c => (
//         <div key={c.n} className={`flex items-center gap-2 rounded-xl border px-2 py-2 ${c.active?"border-[#C8A96A]/30 bg-[#C8A96A]/[0.07]":c.done?"border-white/5 opacity-35":"border-white/8 bg-white/[0.02]"}`}>
//           <div className="w-8 font-mono text-[8px] text-white/40">{c.t}</div>
//           <div className="flex-1">
//             <div className={`text-[10px] font-medium ${c.active?"text-[#C8A96A]":"text-white/70"}`}>{c.n}</div>
//             <div className="text-[7px] text-white/30">{c.r}</div>
//           </div>
//           {c.active && <div className="rounded-full bg-[#C8A96A]/20 px-2 py-0.5 text-[7px] text-[#C8A96A]">Now</div>}
//         </div>
//       ))}
//     </div>
//     <div className="mt-2 rounded-xl border border-white/8 bg-white/[0.02] p-2">
//       <div className="font-mono text-[7px] uppercase tracking-wider text-white/25 mb-1.5">Deadlines</div>
//       {[["COSC 3360 · Project 2","Tomorrow","red"],["CHEM 1331 · Lab","Friday",""],["MATH · HW 7","Sunday",""]].map(([a,b,c]) => (
//         <div key={a} className="flex justify-between py-1 text-[8px] border-b border-white/5 last:border-0">
//           <span className="text-white/45">{a}</span>
//           <span className={c==="red"?"text-red-400/80":"text-white/25"}>{b}</span>
//         </div>
//       ))}
//     </div>
//   </div></Shell>;
// }

// function NewEmergency() {
//   return <Shell><div className="px-3 pt-1 text-white">
//     <div className="text-[9px] text-white/35">Emergency Assistance</div>
//     <div className="mt-2 space-y-1.5">
//       {[["🚔","University Police","Emergency & safety"],["💬","CAPS Counseling","Mental health"],["🏥","Student Health","Medical support"],["🏢","Facilities","Building emergencies"],["✈️","Intl. Students","Visa & travel"]].map(([ic,n,r]) => (
//         <div key={n} className="flex items-center gap-2 rounded-xl border border-white/8 bg-white/[0.02] px-2 py-2">
//           <div className="h-7 w-7 flex-shrink-0 rounded-full bg-white/5 flex items-center justify-center text-[10px]">{ic}</div>
//           <div className="flex-1">
//             <div className="text-[9px] font-medium text-white/80">{n}</div>
//             <div className="text-[7px] text-white/30">{r}</div>
//           </div>
//           <div className="rounded-full border border-[#C8A96A]/25 bg-[#C8A96A]/10 px-2 py-0.5 text-[7px] text-[#C8A96A]">Call →</div>
//         </div>
//       ))}
//     </div>
//     <div className="mt-2 rounded-xl border border-[#C8A96A]/15 bg-[#C8A96A]/[0.04] px-2 py-1.5 text-[8px] text-[#C8A96A]/55">0 navigation steps from home screen</div>
//   </div></Shell>;
// }

// function NewOrgs() {
//   return <Shell><div className="px-3 pt-1 text-white">
//     <div className="text-[9px] text-white/35">Clubs · Computer Science</div>
//     <div className="mt-1.5 space-y-1.5">
//       {[["C","CodeCoogs","CS Club","High match"],["X","CougarCS","Competitive Prog.","High match"],["H","UH Hackathon","Hackathon","Trending"],["A","AI & ML Society","Research","Recommended"]].map(([l,n,t,m]) => (
//         <div key={n} className="flex items-center gap-2 rounded-xl border border-white/8 bg-white/[0.02] px-2 py-2">
//           <div className="h-8 w-8 flex-shrink-0 rounded-xl bg-[#C8A96A]/15 flex items-center justify-center text-[#C8A96A] text-[11px] font-display">{l}</div>
//           <div className="flex-1">
//             <div className="text-[9px] font-medium text-white/80">{n}</div>
//             <div className="text-[7px] text-white/30">{t}</div>
//           </div>
//           <span className="rounded-full border border-[#C8A96A]/20 bg-[#C8A96A]/5 px-2 py-0.5 text-[7px] text-[#C8A96A]/60">{m}</span>
//         </div>
//       ))}
//     </div>
//     <div className="mt-2 flex gap-1 flex-wrap">
//       {["Hackathons","Cybersecurity","AI/ML"].map(t => (
//         <span key={t} className="rounded-full border border-white/8 px-2 py-0.5 text-[7px] text-white/25">{t}</span>
//       ))}
//     </div>
//   </div></Shell>;
// }

// function NewStudyGroups() {
//   return <Shell><div className="px-3 pt-1 text-white">
//     <div className="text-[9px] text-white/35">Study Groups · Your Courses</div>
//     <div className="mt-1.5 space-y-1.5">
//       {[["🧪","CHEM 1331","4 members · Today 6PM · Library 2F"],["💻","COSC 3360","3 members · Tomorrow 4PM · PGH"],["📐","MATH 2415","6 members · Friday 5PM · Cougar Village"]].map(([ic,n,d]) => (
//         <div key={n} className="flex gap-2 rounded-xl border border-white/8 bg-white/[0.02] p-2">
//           <div className="h-8 w-8 flex-shrink-0 rounded-xl bg-white/5 flex items-center justify-center text-sm">{ic}</div>
//           <div><div className="text-[9px] font-medium text-white/80">{n}</div><div className="text-[7px] text-white/30">{d}</div></div>
//         </div>
//       ))}
//     </div>
//     <div className="mt-2 rounded-xl border border-dashed border-white/10 p-2 text-center text-[8px] text-white/20">+ Find classmates in CHEM 1331</div>
//     <div className="mt-2 grid grid-cols-2 gap-1.5 text-[7px] text-white/30">
//       <div className="rounded-lg bg-white/[0.03] border border-white/5 p-1.5">📎 Shared notes</div>
//       <div className="rounded-lg bg-white/[0.03] border border-white/5 p-1.5">📅 Study sessions</div>
//     </div>
//   </div></Shell>;
// }

// function NewProfile() {
//   return <Shell><div className="px-3 pt-1 text-white">
//     <div className="text-[9px] text-white/35">Profile</div>
//     <div className="mt-2 rounded-xl border border-[#C8A96A]/20 bg-gradient-to-br from-[#C8A96A]/10 to-transparent p-3">
//       <div className="font-mono text-[7px] text-[#C8A96A]/50 mb-0.5">Digital Student ID</div>
//       <div className="font-display text-[11px] text-white">Khushbu Patel</div>
//       <div className="text-[8px] text-white/35">UH ID: 1234567 · CS + Pop. Health</div>
//       <div className="mt-2 h-8 w-24 rounded-md bg-white/5 flex items-center justify-center font-mono text-[6px] text-white/15">▓▓▓ barcode ▓▓▓</div>
//     </div>
//     <div className="mt-2 grid grid-cols-2 gap-1.5">
//       {[["Dining Dollars","$23.40","red",15],["ShastaBUCKS","$48.20","gold",45]].map(([l,v,c,p]) => (
//         <div key={l} className="rounded-xl border border-white/8 bg-white/[0.02] p-2">
//           <div className="text-[7px] text-white/25">{l}</div>
//           <div className="font-display text-[14px] text-white mt-0.5">{v}</div>
//           <div className="mt-1.5 h-1 overflow-hidden rounded-full bg-white/10">
//             <div className={`h-full rounded-full ${c==="red"?"bg-red-400/60":"bg-[#C8A96A]/60"}`} style={{width:`${p}%`}} />
//           </div>
//         </div>
//       ))}
//     </div>
//     <div className="mt-2 flex items-center gap-2 rounded-xl border border-white/8 bg-white/[0.02] p-2">
//       <div className="h-7 w-7 rounded-full bg-[#C8A96A]/20 flex items-center justify-center text-[#C8A96A] text-[10px]">A</div>
//       <div>
//         <div className="text-[9px] text-white/70">Academic Advisor</div>
//         <div className="text-[7px] text-white/30">advisor@uh.edu</div>
//       </div>
//       <div className="ml-auto text-[7px] text-[#C8A96A]/60">Email →</div>
//     </div>
//   </div></Shell>;
// }

// /* ─── AI ASSISTANT SCREENS ─── */
// function OldAI() {
//   return (
//     <div className="relative h-full w-full overflow-hidden bg-[#111318]">
//       <img
//         src="/images/uhgo/uhgo-home.png"
//         alt="UHGo — no AI assistant"
//         className="h-full w-full object-cover opacity-12 grayscale"
//         draggable={false}
//       />
//       <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 px-4 text-center">
//         <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-3xl opacity-25">🤖</div>
//         <p className="text-[9px] text-white/30 leading-relaxed">
//           No AI assistant in UHGo.<br />Students Google campus questions.
//         </p>
//         <div className="rounded-xl border border-red-500/30 bg-red-950/80 px-3 py-2 text-[8px] text-red-400/75">
//           ✗ Feature doesn't exist
//         </div>
//       </div>
//     </div>
//   );
// }

// function NewAI() {
//   return <Shell><div className="px-3 pt-1 text-white">
//     <div className="text-[9px] text-white/35">Campus Assistant</div>
//     {/* chat messages */}
//     <div className="mt-2 space-y-2">
//       <div className="flex justify-end">
//         <div className="max-w-[80%] rounded-2xl rounded-tr-sm bg-[#C8A96A]/85 px-2.5 py-1.5 text-[9px] text-black">
//           Where's my next class?
//         </div>
//       </div>
//       <div className="flex justify-start">
//         <div className="max-w-[88%] rounded-2xl rounded-tl-sm bg-white/[0.07] px-2.5 py-1.5 text-[9px] text-white/80 leading-snug">
//           CHEM 1331 in SEC 100 at 11:00. Cougar Line gets you there in 6 min — leave by 10:48. ✨
//         </div>
//       </div>
//       <div className="flex justify-end">
//         <div className="max-w-[80%] rounded-2xl rounded-tr-sm bg-[#C8A96A]/85 px-2.5 py-1.5 text-[9px] text-black">
//           Any dining nearby after?
//         </div>
//       </div>
//       <div className="flex justify-start">
//         <div className="max-w-[88%] rounded-2xl rounded-tl-sm bg-white/[0.07] px-2.5 py-1.5 text-[9px] text-white/80 leading-snug">
//           The Den is a 3-min walk from SEC and quiet right now. Your Dining Dollars balance is $23.40.
//         </div>
//       </div>
//       <div className="flex justify-end">
//         <div className="max-w-[80%] rounded-2xl rounded-tr-sm bg-[#C8A96A]/85 px-2.5 py-1.5 text-[9px] text-black">
//           When's the next Cougar Line?
//         </div>
//       </div>
//       <div className="flex justify-start">
//         <div className="max-w-[88%] rounded-2xl rounded-tl-sm bg-white/[0.07] px-2.5 py-1.5 text-[9px] text-white/80 leading-snug">
//           Arriving at Student Center in 3 min. Next one in 11 min.
//         </div>
//       </div>
//     </div>
//     {/* input bar */}
//     <div className="absolute inset-x-3 bottom-5 flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-3 py-2 backdrop-blur">
//       <span className="flex-1 text-[8px] text-white/25">Ask anything about campus…</span>
//       <div className="h-5 w-5 rounded-full bg-[#C8A96A]/80 flex items-center justify-center text-[8px] text-black">↑</div>
//     </div>
//   </div></Shell>;
// }

// /* ══════════════════════════════════════════════
//    DRAG COMPARE SLIDER
// ══════════════════════════════════════════════ */
// function CompareSlider({ Before, After }) {
//   const [pct, setPct] = useState(50);
//   const ref = useRef(null);
//   const dragging = useRef(false);
//   const move = useCallback((clientX) => {
//     if (!ref.current) return;
//     const { left, width } = ref.current.getBoundingClientRect();
//     setPct(Math.max(4, Math.min(96, ((clientX - left) / width) * 100)));
//   }, []);
//   return (
//     <div ref={ref}
//       className="relative select-none overflow-hidden rounded-[2rem] border border-white/10 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.9)]"
//       style={{ aspectRatio: "9/19", cursor: "col-resize", touchAction: "none" }}
//       onMouseDown={() => { dragging.current = true; }}
//       onMouseMove={e => { if (dragging.current) move(e.clientX); }}
//       onMouseUp={() => { dragging.current = false; }}
//       onMouseLeave={() => { dragging.current = false; }}
//       onTouchMove={e => move(e.touches[0].clientX)}
//     >
//       <div className="absolute left-1/2 top-2.5 z-40 h-[14px] w-[80px] -translate-x-1/2 rounded-full bg-black" />
//       <div className="absolute inset-0"><After /></div>
//       <div className="absolute inset-0 overflow-hidden" style={{ clipPath: `inset(0 ${100-pct}% 0 0)` }}><Before /></div>
//       <div className="pointer-events-none absolute inset-y-0 z-30 flex items-center justify-center" style={{ left: `${pct}%`, transform: "translateX(-50%)" }}>
//         <div className="h-full w-[1.5px] bg-white/30" />
//         <div className="absolute flex h-8 w-8 items-center justify-center rounded-full border border-white/20 bg-white/10 text-[11px] backdrop-blur-md text-white">⇔</div>
//       </div>
//     </div>
//   );
// }

// /* ══════════════════════════════════════════════
//    FEATURE PAIRS
// ══════════════════════════════════════════════ */
// const PAIRS = [
//   { key:"home",        label:"Home",           captions:["Daily Focus + AI","Smart quick access","Proactive reminders"],                    Before:OldHome,        After:NewHome },
//   { key:"map",         label:"Campus Map",     captions:["Abbreviation search","Walking time estimate","Google Maps handoff"],               Before:OldMap,         After:NewMap },
//   { key:"dining",      label:"Dining",         captions:["Smart recommendations","Menus + dietary filters","Occupancy alerts"],               Before:OldDining,      After:NewDining },
//   { key:"shuttle",     label:"Transportation", captions:["Context-aware guidance","Live arrival times","Route recommendations"],              Before:OldShuttle,     After:NewShuttle },
//   { key:"schedule",    label:"Schedule",       captions:["Today's classes — no login","Assignment deadlines","Replaces AccessUH redirect"],   Before:OldSchedule,    After:NewSchedule },
//   { key:"ai",          label:"AI Assistant",   captions:["New feature — not in UHGo","Natural language campus queries","Schedule + shuttle + dining in one ask"], Before:OldAI, After:NewAI },
//   { key:"emergency",   label:"Emergency",      captions:["One-tap calling","0 navigation steps","All contacts unified"],                     Before:OldEmergency,   After:NewEmergency },
//   { key:"orgs",        label:"Organizations",  captions:["Major-matched clubs","Trending skills","Personalized ranking"],                     Before:OldOrgs,        After:NewOrgs },
//   { key:"studygroups", label:"Study Groups",   captions:["Course-based discovery","Shared resources","Exam coordination"],                   Before:OldStudyGroups, After:NewStudyGroups },
//   { key:"profile",     label:"Profile",        captions:["Digital ID","Dining balances + insights","Advisor + personalization"],             Before:OldProfile,     After:NewProfile },
// ];

// /* ══════════════════════════════════════════════
//    PINNED SOLUTION SHOWCASE
// ══════════════════════════════════════════════ */
// function SolutionShowcase() {
//   const stage = useRef(null);
//   const { scrollYProgress } = useScroll({ target: stage, offset: ["start start", "end end"] });
//   const [active, setActive] = useState(0);
//   useMotionValueEvent(scrollYProgress, "change", v => {
//     setActive(Math.min(PAIRS.length - 1, Math.floor(v * PAIRS.length)));
//   });
//   const feature = PAIRS[active];
//   return (
//     <div ref={stage} style={{ height: `${PAIRS.length * 100}vh` }} className="relative">
//       <div className="sticky top-0 flex h-screen items-center overflow-hidden">
//         <div className="pointer-events-none absolute left-1/2 top-1/2 h-[480px] w-[480px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/5 blur-[150px]" />
//         <div className="mx-auto w-full max-w-7xl px-6 md:px-10">
//           <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-12">
//             {/* step list */}
//             <div className="md:col-span-3">
//               <div className="font-mono text-[10px] uppercase tracking-eyebrow text-muted mb-4">
//                 {String(active+1).padStart(2,"0")} / {String(PAIRS.length).padStart(2,"0")}
//               </div>
//               <ul className="space-y-1.5">
//                 {PAIRS.map((f,i) => (
//                   <motion.li key={f.key}
//                     animate={{ opacity: i===active?1:0.14, x: i===active?4:0 }}
//                     transition={{ duration: 0.35, ease: EL }}
//                     className="flex items-center gap-2 font-display text-xl text-bone md:text-2xl"
//                   >
//                     {i===active && <motion.span layoutId="nav-dot" className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gold" />}
//                     {f.label}
//                   </motion.li>
//                 ))}
//               </ul>
//             </div>
//             {/* phone */}
//             <div className="flex justify-center md:col-span-5">
//               <div className="w-[215px] md:w-[248px]">
//                 <AnimatePresence mode="wait">
//                   <motion.div key={feature.key}
//                     initial={{ opacity:0, y:18, scale:0.96 }}
//                     animate={{ opacity:1, y:0, scale:1 }}
//                     exit={{ opacity:0, y:-10, scale:0.97 }}
//                     transition={{ duration: 0.42, ease: EL }}
//                   >
//                     <CompareSlider Before={feature.Before} After={feature.After} />
//                   </motion.div>
//                 </AnimatePresence>
//                 <p className="mt-3 text-center font-mono text-[9px] text-white/18">drag to compare</p>
//               </div>
//             </div>
//             {/* captions */}
//             <div className="md:col-span-4">
//               <AnimatePresence mode="wait">
//                 <motion.div key={feature.key+"_c"}
//                   initial={{ opacity:0, x:14 }}
//                   animate={{ opacity:1, x:0 }}
//                   exit={{ opacity:0, x:-8 }}
//                   transition={{ duration: 0.38, ease: EL }}
//                 >
//                   <div className="font-mono text-[10px] uppercase tracking-eyebrow text-gold/55 mb-4">{feature.label} · Redesigned</div>
//                   <ul className="space-y-3">
//                     {feature.captions.map((c,i) => (
//                       <motion.li key={c}
//                         initial={{ opacity:0, x:10 }}
//                         animate={{ opacity:1, x:0 }}
//                         transition={{ duration:0.32, delay:i*0.07, ease:EL }}
//                         className="flex items-center gap-3 text-bone/65 text-base"
//                       >
//                         <div className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gold/55" />{c}
//                       </motion.li>
//                     ))}
//                   </ul>
//                 </motion.div>
//               </AnimatePresence>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// /* ══════════════════════════════════════════════
//    ARCH DIAGRAM
// ══════════════════════════════════════════════ */
// function ArchDiagram() {
//   const ref = useRef(null);
//   const inView = useInView(ref, { once:true, margin:"-15%" });
//   const rows = [
//     { label:"Student",   nodes:["Schedule","Location","Enrollment","Preferences"], accent:false },
//     { label:"DigitalUH", nodes:["AI Assistant","Intent Classifier","Recommendation Engine","Campus Router"], accent:true },
//     { label:"Services",  nodes:["Supabase (18 tables)","Google Maps API","Microsoft OAuth","Supabase Edge"], accent:false },
//   ];
//   return (
//     <div ref={ref} className="overflow-hidden rounded-3xl border border-white/8 bg-white/[0.02] p-8">
//       <div className="font-mono text-[10px] uppercase tracking-eyebrow text-gold/60 mb-8">System Architecture</div>
//       <div className="space-y-8">
//         {rows.map((row,ri) => (
//           <div key={row.label} className="flex items-center gap-6">
//             <div className="w-24 flex-shrink-0 font-mono text-[10px] text-bone/20">{row.label}</div>
//             <div className="flex flex-wrap gap-2">
//               {row.nodes.map((node,ni) => (
//                 <motion.div key={node}
//                   initial={{ opacity:0, scale:0.85 }}
//                   animate={inView?{opacity:1,scale:1}:{}}
//                   transition={{ duration:0.4, delay:ri*0.18+ni*0.08, ease:EL }}
//                   className={`rounded-xl border px-3 py-2 text-sm ${row.accent?"border-gold/30 bg-gold/10 text-gold":"border-white/8 bg-white/[0.03] text-bone/55"}`}
//                 >{node}</motion.div>
//               ))}
//             </div>
//           </div>
//         ))}
//         <motion.div initial={{opacity:0}} animate={inView?{opacity:1}:{}} transition={{duration:0.6,delay:0.8}}
//           className="flex flex-wrap gap-2 pl-[7.5rem]">
//           {["PKCE Auth flow","Server-side Maps proxy","Real-time subscriptions","0 external logins"].map(t => (
//             <span key={t} className="rounded-full border border-white/8 px-3 py-1 font-mono text-[9px] text-bone/25">{t}</span>
//           ))}
//         </motion.div>
//       </div>
//     </div>
//   );
// }

// /* ══════════════════════════════════════════════
//    SCROLL PROGRESS BAR
// ══════════════════════════════════════════════ */
// function ProgressBar() {
//   const { scrollYProgress } = useScroll();
//   const scaleX = useTransform(scrollYProgress, [0,1], [0,1]);
//   return <motion.div style={{ scaleX, transformOrigin:"left" }} className="fixed inset-x-0 top-0 z-50 h-[1.5px] bg-gold/70" />;
// }

// /* ══════════════════════════════════════════════
//    SECTION DIVIDER
// ══════════════════════════════════════════════ */
// function Div({ n, label }) {
//   return (
//     <div className="flex items-center gap-4 mb-12">
//       <span className="font-mono text-[10px] text-gold/45">{String(n).padStart(2,"0")}</span>
//       <div className="h-px flex-1 bg-white/8" />
//       <span className="font-mono text-[10px] uppercase tracking-eyebrow text-white/20">{label}</span>
//     </div>
//   );
// }

// /* ══════════════════════════════════════════════
//    MAIN EXPORT
// ══════════════════════════════════════════════ */
// const META = [
//   ["Role","Lead UX & Front-End"],
//   ["Year","2025 — 2026"],
//   ["Platform","iOS · Android · Web"],
//   ["Type","Concept → Prototype"],
// ];

// const NEW_SCREENS = [
//   { label:"Home",         C:NewHome },
//   { label:"Campus Map",   C:NewMap },
//   { label:"Dining",       C:NewDining },
//   { label:"Shuttle",      C:NewShuttle },
//   { label:"Schedule",     C:NewSchedule },
//   { label:"AI Assistant", C:NewAI },
//   { label:"Emergency",    C:NewEmergency },
//   { label:"Orgs",         C:NewOrgs },
//   { label:"Study Groups", C:NewStudyGroups },
//   { label:"Profile",      C:NewProfile },
// ];

// export default function DigitalUH() {
//   return (
//     <section id="digitaluh" className="relative">
//       <ProgressBar />

//       {/* HERO */}
//       <div className="mx-auto max-w-7xl px-6 pt-32 md:px-10 md:pt-48">
//         <Eyebrow>03 — Featured Case Study</Eyebrow>
//         <div className="mt-8 flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
//           <motion.h2 initial={{ opacity:0, y:40 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:1, ease:EL }}
//             className="font-display text-6xl leading-[0.9] tracking-tightest text-bone md:text-[8rem]">
//             Digital<span className="italic text-gold">UH</span>
//           </motion.h2>
//           <motion.p initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:0.9, delay:0.15, ease:EL }}
//             className="max-w-sm text-bone/50">
//             UHGo exists. Students use it because they have to. DigitalUH is what it should be — a campus platform designed around how students actually live.
//           </motion.p>
//         </div>
//         <div className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/5 md:grid-cols-4">
//           {META.map(([k,v]) => (
//             <div key={k} className="bg-ink-900 p-5">
//               <div className="font-mono text-[10px] uppercase tracking-eyebrow text-muted">{k}</div>
//               <div className="mt-2 text-bone">{v}</div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* §1 THE PROBLEM */}
//       <div className="mx-auto max-w-7xl px-6 pt-28 md:px-10 md:pt-40">
//         <Div n={1} label="The Problem" />
//         <motion.h3 initial={{ opacity:0, y:24 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:0.8, ease:EL }}
//           className="max-w-2xl font-display text-3xl leading-tight text-bone md:text-5xl mb-16">
//           UHGo was built to check institutional boxes.{" "}
//           <span className="text-bone/30">Not to help students navigate their day.</span>
//         </motion.h3>

//         <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
//           {[
//             { label:"Home",         note:"Cluttered tiles. Poor hierarchy.",                   C:OldHome },
//             { label:"Campus Map",   note:"Building abbreviations aren't recognized.",           C:OldMap },
//             { label:"Dining",       note:"Students can't view menus or compare options.",       C:OldDining },
//             { label:"Shuttle",      note:"Flat list. No arrival times. No context.",            C:OldShuttle },
//             { label:"Schedule",     note:"Daily schedules hidden behind external logins.",      C:OldSchedule },
//             { label:"Emergency",    note:"Important contacts take too many steps to find.",     C:OldEmergency },
//             { label:"Organizations",note:"Hundreds of clubs. Zero personalization.",            C:OldOrgs },
//             { label:"Profile",      note:"Settings page only — not a student dashboard.",       C:OldProfile },
//             { label:"AI Assistant", note:"Doesn't exist. Students Google campus questions instead.", C:OldAI },
//           ].map(({label,note,C},i) => (
//             <motion.div key={label}
//               initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true, margin:"-5%" }}
//               transition={{ duration:0.5, delay:(i%4)*0.07, ease:EL }} className="group">
//               <div className="relative overflow-hidden rounded-[1.5rem] border border-red-500/15 transition-all duration-400 group-hover:border-red-500/30"
//                 style={{ aspectRatio:"9/19" }}>
//                 <div className="absolute left-1/2 top-2 z-30 h-[10px] w-[60px] -translate-x-1/2 rounded-full bg-black" />
//                 <C />
//                 <div className="absolute bottom-3 left-2 right-2 z-20 rounded-xl border border-red-500/25 bg-red-950/80 px-2 py-1.5 backdrop-blur text-[7px] text-red-400/75 leading-snug">{note}</div>
//               </div>
//               <div className="mt-2 text-center font-mono text-[10px] text-bone/30">{label}</div>
//             </motion.div>
//           ))}
//         </div>
//       </div>

//       {/* §2 RESEARCH */}
//       <div className="mx-auto max-w-7xl px-6 pt-28 md:px-10 md:pt-40">
//         <Div n={2} label="Research" />
//         <motion.h3 initial={{ opacity:0, y:24 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:0.8, ease:EL }}
//           className="max-w-2xl font-display text-3xl leading-tight text-bone md:text-4xl mb-14">
//           Every decision traces back to observed friction —{" "}
//           <span className="text-bone/30">not assumptions.</span>
//         </motion.h3>

//         <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
//           {[
//             { e:"📋", stat:"1st day", label:"Search failure", note:"Abbreviation search fails exactly when freshmen need it most — first class, new building, time pressure." },
//             { e:"🍽", stat:"", label:"Decision gap", note:"UHGo shows 'Open' or 'Closed'. Students need: how busy, what's on the menu, can I afford it, will I make it back?" },
//             { e:"📅", stat:"10×", label:"Daily schedule checks", note:"Schedules checked every morning. Grades checked 6× a semester. UHGo leads with Grades, which route to AccessUH and require re-authentication every time." },
//             { e:"🚌", stat:"", label:"Name blindness", note:"Cougar Ride, Ride & Dine, Sugar Land Shuttle — names that tell students nothing without reading docs they've never seen." },
//             { e:"🆘", stat:"3+", label:"Taps to emergency", note:"Campus safety resources buried in menus designed for browsing — not for moments that don't allow for searching." },
//             { e:"👥", stat:"0", label:"Study group tools", note:"Students form groups via GroupMe because UHGo offers nothing. The enrollment data to fix this already exists in the app." },
//             { e:"🔄", stat:"", label:"External redirect loop", note:"Grades, schedules, and advisor info bounce students to external SSO portals. Each redirect is a moment of abandonment." },
//             { e:"🎓", stat:"500+", label:"Organizations listed", note:"Alphabetical and unfiltered. Students scroll for 30 seconds and close the page. Relevance beats volume." },
//             { e:"💳", stat:"", label:"Surprise at the register", note:"Dining Dollars run out silently. Students discover the problem at the cashier — avoidable with one proactive notification." },
//             { e:"🤖", stat:"0", label:"AI features in UHGo", note:"Students Google 'UH building PGH', call the registrar for shuttle times, and text friends about dining. A campus assistant would answer all of these in one place." },
//           ].map(({e,stat,label,note},i) => (
//             <motion.div key={label}
//               initial={{ opacity:0, y:24 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true, margin:"-8%" }}
//               transition={{ duration:0.55, delay:(i%3)*0.07, ease:EL }}
//               className="rounded-2xl border border-white/8 bg-white/[0.02] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-gold/25"
//             >
//               <div className="flex items-start justify-between mb-2">
//                 <span className="text-xl">{e}</span>
//                 {stat && <span className="font-display text-2xl text-gold">{stat}</span>}
//               </div>
//               <div className="font-mono text-[10px] uppercase tracking-eyebrow text-gold/55 mb-1.5">{label}</div>
//               <p className="text-[12px] leading-snug text-bone/45">{note}</p>
//             </motion.div>
//           ))}
//         </div>
//       </div>

//       {/* §3 DESIGN STRATEGY */}
//       <div className="mx-auto max-w-7xl px-6 pt-28 md:px-10 md:pt-40">
//         <Div n={3} label="Design Strategy" />
//         <motion.h3 initial={{ opacity:0, y:24 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:0.8, ease:EL }}
//           className="max-w-xl font-display text-3xl leading-tight text-bone md:text-4xl mb-14">
//           One philosophy behind every screen.
//         </motion.h3>

//         <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
//           {[
//             ["P1","Replace searching with guidance","If the app knows your next class, your location, and the time — it should tell you what to do next. Not wait to be asked."],
//             ["P2","Design for the first two weeks","The highest-stress moments are the first days of each semester. That's when navigation fails, menus confuse, and apps get uninstalled."],
//             ["P3","Surface the 3 things students actually use","Schedule, dining, and navigation account for 80% of daily use. Everything else goes one tap further — not equal to everything else."],
//             ["P4","Make emergencies frictionless","Any experience that might be needed under stress must be reachable in zero navigation steps from the home screen."],
//             ["P5","Relevance over volume","5 clubs matched to your major with upcoming events is more useful than 500 clubs listed alphabetically. Same data, different intent."],
//             ["P6","Proactive over reactive","Alert the student before the balance is empty. Before the class starts. Before the deadline arrives. The app already has all the data."],
//           ].map(([n,title,desc],i) => (
//             <motion.div key={n}
//               initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true, margin:"-8%" }}
//               transition={{ duration:0.55, delay:(i%3)*0.07, ease:EL }}
//               className="group rounded-2xl border border-white/8 bg-white/[0.02] p-6 transition-all duration-400 hover:-translate-y-1 hover:border-gold/25 hover:bg-white/[0.04]"
//             >
//               <div className="font-mono text-[10px] text-gold/50 mb-3">{n}</div>
//               <div className="font-display text-xl text-bone mb-2">{title}</div>
//               <p className="text-sm text-bone/40 leading-relaxed">{desc}</p>
//             </motion.div>
//           ))}
//         </div>
//       </div>

//       {/* §4 THE SOLUTION */}
//       <div className="pt-28 md:pt-40">
//         <div className="mx-auto max-w-7xl px-6 md:px-10">
//           <Div n={4} label="The Solution" />
//           <motion.h3 initial={{ opacity:0, y:24 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:0.8, ease:EL }}
//             className="max-w-2xl font-display text-3xl leading-tight text-bone md:text-5xl mb-4">
//             Every screen, redesigned.{" "}
//             <span className="text-bone/30">Drag to compare.</span>
//           </motion.h3>
//           <p className="text-bone/35 max-w-md mb-16 text-sm">Scroll through all nine features. Each comparison is interactive — drag the divider to see before and after.</p>
//         </div>
//         <SolutionShowcase />
//       </div>

//       {/* §5 ARCHITECTURE */}
//       <div className="mx-auto max-w-7xl px-6 pt-28 md:px-10 md:pt-40">
//         <Div n={5} label="Architecture" />
//         <motion.h3 initial={{ opacity:0, y:24 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:0.8, ease:EL }}
//           className="max-w-2xl font-display text-3xl leading-tight text-bone md:text-5xl mb-14">
//           Built to feel like a product,{" "}
//           <span className="text-bone/30">not a prototype.</span>
//         </motion.h3>
//         <ArchDiagram />
//         <div className="mt-6 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/5 md:grid-cols-4">
//           {[
//             ["Frontend","React Native · TypeScript","Typed component architecture, strict prop interfaces shared across iOS, Android, and web."],
//             ["Auth & Data","Microsoft OAuth · Supabase","PKCE-based OAuth for UH credentials. 18 Supabase tables shared across all modules."],
//             ["AI Layer","Intent Classifier · Edge Functions","Rules-based classifier routes campus queries. Falls through to LLM for open-ended questions."],
//             ["Maps","Google Maps · Server Proxy","Server-side API key proxy handles walking estimates and deep-link handoffs securely."],
//           ].map(([label,tech,desc],i) => (
//             <motion.div key={label}
//               initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true, margin:"-8%" }}
//               transition={{ duration:0.6, delay:i*0.08, ease:EL }}
//               className="bg-ink-900 p-6">
//               <div className="font-mono text-[10px] uppercase tracking-eyebrow text-muted">{label}</div>
//               <div className="mt-3 font-display text-lg text-gold">{tech}</div>
//               <p className="mt-3 text-sm leading-relaxed text-bone/45">{desc}</p>
//             </motion.div>
//           ))}
//         </div>
//       </div>

//       {/* §6 FINAL PRODUCT */}
//       <div className="mx-auto max-w-7xl px-6 pt-28 pb-40 md:px-10 md:pt-40 md:pb-56">
//         <Div n={6} label="Final Product" />
//         <motion.h3 initial={{ opacity:0, y:24 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:0.8, ease:EL }}
//           className="max-w-xl font-display text-3xl leading-tight text-bone md:text-5xl mb-16">
//           One coherent experience.{" "}
//           <span className="italic text-gold">Ten redesigned screens.</span>
//         </motion.h3>

//         <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
//           {NEW_SCREENS.map(({label,C},i) => (
//             <motion.div key={label}
//               initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true, margin:"-5%" }}
//               transition={{ duration:0.55, delay:(i%5)*0.07, ease:EL }} className="group">
//               <div className="relative overflow-hidden rounded-[1.6rem] border border-white/8 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.7)] transition-all duration-500 group-hover:-translate-y-2 group-hover:border-gold/20 group-hover:shadow-[0_30px_80px_-15px_rgba(200,169,106,0.12)]"
//                 style={{ aspectRatio:"9/19" }}>
//                 <div className="absolute left-1/2 top-2 z-30 h-[10px] w-[60px] -translate-x-1/2 rounded-full bg-black" />
//                 <C />
//               </div>
//               <div className="mt-2 text-center font-mono text-[10px] text-bone/30">{label}</div>
//             </motion.div>
//           ))}
//         </div>

//         {/* reflection */}
//         <motion.blockquote
//           initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true, margin:"-10%" }}
//           transition={{ duration:1, ease:EL }}
//           className="mt-32 max-w-4xl font-display text-3xl leading-snug tracking-tight text-bone md:text-5xl"
//         >
//           The most important design decision wasn't visual.{" "}
//           <span className="text-bone/30">It was deciding which problems were actually worth solving.</span>
//         </motion.blockquote>

//         <div className="mt-16 h-px w-full bg-white/8" />
//         <div className="mt-12 flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
//           <div className="font-mono text-[11px] uppercase tracking-eyebrow text-muted">DigitalUH · 2025 — 2026</div>
//           <div className="flex flex-wrap gap-3">
//             {["React Native","TypeScript","Supabase","Google Maps API","Framer Motion"].map(t => (
//               <span key={t} className="rounded-full border border-white/10 px-3 py-1 font-mono text-[10px] uppercase tracking-wide text-bone/40">{t}</span>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


// // /**
// //  * DigitalUH.jsx — Cinematic case study, v3
// //  * Drop-in replacement. Nothing else in the portfolio changes.
// //  *
// //  * 6 sections: Problem → Research → Strategy → Solution (pinned) → Architecture → Final Grid
// //  * Deps: framer-motion (already in project). No new installs needed.
// //  */

// // import { useRef, useState, useCallback } from "react";
// // import {
// //   motion,
// //   useScroll,
// //   useTransform,
// //   useMotionValueEvent,
// //   useInView,
// //   AnimatePresence,
// // } from "framer-motion";
// // import { Eyebrow, GlassCard } from "../Primitives";
// // import { PhoneFrame, SCREENS } from "./DigitalUHScreens";

// // const EL = [0.16, 1, 0.3, 1];

// // /* ══════════════════════════════════════════════
// //    PHONE SHELL — shared wrapper
// // ══════════════════════════════════════════════ */
// // function Shell({ dark = false, children }) {
// //   return (
// //     <div className={`relative h-full overflow-hidden ${dark ? "bg-[#111318]" : "bg-[#0a0a0b]"}`}>
// //       <div className="absolute left-1/2 top-2.5 z-30 h-[13px] w-[76px] -translate-x-1/2 rounded-full bg-black" />
// //       <div className="absolute inset-x-0 top-0 z-20 flex items-center justify-between px-5 pt-2 font-mono text-[8px] text-white/30">
// //         <span>9:41</span><span>●●● WiFi 🔋</span>
// //       </div>
// //       <div className="absolute inset-0 pt-8">{children}</div>
// //     </div>
// //   );
// // }

// // /* ─── OLD SCREENS ─── */
// // function OldHome() {
// //   return <Shell dark><div className="px-3 pt-1 text-white">
// //     <div className="text-[9px] font-bold uppercase tracking-widest text-white/40">UHGo</div>
// //     <div className="mt-2 grid grid-cols-3 gap-1.5">
// //       {["Grades","Schedule","Maps","Dining","Shuttle","Library","Directory","News","More"].map(t => (
// //         <div key={t} className="flex flex-col items-center gap-1 rounded-xl border border-white/8 bg-white/[0.04] py-3">
// //           <div className="h-5 w-5 rounded-lg bg-white/15" />
// //           <div className="text-[7px] text-white/35">{t}</div>
// //         </div>
// //       ))}
// //     </div>
// //     <div className="mt-2 rounded-xl border border-white/8 bg-white/[0.03] p-2 text-[8px] text-white/20">University announcements feed…</div>
// //     <div className="absolute right-2 top-10 rounded bg-red-500/75 px-1.5 py-0.5 text-[7px] text-white">Poor hierarchy</div>
// //   </div></Shell>;
// // }

// // function OldMap() {
// //   return <Shell dark><div className="px-3 pt-1 text-white">
// //     <div className="text-[9px] font-bold uppercase tracking-widest text-white/40">UHGo · Maps</div>
// //     <div className="mt-2 flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-2 py-1.5 text-[9px] text-white/30">🔍 Search buildings…</div>
// //     <div className="mt-1.5 rounded-lg border border-red-500/30 bg-red-500/5 px-2 py-1.5 text-[8px] text-red-400/80">⚠ "PGH" — no results found</div>
// //     <div className="mt-2 h-32 rounded-lg border border-white/5 bg-white/[0.02] flex items-center justify-center text-[8px] text-white/15">generic map view</div>
// //     <div className="mt-2 rounded border border-red-500/20 bg-red-500/5 px-2 py-1.5 text-[8px] text-red-400/60">✗ Fails on abbreviations</div>
// //   </div></Shell>;
// // }

// // function OldDining() {
// //   return <Shell dark><div className="px-3 pt-1 text-white">
// //     <div className="text-[9px] font-bold uppercase tracking-widest text-white/40">UHGo · Dining</div>
// //     <div className="mt-2 space-y-1.5">
// //       {["Fresh Food Co. — Open","The Den — Open","Cougar Grounds — Closed"].map(s => (
// //         <div key={s} className="rounded border border-white/8 bg-white/[0.03] px-2 py-2 text-[9px] text-white/40">{s}</div>
// //       ))}
// //     </div>
// //     <div className="mt-3 rounded border border-red-500/25 bg-red-500/5 px-2 py-2 text-[8px] text-red-400/65">✗ No menus · No occupancy · No dietary info</div>
// //   </div></Shell>;
// // }

// // function OldShuttle() {
// //   return <Shell dark><div className="px-3 pt-1 text-white">
// //     <div className="text-[9px] font-bold uppercase tracking-widest text-white/40">UHGo · Transit</div>
// //     <div className="mt-2 space-y-1.5">
// //       {["Cougar Line","Cougar Ride","Sugar Land Shuttle","Ride & Dine"].map(s => (
// //         <div key={s} className="rounded border border-white/8 bg-white/[0.03] px-2 py-2.5 text-[9px] text-white/35">{s}</div>
// //       ))}
// //     </div>
// //     <div className="mt-2 rounded border border-red-500/25 bg-red-500/5 px-2 py-2 text-[8px] text-red-400/65">✗ No arrival times · No context</div>
// //   </div></Shell>;
// // }

// // function OldSchedule() {
// //   return <Shell dark><div className="px-3 pt-1 text-white">
// //     <div className="text-[9px] font-bold uppercase tracking-widest text-white/40">UHGo · Grades</div>
// //     <div className="mt-2 rounded-xl border border-white/10 bg-white/[0.04] p-3">
// //       <div className="text-[9px] text-white/50">Access grades via myUH portal</div>
// //       <div className="mt-2 rounded bg-white/10 py-2 text-center text-[8px] text-white/30">Sign in again →</div>
// //     </div>
// //     <div className="mt-2 rounded border border-red-500/25 bg-red-500/5 px-2 py-2 text-[8px] text-red-400/65">✗ Schedule buried · External login</div>
// //   </div></Shell>;
// // }

// // function OldEmergency() {
// //   return <Shell dark><div className="px-3 pt-1 text-white">
// //     <div className="text-[9px] font-bold uppercase tracking-widest text-white/40">UHGo · Menu</div>
// //     <div className="mt-2 space-y-1">
// //       {["Academics","Campus Life","Student Services","Health & Safety","Resources","Settings"].map(s => (
// //         <div key={s} className="flex justify-between rounded border border-white/8 bg-white/[0.03] px-2 py-2 text-[9px] text-white/35"><span>{s}</span><span>›</span></div>
// //       ))}
// //     </div>
// //     <div className="mt-2 rounded border border-red-500/25 bg-red-500/5 px-2 py-1.5 text-[8px] text-red-400/65">✗ Emergency contacts 3+ taps away</div>
// //   </div></Shell>;
// // }

// // function OldOrgs() {
// //   return <Shell dark><div className="px-3 pt-1 text-white">
// //     <div className="text-[9px] font-bold uppercase tracking-widest text-white/40">Organizations</div>
// //     <div className="mt-2 space-y-1">
// //       {["Accounting Club","AIA Society","Alpha Beta Gamma","Alpha Chi Omega","Alpha Phi Alpha"].map(s => (
// //         <div key={s} className="rounded border border-white/8 bg-white/[0.03] px-2 py-2 text-[9px] text-white/35">{s}</div>
// //       ))}
// //     </div>
// //     <div className="mt-2 rounded border border-red-500/25 bg-red-500/5 px-2 py-1.5 text-[8px] text-red-400/65">✗ Alphabetical · No relevance · Decision overload</div>
// //   </div></Shell>;
// // }

// // function OldProfile() {
// //   return <Shell dark><div className="px-3 pt-1 text-white">
// //     <div className="text-[9px] font-bold uppercase tracking-widest text-white/40">UHGo · Profile</div>
// //     <div className="mt-2 space-y-1.5">
// //       {["Name","Email","Student ID","Settings","Logout"].map(s => (
// //         <div key={s} className="flex justify-between rounded border border-white/8 bg-white/[0.03] px-2 py-2 text-[9px] text-white/30"><span>{s}</span><span className="text-white/15">›</span></div>
// //       ))}
// //     </div>
// //     <div className="mt-2 rounded border border-red-500/25 bg-red-500/5 px-2 py-1.5 text-[8px] text-red-400/65">✗ Settings page only · No balances · No advisor</div>
// //   </div></Shell>;
// // }

// // function OldStudyGroups() {
// //   return <Shell dark><div className="px-3 pt-3 text-white">
// //     <div className="text-[9px] font-bold uppercase tracking-widest text-white/40">UHGo · Social</div>
// //     <div className="mt-8 rounded border border-red-500/25 bg-red-500/5 p-4 text-[8px] text-red-400/65 leading-relaxed">
// //       ✗ Feature doesn't exist.<br /><br />Students use GroupMe and Discord outside the app.
// //     </div>
// //   </div></Shell>;
// // }

// // /* ─── NEW SCREENS ─── */
// // function NewHome() {
// //   return <Shell><div className="px-3 pt-1 text-white">
// //     <div className="text-[9px] text-white/35">Good morning, Khushbu</div>
// //     <div className="mt-2 rounded-xl border border-[#C8A96A]/25 bg-[#C8A96A]/[0.07] p-2.5">
// //       <div className="font-mono text-[8px] uppercase tracking-wider text-[#C8A96A]/60 mb-1.5">Today's Focus</div>
// //       <div className="space-y-1 text-[9px] text-white/65">
// //         <div>→ CHEM 1331 · SEC 100 at 11:00 <span className="text-white/30">(leave 10:48)</span></div>
// //         <div>→ Project 2 due tomorrow</div>
// //         <div>→ Dining Dollars low — $23.40</div>
// //       </div>
// //     </div>
// //     <div className="mt-2 grid grid-cols-4 gap-1.5">
// //       {[["🪪","ID"],["🍽","Dining"],["🚌","Shuttle"],["🤖","AI"]].map(([e,l]) => (
// //         <div key={l} className="flex flex-col items-center gap-1 rounded-xl border border-white/8 bg-white/[0.03] py-2">
// //           <span className="text-sm">{e}</span><div className="text-[6px] text-white/25">{l}</div>
// //         </div>
// //       ))}
// //     </div>
// //     <div className="mt-2 flex items-start gap-2 rounded-xl border border-white/8 bg-white/[0.02] p-2">
// //       <div className="h-6 w-6 flex-shrink-0 rounded-full bg-[#C8A96A]/20 flex items-center justify-center text-[10px]">🤖</div>
// //       <div className="text-[8px] text-white/50 leading-snug">The Den is quiet. Fresh Food has a 12-min wait. Eat now to make your 11AM.</div>
// //     </div>
// //     <div className="mt-2 rounded-xl border border-white/5 bg-white/[0.02] px-2 py-1.5 text-[8px] text-white/25">📢 Spring registration opens Monday · Career Fair — Fri</div>
// //   </div></Shell>;
// // }

// // function NewMap() {
// //   return <Shell><div className="px-3 pt-1 text-white">
// //     <div className="text-[9px] text-white/35">Campus Map</div>
// //     <div className="mt-2 flex items-center gap-1.5 rounded-xl border border-[#C8A96A]/35 bg-[#C8A96A]/10 px-2 py-1.5 text-[9px] text-[#C8A96A]">🔍 PGH — Philip G. Hoffman Hall</div>
// //     <div className="mt-1.5 rounded-xl bg-[#C8A96A]/[0.08] border border-[#C8A96A]/20 px-2 py-1.5">
// //       <div className="text-[9px] font-medium text-[#C8A96A]">Philip G. Hoffman Hall</div>
// //       <div className="text-[8px] text-white/40">PGH · 240m · ~4 min walk</div>
// //     </div>
// //     <div className="relative mt-2 h-24 overflow-hidden rounded-xl border border-white/8 bg-gradient-to-br from-[#1a1f2e] to-[#0d0f18]">
// //       <svg viewBox="0 0 140 90" className="absolute inset-0 h-full w-full">
// //         <path d="M10 80 C 50 30 90 60 130 20" fill="none" stroke="#C8A96A" strokeWidth="2" strokeDasharray="4 3" />
// //         <circle cx="10" cy="80" r="4" fill="#EDEAE3" />
// //         <circle cx="130" cy="20" r="5" fill="#C8A96A" />
// //         <text x="118" y="14" fontSize="6" fill="#C8A96A">PGH</text>
// //       </svg>
// //     </div>
// //     <div className="mt-2 flex gap-2">
// //       <div className="flex-1 rounded-xl bg-[#C8A96A] py-1.5 text-center text-[8px] font-medium text-black">Open in Maps →</div>
// //       <div className="rounded-xl border border-white/10 px-3 py-1.5 text-[8px] text-white/35">Save</div>
// //     </div>
// //     <div className="mt-2 flex gap-1">
// //       {["PGH","SEC","CBB","SR2"].map(a => (
// //         <div key={a} className="flex-1 rounded-lg bg-white/[0.04] py-1 text-center font-mono text-[7px] text-white/30">{a}</div>
// //       ))}
// //     </div>
// //   </div></Shell>;
// // }

// // function NewDining() {
// //   return <Shell><div className="px-3 pt-1 text-white">
// //     <div className="text-[9px] text-white/35">Dining · Near you</div>
// //     <div className="mt-1 text-[11px] font-medium text-white">On campus now</div>
// //     {[["Fresh Food Co.","70%","12 min",70],["The Den","20%","2 min",20],["Cougar Grounds","45%","6 min",45]].map(([n,s,t,p]) => (
// //       <div key={n} className="mt-1.5 rounded-xl border border-white/8 bg-white/[0.03] p-2">
// //         <div className="flex items-center justify-between text-[9px]">
// //           <span className="font-medium text-white/80">{n}</span>
// //           <span className="text-[#C8A96A]">{t}</span>
// //         </div>
// //         <div className="mt-1 h-1 overflow-hidden rounded-full bg-white/10">
// //           <div className="h-full rounded-full bg-[#C8A96A]" style={{ width: `${p}%` }} />
// //         </div>
// //         <div className="mt-1 flex gap-1">
// //           {["🥗 Veg","🍗 Halal","🌾 GF"].map(f => (
// //             <span key={f} className="rounded-full bg-white/[0.06] px-1.5 py-0.5 text-[6px] text-white/40">{f}</span>
// //           ))}
// //         </div>
// //       </div>
// //     ))}
// //     <div className="mt-2 rounded-xl border border-[#C8A96A]/20 bg-[#C8A96A]/5 px-2 py-1.5 text-[8px] text-[#C8A96A]/80">⚡ Dining Dollars: $23.40 — running low</div>
// //   </div></Shell>;
// // }

// // function NewShuttle() {
// //   return <Shell><div className="px-3 pt-1 text-white">
// //     <div className="text-[9px] text-white/35">Transportation</div>
// //     <div className="mt-1 text-[8px] text-[#C8A96A]">Next class: SEC 100 at 11:00</div>
// //     <div className="mt-2 rounded-xl border border-[#C8A96A]/30 bg-[#C8A96A]/10 p-2">
// //       <div className="text-[7px] uppercase tracking-wider text-[#C8A96A]/60">Recommended</div>
// //       <div className="text-[10px] font-medium text-white mt-0.5">Cougar Line → Tech Bridge</div>
// //       <div className="text-[8px] text-white/40">Arrives 3 min · SEC in 8 min</div>
// //     </div>
// //     <div className="relative mt-2 h-14 overflow-hidden rounded-xl border border-white/8">
// //       <svg viewBox="0 0 140 52" className="absolute inset-0 h-full w-full">
// //         <path d="M10 42 C 40 10 80 42 130 12" fill="none" stroke="#C8A96A" strokeWidth="1.5" strokeDasharray="3 2" />
// //         {[10,45,90,130].map((x,i) => <circle key={i} cx={x} cy={i%2===0?42:12} r="3.5" fill="#0a0a0b" stroke="#C8A96A" strokeWidth="1" />)}
// //         <circle cx="10" cy="42" r="4" fill="#EDEAE3" />
// //       </svg>
// //     </div>
// //     <div className="mt-2 space-y-1">
// //       {[["Cougar Line","3 min"],["Cougar Ride","On demand"],["Sugar Land","Hourly"],["Ride & Dine","5 min"]].map(([n,t]) => (
// //         <div key={n} className="flex justify-between rounded-lg bg-white/[0.03] px-2 py-1 text-[8px]">
// //           <span className="text-white/55">{n}</span><span className="text-[#C8A96A]">{t}</span>
// //         </div>
// //       ))}
// //     </div>
// //   </div></Shell>;
// // }

// // function NewSchedule() {
// //   return <Shell><div className="px-3 pt-1 text-white">
// //     <div className="text-[9px] text-white/35">Today</div>
// //     <div className="mt-1.5 space-y-1.5">
// //       {[{t:"9:00",n:"COSC 3360",r:"PGH 232",done:true},{t:"11:00",n:"CHEM 1331",r:"SEC 100",active:true},{t:"14:30",n:"MATH 2415",r:"CBB 120"}].map(c => (
// //         <div key={c.n} className={`flex items-center gap-2 rounded-xl border px-2 py-2 ${c.active?"border-[#C8A96A]/30 bg-[#C8A96A]/[0.07]":c.done?"border-white/5 opacity-35":"border-white/8 bg-white/[0.02]"}`}>
// //           <div className="w-8 font-mono text-[8px] text-white/40">{c.t}</div>
// //           <div className="flex-1">
// //             <div className={`text-[10px] font-medium ${c.active?"text-[#C8A96A]":"text-white/70"}`}>{c.n}</div>
// //             <div className="text-[7px] text-white/30">{c.r}</div>
// //           </div>
// //           {c.active && <div className="rounded-full bg-[#C8A96A]/20 px-2 py-0.5 text-[7px] text-[#C8A96A]">Now</div>}
// //         </div>
// //       ))}
// //     </div>
// //     <div className="mt-2 rounded-xl border border-white/8 bg-white/[0.02] p-2">
// //       <div className="font-mono text-[7px] uppercase tracking-wider text-white/25 mb-1.5">Deadlines</div>
// //       {[["COSC 3360 · Project 2","Tomorrow","red"],["CHEM 1331 · Lab","Friday",""],["MATH · HW 7","Sunday",""]].map(([a,b,c]) => (
// //         <div key={a} className="flex justify-between py-1 text-[8px] border-b border-white/5 last:border-0">
// //           <span className="text-white/45">{a}</span>
// //           <span className={c==="red"?"text-red-400/80":"text-white/25"}>{b}</span>
// //         </div>
// //       ))}
// //     </div>
// //   </div></Shell>;
// // }

// // function NewEmergency() {
// //   return <Shell><div className="px-3 pt-1 text-white">
// //     <div className="text-[9px] text-white/35">Emergency Assistance</div>
// //     <div className="mt-2 space-y-1.5">
// //       {[["🚔","University Police","Emergency & safety"],["💬","CAPS Counseling","Mental health"],["🏥","Student Health","Medical support"],["🏢","Facilities","Building emergencies"],["✈️","Intl. Students","Visa & travel"]].map(([ic,n,r]) => (
// //         <div key={n} className="flex items-center gap-2 rounded-xl border border-white/8 bg-white/[0.02] px-2 py-2">
// //           <div className="h-7 w-7 flex-shrink-0 rounded-full bg-white/5 flex items-center justify-center text-[10px]">{ic}</div>
// //           <div className="flex-1">
// //             <div className="text-[9px] font-medium text-white/80">{n}</div>
// //             <div className="text-[7px] text-white/30">{r}</div>
// //           </div>
// //           <div className="rounded-full border border-[#C8A96A]/25 bg-[#C8A96A]/10 px-2 py-0.5 text-[7px] text-[#C8A96A]">Call →</div>
// //         </div>
// //       ))}
// //     </div>
// //     <div className="mt-2 rounded-xl border border-[#C8A96A]/15 bg-[#C8A96A]/[0.04] px-2 py-1.5 text-[8px] text-[#C8A96A]/55">0 navigation steps from home screen</div>
// //   </div></Shell>;
// // }

// // function NewOrgs() {
// //   return <Shell><div className="px-3 pt-1 text-white">
// //     <div className="text-[9px] text-white/35">Clubs · Computer Science</div>
// //     <div className="mt-1.5 space-y-1.5">
// //       {[["C","CodeCoogs","CS Club","High match"],["X","CougarCS","Competitive Prog.","High match"],["H","UH Hackathon","Hackathon","Trending"],["A","AI & ML Society","Research","Recommended"]].map(([l,n,t,m]) => (
// //         <div key={n} className="flex items-center gap-2 rounded-xl border border-white/8 bg-white/[0.02] px-2 py-2">
// //           <div className="h-8 w-8 flex-shrink-0 rounded-xl bg-[#C8A96A]/15 flex items-center justify-center text-[#C8A96A] text-[11px] font-display">{l}</div>
// //           <div className="flex-1">
// //             <div className="text-[9px] font-medium text-white/80">{n}</div>
// //             <div className="text-[7px] text-white/30">{t}</div>
// //           </div>
// //           <span className="rounded-full border border-[#C8A96A]/20 bg-[#C8A96A]/5 px-2 py-0.5 text-[7px] text-[#C8A96A]/60">{m}</span>
// //         </div>
// //       ))}
// //     </div>
// //     <div className="mt-2 flex gap-1 flex-wrap">
// //       {["Hackathons","Cybersecurity","AI/ML"].map(t => (
// //         <span key={t} className="rounded-full border border-white/8 px-2 py-0.5 text-[7px] text-white/25">{t}</span>
// //       ))}
// //     </div>
// //   </div></Shell>;
// // }

// // function NewStudyGroups() {
// //   return <Shell><div className="px-3 pt-1 text-white">
// //     <div className="text-[9px] text-white/35">Study Groups · Your Courses</div>
// //     <div className="mt-1.5 space-y-1.5">
// //       {[["🧪","CHEM 1331","4 members · Today 6PM · Library 2F"],["💻","COSC 3360","3 members · Tomorrow 4PM · PGH"],["📐","MATH 2415","6 members · Friday 5PM · Cougar Village"]].map(([ic,n,d]) => (
// //         <div key={n} className="flex gap-2 rounded-xl border border-white/8 bg-white/[0.02] p-2">
// //           <div className="h-8 w-8 flex-shrink-0 rounded-xl bg-white/5 flex items-center justify-center text-sm">{ic}</div>
// //           <div><div className="text-[9px] font-medium text-white/80">{n}</div><div className="text-[7px] text-white/30">{d}</div></div>
// //         </div>
// //       ))}
// //     </div>
// //     <div className="mt-2 rounded-xl border border-dashed border-white/10 p-2 text-center text-[8px] text-white/20">+ Find classmates in CHEM 1331</div>
// //     <div className="mt-2 grid grid-cols-2 gap-1.5 text-[7px] text-white/30">
// //       <div className="rounded-lg bg-white/[0.03] border border-white/5 p-1.5">📎 Shared notes</div>
// //       <div className="rounded-lg bg-white/[0.03] border border-white/5 p-1.5">📅 Study sessions</div>
// //     </div>
// //   </div></Shell>;
// // }

// // function NewProfile() {
// //   return <Shell><div className="px-3 pt-1 text-white">
// //     <div className="text-[9px] text-white/35">Profile</div>
// //     <div className="mt-2 rounded-xl border border-[#C8A96A]/20 bg-gradient-to-br from-[#C8A96A]/10 to-transparent p-3">
// //       <div className="font-mono text-[7px] text-[#C8A96A]/50 mb-0.5">Digital Student ID</div>
// //       <div className="font-display text-[11px] text-white">Khushbu Patel</div>
// //       <div className="text-[8px] text-white/35">UH ID: 1234567 · CS + Pop. Health</div>
// //       <div className="mt-2 h-8 w-24 rounded-md bg-white/5 flex items-center justify-center font-mono text-[6px] text-white/15">▓▓▓ barcode ▓▓▓</div>
// //     </div>
// //     <div className="mt-2 grid grid-cols-2 gap-1.5">
// //       {[["Dining Dollars","$23.40","red",15],["ShastaBUCKS","$48.20","gold",45]].map(([l,v,c,p]) => (
// //         <div key={l} className="rounded-xl border border-white/8 bg-white/[0.02] p-2">
// //           <div className="text-[7px] text-white/25">{l}</div>
// //           <div className="font-display text-[14px] text-white mt-0.5">{v}</div>
// //           <div className="mt-1.5 h-1 overflow-hidden rounded-full bg-white/10">
// //             <div className={`h-full rounded-full ${c==="red"?"bg-red-400/60":"bg-[#C8A96A]/60"}`} style={{width:`${p}%`}} />
// //           </div>
// //         </div>
// //       ))}
// //     </div>
// //     <div className="mt-2 flex items-center gap-2 rounded-xl border border-white/8 bg-white/[0.02] p-2">
// //       <div className="h-7 w-7 rounded-full bg-[#C8A96A]/20 flex items-center justify-center text-[#C8A96A] text-[10px]">A</div>
// //       <div>
// //         <div className="text-[9px] text-white/70">Academic Advisor</div>
// //         <div className="text-[7px] text-white/30">advisor@uh.edu</div>
// //       </div>
// //       <div className="ml-auto text-[7px] text-[#C8A96A]/60">Email →</div>
// //     </div>
// //   </div></Shell>;
// // }

// // /* ══════════════════════════════════════════════
// //    DRAG COMPARE SLIDER
// // ══════════════════════════════════════════════ */
// // function CompareSlider({ Before, After }) {
// //   const [pct, setPct] = useState(50);
// //   const ref = useRef(null);
// //   const dragging = useRef(false);
// //   const move = useCallback((clientX) => {
// //     if (!ref.current) return;
// //     const { left, width } = ref.current.getBoundingClientRect();
// //     setPct(Math.max(4, Math.min(96, ((clientX - left) / width) * 100)));
// //   }, []);
// //   return (
// //     <div ref={ref}
// //       className="relative select-none overflow-hidden rounded-[2rem] border border-white/10 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.9)]"
// //       style={{ aspectRatio: "9/19", cursor: "col-resize", touchAction: "none" }}
// //       onMouseDown={() => { dragging.current = true; }}
// //       onMouseMove={e => { if (dragging.current) move(e.clientX); }}
// //       onMouseUp={() => { dragging.current = false; }}
// //       onMouseLeave={() => { dragging.current = false; }}
// //       onTouchMove={e => move(e.touches[0].clientX)}
// //     >
// //       <div className="absolute left-1/2 top-2.5 z-40 h-[14px] w-[80px] -translate-x-1/2 rounded-full bg-black" />
// //       <div className="absolute inset-0"><After /></div>
// //       <div className="absolute inset-0 overflow-hidden" style={{ clipPath: `inset(0 ${100-pct}% 0 0)` }}><Before /></div>
// //       <div className="pointer-events-none absolute inset-y-0 z-30 flex items-center justify-center" style={{ left: `${pct}%`, transform: "translateX(-50%)" }}>
// //         <div className="h-full w-[1.5px] bg-white/30" />
// //         <div className="absolute flex h-8 w-8 items-center justify-center rounded-full border border-white/20 bg-white/10 text-[11px] backdrop-blur-md text-white">⇔</div>
// //       </div>
// //     </div>
// //   );
// // }

// // /* ══════════════════════════════════════════════
// //    FEATURE PAIRS
// // ══════════════════════════════════════════════ */
// // const PAIRS = [
// //   { key:"home",        label:"Home",           captions:["Daily Focus + AI","Smart quick access","Proactive reminders"],        Before:OldHome,        After:NewHome },
// //   { key:"map",         label:"Campus Map",     captions:["Abbreviation search","Walking time estimate","Google Maps handoff"],   Before:OldMap,         After:NewMap },
// //   { key:"dining",      label:"Dining",         captions:["Smart recommendations","Menus + dietary filters","Occupancy alerts"],   Before:OldDining,      After:NewDining },
// //   { key:"shuttle",     label:"Transportation", captions:["Context-aware guidance","Live arrival times","Route recommendations"],  Before:OldShuttle,     After:NewShuttle },
// //   { key:"schedule",    label:"Schedule",       captions:["Today's classes surfaced","Assignment deadlines","No external logins"], Before:OldSchedule,    After:NewSchedule },
// //   { key:"emergency",   label:"Emergency",      captions:["One-tap calling","0 navigation steps","All contacts unified"],         Before:OldEmergency,   After:NewEmergency },
// //   { key:"orgs",        label:"Organizations",  captions:["Major-matched clubs","Trending skills","Personalized ranking"],         Before:OldOrgs,        After:NewOrgs },
// //   { key:"studygroups", label:"Study Groups",   captions:["Course-based discovery","Shared resources","Exam coordination"],       Before:OldStudyGroups, After:NewStudyGroups },
// //   { key:"profile",     label:"Profile",        captions:["Digital ID","Dining balances + insights","Advisor + personalization"], Before:OldProfile,     After:NewProfile },
// // ];

// // /* ══════════════════════════════════════════════
// //    PINNED SOLUTION SHOWCASE
// // ══════════════════════════════════════════════ */
// // function SolutionShowcase() {
// //   const stage = useRef(null);
// //   const { scrollYProgress } = useScroll({ target: stage, offset: ["start start", "end end"] });
// //   const [active, setActive] = useState(0);
// //   useMotionValueEvent(scrollYProgress, "change", v => {
// //     setActive(Math.min(PAIRS.length - 1, Math.floor(v * PAIRS.length)));
// //   });
// //   const feature = PAIRS[active];
// //   return (
// //     <div ref={stage} style={{ height: `${PAIRS.length * 100}vh` }} className="relative">
// //       <div className="sticky top-0 flex h-screen items-center overflow-hidden">
// //         <div className="pointer-events-none absolute left-1/2 top-1/2 h-[480px] w-[480px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/5 blur-[150px]" />
// //         <div className="mx-auto w-full max-w-7xl px-6 md:px-10">
// //           <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-12">
// //             {/* step list */}
// //             <div className="md:col-span-3">
// //               <div className="font-mono text-[10px] uppercase tracking-eyebrow text-muted mb-4">
// //                 {String(active+1).padStart(2,"0")} / {String(PAIRS.length).padStart(2,"0")}
// //               </div>
// //               <ul className="space-y-1.5">
// //                 {PAIRS.map((f,i) => (
// //                   <motion.li key={f.key}
// //                     animate={{ opacity: i===active?1:0.14, x: i===active?4:0 }}
// //                     transition={{ duration: 0.35, ease: EL }}
// //                     className="flex items-center gap-2 font-display text-xl text-bone md:text-2xl"
// //                   >
// //                     {i===active && <motion.span layoutId="nav-dot" className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gold" />}
// //                     {f.label}
// //                   </motion.li>
// //                 ))}
// //               </ul>
// //             </div>
// //             {/* phone */}
// //             <div className="flex justify-center md:col-span-5">
// //               <div className="w-[215px] md:w-[248px]">
// //                 <AnimatePresence mode="wait">
// //                   <motion.div key={feature.key}
// //                     initial={{ opacity:0, y:18, scale:0.96 }}
// //                     animate={{ opacity:1, y:0, scale:1 }}
// //                     exit={{ opacity:0, y:-10, scale:0.97 }}
// //                     transition={{ duration: 0.42, ease: EL }}
// //                   >
// //                     <CompareSlider Before={feature.Before} After={feature.After} />
// //                   </motion.div>
// //                 </AnimatePresence>
// //                 <p className="mt-3 text-center font-mono text-[9px] text-white/18">drag to compare</p>
// //               </div>
// //             </div>
// //             {/* captions */}
// //             <div className="md:col-span-4">
// //               <AnimatePresence mode="wait">
// //                 <motion.div key={feature.key+"_c"}
// //                   initial={{ opacity:0, x:14 }}
// //                   animate={{ opacity:1, x:0 }}
// //                   exit={{ opacity:0, x:-8 }}
// //                   transition={{ duration: 0.38, ease: EL }}
// //                 >
// //                   <div className="font-mono text-[10px] uppercase tracking-eyebrow text-gold/55 mb-4">{feature.label} · Redesigned</div>
// //                   <ul className="space-y-3">
// //                     {feature.captions.map((c,i) => (
// //                       <motion.li key={c}
// //                         initial={{ opacity:0, x:10 }}
// //                         animate={{ opacity:1, x:0 }}
// //                         transition={{ duration:0.32, delay:i*0.07, ease:EL }}
// //                         className="flex items-center gap-3 text-bone/65 text-base"
// //                       >
// //                         <div className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gold/55" />{c}
// //                       </motion.li>
// //                     ))}
// //                   </ul>
// //                 </motion.div>
// //               </AnimatePresence>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // /* ══════════════════════════════════════════════
// //    ARCH DIAGRAM
// // ══════════════════════════════════════════════ */
// // function ArchDiagram() {
// //   const ref = useRef(null);
// //   const inView = useInView(ref, { once:true, margin:"-15%" });
// //   const rows = [
// //     { label:"Student",   nodes:["Schedule","Location","Enrollment","Preferences"], accent:false },
// //     { label:"DigitalUH", nodes:["AI Assistant","Intent Classifier","Recommendation Engine","Campus Router"], accent:true },
// //     { label:"Services",  nodes:["Supabase (18 tables)","Google Maps API","Microsoft OAuth","Supabase Edge"], accent:false },
// //   ];
// //   return (
// //     <div ref={ref} className="overflow-hidden rounded-3xl border border-white/8 bg-white/[0.02] p-8">
// //       <div className="font-mono text-[10px] uppercase tracking-eyebrow text-gold/60 mb-8">System Architecture</div>
// //       <div className="space-y-8">
// //         {rows.map((row,ri) => (
// //           <div key={row.label} className="flex items-center gap-6">
// //             <div className="w-24 flex-shrink-0 font-mono text-[10px] text-bone/20">{row.label}</div>
// //             <div className="flex flex-wrap gap-2">
// //               {row.nodes.map((node,ni) => (
// //                 <motion.div key={node}
// //                   initial={{ opacity:0, scale:0.85 }}
// //                   animate={inView?{opacity:1,scale:1}:{}}
// //                   transition={{ duration:0.4, delay:ri*0.18+ni*0.08, ease:EL }}
// //                   className={`rounded-xl border px-3 py-2 text-sm ${row.accent?"border-gold/30 bg-gold/10 text-gold":"border-white/8 bg-white/[0.03] text-bone/55"}`}
// //                 >{node}</motion.div>
// //               ))}
// //             </div>
// //           </div>
// //         ))}
// //         <motion.div initial={{opacity:0}} animate={inView?{opacity:1}:{}} transition={{duration:0.6,delay:0.8}}
// //           className="flex flex-wrap gap-2 pl-[7.5rem]">
// //           {["PKCE Auth flow","Server-side Maps proxy","Real-time subscriptions","0 external logins"].map(t => (
// //             <span key={t} className="rounded-full border border-white/8 px-3 py-1 font-mono text-[9px] text-bone/25">{t}</span>
// //           ))}
// //         </motion.div>
// //       </div>
// //     </div>
// //   );
// // }

// // /* ══════════════════════════════════════════════
// //    SCROLL PROGRESS BAR
// // ══════════════════════════════════════════════ */
// // function ProgressBar() {
// //   const { scrollYProgress } = useScroll();
// //   const scaleX = useTransform(scrollYProgress, [0,1], [0,1]);
// //   return <motion.div style={{ scaleX, transformOrigin:"left" }} className="fixed inset-x-0 top-0 z-50 h-[1.5px] bg-gold/70" />;
// // }

// // /* ══════════════════════════════════════════════
// //    SECTION DIVIDER
// // ══════════════════════════════════════════════ */
// // function Div({ n, label }) {
// //   return (
// //     <div className="flex items-center gap-4 mb-12">
// //       <span className="font-mono text-[10px] text-gold/45">{String(n).padStart(2,"0")}</span>
// //       <div className="h-px flex-1 bg-white/8" />
// //       <span className="font-mono text-[10px] uppercase tracking-eyebrow text-white/20">{label}</span>
// //     </div>
// //   );
// // }

// // /* ══════════════════════════════════════════════
// //    MAIN EXPORT
// // ══════════════════════════════════════════════ */
// // const META = [
// //   ["Role","Lead UX & Front-End"],
// //   ["Year","2025 — 2026"],
// //   ["Platform","iOS · Android · Web"],
// //   ["Type","Concept → Prototype"],
// // ];

// // const NEW_SCREENS = [
// //   { label:"Home",        C:NewHome },
// //   { label:"Campus Map",  C:NewMap },
// //   { label:"Dining",      C:NewDining },
// //   { label:"Shuttle",     C:NewShuttle },
// //   { label:"Schedule",    C:NewSchedule },
// //   { label:"Emergency",   C:NewEmergency },
// //   { label:"Orgs",        C:NewOrgs },
// //   { label:"Study Groups",C:NewStudyGroups },
// //   { label:"Profile",     C:NewProfile },
// // ];

// // export default function DigitalUH() {
// //   return (
// //     <section id="digitaluh" className="relative">
// //       <ProgressBar />

// //       {/* HERO */}
// //       <div className="mx-auto max-w-7xl px-6 pt-32 md:px-10 md:pt-48">
// //         <Eyebrow>03 — Featured Case Study</Eyebrow>
// //         <div className="mt-8 flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
// //           <motion.h2 initial={{ opacity:0, y:40 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:1, ease:EL }}
// //             className="font-display text-6xl leading-[0.9] tracking-tightest text-bone md:text-[8rem]">
// //             Digital<span className="italic text-gold">UH</span>
// //           </motion.h2>
// //           <motion.p initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:0.9, delay:0.15, ease:EL }}
// //             className="max-w-sm text-bone/50">
// //             UHGo exists. Students use it because they have to. DigitalUH is what it should be — a campus platform designed around how students actually live.
// //           </motion.p>
// //         </div>
// //         <div className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/5 md:grid-cols-4">
// //           {META.map(([k,v]) => (
// //             <div key={k} className="bg-ink-900 p-5">
// //               <div className="font-mono text-[10px] uppercase tracking-eyebrow text-muted">{k}</div>
// //               <div className="mt-2 text-bone">{v}</div>
// //             </div>
// //           ))}
// //         </div>
// //       </div>

// //       {/* §1 THE PROBLEM */}
// //       <div className="mx-auto max-w-7xl px-6 pt-28 md:px-10 md:pt-40">
// //         <Div n={1} label="The Problem" />
// //         <motion.h3 initial={{ opacity:0, y:24 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:0.8, ease:EL }}
// //           className="max-w-2xl font-display text-3xl leading-tight text-bone md:text-5xl mb-16">
// //           UHGo was built to check institutional boxes.{" "}
// //           <span className="text-bone/30">Not to help students navigate their day.</span>
// //         </motion.h3>

// //         <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
// //           {[
// //             { label:"Home",         note:"Cluttered tiles. Poor hierarchy.",                   C:OldHome },
// //             { label:"Campus Map",   note:"Building abbreviations aren't recognized.",           C:OldMap },
// //             { label:"Dining",       note:"Students can't view menus or compare options.",       C:OldDining },
// //             { label:"Shuttle",      note:"Flat list. No arrival times. No context.",            C:OldShuttle },
// //             { label:"Schedule",     note:"Daily schedules hidden behind external logins.",      C:OldSchedule },
// //             { label:"Emergency",    note:"Important contacts take too many steps to find.",     C:OldEmergency },
// //             { label:"Organizations",note:"Hundreds of clubs. Zero personalization.",            C:OldOrgs },
// //             { label:"Profile",      note:"Settings page only — not a student dashboard.",       C:OldProfile },
// //           ].map(({label,note,C},i) => (
// //             <motion.div key={label}
// //               initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true, margin:"-5%" }}
// //               transition={{ duration:0.5, delay:(i%4)*0.07, ease:EL }} className="group">
// //               <div className="relative overflow-hidden rounded-[1.5rem] border border-red-500/15 transition-all duration-400 group-hover:border-red-500/30"
// //                 style={{ aspectRatio:"9/19" }}>
// //                 <div className="absolute left-1/2 top-2 z-30 h-[10px] w-[60px] -translate-x-1/2 rounded-full bg-black" />
// //                 <C />
// //                 <div className="absolute bottom-3 left-2 right-2 z-20 rounded-xl border border-red-500/25 bg-red-950/80 px-2 py-1.5 backdrop-blur text-[7px] text-red-400/75 leading-snug">{note}</div>
// //               </div>
// //               <div className="mt-2 text-center font-mono text-[10px] text-bone/30">{label}</div>
// //             </motion.div>
// //           ))}
// //         </div>
// //       </div>

// //       {/* §2 RESEARCH */}
// //       <div className="mx-auto max-w-7xl px-6 pt-28 md:px-10 md:pt-40">
// //         <Div n={2} label="Research" />
// //         <motion.h3 initial={{ opacity:0, y:24 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:0.8, ease:EL }}
// //           className="max-w-2xl font-display text-3xl leading-tight text-bone md:text-4xl mb-14">
// //           Every decision traces back to observed friction —{" "}
// //           <span className="text-bone/30">not assumptions.</span>
// //         </motion.h3>

// //         <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
// //           {[
// //             { e:"📋", stat:"1st day", label:"Search failure", note:"Abbreviation search fails exactly when freshmen need it most — first class, new building, time pressure." },
// //             { e:"🍽", stat:"", label:"Decision gap", note:"UHGo shows 'Open' or 'Closed'. Students need: how busy, what's on the menu, can I afford it, will I make it back?" },
// //             { e:"📅", stat:"10×", label:"Daily schedule checks", note:"Schedules checked every morning. Grades checked 6 times a semester. UHGo prioritizes grades." },
// //             { e:"🚌", stat:"", label:"Name blindness", note:"Cougar Ride, Ride & Dine, Sugar Land Shuttle — names that tell students nothing without reading docs they've never seen." },
// //             { e:"🆘", stat:"3+", label:"Taps to emergency", note:"Campus safety resources buried in menus designed for browsing — not for moments that don't allow for searching." },
// //             { e:"👥", stat:"0", label:"Study group tools", note:"Students form groups via GroupMe because UHGo offers nothing. The enrollment data to fix this already exists in the app." },
// //             { e:"🔄", stat:"", label:"External redirect loop", note:"Grades, schedules, and advisor info bounce students to external SSO portals. Each redirect is a moment of abandonment." },
// //             { e:"🎓", stat:"500+", label:"Organizations listed", note:"Alphabetical and unfiltered. Students scroll for 30 seconds and close the page. Relevance beats volume." },
// //             { e:"💳", stat:"", label:"Surprise at the register", note:"Dining Dollars run out silently. Students discover the problem at the cashier — avoidable with one proactive notification." },
// //           ].map(({e,stat,label,note},i) => (
// //             <motion.div key={label}
// //               initial={{ opacity:0, y:24 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true, margin:"-8%" }}
// //               transition={{ duration:0.55, delay:(i%3)*0.07, ease:EL }}
// //               className="rounded-2xl border border-white/8 bg-white/[0.02] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-gold/25"
// //             >
// //               <div className="flex items-start justify-between mb-2">
// //                 <span className="text-xl">{e}</span>
// //                 {stat && <span className="font-display text-2xl text-gold">{stat}</span>}
// //               </div>
// //               <div className="font-mono text-[10px] uppercase tracking-eyebrow text-gold/55 mb-1.5">{label}</div>
// //               <p className="text-[12px] leading-snug text-bone/45">{note}</p>
// //             </motion.div>
// //           ))}
// //         </div>
// //       </div>

// //       {/* §3 DESIGN STRATEGY */}
// //       <div className="mx-auto max-w-7xl px-6 pt-28 md:px-10 md:pt-40">
// //         <Div n={3} label="Design Strategy" />
// //         <motion.h3 initial={{ opacity:0, y:24 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:0.8, ease:EL }}
// //           className="max-w-xl font-display text-3xl leading-tight text-bone md:text-4xl mb-14">
// //           One philosophy behind every screen.
// //         </motion.h3>

// //         <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
// //           {[
// //             ["P1","Replace searching with guidance","If the app knows your next class, your location, and the time — it should tell you what to do next. Not wait to be asked."],
// //             ["P2","Design for the first two weeks","The highest-stress moments are the first days of each semester. That's when navigation fails, menus confuse, and apps get uninstalled."],
// //             ["P3","Surface the 3 things students actually use","Schedule, dining, and navigation account for 80% of daily use. Everything else goes one tap further — not equal to everything else."],
// //             ["P4","Make emergencies frictionless","Any experience that might be needed under stress must be reachable in zero navigation steps from the home screen."],
// //             ["P5","Relevance over volume","5 clubs matched to your major with upcoming events is more useful than 500 clubs listed alphabetically. Same data, different intent."],
// //             ["P6","Proactive over reactive","Alert the student before the balance is empty. Before the class starts. Before the deadline arrives. The app already has all the data."],
// //           ].map(([n,title,desc],i) => (
// //             <motion.div key={n}
// //               initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true, margin:"-8%" }}
// //               transition={{ duration:0.55, delay:(i%3)*0.07, ease:EL }}
// //               className="group rounded-2xl border border-white/8 bg-white/[0.02] p-6 transition-all duration-400 hover:-translate-y-1 hover:border-gold/25 hover:bg-white/[0.04]"
// //             >
// //               <div className="font-mono text-[10px] text-gold/50 mb-3">{n}</div>
// //               <div className="font-display text-xl text-bone mb-2">{title}</div>
// //               <p className="text-sm text-bone/40 leading-relaxed">{desc}</p>
// //             </motion.div>
// //           ))}
// //         </div>
// //       </div>

// //       {/* §4 THE SOLUTION */}
// //       <div className="pt-28 md:pt-40">
// //         <div className="mx-auto max-w-7xl px-6 md:px-10">
// //           <Div n={4} label="The Solution" />
// //           <motion.h3 initial={{ opacity:0, y:24 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:0.8, ease:EL }}
// //             className="max-w-2xl font-display text-3xl leading-tight text-bone md:text-5xl mb-4">
// //             Every screen, redesigned.{" "}
// //             <span className="text-bone/30">Drag to compare.</span>
// //           </motion.h3>
// //           <p className="text-bone/35 max-w-md mb-16 text-sm">Scroll through all nine features. Each comparison is interactive — drag the divider to see before and after.</p>
// //         </div>
// //         <SolutionShowcase />
// //       </div>

// //       {/* §5 ARCHITECTURE */}
// //       <div className="mx-auto max-w-7xl px-6 pt-28 md:px-10 md:pt-40">
// //         <Div n={5} label="Architecture" />
// //         <motion.h3 initial={{ opacity:0, y:24 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:0.8, ease:EL }}
// //           className="max-w-2xl font-display text-3xl leading-tight text-bone md:text-5xl mb-14">
// //           Built to feel like a product,{" "}
// //           <span className="text-bone/30">not a prototype.</span>
// //         </motion.h3>
// //         <ArchDiagram />
// //         <div className="mt-6 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/5 md:grid-cols-4">
// //           {[
// //             ["Frontend","React Native · TypeScript","Typed component architecture, strict prop interfaces shared across iOS, Android, and web."],
// //             ["Auth & Data","Microsoft OAuth · Supabase","PKCE-based OAuth for UH credentials. 18 Supabase tables shared across all modules."],
// //             ["AI Layer","Intent Classifier · Edge Functions","Rules-based classifier routes campus queries. Falls through to LLM for open-ended questions."],
// //             ["Maps","Google Maps · Server Proxy","Server-side API key proxy handles walking estimates and deep-link handoffs securely."],
// //           ].map(([label,tech,desc],i) => (
// //             <motion.div key={label}
// //               initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true, margin:"-8%" }}
// //               transition={{ duration:0.6, delay:i*0.08, ease:EL }}
// //               className="bg-ink-900 p-6">
// //               <div className="font-mono text-[10px] uppercase tracking-eyebrow text-muted">{label}</div>
// //               <div className="mt-3 font-display text-lg text-gold">{tech}</div>
// //               <p className="mt-3 text-sm leading-relaxed text-bone/45">{desc}</p>
// //             </motion.div>
// //           ))}
// //         </div>
// //       </div>

// //       {/* §6 FINAL PRODUCT */}
// //       <div className="mx-auto max-w-7xl px-6 pt-28 pb-40 md:px-10 md:pt-40 md:pb-56">
// //         <Div n={6} label="Final Product" />
// //         <motion.h3 initial={{ opacity:0, y:24 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:0.8, ease:EL }}
// //           className="max-w-xl font-display text-3xl leading-tight text-bone md:text-5xl mb-16">
// //           One coherent experience.{" "}
// //           <span className="italic text-gold">Nine redesigned screens.</span>
// //         </motion.h3>

// //         <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
// //           {NEW_SCREENS.map(({label,C},i) => (
// //             <motion.div key={label}
// //               initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true, margin:"-5%" }}
// //               transition={{ duration:0.55, delay:(i%5)*0.07, ease:EL }} className="group">
// //               <div className="relative overflow-hidden rounded-[1.6rem] border border-white/8 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.7)] transition-all duration-500 group-hover:-translate-y-2 group-hover:border-gold/20 group-hover:shadow-[0_30px_80px_-15px_rgba(200,169,106,0.12)]"
// //                 style={{ aspectRatio:"9/19" }}>
// //                 <div className="absolute left-1/2 top-2 z-30 h-[10px] w-[60px] -translate-x-1/2 rounded-full bg-black" />
// //                 <C />
// //               </div>
// //               <div className="mt-2 text-center font-mono text-[10px] text-bone/30">{label}</div>
// //             </motion.div>
// //           ))}
// //         </div>

// //         {/* reflection */}
// //         <motion.blockquote
// //           initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true, margin:"-10%" }}
// //           transition={{ duration:1, ease:EL }}
// //           className="mt-32 max-w-4xl font-display text-3xl leading-snug tracking-tight text-bone md:text-5xl"
// //         >
// //           The most important design decision wasn't visual.{" "}
// //           <span className="text-bone/30">It was deciding which problems were actually worth solving.</span>
// //         </motion.blockquote>

// //         <div className="mt-16 h-px w-full bg-white/8" />
// //         <div className="mt-12 flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
// //           <div className="font-mono text-[11px] uppercase tracking-eyebrow text-muted">DigitalUH · 2025 — 2026</div>
// //           <div className="flex flex-wrap gap-3">
// //             {["React Native","TypeScript","Supabase","Google Maps API","Framer Motion"].map(t => (
// //               <span key={t} className="rounded-full border border-white/10 px-3 py-1 font-mono text-[10px] uppercase tracking-wide text-bone/40">{t}</span>
// //             ))}
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }
// /**
//  * DigitalUH.jsx — Cinematic case study, v3
//  * Drop-in replacement. Nothing else in the portfolio changes.
//  *
//  * 6 sections: Problem → Research → Strategy → Solution (pinned) → Architecture → Final Grid
//  * Deps: framer-motion (already in project). No new installs needed.
//  */

// import { useRef, useState, useCallback } from "react";
// import {
//   motion,
//   useScroll,
//   useTransform,
//   useMotionValueEvent,
//   useInView,
//   AnimatePresence,
// } from "framer-motion";
// import { Eyebrow, GlassCard } from "../Primitives";
// import { PhoneFrame, SCREENS } from "./DigitalUHScreens";

// const EL = [0.16, 1, 0.3, 1];

// /* ══════════════════════════════════════════════
//    PHONE SHELL — shared wrapper
// ══════════════════════════════════════════════ */
// function Shell({ dark = false, children }) {
//   return (
//     <div className={`relative h-full overflow-hidden ${dark ? "bg-[#111318]" : "bg-[#0a0a0b]"}`}>
//       <div className="absolute left-1/2 top-2.5 z-30 h-[13px] w-[76px] -translate-x-1/2 rounded-full bg-black" />
//       <div className="absolute inset-x-0 top-0 z-20 flex items-center justify-between px-5 pt-2 font-mono text-[8px] text-white/30">
//         <span>9:41</span><span>●●● WiFi 🔋</span>
//       </div>
//       <div className="absolute inset-0 pt-8">{children}</div>
//     </div>
//   );
// }

// /* ─── OLD SCREENS ─── */
// function OldHome() {
//   return <Shell dark><div className="px-3 pt-1 text-white">
//     <div className="text-[9px] font-bold uppercase tracking-widest text-white/40">UHGo</div>
//     <div className="mt-2 grid grid-cols-3 gap-1.5">
//       {["Grades","Schedule","Maps","Dining","Shuttle","Library","Directory","News","More"].map(t => (
//         <div key={t} className="flex flex-col items-center gap-1 rounded-xl border border-white/8 bg-white/[0.04] py-3">
//           <div className="h-5 w-5 rounded-lg bg-white/15" />
//           <div className="text-[7px] text-white/35">{t}</div>
//         </div>
//       ))}
//     </div>
//     <div className="mt-2 rounded-xl border border-white/8 bg-white/[0.03] p-2 text-[8px] text-white/20">University announcements feed…</div>
//     <div className="absolute right-2 top-10 rounded bg-red-500/75 px-1.5 py-0.5 text-[7px] text-white">Poor hierarchy</div>
//   </div></Shell>;
// }

// function OldMap() {
//   return <Shell dark><div className="px-3 pt-1 text-white">
//     <div className="text-[9px] font-bold uppercase tracking-widest text-white/40">UHGo · Maps</div>
//     <div className="mt-2 flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-2 py-1.5 text-[9px] text-white/30">🔍 Search buildings…</div>
//     <div className="mt-1.5 rounded-lg border border-red-500/30 bg-red-500/5 px-2 py-1.5 text-[8px] text-red-400/80">⚠ "PGH" — no results found</div>
//     <div className="mt-2 h-32 rounded-lg border border-white/5 bg-white/[0.02] flex items-center justify-center text-[8px] text-white/15">generic map view</div>
//     <div className="mt-2 rounded border border-red-500/20 bg-red-500/5 px-2 py-1.5 text-[8px] text-red-400/60">✗ Fails on abbreviations</div>
//   </div></Shell>;
// }

// function OldDining() {
//   return <Shell dark><div className="px-3 pt-1 text-white">
//     <div className="text-[9px] font-bold uppercase tracking-widest text-white/40">UHGo · Dining</div>
//     <div className="mt-2 space-y-1.5">
//       {["Fresh Food Co. — Open","The Den — Open","Cougar Grounds — Closed"].map(s => (
//         <div key={s} className="rounded border border-white/8 bg-white/[0.03] px-2 py-2 text-[9px] text-white/40">{s}</div>
//       ))}
//     </div>
//     <div className="mt-3 rounded border border-red-500/25 bg-red-500/5 px-2 py-2 text-[8px] text-red-400/65">✗ No menus · No occupancy · No dietary info</div>
//   </div></Shell>;
// }

// function OldShuttle() {
//   return <Shell dark><div className="px-3 pt-1 text-white">
//     <div className="text-[9px] font-bold uppercase tracking-widest text-white/40">UHGo · Transit</div>
//     <div className="mt-2 space-y-1.5">
//       {["Cougar Line","Cougar Ride","Sugar Land Shuttle","Ride & Dine"].map(s => (
//         <div key={s} className="rounded border border-white/8 bg-white/[0.03] px-2 py-2.5 text-[9px] text-white/35">{s}</div>
//       ))}
//     </div>
//     <div className="mt-2 rounded border border-red-500/25 bg-red-500/5 px-2 py-2 text-[8px] text-red-400/65">✗ No arrival times · No context</div>
//   </div></Shell>;
// }

// function OldSchedule() {
//   return <Shell dark><div className="px-3 pt-1 text-white">
//     <div className="text-[9px] font-bold uppercase tracking-widest text-white/40">UHGo · Academics</div>
//     {/* Grades tile is the hero CTA */}
//     <div className="mt-2 rounded-xl border border-white/10 bg-white/[0.04] p-3 text-center">
//       <div className="text-[16px] mb-1">🎓</div>
//       <div className="text-[9px] font-medium text-white/60">Grades</div>
//       <div className="mt-2 rounded-lg bg-white/8 py-2 text-[8px] text-white/35">Open AccessUH →</div>
//     </div>
//     {/* redirect notice */}
//     <div className="mt-2 rounded-lg border border-white/8 bg-white/[0.02] p-2 text-[8px] text-white/25 leading-snug">
//       You'll be redirected to AccessUH. Sign in with your Cougar ID and password to continue.
//     </div>
//     {/* schedule buried deep */}
//     <div className="mt-2 space-y-1">
//       {["My Courses →","Enrollment →","Degree Plan →"].map(s => (
//         <div key={s} className="flex justify-between rounded border border-white/5 bg-white/[0.02] px-2 py-1.5 text-[8px] text-white/25"><span>{s}</span><span>›</span></div>
//       ))}
//     </div>
//     <div className="mt-2 rounded border border-red-500/25 bg-red-500/5 px-2 py-1.5 text-[8px] text-red-400/65">✗ No schedule view · AccessUH re-login every time</div>
//   </div></Shell>;
// }

// function OldEmergency() {
//   return <Shell dark><div className="px-3 pt-1 text-white">
//     <div className="text-[9px] font-bold uppercase tracking-widest text-white/40">UHGo · Menu</div>
//     <div className="mt-2 space-y-1">
//       {["Academics","Campus Life","Student Services","Health & Safety","Resources","Settings"].map(s => (
//         <div key={s} className="flex justify-between rounded border border-white/8 bg-white/[0.03] px-2 py-2 text-[9px] text-white/35"><span>{s}</span><span>›</span></div>
//       ))}
//     </div>
//     <div className="mt-2 rounded border border-red-500/25 bg-red-500/5 px-2 py-1.5 text-[8px] text-red-400/65">✗ Emergency contacts 3+ taps away</div>
//   </div></Shell>;
// }

// function OldOrgs() {
//   return <Shell dark><div className="px-3 pt-1 text-white">
//     <div className="text-[9px] font-bold uppercase tracking-widest text-white/40">Organizations</div>
//     <div className="mt-2 space-y-1">
//       {["Accounting Club","AIA Society","Alpha Beta Gamma","Alpha Chi Omega","Alpha Phi Alpha"].map(s => (
//         <div key={s} className="rounded border border-white/8 bg-white/[0.03] px-2 py-2 text-[9px] text-white/35">{s}</div>
//       ))}
//     </div>
//     <div className="mt-2 rounded border border-red-500/25 bg-red-500/5 px-2 py-1.5 text-[8px] text-red-400/65">✗ Alphabetical · No relevance · Decision overload</div>
//   </div></Shell>;
// }

// function OldProfile() {
//   return <Shell dark><div className="px-3 pt-1 text-white">
//     <div className="text-[9px] font-bold uppercase tracking-widest text-white/40">UHGo · Profile</div>
//     <div className="mt-2 space-y-1.5">
//       {["Name","Email","Student ID","Settings","Logout"].map(s => (
//         <div key={s} className="flex justify-between rounded border border-white/8 bg-white/[0.03] px-2 py-2 text-[9px] text-white/30"><span>{s}</span><span className="text-white/15">›</span></div>
//       ))}
//     </div>
//     <div className="mt-2 rounded border border-red-500/25 bg-red-500/5 px-2 py-1.5 text-[8px] text-red-400/65">✗ Settings page only · No balances · No advisor</div>
//   </div></Shell>;
// }

// function OldStudyGroups() {
//   return <Shell dark><div className="px-3 pt-3 text-white">
//     <div className="text-[9px] font-bold uppercase tracking-widest text-white/40">UHGo · Social</div>
//     <div className="mt-8 rounded border border-red-500/25 bg-red-500/5 p-4 text-[8px] text-red-400/65 leading-relaxed">
//       ✗ Feature doesn't exist.<br /><br />Students use GroupMe and Discord outside the app.
//     </div>
//   </div></Shell>;
// }

// /* ─── NEW SCREENS ─── */
// function NewHome() {
//   return <Shell><div className="px-3 pt-1 text-white">
//     <div className="text-[9px] text-white/35">Good morning, Khushbu</div>
//     <div className="mt-2 rounded-xl border border-[#C8A96A]/25 bg-[#C8A96A]/[0.07] p-2.5">
//       <div className="font-mono text-[8px] uppercase tracking-wider text-[#C8A96A]/60 mb-1.5">Today's Focus</div>
//       <div className="space-y-1 text-[9px] text-white/65">
//         <div>→ CHEM 1331 · SEC 100 at 11:00 <span className="text-white/30">(leave 10:48)</span></div>
//         <div>→ Project 2 due tomorrow</div>
//         <div>→ Dining Dollars low — $23.40</div>
//       </div>
//     </div>
//     <div className="mt-2 grid grid-cols-4 gap-1.5">
//       {[["🪪","ID"],["🍽","Dining"],["🚌","Shuttle"],["🤖","AI"]].map(([e,l]) => (
//         <div key={l} className="flex flex-col items-center gap-1 rounded-xl border border-white/8 bg-white/[0.03] py-2">
//           <span className="text-sm">{e}</span><div className="text-[6px] text-white/25">{l}</div>
//         </div>
//       ))}
//     </div>
//     <div className="mt-2 flex items-start gap-2 rounded-xl border border-white/8 bg-white/[0.02] p-2">
//       <div className="h-6 w-6 flex-shrink-0 rounded-full bg-[#C8A96A]/20 flex items-center justify-center text-[10px]">🤖</div>
//       <div className="text-[8px] text-white/50 leading-snug">The Den is quiet. Fresh Food has a 12-min wait. Eat now to make your 11AM.</div>
//     </div>
//     <div className="mt-2 rounded-xl border border-white/5 bg-white/[0.02] px-2 py-1.5 text-[8px] text-white/25">📢 Spring registration opens Monday · Career Fair — Fri</div>
//   </div></Shell>;
// }

// function NewMap() {
//   return <Shell><div className="px-3 pt-1 text-white">
//     <div className="text-[9px] text-white/35">Campus Map</div>
//     <div className="mt-2 flex items-center gap-1.5 rounded-xl border border-[#C8A96A]/35 bg-[#C8A96A]/10 px-2 py-1.5 text-[9px] text-[#C8A96A]">🔍 PGH — Philip G. Hoffman Hall</div>
//     <div className="mt-1.5 rounded-xl bg-[#C8A96A]/[0.08] border border-[#C8A96A]/20 px-2 py-1.5">
//       <div className="text-[9px] font-medium text-[#C8A96A]">Philip G. Hoffman Hall</div>
//       <div className="text-[8px] text-white/40">PGH · 240m · ~4 min walk</div>
//     </div>
//     <div className="relative mt-2 h-24 overflow-hidden rounded-xl border border-white/8 bg-gradient-to-br from-[#1a1f2e] to-[#0d0f18]">
//       <svg viewBox="0 0 140 90" className="absolute inset-0 h-full w-full">
//         <path d="M10 80 C 50 30 90 60 130 20" fill="none" stroke="#C8A96A" strokeWidth="2" strokeDasharray="4 3" />
//         <circle cx="10" cy="80" r="4" fill="#EDEAE3" />
//         <circle cx="130" cy="20" r="5" fill="#C8A96A" />
//         <text x="118" y="14" fontSize="6" fill="#C8A96A">PGH</text>
//       </svg>
//     </div>
//     <div className="mt-2 flex gap-2">
//       <div className="flex-1 rounded-xl bg-[#C8A96A] py-1.5 text-center text-[8px] font-medium text-black">Open in Maps →</div>
//       <div className="rounded-xl border border-white/10 px-3 py-1.5 text-[8px] text-white/35">Save</div>
//     </div>
//     <div className="mt-2 flex gap-1">
//       {["PGH","SEC","CBB","SR2"].map(a => (
//         <div key={a} className="flex-1 rounded-lg bg-white/[0.04] py-1 text-center font-mono text-[7px] text-white/30">{a}</div>
//       ))}
//     </div>
//   </div></Shell>;
// }

// function NewDining() {
//   return <Shell><div className="px-3 pt-1 text-white">
//     <div className="text-[9px] text-white/35">Dining · Near you</div>
//     <div className="mt-1 text-[11px] font-medium text-white">On campus now</div>
//     {[["Fresh Food Co.","70%","12 min",70],["The Den","20%","2 min",20],["Cougar Grounds","45%","6 min",45]].map(([n,s,t,p]) => (
//       <div key={n} className="mt-1.5 rounded-xl border border-white/8 bg-white/[0.03] p-2">
//         <div className="flex items-center justify-between text-[9px]">
//           <span className="font-medium text-white/80">{n}</span>
//           <span className="text-[#C8A96A]">{t}</span>
//         </div>
//         <div className="mt-1 h-1 overflow-hidden rounded-full bg-white/10">
//           <div className="h-full rounded-full bg-[#C8A96A]" style={{ width: `${p}%` }} />
//         </div>
//         <div className="mt-1 flex gap-1">
//           {["🥗 Veg","🍗 Halal","🌾 GF"].map(f => (
//             <span key={f} className="rounded-full bg-white/[0.06] px-1.5 py-0.5 text-[6px] text-white/40">{f}</span>
//           ))}
//         </div>
//       </div>
//     ))}
//     <div className="mt-2 rounded-xl border border-[#C8A96A]/20 bg-[#C8A96A]/5 px-2 py-1.5 text-[8px] text-[#C8A96A]/80">⚡ Dining Dollars: $23.40 — running low</div>
//   </div></Shell>;
// }

// function NewShuttle() {
//   return <Shell><div className="px-3 pt-1 text-white">
//     <div className="text-[9px] text-white/35">Transportation</div>
//     <div className="mt-1 text-[8px] text-[#C8A96A]">Next class: SEC 100 at 11:00</div>
//     <div className="mt-2 rounded-xl border border-[#C8A96A]/30 bg-[#C8A96A]/10 p-2">
//       <div className="text-[7px] uppercase tracking-wider text-[#C8A96A]/60">Recommended</div>
//       <div className="text-[10px] font-medium text-white mt-0.5">Cougar Line → Tech Bridge</div>
//       <div className="text-[8px] text-white/40">Arrives 3 min · SEC in 8 min</div>
//     </div>
//     <div className="relative mt-2 h-14 overflow-hidden rounded-xl border border-white/8">
//       <svg viewBox="0 0 140 52" className="absolute inset-0 h-full w-full">
//         <path d="M10 42 C 40 10 80 42 130 12" fill="none" stroke="#C8A96A" strokeWidth="1.5" strokeDasharray="3 2" />
//         {[10,45,90,130].map((x,i) => <circle key={i} cx={x} cy={i%2===0?42:12} r="3.5" fill="#0a0a0b" stroke="#C8A96A" strokeWidth="1" />)}
//         <circle cx="10" cy="42" r="4" fill="#EDEAE3" />
//       </svg>
//     </div>
//     <div className="mt-2 space-y-1">
//       {[["Cougar Line","3 min"],["Cougar Ride","On demand"],["Sugar Land","Hourly"],["Ride & Dine","5 min"]].map(([n,t]) => (
//         <div key={n} className="flex justify-between rounded-lg bg-white/[0.03] px-2 py-1 text-[8px]">
//           <span className="text-white/55">{n}</span><span className="text-[#C8A96A]">{t}</span>
//         </div>
//       ))}
//     </div>
//   </div></Shell>;
// }

// function NewSchedule() {
//   return <Shell><div className="px-3 pt-1 text-white">
//     <div className="text-[9px] text-white/35">Today</div>
//     <div className="mt-1.5 space-y-1.5">
//       {[{t:"9:00",n:"COSC 3360",r:"PGH 232",done:true},{t:"11:00",n:"CHEM 1331",r:"SEC 100",active:true},{t:"14:30",n:"MATH 2415",r:"CBB 120"}].map(c => (
//         <div key={c.n} className={`flex items-center gap-2 rounded-xl border px-2 py-2 ${c.active?"border-[#C8A96A]/30 bg-[#C8A96A]/[0.07]":c.done?"border-white/5 opacity-35":"border-white/8 bg-white/[0.02]"}`}>
//           <div className="w-8 font-mono text-[8px] text-white/40">{c.t}</div>
//           <div className="flex-1">
//             <div className={`text-[10px] font-medium ${c.active?"text-[#C8A96A]":"text-white/70"}`}>{c.n}</div>
//             <div className="text-[7px] text-white/30">{c.r}</div>
//           </div>
//           {c.active && <div className="rounded-full bg-[#C8A96A]/20 px-2 py-0.5 text-[7px] text-[#C8A96A]">Now</div>}
//         </div>
//       ))}
//     </div>
//     <div className="mt-2 rounded-xl border border-white/8 bg-white/[0.02] p-2">
//       <div className="font-mono text-[7px] uppercase tracking-wider text-white/25 mb-1.5">Deadlines</div>
//       {[["COSC 3360 · Project 2","Tomorrow","red"],["CHEM 1331 · Lab","Friday",""],["MATH · HW 7","Sunday",""]].map(([a,b,c]) => (
//         <div key={a} className="flex justify-between py-1 text-[8px] border-b border-white/5 last:border-0">
//           <span className="text-white/45">{a}</span>
//           <span className={c==="red"?"text-red-400/80":"text-white/25"}>{b}</span>
//         </div>
//       ))}
//     </div>
//   </div></Shell>;
// }

// function NewEmergency() {
//   return <Shell><div className="px-3 pt-1 text-white">
//     <div className="text-[9px] text-white/35">Emergency Assistance</div>
//     <div className="mt-2 space-y-1.5">
//       {[["🚔","University Police","Emergency & safety"],["💬","CAPS Counseling","Mental health"],["🏥","Student Health","Medical support"],["🏢","Facilities","Building emergencies"],["✈️","Intl. Students","Visa & travel"]].map(([ic,n,r]) => (
//         <div key={n} className="flex items-center gap-2 rounded-xl border border-white/8 bg-white/[0.02] px-2 py-2">
//           <div className="h-7 w-7 flex-shrink-0 rounded-full bg-white/5 flex items-center justify-center text-[10px]">{ic}</div>
//           <div className="flex-1">
//             <div className="text-[9px] font-medium text-white/80">{n}</div>
//             <div className="text-[7px] text-white/30">{r}</div>
//           </div>
//           <div className="rounded-full border border-[#C8A96A]/25 bg-[#C8A96A]/10 px-2 py-0.5 text-[7px] text-[#C8A96A]">Call →</div>
//         </div>
//       ))}
//     </div>
//     <div className="mt-2 rounded-xl border border-[#C8A96A]/15 bg-[#C8A96A]/[0.04] px-2 py-1.5 text-[8px] text-[#C8A96A]/55">0 navigation steps from home screen</div>
//   </div></Shell>;
// }

// function NewOrgs() {
//   return <Shell><div className="px-3 pt-1 text-white">
//     <div className="text-[9px] text-white/35">Clubs · Computer Science</div>
//     <div className="mt-1.5 space-y-1.5">
//       {[["C","CodeCoogs","CS Club","High match"],["X","CougarCS","Competitive Prog.","High match"],["H","UH Hackathon","Hackathon","Trending"],["A","AI & ML Society","Research","Recommended"]].map(([l,n,t,m]) => (
//         <div key={n} className="flex items-center gap-2 rounded-xl border border-white/8 bg-white/[0.02] px-2 py-2">
//           <div className="h-8 w-8 flex-shrink-0 rounded-xl bg-[#C8A96A]/15 flex items-center justify-center text-[#C8A96A] text-[11px] font-display">{l}</div>
//           <div className="flex-1">
//             <div className="text-[9px] font-medium text-white/80">{n}</div>
//             <div className="text-[7px] text-white/30">{t}</div>
//           </div>
//           <span className="rounded-full border border-[#C8A96A]/20 bg-[#C8A96A]/5 px-2 py-0.5 text-[7px] text-[#C8A96A]/60">{m}</span>
//         </div>
//       ))}
//     </div>
//     <div className="mt-2 flex gap-1 flex-wrap">
//       {["Hackathons","Cybersecurity","AI/ML"].map(t => (
//         <span key={t} className="rounded-full border border-white/8 px-2 py-0.5 text-[7px] text-white/25">{t}</span>
//       ))}
//     </div>
//   </div></Shell>;
// }

// function NewStudyGroups() {
//   return <Shell><div className="px-3 pt-1 text-white">
//     <div className="text-[9px] text-white/35">Study Groups · Your Courses</div>
//     <div className="mt-1.5 space-y-1.5">
//       {[["🧪","CHEM 1331","4 members · Today 6PM · Library 2F"],["💻","COSC 3360","3 members · Tomorrow 4PM · PGH"],["📐","MATH 2415","6 members · Friday 5PM · Cougar Village"]].map(([ic,n,d]) => (
//         <div key={n} className="flex gap-2 rounded-xl border border-white/8 bg-white/[0.02] p-2">
//           <div className="h-8 w-8 flex-shrink-0 rounded-xl bg-white/5 flex items-center justify-center text-sm">{ic}</div>
//           <div><div className="text-[9px] font-medium text-white/80">{n}</div><div className="text-[7px] text-white/30">{d}</div></div>
//         </div>
//       ))}
//     </div>
//     <div className="mt-2 rounded-xl border border-dashed border-white/10 p-2 text-center text-[8px] text-white/20">+ Find classmates in CHEM 1331</div>
//     <div className="mt-2 grid grid-cols-2 gap-1.5 text-[7px] text-white/30">
//       <div className="rounded-lg bg-white/[0.03] border border-white/5 p-1.5">📎 Shared notes</div>
//       <div className="rounded-lg bg-white/[0.03] border border-white/5 p-1.5">📅 Study sessions</div>
//     </div>
//   </div></Shell>;
// }

// function NewProfile() {
//   return <Shell><div className="px-3 pt-1 text-white">
//     <div className="text-[9px] text-white/35">Profile</div>
//     <div className="mt-2 rounded-xl border border-[#C8A96A]/20 bg-gradient-to-br from-[#C8A96A]/10 to-transparent p-3">
//       <div className="font-mono text-[7px] text-[#C8A96A]/50 mb-0.5">Digital Student ID</div>
//       <div className="font-display text-[11px] text-white">Khushbu Patel</div>
//       <div className="text-[8px] text-white/35">UH ID: 1234567 · CS + Pop. Health</div>
//       <div className="mt-2 h-8 w-24 rounded-md bg-white/5 flex items-center justify-center font-mono text-[6px] text-white/15">▓▓▓ barcode ▓▓▓</div>
//     </div>
//     <div className="mt-2 grid grid-cols-2 gap-1.5">
//       {[["Dining Dollars","$23.40","red",15],["ShastaBUCKS","$48.20","gold",45]].map(([l,v,c,p]) => (
//         <div key={l} className="rounded-xl border border-white/8 bg-white/[0.02] p-2">
//           <div className="text-[7px] text-white/25">{l}</div>
//           <div className="font-display text-[14px] text-white mt-0.5">{v}</div>
//           <div className="mt-1.5 h-1 overflow-hidden rounded-full bg-white/10">
//             <div className={`h-full rounded-full ${c==="red"?"bg-red-400/60":"bg-[#C8A96A]/60"}`} style={{width:`${p}%`}} />
//           </div>
//         </div>
//       ))}
//     </div>
//     <div className="mt-2 flex items-center gap-2 rounded-xl border border-white/8 bg-white/[0.02] p-2">
//       <div className="h-7 w-7 rounded-full bg-[#C8A96A]/20 flex items-center justify-center text-[#C8A96A] text-[10px]">A</div>
//       <div>
//         <div className="text-[9px] text-white/70">Academic Advisor</div>
//         <div className="text-[7px] text-white/30">advisor@uh.edu</div>
//       </div>
//       <div className="ml-auto text-[7px] text-[#C8A96A]/60">Email →</div>
//     </div>
//   </div></Shell>;
// }

// /* ─── AI ASSISTANT SCREENS ─── */
// function OldAI() {
//   return <Shell dark><div className="px-3 pt-2 text-white">
//     <div className="text-[9px] font-bold uppercase tracking-widest text-white/40">UHGo</div>
//     {/* No AI anywhere — just the same tile grid */}
//     <div className="mt-3 grid grid-cols-3 gap-1.5 opacity-50">
//       {["Grades","Schedule","Maps","Dining","Shuttle","Library","Directory","News","More"].map(t => (
//         <div key={t} className="flex flex-col items-center gap-1 rounded-xl border border-white/8 bg-white/[0.04] py-3">
//           <div className="h-5 w-5 rounded-lg bg-white/15" />
//           <div className="text-[7px] text-white/35">{t}</div>
//         </div>
//       ))}
//     </div>
//     <div className="mt-4 rounded-xl border border-red-500/20 bg-red-500/5 p-3 text-center">
//       <div className="text-[8px] text-red-400/70 leading-relaxed">
//         ✗ No AI assistant exists in UHGo.<br /><br />
//         Students Google campus questions, call the registrar, or ask friends.
//       </div>
//     </div>
//   </div></Shell>;
// }

// function NewAI() {
//   return <Shell><div className="px-3 pt-1 text-white">
//     <div className="text-[9px] text-white/35">Campus Assistant</div>
//     {/* chat messages */}
//     <div className="mt-2 space-y-2">
//       <div className="flex justify-end">
//         <div className="max-w-[80%] rounded-2xl rounded-tr-sm bg-[#C8A96A]/85 px-2.5 py-1.5 text-[9px] text-black">
//           Where's my next class?
//         </div>
//       </div>
//       <div className="flex justify-start">
//         <div className="max-w-[88%] rounded-2xl rounded-tl-sm bg-white/[0.07] px-2.5 py-1.5 text-[9px] text-white/80 leading-snug">
//           CHEM 1331 in SEC 100 at 11:00. Cougar Line gets you there in 6 min — leave by 10:48. ✨
//         </div>
//       </div>
//       <div className="flex justify-end">
//         <div className="max-w-[80%] rounded-2xl rounded-tr-sm bg-[#C8A96A]/85 px-2.5 py-1.5 text-[9px] text-black">
//           Any dining nearby after?
//         </div>
//       </div>
//       <div className="flex justify-start">
//         <div className="max-w-[88%] rounded-2xl rounded-tl-sm bg-white/[0.07] px-2.5 py-1.5 text-[9px] text-white/80 leading-snug">
//           The Den is a 3-min walk from SEC and quiet right now. Your Dining Dollars balance is $23.40.
//         </div>
//       </div>
//       <div className="flex justify-end">
//         <div className="max-w-[80%] rounded-2xl rounded-tr-sm bg-[#C8A96A]/85 px-2.5 py-1.5 text-[9px] text-black">
//           When's the next Cougar Line?
//         </div>
//       </div>
//       <div className="flex justify-start">
//         <div className="max-w-[88%] rounded-2xl rounded-tl-sm bg-white/[0.07] px-2.5 py-1.5 text-[9px] text-white/80 leading-snug">
//           Arriving at Student Center in 3 min. Next one in 11 min.
//         </div>
//       </div>
//     </div>
//     {/* input bar */}
//     <div className="absolute inset-x-3 bottom-5 flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-3 py-2 backdrop-blur">
//       <span className="flex-1 text-[8px] text-white/25">Ask anything about campus…</span>
//       <div className="h-5 w-5 rounded-full bg-[#C8A96A]/80 flex items-center justify-center text-[8px] text-black">↑</div>
//     </div>
//   </div></Shell>;
// }

// /* ══════════════════════════════════════════════
//    DRAG COMPARE SLIDER
// ══════════════════════════════════════════════ */
// function CompareSlider({ Before, After }) {
//   const [pct, setPct] = useState(50);
//   const ref = useRef(null);
//   const dragging = useRef(false);
//   const move = useCallback((clientX) => {
//     if (!ref.current) return;
//     const { left, width } = ref.current.getBoundingClientRect();
//     setPct(Math.max(4, Math.min(96, ((clientX - left) / width) * 100)));
//   }, []);
//   return (
//     <div ref={ref}
//       className="relative select-none overflow-hidden rounded-[2rem] border border-white/10 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.9)]"
//       style={{ aspectRatio: "9/19", cursor: "col-resize", touchAction: "none" }}
//       onMouseDown={() => { dragging.current = true; }}
//       onMouseMove={e => { if (dragging.current) move(e.clientX); }}
//       onMouseUp={() => { dragging.current = false; }}
//       onMouseLeave={() => { dragging.current = false; }}
//       onTouchMove={e => move(e.touches[0].clientX)}
//     >
//       <div className="absolute left-1/2 top-2.5 z-40 h-[14px] w-[80px] -translate-x-1/2 rounded-full bg-black" />
//       <div className="absolute inset-0"><After /></div>
//       <div className="absolute inset-0 overflow-hidden" style={{ clipPath: `inset(0 ${100-pct}% 0 0)` }}><Before /></div>
//       <div className="pointer-events-none absolute inset-y-0 z-30 flex items-center justify-center" style={{ left: `${pct}%`, transform: "translateX(-50%)" }}>
//         <div className="h-full w-[1.5px] bg-white/30" />
//         <div className="absolute flex h-8 w-8 items-center justify-center rounded-full border border-white/20 bg-white/10 text-[11px] backdrop-blur-md text-white">⇔</div>
//       </div>
//     </div>
//   );
// }

// /* ══════════════════════════════════════════════
//    FEATURE PAIRS
// ══════════════════════════════════════════════ */
// const PAIRS = [
//   { key:"home",        label:"Home",           captions:["Daily Focus + AI","Smart quick access","Proactive reminders"],                    Before:OldHome,        After:NewHome },
//   { key:"map",         label:"Campus Map",     captions:["Abbreviation search","Walking time estimate","Google Maps handoff"],               Before:OldMap,         After:NewMap },
//   { key:"dining",      label:"Dining",         captions:["Smart recommendations","Menus + dietary filters","Occupancy alerts"],               Before:OldDining,      After:NewDining },
//   { key:"shuttle",     label:"Transportation", captions:["Context-aware guidance","Live arrival times","Route recommendations"],              Before:OldShuttle,     After:NewShuttle },
//   { key:"schedule",    label:"Schedule",       captions:["Today's classes — no login","Assignment deadlines","Replaces AccessUH redirect"],   Before:OldSchedule,    After:NewSchedule },
//   { key:"ai",          label:"AI Assistant",   captions:["New feature — not in UHGo","Natural language campus queries","Schedule + shuttle + dining in one ask"], Before:OldAI, After:NewAI },
//   { key:"emergency",   label:"Emergency",      captions:["One-tap calling","0 navigation steps","All contacts unified"],                     Before:OldEmergency,   After:NewEmergency },
//   { key:"orgs",        label:"Organizations",  captions:["Major-matched clubs","Trending skills","Personalized ranking"],                     Before:OldOrgs,        After:NewOrgs },
//   { key:"studygroups", label:"Study Groups",   captions:["Course-based discovery","Shared resources","Exam coordination"],                   Before:OldStudyGroups, After:NewStudyGroups },
//   { key:"profile",     label:"Profile",        captions:["Digital ID","Dining balances + insights","Advisor + personalization"],             Before:OldProfile,     After:NewProfile },
// ];

// /* ══════════════════════════════════════════════
//    PINNED SOLUTION SHOWCASE
// ══════════════════════════════════════════════ */
// function SolutionShowcase() {
//   const stage = useRef(null);
//   const { scrollYProgress } = useScroll({ target: stage, offset: ["start start", "end end"] });
//   const [active, setActive] = useState(0);
//   useMotionValueEvent(scrollYProgress, "change", v => {
//     setActive(Math.min(PAIRS.length - 1, Math.floor(v * PAIRS.length)));
//   });
//   const feature = PAIRS[active];
//   return (
//     <div ref={stage} style={{ height: `${PAIRS.length * 100}vh` }} className="relative">
//       <div className="sticky top-0 flex h-screen items-center overflow-hidden">
//         <div className="pointer-events-none absolute left-1/2 top-1/2 h-[480px] w-[480px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/5 blur-[150px]" />
//         <div className="mx-auto w-full max-w-7xl px-6 md:px-10">
//           <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-12">
//             {/* step list */}
//             <div className="md:col-span-3">
//               <div className="font-mono text-[10px] uppercase tracking-eyebrow text-muted mb-4">
//                 {String(active+1).padStart(2,"0")} / {String(PAIRS.length).padStart(2,"0")}
//               </div>
//               <ul className="space-y-1.5">
//                 {PAIRS.map((f,i) => (
//                   <motion.li key={f.key}
//                     animate={{ opacity: i===active?1:0.14, x: i===active?4:0 }}
//                     transition={{ duration: 0.35, ease: EL }}
//                     className="flex items-center gap-2 font-display text-xl text-bone md:text-2xl"
//                   >
//                     {i===active && <motion.span layoutId="nav-dot" className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gold" />}
//                     {f.label}
//                   </motion.li>
//                 ))}
//               </ul>
//             </div>
//             {/* phone */}
//             <div className="flex justify-center md:col-span-5">
//               <div className="w-[215px] md:w-[248px]">
//                 <AnimatePresence mode="wait">
//                   <motion.div key={feature.key}
//                     initial={{ opacity:0, y:18, scale:0.96 }}
//                     animate={{ opacity:1, y:0, scale:1 }}
//                     exit={{ opacity:0, y:-10, scale:0.97 }}
//                     transition={{ duration: 0.42, ease: EL }}
//                   >
//                     <CompareSlider Before={feature.Before} After={feature.After} />
//                   </motion.div>
//                 </AnimatePresence>
//                 <p className="mt-3 text-center font-mono text-[9px] text-white/18">drag to compare</p>
//               </div>
//             </div>
//             {/* captions */}
//             <div className="md:col-span-4">
//               <AnimatePresence mode="wait">
//                 <motion.div key={feature.key+"_c"}
//                   initial={{ opacity:0, x:14 }}
//                   animate={{ opacity:1, x:0 }}
//                   exit={{ opacity:0, x:-8 }}
//                   transition={{ duration: 0.38, ease: EL }}
//                 >
//                   <div className="font-mono text-[10px] uppercase tracking-eyebrow text-gold/55 mb-4">{feature.label} · Redesigned</div>
//                   <ul className="space-y-3">
//                     {feature.captions.map((c,i) => (
//                       <motion.li key={c}
//                         initial={{ opacity:0, x:10 }}
//                         animate={{ opacity:1, x:0 }}
//                         transition={{ duration:0.32, delay:i*0.07, ease:EL }}
//                         className="flex items-center gap-3 text-bone/65 text-base"
//                       >
//                         <div className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gold/55" />{c}
//                       </motion.li>
//                     ))}
//                   </ul>
//                 </motion.div>
//               </AnimatePresence>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// /* ══════════════════════════════════════════════
//    ARCH DIAGRAM
// ══════════════════════════════════════════════ */
// function ArchDiagram() {
//   const ref = useRef(null);
//   const inView = useInView(ref, { once:true, margin:"-15%" });
//   const rows = [
//     { label:"Student",   nodes:["Schedule","Location","Enrollment","Preferences"], accent:false },
//     { label:"DigitalUH", nodes:["AI Assistant","Intent Classifier","Recommendation Engine","Campus Router"], accent:true },
//     { label:"Services",  nodes:["Supabase (18 tables)","Google Maps API","Microsoft OAuth","Supabase Edge"], accent:false },
//   ];
//   return (
//     <div ref={ref} className="overflow-hidden rounded-3xl border border-white/8 bg-white/[0.02] p-8">
//       <div className="font-mono text-[10px] uppercase tracking-eyebrow text-gold/60 mb-8">System Architecture</div>
//       <div className="space-y-8">
//         {rows.map((row,ri) => (
//           <div key={row.label} className="flex items-center gap-6">
//             <div className="w-24 flex-shrink-0 font-mono text-[10px] text-bone/20">{row.label}</div>
//             <div className="flex flex-wrap gap-2">
//               {row.nodes.map((node,ni) => (
//                 <motion.div key={node}
//                   initial={{ opacity:0, scale:0.85 }}
//                   animate={inView?{opacity:1,scale:1}:{}}
//                   transition={{ duration:0.4, delay:ri*0.18+ni*0.08, ease:EL }}
//                   className={`rounded-xl border px-3 py-2 text-sm ${row.accent?"border-gold/30 bg-gold/10 text-gold":"border-white/8 bg-white/[0.03] text-bone/55"}`}
//                 >{node}</motion.div>
//               ))}
//             </div>
//           </div>
//         ))}
//         <motion.div initial={{opacity:0}} animate={inView?{opacity:1}:{}} transition={{duration:0.6,delay:0.8}}
//           className="flex flex-wrap gap-2 pl-[7.5rem]">
//           {["PKCE Auth flow","Server-side Maps proxy","Real-time subscriptions","0 external logins"].map(t => (
//             <span key={t} className="rounded-full border border-white/8 px-3 py-1 font-mono text-[9px] text-bone/25">{t}</span>
//           ))}
//         </motion.div>
//       </div>
//     </div>
//   );
// }

// /* ══════════════════════════════════════════════
//    SCROLL PROGRESS BAR
// ══════════════════════════════════════════════ */
// function ProgressBar() {
//   const { scrollYProgress } = useScroll();
//   const scaleX = useTransform(scrollYProgress, [0,1], [0,1]);
//   return <motion.div style={{ scaleX, transformOrigin:"left" }} className="fixed inset-x-0 top-0 z-50 h-[1.5px] bg-gold/70" />;
// }

// /* ══════════════════════════════════════════════
//    SECTION DIVIDER
// ══════════════════════════════════════════════ */
// function Div({ n, label }) {
//   return (
//     <div className="flex items-center gap-4 mb-12">
//       <span className="font-mono text-[10px] text-gold/45">{String(n).padStart(2,"0")}</span>
//       <div className="h-px flex-1 bg-white/8" />
//       <span className="font-mono text-[10px] uppercase tracking-eyebrow text-white/20">{label}</span>
//     </div>
//   );
// }

// /* ══════════════════════════════════════════════
//    MAIN EXPORT
// ══════════════════════════════════════════════ */
// const META = [
//   ["Role","Lead UX & Front-End"],
//   ["Year","2025 — 2026"],
//   ["Platform","iOS · Android · Web"],
//   ["Type","Concept → Prototype"],
// ];

// const NEW_SCREENS = [
//   { label:"Home",         C:NewHome },
//   { label:"Campus Map",   C:NewMap },
//   { label:"Dining",       C:NewDining },
//   { label:"Shuttle",      C:NewShuttle },
//   { label:"Schedule",     C:NewSchedule },
//   { label:"AI Assistant", C:NewAI },
//   { label:"Emergency",    C:NewEmergency },
//   { label:"Orgs",         C:NewOrgs },
//   { label:"Study Groups", C:NewStudyGroups },
//   { label:"Profile",      C:NewProfile },
// ];

// export default function DigitalUH() {
//   return (
//     <section id="digitaluh" className="relative">
//       <ProgressBar />

//       {/* HERO */}
//       <div className="mx-auto max-w-7xl px-6 pt-32 md:px-10 md:pt-48">
//         <Eyebrow>03 — Featured Case Study</Eyebrow>
//         <div className="mt-8 flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
//           <motion.h2 initial={{ opacity:0, y:40 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:1, ease:EL }}
//             className="font-display text-6xl leading-[0.9] tracking-tightest text-bone md:text-[8rem]">
//             Digital<span className="italic text-gold">UH</span>
//           </motion.h2>
//           <motion.p initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:0.9, delay:0.15, ease:EL }}
//             className="max-w-sm text-bone/50">
//             UHGo exists. Students use it because they have to. DigitalUH is what it should be — a campus platform designed around how students actually live.
//           </motion.p>
//         </div>
//         <div className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/5 md:grid-cols-4">
//           {META.map(([k,v]) => (
//             <div key={k} className="bg-ink-900 p-5">
//               <div className="font-mono text-[10px] uppercase tracking-eyebrow text-muted">{k}</div>
//               <div className="mt-2 text-bone">{v}</div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* §1 THE PROBLEM */}
//       <div className="mx-auto max-w-7xl px-6 pt-28 md:px-10 md:pt-40">
//         <Div n={1} label="The Problem" />
//         <motion.h3 initial={{ opacity:0, y:24 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:0.8, ease:EL }}
//           className="max-w-2xl font-display text-3xl leading-tight text-bone md:text-5xl mb-16">
//           UHGo was built to check institutional boxes.{" "}
//           <span className="text-bone/30">Not to help students navigate their day.</span>
//         </motion.h3>

//         <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
//           {[
//             { label:"Home",         note:"Cluttered tiles. Poor hierarchy.",                   C:OldHome },
//             { label:"Campus Map",   note:"Building abbreviations aren't recognized.",           C:OldMap },
//             { label:"Dining",       note:"Students can't view menus or compare options.",       C:OldDining },
//             { label:"Shuttle",      note:"Flat list. No arrival times. No context.",            C:OldShuttle },
//             { label:"Schedule",     note:"Daily schedules hidden behind external logins.",      C:OldSchedule },
//             { label:"Emergency",    note:"Important contacts take too many steps to find.",     C:OldEmergency },
//             { label:"Organizations",note:"Hundreds of clubs. Zero personalization.",            C:OldOrgs },
//             { label:"Profile",      note:"Settings page only — not a student dashboard.",       C:OldProfile },
//             { label:"AI Assistant", note:"Doesn't exist. Students Google campus questions instead.", C:() => (
//               <Shell dark><div className="px-3 pt-3 text-white">
//                 <div className="text-[9px] font-bold uppercase tracking-widest text-white/40">UHGo</div>
//                 <div className="mt-6 flex flex-col items-center gap-3 text-center">
//                   <div className="h-12 w-12 rounded-2xl border border-white/10 bg-white/[0.04] flex items-center justify-center text-2xl opacity-30">🤖</div>
//                   <div className="text-[8px] text-white/20 leading-relaxed px-2">No campus assistant.<br />No natural language queries.<br />No contextual help.</div>
//                 </div>
//                 <div className="mt-6 rounded border border-red-500/25 bg-red-500/5 px-2 py-2 text-[8px] text-red-400/65 text-center">✗ Feature doesn't exist in UHGo</div>
//               </div></Shell>
//             )},
//           ].map(({label,note,C},i) => (
//             <motion.div key={label}
//               initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true, margin:"-5%" }}
//               transition={{ duration:0.5, delay:(i%4)*0.07, ease:EL }} className="group">
//               <div className="relative overflow-hidden rounded-[1.5rem] border border-red-500/15 transition-all duration-400 group-hover:border-red-500/30"
//                 style={{ aspectRatio:"9/19" }}>
//                 <div className="absolute left-1/2 top-2 z-30 h-[10px] w-[60px] -translate-x-1/2 rounded-full bg-black" />
//                 <C />
//                 <div className="absolute bottom-3 left-2 right-2 z-20 rounded-xl border border-red-500/25 bg-red-950/80 px-2 py-1.5 backdrop-blur text-[7px] text-red-400/75 leading-snug">{note}</div>
//               </div>
//               <div className="mt-2 text-center font-mono text-[10px] text-bone/30">{label}</div>
//             </motion.div>
//           ))}
//         </div>
//       </div>

//       {/* §2 RESEARCH */}
//       <div className="mx-auto max-w-7xl px-6 pt-28 md:px-10 md:pt-40">
//         <Div n={2} label="Research" />
//         <motion.h3 initial={{ opacity:0, y:24 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:0.8, ease:EL }}
//           className="max-w-2xl font-display text-3xl leading-tight text-bone md:text-4xl mb-14">
//           Every decision traces back to observed friction —{" "}
//           <span className="text-bone/30">not assumptions.</span>
//         </motion.h3>

//         <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
//           {[
//             { e:"📋", stat:"1st day", label:"Search failure", note:"Abbreviation search fails exactly when freshmen need it most — first class, new building, time pressure." },
//             { e:"🍽", stat:"", label:"Decision gap", note:"UHGo shows 'Open' or 'Closed'. Students need: how busy, what's on the menu, can I afford it, will I make it back?" },
//             { e:"📅", stat:"10×", label:"Daily schedule checks", note:"Schedules checked every morning. Grades checked 6× a semester. UHGo leads with Grades, which route to AccessUH and require re-authentication every time." },
//             { e:"🚌", stat:"", label:"Name blindness", note:"Cougar Ride, Ride & Dine, Sugar Land Shuttle — names that tell students nothing without reading docs they've never seen." },
//             { e:"🆘", stat:"3+", label:"Taps to emergency", note:"Campus safety resources buried in menus designed for browsing — not for moments that don't allow for searching." },
//             { e:"👥", stat:"0", label:"Study group tools", note:"Students form groups via GroupMe because UHGo offers nothing. The enrollment data to fix this already exists in the app." },
//             { e:"🔄", stat:"", label:"External redirect loop", note:"Grades, schedules, and advisor info bounce students to external SSO portals. Each redirect is a moment of abandonment." },
//             { e:"🎓", stat:"500+", label:"Organizations listed", note:"Alphabetical and unfiltered. Students scroll for 30 seconds and close the page. Relevance beats volume." },
//             { e:"💳", stat:"", label:"Surprise at the register", note:"Dining Dollars run out silently. Students discover the problem at the cashier — avoidable with one proactive notification." },
//             { e:"🤖", stat:"0", label:"AI features in UHGo", note:"Students Google 'UH building PGH', call the registrar for shuttle times, and text friends about dining. A campus assistant would answer all of these in one place." },
//           ].map(({e,stat,label,note},i) => (
//             <motion.div key={label}
//               initial={{ opacity:0, y:24 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true, margin:"-8%" }}
//               transition={{ duration:0.55, delay:(i%3)*0.07, ease:EL }}
//               className="rounded-2xl border border-white/8 bg-white/[0.02] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-gold/25"
//             >
//               <div className="flex items-start justify-between mb-2">
//                 <span className="text-xl">{e}</span>
//                 {stat && <span className="font-display text-2xl text-gold">{stat}</span>}
//               </div>
//               <div className="font-mono text-[10px] uppercase tracking-eyebrow text-gold/55 mb-1.5">{label}</div>
//               <p className="text-[12px] leading-snug text-bone/45">{note}</p>
//             </motion.div>
//           ))}
//         </div>
//       </div>

//       {/* §3 DESIGN STRATEGY */}
//       <div className="mx-auto max-w-7xl px-6 pt-28 md:px-10 md:pt-40">
//         <Div n={3} label="Design Strategy" />
//         <motion.h3 initial={{ opacity:0, y:24 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:0.8, ease:EL }}
//           className="max-w-xl font-display text-3xl leading-tight text-bone md:text-4xl mb-14">
//           One philosophy behind every screen.
//         </motion.h3>

//         <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
//           {[
//             ["P1","Replace searching with guidance","If the app knows your next class, your location, and the time — it should tell you what to do next. Not wait to be asked."],
//             ["P2","Design for the first two weeks","The highest-stress moments are the first days of each semester. That's when navigation fails, menus confuse, and apps get uninstalled."],
//             ["P3","Surface the 3 things students actually use","Schedule, dining, and navigation account for 80% of daily use. Everything else goes one tap further — not equal to everything else."],
//             ["P4","Make emergencies frictionless","Any experience that might be needed under stress must be reachable in zero navigation steps from the home screen."],
//             ["P5","Relevance over volume","5 clubs matched to your major with upcoming events is more useful than 500 clubs listed alphabetically. Same data, different intent."],
//             ["P6","Proactive over reactive","Alert the student before the balance is empty. Before the class starts. Before the deadline arrives. The app already has all the data."],
//           ].map(([n,title,desc],i) => (
//             <motion.div key={n}
//               initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true, margin:"-8%" }}
//               transition={{ duration:0.55, delay:(i%3)*0.07, ease:EL }}
//               className="group rounded-2xl border border-white/8 bg-white/[0.02] p-6 transition-all duration-400 hover:-translate-y-1 hover:border-gold/25 hover:bg-white/[0.04]"
//             >
//               <div className="font-mono text-[10px] text-gold/50 mb-3">{n}</div>
//               <div className="font-display text-xl text-bone mb-2">{title}</div>
//               <p className="text-sm text-bone/40 leading-relaxed">{desc}</p>
//             </motion.div>
//           ))}
//         </div>
//       </div>

//       {/* §4 THE SOLUTION */}
//       <div className="pt-28 md:pt-40">
//         <div className="mx-auto max-w-7xl px-6 md:px-10">
//           <Div n={4} label="The Solution" />
//           <motion.h3 initial={{ opacity:0, y:24 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:0.8, ease:EL }}
//             className="max-w-2xl font-display text-3xl leading-tight text-bone md:text-5xl mb-4">
//             Every screen, redesigned.{" "}
//             <span className="text-bone/30">Drag to compare.</span>
//           </motion.h3>
//           <p className="text-bone/35 max-w-md mb-16 text-sm">Scroll through all nine features. Each comparison is interactive — drag the divider to see before and after.</p>
//         </div>
//         <SolutionShowcase />
//       </div>

//       {/* §5 ARCHITECTURE */}
//       <div className="mx-auto max-w-7xl px-6 pt-28 md:px-10 md:pt-40">
//         <Div n={5} label="Architecture" />
//         <motion.h3 initial={{ opacity:0, y:24 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:0.8, ease:EL }}
//           className="max-w-2xl font-display text-3xl leading-tight text-bone md:text-5xl mb-14">
//           Built to feel like a product,{" "}
//           <span className="text-bone/30">not a prototype.</span>
//         </motion.h3>
//         <ArchDiagram />
//         <div className="mt-6 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/5 md:grid-cols-4">
//           {[
//             ["Frontend","React Native · TypeScript","Typed component architecture, strict prop interfaces shared across iOS, Android, and web."],
//             ["Auth & Data","Microsoft OAuth · Supabase","PKCE-based OAuth for UH credentials. 18 Supabase tables shared across all modules."],
//             ["AI Layer","Intent Classifier · Edge Functions","Rules-based classifier routes campus queries. Falls through to LLM for open-ended questions."],
//             ["Maps","Google Maps · Server Proxy","Server-side API key proxy handles walking estimates and deep-link handoffs securely."],
//           ].map(([label,tech,desc],i) => (
//             <motion.div key={label}
//               initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true, margin:"-8%" }}
//               transition={{ duration:0.6, delay:i*0.08, ease:EL }}
//               className="bg-ink-900 p-6">
//               <div className="font-mono text-[10px] uppercase tracking-eyebrow text-muted">{label}</div>
//               <div className="mt-3 font-display text-lg text-gold">{tech}</div>
//               <p className="mt-3 text-sm leading-relaxed text-bone/45">{desc}</p>
//             </motion.div>
//           ))}
//         </div>
//       </div>

//       {/* §6 FINAL PRODUCT */}
//       <div className="mx-auto max-w-7xl px-6 pt-28 pb-40 md:px-10 md:pt-40 md:pb-56">
//         <Div n={6} label="Final Product" />
//         <motion.h3 initial={{ opacity:0, y:24 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:0.8, ease:EL }}
//           className="max-w-xl font-display text-3xl leading-tight text-bone md:text-5xl mb-16">
//           One coherent experience.{" "}
//           <span className="italic text-gold">Ten redesigned screens.</span>
//         </motion.h3>

//         <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
//           {NEW_SCREENS.map(({label,C},i) => (
//             <motion.div key={label}
//               initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true, margin:"-5%" }}
//               transition={{ duration:0.55, delay:(i%5)*0.07, ease:EL }} className="group">
//               <div className="relative overflow-hidden rounded-[1.6rem] border border-white/8 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.7)] transition-all duration-500 group-hover:-translate-y-2 group-hover:border-gold/20 group-hover:shadow-[0_30px_80px_-15px_rgba(200,169,106,0.12)]"
//                 style={{ aspectRatio:"9/19" }}>
//                 <div className="absolute left-1/2 top-2 z-30 h-[10px] w-[60px] -translate-x-1/2 rounded-full bg-black" />
//                 <C />
//               </div>
//               <div className="mt-2 text-center font-mono text-[10px] text-bone/30">{label}</div>
//             </motion.div>
//           ))}
//         </div>

//         {/* reflection */}
//         <motion.blockquote
//           initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true, margin:"-10%" }}
//           transition={{ duration:1, ease:EL }}
//           className="mt-32 max-w-4xl font-display text-3xl leading-snug tracking-tight text-bone md:text-5xl"
//         >
//           The most important design decision wasn't visual.{" "}
//           <span className="text-bone/30">It was deciding which problems were actually worth solving.</span>
//         </motion.blockquote>

//         <div className="mt-16 h-px w-full bg-white/8" />
//         <div className="mt-12 flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
//           <div className="font-mono text-[11px] uppercase tracking-eyebrow text-muted">DigitalUH · 2025 — 2026</div>
//           <div className="flex flex-wrap gap-3">
//             {["React Native","TypeScript","Supabase","Google Maps API","Framer Motion"].map(t => (
//               <span key={t} className="rounded-full border border-white/10 px-3 py-1 font-mono text-[10px] uppercase tracking-wide text-bone/40">{t}</span>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
/**
 * DigitalUH.jsx — Cinematic case study, v4
 * Drop-in replacement. Nothing else in the portfolio changes.
 *
 * 6 sections: Problem → Research → Strategy → Solution (pinned) → Architecture → Final Grid
 * Deps: framer-motion (already in project). No new installs needed.
 *
 * ─── IMAGE SETUP ────────────────────────────────────────────────
 * Place the 8 UHGo screenshots in your Next.js public folder:
 *
 *   /public/images/uhgo/
 *     uhgo-home.png      → IMG_3089
 *     uhgo-map.png       → IMG_3090
 *     uhgo-dining.png    → IMG_3091
 *     uhgo-shuttle.png   → IMG_3092
 *     uhgo-emergency.png → IMG_3093
 *     uhgo-orgs.png      → IMG_3094
 *     uhgo-events.png    → IMG_3095
 *     uhgo-profile.png   → IMG_3096
 *
 * The Old* screen components reference these as /images/uhgo/*.png
 * ────────────────────────────────────────────────────────────────
 */

import { useRef, useState, useCallback } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
  useInView,
  AnimatePresence,
} from "framer-motion";
import { Eyebrow, GlassCard } from "../Primitives";
import { PhoneFrame, SCREENS } from "./DigitalUHScreens";
import ProjectFooterNav from "../ProjectFooterNav";

const EL = [0.16, 1, 0.3, 1];

/* ══════════════════════════════════════════════
   PHONE SHELL — shared wrapper
══════════════════════════════════════════════ */
function Shell({ dark = false, children }) {
  return (
    <div className={`relative h-full overflow-hidden ${dark ? "bg-[#111318]" : "bg-[#0a0a0b]"}`}>
      <div className="absolute left-1/2 top-2.5 z-30 h-[13px] w-[76px] -translate-x-1/2 rounded-full bg-black" />
      <div className="absolute inset-x-0 top-0 z-20 flex items-center justify-between px-5 pt-2 font-mono text-[8px] text-white/30">
        <span>9:41</span><span>●●● WiFi 🔋</span>
      </div>
      <div className="absolute inset-0 pt-8">{children}</div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────
   REAL UHGO SCREENSHOTS
   Each function renders the actual UHGo app screenshot inside the
   phone frame. object-top so we see the nav bar and key content.
   The red annotation badge floats above via absolute positioning.
───────────────────────────────────────────────────────────────── */

function RealScreenshot({ src, alt, note, objectPosition = "top" }) {
  return (
    <div className="relative h-full w-full overflow-hidden bg-[#c8102e]">
      <img
        src={src}
        alt={alt}
        className="h-full w-full object-cover"
        style={{ objectPosition }}
        draggable={false}
      />
      {/* red annotation badge pinned to bottom */}
      {note && (
        <div className="absolute inset-x-0 bottom-0 z-10 bg-gradient-to-t from-black/80 to-transparent px-3 pb-3 pt-6">
          <div className="rounded-xl border border-red-500/40 bg-red-950/90 px-3 py-2 text-[8px] text-red-300/90 backdrop-blur leading-snug">
            {note}
          </div>
        </div>
      )}
    </div>
  );
}

/* ─── OLD SCREENS — real UHGo screenshots ─── */

function OldHome() {
  return (
    <RealScreenshot
      src="../../../public/images/screens/old_home.png"
      alt="UHGo Home screen"
      note="✗ Everything surfaces equally. Grade shortcuts dominate. No daily context or prioritization."
    />
  );
}

function OldMap() {
  return (
    <RealScreenshot
      src="../../../public/images/screens/old_map.png"
      alt="UHGo Map screen"
      note="✗ Search returns room numbers (PGH 200) not buildings. Abbreviation-only queries fail silently."
      objectPosition="top"
    />
  );
}

function OldDining() {
  return (
    <RealScreenshot
      src="../../../public/images/screens/old_dining.png"
      alt="UHGo Dining screen"
      note="✗ Menus exist but only per-location after multiple taps. No occupancy, no smart recommendations."
    />
  );
}

function OldShuttle() {
  return (
    <RealScreenshot
      src="../../../public/images/screens/old_shuttle.png"
      alt="UHGo Live Vehicle Tracking"
      note="✗ Dots clustered on a generic map. No arrival times, no stop names, no route context."
    />
  );
}

/* Schedule: UHGo has no dedicated schedule view — Home is the closest */
 function OldSchedule() {
   return (
     <div className="relative h-full w-full overflow-hidden bg-[#111318]">
       <img
        // src="/images/uhgo/uhgo-home.png"
         alt="UHGo — no schedule feature"
      className="h-full w-full object-cover opacity-12 grayscale"
         draggable={false}
       />

       <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 px-4 text-center">
         <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-3xl opacity-25">
           📅
        </div>

         <p className="text-[9px] leading-relaxed text-white/30">
           No daily schedule experience.
           <br />
           Students leave the app and
           <br />
           sign in to AccessUH.
         </p>

         <div className="rounded-xl border border-red-500/30 bg-red-950/80 px-3 py-2 text-[8px] text-red-400/75">
           ✗ Feature doesn't exist
        </div>
       </div>
    </div>
   );
 }

function OldEmergency() {
  return (
    <RealScreenshot
      src="../../../public/images/screens/old_emergency.png"
      alt="UHGo UH Police screen"
      note="✗ Only UH Police is surfaced here. CAPS, Health Center, Facilities, and Intl. Student Services require separate navigation."
    />
  );
}

function OldOrgs() {
  return (
    <RealScreenshot
      src="../../../public/images/screens/old_orgs.png"
      alt="UHGo Organizations screen"
      note="✗ 108 organizations listed alphabetically with no relevance to major, interest, or activity level."
    />
  );
}

function OldProfile() {
  return (
    <RealScreenshot
      src="../../../public/images/screens/old_profile.png"
      alt="UHGo My Profile screen"
      note="✗ Name and email only. No dining balance, no advisor, no ID — nothing actionable."
    />
  );
}

/* Study Groups: genuinely doesn't exist — keep honest "missing" state */
function OldStudyGroups() {
  return (
    <div className="relative h-full w-full overflow-hidden bg-[#111318]">
      {/* ghost of the home screen at very low opacity to imply "in the app" */}
      <img
        src="images/uhgo/uhgo-home.png"
        alt="UHGo — no study groups feature"
        className="h-full w-full object-cover opacity-15 grayscale"
        draggable={false}
      />
      {/* overlay content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 px-4 text-center">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-3xl opacity-30">👥</div>
        <p className="text-[9px] text-white/35 leading-relaxed">
          Study Groups doesn't exist in UHGo.<br />Students use GroupMe and Discord.
        </p>
        <div className="rounded-xl border border-red-500/30 bg-red-950/80 px-3 py-2 text-[8px] text-red-400/80">
          ✗ Feature not available
        </div>
      </div>
    </div>
  );
}

/* ─── NEW SCREENS ─── */
function NewHome() {
  return (
    <Shell>
      <img
        src="/images/screens/home.jpg"
        alt="DigitalUH Home"
        className="h-full w-full object-cover"
      />
    </Shell>
  );
}
function NewMap() {
  return (
    <Shell>
      <img
        src="/images/screens/map.PNG"
        className="h-full w-full object-cover"
      />
    </Shell>
  );
}

function NewDining() {
  return (
    <Shell>
      <img
        src="/images/screens/dining.jpg"
        className="h-full w-full object-cover"
      />
    </Shell>
  );
}

function NewShuttle() {
   return (
    <Shell>
      <img
        src="/images/screens/shuttle.jpg"
        className="h-full w-full object-cover"
      />
    </Shell>
  );
}

function NewSchedule() {
   return (
    <Shell>
      <img
        src="/images/screens/class.jpg"
        className="h-full w-full object-cover"
      />
    </Shell>
  );
}

function NewEmergency() {
   return (
    <Shell>
      <img
        src="/images/screens/safety.jpg"
        className="h-full w-full object-cover"
      />
    </Shell>
  );
}

function NewOrgs() {
  return (
    <Shell>
      <img
        src="/images/screens/orgs.jpg"
        className="h-full w-full object-cover"
      />
    </Shell>
  );
}

function NewStudyGroups() {
   return (
    <Shell>
      <img
        src="/images/screens/studygroup.jpg"
        className="h-full w-full object-cover"
      />
    </Shell>
  );
}

function NewProfile() {
   return (
    <Shell>
      <img
        src="/images/screens/profile.jpg"
        className="h-full w-full object-cover"
      />
    </Shell>
  );
}

/* ─── AI ASSISTANT SCREENS ─── */
function OldAI() {
  return (
    <div className="relative h-full w-full overflow-hidden bg-[#111318]">
      <img
        src="/images/uhgo/uhgo-home.png"
        alt="UHGo — no AI assistant"
        className="h-full w-full object-cover opacity-12 grayscale"
        draggable={false}
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 px-4 text-center">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-3xl opacity-25">🤖</div>
        <p className="text-[9px] text-white/30 leading-relaxed">
          No AI assistant in UHGo.<br />Students Google campus questions.
        </p>
        <div className="rounded-xl border border-red-500/30 bg-red-950/80 px-3 py-2 text-[8px] text-red-400/75">
          ✗ Feature doesn't exist
        </div>
      </div>
    </div>
  );
}

function NewAI() {
  return (
    <Shell>
      <img
        src="/images/screens/ai.jpg"
        className="h-full w-full object-cover"
      />
    </Shell>
  );
  
}

/* ══════════════════════════════════════════════
   DRAG COMPARE SLIDER
══════════════════════════════════════════════ */
function CompareSlider({ Before, After }) {
  const [pct, setPct] = useState(50);
  const ref = useRef(null);
  const dragging = useRef(false);
  const move = useCallback((clientX) => {
    if (!ref.current) return;
    const { left, width } = ref.current.getBoundingClientRect();
    setPct(Math.max(4, Math.min(96, ((clientX - left) / width) * 100)));
  }, []);
  return (
    <div ref={ref}
      className="relative select-none overflow-hidden rounded-[2rem] border border-white/10 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.9)]"
      style={{ aspectRatio: "9/19", cursor: "col-resize", touchAction: "none" }}
      onMouseDown={() => { dragging.current = true; }}
      onMouseMove={e => { if (dragging.current) move(e.clientX); }}
      onMouseUp={() => { dragging.current = false; }}
      onMouseLeave={() => { dragging.current = false; }}
      onTouchMove={e => move(e.touches[0].clientX)}
    >
      <div className="absolute left-1/2 top-2.5 z-40 h-[14px] w-[80px] -translate-x-1/2 rounded-full bg-black" />
      <div className="absolute inset-0"><After /></div>
      <div className="absolute inset-0 overflow-hidden" style={{ clipPath: `inset(0 ${100-pct}% 0 0)` }}><Before /></div>
      <div className="pointer-events-none absolute inset-y-0 z-30 flex items-center justify-center" style={{ left: `${pct}%`, transform: "translateX(-50%)" }}>
        <div className="h-full w-[1.5px] bg-white/30" />
        <div className="absolute flex h-8 w-8 items-center justify-center rounded-full border border-white/20 bg-white/10 text-[11px] backdrop-blur-md text-white">⇔</div>
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════════
   FEATURE PAIRS
══════════════════════════════════════════════ */
const PAIRS = [
  { key:"home",        label:"Home",           captions:["Daily Focus + AI","Smart quick access","Proactive reminders"],                    Before:OldHome,        After:NewHome },
  { key:"map",         label:"Campus Map",     captions:["Abbreviation search","Walking time estimate","Google Maps handoff"],               Before:OldMap,         After:NewMap },
  { key:"dining",      label:"Dining",         captions:["Smart recommendations","Menus + dietary filters","Occupancy alerts"],               Before:OldDining,      After:NewDining },
  { key:"shuttle",     label:"Transportation", captions:["Context-aware guidance","Live arrival times","Route recommendations"],              Before:OldShuttle,     After:NewShuttle },
  { key:"schedule",    label:"Schedule",       captions:["Today's classes: no login","Assignment deadlines","Replaces AccessUH redirect"],   Before:OldSchedule,    After:NewSchedule },
  { key:"ai",          label:"AI Assistant",   captions:["New feature: not in UHGo","Natural language campus queries","Schedule + shuttle + dining in one ask"], Before:OldAI, After:NewAI },
  { key:"emergency",   label:"Emergency",      captions:["One-tap calling","0 navigation steps","All contacts unified"],                     Before:OldEmergency,   After:NewEmergency },
  { key:"orgs",        label:"Organizations",  captions:["Major-matched clubs","Trending skills","Personalized ranking"],                     Before:OldOrgs,        After:NewOrgs },
  { key:"studygroups", label:"Study Groups",   captions:["Course-based discovery","Shared resources","Exam coordination"],                   Before:OldStudyGroups, After:NewStudyGroups },
  { key:"profile",     label:"Profile",        captions:["Digital ID","Dining balances + insights","Advisor + personalization"],             Before:OldProfile,     After:NewProfile },
];

/* ══════════════════════════════════════════════
   PINNED SOLUTION SHOWCASE
══════════════════════════════════════════════ */
function SolutionShowcase() {
  const stage = useRef(null);
  const { scrollYProgress } = useScroll({ target: stage, offset: ["start start", "end end"] });
  const [active, setActive] = useState(0);
  useMotionValueEvent(scrollYProgress, "change", v => {
    setActive(Math.min(PAIRS.length - 1, Math.floor(v * PAIRS.length)));
  });
  const feature = PAIRS[active];
  return (
    <div ref={stage} style={{ height: `${PAIRS.length * 100}vh` }} className="relative">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[480px] w-[480px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/5 blur-[150px]" />
        <div className="mx-auto w-full max-w-7xl px-6 md:px-10">
          <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-12">
            {/* step list */}
            <div className="md:col-span-3">
              <div className="font-mono text-[10px] uppercase tracking-eyebrow text-muted mb-4">
                {String(active+1).padStart(2,"0")} / {String(PAIRS.length).padStart(2,"0")}
              </div>
              <ul className="space-y-1.5">
                {PAIRS.map((f,i) => (
                  <motion.li key={f.key}
                    animate={{ opacity: i===active?1:0.14, x: i===active?4:0 }}
                    transition={{ duration: 0.35, ease: EL }}
                    className="flex items-center gap-2 font-display text-xl text-bone md:text-2xl"
                  >
                    {i===active && <motion.span layoutId="nav-dot" className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gold" />}
                    {f.label}
                  </motion.li>
                ))}
              </ul>
            </div>
            {/* phone */}
            <div className="flex justify-center md:col-span-5">
              <div className="w-[215px] md:w-[248px]">
                <AnimatePresence mode="wait">
                  <motion.div key={feature.key}
                    initial={{ opacity:0, y:18, scale:0.96 }}
                    animate={{ opacity:1, y:0, scale:1 }}
                    exit={{ opacity:0, y:-10, scale:0.97 }}
                    transition={{ duration: 0.42, ease: EL }}
                  >
                    <CompareSlider Before={feature.Before} After={feature.After} />
                  </motion.div>
                </AnimatePresence>
                <p className="mt-3 text-center font-mono text-[9px] text-white/18">drag to compare</p>
              </div>
            </div>
            {/* captions */}
            <div className="md:col-span-4">
              <AnimatePresence mode="wait">
                <motion.div key={feature.key+"_c"}
                  initial={{ opacity:0, x:14 }}
                  animate={{ opacity:1, x:0 }}
                  exit={{ opacity:0, x:-8 }}
                  transition={{ duration: 0.38, ease: EL }}
                >
                  <div className="font-mono text-[10px] uppercase tracking-eyebrow text-gold/55 mb-4">{feature.label} · Redesigned</div>
                  <ul className="space-y-3">
                    {feature.captions.map((c,i) => (
                      <motion.li key={c}
                        initial={{ opacity:0, x:10 }}
                        animate={{ opacity:1, x:0 }}
                        transition={{ duration:0.32, delay:i*0.07, ease:EL }}
                        className="flex items-center gap-3 text-bone/65 text-base"
                      >
                        <div className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gold/55" />{c}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════════
   ARCH DIAGRAM
══════════════════════════════════════════════ */
function ArchDiagram() {
  const ref = useRef(null);
  const inView = useInView(ref, { once:true, margin:"-15%" });
  const rows = [
    { label:"Student",   nodes:["Schedule","Location","Enrollment","Preferences"], accent:false },
    { label:"DigitalUH", nodes:["AI Assistant","Intent Classifier","Recommendation Engine","Campus Router"], accent:true },
    { label:"Services",  nodes:["Supabase (18 tables)","Google Maps API","Microsoft OAuth","Supabase Edge"], accent:false },
  ];
  return (
    <div ref={ref} className="overflow-hidden rounded-3xl border border-white/8 bg-white/[0.02] p-8">
      <div className="font-mono text-[10px] uppercase tracking-eyebrow text-gold/60 mb-8">System Architecture</div>
      <div className="space-y-8">
        {rows.map((row,ri) => (
          <div key={row.label} className="flex items-center gap-6">
            <div className="w-24 flex-shrink-0 font-mono text-[10px] text-bone/20">{row.label}</div>
            <div className="flex flex-wrap gap-2">
              {row.nodes.map((node,ni) => (
                <motion.div key={node}
                  initial={{ opacity:0, scale:0.85 }}
                  animate={inView?{opacity:1,scale:1}:{}}
                  transition={{ duration:0.4, delay:ri*0.18+ni*0.08, ease:EL }}
                  className={`rounded-xl border px-3 py-2 text-sm ${row.accent?"border-gold/30 bg-gold/10 text-gold":"border-white/8 bg-white/[0.03] text-bone/55"}`}
                >{node}</motion.div>
              ))}
            </div>
          </div>
        ))}
        <motion.div initial={{opacity:0}} animate={inView?{opacity:1}:{}} transition={{duration:0.6,delay:0.8}}
          className="flex flex-wrap gap-2 pl-[7.5rem]">
          {["PKCE Auth flow","Server-side Maps proxy","Real-time subscriptions","0 external logins"].map(t => (
            <span key={t} className="rounded-full border border-white/8 px-3 py-1 font-mono text-[9px] text-bone/25">{t}</span>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════════
   SCROLL PROGRESS BAR
══════════════════════════════════════════════ */
function ProgressBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useTransform(scrollYProgress, [0,1], [0,1]);
  return <motion.div style={{ scaleX, transformOrigin:"left" }} className="fixed inset-x-0 top-0 z-50 h-[1.5px] bg-gold/70" />;
}

/* ══════════════════════════════════════════════
   SECTION DIVIDER
══════════════════════════════════════════════ */
function Div({ n, label }) {
  return (
    <div className="flex items-center gap-4 mb-12">
      <span className="font-mono text-[10px] text-gold/45">{String(n).padStart(2,"0")}</span>
      <div className="h-px flex-1 bg-white/8" />
      <span className="font-mono text-[10px] uppercase tracking-eyebrow text-white/20">{label}</span>
    </div>
  );
}

/* ══════════════════════════════════════════════
   MAIN EXPORT
══════════════════════════════════════════════ */
const META = [
  ["Role","Lead UX & Front-End"],
  ["Year","2025 — 2026"],
  ["Platform","iOS · Android · Web"],
  ["Type","Concept → Prototype"],
];

const NEW_SCREENS = [
  { label:"Home",         C:NewHome },
  { label:"Campus Map",   C:NewMap },
  { label:"Dining",       C:NewDining },
  { label:"Shuttle",      C:NewShuttle },
  { label:"Schedule",     C:NewSchedule },
  { label:"AI Assistant", C:NewAI },
  { label:"Emergency",    C:NewEmergency },
  { label:"Orgs",         C:NewOrgs },
  { label:"Study Groups", C:NewStudyGroups },
  { label:"Profile",      C:NewProfile },
];

export default function DigitalUH({ onBack, onPrev, onNext } = {}) {
  return (
    <section id="digitaluh" className="relative">
      <ProgressBar />

      {/* HERO */}
      <div className="mx-auto max-w-7xl px-6 pt-32 md:px-10 md:pt-48">
        <Eyebrow>03 — Featured Case Study</Eyebrow>
        <div className="mt-8 flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <motion.h2 initial={{ opacity:0, y:40 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:1, ease:EL }}
            className="font-display text-6xl leading-[0.9] tracking-tightest text-bone md:text-[8rem]">
            Digital<span className="italic text-gold">UH</span>
          </motion.h2>
          <motion.p initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:0.9, delay:0.15, ease:EL }}
            className="max-w-sm text-bone/50">
            UHGo exists. Students use it because they have to. DigitalUH is what it should be a campus platform designed around how students actually live.
          </motion.p>
        </div>
        <div className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/5 md:grid-cols-4">
          {META.map(([k,v]) => (
            <div key={k} className="bg-ink-900 p-5">
              <div className="font-mono text-[10px] uppercase tracking-eyebrow text-muted">{k}</div>
              <div className="mt-2 text-bone">{v}</div>
            </div>
          ))}
        </div>
      </div>

      {/* §1 THE PROBLEM */}
      <div className="mx-auto max-w-7xl px-6 pt-28 md:px-10 md:pt-40">
        <Div n={1} label="The Problem" />
        <motion.h3 initial={{ opacity:0, y:24 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:0.8, ease:EL }}
          className="max-w-2xl font-display text-3xl leading-tight text-bone md:text-5xl mb-16">
          UHGo was built to check institutional boxes.{" "}
          <span className="text-bone/30">Not to help students navigate their day.</span>
        </motion.h3>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {[
            { label:"Home",         note:"Cluttered tiles. Poor hierarchy.",                   C:OldHome },
            { label:"Campus Map",   note:"Building abbreviations aren't recognized.",           C:OldMap },
            { label:"Dining",       note:"Students can't view menus or compare options.",       C:OldDining },
            { label:"Shuttle",      note:"Flat list. No arrival times. No context.",            C:OldShuttle },
            // { label:"Schedule",     note:"Daily schedules hidden behind external logins.",      C:OldSchedule },
            { label:"Emergency",    note:"Important contacts take too many steps to find.",     C:OldEmergency },
            { label:"Organizations",note:"Hundreds of clubs. Zero personalization.",            C:OldOrgs },
            { label:"Profile",      note:"Settings page only not a student dashboard.",       C:OldProfile },
            // { label:"AI Assistant", note:"Doesn't exist. Students Google campus questions instead.", C:OldAI },
          ].map(({label,note,C},i) => (
            <motion.div key={label}
              initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true, margin:"-5%" }}
              transition={{ duration:0.5, delay:(i%4)*0.07, ease:EL }} className="group">
              <div className="relative overflow-hidden rounded-[1.5rem] border border-red-500/15 transition-all duration-400 group-hover:border-red-500/30"
                style={{ aspectRatio:"9/19" }}>
                <div className="absolute left-1/2 top-2 z-30 h-[10px] w-[60px] -translate-x-1/2 rounded-full bg-black" />
                <C />
                <div className="absolute bottom-3 left-2 right-2 z-20 rounded-xl border border-red-500/25 bg-red-950/80 px-2 py-1.5 backdrop-blur text-[7px] text-red-400/75 leading-snug">{note}</div>
              </div>
              <div className="mt-2 text-center font-mono text-[10px] text-bone/30">{label}</div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* §2 RESEARCH */}
      <div className="mx-auto max-w-7xl px-6 pt-28 md:px-10 md:pt-40">
        <Div n={2} label="Research" />
        <motion.h3 initial={{ opacity:0, y:24 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:0.8, ease:EL }}
          className="max-w-2xl font-display text-3xl leading-tight text-bone md:text-4xl mb-14">
          Every decision traces back to observed friction —{" "}
          <span className="text-bone/30">not assumptions.</span>
        </motion.h3>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { e:"📋", stat:"1st day", label:"Search failure", note:"Abbreviation search fails exactly when freshmen need it most like first class, new building, time pressure." },
            { e:"🍽", stat:"", label:"Decision gap", note:"UHGo shows 'Open' or 'Closed'. Students need: how busy, what's on the menu, can I afford it, will I make it back?" },
            { e:"📅", stat:"10×", label:"Daily schedule checks", note:"Schedules checked every morning. Grades checked 6× a semester. UHGo leads with Grades, which route to AccessUH and require re-authentication every time." },
            { e:"🚌", stat:"", label:"Name blindness", note:"Cougar Ride, Ride & Dine, Sugar Land Shuttle, names that tell students nothing without reading docs they've never seen." },
            { e:"🆘", stat:"3+", label:"Taps to emergency", note:"Campus safety resources buried in menus designed for browsing not for moments that don't allow for searching." },
            { e:"👥", stat:"0", label:"Study group tools", note:"Students form groups via GroupMe because UHGo offers nothing. The enrollment data to fix this already exists in the app." },
            { e:"🔄", stat:"", label:"External redirect loop", note:"Grades, schedules, and advisor info bounce students to external SSO portals. Each redirect is a moment of abandonment." },
            { e:"🎓", stat:"500+", label:"Organizations listed", note:"Alphabetical and unfiltered. Students scroll for 30 seconds and close the page. Relevance beats volume." },
            { e:"💳", stat:"", label:"Surprise at the register", note:"Dining Dollars run out silently. Students discover the problem at the cashier, avoidable with one proactive notification." },
            { e:"🤖", stat:"0", label:"AI features in UHGo", note:"Students Google 'UH building PGH', call the registrar for shuttle times, and text friends about dining. A campus assistant would answer all of these in one place." },
          ].map(({e,stat,label,note},i) => (
            <motion.div key={label}
              initial={{ opacity:0, y:24 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true, margin:"-8%" }}
              transition={{ duration:0.55, delay:(i%3)*0.07, ease:EL }}
              className="rounded-2xl border border-white/8 bg-white/[0.02] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-gold/25"
            >
              <div className="flex items-start justify-between mb-2">
                <span className="text-xl">{e}</span>
                {stat && <span className="font-display text-2xl text-gold">{stat}</span>}
              </div>
              <div className="font-mono text-[10px] uppercase tracking-eyebrow text-gold/55 mb-1.5">{label}</div>
              <p className="text-[12px] leading-snug text-bone/45">{note}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* §3 DESIGN STRATEGY */}
      <div className="mx-auto max-w-7xl px-6 pt-28 md:px-10 md:pt-40">
        <Div n={3} label="Design Strategy" />
        <motion.h3 initial={{ opacity:0, y:24 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:0.8, ease:EL }}
          className="max-w-xl font-display text-3xl leading-tight text-bone md:text-4xl mb-14">
          One philosophy behind every screen.
        </motion.h3>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            ["P1","Replace searching with guidance","If the app knows your next class, your location, and the time. It should tell you what to do next. Not wait to be asked."],
            ["P2","Design for the first two weeks","The highest-stress moments are the first days of each semester. That's when navigation fails, menus confuse, and apps get uninstalled."],
            ["P3","Surface the 3 things students actually use","Schedule, dining, and navigation account for 80% of daily use. Everything else goes one tap further not equal to everything else."],
            ["P4","Make emergencies frictionless","Any experience that might be needed under stress must be reachable in zero navigation steps from the home screen."],
            ["P5","Relevance over volume","5 clubs matched to your major with upcoming events is more useful than 500 clubs listed alphabetically. Same data, different intent."],
            ["P6","Proactive over reactive","Alert the student before the balance is empty. Before the class starts. Before the deadline arrives. The app already has all the data."],
          ].map(([n,title,desc],i) => (
            <motion.div key={n}
              initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true, margin:"-8%" }}
              transition={{ duration:0.55, delay:(i%3)*0.07, ease:EL }}
              className="group rounded-2xl border border-white/8 bg-white/[0.02] p-6 transition-all duration-400 hover:-translate-y-1 hover:border-gold/25 hover:bg-white/[0.04]"
            >
              <div className="font-mono text-[10px] text-gold/50 mb-3">{n}</div>
              <div className="font-display text-xl text-bone mb-2">{title}</div>
              <p className="text-sm text-bone/40 leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* §4 THE SOLUTION */}
      <div className="pt-28 md:pt-40">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <Div n={4} label="The Solution" />
          <motion.h3 initial={{ opacity:0, y:24 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:0.8, ease:EL }}
            className="max-w-2xl font-display text-3xl leading-tight text-bone md:text-5xl mb-4">
            Every screen, redesigned.{" "}
            <span className="text-bone/30">Drag to compare.</span>
          </motion.h3>
          <p className="text-bone/35 max-w-md mb-16 text-sm">Scroll through all nine features. Each comparison is interactive, drag the divider to see before and after.</p>
        </div>
        <SolutionShowcase />
      </div>

      {/* §5 ARCHITECTURE */}
      <div className="mx-auto max-w-7xl px-6 pt-28 md:px-10 md:pt-40">
        <Div n={5} label="Architecture" />
        <motion.h3 initial={{ opacity:0, y:24 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:0.8, ease:EL }}
          className="max-w-2xl font-display text-3xl leading-tight text-bone md:text-5xl mb-14">
          Built to feel like a product,{" "}
          <span className="text-bone/30">not a prototype.</span>
        </motion.h3>
        <ArchDiagram />
        <div className="mt-6 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/5 md:grid-cols-4">
          {[
            ["Frontend","React Native · TypeScript","Typed component architecture, strict prop interfaces shared across iOS, Android, and web."],
            ["Auth & Data","Microsoft OAuth · Supabase","PKCE-based OAuth for UH credentials. 18 Supabase tables shared across all modules."],
            ["AI Layer","Intent Classifier · Edge Functions","Rules-based classifier routes campus queries. Falls through to LLM for open-ended questions."],
            ["Maps","Google Maps · Server Proxy","Server-side API key proxy handles walking estimates and deep-link handoffs securely."],
          ].map(([label,tech,desc],i) => (
            <motion.div key={label}
              initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true, margin:"-8%" }}
              transition={{ duration:0.6, delay:i*0.08, ease:EL }}
              className="bg-ink-900 p-6">
              <div className="font-mono text-[10px] uppercase tracking-eyebrow text-muted">{label}</div>
              <div className="mt-3 font-display text-lg text-gold">{tech}</div>
              <p className="mt-3 text-sm leading-relaxed text-bone/45">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* §6 FINAL PRODUCT */}
      <div className="mx-auto max-w-7xl px-6 pt-28 pb-40 md:px-10 md:pt-40 md:pb-56">
        <Div n={6} label="Final Product" />
        <motion.h3 initial={{ opacity:0, y:24 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:0.8, ease:EL }}
          className="max-w-xl font-display text-3xl leading-tight text-bone md:text-5xl mb-16">
          One coherent experience.{" "}
          <span className="italic text-gold">Ten redesigned screens.</span>
        </motion.h3>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {NEW_SCREENS.map(({label,C},i) => (
            <motion.div key={label}
              initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true, margin:"-5%" }}
              transition={{ duration:0.55, delay:(i%5)*0.07, ease:EL }} className="group">
              <div className="relative overflow-hidden rounded-[1.6rem] border border-white/8 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.7)] transition-all duration-500 group-hover:-translate-y-2 group-hover:border-gold/20 group-hover:shadow-[0_30px_80px_-15px_rgba(200,169,106,0.12)]"
                style={{ aspectRatio:"9/19" }}>
                <div className="absolute left-1/2 top-2 z-30 h-[10px] w-[60px] -translate-x-1/2 rounded-full bg-black" />
                <C />
              </div>
              <div className="mt-2 text-center font-mono text-[10px] text-bone/30">{label}</div>
            </motion.div>
          ))}
        </div>

        {/* reflection */}
        <motion.blockquote
          initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true, margin:"-10%" }}
          transition={{ duration:1, ease:EL }}
          className="mt-32 max-w-4xl font-display text-3xl leading-snug tracking-tight text-bone md:text-5xl"
        >
          The most important design decision wasn't visual.{" "}
          <span className="text-bone/30">It was deciding which problems were actually worth solving.</span>
        </motion.blockquote>

        <div className="mt-16 h-px w-full bg-white/8" />
        <div className="mt-12 flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
          <div className="font-mono text-[11px] uppercase tracking-eyebrow text-muted">DigitalUH · 2026</div>
          <div className="flex flex-wrap gap-3">
            {["React Native","TypeScript","Supabase","Google Maps API","Framer Motion"].map(t => (
              <span key={t} className="rounded-full border border-white/10 px-3 py-1 font-mono text-[10px] uppercase tracking-wide text-bone/40">{t}</span>
            ))}
          </div>
        </div>
      </div>

      <ProjectFooterNav
  onBack={onBack}
  onPrev={onPrev}
  onNext={() => {
    console.log("Next clicked");
    onNext?.();
  }}
  prevLabel="Previous Project"
  nextLabel="Fusion 36°"
/>
    </section>
  );
}
