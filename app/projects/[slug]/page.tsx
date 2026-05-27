"use client";

import { notFound, useParams } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import { projects } from "@/lib/projects";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: [0.25, 0.46, 0.45, 0.94] },
});

export default function ProjectDetailPage() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) return notFound();

  const statusColor =
    project.status === "Live" ? "#4ade80" :
    project.status === "In Development" ? "#facc15" : "var(--m1)";

  const currentIndex = projects.indexOf(project);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <div className="min-h-screen" style={{ background: "var(--bg)" }}>
      <Navbar />

      <main className="max-w-4xl mx-auto px-6 pt-32 pb-24">

        <motion.div {...fadeUp(0.1)} className="mb-12">
          <Link
            href="/projects"
            className="flex items-center gap-2 text-sm transition-colors duration-200 w-fit"
            style={{ color: "var(--m4)" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--fg)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--m4)")}
          >
            <span>←</span>
            <span>Projects</span>
          </Link>
        </motion.div>

        <div className="mb-12">
          <motion.div {...fadeUp(0.15)} className="flex flex-wrap items-center gap-3 mb-4">
            <span className="text-xs tracking-[0.25em] uppercase" style={{ color: "var(--accent)" }}>
              {project.year}
            </span>
            <span style={{ color: "var(--m5)" }}>·</span>
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: statusColor }} />
              <span className="text-xs tracking-wide" style={{ color: statusColor }}>{project.status}</span>
            </span>
          </motion.div>

          <motion.h1
            {...fadeUp(0.2)}
            className="text-4xl md:text-6xl font-bold tracking-tight mb-6"
            style={{ fontFamily: "var(--font-space-grotesk)", color: "var(--fg)" }}
          >
            {project.title}
          </motion.h1>

          <motion.p
            {...fadeUp(0.3)}
            className="text-lg leading-8 max-w-2xl mb-8"
            style={{ color: "var(--m2)", fontFamily: "var(--font-manrope)" }}
          >
            {project.longDescription}
          </motion.p>

          <motion.div {...fadeUp(0.38)} className="flex flex-wrap items-center gap-6">
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-3 py-1.5 rounded-full"
                  style={{ background: "var(--bg-card)", border: "1px solid var(--border-soft)", color: "var(--m3)" }}
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-4">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm transition-colors duration-200"
                  style={{ color: "var(--m4)" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--fg)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "var(--m4)")}
                >
                  <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.38.6.11.82-.26.82-.58v-2.04c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.5 1 .1-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 3-.4c1.02.005 2.04.14 3 .4 2.28-1.55 3.29-1.23 3.29-1.23.66 1.66.25 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.21.7.82.58C20.56 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                  GitHub
                </a>
              )}
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm transition-colors duration-200"
                  style={{ color: "var(--accent)" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--fg)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "var(--accent)")}
                >
                  <svg width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                  Live Site
                </a>
              )}
            </div>
          </motion.div>
        </div>

        <motion.div
          {...fadeUp(0.45)}
          className="h-px w-full mb-12"
          style={{ background: "var(--border)" }}
        />

        {project.images.length > 0 && (
          <motion.div {...fadeUp(0.5)} className="flex flex-col gap-4 mb-16">
            {project.images.map((img, i) => (
              <div key={i} className="w-full rounded-xl overflow-hidden" style={{ border: "1px solid var(--border)" }}>
                <img src={img} alt={`${project.title} screenshot ${i + 1}`} className="w-full object-cover" />
              </div>
            ))}
          </motion.div>
        )}

        {project.images.length === 0 && (
          <motion.div
            {...fadeUp(0.5)}
            className="w-full rounded-xl mb-16 flex items-center justify-center"
            style={{ height: 320, background: project.gradient, border: "1px solid var(--border)" }}
          >
            <span className="text-sm tracking-widest uppercase" style={{ color: "#ffffff20" }}>
              No Preview Available
            </span>
          </motion.div>
        )}

        <motion.div {...fadeUp(0.6)}>
          <p className="text-xs tracking-[0.25em] uppercase mb-4" style={{ color: "var(--m4)" }}>
            Next Project
          </p>
          <Link href={`/projects/${nextProject.slug}`}>
            <motion.div
              className="group flex items-center justify-between py-6"
              style={{ borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}
              whileHover={{ x: 4 }}
              transition={{ duration: 0.2 }}
            >
              <span
                className="text-2xl font-bold group-hover:text-[#5987DE] transition-colors duration-300"
                style={{ fontFamily: "var(--font-space-grotesk)", color: "var(--fg)" }}
              >
                {nextProject.title}
              </span>
              <span className="group-hover:text-[#5987DE] transition-colors duration-300 text-xl" style={{ color: "var(--m4)" }}>→</span>
            </motion.div>
          </Link>
        </motion.div>

      </main>
    </div>
  );
}
