import { useState } from "react";
import { BiArrowBack } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { getPasswordResetToken } from "../services/operations/authAPI";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [emailSent, setEmailSent] = useState(false);

  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.auth);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    dispatch(getPasswordResetToken(email, setEmailSent));
  };

  return (
    <div className="grid min-h-[calc(100vh-3.5rem)] place-items-center px-4">
      {loading ? (
        <div className="spinner"></div>
      ) : (
        <div className="w-full max-w-[420px] bg-richblack-800 rounded-xl p-6 md:p-8 shadow-lg">
          {/* TITLE */}
          <h1 className="text-3xl font-semibold text-richblack-5">
            {!emailSent ? "Reset your password" : "Check your email"}
          </h1>

          {/* DESCRIPTION */}
          <p className="mt-3 text-richblack-100 text-sm leading-6">
            {!emailSent
              ? "Enter your email and we’ll send you instructions to reset your password."
              : `We have sent the reset email to ${email}`}
          </p>

          {/* FORM */}
          <form onSubmit={handleOnSubmit} className="mt-6 flex flex-col gap-5">
            {!emailSent && (
              <div className="flex flex-col gap-1">
                <label className="text-sm text-richblack-5">
                  Email Address <span className="text-pink-200">*</span>
                </label>

                <input
                  required
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter email address"
                  className="w-full rounded-md bg-richblack-700 p-3 text-richblack-5 border border-richblack-600 focus:outline-none focus:ring-2 focus:ring-yellow-50"
                />
              </div>
            )}

            {/* BUTTON */}
            <button
              type="submit"
              className="mt-2 w-full rounded-md bg-yellow-50 py-2 px-4 font-medium text-richblack-900 hover:scale-95 transition"
            >
              {!emailSent ? "Submit" : "Resend Email"}
            </button>
          </form>

          {/* BACK LINK */}
          <div className="mt-6">
            <Link to="/login">
              <p className="flex items-center gap-2 text-richblack-100 hover:text-richblack-5 transition">
                <BiArrowBack />
                Back to Login
              </p>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default ForgotPassword;
