import React from "react";
import { motion } from "framer-motion";
import Instructor from "../../../assets/Images/Instructor.png";
import HighlightText from "./HighlightText";
import CTAButton from "../HomePage/Button";
import { FaArrowRight } from "react-icons/fa";

const InstructorSection = () => {
  return (
    <div className="mt-32 w-11/12 max-w-maxContent mx-auto">
      <div className="flex flex-col lg:flex-row items-center gap-24">
        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: false, amount: 0.3 }}
          className="lg:w-1/2 flex justify-center relative"
        >
          {/* glow background */}
          <div
            className="absolute w-[350px] h-[350px] bg-gradient-to-r 
          from-blue-500 to-cyan-400 blur-[120px] opacity-20"
          ></div>

          <img
            src={Instructor}
            alt="Instructor"
            loading="lazy"
            className="relative rounded-xl shadow-[0px_0px_50px_rgba(255,255,255,0.15)]
            hover:scale-90 transition duration-500 p-2"
          />
        </motion.div>

        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: false, amount: 0.3 }}
          className="lg:w-1/2 flex flex-col gap-8 text-center lg:text-left"
        >
          <h2 className="text-3xl lg:text-4xl font-bold leading-tight">
            Become an <HighlightText text={"Instructor"} />
          </h2>

          <p className="text-richblack-300 text-[16px] leading-relaxed max-w-[520px]">
            Instructors from around the world teach millions of students on
            StudyNotion. We provide the tools and skills to teach what you love
            and help you build an impactful learning experience.
          </p>

          <div className="w-fit mx-auto lg:mx-0">
            <CTAButton active={true} linkto={"/signup"}>
              <div className="flex items-center gap-2 group">
                Start Teaching Today
                <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-2" />
              </div>
            </CTAButton>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default InstructorSection;
