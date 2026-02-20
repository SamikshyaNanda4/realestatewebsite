import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useFloating, offset, flip, shift, FloatingPortal } from "@floating-ui/react";

export type ArcadiaSectionProps = {
  width?: number;
};

type FloorRouteState = {
  floorNum: number;
  floorInfo: string;
} | null;

export default function ArcadiaSection({ width = 800 }: ArcadiaSectionProps) {
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

  // ---------------------------------------------------------------------------
  // Add your section polygons here following the same pattern as BuildingMap.
  // Each entry in `sections` has a `sectionId` (number) and `polygons` (array
  // of { points: string }).  The last polygon in each group (index >= 3) is
  // treated as the invisible outline used for hit-testing – adjust as needed.
  //
  // Example shape (replace / extend with real coordinates from arcadiaSection.jpg):
  const sectionA = [
    { points: "50,100  65,100 65,100 67,96 67,96 106,96 106,96 106,99 106,99 108,99 108,99 108.5,94 108.5,94 127,94 127,94 129,105 129,105 141,105 141,105 141,104 141,104 159,104 159,104 160,102 160,102 163,103 163,103 160,93.5 160,93.5 177,93.5 177,93.5 176,108 176,108 180,114 180,114 190,114 190,114 190,103 190,103 219,104 219,104 221,99 221,99 293,100 293,100  293,103 293,103 315,103 314.5,112 314.5,112 324,113 324,113 323.5,126 323.5,126 356,126 356,126 356,124 356,124 358,124 358,124 358.3,113 358.3,113 375,113.2 375,113.2 374.5,135 374.5,135 379.5,135 379.5,148 379.5,148 394,148 394.3,135 401.5,135 401.5,135 401.5,200 401.5,200 305,200 305,220 305,220 306,224 306,224 305.6,239 305.6,239 304,222 304,222 269,222 269,222 271.3,189 271.3,189 155,189 155,189 145.5,257 145.5,257 141,257 141,257 87,256.5 88,262.5 88,262.5 71,262.8 71,262.8 69,252.5 69,252.5 66.5,252.5 66.5,252.5 69.5,232.5 28,232.5 28,232.5 37,190 37,190 23,190" }
  ];
  const sectionB=[
    {points:"753,100 780,192 780,192 751,192 751,192 764,235 764,235 720,235 725,254 725,254 720,254 717,265 717,263 700,263 700,263 701.5,251 701.5,251 646,250 646,250 635,187 635,187 529,186 529,186 532.8,223 532.8,223 500,223 500,223 498,220 496,246 496,246 495.5,226 495.5,226 497.4,203 497.4,203 496.5,198 496.5,198 402,199.6 402,199.6 402.3,135 402.3,135 406,135 406.3,149 420,149.9 420,149.9 421,136 421,136 424,136.3  428,136.3 427,114 427,114 438,114 442,114 442.5,126 442.5,126 456,126.3 477,126.3 477.4,114.6 477.4,114.6 487.4,114.3 487.4,114.3 486.4,105.3 507.4,105.3 507.4,98.3 507.4,98.3 507.4,95.9 507.4,95.9 526,95.6 526,100.6 526,100.6 580,100.7 580,103.7 610,103.7 611,114.7 611,114.7 615,114.2 615,114.2 625,114.1 625,114.1 624.2,105 624.2,105 626,104 626,104 624.6,93 624.6,93 639,93.4 640,93.4 639.5,103 670.5,103.5 674.5,103.5 674.9,92.5 674.9,92.5 684.9,92.5 691.9,92.5 691.9,92.5 692.3,95 692.3,95 736,95.5 737,99.5"}
  ]  
  
// const sectionA_right = [
// {
// points: "351.5,100 336.5,100 336.5,100 334.5,96 334.5,96 295.5,96 295.5,96 295.5,99 295.5,99 293.5,99 293.5,99 293,94 293,94 274.5,94 274.5,94 272.5,105 272.5,105 260.5,105 260.5,105 260.5,104 260.5,104 242.5,104 242.5,104 241.5,102 241.5,102 238.5,103 238.5,103 241.5,93.5 241.5,93.5 224.5,93.5 224.5,93.5 225.5,108 225.5,108 221.5,114 221.5,114 211.5,114 211.5,114 211.5,103 211.5,103 182.5,104 182.5,104 180.5,99 180.5,99 108.5,100 108.5,100 108.5,103 108.5,103 86.5,103 87,112 87,112 77.5,113 77.5,113 78,126 78,126 45.5,126 45.5,126 45.5,124 45.5,124 43.5,124 43.5,124 43.2,113 43.2,113 26.5,113.2 26.5,113.2 27,135 27,135 22,135 22,148 22,148 7.5,148 7.2,135 0,135 0,135 0,200 0,200 96.5,200 96.5,220 96.5,220 95.5,224 95.5,224 95.9,239 95.9,239 97.5,222 97.5,222 132.5,222 132.5,222 130.2,189 130.2,189 246.5,189 246.5,189 256,257 256,257 260.5,257 260.5,257 314.5,256.5 313.5,262.5 313.5,262.5 330.5,262.8 330.5,262.8 332.5,252.5 332.5,252.5 335,252.5 335,252.5 332,232.5 373.5,232.5 373.5,232.5 364.5190 364.5,190 378.5,190"
// }
// ];


  const sectionLabels: Record<number, string> = {
    1: "Section A",
    2: "Section B",
  };

  // ---------------------------------------------------------------------------
  const sections: { sectionId: number; polygons: { points: string }[] }[] = [
    // TODO: add your section polygon groups here
    { sectionId: 1, polygons: sectionA },
    {sectionId:2, polygons:sectionB}
  ];

  return (
    <div style={{ width: `${width}px`, display: "flex", flexDirection: "column" }}>
      {/* ── Top bar (outside the image) ─────────────────────────────────── */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "8px 0 10px 0",
        }}
      >
        {/* Back button */}
        <button
          onClick={() => navigate("/")}
          style={{
            background: "rgba(25, 91, 190, 0.85)",
            color: "#fff",
            border: "1px solid rgba(255,255,255,0.2)",
            borderRadius: 8,
            padding: "5px 14px",
            fontSize: 13,
            cursor: "pointer",
            whiteSpace: "nowrap",
          }}
        >
          ← Building
        </button>

        {/* Floor info badge on the right */}
        {floorState && (
          <div
            style={{
              background: "rgba(25, 91, 190, 0.85)",
              color: "#f0f0f0",
              padding: "5px 16px",
              borderRadius: 8,
              fontSize: 13,
              fontWeight: 500,
              letterSpacing: "0.4px",
              border: "1px solid rgba(255,255,255,0.2)",
              whiteSpace: "nowrap",
            }}
          >
            {floorState.floorInfo}
          </div>
        )}
      </div>

      {/* ── Image + SVG wrapper ──────────────────────────────────────────── */}
      <div style={{ position: "relative" }}>
      {/* ── Background image ─────────────────────────────────────────────── */}
      <img
        src="/arcadiaSection.jpg"
        alt="Arcadia Section"
        style={{ width: "100%", display: "block" }}
      />

      {/* ── SVG overlay (add your section polygons above in `sections`) ──── */}
      {/*
        NOTE: Update the viewBox below to match arcadiaSection.jpg's natural
        pixel dimensions so your polygon coordinates map correctly.
        e.g. viewBox="0 0 1200 800"
      */}
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
          polygons.map((poly, j) => {
            const isOutline = j >= 3;
            return (
              <polygon
                key={`${sectionId}-${j}`}
                points={poly.points}
                fill={
                  !isOutline && hoveredGroup === sectionId
                    ? "rgba(38, 221, 53, 0.55)"
                    : "transparent"
                }
                stroke={
                  !isOutline && hoveredGroup === sectionId
                    ? "gold"
                    : "transparent"
                }
                strokeWidth="0.8"
                style={{ cursor: "pointer" }}
                onMouseEnter={(e) => {
                  setHoveredGroup(sectionId);
                  setTooltipText(`Section ${sectionId}`);
                  refs.setPositionReference({
                    getBoundingClientRect() {
                      return {
                        width: 0,
                        height: 0,
                        x: e.clientX,
                        y: e.clientY,
                        top: e.clientY,
                        left: e.clientX,
                        right: e.clientX,
                        bottom: e.clientY,
                      };
                    },
                  });
                }}
                onMouseMove={(e) => {
                  refs.setPositionReference({
                    getBoundingClientRect() {
                      return {
                        width: 0,
                        height: 0,
                        x: e.clientX,
                        y: e.clientY,
                        top: e.clientY,
                        left: e.clientX,
                        right: e.clientX,
                        bottom: e.clientY,
                      };
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
                      sectionLabel: sectionLabels[sectionId] ?? `Section ${sectionId}`,
                    },
                  })
                }
              />
            );
          })
        )}
      </svg>

      {/* ── Tooltip ──────────────────────────────────────────────────────── */}
      {tooltipText && (
        <FloatingPortal>
          <div
            ref={refs.setFloating}
            style={{
              ...floatingStyles,
              background: "rgba(25, 91, 190, 0.59)",
              backdropFilter: "blur(16px)",
              color: "#f0f0f0",
              padding: "3px 6px",
              borderRadius: "8px",
              fontSize: "12px",
              fontWeight: 400,
              letterSpacing: "0.4px",
              border: "1px solid rgba(255,255,255,0.1)",
              boxShadow: "0 4px 16px rgba(0,0,0,0.4)",
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
    </div>
  );
}
