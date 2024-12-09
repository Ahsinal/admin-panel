import Topbar from "./components/Topbar";
import ReactDOM from "react-dom";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./index.css";
import Homepage from "./pages/Homepage";
import { useState } from "react";
import SideNav from "./components/SideNav";

function App() {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  // Handler to pass navbar open state to Homepage
  const handleNavbarToggle = (state) => {
    setIsNavbarOpen(state);
  };
  const [navbarHeight, setNavbarHeight] = useState(0);
  const[isSidenavOpen,SetIsSidenavOpen]=useState(0);
  const handleSideNav=(state)=>{
    isSidenavOpen(state)
  }
  return (
    <Router>
      <Topbar onNavbarToggle={handleNavbarToggle} setNavbarHeight={setNavbarHeight}/>
      <div className=" flex  justify-between">
      <SideNav isSidenavOpen={isSidenavOpen} />
      <div className="bg-red-50">
      <Routes>
        <Route path="/" element={<Homepage isNavbarOpen={isNavbarOpen}  navbarHeight={navbarHeight}/>} />
      </Routes>
      </div>
      </div>
    </Router>
  );
}

export default App;
