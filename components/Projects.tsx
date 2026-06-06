"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const projects = [
  {
    icon: "⚖️",
    name: "K8S AUTO-SCALER",
    desc: "Auto-scaling Kubernetes clusters based on custom Prometheus metrics. Dynamic HPA with external metrics adapter.",
    tags: ["KUBERNETES", "PROMETHEUS", "PYTHON", "HELM"],
    bannerBg: "#780000",
    github: "#",
    demo: "#",
  },
  {
    icon: "📊",
    name: "CI/CD DASHBOARD",
    desc: "Real-time pipeline monitoring dashboard with multi-provider support. Jenkins + GitHub Actions unified view.",
    tags: ["REACT", "JENKINS", "GRAFANA", "NODE.JS"],
    bannerBg: "#1a3a6b",
    github: "#",
    demo: "#",
  },
  {
    icon: "📦",
    name: "INFRA-AS-CODE BOILERPLATE",
    desc: "Production-ready Terraform + Ansible starter templates for AWS, GCP, and Azure multi-cloud deployments.",
    tags: ["TERRAFORM", "ANSIBLE", "AWS", "GCP"],
    bannerBg: "#780000",
    github: "#",
    demo: "#",
  },
];

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="projects"
      ref={ref}
      style={{ padding: "6rem 6vw", background: "rgba(120,0,0,0.04)" }}
    >
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
        🗺 SIDE QUESTS
      </motion.h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "1.5rem",
        }}
      >
        {projects.map((p, i) => (
          <motion.div
            key={p.name}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            style={{
              border: "3px solid #780000",
              boxShadow: "4px 4px 0 #3d0000",
              background: "#ffffff",
              display: "flex",
              flexDirection: "column",
              overflow: "hidden",
            }}
          >
            {/* Banner */}
            <div
              style={{
                background: p.bannerBg,
                padding: "1.2rem",
                display: "flex",
                alignItems: "center",
                gap: 10,
                borderBottom: `3px solid ${p.bannerBg === "#780000" ? "#3d0000" : "#0d2248"}`,
              }}
            >
              <span style={{ fontSize: 28 }}>{p.icon}</span>
              <div
                style={{
                  fontFamily: '"Press Start 2P", monospace',
                  fontSize: 9,
                  color: "#ffffff",
                  lineHeight: 1.6,
                }}
              >
                {p.name}
              </div>
            </div>

            {/* Body */}
            <div style={{ padding: "1.2rem", flex: 1, display: "flex", flexDirection: "column" }}>
              <p
                style={{
                  fontFamily: "VT323, monospace",
                  fontSize: 21,
                  lineHeight: 1.6,
                  color: "#3d0000",
                  marginBottom: "1rem",
                  flex: 1,
                }}
              >
                {p.desc}
              </p>

              <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: "1rem" }}>
                {p.tags.map((t) => (
                  <span
                    key={t}
                    style={{
                      fontFamily: '"Press Start 2P", monospace',
                      fontSize: 6,
                      border: "2px solid #780000",
                      color: "#780000",
                      padding: "3px 6px",
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div style={{ display: "flex", gap: "0.6rem" }}>
                <a href={p.github} className="proj-btn filled">🐙 GITHUB</a>
                <a href={p.demo} className="proj-btn outline">↗ LIVE DEMO</a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
