import React from "react";
import FeaturedInfo from "../components/FeaturedInfo";

const Homepage = ({ isNavbarOpen }) => {
  return (
    <div className={`transition-all duration-500 ${isNavbarOpen ? "pt-0":"pt-54"} `}>
      <FeaturedInfo/>
    </div>
  );
};

export default Homepage;
