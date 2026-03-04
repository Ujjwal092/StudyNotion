import React from "react";
import ContactUsForm from "./ContactUsForm";

const ContactForm = () => {
  return (
    <div
      className="border border-richblack-600 rounded-xl 
      p-8 lg:p-12 bg-richblack-800 shadow-lg"
    >
      <h1 className="text-3xl lg:text-4xl font-semibold text-richblack-5">
        Got an idea? We've got the skills.
      </h1>

      <p className="mt-2 text-richblack-300">
        Tell us more about yourself and what you have in mind.
      </p>

      <div className="mt-8">
        <ContactUsForm />
      </div>
    </div>
  );
};

export default ContactForm;
