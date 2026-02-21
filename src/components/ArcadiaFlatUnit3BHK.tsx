import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useFloating, offset, flip, shift, FloatingPortal } from "@floating-ui/react";

const GOLD = "#c8922e";

export type ArcadiaFlatUnit3BHKProps = Record<string, never>;

export type UnitRouteState = {
  floorNum: number;
  floorInfo: string;
  sectionId: number;
  sectionLabel: string;
} | null;

function useTypewriter(text: string, speed = 16) {
  const [displayed, setDisplayed] = useState("");
  useEffect(() => {
    setDisplayed("");
    if (!text) return;
    let i = 0;
    const id = setInterval(() => {
      i++;
      setDisplayed(text.slice(0, i));
      if (i >= text.length) clearInterval(id);
    }, speed);
    return () => clearInterval(id);
  }, [text, speed]);
  return displayed;
}

function RoomCard({ name, details }: { name: string; details: string }) {
  const typedDetails = useTypewriter(details, 16);
  return (
    <div
      style={{
        background: "rgba(18,15,10,0.95)",
        border: `1.5px solid ${GOLD}`,
        borderRadius: 12,
        padding: "13px 16px",
        width: "100%",
        boxShadow:
          "0 6px 24px rgba(0,0,0,0.35), 0 0 0 1px rgba(200,146,46,0.18)",
        animation: "roomCardPop 0.18s cubic-bezier(0.34,1.56,0.64,1) both",
      }}
    >
      <div
        style={{
          color: GOLD,
          fontWeight: 700,
          fontSize: 10,
          letterSpacing: 1.4,
          textTransform: "uppercase",
          marginBottom: 8,
          borderBottom: "1px solid rgba(200,146,46,0.22)",
          paddingBottom: 7,
        }}
      >
        {name}
      </div>
      <div
        style={{
          color: "#f0ece4",
          fontSize: 15,
          fontFamily: "'Courier New', Courier, monospace",
          fontWeight: 600,
          letterSpacing: 0.6,
          lineHeight: 1.4,
          minHeight: "1.4em",
        }}
      >
        {typedDetails || "\u00A0"}
      </div>
    </div>
  );
}

