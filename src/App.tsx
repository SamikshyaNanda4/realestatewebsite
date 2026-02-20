import { Routes, Route } from "react-router-dom";
import BuildingMap from "./components/BuildingMap";
import ArcadiaSection from "./components/ArcadiaSection";
import NotFound from "./pages/NotFound";

const centeredPage: React.CSSProperties = {
  minHeight: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

export default function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <div style={centeredPage}>
            <BuildingMap width={1500} />
          </div>
        }
      />
      <Route
        path="/section"
        element={
          <div style={centeredPage}>
            <ArcadiaSection width={1000} />
          </div>
        }
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
