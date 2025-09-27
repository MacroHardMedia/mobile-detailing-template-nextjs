"use client";

import React, { useState } from "react";
import "./BookingForm.scss";

const BookingForm = ({ onSubmit, className = "" }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    carMake: "",
    carModel: "",
    carYear: "",
    serviceTypes: [], // Changed from serviceType to serviceTypes array
    petHairRemoval: false,
    comments: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (name === "serviceTypes") {
      // Handle checkbox array for service types
      setFormData((prev) => ({
        ...prev,
        serviceTypes: checked
          ? [...prev.serviceTypes, value]
          : prev.serviceTypes.filter((service) => service !== value),
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: type === "checkbox" ? checked : value,
      }));
    }

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    }

    if (!formData.carMake.trim()) {
      newErrors.carMake = "Car make is required";
    }

    if (!formData.carModel.trim()) {
      newErrors.carModel = "Car model is required";
    }

    if (formData.serviceTypes.length === 0) {
      newErrors.serviceTypes = "Please select at least one service";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Call the onSubmit prop if provided
      if (onSubmit) {
        await onSubmit(formData);
      }

      // Reset form on successful submission
      setFormData({
        name: "",
        email: "",
        phone: "",
        carMake: "",
        carModel: "",
        carYear: "",
        serviceTypes: [], // Reset to empty array
        petHairRemoval: false,
        comments: "",
      });

      alert("Thank you! Your booking request has been submitted successfully.");
    } catch (error) {
      console.error("Form submission error:", error);
      alert("There was an error submitting your request. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form className={`booking-form ${className}`} onSubmit={handleSubmit}>
      <div className="booking-form__header">
        <h2 className="booking-form__title">Book Your Detailing Service</h2>
        <p className="booking-form__subtitle">
          Fill out the form below and we'll get back to you with a personalized
          quote
        </p>
      </div>

      <div className="booking-form__grid">
        {/* Personal Information */}
        <div className="booking-form__section">
          <h3 className="booking-form__section-title">Personal Information</h3>

          <div className="booking-form__field">
            <label className="booking-form__label">
              Full Name *
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`booking-form__input ${
                  errors.name ? "booking-form__input--error" : ""
                }`}
                placeholder="Enter your full name"
              />
              {errors.name && (
                <span className="booking-form__error">{errors.name}</span>
              )}
            </label>
          </div>

          <div className="booking-form__field">
            <label className="booking-form__label">
              Email Address *
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`booking-form__input ${
                  errors.email ? "booking-form__input--error" : ""
                }`}
                placeholder="your.email@example.com"
              />
              {errors.email && (
                <span className="booking-form__error">{errors.email}</span>
              )}
            </label>
          </div>

          <div className="booking-form__field">
            <label className="booking-form__label">
              Phone Number *
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className={`booking-form__input ${
                  errors.phone ? "booking-form__input--error" : ""
                }`}
                placeholder="(555) 123-4567"
              />
              {errors.phone && (
                <span className="booking-form__error">{errors.phone}</span>
              )}
            </label>
          </div>
        </div>

        {/* Vehicle Information */}
        <div className="booking-form__section">
          <h3 className="booking-form__section-title">Vehicle Information</h3>

          <div className="booking-form__row">
            <div className="booking-form__field">
              <label className="booking-form__label">
                Car Make *
                <input
                  type="text"
                  name="carMake"
                  value={formData.carMake}
                  onChange={handleChange}
                  className={`booking-form__input ${
                    errors.carMake ? "booking-form__input--error" : ""
                  }`}
                  placeholder="e.g., Toyota, BMW, Ford"
                />
                {errors.carMake && (
                  <span className="booking-form__error">{errors.carMake}</span>
                )}
              </label>
            </div>

            <div className="booking-form__field">
              <label className="booking-form__label">
                Car Model *
                <input
                  type="text"
                  name="carModel"
                  value={formData.carModel}
                  onChange={handleChange}
                  className={`booking-form__input ${
                    errors.carModel ? "booking-form__input--error" : ""
                  }`}
                  placeholder="e.g., Camry, X5, F-150"
                />
                {errors.carModel && (
                  <span className="booking-form__error">{errors.carModel}</span>
                )}
              </label>
            </div>

            <div className="booking-form__field">
              <label className="booking-form__label">
                Year (Optional)
                <input
                  type="number"
                  name="carYear"
                  value={formData.carYear}
                  onChange={handleChange}
                  className="booking-form__input"
                  placeholder="2020"
                  min="1990"
                  max={new Date().getFullYear() + 1}
                />
              </label>
            </div>
          </div>
        </div>

        {/* Service Information */}
        <div className="booking-form__section booking-form__section--full">
          <h3 className="booking-form__section-title">Service Information</h3>

          <div className="booking-form__field">
            <label className="booking-form__label">Service Types *</label>

            <div className="booking-form__checkbox-group">
              <label className="booking-form__checkbox-item">
                <input
                  type="checkbox"
                  name="serviceTypes"
                  value="exterior"
                  checked={formData.serviceTypes.includes("exterior")}
                  onChange={handleChange}
                  className="booking-form__checkbox-input"
                />
                <span className="booking-form__checkbox-label">
                  Exterior Detailing
                </span>
                <span className="booking-form__checkbox-description">
                  Wash, wax, and paint protection
                </span>
              </label>

              <label className="booking-form__checkbox-item">
                <input
                  type="checkbox"
                  name="serviceTypes"
                  value="both"
                  checked={formData.serviceTypes.includes("both")}
                  onChange={handleChange}
                  className="booking-form__checkbox-input"
                />
                <span className="booking-form__checkbox-label">
                  Full Detail Package
                </span>
                <span className="booking-form__checkbox-description">
                  Complete interior and exterior service
                </span>
              </label>

              <label className="booking-form__checkbox-item">
                <input
                  type="checkbox"
                  name="serviceTypes"
                  value="headlight"
                  checked={formData.serviceTypes.includes("headlight")}
                  onChange={handleChange}
                  className="booking-form__checkbox-input"
                />
                <span className="booking-form__checkbox-label">
                  Headlight Restoration
                </span>
                <span className="booking-form__checkbox-description">
                  Restore clarity and brightness
                </span>
              </label>
            </div>

            {errors.serviceTypes && (
              <span className="booking-form__error">{errors.serviceTypes}</span>
            )}
          </div>

          <div className="booking-form__field">
            <label className="booking-form__checkbox-label">
              <input
                type="checkbox"
                name="petHairRemoval"
                checked={formData.petHairRemoval}
                onChange={handleChange}
                className="booking-form__checkbox"
              />
              <span className="booking-form__checkmark"></span>
              Pet Hair Removal (Additional service)
            </label>
          </div>

          <div className="booking-form__field">
            <label className="booking-form__label">
              Additional Comments
              <textarea
                name="comments"
                value={formData.comments}
                onChange={handleChange}
                className="booking-form__textarea"
                placeholder="Any specific requests, concerns, or additional information about your vehicle..."
                rows="4"
              />
            </label>
          </div>
        </div>
      </div>

      <div className="booking-form__footer">
        <button
          type="submit"
          disabled={isSubmitting}
          className="booking-form__submit"
        >
          {isSubmitting ? "Submitting..." : "Request Quote"}
        </button>
        <p className="booking-form__note">
          We'll contact you within 24 hours with a personalized quote and
          available time slots.
        </p>
      </div>
    </form>
  );
};

export default BookingForm;
