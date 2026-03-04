import { useState } from "react";
import { toast } from "react-hot-toast";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { sendOtp } from "../../../services/operations/authAPI";
import { setSignupData } from "../../../slices/authSlice";
import { ACCOUNT_TYPE } from "../../../utils/constants";
import Tab from "../../common/Tab";

function SignupForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [accountType, setAccountType] = useState(ACCOUNT_TYPE.STUDENT);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const { firstName, lastName, email, password, confirmPassword } = formData;

  const handleOnChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      toast.error("Passwords Do Not Match");
      return;
    }

    const signupData = {
      ...formData,
      accountType,
    };

    dispatch(setSignupData(signupData));
    dispatch(sendOtp(email, navigate));

    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
  };

  const tabData = [
    {
      id: 1,
      tabName: "Student",
      type: ACCOUNT_TYPE.STUDENT,
    },
    {
      id: 2,
      tabName: "Instructor",
      type: ACCOUNT_TYPE.INSTRUCTOR,
    },
  ];

  return (
    <div>
      {/* Account Type Tabs */}
      <Tab tabData={tabData} field={accountType} setField={setAccountType} />

      {/* FORM */}
      <form onSubmit={handleOnSubmit} className="mt-6 flex flex-col gap-y-5">
        {/* NAME */}
        <div className="flex gap-4">
          <label className="w-full">
            <p className="text-sm text-richblack-5 mb-1">
              First Name <span className="text-pink-200">*</span>
            </p>

            <input
              required
              type="text"
              name="firstName"
              value={firstName}
              onChange={handleOnChange}
              placeholder="Enter first name"
              className="w-full rounded-md bg-richblack-800 p-3 text-richblack-5 border border-richblack-700 focus:outline-none focus:ring-2 focus:ring-yellow-50 transition"
            />
          </label>

          <label className="w-full">
            <p className="text-sm text-richblack-5 mb-1">
              Last Name <span className="text-pink-200">*</span>
            </p>

            <input
              required
              type="text"
              name="lastName"
              value={lastName}
              onChange={handleOnChange}
              placeholder="Enter last name"
              className="w-full rounded-md bg-richblack-800 p-3 text-richblack-5 border border-richblack-700 focus:outline-none focus:ring-2 focus:ring-yellow-50 transition"
            />
          </label>
        </div>

        {/* EMAIL */}
        <label>
          <p className="text-sm text-richblack-5 mb-1">
            Email Address <span className="text-pink-200">*</span>
          </p>

          <input
            required
            type="email"
            name="email"
            value={email}
            onChange={handleOnChange}
            placeholder="Enter email address"
            className="w-full rounded-md bg-richblack-800 p-3 text-richblack-5 border border-richblack-700 focus:outline-none focus:ring-2 focus:ring-yellow-50 transition"
          />
        </label>

        {/* PASSWORDS */}
        <div className="flex gap-4">
          {/* PASSWORD */}
          <label className="relative w-full">
            <p className="text-sm text-richblack-5 mb-1">
              Create Password <span className="text-pink-200">*</span>
            </p>

            <input
              required
              type={showPassword ? "text" : "password"}
              name="password"
              value={password}
              onChange={handleOnChange}
              placeholder="Enter Password"
              className="w-full rounded-md bg-richblack-800 p-3 pr-12 text-richblack-5 border border-richblack-700 focus:outline-none focus:ring-2 focus:ring-yellow-50 transition"
            />

            <span
              onClick={() => setShowPassword((prev) => !prev)}
              className="absolute right-3 top-9 cursor-pointer"
            >
              {showPassword ? (
                <AiOutlineEyeInvisible size={22} color="#AFB2BF" />
              ) : (
                <AiOutlineEye size={22} color="#AFB2BF" />
              )}
            </span>
          </label>

          {/* CONFIRM PASSWORD */}
          <label className="relative w-full">
            <p className="text-sm text-richblack-5 mb-1">
              Confirm Password <span className="text-pink-200">*</span>
            </p>

            <input
              required
              type={showConfirmPassword ? "text" : "password"}
              name="confirmPassword"
              value={confirmPassword}
              onChange={handleOnChange}
              placeholder="Confirm Password"
              className="w-full rounded-md bg-richblack-800 p-3 pr-12 text-richblack-5 border border-richblack-700 focus:outline-none focus:ring-2 focus:ring-yellow-50 transition"
            />

            <span
              onClick={() => setShowConfirmPassword((prev) => !prev)}
              className="absolute right-3 top-9 cursor-pointer"
            >
              {showConfirmPassword ? (
                <AiOutlineEyeInvisible size={22} color="#AFB2BF" />
              ) : (
                <AiOutlineEye size={22} color="#AFB2BF" />
              )}
            </span>
          </label>
        </div>

        {/* BUTTON */}
        <button
          type="submit"
          className="mt-6 rounded-md bg-yellow-50 py-2 px-4 font-semibold text-richblack-900 hover:scale-95 transition"
        >
          Create Account
        </button>
      </form>
    </div>
  );
}

export default SignupForm;
