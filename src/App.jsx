import Topbar from "./components/Topbar";
import ReactDOM from "react-dom";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./index.css";
import Homepage from "./pages/Homepage";
import { useState } from "react";

function App() {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  // Handler to pass navbar open state to Homepage
  const handleNavbarToggle = (state) => {
    setIsNavbarOpen(state);
  };
  return (
    <Router>
      <Topbar onNavbarToggle={handleNavbarToggle} />
      <Routes>
        <Route path="/" element={<Homepage isNavbarOpen={isNavbarOpen} />} />
      </Routes>
    </Router>
  );
}

export default App;
