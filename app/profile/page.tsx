"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: [0.25, 0.46, 0.45, 0.94] },
});

const techStack = [
  "HTML5", "CSS3", "JavaScript", "TypeScript",
  "React", "Next.js", "Tailwind CSS", "Node.js",
  "MySQL", "Git & GitHub",
];

export default function ProfilePage() {
  return (
    <div className="min-h-screen flex" style={{ background: "var(--bg)" }}>
      <Navbar />

      {/* Left — sticky full-height photo */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="hidden md:block w-[38%] shrink-0 sticky top-0 h-screen"
      >
        <img
          src="/profile.png"
          alt="Weerapat"
          className="w-full h-full object-cover object-top"
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "linear-gradient(to right, transparent 70%, var(--bg) 100%)" }}
        />
      </motion.div>

      {/* Right — scrollable content */}
      <div className="flex-1 px-12 md:px-16 pt-36 pb-24 flex flex-col gap-12">

        <motion.p {...fadeUp(0.15)} className="text-xs tracking-[0.3em] uppercase" style={{ color: "var(--accent)" }}>
          Profile
        </motion.p>

        <div>
          <motion.h1
            {...fadeUp(0.25)}
            className="text-5xl md:text-6xl font-bold tracking-tight mb-5"
            style={{ fontFamily: "var(--font-space-grotesk)", color: "var(--fg)" }}
          >
            Weerapat Iamsanit
          </motion.h1>

          <motion.div {...fadeUp(0.35)} className="flex flex-wrap items-center gap-2">
            {["Computer Engineering Student", "Web Developer", "Creator"].map((role, i) => (
              <span key={role} className="flex items-center gap-2">
                <span className="text-sm" style={{ color: "var(--m3)", fontFamily: "var(--font-manrope)" }}>
                  {role}
                </span>
                {i < 2 && <span style={{ color: "var(--m5)" }}>·</span>}
              </span>
            ))}
          </motion.div>
        </div>

        <motion.div {...fadeUp(0.4)} className="h-px w-full" style={{ background: "var(--border)" }} />

        <motion.div {...fadeUp(0.45)} className="flex flex-col gap-4 max-w-xl">
          <p className="text-base leading-8" style={{ color: "var(--m1)", fontFamily: "var(--font-manrope)" }}>
            Passionate about modern web development, technology, and creating meaningful digital experiences.
          </p>
          <p className="text-base leading-8" style={{ color: "var(--m3)", fontFamily: "var(--font-manrope)" }}>
            I enjoy building clean and responsive applications while continuously learning new technologies through real-world projects and development challenges.
          </p>
        </motion.div>

        <motion.div {...fadeUp(0.55)}>
          <p className="text-xs tracking-[0.25em] uppercase mb-4" style={{ color: "var(--m4)" }}>
            Tech Stack
          </p>
          <div className="flex flex-wrap gap-2">
            {techStack.map((tech, i) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.6 + i * 0.04 }}
                className="text-sm px-4 py-1.5 rounded-full cursor-default transition-colors duration-200"
                style={{ background: "var(--bg-card)", border: "1px solid var(--border-soft)", color: "var(--m2)", fontFamily: "var(--font-manrope)" }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = "#5987DE44"; e.currentTarget.style.color = "var(--accent)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = "var(--border-soft)"; e.currentTarget.style.color = "var(--m2)"; }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>

        <motion.div {...fadeUp(0.65)}>
          <p className="text-xs tracking-[0.25em] uppercase mb-4" style={{ color: "var(--m4)" }}>
            Education
          </p>
          <div
            className="px-5 py-4 rounded-xl max-w-xl"
            style={{ background: "var(--bg-card)", border: "1px solid var(--border)" }}
          >
            <p className="text-sm font-semibold mb-1" style={{ fontFamily: "var(--font-space-grotesk)", color: "var(--fg)" }}>
              Pibulsongkram Rajabhat University
            </p>
            <p className="text-sm mb-1" style={{ color: "var(--m3)", fontFamily: "var(--font-manrope)" }}>
              Bachelor of Engineering · Computer Engineering
            </p>
            <p className="text-xs" style={{ color: "var(--m4)", fontFamily: "var(--font-manrope)" }}>
              PSRU · Currently Studying
            </p>
          </div>
        </motion.div>

        <motion.div {...fadeUp(0.75)} className="flex items-center gap-5">
          <a
            href="https://github.com/wiraphataia20-art"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors duration-200"
            style={{ color: "var(--m4)" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--fg)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--m4)")}
          >
            <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.38.6.11.82-.26.82-.58v-2.04c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.5 1 .1-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 3-.4c1.02.005 2.04.14 3 .4 2.28-1.55 3.29-1.23 3.29-1.23.66 1.66.25 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.21.7.82.58C20.56 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
            </svg>
          </a>
          <a
            href="mailto:wiraphat.aia20@gmail.com"
            className="transition-colors duration-200"
            style={{ color: "var(--m4)" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--fg)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--m4)")}
          >
            <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <polyline points="2,4 12,13 22,4" />
            </svg>
          </a>
        </motion.div>

      </div>
    </div>
  );
}
