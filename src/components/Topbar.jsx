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
        <div className="container mx-auto  flex items-center justify-between px-4 lg:py-4 ">
          <div className="text-lg font-bold">ADMIN DASHBOARD</div>
          {/* Right Section  Menu for large screens) */}
          <div className="hidden ml-auto md:flex items-center space-x-6 ">
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
            <div className="md:hidden absolute top-12 left-0 right-0 bg-slate-100 shadow-md z-10 flex flex-col items-start space-y-2 p-4">
              {["Home", "About", "Profile", "Contact"].map((item) => (
                <Link
                  key={item}
                  to={`/${item.toLowerCase()}`}
                  className="text-gray-700 hover:text-gray-900"
                  onClick={() => setIsOpen(false)} // Close menu on click
                >
                  {item}
                </Link>
              ))}
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
