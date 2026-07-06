// // import { useEffect, useState } from "react";
// // import useLenis from "./hooks/useLenis";
// // import { ScrollTrigger } from "./lib/gsap";

// // import Cursor from "./components/Cursor";
// // import Navbar from "./components/Navbar";
// // import CinematicIntro from "./components/sections/CinematicIntro";
// // import Hero from "./components/sections/Hero";
// // import About from "./components/sections/About";
// // import FeaturedWork from "./components/sections/FeaturedWork";
// // import DigitalUH from "./components/sections/DigitalUH";
// // import Fusion36 from "./components/sections/Fusion36";
// // import Process from "./components/sections/Process";
// // import Skills from "./components/sections/Skills";
// // import Experience from "./components/sections/Experience";
// // import Contact from "./components/sections/Contact";
// // import Creative from "./components/sections/Interest";
// // export default function App() {
// //   const [introDone, setIntroDone] = useState(false);
// //   useLenis();

// //   // Lock scroll during intro
// //   useEffect(() => {
// //     if (!introDone && window.__lenis) window.__lenis.stop();
// //     if (introDone && window.__lenis) window.__lenis.start();
// //   }, [introDone]);

// //   // Recalculate pinned/scroll positions once everything (incl. fonts) is in
// //   useEffect(() => {
// //     const refresh = () => ScrollTrigger.refresh();
// //     const t = setTimeout(refresh, 400);
// //     if (document.fonts && document.fonts.ready) document.fonts.ready.then(refresh);
// //     window.addEventListener("load", refresh);
// //     return () => {
// //       clearTimeout(t);
// //       window.removeEventListener("load", refresh);
// //     };
// //   }, [introDone]);

// //   return (
// //     <>
// //       <div className="grain" />
// //       <Cursor />
// //       {!introDone && <CinematicIntro onComplete={() => setIntroDone(true)} />}
// //       <Navbar visible={introDone} />

// //       <main>
// //         <Hero ready={introDone} />
// //         <About />
// //         <FeaturedWork />
// //         <DigitalUH />
// //         <Fusion36 />
// //         <Process />
// //         <Skills />
// //         <Creative />
// //         <Experience />
// //         <Contact />
        
// //       </main>
// //     </>
// //   );
// // }
// import { useEffect, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import useLenis from "./hooks/useLenis";
// import { ScrollTrigger } from "./lib/gsap";

// import Cursor from "./components/Cursor";
// import Navbar from "./components/Navbar";
// import CinematicIntro from "./components/sections/CinematicIntro";
// import Hero from "./components/sections/Hero";
// import About from "./components/sections/About";
// import FeaturedWork from "./components/sections/FeaturedWork";
// import DigitalUH from "./components/sections/DigitalUH";
// import Fusion36 from "./components/sections/Fusion36";
// import Process from "./components/sections/Process";
// import Skills from "./components/sections/Skills";
// import Experience from "./components/sections/Experience";
// import Contact from "./components/sections/Contact";
// import Creative from "./components/sections/Interest";

// // Order projects are presented in for Prev/Next case-study navigation.
// const PROJECT_ORDER = ["digitaluh", "fusion36"];

// const PAGE_TRANSITION = {
//   initial: { opacity: 0, scale: 0.985 },
//   animate: { opacity: 1, scale: 1 },
//   exit: { opacity: 0, scale: 0.985 },
//   transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
// };

// export default function App() {
//   const [introDone, setIntroDone] = useState(false);
//   // null = homepage. "digitaluh" | "fusion36" = dedicated, standalone
//   // project case-study view with the rest of the portfolio hidden.
//   const [activeProject, setActiveProject] = useState(null);
//   useLenis();

//   // Lock scroll during intro
//   useEffect(() => {
//     if (!introDone && window.__lenis) window.__lenis.stop();
//     if (introDone && window.__lenis) window.__lenis.start();
//   }, [introDone]);

//   // Recalculate pinned/scroll positions once everything (incl. fonts) is in,
//   // and again whenever we switch between homepage and a project view.
//   useEffect(() => {
//     const refresh = () => ScrollTrigger.refresh();
//     const t = setTimeout(refresh, 400);
//     if (document.fonts && document.fonts.ready) document.fonts.ready.then(refresh);
//     window.addEventListener("load", refresh);
//     return () => {
//       clearTimeout(t);
//       window.removeEventListener("load", refresh);
//     };
//   }, [introDone, activeProject]);

//   const openProject = (key) => {
//     setActiveProject(key);
//     window.scrollTo({ top: 0, behavior: "auto" });
//   };

//   const closeProject = () => {
//     setActiveProject(null);
//     window.scrollTo({ top: 0, behavior: "auto" });
//   };

//   const goToProject = (key) => {
//     setActiveProject(key);
//     window.scrollTo({ top: 0, behavior: "auto" });
//   };

