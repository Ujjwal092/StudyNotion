import React from "react";
import { motion } from "framer-motion";
import HighlightText from "./HighlightText";
import know_your_progress from "../../../assets/Images/Know_your_progress.png";
import compare_with_others from "../../../assets/Images/Compare_with_others.png";
import plan_your_lesson from "../../../assets/Images/Plan_your_lessons.png";
import CTAButton from "../HomePage/Button";

const images = [know_your_progress, compare_with_others, plan_your_lesson];

const LearningLanguageSection = () => {
  return (
    <div className="mt-[150px] mb-32 w-11/12 max-w-maxContent mx-auto">
      <div className="flex flex-col items-center gap-6">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
          className="text-3xl lg:text-4xl font-bold text-center"
        >
          Your Swiss Knife for
          <HighlightText text={" learning any language"} />
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: false }}
          className="text-center text-richblack-300 text-base font-medium max-w-[600px]"
        >
          Using Spin makes learning multiple languages easy. With 20+ languages,
          realistic voice-over, progress tracking, custom schedule and more.
        </motion.p>

        {/* Images */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-10 mt-10">
          {images.map((img, index) => (
            <motion.img
              key={index}
              src={img}
              alt="language learning feature"
              loading="lazy"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: false }}
              className="w-[280px] rounded-xl shadow-lg hover:scale-105 
              hover:shadow-[0px_10px_30px_rgba(0,0,0,0.3)]
              transition duration-500"
            />
          ))}
        </div>

        {/* Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
          className="mt-8"
        >
          <CTAButton active={true} linkto={"/signup"}>
            <div>Learn more</div>
          </CTAButton>
        </motion.div>
      </div>
    </div>
  );
};

export default LearningLanguageSection;
