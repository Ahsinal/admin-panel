import React from "react";
import FeaturedInfo from "../components/FeaturedInfo";
import Chart from "../components/Chart";


const Homepage = ({ isNavbarOpen }) => {
  return (
    <section className=" p-6">
      <div
        className={`transition-all duration-500 ${
          isNavbarOpen ? "pt-0" : "pt-54"
        } `}
      >
        <FeaturedInfo />
      </div>
      
      <Chart />
    </section>
  );
};

export default Homepage;