export default function ArcadiaFlatUnit3BHK() {
  const navigate = useNavigate();
  const location = useLocation();
  const unitState = (location.state as UnitRouteState) ?? null;

  const [hoveredGroup, setHoveredGroup] = useState<number | null>(null);
  const [hoveredUnitInfo, setHoveredUnitInfo] = useState<{
    name: string;
    details: string;
  } | null>(null);

  // Small cursor-following tooltip (room name only)
  const { refs, floatingStyles } = useFloating({
    open: hoveredUnitInfo !== null,
    placement: "top",
    middleware: [offset(10), flip(), shift({ padding: 8 })],
  });

  const units: {
    unitId: number;
    unitName: string;
    details: string;
    polygons: { points: string }[];
  }[] = [
    {
      unitId: 1421,
      unitName: "Balcony",
      details: "7'0\" × 5'0\"",
      polygons: [
        {
          points:
            "105,132 179,132 179,132 177.6,141 177.6,140 197,140 190.1,168 190.1,168 168,168 168,168 170,200 170,200 105,203 105,203 97,168",
        },
      ],
    },
    {
      unitId: 1423,
      unitName: "Master Bedroom",
      details: "11'0\" × 15'0\"",
      polygons: [
        {
          points:
            "78,166 189,170 189,170 185.8,190 185.8,190 171,276 171,276 173.5,314 173.5,314 145,315 145,315 139,357 139,357 128,315 128,315 41,315",
        },
      ],
    },
    {
      unitId: 1425,
      unitName: "Bedroom 1",
      details: "11'0\" × 13'0\"",
      polygons: [
        {
          points:
            "196,144 303,144 303,144 292,272 292,272 284,272 284,272 288,312 288,312 262,312 262,312 257,275 257,275 174,275",
        },
      ],
    },
    {
      unitId: 1428,
      unitName: "Toilet",
      details: "4'6\" × 8'0\"",
      polygons: [
        {
          points:
            "300,189 342,189 345,189 346,278 346,278 319,278 322,312 322,312 300,312 300,312 298,279 298,279 291,279",
        },
      ],
    },
    {
      unitId: 1432,
      unitName: "Living / Dining",
      details: "21'0\" × 14'3\"",
      polygons: [
        {
          points:
            "352,172 389,170 389,170 560,170 560,170 573,310 573,310 353,310.4",
        },
      ],
    },
    {
      unitId: 1434,
      unitName: "Balcony",
      details: "13'0\" × 5'0\"",
      polygons: [
        {
          points:
            "388,138 515,139 515,139 518,169 518,169 517,209 392,209 392,171",
        },
      ],
    },
    {
      unitId: 1435,
      unitName: "Entrance Foyer",
      details: "5'6\" × 6'11\"",
      polygons: [
        {
          points: "516,312 578,310 578,310 589,391 589,391 524,392",
        },
      ],
    },
    {
      unitId: 1449,
      unitName: "Bedroom 2",
      details: "11'0\" × 14'0\"",
      polygons: [
        {
          points: "565,192 674,190 707,333 707,333 582,338",
        },
      ],
    },
    {
      unitId: 1453,
      unitName: "Toilet",
      details: "5'0\" × 8'0\"",
      polygons: [
        {
          points: "707,335 770,337 770,337 746,243 746,243 687,243",
        },
      ],
    },
    {
      unitId: 1456,
      unitName: "Kitchen",
      details: "8'5\" × 11'2\"",
      polygons: [
        {
          points: "188,316 287,316 287,316 275,456 275,456 170,454",
        },
      ],
    },
    {
      unitId: 1458,
      unitName: "Utility",
      details: "3'6\" × 5'6\"",
      polygons: [
        {
          points:
            "165,467 117,466 127,415 111,415 111,415 117,385 117,385 177,386",
        },
      ],
    },
    {
      unitId: 1465,
      unitName: "Master Toilet",
      details: "5'0\" × 8'0\"",
      polygons: [
        {
          points: "109,414 49,410 49,410 68,318 127,318",
        },
      ],
    },
    {
      unitId: 1467,
      unitName: "Walk-In Closet",
      details: "5'0\" × 6'0\"",
      polygons: [{ points: "128,318 185,317 178,382 118,382" }],
    },
  ];

  return (
    <>
      <style>{`
        @keyframes roomCardPop {
          0%   { opacity: 0; transform: scale(0.86) translateY(8px); }
          70%  { opacity: 1; transform: scale(1.03) translateY(-2px); }
          100% { opacity: 1; transform: scale(1) translateY(0); }
        }
      `}</style>

      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          gap: 24,
          padding: "28px 36px",
          maxWidth: 1400,
          margin: "0 auto",
        }}
      >
        {/* Left sidebar — context breadcrumb */}
        <div
          style={{
            width: 200,
            flexShrink: 0,
            display: "flex",
            flexDirection: "column",
            gap: 12,
          }}
        >
          {unitState ? (
            <>
              <div
                style={{
                  background: GOLD,
                  color: "#fff",
                  fontWeight: 700,
                  fontSize: 13,
                  padding: "12px 18px",
                  borderRadius: 10,
                  textAlign: "center",
                  letterSpacing: 0.4,
                }}
              >
                Floor No. : {unitState.floorNum}
              </div>
              <div
                style={{
                  background: "#f7f6f4",
                  border: "1px solid #e0e0e0",
                  color: "#444",
                  fontWeight: 600,
                  fontSize: 13,
                  padding: "11px 18px",
                  borderRadius: 10,
                  textAlign: "center",
                }}
              >
                {unitState.sectionLabel}
              </div>
              <div
                style={{
                  background: "#f7f6f4",
                  border: "1px solid #e0e0e0",
                  borderRadius: 10,
                  padding: "10px 14px",
                  fontSize: 12,
                  color: "#777",
                  lineHeight: 1.6,
                }}
              >
                3 BHK Unit
              </div>
            </>
          ) : (
            <div
              style={{
                background: "#f7f6f4",
                border: "1px solid #e0e0e0",
                borderRadius: 10,
                padding: "14px",
                fontSize: 13,
                color: "#999",
                textAlign: "center",
              }}
            >
              No unit selected
            </div>
          )}
        </div>

        {/* Center: Flat plan image + SVG overlay */}
        <div
          style={{
            flex: 1,
            position: "relative",
            borderRadius: 12,
            overflow: "hidden",
            boxShadow: "0 2px 16px rgba(0,0,0,0.10)",
            border: "1px solid #e8e8e8",
          }}
        >
          <img
            src="/arcadiaFlatUnit3BHK.jpg"
            alt="Arcadia 3BHK Floor Plan"
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
            {units.flatMap(({ unitId, unitName, details, polygons }) =>
              polygons.map((poly, j) => (
                <polygon
                  key={`${unitId}-${j}`}
                  points={poly.points}
                  fill={
                    hoveredGroup === unitId
                      ? "rgba(200,146,46, 0.38)"
                      : "transparent"
                  }
                  stroke={
                    hoveredGroup === unitId ? "#c8922e" : "transparent"
                  }
                  strokeWidth="1.5"
                  style={{ cursor: "pointer" }}
                  onMouseEnter={(e) => {
                    setHoveredGroup(unitId);
                    setHoveredUnitInfo({ name: unitName, details });
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
                    setHoveredUnitInfo(null);
                  }}
                  onClick={() => {
                    console.log(
                      "Unit clicked:",
                      unitId,
                      "| Section:",
                      unitState?.sectionId,
                      "| Floor:",
                      unitState?.floorNum
                    );
                  }}
                />
              ))
            )}
          </svg>

          {hoveredUnitInfo && (
            <FloatingPortal>
              <div
                ref={refs.setFloating}
                style={{
                  ...floatingStyles,
                  zIndex: 9999,
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
                }}
              >
                {hoveredUnitInfo.name}
              </div>
            </FloatingPortal>
          )}
        </div>

        {/* Right panel */}
        <div
          style={{
            width: 185,
            flexShrink: 0,
            display: "flex",
            flexDirection: "column",
            gap: 12,
          }}
        >
          {hoveredUnitInfo ? (
            <RoomCard
              key={hoveredGroup}
              name={hoveredUnitInfo.name}
              details={hoveredUnitInfo.details}
            />
          ) : (
            <div
              style={{
                border: "1.5px dashed rgba(200,146,46,0.3)",
                borderRadius: 12,
                padding: "13px 16px",
                width: "100%",
                color: "#bbb",
                fontSize: 11,
                letterSpacing: 0.6,
                textAlign: "center",
                lineHeight: 1.6,
              }}
            >
              Hover a room to see dimensions
            </div>
          )}
          <button
            onClick={() =>
              navigate("/section", {
                state: unitState
                  ? {
                      floorNum: unitState.floorNum,
                      floorInfo: unitState.floorInfo,
                    }
                  : null,
              })
            }
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
          <button
            style={{
              background: "#f7f6f4",
              color: "#333",
              fontWeight: 600,
              fontSize: 13,
              padding: "12px 0",
              borderRadius: 10,
              width: "100%",
              border: "1px solid #e0e0e0",
              letterSpacing: 0.4,
            }}
          >
            Zoom Image
          </button>
        </div>
      </div>
    </>
  );
}
