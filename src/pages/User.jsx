import { CalendarToday, PermIdentity, PhoneAndroid } from "@mui/icons-material";

const User = () => {
  return (
    <div className="p-12">
      <div className=" flex items-center justify-between">
        <h1 className="text-lg text-gray-800 font-semibold">Edit User</h1>
        <button className="bg-teal-600 px-5 py-2 rounded-md text-white outline-none  hover:bg-teal-700">
          {" "}
          Create
        </button>
      </div>
      <div className="flex  justify-between  space-x-4 my-4">
        <div className="shadow-lg bg-slate-50 p-4 rounded-md w-2/5 sm:w-1/2 md:w-1/4">
          <div className="flex items-center space-x-4">
            <img
              src=""
              alt="avatar"
              className="w-14 h-14 items-center rounded-full"
            />
            <div className="">
              <p className="font-bold text-gray-700"> Anna Zukerberg</p>
              <p className="text-sm font-semibold text-gray-600">
                Software Engineer
              </p>
            </div>
          </div>
          <div className="flex flex-col space-y-1">
            <p className="font-bold text-cGray-700">Account Details</p>
            <div className="flex space-x-2 p  items-center  text-gray-600">
              <PermIdentity />
              <span>ananabeck99</span>
            </div>
            <div className="flex space-x-2   items-center  text-gray-600">
              <CalendarToday />
              <span>2025-04-5</span>
            </div>
            <div className="flex space-x-2  items-center  text-gray-600">
              <PhoneAndroid />
              <span>9999999999</span>
            </div>
            <div className="flex space-x-2  items-center  text-gray-600">
              <PermIdentity />
              <span>ananabeck99</span>
            </div>
          </div>
        </div>

        <div className="shadow-lg bg-slate-50 p-4 rounded-md w-3/5 sm:w-1/2 md:w-3/4"></div>
      </div>
    </div>
  );
};

export default User;
