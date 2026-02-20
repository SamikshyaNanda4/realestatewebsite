import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 16,
        fontFamily: "system-ui, sans-serif",
        color: "#f0f0f0",
        background: "#0d1117",
      }}
    >
      <span style={{ fontSize: 64, fontWeight: 700, color: "#195bbe" }}>404</span>
      <p style={{ margin: 0, fontSize: 18, color: "#8b949e" }}>Page not found</p>
      <button
        onClick={() => navigate("/")}
        style={{
          marginTop: 8,
          background: "rgba(25, 91, 190, 0.75)",
          color: "#fff",
          border: "1px solid rgba(255,255,255,0.15)",
          borderRadius: 8,
          padding: "8px 20px",
          fontSize: 14,
          cursor: "pointer",
        }}
      >
        ← Back to Building Map
      </button>
    </div>
  );
}
