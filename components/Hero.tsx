"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const videos = ["/video1.mp4", "/video2.mp4"];
const DARK_PAUSE_MS = 5000;
const FADE_MS = 1500;

function VideoBg() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [opacity, setOpacity] = useState(1);
  const refs = [useRef<HTMLVideoElement>(null), useRef<HTMLVideoElement>(null)];
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);

  useEffect(() => {
    refs[0].current?.play();
    return () => timers.current.forEach(clearTimeout);
  }, []);

  const handleEnded = (index: number) => {
    if (index !== currentIdx) return;
    const next = (index + 1) % videos.length;

    // 1. Fade out
    setOpacity(0);

    // 2. After fade, wait dark pause, then switch & fade in
    const t1 = setTimeout(() => {
      const t2 = setTimeout(() => {
        setCurrentIdx(next);
        refs[next].current!.currentTime = 0;
        refs[next].current?.play();

        const t3 = setTimeout(() => setOpacity(1), 100);
        timers.current.push(t3);
      }, DARK_PAUSE_MS);
      timers.current.push(t2);
    }, FADE_MS);
    timers.current.push(t1);
  };

  return (
    <>
      {videos.map((src, i) => (
        <video
          key={src}
          ref={refs[i]}
          src={src}
          muted
          playsInline
          onEnded={() => handleEnded(i)}
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          style={{
            opacity: currentIdx === i ? opacity : 0,
            transition: `opacity ${FADE_MS}ms ease-in-out`,
          }}
        />
      ))}
    </>
  );
}

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] },
});

function Typewriter({ text, startDelay = 0 }: { text: string; startDelay?: number }) {
  const [displayed, setDisplayed] = useState("");
  const [cursor, setCursor] = useState(true);
  const rafRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    let cancelled = false;

    const sleep = (ms: number) => new Promise<void>((res) => {
      rafRef.current = setTimeout(res, ms);
    });

    async function run() {
      await sleep(startDelay * 1000);

      while (!cancelled) {
        // Type forward
        for (let i = 1; i <= text.length; i++) {
          if (cancelled) return;
          setDisplayed(text.slice(0, i));
          await sleep(60);
        }

        // Hold
        await sleep(2500);

        // Erase
        for (let i = text.length - 1; i >= 0; i--) {
          if (cancelled) return;
          setDisplayed(text.slice(0, i));
          await sleep(35);
        }

        // Pause before next loop
        await sleep(600);
      }
    }

    run();

    return () => {
      cancelled = true;
      if (rafRef.current) clearTimeout(rafRef.current);
    };
  }, [text, startDelay]);

  useEffect(() => {
    const blink = setInterval(() => setCursor((c) => !c), 500);
    return () => clearInterval(blink);
  }, []);

  return (
    <span>
      {displayed}
      <span style={{ color: "#00d4ff", marginLeft: "1px", opacity: displayed.length === 0 ? 0 : cursor ? 1 : 0 }}>|</span>
    </span>
  );
}

export default function Hero() {
  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center px-6 text-center overflow-hidden">

      {/* Video background */}
      <VideoBg />

      {/* Dark overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "rgba(0,0,0,0.82)" }}
      />

      {/* Radial fade edges */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 80% 80% at 50% 50%, transparent 40%, #0a0a0a 100%)",
        }}
      />

      {/* Name */}
      <motion.div {...fadeUp(0.2)} className="relative mb-6 z-10">
        <h1 className="text-[clamp(2rem,12vw,11rem)] font-black leading-none tracking-tighter select-none">
          <span style={{ color: "#EBEBEB", fontFamily: "var(--font-playfair)", fontStyle: "italic" }}>WEERAPHAT</span>
          <span className="glow-text" style={{ color: "#5987DE", fontFamily: "var(--font-playfair)", fontStyle: "italic" }}>DEV</span>
        </h1>
      </motion.div>

      {/* Roles */}
      <motion.div {...fadeUp(0.45)} className="relative flex items-center gap-3 mb-8 z-10">
        <div className="h-px w-10" style={{ background: "#2a2a2a" }} />
        <p className="text-xs tracking-[0.3em] uppercase" style={{ color: "#555" }}>
          Learning&nbsp;&nbsp;·&nbsp;&nbsp;Building&nbsp;&nbsp;·&nbsp;&nbsp;Evolving
        </p>
        <div className="h-px w-10" style={{ background: "#2a2a2a" }} />
      </motion.div>

      {/* Tagline — typewriter */}
      <motion.p
        {...fadeUp(0.65)}
        className="relative text-xl md:text-2xl font-light italic z-10"
        style={{ color: "#bbb" }}
      >
        <Typewriter text="Turning ideas into reality." startDelay={1.1} />
      </motion.p>


    </main>
  );
}
