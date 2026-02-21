import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFloating, offset, flip, shift, FloatingPortal } from "@floating-ui/react";

const GOLD = "#c8922e";

const towerFeatures = [
  { label: "CCTV Surveillance" },
  { label: "Video Door Phone" },
  { label: "Power Backup" },
  { label: "Rainwater Harvesting" },
  { label: "Fire Safety Systems" },
];

const unitDetails = [
  { label: "3 BHK Apartments" },
  { label: "Floors 22 – 41" },
  { label: "Vastu Compliant" },
  { label: "Premium Flooring" },
  { label: "Modular Kitchen" },
];

const SidePanel = ({
  title,
  items,
}: {
  title: string;
  items: { label: string }[];
}) => (
  <div
    style={{
      width: 210,
      flexShrink: 0,
      background: "#f7f6f4",
      borderRadius: 12,
      overflow: "hidden",
      border: "1px solid #ebebeb",
      alignSelf: "flex-start",
    }}
  >
    <div
      style={{
        background: GOLD,
        color: "#fff",
        fontWeight: 700,
        fontSize: 13,
        letterSpacing: 0.5,
        padding: "12px 18px",
        textAlign: "center",
      }}
    >
      {title}
    </div>
    <ul style={{ margin: 0, padding: "14px 18px", listStyle: "none", display: "flex", flexDirection: "column", gap: 14 }}>
      {items.map((item) => (
        <li
          key={item.label}
          style={{
            display: "flex",
            alignItems: "flex-start",
            gap: 10,
            fontSize: 13,
            color: "#333",
            lineHeight: 1.4,
          }}
        >
          <span style={{
            width: 6,
            height: 6,
            borderRadius: "50%",
            background: GOLD,
            flexShrink: 0,
            marginTop: 5,
          }} />
          {item.label}
        </li>
      ))}
    </ul>
  </div>
);

