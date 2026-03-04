import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import { login } from "../../../services/operations/authAPI";
import { googleLogin } from "../../../services/operations/authAPI";

function LoginForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const { email, password } = formData;

  const handleOnChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    dispatch(login(email, password, navigate));
  };

  return (
    <div className="mt-6 w-full">
      <form onSubmit={handleOnSubmit} className="flex w-full flex-col gap-y-5">
        {/* EMAIL */}
        <div className="flex flex-col gap-1">
          <label className="text-sm text-richblack-5">
            Email Address <sup className="text-pink-200">*</sup>
          </label>

          <input
            required
            type="email"
            name="email"
            value={email}
            onChange={handleOnChange}
            placeholder="Enter email address"
            className="w-full rounded-md bg-richblack-700 p-3 text-richblack-5 border border-richblack-600 focus:outline-none focus:ring-2 focus:ring-yellow-50"
          />
        </div>

        {/* PASSWORD */}
        <div className="flex flex-col gap-1 relative">
          <label className="text-sm text-richblack-5">
            Password <sup className="text-pink-200">*</sup>
          </label>

          <input
            required
            type={showPassword ? "text" : "password"}
            name="password"
            value={password}
            onChange={handleOnChange}
            placeholder="Enter Password"
            className="w-full rounded-md bg-richblack-700 p-3 text-richblack-5 border border-richblack-600 focus:outline-none focus:ring-2 focus:ring-yellow-50"
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

          <Link to="/forgot-password">
            <p className="text-xs text-blue-100 text-right mt-1">
              Forgot Password
            </p>
          </Link>
        </div>

        {/* SIGN IN BUTTON */}
        <button
          type="submit"
          className="mt-2 rounded-md bg-yellow-50 py-2 px-4 font-medium text-richblack-900"
        >
          Sign In
        </button>

        {/* DIVIDER */}
        <div className="flex items-center gap-2">
          <div className="flex-1 h-[1px] bg-richblack-700"></div>
          <p className="text-richblack-400 text-sm">OR</p>
          <div className="flex-1 h-[1px] bg-richblack-700"></div>
        </div>

        {/* GOOGLE LOGIN */}
        <button
          type="button"
          onClick={() => dispatch(googleLogin(navigate))}
          className="flex items-center justify-center gap-2 border border-richblack-700 bg-richblack-800 py-2 rounded-md text-richblack-100 hover:bg-richblack-700 transition"
        >
          <FcGoogle size={20} />
          Sign in with Google
        </button>
      </form>
    </div>
  );
}

export default LoginForm;
