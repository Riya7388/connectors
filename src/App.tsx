import { useState, useEffect } from "react";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Home } from "./pages/Home";
import { Compare } from "./pages/Compare";
import { FindMentor } from "./pages/FindMentor";
import { BecomeMentor } from "./pages/BecomeMentor";
import "./App.css";

function App() {
  const [activeTab, setActiveTab] = useState("home");
  const [darkMode, setDarkMode] = useState(true);

  // Synchronize dark mode class with HTML tag
  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [darkMode]);

  const renderActivePage = () => {
    switch (activeTab) {
      case "home":
        return <Home setActiveTab={setActiveTab} />;
      case "compare":
        return <Compare />;
      case "find-mentor":
        return <FindMentor />;
      case "become-mentor":
        return <BecomeMentor />;
      default:
        return <Home setActiveTab={setActiveTab} />;
    }
  };

  return (
    <div className="min-h-screen bg-background text-on-surface flex flex-col font-sans transition-colors duration-300">
      {/* Navigation Header */}
      <Navbar 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        darkMode={darkMode} 
        setDarkMode={setDarkMode} 
      />

      {/* Main Page Layout Wrapper */}
      <div className="flex-1 w-full max-w-7xl mx-auto px-0">
        {renderActivePage()}
      </div>

      {/* Footer layout */}
      <Footer setActiveTab={setActiveTab} />
    </div>
  );
}

export default App;