export default function BuildingMap() {
  const navigate = useNavigate();
  const [tooltipText, setTooltipText] = useState<string | null>(null);
  const [hoveredGroup, setHoveredGroup] = useState<number | null>(null);

  const { refs, floatingStyles } = useFloating({
    open: tooltipText !== null,
    placement: "right",
    middleware: [offset(12), flip(), shift({ padding: 8 })],
  });

  const floor41 = [
    { points: "350,99 350,105 350,99 354,98.5 354,98.5 354,104.5 354,104.5, 350,105" },
    { points: "358,97 358,103 358,97 362,96.5 362,96.5 362,102.5 362,102.5, 358,103" },
    { points: "370,96 370,102 370,96 382,94.5 382,94.5 382,100.5 374,101.5, 370,102" },
    { points: "350,99 350,105 350,99 382,94.5 382,94.5 382,100.5  382,100.5 350,105" }
  ];

  const floor40 = [
    { points: "350,107 350,113 350,107 354,106.5 354,106.5 354,112.5 354,112.5 350,113" },
    { points: "358,107 358,110 358,104 362,103.5 362,103.5 362,109.5 362,109.5, 358,110" },
    { points: "370,104 370,110 370,104 382,102.5 382,102.5 382,108.5 374,109.5, 370,110" },
    {points: "350,107  354,106.5 354,106.5 358,107 358,104 362,103.5 362,103.5 370,104 370,104 382,102.5 382,102.5 382,108.5 374,109.5, 370,110 370,110  362,109.5 362,109.5, 358,110  358,110 354,112.5"}
  ];

  const floor39 = [
    { points: "350,115 350,121 350,115 354,114.5 354,114.5 354,120.5 354,120.5 350,121" },
    { points: "358,114 358,118 358,113 362,112.5 362,112.5 362,117.5 362,117.5 358,118" },
    { points: "370,112 370,118 370,112 382,110.5 382,110.5 382,116.5 374,117.5 370,118" },
    { points: "350,115 354,114.5 358,113 362,112.5 370,112 382,110.5 382,116.5 374,117.5 370,118 358,118 350,121" }
  ];

  const floor38 = [
    { points: "350,123 350,129 350,123 354,122.5 354,122.5 354,128.5 354,128.5 350,129" },
    { points: "358,125 358,128 358,122 362,121.5 362,121.5 362,127.5 362,127.5 358,128" },
    { points: "370,120 370,126 370,120 382,118.5 382,118.5 382,124.5 374,125.5 370,126" },
    { points: "350,123 354,122.5 358,122 362,121.5 370,120 382,118.5 382,124.5 374,125.5 370,126 358,128 350,129" }
  ];

  const floor37 = [
    { points: "350,131 350,137 350,131 354,130.5 354,130.5 354,136.5 354,136.5 350,137" },
    { points: "358,133 358,136 358,130 362,129.5 362,129.5 362,135.5 362,135.5 358,136" },
    { points: "370,128 370,134 370,128 382,126.5 382,126.5 382,132.5 374,133.5 370,134" },
    { points: "350,131 354,130.5 358,130 362,129.5 370,128 382,126.5 382,132.5 374,133.5 370,134 358,136 350,137" }
  ];

  const floor36 = [
    { points: "350,140 350,146 350,140 354,139.5 354,139.5 354,145.5 354,145.5 350,146" },
    { points: "358,142 358,145 358,139 362,138.5 362,138.5 362,144.5 362,144.5 358,145" },
    { points: "370,138 370,144 370,138 382,136.5 382,136.5 382,142.5 374,143.5 370,144" },
    { points: "350,140 354,139.5 358,139 362,138.5 370,138 382,136.5 382,142.5 374,143.5 370,144 358,145 350,146" }
  ];

  const floor35 = [
    { points: "350,148 350,154 350,148 354,147.5 354,147.5 354,153.5 354,153.5 350,154" },
    { points: "358,149 358,152 358,146 362,145.5 362,145.5 362,151.5 362,151.5 358,152" },
    { points: "370,146 370,152 370,146 382,144.5 382,144.5 382,150.5 374,151.5 370,152" },
    { points: "350,148 354,147.5 358,146 362,145.5 370,146 382,144.5 382,150.5 374,151.5 370,152 358,152 350,154" }
  ];

  const floor34 = [
    { points: "350,156 350,162 350,156 354,155.5 354,155.5 354,161.5 354,161.5 350,162" },
    { points: "358,157 358,160 358,154 362,153.5 362,153.5 362,159.5 362,159.5 358,160" },
    { points: "370,154 370,160 370,154 382,152.5 382,152.5 382,158.5 374,159.5 370,160" },
    { points: "350,156 354,155.5 358,154 362,153.5 370,154 382,152.5 382,158.5 374,159.5 370,160 358,160 350,162" }
  ];

  const floor33 = [
    { points: "350,164 350,170 350,164 354,163.5 354,163.5 354,169.5 354,169.5 350,170" },
    { points: "358,165 358,168 358,162 362,161.5 362,161.5 362,167.5 362,167.5 358,168" },
    { points: "370,162 370,168 370,162 382,160.5 382,160.5 382,166.5 374,167.5 370,168" },
    { points: "350,164 354,163.5 358,162 362,161.5 370,162 382,160.5 382,166.5 374,167.5 370,168 358,168 350,170" }
  ];

  const floor32 = [
    { points: "350,172 350,178 350,172 354,171.5 354,171.5 354,177.5 354,177.5 350,178" },
    { points: "358,173 358,176 358,170 362,169.5 362,169.5 362,175.5 362,175.5 358,176" },
    { points: "370,170 370,176 370,170 382,168.5 382,168.5 382,174.5 374,175.5 370,176" },
    { points: "350,172 354,171.5 358,170 362,169.5 370,170 382,168.5 382,174.5 374,175.5 370,176 358,176 350,178" }
  ];

  const floor31 = [
    { points: "350,180 350,186 350,180 354,179.5 354,179.5 354,185.5 354,185.5 350,186" },
    { points: "358,181 358,184 358,178 362,177.5 362,177.5 362,183.5 362,183.5 358,184" },
    { points: "370,178 370,184 370,178 382,176.5 382,176.5 382,182.5 374,183.5 370,184" },
    { points: "350,180 354,179.5 358,178 362,177.5 370,178 382,176.5 382,182.5 374,183.5 370,184 358,184 350,186" }
  ];

  const floor30 = [
    { points: "350,188 350,194 350,188 354,187.5 354,187.5 354,193.5 354,193.5 350,194" },
    { points: "358,190 358,193 358,187 362,186.5 362,186.5 362,192.5 362,192.5 358,193" },
    {points:"370,187 370,194 370,187 382,185.5 382,185.5 382,192.3 382,192.3 370,194"},
    { points: "350,188 354,187.5 358,187 362,186.5 370,187 382,185.5 382,192.3 382,192.3 370,194 358,193 350,194" }
  ];

  const floor29 = [
    { points: "350,196 350,202 350,196 354,195.5 354,195.5 354,201.5 354,201.5 350,202" },
    { points: "358,198 358,201 358,195 362,194.5 362,194.5 362,200.5 362,200.5 358,201" },
    { points: "370,195 370,201 370,195 382,194 382,194 382,200.5 382,200.5 370,201.5" },
    { points: "350,196 354,195.5 358,195 362,194.5 370,195 382,194 382,200.5 382,200.5 370,201.5 358,201 350,202" }
  ];

  const floor28 = [
    { points: "350,205 350,211 350,205 354,204.5 354,204.5 354,210.5 354,210.5 350,211" },
    { points: "358,207 358,210 358,204 362,203.5 362,203.5 362,209.5 362,209.5 358,210" },
    { points: "370,204 370,210 370,204 382,202.5 382,202.5 382,208.5 374,209.5 370,210" },
    { points: "350,205 354,204.5 358,204 362,203.5 370,204 382,202.5 382,208.5 374,209.5 370,210 358,210 350,211" }
  ];

  const floor27 = [
    { points: "350,213.5 350,219.5 350,213.5 354,213.2 354,213.2 354,218.7 354,218.7 350,219.5" },
    { points: "358,215 358,218 358,212 362,211.5 362,211.5 362,217.5 362,217.5 358,218" },
    { points: "370,212 370,218 370,212 382,210.5 382,210.5 382,216.5 374,217.5 370,218" },
    { points: "350,213.5 354,213.2 358,212 362,211.5 370,212 382,210.5 382,216.5 374,217.5 370,218 358,218 350,219.5" }
  ];

  const floor26 = [
    { points: "350,221 350,227 350,221 354,220.5 354,220.5 354,226.5 354,226.5 350,227" },
    { points: "358,223 358,226 358,220 362,219.5 362,219.5 362,225.5 362,225.5 358,226" },
    { points: "370,220.5 370,226.5 370,220.5 382,219.0 382,219 382,225 374,226 370,226.5" },
    { points: "350,221 354,220.5 358,220 362,219.5 370,220.5 382,219 382,225 374,226 370,226.5 358,226 350,227" }
  ];

  const floor25 = [
    { points: "350,229 350,235 350,229 354,228.5 354,228.5 354,234.5 354,234.5 350,234.8  " },
    { points: "358,231 358,234 358,228 362,227.5 362,227.5 362,233.5 362,233.5 358,234" },
    { points: "370,228.5 370,234.5 370,228.5 382,227 382,227 382,233 374,234 370,234.5" },
    { points: "350,229 354,228.5 358,228 362,227.5 370,228.5 382,227 382,233 374,234 370,234.5 358,234 350,234.8" }
  ];

  const floor24 = [
    { points: "350,237.4 350,243.4 350,237.4 354,236.9 354,236.9 354,242.9 354,242.9 350,243.4" },
    { points: "358,239.5 358,242.5 358,236.5 362,236 362,236 362,242 362,242 358,242.5" },
    { points: "370,236.8 370,242.8 370,236.8 382,235.3 382,235.3 382,241.8 382,241.5 370,242.9" },
    { points: "350,237.4 354,236.9 358,236.5 362,236 370,236.8 382,235.3 382,241.8 382,241.5 370,242.9 358,242.5 350,243.4" }
  ];

  const floor23 = [
    { points: "350,245.8 350,251.8 350,245.8 354,245.3 354,245.3 354,251.3 354,251.3 350,251.8" },
    { points: "358,247.4 358,250.4 358,244.4 362,243.9 362,243.9 362,249.9 362,249.9 358,250.4" },
    { points: "370,245 370,251 370,245 382,243.5 382,243.5 382,249.5 374,251 370,251" },
    { points: "350,245.8 354,245.3 358,244.4 362,243.9 370,245 382,243.5 382,249.5 374,251 370,251 358,250.4 350,251.8" }
  ];

  const floor22 = [
    { points: "350,253.5 350,259.5 350,253.5 354,253 354,253 354,259 354,259 350,259.5" },
    { points: "358,256 358,259 358,253 362,252.5 362,252.5 362,258.5 362,258.5 358,259" },
    { points: "370,253 370,259 370,253 382,251.5 382,251.5 382,257.5 374,258.5 370,258.5" },
    { points: "350,253.5 354,253 358,253 362,252.5 370,253 382,251.5 382,257.5 374,258.5 370,258.5 358,259 350,259.5" }
  ];

  const floors = [
    { floorNum: 41, polygons: floor41 },
    { floorNum: 40, polygons: floor40 },
    { floorNum: 39, polygons: floor39 },
    { floorNum: 38, polygons: floor38 },
    { floorNum: 37, polygons: floor37 },
    { floorNum: 36, polygons: floor36 },
    { floorNum: 35, polygons: floor35 },
    { floorNum: 34, polygons: floor34 },
    { floorNum: 33, polygons: floor33 },
    { floorNum: 32, polygons: floor32 },
    { floorNum: 31, polygons: floor31 },
    { floorNum: 30, polygons: floor30 },
    { floorNum: 29, polygons: floor29 },
    { floorNum: 28, polygons: floor28 },
    { floorNum: 27, polygons: floor27 },
    { floorNum: 26, polygons: floor26 },
    { floorNum: 25, polygons: floor25 },
    { floorNum: 24, polygons: floor24 },
    { floorNum: 23, polygons: floor23 },
    { floorNum: 22, polygons: floor22 },
  ];

  return (
    <div style={{
      display: "flex",
      alignItems: "flex-start",
      gap: 24,
      padding: "28px 36px",
      maxWidth: 1700,
      margin: "0 auto",
    }}>
      {/* Left panel */}
      <SidePanel title="Tower Features" items={towerFeatures} />

      {/* Center: Building Image + SVG */}
      <div style={{
        flex: 1,
        position: "relative",
        borderRadius: 12,
        overflow: "hidden",
        boxShadow: "0 2px 16px rgba(0,0,0,0.10)",
        border: "1px solid #e8e8e8",
      }}>
        <img
          src="/arcadia.jpg"
          alt="Arcadia Building"
          style={{ width: "100%", display: "block" }}
        />
        <svg
          viewBox="0 0 800 472"
          preserveAspectRatio="none"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
          }}
        >
          {floors.flatMap(({ floorNum, polygons }) =>
            polygons.map((poly, j) => {
              const isOutline = j >= 3;
              return (
                <polygon
                  key={`${floorNum}-${j}`}
                  points={poly.points}
                  fill={!isOutline && hoveredGroup === floorNum ? "rgba(244, 209, 32, 0.45)" : "transparent"}
                  stroke={!isOutline && hoveredGroup === floorNum ? "#c8922e" : "transparent"}
                  strokeWidth="0.8"
                  style={{ cursor: "pointer" }}
                  onMouseEnter={(e) => {
                    setHoveredGroup(floorNum);
                    setTooltipText(`Floor ${floorNum} · 3 BHK · ₹45L`);
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
                    navigate("/section", {
                      state: {
                        floorNum,
                        floorInfo: `Floor ${floorNum} · 3 BHK · ₹45 Lakhs`,
                      },
                    })
                  }
                />
              );
            })
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

      {/* Right panel */}
      <SidePanel title="Unit Details" items={unitDetails} />
    </div>
  );
}