//   const projectIndex = PROJECT_ORDER.indexOf(activeProject);
//   const prevKey = projectIndex > 0 ? PROJECT_ORDER[projectIndex - 1] : null;
//   const nextKey =
//     projectIndex >= 0 && projectIndex < PROJECT_ORDER.length - 1
//       ? PROJECT_ORDER[projectIndex + 1]
//       : null;

//   return (
//     <>
//       <div className="grain" />
//       <Cursor />
//       {!introDone && <CinematicIntro onComplete={() => setIntroDone(true)} />}
//       <Navbar visible={introDone} onHome={activeProject ? closeProject : undefined} />

//       <AnimatePresence mode="wait">
//         {activeProject ? (
//           // ── Dedicated project case-study view ──
//           // Only the selected project renders; every other homepage
//           // section is unmounted so the recruiter stays immersed in it.
//           <motion.main key={activeProject} {...PAGE_TRANSITION}>
//             {activeProject === "digitaluh" && (
//               <DigitalUH
//                 onBack={closeProject}
//                 onNext={nextKey ? () => goToProject(nextKey) : undefined}
//               />
//             )}
//             {activeProject === "fusion36" && (
//               <Fusion36
//                 onBack={closeProject}
//                 onPrev={prevKey ? () => goToProject(prevKey) : undefined}
//                 onNext={nextKey ? () => goToProject(nextKey) : undefined}
//               />
//             )}
//           </motion.main>
//         ) : (
//           // ── Homepage — unchanged from the original single-page layout ──
//           <motion.main key="home" {...PAGE_TRANSITION}>
//             <Hero ready={introDone} />
//             <About />
//             <FeaturedWork onOpenProject={openProject} />
//             <Process />
//             <Skills />
//             <Creative />
//             <Experience />
//             <Contact />
//           </motion.main>
//         )}
//       </AnimatePresence>
//     </>
//   );
// }



// import { useEffect, useState } from "react";
// import useLenis from "./hooks/useLenis";
// import { ScrollTrigger } from "./lib/gsap";

// import Cursor from "./components/Cursor";
// import Navbar from "./components/Navbar";
// import CinematicIntro from "./components/sections/CinematicIntro";
// import Hero from "./components/sections/Hero";
// import About from "./components/sections/About";
// import FeaturedWork from "./components/sections/FeaturedWork";
// import DigitalUH from "./components/sections/DigitalUH";
// import Fusion36 from "./components/sections/Fusion36";
// import Process from "./components/sections/Process";
// import Skills from "./components/sections/Skills";
// import Experience from "./components/sections/Experience";
// import Contact from "./components/sections/Contact";
// import Creative from "./components/sections/Interest";
// export default function App() {
//   const [introDone, setIntroDone] = useState(false);
//   useLenis();

//   // Lock scroll during intro
//   useEffect(() => {
//     if (!introDone && window.__lenis) window.__lenis.stop();
//     if (introDone && window.__lenis) window.__lenis.start();
//   }, [introDone]);

//   // Recalculate pinned/scroll positions once everything (incl. fonts) is in
//   useEffect(() => {
//     const refresh = () => ScrollTrigger.refresh();
//     const t = setTimeout(refresh, 400);
//     if (document.fonts && document.fonts.ready) document.fonts.ready.then(refresh);
//     window.addEventListener("load", refresh);
//     return () => {
//       clearTimeout(t);
//       window.removeEventListener("load", refresh);
//     };
//   }, [introDone]);

//   return (
//     <>
//       <div className="grain" />
//       <Cursor />
//       {!introDone && <CinematicIntro onComplete={() => setIntroDone(true)} />}
//       <Navbar visible={introDone} />

//       <main>
//         <Hero ready={introDone} />
//         <About />
//         <FeaturedWork />
//         <DigitalUH />
//         <Fusion36 />
//         <Process />
//         <Skills />
//         <Creative />
//         <Experience />
//         <Contact />
        
//       </main>
//     </>
//   );
// }
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import useLenis, { scrollToId } from "./hooks/useLenis";
import { ScrollTrigger } from "./lib/gsap";

import Cursor from "./components/Cursor";
import Navbar from "./components/Navbar";
import CinematicIntro from "./components/sections/CinematicIntro";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import FeaturedWork from "./components/sections/FeaturedWork";
import DigitalUH from "./components/sections/DigitalUH";
import Fusion36 from "./components/sections/Fusion36";
import Process from "./components/sections/Process";
import Skills from "./components/sections/Skills";
import Experience from "./components/sections/Experience";
import Contact from "./components/sections/Contact";
import Creative from "./components/sections/Interest";

// Order projects are presented in for Prev/Next case-study navigation.
const PROJECT_ORDER = ["digitaluh", "fusion36"];

const PAGE_TRANSITION = {
  initial: { opacity: 0, scale: 0.985 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.985 },
  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
};

