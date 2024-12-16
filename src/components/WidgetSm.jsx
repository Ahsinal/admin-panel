import { Visibility } from "@mui/icons-material";
import React from "react";

const WidgetSm = () => {
  const Button = ({ type }) => {
    // Convert type to lowercase and determine button color
    const typeLower = type.toLowerCase();
    const btnColor =
      typeLower === "approved"
        ? "bg-green-500 text-white "
        : typeLower === "pending"
        ? "bg-yellow-500 text-white  "
        : typeLower === "rejected"
        ? "bg-red-500   text-white"
        : "bg-gray-500 text-white";
    return <div className={ `min-w-20 inline-block px-4 py-1 rounded-md text-sm font-semibold transition duration-200 ${btnColor}`}>{type}</div>;
  };
  return (
    <div className="flex  justify-between  space-x-4">
      <div className="shadow-lg bg-slate-50 p-4 rounded-md w-2/5 sm:w-1/2 md:w-1/4">
        {/* <h1 className="text-xl font-semibold my-2 text-gray-800">
          {" "}
          New Members
        </h1> */}
        <h1 className="text-lg px-4 py-2  my-3 text-white  w-auto bg-yellow-600 inline-block">
          {" "}
          New Members
        </h1>
        <ul className="space-y-2">
          <li className="flex items-center justify-between bg-slate-100 p-1">
            <img
              src="https://img.freepik.com/premium-vector/default-avatar-profile-icon-social-media-user-image-gray-avatar-icon-blank-profile-silhouette-vector-illustration_561158-3396.jpg?semt=ais_hybrid"
              alt="avatar"
              className="w-12 h-12 rounded-full overflow-hidden"
            />
            <div className="">
              <p className="font-bold text-gray-800"> Anna Zukerberg</p>
              <p className="text-sm font-semibold text-gray-700">
                Software Engineer
              </p>
            </div>
            <button className="flex items-center space-x-2 text-gray-600 hover:text-primary-500">
              <Visibility />
              {/* View */}
            </button>
          </li>
          <li className="flex items-center justify-between bg-slate-100 p-1">
            <img
              src="https://img.freepik.com/premium-vector/default-avatar-profile-icon-social-media-user-image-gray-avatar-icon-blank-profile-silhouette-vector-illustration_561158-3396.jpg?semt=ais_hybrid"
              alt="avatar"
              className="w-12 h-12 rounded-full overflow-hidden"
            />
            <div className="">
              <p className="font-bold text-gray-800"> Anna Zukerberg</p>
              <p className="text-sm font-semibold text-gray-700">
                Software Engineer
              </p>
            </div>
            <button className="flex items-center space-x-2 text-gray-600 hover:text-primary-500">
              <Visibility />
              {/* View */}
            </button>
          </li>
          <li className="flex items-center justify-between bg-slate-100 p-1">
            <img
              src="https://img.freepik.com/premium-vector/default-avatar-profile-icon-social-media-user-image-gray-avatar-icon-blank-profile-silhouette-vector-illustration_561158-3396.jpg?semt=ais_hybrid"
              alt="avatar"
              className="w-12 h-12 rounded-full overflow-hidden"
            />
            <div className="">
              <p className="font-bold text-gray-800"> Anna Zukerberg</p>
              <p className="text-sm font-semibold text-gray-700">
                Software Engineer
              </p>
            </div>
            <button className="flex items-center space-x-2 text-gray-600 hover:text-primary-500">
              <Visibility />
              {/* View */}
            </button>
          </li>
          <li className="flex items-center justify-between bg-slate-100 p-1">
            <img
              src="https://img.freepik.com/premium-vector/default-avatar-profile-icon-social-media-user-image-gray-avatar-icon-blank-profile-silhouette-vector-illustration_561158-3396.jpg?semt=ais_hybrid"
              alt="avatar"
              className="w-12 h-12 rounded-full overflow-hidden"
            />
            <div className="">
              <p className="font-bold text-gray-800"> Anna Zukerberg</p>
              <p className="text-sm font-semibold text-gray-700">
                Software Engineer
              </p>
            </div>
            <button className="flex items-center space-x-2 text-gray-600 hover:text-primary-500">
              <Visibility />
              {/* View */}
            </button>
          </li>
          <li className="flex items-center justify-between bg-slate-100 p-1">
            <img
              src="https://img.freepik.com/premium-vector/default-avatar-profile-icon-social-media-user-image-gray-avatar-icon-blank-profile-silhouette-vector-illustration_561158-3396.jpg?semt=ais_hybrid"
              alt="avatar"
              className="w-12 h-12 rounded-full overflow-hidden"
            />
            <div className="">
              <p className="font-bold text-gray-800"> Anna Zukerberg</p>
              <p className="text-sm font-semibold text-gray-700">
                Software Engineer
              </p>
            </div>
            <button className="flex items-center space-x-2 text-gray-600 hover:text-primary-500">
              <Visibility />
              {/* View */}
            </button>
          </li>
        </ul>
      </div>

      <div className="shadow-lg bg-slate-50 p-4 rounded-md w-3/5 sm:w-1/2 md:w-3/4">
        <h1 className="text-lg px-4 py-2  my-3 text-white rounded-full w-auto bg-lime-700 inline-block">
          {" "}
          Latest Transactions
        </h1>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200">
            <thead>
              <tr className="bg-gray-100 text-left ">
                <th className="py-2 px-4 text-gray-900 font-semibold">
                  Customer
                </th>
                <th className="py-2 px-4 text-gray-900 font-semibold">Date</th>
                <th className="py-2 px-4 text-gray-900 font-semibold">
                  Amount
                </th>
                <th className="py-2 px-4 text-gray-900 font-semibold">
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t">
                <td className="flex items-center  py-2 px-4">
                  <img
                    src="https://img.freepik.com/premium-vector/default-avatar-profile-icon-social-media-user-image-gray-avatar-icon-blank-profile-silhouette-vector-illustration_561158-3396.jpg?semt=ais_hybrid"
                    alt="avatar"
                    className="w-10 h-10 rounded-full overflow-hidden mr-2"
                  />
                  <p>Suman Poudel</p>
                </td>
                <td className="py-2 px-4">23rd July, 2025</td>
                <td className="py-2 px-4">5000 $</td>
                <td className="py-2 px-4">
                  <Button type="Approved" />
                </td>
              </tr>

              <tr className="border-t">
                <td className="flex items-center  py-2 px-4">
                  <img
                    src="https://img.freepik.com/premium-vector/default-avatar-profile-icon-social-media-user-image-gray-avatar-icon-blank-profile-silhouette-vector-illustration_561158-3396.jpg?semt=ais_hybrid"
                    alt="avatar"
                    className="w-10 h-10 rounded-full overflow-hidden mr-2"
                  />
                  <p>Suman Poudel</p>
                </td>
                <td className="py-2 px-4">23rd July, 2025</td>
                <td className="py-2 px-4">5000 $</td>
                <td className="py-2 px-4">
                  <Button type="Approved" />
                </td>
              </tr>
              <tr className="border-t">
                <td className="flex items-center  py-2 px-4">
                  <img
                    src="https://img.freepik.com/premium-vector/default-avatar-profile-icon-social-media-user-image-gray-avatar-icon-blank-profile-silhouette-vector-illustration_561158-3396.jpg?semt=ais_hybrid"
                    alt="avatar"
                    className="w-10 h-10 rounded-full overflow-hidden mr-2"
                  />
                  <p>Suman Poudel</p>
                </td>
                <td className="py-2 px-4">23rd July, 2025</td>
                <td className="py-2 px-4">5000 $</td>
                <td className="py-2 px-4">
                  <Button type="Rejected" />
                </td>
              </tr>
              <tr className="border-t">
                <td className="flex items-center  py-2 px-4">
                  <img
                    src="https://img.freepik.com/premium-vector/default-avatar-profile-icon-social-media-user-image-gray-avatar-icon-blank-profile-silhouette-vector-illustration_561158-3396.jpg?semt=ais_hybrid"
                    alt="avatar"
                    className="w-10 h-10 rounded-full overflow-hidden mr-2"
                  />
                  <p>Suman Poudel</p>
                </td>
                <td className="py-2 px-4">23rd July, 2025</td>
                <td className="py-2 px-4">5000 $</td>
                <td className="py-2 px-4">
                  <Button type="Approved" />
                </td>
              </tr>
              <tr className="border-t">
                <td className="flex items-center  py-2 px-4">
                  <img
                    src="https://img.freepik.com/premium-vector/default-avatar-profile-icon-social-media-user-image-gray-avatar-icon-blank-profile-silhouette-vector-illustration_561158-3396.jpg?semt=ais_hybrid"
                    alt="avatar"
                    className="w-10 h-10 rounded-full overflow-hidden mr-2"
                  />
                  <p>Suman Poudel</p>
                </td>
                <td className="py-2 px-4">23rd July, 2025</td>
                <td className="py-2 px-4">5000 $</td>
                <td className="py-2 px-4">
                  <Button type="Pending" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default WidgetSm;
