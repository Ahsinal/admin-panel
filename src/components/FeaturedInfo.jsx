import { ArrowDownward, ArrowUpward } from "@mui/icons-material";
import React from "react";

const FeaturedInfo = () => {
  return ( 
    <div className="flex flex-wrap  p-6  gap-6">
      <div className="bg-slate-100 p-4 shadow-lg w-1/3 sm:w-1/2 md:w-1/4">
        <h1 className="font-semibold text-lg text-gray-900">Revenue</h1>
        <div className="flex items-center space-x-2">
          <h1 className="text-4xl font-bold text-gray-800">$2,415</h1>
          <span className="text-red-600">
            -11.4 %<ArrowDownward />
          </span>
        </div>
        <span className="text-gray-700">Compared to last month</span>
      </div>
      <div className="bg-slate-100 p-4 shadow-lg w-1/3 sm:w-1/2 md:w-1/4">
        <h1 className="font-semibold text-lg text-gray-900">Sales</h1>
        <div className="flex items-center space-x-2">
          <h1 className="text-4xl font-bold text-gray-800">$4,755</h1>
          <span className="text-red-600">
            -14 % <ArrowDownward />
          </span>
        </div>
        <span className="text-gray-700">Compared to last month</span>
      </div>
      <div className="bg-slate-100 p-4 shadow-lg w-1/3 sm:w-1/2 md:w-1/4">
        <h1 className="font-semibold text-lg text-gray-900">Cost</h1>
        <div className="flex items-center space-x-2">
          <h1 className="text-4xl font-bold text-gray-800">$9,415</h1>
          <span className="text-green-600">
            -11.4 <ArrowUpward />
          </span>
        </div>
        <span className="text-gray-700">Compared to last month</span>
      </div>
    </div>
  );
};

export default FeaturedInfo;
