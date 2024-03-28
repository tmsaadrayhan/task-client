import { useState } from "react";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

const ResetPassword = () => {
  const [formData, setFormData] = useState({
    password: "",
  });
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="login_bg flex justify-center items-center h-screen mx-auto">
      <div className="w-80 bg-tertiary py-10 rounded-2xl sm:w-[360px]">
        <form>
          <div
            id="forgot-password-form"
            className="form transparent-bg p-5 rounded-2xl"
          >
            <img
              src={logo}
              alt="Your Logo"
              className="mx-auto h-15 p-5 w-auto"
            />
            <h2 className="text-center text-2xl font-bold mb-4">
              Reset Password
            </h2>
            <input
              type="text"
              name="password"
              onChange={handleInputChange}
              placeholder="password"
              className="w-full px-4 py-2 mb-2 rounded-full"
            />
            <button
              type="submit"
              className="w-full px-4 py-2 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 focus:outline-none focus:bg-indigo-700"
            >
              Reset Password
            </button>
            <Link
              to="/login"
              className="text-indigo-600 cursor-pointer text-sm mt-2 block"
            >
              Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
