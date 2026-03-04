import React from "react";

const Tab = ({ tabData, field, setField }) => {
  return (
    <div className="flex gap-1 bg-richblack-800 p-1 rounded-full w-max mt-6">
      {tabData.map((tab) => (
        <button
          key={tab.id}
          onClick={() => setField(tab.type)}
          className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 hover:bg-richblack-900
          ${
            field === tab.type
              ? "bg-richblack-900 text-richblack-5"
              : "text-richblack-200"
          }`}
        >
          {tab.tabName}
        </button>
      ))}
    </div>
  );
};

export default Tab;
