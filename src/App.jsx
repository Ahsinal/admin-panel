import Topbar from "./components/Topbar";
import ReactDOM from "react-dom";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./index.css";
import Homepage from "./pages/Homepage";
import { useState } from "react";
import SideNav from "./components/SideNav";
import Analytics from "./pages/Analytics";

function App() {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  // Handler to pass navbar open state to Homepage
  const handleNavbarToggle = (state) => {
    setIsNavbarOpen(state);
  };
  const [navbarHeight, setNavbarHeight] = useState(0);
  const[isSidenavOpen,SetIsSidenavOpen]=useState(0);
  const handleSideNav = () => {
    SetIsSidenavOpen((prev) => !prev);
  };
  return (
    <Router>
      <Topbar onNavbarToggle={handleNavbarToggle} setNavbarHeight={setNavbarHeight}/>
      <div className=" flex  ">
      <SideNav isSidenavOpen={isSidenavOpen} />
      <div className="bg-red-50 w-full">
      <Routes>
        <Route path="/home" element={<Homepage isNavbarOpen={isNavbarOpen}/>} />
        <Route path="/analytics" element={<Analytics isNavbarOpen={isNavbarOpen}/>} />
      </Routes>
      </div>
      </div>
    </Router>
  );
}

export default App;
