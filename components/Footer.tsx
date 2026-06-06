export default function Footer() {
  const socials = [
    { label: "GH", href: "#" },
    { label: "IN", href: "#" },
    { label: "TW", href: "#" },
  ];

  return (
    <footer
      style={{
        background: "#780000",
        color: "#FFF6F2",
        padding: "2.5rem 4vw",
        textAlign: "center",
        borderTop: "4px solid #3d0000",
      }}
    >
      <p
        style={{
          fontFamily: '"Press Start 2P", monospace',
          fontSize: 8,
          color: "#FFF6F2",
          marginBottom: "1.2rem",
          lineHeight: 1.8,
        }}
      >
        © 2025 SHRUTI PATIL
        <br />
        ALL RIGHTS RESERVED
        <br />
        MADE WITH ♥ + YAML
      </p>
      <div style={{ display: "flex", justifyContent: "center", gap: "1rem" }}>
        {socials.map((s) => (
          <a
            key={s.label}
            href={s.href}
            style={{
              fontFamily: '"Press Start 2P", monospace',
              fontSize: 9,
              color: "#FFF6F2",
              border: "2px solid rgba(255,246,242,0.5)",
              padding: "8px 14px",
              textDecoration: "none",
              boxShadow: "3px 3px 0 #3d0000",
              display: "inline-block",
            }}
          >
            {s.label}
          </a>
        ))}
      </div>
    </footer>
  );
}
