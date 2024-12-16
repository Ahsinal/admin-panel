import React from "react";
import FeaturedInfo from "../components/FeaturedInfo";
import Chart from "../components/Chart";
import { userData } from "../assets/data/Chartdata";
import WidgetSm from "../components/WidgetSm";

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
      
      <Chart data={userData} title="User Analytics" grid datakey="Active Users"/>

      <WidgetSm/>
    </section>
  );
};

export default Homepage;
