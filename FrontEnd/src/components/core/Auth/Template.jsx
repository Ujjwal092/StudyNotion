import { useSelector } from "react-redux";

import frameImg from "../../../assets/Images/frame.png";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";

function Template({ title, description1, description2, image, formType }) {
  const { loading } = useSelector((state) => state.auth);

  return (
    <div className="grid min-h-[calc(100vh-3.5rem)] place-items-center">
      {loading ? (
        <div className="spinner"></div>
      ) : (
        <div className="w-11/12 max-w-maxContent mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-10 md:gap-20 py-12">
          {/* LEFT SECTION */}
          <div className="w-full max-w-[450px]">
            <h1 className="text-[30px] font-semibold text-richblack-5">
              {title}
            </h1>

            <p className="mt-4 text-lg">
              <span className="text-richblack-100">{description1}</span>{" "}
              <span className="font-edu-sa font-bold italic text-blue-100">
                {description2}
              </span>
            </p>

            {formType === "signup" ? <SignupForm /> : <LoginForm />}
          </div>

          {/* RIGHT SECTION */}
          <div className="relative w-full max-w-[450px] flex justify-center">
            <img
              src={frameImg}
              alt="Pattern"
              loading="lazy"
              className="w-full"
            />

            <img
              src={image}
              alt="Students"
              loading="lazy"
              className="absolute -top-4 right-4 z-10 w-full"
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default Template;
