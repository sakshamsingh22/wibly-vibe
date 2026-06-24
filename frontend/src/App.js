import "@/App.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Home from "@/pages/Home";
import Privacy from "@/pages/Privacy";
import Terms from "@/pages/Terms";

function ScrollManager() {
  const location = useLocation();
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.slice(1);
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 50);
    } else {
      window.scrollTo({ top: 0, behavior: "instant" });
    }
  }, [location.pathname, location.hash]);
  return null;
}

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollManager />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