export default function App() {
  const [introDone, setIntroDone] = useState(false);
  // null = homepage. "digitaluh" | "fusion36" = dedicated, standalone
  // project case-study view with the rest of the portfolio hidden.
  const [activeProject, setActiveProject] = useState(null);
  // Holds a homepage anchor (e.g. "#contact") that should be scrolled to
  // as soon as we've exited a project view and the homepage has mounted.
  const [pendingScroll, setPendingScroll] = useState(null);
  useLenis();

  // Lock scroll during intro
  useEffect(() => {
    if (!introDone && window.__lenis) window.__lenis.stop();
    if (introDone && window.__lenis) window.__lenis.start();
  }, [introDone]);

  // Recalculate pinned/scroll positions once everything (incl. fonts) is in,
  // and again whenever we switch between homepage and a project view.
  useEffect(() => {
    const refresh = () => ScrollTrigger.refresh();
    const t = setTimeout(refresh, 400);
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(refresh);
    window.addEventListener("load", refresh);
    return () => {
      clearTimeout(t);
      window.removeEventListener("load", refresh);
    };
  }, [introDone, activeProject]);

  const openProject = (key) => {
    window.scrollTo(0, 0);
  
    requestAnimationFrame(() => {
      setActiveProject(key);
  
      requestAnimationFrame(() => {
        window.scrollTo(0, 0);
  
        if (window.__lenis) {
          window.__lenis.scrollTo(0, {
            immediate: true,
          });
        }
  
        ScrollTrigger.refresh();
      });
    });
  };

  const closeProject = () => {
    window.scrollTo(0, 0);
  
    requestAnimationFrame(() => {
      setActiveProject(null);
  
      requestAnimationFrame(() => {
        window.scrollTo(0, 0);
  
        if (window.__lenis) {
          window.__lenis.scrollTo(0, {
            immediate: true,
          });
        }
  
        ScrollTrigger.refresh();
      });
    });
  };

  const goToProject = (key) => {
    window.scrollTo(0, 0);
  
    requestAnimationFrame(() => {
      setActiveProject(key);
  
      requestAnimationFrame(() => {
        window.scrollTo(0, 0);
  
        if (window.__lenis) {
          window.__lenis.scrollTo(0, {
            immediate: true,
          });
        }
  
        ScrollTrigger.refresh();
      });
    });
  };

  // Single entry point the Navbar (and anything else) uses to go to a
  // homepage anchor like "#about" or "#contact". Works identically whether
  // we're already on the homepage or currently inside a project view —
  // in the latter case it exits the project first, then scrolls once the
  // homepage sections have actually mounted.
  const navigateTo = (id) => {
    if (activeProject) {
      setPendingScroll(id);
      setActiveProject(null);
    } else {
      scrollToId(id);
    }
  };

  // Runs once the project's exit transition has fully finished and the
  // homepage has mounted in its place — ensures the target section
  // actually exists in the DOM before Lenis tries to scroll to it.
  const handleExitComplete = () => {
    if (!pendingScroll) return;
    const id = pendingScroll;
    setPendingScroll(null);
    requestAnimationFrame(() => {
      ScrollTrigger.refresh();
      scrollToId(id);
    });
  };

  const projectIndex = PROJECT_ORDER.indexOf(activeProject);
  const prevKey = projectIndex > 0 ? PROJECT_ORDER[projectIndex - 1] : null;
  const nextKey =
    projectIndex >= 0 && projectIndex < PROJECT_ORDER.length - 1
      ? PROJECT_ORDER[projectIndex + 1]
      : null;

  return (
    <>
      <div className="grain" />
      <Cursor />
      {!introDone && <CinematicIntro onComplete={() => setIntroDone(true)} />}
      <Navbar visible={introDone} onNavigate={navigateTo} />

      <AnimatePresence mode="wait" onExitComplete={handleExitComplete}>
        {activeProject ? (
          // ── Dedicated project case-study view ──
          // Only the selected project renders; every other homepage
          // section is unmounted so the recruiter stays immersed in it.
          <motion.main key={activeProject} {...PAGE_TRANSITION}>
            {activeProject === "digitaluh" && (
              <DigitalUH
                onBack={closeProject}
                onNext={nextKey ? () => goToProject(nextKey) : undefined}
              />
            )}
            {activeProject === "fusion36" && (
              <Fusion36
                onBack={closeProject}
                onPrev={prevKey ? () => goToProject(prevKey) : undefined}
                onNext={nextKey ? () => goToProject(nextKey) : undefined}
              />
            )}
          </motion.main>
        ) : (
          // ── Homepage — unchanged from the original single-page layout ──
          <motion.main key="home" {...PAGE_TRANSITION}>
            <Hero ready={introDone} />
            <About />
            <FeaturedWork onOpenProject={openProject} />
            <Process />
            <Skills />
            <Creative />
            <Experience />
            <Contact />
          </motion.main>
        )}
      </AnimatePresence>
    </>
  );
}
