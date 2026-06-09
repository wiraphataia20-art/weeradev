"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-6"
      style={{ background: "var(--nav-bg)", backdropFilter: "blur(12px)" }}
    >
      <Link
        href="/"
        className="text-sm font-semibold tracking-widest uppercase transition-colors duration-300"
        style={{ color: "var(--fg)" }}
        onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent2)")}
        onMouseLeave={(e) => (e.currentTarget.style.color = "var(--fg)")}
      >
        WEERAPHATDEV
      </Link>
      <div className="flex items-center gap-8">
        <Link
          href="/articles"
          className="text-sm tracking-wider uppercase transition-colors duration-300"
          style={{ color: "var(--m2)" }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "var(--fg)")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "var(--m2)")}
        >
          Articles
        </Link>
        <Link
          href="/projects"
          className="text-sm tracking-wider uppercase transition-colors duration-300"
          style={{ color: "var(--m2)" }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "var(--fg)")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "var(--m2)")}
        >
          Projects
        </Link>
        <Link
          href="/profile"
          className="text-sm tracking-wider uppercase transition-colors duration-300"
          style={{ color: "var(--m2)" }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "var(--fg)")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "var(--m2)")}
        >
          Profile
        </Link>
        <ThemeToggle />
      </div>
    </motion.nav>
  );
}
