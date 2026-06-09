"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import { projects } from "@/lib/projects";

function ProjectRow({ project, index }: {
  project: typeof projects[0];
  index: number;
}) {
  const statusColor =
    project.status === "Live" ? "#4ade80" :
    project.status === "In Development" ? "#facc15" : "var(--m1)";

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.55, delay: index * 0.08, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] }}
    >
      <Link href={`/projects/${project.slug}`}>
        <motion.div
          className="group grid grid-cols-[36px_1fr_auto] md:grid-cols-[48px_1fr_auto] gap-3 md:gap-6 py-6 md:py-8 cursor-pointer"
          style={{ borderTop: "1px solid var(--border)" }}
          whileHover={{ x: 4 }}
          transition={{ duration: 0.2 }}
        >
          <span
            className="text-xs font-mono mt-1 group-hover:text-[#5987DE] transition-colors duration-300"
            style={{ color: "var(--m4)" }}
          >
            {String(index + 1).padStart(2, "0")}
          </span>

          <div className="flex flex-col gap-3">
            <div className="flex flex-wrap items-center gap-4">
              <h2
                className="text-xl font-semibold group-hover:text-[#5987DE] transition-colors duration-300"
                style={{ fontFamily: "var(--font-space-grotesk)", color: "var(--fg)" }}
              >
                {project.title}
              </h2>
              <div className="flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full" style={{ background: statusColor }} />
                <span className="text-[11px]" style={{ color: statusColor }}>{project.status}</span>
              </div>
              <span className="text-[11px]" style={{ color: "var(--m4)" }}>{project.year}</span>
            </div>
            <p className="text-sm leading-6 max-w-xl" style={{ color: "var(--m3)" }}>
              {project.description}
            </p>
            <div className="flex flex-wrap gap-3">
              {project.tags.map((tag) => (
                <span key={tag} className="text-[11px] tracking-wide" style={{ color: "var(--m4)" }}>
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="flex items-center pt-1">
            <span className="group-hover:text-[#5987DE] transition-colors duration-300 text-lg" style={{ color: "var(--m4)" }}>
              →
            </span>
          </div>
        </motion.div>
      </Link>
    </motion.div>
  );
}

export default function ProjectsPage() {
  return (
    <div className="min-h-screen" style={{ background: "var(--bg)" }}>
      <Navbar />

      <main className="max-w-4xl mx-auto px-4 md:px-6 pt-28 md:pt-36 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] }}
          className="mb-16"
        >
          <p className="text-xs tracking-[0.3em] uppercase mb-3" style={{ color: "var(--accent)" }}>
            My Work
          </p>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight" style={{ fontFamily: "var(--font-space-grotesk)", color: "var(--fg)" }}>
            Projects
          </h1>
        </motion.div>

        <div>
          {[...projects].reverse().map((project, i) => (
            <ProjectRow key={project.slug} project={project} index={projects.length - 1 - i} />
          ))}
          <div style={{ borderTop: "1px solid var(--border)" }} />
        </div>
      </main>
    </div>
  );
}
