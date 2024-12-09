import {
  CurrencyBitcoin,
  Feedback,
  GraphicEq,
  Home,
  LineStyle,
  Mail,
  ManageAccounts,
  MessageRounded,
  Person,
  PrivacyTip,
  ProductionQuantityLimits,
  Report,
  Security,
  Timeline,
  TrendingUp,
  UsbRounded,
} from "@mui/icons-material";
import { Table } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const SideNav = ({ isSidenavOpen }) => {
  const [selectedLink, setSelectedLink] = useState("");
  const handleSelected = (item) => {
    setSelectedLink(item);
  };
  return (
    <div
      className={`min-h-screen min-w-60 max-w-sm bg-gradient-to-r  from-primary-500 to-primary-100  p-4${
        isSidenavOpen ? "" : ""
      }`}
    >
      {/* <h3 className='text-white text-xl  font-bold mb-4 relative group cursor-pointer '>
            Dashboard
            <span className='absolute  left-0 bottom-0 w-0 h-[3px]  bg-gradient-to-r from-purple-500 to-purple-700 rounded transition-all duration-300 group-hover:w-full '> </span>
        </h3> */}

      <ul className="space-y-4 mb-4 px-2">
        <h1 className="text-white text-lg font-normal">Dashboard</h1>
        <li
          onClick={() => handleSelected("home")}
          className={`flex items-center px-3 py-2 space-x-2 text-white cursor-pointer rounded-lg ${
            selectedLink === "home"
              ? "bg-teal-100 text-primary-500"
              : "hover:text-teal-200"
          }`}
        >
          <LineStyle />
          <Link to="/home">Home</Link>
        </li>
        <li
          onClick={() => handleSelected("analytics")}
          className={`flex items-center px-3 py-2 space-x-2 text-white cursor-pointer rounded-lg ${
            selectedLink === "analytics"
              ? "bg-teal-100 text-primary-500"
              : "hover:text-teal-200"
          }`}
        >
          <Timeline />
          <Link to="/analytics">Analytics</Link>
        </li>
        <li className="flex items-center px-1 space-x-2 text-white hover:text-teal-200 cursor-pointer">
          <TrendingUp />
          <Link to="/">Sales</Link>
        </li>
        <hr className="h-[1px] bg-gradient-to-r from-white via-gray-300 to-white my-4 border-none" />
      </ul>
      <ul className="space-y-4 mb-4 px-2">
        <h1 className="text-white text-lg font-normal">Quick Menu</h1>
        <li className="flex items-center px-1 space-x-2 text-white hover:text-teal-200 cursor-pointer">
          <Person />
          <Link to="/">User</Link>
        </li>
        <li className="flex items-center px-1 space-x-2 text-white hover:text-teal-200 cursor-pointer">
          <ProductionQuantityLimits />
          <Link to="/">Products</Link>
        </li>
        <li className="flex items-center px-1 space-x-2 text-white hover:text-teal-200 cursor-pointer">
          <CurrencyBitcoin />
          <Link to="/">Transactions</Link>
        </li>
        <li className="flex items-center px-1 space-x-2 text-white hover:text-teal-200 cursor-pointer">
          <Report />
          <Link to="/">Reports</Link>
        </li>
        <hr className="h-[1px] bg-gradient-to-r from-white via-gray-300 to-white my-4 border-none" />
      </ul>
      <ul className="space-y-4 mb-4 px-2">
        <h1 className="text-white text-lg font-normal">Notifications</h1>
        <li className="flex items-center px-1 space-x-2 text-white hover:text-teal-200 cursor-pointer">
          <Mail />
          <Link to="/">Mail</Link>
        </li>
        <li className="flex items-center px-1 space-x-2 text-white hover:text-teal-200 cursor-pointer">
          <Feedback />
          <Link to="/">Feedback</Link>
        </li>
        <li className="flex items-center px-1 space-x-2 text-white hover:text-teal-200 cursor-pointer">
          <MessageRounded />
          <Link to="/">Messages</Link>
        </li>
        <hr className="h-[1px] bg-gradient-to-r from-white via-gray-300 to-white my-4 border-none" />
      </ul>
      <ul className="space-y-4 mb-4 px-2">
        <h1 className="text-white text-lg font-normal">Staff</h1>
        <li className="flex items-center px-1 space-x-2 text-white hover:text-teal-200 cursor-pointer">
          <ManageAccounts />
          <Link to="/">Manage</Link>
        </li>
        <li className="flex items-center px-1 space-x-2 text-white hover:text-teal-200 cursor-pointer">
          <Timeline />
          <Link to="/">Analytics</Link>
        </li>
        <li className="flex items-center px-1 space-x-2 text-white hover:text-teal-200 cursor-pointer">
          <TrendingUp />
          <Link to="/">Sales</Link>
        </li>
        <hr className="h-[1px] bg-gradient-to-r from-white via-gray-300 to-white my-4 border-none" />
      </ul>
    </div>
  );
};

export default SideNav;
