import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useFloating, offset, flip, shift, FloatingPortal } from "@floating-ui/react";

const GOLD = "#c8922e";

export type ArcadiaSectionProps = Record<string, never>;

type FloorRouteState = {
  floorNum: number;
  floorInfo: string;
} | null;

const sectionLabels: Record<number, string> = {
  1: "Section A",
  2: "Section B",
};

export default function ArcadiaSection() {
  const navigate = useNavigate();
  const location = useLocation();
  const floorState = (location.state as FloorRouteState) ?? null;

  const [tooltipText, setTooltipText] = useState<string | null>(null);
  const [hoveredGroup, setHoveredGroup] = useState<number | null>(null);

  const { refs, floatingStyles } = useFloating({
    open: tooltipText !== null,
    placement: "right",
    middleware: [offset(12), flip(), shift({ padding: 8 })],
  });

  const sectionA = [
    { points: "50,100  65,100 65,100 67,96 67,96 106,96 106,96 106,99 106,99 108,99 108,99 108.5,94 108.5,94 127,94 127,94 129,105 129,105 141,105 141,105 141,104 141,104 159,104 159,104 160,102 160,102 163,103 163,103 160,93.5 160,93.5 177,93.5 177,93.5 176,108 176,108 180,114 180,114 190,114 190,114 190,103 190,103 219,104 219,104 221,99 221,99 293,100 293,100  293,103 293,103 315,103 314.5,112 314.5,112 324,113 324,113 323.5,126 323.5,126 356,126 356,126 356,124 356,124 358,124 358,124 358.3,113 358.3,113 375,113.2 375,113.2 374.5,135 374.5,135 379.5,135 379.5,148 379.5,148 394,148 394.3,135 401.5,135 401.5,135 401.5,200 401.5,200 305,200 305,220 305,220 306,224 306,224 305.6,239 305.6,239 304,222 304,222 269,222 269,222 271.3,189 271.3,189 155,189 155,189 145.5,257 145.5,257 141,257 141,257 87,256.5 88,262.5 88,262.5 71,262.8 71,262.8 69,252.5 69,252.5 66.5,252.5 66.5,252.5 69.5,232.5 28,232.5 28,232.5 37,190 37,190 23,190" }
  ];

  const sectionB = [
    { points: "753,100 780,192 780,192 751,192 751,192 764,235 764,235 720,235 725,254 725,254 720,254 717,265 717,263 700,263 700,263 701.5,251 701.5,251 646,250 646,250 635,187 635,187 529,186 529,186 532.8,223 532.8,223 500,223 500,223 498,220 496,246 496,246 495.5,226 495.5,226 497.4,203 497.4,203 496.5,198 496.5,198 402,199.6 402,199.6 402.3,135 402.3,135 406,135 406.3,149 420,149.9 420,149.9 421,136 421,136 424,136.3  428,136.3 427,114 427,114 438,114 442,114 442.5,126 442.5,126 456,126.3 477,126.3 477.4,114.6 477.4,114.6 487.4,114.3 487.4,114.3 486.4,105.3 507.4,105.3 507.4,98.3 507.4,98.3 507.4,95.9 507.4,95.9 526,95.6 526,100.6 526,100.6 580,100.7 580,103.7 610,103.7 611,114.7 611,114.7 615,114.2 615,114.2 625,114.1 625,114.1 624.2,105 624.2,105 626,104 626,104 624.6,93 624.6,93 639,93.4 640,93.4 639.5,103 670.5,103.5 674.5,103.5 674.9,92.5 674.9,92.5 684.9,92.5 691.9,92.5 691.9,92.5 692.3,95 692.3,95 736,95.5 737,99.5" }
  ];

  const sections: { sectionId: number; polygons: { points: string }[] }[] = [
    { sectionId: 1, polygons: sectionA },
    { sectionId: 2, polygons: sectionB },
  ];

  return (
    <div style={{
      display: "flex",
      alignItems: "flex-start",
      gap: 24,
      padding: "28px 36px",
      maxWidth: 1400,
      margin: "0 auto",
    }}>

      {/* Left sidebar */}
      <div style={{
        width: 200,
        flexShrink: 0,
        display: "flex",
        flexDirection: "column",
        gap: 12,
      }}>
        {/* Floor badge */}
        <div style={{
          background: GOLD,
          color: "#fff",
          fontWeight: 700,
          fontSize: 14,
          letterSpacing: 0.4,
          padding: "12px 18px",
          borderRadius: 10,
          textAlign: "center",
        }}>
          {floorState ? `Floor No. : ${floorState.floorNum}` : "Select a Floor"}
        </div>

        {/* Section list */}
        {[1, 2].map((id) => (
          <div
            key={id}
            style={{
              background: hoveredGroup === id ? GOLD : "#f7f6f4",
              color: hoveredGroup === id ? "#fff" : "#333",
              fontWeight: 600,
              fontSize: 13,
              padding: "11px 18px",
              borderRadius: 10,
              border: `1px solid ${hoveredGroup === id ? GOLD : "#e0e0e0"}`,
              textAlign: "center",
              transition: "all 0.15s",
              cursor: "default",
            }}
          >
            {sectionLabels[id]}
          </div>
        ))}
      </div>

      {/* Center: Section image + SVG */}
      <div style={{
        flex: 1,
        position: "relative",
        borderRadius: 12,
        overflow: "hidden",
        boxShadow: "0 2px 16px rgba(0,0,0,0.10)",
        border: "1px solid #e8e8e8",
      }}>
        <img
          src="/arcadiaSection.jpg"
          alt="Arcadia Section"
          style={{ width: "100%", display: "block" }}
        />

        <svg
          viewBox="0 0 800 600"
          preserveAspectRatio="none"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
          }}
        >
          {sections.flatMap(({ sectionId, polygons }) =>
            polygons.map((poly, j) => (
              <polygon
                key={`${sectionId}-${j}`}
                points={poly.points}
                fill={hoveredGroup === sectionId ? "rgba(200,146,46, 0.45)" : "transparent"}
                stroke={hoveredGroup === sectionId ? "#c8922e" : "transparent"}
                strokeWidth="1"
                style={{ cursor: "pointer" }}
                onMouseEnter={(e) => {
                  setHoveredGroup(sectionId);
                  setTooltipText(sectionLabels[sectionId]);
                  refs.setPositionReference({
                    getBoundingClientRect() {
                      return { width: 0, height: 0, x: e.clientX, y: e.clientY, top: e.clientY, left: e.clientX, right: e.clientX, bottom: e.clientY };
                    },
                  });
                }}
                onMouseMove={(e) => {
                  refs.setPositionReference({
                    getBoundingClientRect() {
                      return { width: 0, height: 0, x: e.clientX, y: e.clientY, top: e.clientY, left: e.clientX, right: e.clientX, bottom: e.clientY };
                    },
                  });
                }}
                onMouseLeave={() => {
                  setHoveredGroup(null);
                  setTooltipText(null);
                }}
                onClick={() =>
                  navigate("/unit", {
                    state: {
                      floorNum: floorState?.floorNum ?? null,
                      floorInfo: floorState?.floorInfo ?? null,
                      sectionId,
                      sectionLabel: sectionLabels[sectionId],
                    },
                  })
                }
              />
            ))
          )}
        </svg>

        {tooltipText && (
          <FloatingPortal>
            <div
              ref={refs.setFloating}
              style={{
                ...floatingStyles,
                background: "rgba(28,28,28,0.88)",
                backdropFilter: "blur(8px)",
                color: "#f5f5f5",
                padding: "4px 10px",
                borderRadius: 6,
                fontSize: 12,
                fontWeight: 500,
                letterSpacing: 0.3,
                border: "1px solid rgba(200,146,46,0.4)",
                boxShadow: "0 4px 16px rgba(0,0,0,0.3)",
                pointerEvents: "none",
                whiteSpace: "nowrap",
                zIndex: 9999,
              }}
            >
              {tooltipText}
            </div>
          </FloatingPortal>
        )}
      </div>

      {/* Right panel — Go Back */}
      <div style={{
        width: 160,
        flexShrink: 0,
        display: "flex",
        flexDirection: "column",
        gap: 12,
      }}>
        <button
          onClick={() => navigate("/")}
          style={{
            background: GOLD,
            color: "#fff",
            fontWeight: 700,
            fontSize: 13,
            padding: "12px 0",
            borderRadius: 10,
            width: "100%",
            letterSpacing: 0.4,
          }}
        >
          ← Go Back
        </button>
        {floorState && (
          <div style={{
            background: "#f7f6f4",
            border: "1px solid #e0e0e0",
            borderRadius: 10,
            padding: "10px 14px",
            fontSize: 12,
            color: "#555",
            lineHeight: 1.5,
          }}>
            {floorState.floorInfo}
          </div>
        )}
      </div>
    </div>
  );
}
