"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Sticker from "./Sticker";

const stats = [
  { icon: "🚀", num: "2+", label: "Years Experience" },
  { icon: "⚙️", num: "15+", label: "Projects Deployed" },
  { icon: "☁️", num: "3", label: "Cloud Platforms" },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" ref={ref} style={{ padding: "6rem 6vw", position: "relative" }}>
      <div style={{ position: "absolute", top: "2rem", right: "4vw", zIndex: 5 }}>
        <Sticker emoji="🔧" rotate={10} delay={0.5} />
      </div>

      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        style={{
          fontFamily: '"Press Start 2P", monospace',
          fontSize: "clamp(14px, 2.5vw, 24px)",
          color: "#780000",
          textShadow: "3px 3px 0 #3d0000",
          marginBottom: "3rem",
          display: "inline-block",
          borderBottom: "4px solid #780000",
          paddingBottom: "0.5rem",
        }}
      >
        // ABOUT.EXE
      </motion.h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1.5fr",
          gap: "4rem",
          alignItems: "start",
        }}
        className="about-grid"
      >
        {/* Photo frame */}
<motion.div
  initial={{ opacity: 0, x: -30 }}
  animate={inView ? { opacity: 1, x: 0 } : {}}
  transition={{ duration: 0.6, delay: 0.1 }}
>
  <div
    style={{
      border: "4px dashed #780000",
      padding: "6px",
      position: "relative",
      maxWidth: 320,
      boxShadow: "6px 6px 0 #3d0000",
    }}
  >
    <div
      style={{
        position: "absolute",
        top: -10,
        left: -10,
        fontSize: 18,
        color: "#780000",
      }}
    >
      ■
    </div>
    <div
      style={{
        position: "absolute",
        bottom: -10,
        right: -10,
        fontSize: 18,
        color: "#780000",
      }}
    >
      ■
    </div>
    <img
      src="/photo.jpg"
      alt="Shruti Patil"
      style={{
        width: "100%",
        display: "block",
        imageRendering: "pixelated",
      }}
    />
  </div>
</motion.div>

        {/* Bio */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p
            style={{
              fontFamily: "VT323, monospace",
              fontSize: 22,
              lineHeight: 1.7,
              color: "#3d0000",
              marginBottom: "2rem",
            }}
          >
            Hi! I&apos;m Shruti, a DevOps Engineer passionate about automating
            everything, building robust CI/CD pipelines, and scaling cloud
            infrastructure. I turn complex deployments into smooth, repeatable
            processes.
            <br />
            <br />
            When I&apos;m not wrangling YAML configs or tracing Prometheus
            alerts, I&apos;m probably contributing to open-source tools or
            dreaming up new automation workflows.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "1rem",
            }}
            className="stat-cards"
          >
            {stats.map((s, i) => (
              <motion.div
                key={s.num}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                style={{
                  border: "3px solid #780000",
                  boxShadow: "4px 4px 0 #3d0000",
                  padding: "1rem 0.8rem",
                  textAlign: "center",
                  background: "#ffffff",
                }}
              >
                <span style={{ fontSize: 28, display: "block", marginBottom: "0.5rem" }}>
                  {s.icon}
                </span>
                <span
                  style={{
                    fontFamily: '"Press Start 2P", monospace',
                    fontSize: 11,
                    color: "#780000",
                    display: "block",
                    marginBottom: "0.3rem",
                  }}
                >
                  {s.num}
                </span>
                <span
                  style={{
                    fontFamily: "VT323, monospace",
                    fontSize: 18,
                    color: "#3d0000",
                  }}
                >
                  {s.label}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .about-grid { grid-template-columns: 1fr !important; }
          .stat-cards { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 540px) {
          .stat-cards { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
