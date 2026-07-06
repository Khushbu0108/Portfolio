// // import { useEffect, useState } from "react";
// // import { motion, AnimatePresence } from "framer-motion";
// // import { scrollToId } from "../hooks/useLenis";

// // const LINKS = [
// //   ["About", "#about"],
// //   ["Work", "#work"],
// //   ["Process", "#process"],
// //   ["Contact", "#contact"],
// // ];

// // export default function Navbar({ visible }) {
// //   const [scrolled, setScrolled] = useState(false);
// //   const [open, setOpen] = useState(false);

// //   useEffect(() => {
// //     const onScroll = () => setScrolled(window.scrollY > 40);
// //     window.addEventListener("scroll", onScroll);
// //     return () => window.removeEventListener("scroll", onScroll);
// //   }, []);

// //   return (
// //     <AnimatePresence>
// //       {visible && (
// //         <motion.header
// //           initial={{ y: -80, opacity: 0 }}
// //           animate={{ y: 0, opacity: 1 }}
// //           transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
// //           className="fixed inset-x-0 top-0 z-50"
// //         >
// //           <div
// //             className={`mx-auto flex items-center justify-between px-6 transition-all duration-500 md:px-10 ${
// //               scrolled ? "py-3" : "py-6"
// //             }`}
// //           >
// //             <a
// //               href="#top"
// //               onClick={(e) => {
// //                 e.preventDefault();
// //                 scrollToId("#top");
// //               }}
// //               className={`flex items-center gap-2.5 rounded-full px-4 py-2 transition-all ${
// //                 scrolled ? "glass" : ""
// //               }`}
// //             >
// //               <span className="h-2 w-2 rounded-full bg-gold" />
// //               <span className="font-display text-base tracking-tight">Khushbu T.</span>
// //             </a>

// //             <nav
// //               className={`hidden items-center gap-1 rounded-full px-2 py-1.5 transition-all md:flex ${
// //                 scrolled ? "glass" : ""
// //               }`}
// //             >
// //               {LINKS.map(([label, id]) => (
// //                 <a
// //                   key={id}
// //                   href={id}
// //                   onClick={(e) => {
// //                     e.preventDefault();
// //                     scrollToId(id);
// //                   }}
// //                   className="relative rounded-full px-4 py-2 text-sm text-bone/75 transition-colors hover:text-bone"
// //                 >
// //                   {label}
// //                 </a>
// //               ))}
// //             </nav>

// //             <button
// //               onClick={() => setOpen((o) => !o)}
// //               className="glass flex h-10 w-10 items-center justify-center rounded-full md:hidden"
// //               aria-label="Menu"
// //             >
// //               <div className="flex flex-col gap-1.5">
// //                 <span
// //                   className={`block h-px w-5 bg-bone transition-transform ${
// //                     open ? "translate-y-[3px] rotate-45" : ""
// //                   }`}
// //                 />
// //                 <span
// //                   className={`block h-px w-5 bg-bone transition-transform ${
// //                     open ? "-translate-y-[3px] -rotate-45" : ""
// //                   }`}
// //                 />
// //               </div>
// //             </button>
// //           </div>

// //           {/* Mobile menu */}
// //           <AnimatePresence>
// //             {open && (
// //               <motion.nav
// //                 initial={{ opacity: 0, y: -10 }}
// //                 animate={{ opacity: 1, y: 0 }}
// //                 exit={{ opacity: 0, y: -10 }}
// //                 className="glass mx-6 flex flex-col rounded-2xl p-4 md:hidden"
// //               >
// //                 {LINKS.map(([label, id]) => (
// //                   <a
// //                     key={id}
// //                     href={id}
// //                     onClick={(e) => {
// //                       e.preventDefault();
// //                       setOpen(false);
// //                       scrollToId(id);
// //                     }}
// //                     className="rounded-xl px-4 py-3 text-lg text-bone/80 hover:bg-white/5 hover:text-bone"
// //                   >
// //                     {label}
// //                   </a>
// //                 ))}
// //               </motion.nav>
// //             )}
// //           </AnimatePresence>
// //         </motion.header>
// //       )}
// //     </AnimatePresence>
// //   );
// // }
// import { useEffect, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { scrollToId } from "../hooks/useLenis";

// const LINKS = [
//   ["About", "#about"],
//   ["Work", "#work"],
//   ["Process", "#process"],
//   ["Contact", "#contact"],
// ];

// export default function Navbar({ visible, onHome }) {
//   const [scrolled, setScrolled] = useState(false);
//   const [open, setOpen] = useState(false);

