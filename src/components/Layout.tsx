import { useNavigate, useLocation } from "react-router-dom";

const GOLD = "#c8922e";
const DARK_NAV = "#1c1c1c";

const navLinks = [
  { label: "Project Highlights", path: "/" },
  { label: "Location", path: "#" },
  { label: "Master Plan", path: "#" },
  { label: "Project Details", path: "#" },
  { label: "Amenities", path: "#" },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div style={{ minHeight: "100vh", background: "#fff", display: "flex", flexDirection: "column" }}>

      {/* ── Header ──────────────────────────────────────────────────────── */}
      <header style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "14px 36px",
        borderBottom: "1px solid #ebebeb",
        background: "#fff",
      }}>
        {/* Logo */}
        <div
          style={{ cursor: "pointer" }}
          onClick={() => navigate("/")}
        >
          <img
            src="/logo2.ed696ec8fd3d1863db57.png"
            alt="Hiranandani Communities"
            style={{ height: 52, display: "block" }}
          />
        </div>

        {/* Project name – right */}
        <div style={{ textAlign: "right" }}>
          <div style={{
            fontSize: 13,
            fontWeight: 700,
            letterSpacing: 2,
            color: "#1a1a1a",
            textTransform: "uppercase",
          }}>
            FORTUNE CITY
          </div>
          <div style={{ fontSize: 10, letterSpacing: 1.5, color: "#999", textTransform: "uppercase" }}>
            Premium Residences
          </div>
        </div>
      </header>

      {/* ── Page content ────────────────────────────────────────────────── */}
      <main style={{ flex: 1, paddingBottom: 64 }}>
        {children}
      </main>

      {/* ── Bottom sticky nav ───────────────────────────────────────────── */}
      <nav style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        background: DARK_NAV,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: 56,
        zIndex: 200,
        gap: 0,
      }}>
        {/* Home icon */}
        <button
          onClick={() => navigate("/")}
          style={{
            background: GOLD,
            border: "none",
            width: 42,
            height: 42,
            borderRadius: 8,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginRight: 20,
            flexShrink: 0,
          }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
          </svg>
        </button>

        {navLinks.map((link, i) => (
          <div key={link.label} style={{ display: "flex", alignItems: "center" }}>
            {i > 0 && (
              <span style={{ color: "#444", margin: "0 4px", fontSize: 12 }}>|</span>
            )}
            <a
              href={link.path}
              style={{
                color: location.pathname === link.path ? GOLD : "#ccc",
                fontSize: 13,
                padding: "0 14px",
                letterSpacing: 0.3,
                fontWeight: location.pathname === link.path ? 600 : 400,
              }}
            >
              {link.label}
            </a>
          </div>
        ))}

        {/* Right icon */}
        <button
          style={{
            background: GOLD,
            border: "none",
            width: 42,
            height: 42,
            borderRadius: 8,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginLeft: 20,
            flexShrink: 0,
          }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
            <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zm-8.5-5.5L11 16l-2.5-3.01L5 17h14l-4-5.5z" />
          </svg>
        </button>
      </nav>
    </div>
  );
}
