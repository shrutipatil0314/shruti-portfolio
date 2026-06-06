"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Sticker from "./Sticker";

const quests = [
  {
    title: "DevOps Engineer @ TechCorp",
    badge: "★ ACTIVE QUEST",
    badgeBg: "#1a3a6b",
    date: "2023 — NOW",
    items: [
      "Reduced deployment time by 60% with Jenkins pipelines",
      "Managed 50+ microservices on Kubernetes clusters",
      "Automated infra provisioning with Terraform modules",
      "Implemented GitOps workflows using ArgoCD",
    ],
  },
  {
    title: "Cloud Intern @ StartupXYZ",
    badge: "◆ COMPLETED",
    badgeBg: "#4a6fa5",
    date: "2022 — 2023",
    items: [
      "Set up monitoring dashboards in Grafana",
      "Containerized legacy apps using Docker",
      "Wrote Ansible playbooks for server provisioning",
      "Configured CI/CD with GitHub Actions",
    ],
  },
];

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="experience" ref={ref} style={{ padding: "6rem 6vw", position: "relative" }}>
      <div style={{ position: "absolute", top: "2rem", right: "4vw", zIndex: 5 }}>
        <Sticker emoji="☁️" rotate={-6} delay={1} />
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
        📜 QUEST LOG
      </motion.h2>

      <div style={{ position: "relative", paddingLeft: "3rem" }}>
        {/* Vertical line */}
        <div
          style={{
            position: "absolute",
            left: 8,
            top: 0,
            bottom: 0,
            width: 4,
            background: "#780000",
          }}
        />

        {quests.map((q, i) => (
          <motion.div
            key={q.title}
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            style={{
              position: "relative",
              marginBottom: "2.5rem",
              border: "3px solid #780000",
              boxShadow: "4px 4px 0 #3d0000",
              background: "#ffffff",
              padding: "1.2rem 1.4rem",
            }}
          >
            {/* Diamond marker */}
            <div
              style={{
                position: "absolute",
                left: "-2.6rem",
                top: "1rem",
                color: "#780000",
                fontSize: 18,
                background: "#FFF6F2",
                lineHeight: 1,
              }}
            >
              ◆
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                flexWrap: "wrap",
                gap: "0.5rem",
                marginBottom: "0.6rem",
              }}
            >
              <div
                style={{
                  fontFamily: '"Press Start 2P", monospace',
                  fontSize: 10,
                  color: "#780000",
                  lineHeight: 1.6,
                }}
              >
                {q.title}
              </div>
              <div
                style={{
                  fontFamily: '"Press Start 2P", monospace',
                  fontSize: 7,
                  color: "#3d0000",
                  opacity: 0.7,
                }}
              >
                {q.date}
              </div>
            </div>

            <span
              style={{
                fontFamily: '"Press Start 2P", monospace',
                fontSize: 7,
                background: q.badgeBg,
                color: "#ffffff",
                padding: "4px 8px",
                display: "inline-block",
                marginBottom: "0.8rem",
                border: "2px solid rgba(0,0,0,0.2)",
              }}
            >
              {q.badge}
            </span>

            <ul style={{ fontFamily: "VT323, monospace", fontSize: 20, listStyle: "none", lineHeight: 1.8 }}>
              {q.items.map((item) => (
                <li key={item}>
                  <span style={{ color: "#780000" }}>▶ </span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
