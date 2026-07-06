/*
  Stylized placeholder UI screens for the DigitalUH phone mockups.
  These are representative mock UIs — REPLACE the inner <Screen*> contents with
  your real Figma / product screen exports (PNG) when ready. Each is wrapped in a
  reusable PhoneFrame so swapping in an <img> is trivial.
*/


export function PhoneFrame({ children, className = "" }) {
  return (
    <div
      className={`relative aspect-[9/19] w-full overflow-hidden rounded-[2.4rem] border border-white/12 bg-ink-800 shadow-[0_40px_120px_-20px_rgba(0,0,0,0.8)] ${className}`}
    >
      {/* notch */}
      <div className="absolute left-1/2 top-2.5 z-30 h-5 w-24 -translate-x-1/2 rounded-full bg-black/80" />
      {/* status bar */}
      <div className="absolute inset-x-0 top-0 z-20 flex items-center justify-between px-6 pt-3 text-[10px] font-medium text-bone/70">
        <span>9:41</span>
        <span className="flex gap-1">
          <span className="h-2 w-3 rounded-sm bg-bone/40" />
          <span className="h-2 w-3 rounded-sm bg-bone/40" />
          <span className="h-2 w-4 rounded-sm bg-bone/70" />
        </span>
      </div>
      <div className="absolute inset-0 pt-9">{children}</div>
      {/* replace badge */}
      <div className="absolute bottom-3 left-1/2 z-30 -translate-x-1/2 rounded-full bg-black/60 px-3 py-1 font-mono text-[8px] uppercase tracking-wide text-bone/50 backdrop-blur">
        ▸ placeholder UI — swap screen
      </div>
    </div>
  );
}

const tabBar = (active) => (
  <div className="absolute inset-x-0 bottom-0 flex items-center justify-around border-t border-white/8 bg-ink-900/80 px-2 py-3 backdrop-blur">
    {["Home", "Map", "Dining", "Me"].map((t, i) => (
      <div
        key={t}
        className={`flex flex-col items-center gap-1 text-[8px] ${
          i === active ? "text-gold" : "text-bone/35"
        }`}
      >
        <span
          className={`h-4 w-4 rounded-md ${i === active ? "bg-gold/80" : "bg-bone/20"}`}
        />
        {t}
      </div>
    ))}
  </div>
);

// export function ScreenShuttle() {
//   return (
//     <div className="relative h-full bg-ink-900 px-4 pt-2 text-bone">
//       <div className="text-[11px] text-bone/50">Live Shuttle</div>
//       <div className="font-display text-xl">Cougar Line</div>
//       <div className="mt-3 overflow-hidden rounded-xl border border-white/8">
//         <div className="relative h-32 bg-gradient-to-br from-slate2/25 to-gold/10">
//           <svg viewBox="0 0 200 120" className="absolute inset-0 h-full w-full">
//             <path
//               d="M10 100 C 60 30, 120 130, 190 40"
//               fill="none"
//               stroke="#C8A96A"
//               strokeWidth="3"
//               strokeDasharray="6 6"
//             />
//             <circle cx="120" cy="78" r="6" fill="#C8A96A" />
//           </svg>
//         </div>
//       </div>
//       {["Student Center — 2 min", "Library — 6 min", "Rec Center — 11 min"].map((s, i) => (
//         <div
//           key={s}
//           className="mt-2 flex items-center justify-between rounded-lg bg-white/4 px-3 py-2.5 text-[11px]"
//         >
//           <span className="flex items-center gap-2">
//             <span className="h-1.5 w-1.5 rounded-full bg-gold" />
//             {s.split("—")[0]}
//           </span>
//           <span className="text-gold">{s.split("—")[1]}</span>
//         </div>
//       ))}
//       {tabBar(0)}
//     </div>
//   );
// }

export function ScreenShuttle() {
  return (
    <img
      src="/public/images/screens/shuttle.jpg"
      alt="Shuttle"
      className="h-full w-full object-cover"
    />
  );
}

