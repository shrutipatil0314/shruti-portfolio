"use client";
import { useEffect, useRef, useState } from "react";

const termLines = [
  { type: "prompt", text: "$ whoami" },
  { type: "output", text: "shruti_patil" },
  { type: "prompt", text: "$ skills --list" },
  { type: "output", text: "Docker | Kubernetes | Jenkins" },
  { type: "output", text: "AWS | Terraform | ArgoCD" },
  { type: "prompt", text: "$ uptime" },
  { type: "output", text: "2 years, 0 incidents" },
  { type: "prompt", text: "$ status" },
  { type: "output", text: "All systems operational ✓" },
];

export default function PixelTerminal() {
  const [lines, setLines] = useState<{ type: string; text: string }[]>([]);
  const [done, setDone] = useState(false);
  const ref = useRef({ lineIdx: 0, charIdx: 0 });

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;

    function step() {
      const { lineIdx, charIdx } = ref.current;
      if (lineIdx >= termLines.length) { setDone(true); return; }

      const line = termLines[lineIdx];
      const partial = line.text.slice(0, charIdx + 1);

      setLines((prev) => {
        const next = [...prev];
        next[lineIdx] = { type: line.type, text: partial };
        return next;
      });

      if (charIdx < line.text.length - 1) {
        ref.current.charIdx++;
        timeout = setTimeout(step, line.type === "prompt" ? 55 : 28);
      } else {
        ref.current.lineIdx++;
        ref.current.charIdx = 0;
        timeout = setTimeout(step, line.type === "prompt" ? 300 : 120);
      }
    }

    timeout = setTimeout(step, 900);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div
      style={{
        background: "#1a1a1a",
        border: "3px solid #780000",
        boxShadow: "6px 6px 0 #3d0000",
      }}
    >
      {/* Title bar */}
      <div
        style={{
          background: "#780000",
          padding: "8px 12px",
          display: "flex",
          alignItems: "center",
          gap: 8,
        }}
      >
        <span
          style={{
            fontFamily: '"Press Start 2P", monospace',
            fontSize: 8,
            color: "#FFF6F2",
            letterSpacing: "0.05em",
          }}
        >
          TERMINAL — BASH
        </span>
        <div style={{ marginLeft: "auto", display: "flex", gap: 6 }}>
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              style={{
                width: 10,
                height: 10,
                border: "2px solid #FFF6F2",
                display: "inline-block",
              }}
            />
          ))}
        </div>
      </div>
      {/* Body */}
      <div
        style={{
          padding: "1.2rem",
          fontFamily: "VT323, monospace",
          fontSize: 20,
          minHeight: 220,
          lineHeight: 1.7,
        }}
      >
        {lines.map((l, i) => (
          <div
            key={i}
            style={{ color: l.type === "prompt" ? "#ff6b6b" : "#a0ffb0" }}
          >
            {l.text}
          </div>
        ))}
        {!done && (
          <span
            style={{
              display: "inline-block",
              width: 10,
              height: 18,
              background: "#00ff41",
              verticalAlign: "middle",
            }}
            className="animate-blink"
          />
        )}
      </div>
    </div>
  );
}
