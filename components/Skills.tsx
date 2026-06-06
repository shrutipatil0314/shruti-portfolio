"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Sticker from "./Sticker";

const categories = [
  { icon: "☁️", title: "CLOUD PLATFORMS", tags: ["AWS", "GCP", "AZURE"], fill: 88 },
  { icon: "🐳", title: "CONTAINERS", tags: ["DOCKER", "KUBERNETES", "HELM"], fill: 92 },
  { icon: "🔄", title: "CI/CD", tags: ["JENKINS", "GH ACTIONS", "GITLAB CI", "ARGOCD"], fill: 85 },
  { icon: "📦", title: "IaC", tags: ["TERRAFORM", "ANSIBLE", "PULUMI"], fill: 80 },
  { icon: "📊", title: "MONITORING", tags: ["PROMETHEUS", "GRAFANA", "ELK STACK"], fill: 78 },
  { icon: "💻", title: "SCRIPTING", tags: ["BASH", "PYTHON", "YAML"], fill: 90 },
];

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="skills"
      ref={ref}
      style={{ padding: "6rem 6vw", background: "rgba(120,0,0,0.04)", position: "relative" }}
    >
      <div style={{ position: "absolute", top: "2rem", right: "3vw", zIndex: 5 }}>
        <Sticker emoji="🐳" rotate={-8} delay={0.8} />
      </div>
      <div style={{ position: "absolute", top: "6rem", right: "12vw", zIndex: 5 }}>
        <Sticker emoji="☸️" rotate={12} delay={1.5} />
      </div>

      <motion.h2
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
        ⚔ SKILL TREE
      </motion.h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "1.5rem",
        }}
      >
        {categories.map((cat, i) => (
          <motion.div
            key={cat.title}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            style={{
              border: "3px solid #780000",
              boxShadow: "4px 4px 0 #3d0000",
              background: "#ffffff",
              padding: "1.2rem",
            }}
          >
            <div
              style={{
                fontFamily: '"Press Start 2P", monospace',
                fontSize: 9,
                color: "#780000",
                marginBottom: "1rem",
                borderBottom: "2px solid #780000",
                paddingBottom: "0.6rem",
                letterSpacing: "0.05em",
              }}
            >
              {cat.icon} {cat.title}
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: "0.8rem" }}>
              {cat.tags.map((t) => (
                <span
                  key={t}
                  style={{
                    fontFamily: '"Press Start 2P", monospace',
                    fontSize: 7,
                    background: "#780000",
                    color: "#ffffff",
                    padding: "5px 8px",
                    border: "2px solid #3d0000",
                    letterSpacing: "0.04em",
                  }}
                >
                  {t}
                </span>
              ))}
            </div>
            {/* HP bar */}
            <div
              style={{
                background: "rgba(120,0,0,0.1)",
                border: "2px solid #780000",
                height: 14,
                overflow: "hidden",
              }}
            >
              <motion.div
                style={{ height: "100%", background: "#780000" }}
                initial={{ width: 0 }}
                animate={inView ? { width: `${cat.fill}%` } : { width: 0 }}
                transition={{ duration: 1.2, delay: 0.3 + i * 0.08, ease: "easeOut" }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
