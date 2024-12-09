import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  AdminPanelSettingsOutlined,
  DarkMode,
  Language,
  NotificationAdd,
  NotificationImportant,
  NotificationsActiveIcon,
  Settings,
} from "@mui/icons-material";
const Topbar = ({ onNavbarToggle }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
    onNavbarToggle(isOpen); //// Pass state to parent (Homepage)
  };

  const [isScrolled, setIsScrolled] = useState(false);
  const navbarRef = useRef(null);
  // Detect scroll to determine when navbar should stick
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 80) {
        setIsScrolled(true); // When scrolled more than 50px
      } else {
        setIsScrolled(false); // Reset when at top
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* Main Navbar */}
      <div
        className={`bg-gradient-to-r from-primary-500 to-primary-400 transition-transform bg-opacity-100 duration-500 ease-in-out ${
          isScrolled ? "transform translate-y-0 sticky top-0 z-10" : ""
        }`}
      >
        <div className=" mx-4  flex items-center justify-between   lg:py-4 ">
          <div className="flex items-center text-white  space-x-2">
            <AdminPanelSettingsOutlined />
            <Link to="/" className="text-lg font-bold  relative group">
              ADMIN DASHBOARD
              <span className="absolute  left-0 bottom-0 w-0 h-[3px]  bg-gradient-to-r from-slate-500 to-white rounded transition-all duration-300 group-hover:w-full ">
                {" "}
              </span>
            </Link>
          </div>

          {/* Right Section  Menu for large screens) */}
          <div className="hidden ml-auto md:flex items-center space-x-6 ">
            <Link to="/" className=" text-white hover:text-teal-200">
              <DarkMode className="text-2xl" />
            </Link>
            <Link to="/" className=" text-white hover:text-teal-200">
              <Language className="text-2xl" />
            </Link>
            <Link to="/" className=" text-white hover:text-teal-200">
              <Settings className="text-2xl" />
            </Link>
            <Link
              to="/"
              className="flex items-center relative text-white hover:text-teal-200"
            >
              <NotificationImportant className="text-2xl" />
              <span className="absolute top-0 right-0 bg-red-500 text-teal-200 text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center transform translate-x-3 -translate-y-2">
                2
              </span>
            </Link>
            {/* Avatar */}
            <Link to="/profile">
              <img
                src="https://img.freepik.com/premium-vector/default-avatar-profile-icon-social-media-user-image-gray-avatar-icon-blank-profile-silhouette-vector-illustration_561158-3396.jpg?semt=ais_hybrid"
                alt="avatar"
                className="w-12 h-12 rounded-full overflow-hidden"
              />
            </Link>
          </div>

          {/* Mobile Menu Button (Hamburger/close) */}
          <div className="py-4  md:hidden mx-2 flex items-center">
            <button
              onClick={toggleNavbar}
              className="md:hidden text-gray-700 focus:outline-none"
            >
              {isOpen ? (
                // Close Icon
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>

          {/* Mobile Dropdown Menu */}
          {isOpen && (
            <div className="md:hidden fixed top-12 left-0 right-0 bg-gradient-to-r from-slate-400 to-slate-200 shadow-md z-10 flex flex-col items-start space-y-2 p-4">
              {["Home", "About", "Profile"].map((item) => (
                <Link
                  key={item}
                  to={`/${item.toLowerCase()}`}
                  className="text-gray-700 hover:text-gray-900"
                  onClick={() => setIsOpen(false)} // Close menu on click
                >
                  {item}
                </Link>
              ))}
              <Link to="/" className="text-gray-700 hover:text-gray-900">
                <NotificationImportant />
              </Link>
              {/* Avatar */}
              <Link to="/profile" className="flex mt-2">
                <img
                  src="https://img.freepik.com/premium-vector/default-avatar-profile-icon-social-media-user-image-gray-avatar-icon-blank-profile-silhouette-vector-illustration_561158-3396.jpg?semt=ais_hybrid"
                  alt="avatar"
                  className="w-12 h-12 rounded-full"
                />
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Topbar;
