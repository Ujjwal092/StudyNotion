import React from "react";

import Footer from "../components/common/Footer";
import ContactDetails from "../components/ContactPage/ContactDetails";
import ContactForm from "../components/ContactPage/ContactForm";

const Contact = () => {
  return (
    <div className="bg-richblack-900 text-white">
      {/* Contact Section */}
      <section className="mx-auto mt-20 w-11/12 max-w-maxContent flex flex-col lg:flex-row gap-10">
        {/* Contact Details */}
        <div className="lg:w-[40%]">
          <ContactDetails />
        </div>

        {/* Contact Form */}
        <div className="lg:w-[60%]">
          <ContactForm />
        </div>
      </section>

      {/* Reviews Section */}
      <section className="mx-auto my-24 w-11/12 max-w-maxContent flex flex-col items-center gap-8">
        <h1 className="text-4xl font-semibold text-center">
          Reviews from other learners
        </h1>

        {/* Future Slider */}
        {/* <ReviewSlider /> */}
      </section>

      <section className="mx-auto my-20  "></section>
      <Footer />
    </div>
  );
};

export default Contact;
