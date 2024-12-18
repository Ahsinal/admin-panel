import Topbar from "./components/Topbar";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./index.css";
import Homepage from "./pages/Homepage";
import { useState } from "react";
import SideNav from "./components/SideNav";
import Analytics from "./pages/Analytics";
import Sales from "./pages/Sales";
import UserList from "./pages/UserList";
import User from "./pages/User";
import NotFound from "./pages/NotFound";
import NewUser from "./pages/NewUser";

function App() {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  // Handler to pass navbar open state to Homepage
  const handleNavbarToggle = (state) => {
    setIsNavbarOpen(state);
  };
  const [navbarHeight, setNavbarHeight] = useState(0);
  const [isSidenavOpen, SetIsSidenavOpen] = useState(0);
  const handleSideNav = () => {
    SetIsSidenavOpen((prev) => !prev);
  };
  return (
    <Router>
      <Topbar
        onNavbarToggle={handleNavbarToggle}
        setNavbarHeight={setNavbarHeight}
      />
      <div className=" flex  ">
        <SideNav isSidenavOpen={isSidenavOpen} />
        <div className=" w-full">
          <Routes>
            <Route
              path="/"
              element={<Homepage isNavbarOpen={isNavbarOpen} />}
            />
            <Route
              path="/analytics"
              element={<Analytics isNavbarOpen={isNavbarOpen} />}
            />
            <Route
              path="/sales"
              element={<Sales isNavbarOpen={isNavbarOpen} />}
            />
            <Route
              path="/users"
              element={<UserList isNavbarOpen={isNavbarOpen} />}
            />
            <Route
              path="/user/:id"
              element={<User isNavbarOpen={isNavbarOpen} />}
            />
            <Route
              path="/user/new"
              element={<NewUser isNavbarOpen={isNavbarOpen} />}
            />
            {/* Fallback route for unmatched routes */}
            <Route path="/notfound" element={<NotFound />} />
            {/* fallback route for undefined paths */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
