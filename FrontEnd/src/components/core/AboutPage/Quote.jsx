import React from "react";
import HighlightText from "../HomePage/HighlightText";

const Quote = () => {
  return (
    <div className="max-w-[900px] mx-auto py-16 text-center text-white text-xl md:text-3xl font-semibold leading-relaxed">
      We are passionate about revolutionizing the way we learn. Our innovative
      platform <HighlightText text={" combines technology "} />
      <span className="bg-gradient-to-r from-[#FF512F] to-[#F09819] text-transparent bg-clip-text font-bold">
        expertise
      </span>
      , and community to create an
      <span className="bg-gradient-to-r from-[#E65C00] to-[#F9D423] text-transparent bg-clip-text font-bold">
        {" "}
        unparalleled educational experience.
      </span>
    </div>
  );
};

export default Quote;
