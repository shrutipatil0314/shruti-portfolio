"use client";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Sticker from "./Sticker";
import PixelTerminal from "./PixelTerminal";

const phrases = ["CI/CD Architect", "Cloud Engineer", "Pipeline Builder", "Infra Wizard"];

export default function Hero() {
  const twRef = useRef<HTMLSpanElement>(null);
  const state = useRef({ pi: 0, ci: 0, deleting: false });

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    function step() {
      const s = state.current;
      const cur = phrases[s.pi];
      if (!s.deleting) {
        if (twRef.current) twRef.current.textContent = cur.slice(0, s.ci + 1);
        s.ci++;
        if (s.ci === cur.length) {
          s.deleting = true;
          timer = setTimeout(step, 1600);
        } else {
          timer = setTimeout(step, 80);
        }
      } else {
        if (twRef.current) twRef.current.textContent = cur.slice(0, s.ci - 1);
        s.ci--;
        if (s.ci === 0) {
          s.deleting = false;
          s.pi = (s.pi + 1) % phrases.length;
          timer = setTimeout(step, 400);
        } else {
          timer = setTimeout(step, 45);
        }
      }
    }
    step();
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="hero"
      className="scanline"
      style={{
        minHeight: "100vh",
        padding: "80px 6vw 4rem",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "4rem",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Stickers */}
      <div style={{ position: "absolute", top: 100, right: "6vw", zIndex: 5 }}>
        <Sticker emoji="🐧" rotate={8} delay={0} />
      </div>
      <div style={{ position: "absolute", bottom: 120, left: "2vw", zIndex: 5 }}>
        <Sticker emoji="🚀" rotate={-5} delay={1.2} />
      </div>

      {/* Left */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        style={{ position: "relative", zIndex: 2 }}
      >
        <div
          style={{
            fontFamily: '"Press Start 2P", monospace',
            fontSize: 8,
            background: "#780000",
            color: "#FFF6F2",
            padding: "8px 14px",
            border: "3px solid #3d0000",
            boxShadow: "3px 3px 0 #3d0000",
            display: "inline-block",
            marginBottom: "1.5rem",
            letterSpacing: "0.08em",
          }}
        >
          ▶ PLAYER 1 — DEVOPS ENGINEER
        </div>

        <h1
          style={{
            fontFamily: '"Press Start 2P", monospace',
            fontSize: "clamp(22px, 4vw, 44px)",
            color: "#780000",
            textShadow: "4px 4px 0 #3d0000",
            lineHeight: 1.4,
            marginBottom: "1.2rem",
          }}
        >
          SHRUTI
          <br />
          PATIL
        </h1>

        <div
          style={{
            fontFamily: "VT323, monospace",
            fontSize: 28,
            color: "#1a3a6b",
            marginBottom: "1rem",
            minHeight: 36,
          }}
        >
          <span ref={twRef} />
          <span
            style={{
              display: "inline-block",
              width: 12,
              height: 24,
              background: "#780000",
              verticalAlign: "middle",
              marginLeft: 3,
            }}
            className="animate-blink"
          />
        </div>

        <p
          style={{
            fontFamily: "VT323, monospace",
            fontSize: 22,
            color: "#3d0000",
            opacity: 0.8,
            marginBottom: "2rem",
          }}
        >
          Deploying reliable systems, one pipeline at a time.
        </p>

        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
         <a 
  href="/cv.pdf" 
  download="Shruti_Patil_CV.pdf"
  className="pixel-btn-outline"
>
  ↓ DOWNLOAD CV
</a>
        </div>
      </motion.div>

      {/* Right — Terminal */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        style={{ position: "relative", zIndex: 2 }}
      >
        <PixelTerminal />
      </motion.div>

      <style>{`
        @media (max-width: 900px) {
          #hero { grid-template-columns: 1fr !important; }
          #hero > div:last-child { display: none; }
        }
      `}</style>
    </section>
  );
}
