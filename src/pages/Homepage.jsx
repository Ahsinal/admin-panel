import React from "react";

const Homepage = ({ isNavbarOpen }) => {
  return (
    <div className={`transition-all duration-500 ${isNavbarOpen ? "pt-0":"pt-52"} `}>
      lorem5000
    </div>
  );
};

export default Homepage;
