import React, { useRef, useEffect } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  animate,
} from "framer-motion";

import Logo1 from "../../../assets/TimeLineLogo/Logo1.svg";
import Logo2 from "../../../assets/TimeLineLogo/Logo2.svg";
import Logo3 from "../../../assets/TimeLineLogo/Logo3.svg";
import Logo4 from "../../../assets/TimeLineLogo/Logo4.svg";
import timelineImage from "../../../assets/Images/TimelineImage.png";

const timeline = [
  {
    Logo: Logo1,
    heading: "Leadership",
    Description: "Fully committed to the success company",
  },
  {
    Logo: Logo2,
    heading: "Responsibility",
    Description: "Students will always be our top priority",
  },
  {
    Logo: Logo3,
    heading: "Flexibility",
    Description: "The ability to switch is an important skills",
  },
  {
    Logo: Logo4,
    heading: "Solve the problem",
    Description: "Code your way to a solution",
  },
];

const Counter = ({ value }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);

  useEffect(() => {
    const controls = animate(count, value, {
      duration: 2,
      ease: "easeOut",
    });

    return controls.stop;
  }, [value]);

  return <motion.span>{rounded}</motion.span>;
};

const TimelineSection = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const height = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div className="mt-36 w-11/12 max-w-maxContent mx-auto">
      <div className="flex flex-col lg:flex-row gap-24 items-center">
        {/* LEFT TIMELINE */}
        <div ref={ref} className="lg:w-[45%] relative">
          {/* base line */}
          <div className="absolute left-[22px] top-0 bottom-0 w-[2px] bg-richblack-200"></div>

          {/* animated progress line */}
          <motion.div
            style={{ height }}
            className="absolute left-[22px] top-0 w-[2px] bg-caribbeangreen-500 origin-top"
          />

          <div className="flex flex-col gap-12">
            {timeline.map((element, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                viewport={{ once: false }}
                className="flex items-start gap-6 group"
              >
                {/* DOT */}
                <div
                  className="w-[45px] h-[45px] rounded-full bg-white shadow-md 
                  flex items-center justify-center z-10
                  group-hover:shadow-[0_0_12px_#22c55e] transition duration-300"
                >
                  <img
                    src={element.Logo}
                    alt={element.heading}
                    loading="lazy"
                    className="w-[22px]"
                  />
                </div>

                {/* CARD */}
                <div
                  className="bg-white p-5 rounded-xl shadow-md 
                  hover:shadow-xl hover:-translate-y-1 
                  transition duration-300"
                >
                  <h3 className="font-semibold text-lg text-richblack-900">
                    {element.heading}
                  </h3>

                  <p className="text-richblack-600 text-sm mt-1">
                    {element.Description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: false }}
          className="relative"
        >
          <img
            src={timelineImage}
            alt="timeline"
            loading="lazy"
            className="rounded-xl shadow-xl"
          />

          {/* FLOATING STATS CARD */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            viewport={{ once: true }}
            className="absolute left-1/2 -translate-x-1/2 bottom-[-40px]"
          >
            <div
              className="flex items-center gap-10 
              bg-caribbeangreen-700/90 backdrop-blur-md
              px-10 py-6 rounded-xl 
              shadow-[0_10px_30px_rgba(0,0,0,0.35)]
              border border-caribbeangreen-400/30"
            >
              {/* Experience */}
              <div className="flex items-center gap-4 border-r border-caribbeangreen-300 pr-8">
                <p className="text-4xl font-bold text-white">
                  <Counter value={10} />+
                </p>

                <p className="text-caribbeangreen-100 text-sm uppercase tracking-wide">
                  Years of <br /> Experience
                </p>
              </div>

              {/* Courses */}
              <div className="flex items-center gap-4">
                <p className="text-4xl font-bold text-white">
                  <Counter value={250} />+
                </p>

                <p className="text-caribbeangreen-100 text-sm uppercase tracking-wide">
                  Types of <br /> Courses
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default TimelineSection;