// export function ScreenMap() {
//   return (
//     <div className="relative h-full bg-ink-900 text-bone">
//       <div className="relative h-full">
//         <div className="absolute inset-0 bg-gradient-to-b from-slate2/20 to-ink-900" />
//         <div className="absolute inset-0 [background-image:linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:26px_26px]" />
//         <svg viewBox="0 0 200 380" className="absolute inset-0 h-full w-full">
//           <path d="M20 60 L90 60 L90 200 L170 200 L170 320" fill="none" stroke="#C8A96A" strokeWidth="3" />
//           <circle cx="20" cy="60" r="5" fill="#EDEAE3" />
//           <circle cx="170" cy="320" r="7" fill="#C8A96A" />
//         </svg>
//         <div className="glass absolute left-3 right-3 top-4 rounded-xl px-3 py-2 text-[11px]">
//           🔍 Search campus buildings
//         </div>
//         <div className="glass absolute bottom-20 left-3 right-3 rounded-xl px-3 py-2.5 text-[11px]">
//           <div className="font-medium">M.D. Anderson Library</div>
//           <div className="text-bone/50">Open · 240m away</div>
//         </div>
//       </div>
//       {tabBar(1)}
//     </div>
//   );
// }
export function ScreenMap() {
  return (
    <img
      src="/images/screens/old_map.PNG"
      alt="Campus Map"
      className="h-full w-full object-cover"
    />
  );
}

// export function ScreenDining() {
//   return (
//     <div className="relative h-full bg-ink-900 px-4 pt-2 text-bone">
//       <div className="text-[11px] text-bone/50">Dining</div>
//       <div className="font-display text-xl">On campus now</div>
//       {[
//         ["Fresh Food Co.", "Open · busy", "70%"],
//         ["The Den", "Open · quiet", "20%"],
//         ["Cougar Grounds", "Open", "45%"],
//       ].map(([name, status, busy]) => (
//         <div key={name} className="mt-2 rounded-xl border border-white/8 bg-white/4 p-3">
//           <div className="flex items-center justify-between text-[12px]">
//             <span className="font-medium">{name}</span>
//             <span className="text-bone/45">{status}</span>
//           </div>
//           <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-white/10">
//             <div className="h-full rounded-full bg-gold" style={{ width: busy }} />
//           </div>
//         </div>
//       ))}
//       {tabBar(2)}
//     </div>
//   );
// }
export function ScreenDining() {
  return (
    <img
      src="/public/images/screens/dining.jpg"
      alt="Dining"
      className="h-full w-full object-cover"
    />
  );
}

// export function ScreenAI() {
//   return (
//     <div className="relative h-full bg-ink-900 px-4 pt-2 text-bone">
//       <div className="text-[11px] text-bone/50">Campus Assistant</div>
//       <div className="mt-3 flex justify-end">
//         <div className="max-w-[80%] rounded-2xl rounded-tr-sm bg-gold/85 px-3 py-2 text-[11px] text-ink">
//           Where&apos;s my next class?
//         </div>
//       </div>
//       <div className="mt-3 flex justify-start">
//         <div className="max-w-[85%] rounded-2xl rounded-tl-sm bg-white/6 px-3 py-2 text-[11px] text-bone/85">
//           CHEM 1331 in SEC 100 at 11:00. The Cougar Line gets you there in 6 min - leave by 10:48. ✨
//         </div>
//       </div>
//       <div className="mt-3 flex justify-end">
//         <div className="max-w-[80%] rounded-2xl rounded-tr-sm bg-gold/85 px-3 py-2 text-[11px] text-ink">
//           Add a reminder
//         </div>
//       </div>
//       <div className="glass absolute inset-x-3 bottom-16 flex items-center gap-2 rounded-full px-4 py-2.5 text-[11px] text-bone/50">
//         Ask anything about campus…
//         <span className="ml-auto h-6 w-6 rounded-full bg-gold/80" />
//       </div>
//       {tabBar(3)}
//     </div>
//   );
// }

export function ScreenAI() {
  return (
    <img
      src="/public/images/screens/ai.jpg"
      alt="AI"
      className="h-full w-full object-cover"
    />
  );
}


export function ScreenHome() {
  return (
    <img
      src="/public/images/screens/home.jpg"
      className="h-full w-full object-cover"
      alt="Home"
    />
  );
}

export const SCREENS = [
  { key: "shuttle", label: "Live shuttle tracking", Comp: ScreenShuttle },
  { key: "map", label: "Interactive campus map", Comp: ScreenMap },
  { key: "dining", label: "Dining system", Comp: ScreenDining },
  { key: "ai", label: "AI campus assistant", Comp: ScreenAI },
];
