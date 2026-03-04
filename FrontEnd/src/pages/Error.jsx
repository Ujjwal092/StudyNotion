import React from "react";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-richblack-900 text-white px-6">
      {/* GIF */}
      <div
        className="w-[400px] h-[300px] bg-center bg-contain bg-no-repeat"
        style={{
          backgroundImage:
            "url(https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif)",
        }}
      ></div>

      {/* 404 Text */}
      <h1 className="text-7xl font-extrabold mt-6 text-yellow-50 animate-bounce">
        404
      </h1>

      {/* Message */}
      <h3 className="text-3xl font-semibold mt-4 text-center">
        Looks like you're lost
      </h3>

      <p className="text-richblack-300 mt-2 text-center max-w-[400px]">
        The page you are looking for is not available or has been moved.
      </p>

      {/* Button */}
      <Link
        to="/"
        className="mt-6 px-8 py-3 rounded-lg font-semibold
        bg-yellow-50 text-black hover:bg-yellow-100
        transition duration-300"
      >
        Go Back Home
      </Link>
    </section>
  );
};

export default PageNotFound;
