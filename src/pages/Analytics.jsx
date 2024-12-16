import React from "react";

const Analytics = ({ isNavbarOpen }) => {
  return (
    // <div className={`transition-all duration-500 ${isNavbarOpen ? "pt-0":"pt-52"} `}>
    //   Analytics
    // </div>
    <div
        className={`transition-all duration-500 ${
          isNavbarOpen ? "pt-0" : "pt-54"
        } `}
      >
        Analytics
      </div>
  );
};

export default Analytics;
