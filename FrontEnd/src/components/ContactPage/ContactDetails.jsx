import React from "react";
import { HiChatBubbleLeftRight } from "react-icons/hi2";
import { BiWorld } from "react-icons/bi";
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaDirections } from "react-icons/fa";

const ContactDetails = () => {
  return (
    <div className="flex flex-col gap-6 rounded-xl bg-richblack-800 p-6">
      {/* Email */}
      <div className="flex gap-4 p-4 rounded-lg hover:bg-richblack-700 transition duration-200">
        <div className="text-yellow-50 text-2xl">
          <HiChatBubbleLeftRight />
        </div>

        <div className="flex flex-col gap-1">
          <h2 className="text-lg font-semibold text-richblack-5">
            Chat with us
          </h2>

          <p className="text-sm text-richblack-300">
            Our friendly team is here to help.
          </p>

          <a
            href="mailto:notionstudy08@gmail.com?subject=Contact%20from%20Website"
            className="text-sm font-medium hover:text-yellow-50 transition"
          >
            notionstudy08@gmail.com
          </a>
        </div>
      </div>

      {/* Location */}
      <div className="flex gap-4 p-4 rounded-lg hover:bg-richblack-700 transition duration-200">
        <div className="text-yellow-50 text-2xl">
          <BiWorld />
        </div>

        <div className="flex flex-col gap-1">
          <h2 className="text-lg font-semibold text-richblack-5">Visit us</h2>

          <p className="text-sm text-richblack-300">
            Come and say hello at our office HQ.
          </p>

          <a
            href="https://www.google.com/maps?q=Judicial+Layout+Bangalore"
            target="_blank"
            rel="noreferrer"
            className="text-sm font-medium hover:text-yellow-50 transition"
          >
            Judicial Layout, Bangalore - 560109
          </a>
        </div>
      </div>

      {/* Phone */}
      <div className="flex gap-4 p-4 rounded-lg hover:bg-richblack-700 transition duration-200">
        <div className="text-yellow-50 text-2xl">
          <IoCall />
        </div>

        <div className="flex flex-col gap-1">
          <h2 className="text-lg font-semibold text-richblack-5">Call us</h2>

          <p className="text-sm text-richblack-300">
            Mon - Fri From 8am to 5pm
          </p>

          <a
            href="tel:+917079839554"
            className="text-sm font-medium hover:text-yellow-50 transition"
          >
            +91 7079839554
          </a>
        </div>
      </div>

      {/* Directions Button */}
      <div className="flex justify-center mt-2">
        <a
          href="https://www.google.com/maps?q=Judicial+Layout+Bangalore"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 bg-yellow-50 text-black px-5 py-2 rounded-lg font-semibold hover:scale-95 transition"
        >
          <FaDirections />
          Get Directions
        </a>
      </div>
    </div>
  );
};

export default ContactDetails;
