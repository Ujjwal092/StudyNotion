import React from "react";
import ContactUsForm from "../../ContactPage/ContactUsForm";

const ContactFormSection = () => {
  return (
    <section className="w-full flex flex-col items-center py-16">
      <h1 className="text-4xl font-semibold text-center text-white">
        Get in Touch
      </h1>

      <p className="text-richblack-300 text-center mt-3 max-w-[500px]">
        We'd love to hear from you. Please fill out this form and our team will
        get back to you shortly.
      </p>

      <div className="mt-12 w-full max-w-[700px]">
        <ContactUsForm />
      </div>
    </section>
  );
};

export default ContactFormSection;