//   useEffect(() => {
//     const onScroll = () => setScrolled(window.scrollY > 40);
//     window.addEventListener("scroll", onScroll);
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   return (
//     <AnimatePresence>
//       {visible && (
//         <motion.header
//           initial={{ y: -80, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
//           className="fixed inset-x-0 top-0 z-50"
//         >
//           <div
//             className={`mx-auto flex items-center justify-between px-6 transition-all duration-500 md:px-10 ${
//               scrolled ? "py-3" : "py-6"
//             }`}
//           >
//             <a
//               href="#top"
//               onClick={(e) => {
//                 e.preventDefault();
//                 if (onHome) onHome();
//                 scrollToId("#top");
//               }}
//               className={`flex items-center gap-2.5 rounded-full px-4 py-2 transition-all ${
//                 scrolled ? "glass" : ""
//               }`}
//             >
//               <span className="h-2 w-2 rounded-full bg-gold" />
//               <span className="font-display text-base tracking-tight">Khushbu T.</span>
//             </a>

//             <nav
//               className={`hidden items-center gap-1 rounded-full px-2 py-1.5 transition-all md:flex ${
//                 scrolled ? "glass" : ""
//               }`}
//             >
//               {LINKS.map(([label, id]) => (
//                 <a
//                   key={id}
//                   href={id}
//                   onClick={(e) => {
//                     e.preventDefault();
//                     if (onHome) onHome();
//                     scrollToId(id);
//                   }}
//                   className="relative rounded-full px-4 py-2 text-sm text-bone/75 transition-colors hover:text-bone"
//                 >
//                   {label}
//                 </a>
//               ))}
//             </nav>

//             <button
//               onClick={() => setOpen((o) => !o)}
//               className="glass flex h-10 w-10 items-center justify-center rounded-full md:hidden"
//               aria-label="Menu"
//             >
//               <div className="flex flex-col gap-1.5">
//                 <span
//                   className={`block h-px w-5 bg-bone transition-transform ${
//                     open ? "translate-y-[3px] rotate-45" : ""
//                   }`}
//                 />
//                 <span
//                   className={`block h-px w-5 bg-bone transition-transform ${
//                     open ? "-translate-y-[3px] -rotate-45" : ""
//                   }`}
//                 />
//               </div>
//             </button>
//           </div>

//           {/* Mobile menu */}
//           <AnimatePresence>
//             {open && (
//               <motion.nav
//                 initial={{ opacity: 0, y: -10 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 exit={{ opacity: 0, y: -10 }}
//                 className="glass mx-6 flex flex-col rounded-2xl p-4 md:hidden"
//               >
//                 {LINKS.map(([label, id]) => (
//                   <a
//                     key={id}
//                     href={id}
//                     onClick={(e) => {
//                       e.preventDefault();
//                       setOpen(false);
//                       if (onHome) onHome();
//                       scrollToId(id);
//                     }}
//                     className="rounded-xl px-4 py-3 text-lg text-bone/80 hover:bg-white/5 hover:text-bone"
//                   >
//                     {label}
//                   </a>
//                 ))}
//               </motion.nav>
//             )}
//           </AnimatePresence>
//         </motion.header>
//       )}
//     </AnimatePresence>
//   );
// }


// import { useEffect, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { scrollToId } from "../hooks/useLenis";

// const LINKS = [
//   ["About", "#about"],
//   ["Work", "#work"],
//   ["Process", "#process"],
//   ["Contact", "#contact"],
// ];

// export default function Navbar({ visible }) {
//   const [scrolled, setScrolled] = useState(false);
//   const [open, setOpen] = useState(false);

//   useEffect(() => {
//     const onScroll = () => setScrolled(window.scrollY > 40);
//     window.addEventListener("scroll", onScroll);
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   return (
//     <AnimatePresence>
//       {visible && (
//         <motion.header
//           initial={{ y: -80, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
//           className="fixed inset-x-0 top-0 z-50"
//         >
//           <div
//             className={`mx-auto flex items-center justify-between px-6 transition-all duration-500 md:px-10 ${
//               scrolled ? "py-3" : "py-6"
//             }`}
//           >
//             <a
//               href="#top"
//               onClick={(e) => {
//                 e.preventDefault();
//                 scrollToId("#top");
//               }}
//               className={`flex items-center gap-2.5 rounded-full px-4 py-2 transition-all ${
//                 scrolled ? "glass" : ""
//               }`}
//             >
//               <span className="h-2 w-2 rounded-full bg-gold" />
//               <span className="font-display text-base tracking-tight">Khushbu T.</span>
//             </a>

//             <nav
//               className={`hidden items-center gap-1 rounded-full px-2 py-1.5 transition-all md:flex ${
//                 scrolled ? "glass" : ""
//               }`}
//             >
//               {LINKS.map(([label, id]) => (
//                 <a
//                   key={id}
//                   href={id}
//                   onClick={(e) => {
//                     e.preventDefault();
//                     scrollToId(id);
//                   }}
//                   className="relative rounded-full px-4 py-2 text-sm text-bone/75 transition-colors hover:text-bone"
//                 >
//                   {label}
//                 </a>
//               ))}
//             </nav>

//             <button
//               onClick={() => setOpen((o) => !o)}
//               className="glass flex h-10 w-10 items-center justify-center rounded-full md:hidden"
//               aria-label="Menu"
//             >
//               <div className="flex flex-col gap-1.5">
//                 <span
//                   className={`block h-px w-5 bg-bone transition-transform ${
//                     open ? "translate-y-[3px] rotate-45" : ""
//                   }`}
//                 />
//                 <span
//                   className={`block h-px w-5 bg-bone transition-transform ${
//                     open ? "-translate-y-[3px] -rotate-45" : ""
//                   }`}
//                 />
//               </div>
//             </button>
//           </div>

//           {/* Mobile menu */}
//           <AnimatePresence>
//             {open && (
//               <motion.nav
//                 initial={{ opacity: 0, y: -10 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 exit={{ opacity: 0, y: -10 }}
//                 className="glass mx-6 flex flex-col rounded-2xl p-4 md:hidden"
//               >
//                 {LINKS.map(([label, id]) => (
//                   <a
//                     key={id}
//                     href={id}
//                     onClick={(e) => {
//                       e.preventDefault();
//                       setOpen(false);
//                       scrollToId(id);
//                     }}
//                     className="rounded-xl px-4 py-3 text-lg text-bone/80 hover:bg-white/5 hover:text-bone"
//                   >
//                     {label}
//                   </a>
//                 ))}
//               </motion.nav>
//             )}
//           </AnimatePresence>
//         </motion.header>
//       )}
//     </AnimatePresence>
//   );
// }
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { scrollToId } from "../hooks/useLenis";

const LINKS = [
  ["About", "#about"],
  ["Work", "#work"],
  ["Process", "#process"],
  ["Contact", "#contact"],
];

export default function Navbar({ visible, onNavigate }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.header
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-x-0 top-0 z-50"
        >
          <div
            className={`mx-auto flex items-center justify-between px-6 transition-all duration-500 md:px-10 ${
              scrolled ? "py-3" : "py-6"
            }`}
          >
            <a
              href="#top"
              onClick={(e) => {
                e.preventDefault();
                if (onNavigate) onNavigate("#top");
                else scrollToId("#top");
              }}
              className={`flex items-center gap-2.5 rounded-full px-4 py-2 transition-all ${
                scrolled ? "glass" : ""
              }`}
            >
              <span className="h-2 w-2 rounded-full bg-gold" />
              <span className="font-display text-base tracking-tight">Khushbu T.</span>
            </a>

            <nav
              className={`hidden items-center gap-1 rounded-full px-2 py-1.5 transition-all md:flex ${
                scrolled ? "glass" : ""
              }`}
            >
              {LINKS.map(([label, id]) => (
                <a
                  key={id}
                  href={id}
                  onClick={(e) => {
                    e.preventDefault();
                    if (onNavigate) onNavigate(id);
                    else scrollToId(id);
                  }}
                  className="relative rounded-full px-4 py-2 text-sm text-bone/75 transition-colors hover:text-bone"
                >
                  {label}
                </a>
              ))}
            </nav>

            <button
              onClick={() => setOpen((o) => !o)}
              className="glass flex h-10 w-10 items-center justify-center rounded-full md:hidden"
              aria-label="Menu"
            >
              <div className="flex flex-col gap-1.5">
                <span
                  className={`block h-px w-5 bg-bone transition-transform ${
                    open ? "translate-y-[3px] rotate-45" : ""
                  }`}
                />
                <span
                  className={`block h-px w-5 bg-bone transition-transform ${
                    open ? "-translate-y-[3px] -rotate-45" : ""
                  }`}
                />
              </div>
            </button>
          </div>

          {/* Mobile menu */}
          <AnimatePresence>
            {open && (
              <motion.nav
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="glass mx-6 flex flex-col rounded-2xl p-4 md:hidden"
              >
                {LINKS.map(([label, id]) => (
                  <a
                    key={id}
                    href={id}
                    onClick={(e) => {
                      e.preventDefault();
                      setOpen(false);
                      if (onNavigate) onNavigate(id);
                      else scrollToId(id);
                    }}
                    className="rounded-xl px-4 py-3 text-lg text-bone/80 hover:bg-white/5 hover:text-bone"
                  >
                    {label}
                  </a>
                ))}
              </motion.nav>
            )}
          </AnimatePresence>
        </motion.header>
      )}
    </AnimatePresence>
  );
}

