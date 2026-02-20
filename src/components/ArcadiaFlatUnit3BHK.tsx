import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useFloating, offset, flip, shift, FloatingPortal } from "@floating-ui/react";

export type ArcadiaFlatUnit3BHKProps = {
  width?: number;
};

export type UnitRouteState = {
  floorNum: number;
  floorInfo: string;
  sectionId: number;
  sectionLabel: string;
} | null;

export default function ArcadiaFlatUnit3BHK({ width = 800 }: ArcadiaFlatUnit3BHKProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const unitState = (location.state as UnitRouteState) ?? null;

  const [tooltipText, setTooltipText] = useState<string | null>(null);
  const [hoveredGroup, setHoveredGroup] = useState<number | null>(null);

  const { refs, floatingStyles } = useFloating({
    open: tooltipText !== null,
    placement: "right",
    middleware: [offset(12), flip(), shift({ padding: 8 })],
  });

  // ---------------------------------------------------------------------------
  // Add your unit polygons here following the same pattern as BuildingMap /
  // ArcadiaSection.  Each entry has a `unitId` (number) and `polygons` (array
  // of { points: string }).  Index >= 3 is treated as the invisible outline.
  //
  // Example:
  // const room1 = [
  //   { points: "100,50 200,50 200,120 100,120" },
  // ];
  //
  // const units = [
  //   { unitId: 1, polygons: room1 },
  // ];
  // ---------------------------------------------------------------------------
  const units: { unitId: number; polygons: { points: string }[] }[] = [
    // TODO: add your unit room/area polygons here
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
        {/* Back to section — preserves floor state so ArcadiaSection badge restores */}
        <button
          onClick={() =>
            navigate("/section", {
              state: unitState
                ? { floorNum: unitState.floorNum, floorInfo: unitState.floorInfo }
                : null,
            })
          }
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
          ← Section
        </button>

        {/* Floor + Section info badge on the right */}
        {unitState && (
          <div
            style={{
              display: "flex",
              gap: 8,
            }}
          >
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
              {unitState.floorInfo}
            </div>
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
              {unitState.sectionLabel}
            </div>
          </div>
        )}
      </div>

      {/* ── Image + SVG wrapper ──────────────────────────────────────────── */}
      <div style={{ position: "relative" }}>
        {/* Background image */}
        <img
          src="/arcadiaFlatUnit3BHK.jpg"
          alt="Arcadia Flat Unit 3BHK"
          style={{ width: "100%", display: "block" }}
        />

        {/* SVG overlay — update viewBox to match arcadiaFlatUnit3BHK.jpg dimensions */}
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
          {units.flatMap(({ unitId, polygons }) =>
            polygons.map((poly, j) => {
              const isOutline = j >= 3;
              return (
                <polygon
                  key={`${unitId}-${j}`}
                  points={poly.points}
                  fill={
                    !isOutline && hoveredGroup === unitId
                      ? "rgba(38, 221, 53, 0.55)"
                      : "transparent"
                  }
                  stroke={
                    !isOutline && hoveredGroup === unitId
                      ? "gold"
                      : "transparent"
                  }
                  strokeWidth="0.8"
                  style={{ cursor: "pointer" }}
                  onMouseEnter={(e) => {
                    setHoveredGroup(unitId);
                    setTooltipText(`Unit ${unitId}`);
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
                  onClick={() => {
                    // TODO: handle unit click (e.g. open a details modal)
                    console.log(
                      "Unit clicked:", unitId,
                      "| Section:", unitState?.sectionId,
                      "| Floor:", unitState?.floorNum
                    );
                  }}
                />
              );
            })
          )}
        </svg>

        {/* Tooltip */}
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
