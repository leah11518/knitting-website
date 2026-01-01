import { Routes, Route } from "react-router-dom";
import "./App.css"; // Optional: global styles
import { Navbar } from "./navbar";
import { Patterns } from "./pages/patterns/pattern-page";
import { PatternSteps } from "./pages/patterns/pattern-info";

export default function App() {
  return (
    <div>
      <Navbar />
      <div className="pt-16">
        <Routes>
          {/* Define the paths for each component */}
          <Route path="/" element={<Patterns />} />
          <Route path="/patterns" element={<Patterns />} />
          <Route path="/patterns/:patternId" element={<PatternSteps />} />
          {/* <Route path="/contact" element={<Notes />} />
          <Route path="/want-to-knit" element={<KnittingWants />} /> */}
        </Routes>
      </div>
    </div>
  );
}
