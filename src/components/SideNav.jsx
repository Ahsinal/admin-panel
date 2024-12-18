import {
  CurrencyBitcoin,
  Feedback,
  LineStyle,
  Mail,
  ManageAccounts,
  MessageRounded,
  Person,
  ProductionQuantityLimits,
  Report,
  Timeline,
  TrendingUp,
} from "@mui/icons-material";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const SideNav = ({ isSidenavOpen }) => {
  const navigate = useNavigate();
  const [selectedLink, setSelectedLink] = useState("home");
  const handleSelected = (name, path) => {
    setSelectedLink(name); // Updates the selected link state
    navigate(path); // Navigates to the specified path
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
          onClick={() => handleSelected("home", "/")}
          className={`flex items-center px-3 py-1 space-x-2 text-gray-800 cursor-pointer rounded-lg ${
            selectedLink === "home"
              ? "bg-teal-100 text-primary-500"
              : " text-white hover:text-teal-200 "
          }`}
        >
          <LineStyle />
          <span>Home</span>
        </li>
        <li
          onClick={() => handleSelected("analytics", "/analytics")}
          className={`flex items-center px-3 py-1 space-x-2 text-gray-800 cursor-pointer rounded-lg ${
            selectedLink === "analytics"
              ? "bg-teal-100 text-primary-500"
              : "text-white hover:text-teal-200 "
          }`}
        >
          <Timeline />
          <span>Analytics</span>
        </li>
        <li
          onClick={() => handleSelected("sales", "/sales")}
          className={`flex items-center px-3 py-1 space-x-2 text-gray-800 cursor-pointer rounded-lg ${
            selectedLink === "sales"
              ? "bg-teal-100 text-primary-500"
              : "text-white hover:text-teal-200"
          }`}
        >
          <TrendingUp />
          <Link to="/">Sales</Link>
        </li>
        <hr className="h-[1px] bg-gradient-to-r from-white via-gray-300 to-white my-4 border-none" />
      </ul>
      <ul className="space-y-4 mb-4 px-2">
        <h1 className="text-white text-lg font-normal">Quick Menu</h1>
        <li
          onClick={() => handleSelected("users", "/users")}
          className={`flex items-center px-3 py-1  space-x-2  cursor-pointer rounded-lg ${
            selectedLink === "users"
              ? "bg-teal-100 text-primary-500"
              : "text-white hover:text-teal-500"
          }`}
        >
          <Person />
          <Link to="/users">Users</Link>
        </li>
        <li
          onClick={() => handleSelected("products", "/products")}
          className={`flex items-center px-3 py-1 space-x-2 cursor-pointer rounded-lg ${
            selectedLink === "products"
              ? "bg-teal-100 text-primary-500"
              : "text-white hover:text-teal-200"
          }`}
        >
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
