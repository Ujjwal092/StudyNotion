import React from "react";

// Icons
import { HiUsers } from "react-icons/hi";
import { ImTree } from "react-icons/im";

const CourseCard = ({ cardData, currentCard, setCurrentCard }) => {
  const isActive = currentCard === cardData?.heading;

  return (
    <div
      className={`w-full max-w-[360px] rounded-xl overflow-hidden
      cursor-pointer transition-all duration-300
      hover:-translate-y-2 hover:shadow-2xl
      ${
        isActive
          ? "bg-white shadow-[12px_12px_0_0] shadow-yellow-50"
          : "bg-richblack-800"
      }`}
      onClick={() => setCurrentCard(cardData?.heading)}
    >
      {/* Top Section */}
      <div
        className="border-b border-dashed border-richblack-400
        p-6 flex flex-col gap-3 h-[200px]"
      >
        <h3
          className={`font-semibold text-xl ${
            isActive ? "text-richblack-900" : "text-richblack-5"
          }`}
        >
          {cardData?.heading}
        </h3>

        <p
          className={`text-sm ${
            isActive ? "text-richblack-700" : "text-richblack-300"
          }`}
        >
          {cardData?.description}
        </p>
      </div>

      {/* Bottom Section */}
      <div
        className={`flex justify-between items-center px-6 py-4 text-sm font-medium
        ${isActive ? "text-blue-500" : "text-richblack-300"}`}
      >
        {/* Level */}
        <div className="flex items-center gap-2">
          <HiUsers />
          <span>{cardData?.level}</span>
        </div>

        {/* Lessons */}
        <div className="flex items-center gap-2">
          <ImTree />
          <span>{cardData?.lessonNumber} Lesson</span>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
