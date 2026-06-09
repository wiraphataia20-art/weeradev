"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";

export default function ArticlesPage() {
  return (
    <div className="min-h-screen" style={{ background: "var(--bg)" }}>
      <Navbar />

      <main className="max-w-4xl mx-auto px-4 md:px-6 pt-28 md:pt-36 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mb-16"
        >
          <p className="text-xs tracking-[0.3em] uppercase mb-3" style={{ color: "var(--accent)" }}>
            My Writing
          </p>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight" style={{ fontFamily: "var(--font-space-grotesk)", color: "var(--fg)" }}>
            Articles
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-col items-center justify-center py-32 gap-4"
        >
          <p className="text-sm tracking-[0.3em] uppercase" style={{ color: "var(--m4)" }}>
            Coming Soon
          </p>
          <p className="text-sm" style={{ color: "var(--m4)" }}>
            Articles are on the way.
          </p>
        </motion.div>
      </main>
    </div>
  );
}
