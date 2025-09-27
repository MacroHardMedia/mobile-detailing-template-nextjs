"use client";

import React from "react";
import BookingForm from "../ui/BookingForm";
import "./contact.scss";

const Contact = () => {
  const handleFormSubmit = async (formData) => {
    try {
      // Here you would typically send the data to your backend or email service
      console.log("Form submission:", formData);

      // Example: Send to your backend API
      // const response = await fetch('/api/booking', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify(formData),
      // });

      // For now, just log the data
      return Promise.resolve();
    } catch (error) {
      console.error("Error submitting form:", error);
      throw error;
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="contact__header"></div>

        <div className="contact__content">
          <BookingForm onSubmit={handleFormSubmit} className="contact__form" />
        </div>
      </div>
    </section>
  );
};

export default Contact;
