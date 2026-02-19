import { useState } from "react";

type Tooltip = {
  text: string;
  x: number;
  y: number;
};

export default function App() {
  const [tooltip, setTooltip] = useState<Tooltip | null>(null);
  const [innerColor,setInnerColor] =useState<"" | "rgba(4, 1, 148, 0.1)">("")

  return (
    <div style={{ position: "relative", width: "800px" }}>
      
      {/* Background Image */}
      <img
        src="/arcadia.jpg"
        alt="Apartment"
        style={{ width: "100%", display: "block" }}
      />

      {/* SVG Overlay 27th to 41st floor */}
      <svg
        // viewBox="0 0 310 500"
        style={{
          backgroundColor:"rgba(255, 166, 0, 0.3)",
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
      >

        {/* Example Polygon Area */}
        <polygon
          points="350,99 350,105 350,99 354,98.5 354,98.5 354,104.5 354,104.5, 350,105 "
          fill={innerColor}
          stroke="gold"
          strokeWidth="0.5"
          onMouseEnter={() =>
          {
            setTooltip({ text: "2BHK Apartment - ₹45L", x: 200, y: 120 })
            setInnerColor("rgba(4, 1, 148, 0.1)")
          }
          }
          onMouseLeave={() => {
            setTooltip(null)
            setInnerColor("")
          }}
          onClick={() => alert("Open Apartment Details")}
        />
        <polygon
          points="358,95 358,102 358,96 362,95.5 362,95.5 362,101.5 362,101.5, 358,102  "
           fill={innerColor}
          stroke="gold"
          strokeWidth="0.5"
          onMouseEnter={() =>
          {
            setTooltip({ text: "2BHK Apartment - ₹45L", x: 200, y: 120 })
            setInnerColor("rgba(4, 1, 148, 0.1)")
          }
          }
          onMouseLeave={() => {
            setTooltip(null)
            setInnerColor("")
          }}
          onClick={() => alert("Open Apartment Details")}
        />
        <polygon
          points="370,95 370,102 370,96 382,94.5 382,94.5 382,100.5 374,101.5, 370,102  "
           fill={innerColor}
          stroke="gold"
          strokeWidth="0.5"
          onMouseEnter={() =>
          {
            setTooltip({ text: "2BHK Apartment - ₹45L", x: 200, y: 120 })
            setInnerColor("rgba(4, 1, 148, 0.1)")
          }
          }
          onMouseLeave={() => {
            setTooltip(null)
            setInnerColor("")
          }}
          onClick={() => alert("Open Apartment Details")}
        />

      </svg>

      {/* Tooltip */}
      {tooltip && (
        <div
          style={{
            position: "absolute",
            top: tooltip.y+100,
            left: tooltip.x,
            background: "black",
            color: "white",
            padding: "3px 5px",
            borderRadius: "5px",
            pointerEvents: "none",
          }}
        >
          {tooltip.text}
        </div>
      )}
    </div>
  );
}
