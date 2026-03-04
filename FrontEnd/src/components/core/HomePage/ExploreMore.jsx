import React, { useState } from "react";
import { HomePageExplore } from "../../../data/homepage-explore";
import CourseCard from "./CourseCard";
import HighlightText from "./HighlightText";

const tabsName = [
  "Free",
  "New to coding",
  "Most popular",
  "Skills paths",
  "Career paths",
];

const ExploreMore = () => {
  const [currentTab, setCurrentTab] = useState(tabsName[0]);
  const [courses, setCourses] = useState(HomePageExplore[0].courses);
  const [currentCard, setCurrentCard] = useState(
    HomePageExplore[0].courses[0].heading,
  );

  const setMyCards = (value) => {
    setCurrentTab(value);

    const result = HomePageExplore.filter((course) => course.tag === value);

    setCourses(result[0].courses);
    setCurrentCard(result[0].courses[0].heading);
  };

  return (
    <div className="w-11/12 max-w-maxContent mx-auto flex flex-col items-center">
      {/* Heading */}
      <div className="text-center mt-16">
        <h2 className="text-4xl font-semibold">
          Unlock the <HighlightText text={"Power of Code"} />
        </h2>

        <p className="text-richblack-300 text-lg mt-2">
          Learn to Build Anything You Can Imagine
        </p>
      </div>

      {/* Tabs */}
      <div
        className="flex flex-wrap justify-center gap-3 mt-10 
        bg-richblack-800 p-2 rounded-full"
      >
        {tabsName.map((ele, index) => (
          <button
            key={index}
            onClick={() => setMyCards(ele)}
            className={`px-6 py-2 rounded-full text-sm transition-all duration-200
              ${
                currentTab === ele
                  ? "bg-richblack-900 text-white"
                  : "text-richblack-200 hover:bg-richblack-900 hover:text-white"
              }`}
          >
            {ele}
          </button>
        ))}
      </div>

      {/* Cards */}
      <div className="w-full flex flex-wrap justify-center gap-8 mt-12">
        {courses.map((ele, index) => {
          return (
            <CourseCard
              key={index}
              cardData={ele}
              currentCard={currentCard}
              setCurrentCard={setCurrentCard}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ExploreMore;
