import {
  CalendarToday,
  Email,
  LocationCity,
  PermIdentity,
  PhoneAndroid,
} from "@mui/icons-material";

const User = () => {
  return (
    <>
      <div className="p-12">
        <div className=" flex items-center justify-between mb-8">
          <h1 className="text-lg text-gray-800 font-semibold">
            {" "}
            User Information
          </h1>
          <button className="bg-teal-600 px-5 py-2 rounded-md text-white outline-none  hover:bg-teal-700">
            {" "}
            Edit
          </button>
        </div>
        {/* <div className="flex  justify-between  space-x-4 my-4">
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
          <div className="flex flex-col space-y-2">
            <p className=" text-gray-500 mt-1">Account Details</p>
            <div className="flex space-x-2 p  items-center  text-gray-600">
              <PermIdentity />
              <span>ananabeck99</span>
            </div>
            <div className="flex space-x-2   items-center  text-gray-600">
              <CalendarToday />
              <span>2025-04-5</span>
            </div>
            <p className=" text-gray-400">Contact Details</p>
            <div className="flex space-x-2  items-center  text-gray-600">
              <PhoneAndroid />
              <span>9999999999</span>
            </div>
            <div className="flex space-x-2  items-center  text-gray-600">
              <Email />
              <span>annabeck99@gmail.com</span>
            </div>
            <div className="flex space-x-2  items-center  text-gray-600">
              <LocationCity />
              <span>Street B | Villa Road,Washington</span>
            </div>
          </div>
        </div> */}

        <div className="shadow-lg bg-slate-50 p-8 rounded-lg">
          <form action="">
            <div className="">
              <div className="flex justify-center mb-4">
                <img
                  src="https://img.freepik.com/free-photo/vertical-shot-happy-dark-skinned-female-with-curly-hair_273609-15519.jpg?semt=ais_hybrid"
                  alt="avatar"
                  className="w-32 h-32 items-center ring-2 ring-white rounded-full"
                />
              </div>
              <div className="flex  items-center  mb-2">
                <label htmlFor=" " className="text-gray-700 w-1/6">
                  User
                </label>
                <input
                  type="text"
                  placeholder="annaback99"
                  className="w-5/6 h-8 p-1 border border-gray-300 rounded-md focus:outline-none focus:ring ring-blue-200 placeholder-gray-400 placeholder:text-sm"
                />
              </div>
              <div className="flex  items-center  mb-2">
                <label htmlFor=" " className="text-gray-700 w-1/6">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Anna Zukerberg"
                  className="w-5/6 h-8 p-1 border border-gray-300 rounded-md focus:outline-none focus:ring ring-blue-200 placeholder-gray-400 placeholder:text-sm"
                />
              </div>
              <div className="flex  items-center  mb-2">
                <label htmlFor=" " className="text-gray-700 w-1/6">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="annabeck99@gmail.com"
                  className="w-5/6 h-8 p-1 border border-gray-300 rounded-md focus:outline-none focus:ring ring-blue-200 placeholder-gray-400 placeholder:text-sm"
                />
              </div>
              <div className="flex  items-center  mb-2">
                <label htmlFor=" " className="text-gray-700 w-1/6">
                  Contact Number
                </label>
                <input
                  type="text"
                  placeholder="999999999"
                  className="w-5/6 h-8 p-1 border border-gray-300 rounded-md focus:outline-none focus:ring ring-blue-200 placeholder-gray-400 placeholder:text-sm"
                />
              </div>
              <div className="flex  items-center  mb-2">
                <label htmlFor=" " className="text-gray-700 w-1/6">
                  Address
                </label>
                <input
                  type="text"
                  placeholder="Street B | Villa Road,Washington"
                  className="w-5/6 h-8 p-1 border border-gray-300 rounded-md focus:outline-none focus:ring ring-blue-200 placeholder-gray-400 placeholder:text-sm"
                />
              </div>
              {/* <div className="flex  items-center  mb-2">
                <label htmlFor=" file" className="text-gray-700 w-1/6">
                  Image
                </label>
                <input
                  type="file"
                  className="w-5/6 h-8 p-1 border border-gray-300 rounded-md focus:outline-none focus:ring ring-blue-200 placeholder-gray-400 placeholder:text-sm"
                />
              </div> */}
            </div>
          </form>
        </div>
        {/* </div> */}
      </div>
    </>
  );
};

export default User;
