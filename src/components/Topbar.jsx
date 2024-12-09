import React, { useState } from "react";
import { Link } from "react-router-dom";
const Topbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      {/* Main Navbar */}
      <div className={`bg-slate-100  }`}>
        <div className="container mx-auto  flex items-center justify-between  ">
          <div className="text-lg font-bold">ADMIN DASHBOARD</div>
          {/* Right Section  Menu for large screens) */}
          <div className="hidden ml-auto md:flex items-center space-x-6">
            {["Home", "About", "Profile", "Contact"].map((item) => (
              <Link
                key={item}
                to={`/${item.toLowerCase()}`}
                className="text-gray-700 hover:text-gray-900 cursor-pointer"
              >
                {item}
              </Link>
            ))}
            {/* Avatar */}
            <Link to="/profile">
              <img
                src="https://img.freepik.com/premium-vector/default-avatar-profile-icon-social-media-user-image-gray-avatar-icon-blank-profile-silhouette-vector-illustration_561158-3396.jpg?semt=ais_hybrid"
                alt="avatar"
                className="w-12 h-12 rounded-full overflow-hidden"
              />
            </Link>
          </div>

          {/* Mobile Menu Button (Hamburger) */}
          <div className="py-4 md:hidden mx-2 flex items-center">
            <button
              onClick={toggleNavbar}
              className="md:hidden text-gray-700 focus:outline-none"
            >
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
            </button>
          </div>

          {/* Mobile Dropdown Menu */}
          <div
            className={`${
              isOpen
                ? "scale-100 opacity-100 translate-y-0 block"
                : "hidden scale-0 opacity-0 translate-y-[-20] "
            }lg:flex flex-col lg:flex-row lg:space-y-0  absolute lg:static top-12 lg:top-0 left-0 right-0  lg:bg-transparent lg:p-0 transition-all duration-500 ease-out transform bg-slate-100`}
          >
           <div className="flex flex-col space-y-2 p-2">
            {["Home", "About", "Profile", "Contact"].map((item) => (
              <Link
                key={item}
                to={`/${item.toLowerCase()}`}
                className="text-gray-700 hover:text-gray-900"
              >
                {item}
              </Link>
            ))}
            {/* Avatar */}
            <Link to="/profile" className="mt-4 flex ">
              <img
                src="https://img.freepik.com/premium-vector/default-avatar-profile-icon-social-media-user-image-gray-avatar-icon-blank-profile-silhouette-vector-illustration_561158-3396.jpg?semt=ais_hybrid"
                alt="avatar"
                className="w-12 h-12 rounded-full"
              />
            </Link>
          </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Topbar;
