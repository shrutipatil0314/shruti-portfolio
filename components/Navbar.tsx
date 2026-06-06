"use client";
import { useEffect, useState } from "react";

const links = [
  { href: "#hero", label: "HOME" },
  { href: "#about", label: "ABOUT" },
  { href: "#skills", label: "SKILLS" },
  { href: "#experience", label: "EXPERIENCE" },
  { href: "#projects", label: "PROJECTS" },
  { href: "#contact", label: "CONTACT" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          background: "#FFF6F2",
          borderBottom: scrolled ? "3px solid #780000" : "3px solid transparent",
          boxShadow: scrolled ? "0 4px 0 #780000" : "none",
          padding: "0 2rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: 64,
          transition: "border-color 0.2s, box-shadow 0.2s",
        }}
      >
        <a
          href="#hero"
          style={{
            fontFamily: '"Press Start 2P", monospace',
            fontSize: 13,
            color: "#780000",
            textDecoration: "none",
          }}
        >
          &lt; SHRUTI /&gt;
        </a>

        {/* Desktop links */}
        <ul
          style={{
            display: "flex",
            listStyle: "none",
            gap: 0,
          }}
          className="hidden-mobile"
        >
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                style={{
                  fontFamily: '"Press Start 2P", monospace',
                  fontSize: 9,
                  color: "#3d0000",
                  textDecoration: "none",
                  padding: "8px 14px",
                  display: "block",
                  position: "relative",
                }}
                className="nav-link"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            display: "none",
            flexDirection: "column",
            gap: 5,
            cursor: "crosshair",
            padding: 4,
            background: "none",
            border: "none",
          }}
          className="show-mobile"
          aria-label="Menu"
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              style={{
                display: "block",
                width: 24,
                height: 3,
                background: "#780000",
              }}
            />
          ))}
        </button>
      </nav>

      {/* Mobile drawer */}
      {menuOpen && (
        <div
          style={{
            position: "fixed",
            top: 64,
            left: 0,
            right: 0,
            background: "#FFF6F2",
            borderBottom: "3px solid #780000",
            boxShadow: "0 6px 0 #3d0000",
            padding: "1rem 2rem",
            zIndex: 99,
            display: "flex",
            flexDirection: "column",
            gap: "0.5rem",
          }}
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              style={{
                fontFamily: '"Press Start 2P", monospace',
                fontSize: 10,
                color: "#780000",
                textDecoration: "none",
                padding: "10px 0",
                borderBottom: "1px solid rgba(120,0,0,0.15)",
              }}
            >
              {l.label}
            </a>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 900px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: flex !important; }
        }
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: 2px; left: 14px; right: 14px;
          height: 3px;
          background: #780000;
          transform: scaleX(0);
          transition: transform 0.15s;
        }
        .nav-link:hover::after { transform: scaleX(1); }
      `}</style>
    </>
  );
}
