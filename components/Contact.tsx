"use client";
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import emailjs from "@emailjs/browser";
 
const SERVICE_ID = "service_qebjcfg";
const TEMPLATE_ID = "template_y0lty0v";
const PUBLIC_KEY = "v1mcN-r6L8Ek2XGsP";
 
const contactItems = [
  { icon: "📧", label: "EMAIL", value: "shrutipatil140312@gmail.com", href: "mailto:shrutipatil140312@gmail.com" },
  { icon: "🔗", label: "LINKEDIN", value: "linkedin.com/in/shrutipatil", href: "https://linkedin.com/in/shrutipatil" },
  { icon: "🐙", label: "GITHUB", value: "github.com/shrutipatil0314", href: "https://github.com/shrutipatil0314" },
];
 
interface FormField {
  label: string;
  val: string;
  setter: (v: string) => void;
  type: string;
  placeholder: string;
}
 
export default function Contact() {
  const ref = useRef<HTMLElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  const [sending, setSending] = useState(false);
 
  const handleSubmit = () => {
    if (!name.trim() || !email.trim() || !msg.trim()) {
      alert("⚠ Please fill all fields!");
      return;
    }
 
    setSending(true);
 
    emailjs
      .send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: name,
          from_email: email,
          message: msg,
        },
        PUBLIC_KEY
      )
      .then(() => {
        alert("✓ MESSAGE SENT! Will respond within 24h.");
        setName("");
        setEmail("");
        setMsg("");
        setSending(false);
      })
      .catch(() => {
        alert("✗ Something went wrong. Please try again.");
        setSending(false);
      });
  };
 
  const fields: FormField[] = [
    { label: "NAME", val: name, setter: setName, type: "text", placeholder: "Enter your name..." },
    { label: "EMAIL", val: email, setter: setEmail, type: "email", placeholder: "your@email.com" },
  ];
 
  return (
    <section id="contact" ref={ref} style={{ padding: "6rem 6vw" }}>
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
        ✉ SEND MESSAGE
      </motion.h2>
 
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1.5fr 1fr",
          gap: "4rem",
          alignItems: "start",
        }}
        className="contact-grid"
      >
        {/* Dialogue box */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          style={{
            border: "4px solid #780000",
            boxShadow: "6px 6px 0 #3d0000, inset 0 0 0 3px rgba(120,0,0,0.1)",
            background: "#ffffff",
            padding: "2rem 1.8rem 1.8rem",
            position: "relative",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: -17,
              left: 20,
              fontFamily: '"Press Start 2P", monospace',
              fontSize: 8,
              color: "#ffffff",
              background: "#780000",
              padding: "6px 14px",
              border: "2px solid #3d0000",
            }}
          >
            ■ DIALOGUE BOX ■
          </div>
 
          <span
            style={{
              position: "absolute",
              bottom: 12,
              right: 16,
              fontSize: 32,
              opacity: 0.2,
              pointerEvents: "none",
            }}
          >
            👾
          </span>
 
          {fields.map((f) => (
            <div key={f.label} style={{ marginBottom: "1.2rem" }}>
              <label
                style={{
                  fontFamily: '"Press Start 2P", monospace',
                  fontSize: 8,
                  color: "#780000",
                  display: "block",
                  marginBottom: "0.4rem",
                }}
              >
                {f.label}
              </label>
              <input
                className="pixel-input"
                type={f.type}
                placeholder={f.placeholder}
                value={f.val}
                onChange={(e) => f.setter(e.target.value)}
              />
            </div>
          ))}
 
          <div style={{ marginBottom: "1.4rem" }}>
            <label
              style={{
                fontFamily: '"Press Start 2P", monospace',
                fontSize: 8,
                color: "#780000",
                display: "block",
                marginBottom: "0.4rem",
              }}
            >
              MESSAGE
            </label>
            <textarea
              className="pixel-input"
              style={{ minHeight: 100, resize: "vertical" }}
              placeholder="Type your message..."
              value={msg}
              onChange={(e) => setMsg(e.target.value)}
            />
          </div>
 
          <button
            className="pixel-btn"
            onClick={handleSubmit}
            disabled={sending}
            style={{ opacity: sending ? 0.6 : 1 }}
          >
            {sending ? "SENDING..." : "SEND →"}
          </button>
        </motion.div>
 
        {/* Contact cards */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
        >
          {contactItems.map((c, i) => (
            <motion.div
              key={c.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
              style={{
                border: "3px solid #780000",
                boxShadow: "4px 4px 0 #3d0000",
                background: "#ffffff",
                padding: "1rem 1.2rem",
                display: "flex",
                alignItems: "center",
                gap: "1rem",
              }}
            >
              <span style={{ fontSize: 28, flexShrink: 0 }}>{c.icon}</span>
              <div>
                <span
                  style={{
                    fontFamily: '"Press Start 2P", monospace',
                    fontSize: 7,
                    color: "#780000",
                    display: "block",
                    marginBottom: 4,
                  }}
                >
                  {c.label}
                </span>
                <a
                  href={c.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontFamily: "VT323, monospace",
                    fontSize: 18,
                    color: "#1a3a6b",
                    textDecoration: "none",
                  }}
                >
                  {c.value}
                </a>
              </div>
            </motion.div>
          ))}
 
          <div
            style={{
              border: "3px solid #3d0000",
              boxShadow: "4px 4px 0 #3d0000",
              padding: "1rem 1.2rem",
              background: "#780000",
              marginTop: "0.5rem",
            }}
          >
            <p style={{ fontFamily: "VT323, monospace", fontSize: 20, color: "#FFF6F2", lineHeight: 1.6 }}>
              ▶ Currently open to new DevOps roles and freelance contracts. Response time: &lt; 24 hours.
            </p>
          </div>
        </motion.div>
      </div>
 
      <style>{`
        @media (max-width: 900px) {
          .contact-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
 