import { useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const NewUser = ({ addUser }) => {
  const [formData, setFormData] = useState({
    username: "",
    fullName: "",
    email: "",
    contact: "",
    address: "",
    gender: "",
    active: "",
    image: "null",
  });
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData({
      ...formData,
      [name]: type === "file" ? files[0] : value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // Validation
    if (
      !formData.username ||
      !formData.fullName ||
      !formData.email ||
      !formData.contact ||
      !formData.address ||
      !formData.gender ||
      !formData.active ||
      !formData.image
    ) {
      toast.error("Please fill out all required fields!");
      return;
    }
    try {
      console.log("Form Data submitted", formData);
      toast.success("User added successfully!");
      setFormData({
        username: "",
        fullName: "",
        email: "",
        contact: "",
        address: "",
        gender: "",
        active: "",
        image: null,
      });
      navigate("/users");
    } catch (error) {
      toast.error(error.message);
    }
  };
  return (
    <div className="p-12">
      <Toaster />
      <h1 className="text-lg text-gray-800 font-semibold mb-4"> New User</h1>
      <div className="shadow-lg bg-slate-50 p-8 rounded-lg">
        <form onSubmit={handleSubmit}>
          <div className="">
            {/* <div className="flex justify-center mb-4">
              <img
                src="https://img.freepik.com/free-photo/vertical-shot-happy-dark-skinned-female-with-curly-hair_273609-15519.jpg?semt=ais_hybrid"
                alt="avatar"
                className="w-32 h-32 items-center ring-2 ring-white rounded-full"
              />
            </div> */}
            <div className="flex  items-center  mb-2">
              <label htmlFor=" " className="text-gray-700 w-1/6">
                User
              </label>
              <input
                type="text"
                name="username"
                placeholder="John22"
                value={formData.username}
                onChange={handleChange}
                className="w-5/6 h-8 p-1 border border-gray-300 rounded-md focus:outline-none focus:ring ring-blue-200 placeholder-gray-400 placeholder:text-sm"
                required
              />
            </div>
            <div className="flex  items-center  mb-2">
              <label htmlFor=" " className="text-gray-700 w-1/6">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Anna Zukerberg"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="w-5/6 h-8 p-1 border border-gray-300 rounded-md focus:outline-none focus:ring ring-blue-200 placeholder-gray-400 placeholder:text-sm"
                required
              />
            </div>
            <div className="flex  items-center  mb-2">
              <label htmlFor=" " className="text-gray-700 w-1/6">
                Email
              </label>
              <input
                type="email"
                placeholder="annabeck99@gmail.com"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-5/6 h-8 p-1 border border-gray-300 rounded-md focus:outline-none focus:ring ring-blue-200 placeholder-gray-400 placeholder:text-sm"
                required
              />
            </div>
            <div className="flex  items-center  mb-2">
              <label htmlFor=" " className="text-gray-700 w-1/6">
                Contact Number
              </label>
              <input
                type="text"
                placeholder="999999999"
                name="contact"
                value={formData.contact}
                onChange={handleChange}
                className="w-5/6 h-8 p-1 border border-gray-300 rounded-md focus:outline-none focus:ring ring-blue-200 placeholder-gray-400 placeholder:text-sm"
                required
              />
            </div>
            <div className="flex  items-center  mb-2">
              <label htmlFor=" " className="text-gray-700 w-1/6">
                Address
              </label>
              <input
                type="text"
                placeholder="Street B | Villa Road,Washington"
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="w-5/6 h-8 p-1 border border-gray-300 rounded-md focus:outline-none focus:ring ring-blue-200 placeholder-gray-400 placeholder:text-sm"
                required
              />
            </div>
            <div className="flex  items-center   mb-2">
              <label htmlFor=" " className="text-gray-700 w-1/6">
                Gender
              </label>
              <input
                type="radio"
                name="gender"
                id="male"
                value="male"
                checked={formData.gender === "male"}
                onChange={handleChange}
              />
              <label for="male" className="mx-2">
                Male
              </label>

              <input
                type="radio"
                name="gender"
                id="female"
                value="female"
                checked={formData.gender === "female"}
                onChange={handleChange}
              />
              <label for="female" className="mx-2">
                Female
              </label>
            </div>
            <div className="flex  items-center   mb-2">
              <label htmlFor=" " className="text-gray-700 w-1/6">
                Active
              </label>
              <select
                name="active"
                id="active"
                value={formData.active}
                onChange={handleChange}
                className="w-5/6 h-8 p-1 border border-gray-300 rounded-md"
              ><option value="">.....</option>
                <option value="yes">Yes</option>
                <option value="yes">No</option>
              </select>
            </div>
            <div className="flex  items-center  mb-2">
              <label htmlFor=" file" className="text-gray-700 w-1/6">
                Image
              </label>
              <input
                type="file"
                name="image"
                onChange={handleChange}
                className="w-5/6"
                required
              />
            </div>
          </div>
          <button
            type="submit"
            className="bg-primary-400 mt-4  text-white rounded-lg px-4  py-2 hover:bg-primary-500"
          >
            Create
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewUser;
