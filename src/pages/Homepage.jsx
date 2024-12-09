import React from "react";

const Homepage = ({ isNavbarOpen }) => {
  return (
    <div className={`transition-all duration-500 ${isNavbarOpen ? "pt-0":"pt-52"} `}>
      Homepage
    </div>
  );
};

export default Homepage;
