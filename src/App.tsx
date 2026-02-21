import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import BuildingMap from "./components/BuildingMap";
import ArcadiaSection from "./components/ArcadiaSection";
import ArcadiaFlatUnit3BHK from "./components/ArcadiaFlatUnit3BHK";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<BuildingMap />} />
        <Route path="/section" element={<ArcadiaSection />} />
        <Route path="/unit" element={<ArcadiaFlatUnit3BHK />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
}
