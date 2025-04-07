"use client";
import React, { useState } from "react";
import { Phone, Mail, MapPin, Facebook } from "lucide-react";

const TestimonialForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    review: "",
    recommend: "yes",
    additionalComments: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Testimonial submitted:", formData);
    // Add your form submission logic here
    alert("Thank you for your testimonial!");
    handleReset();
  };

  const handleReset = () => {
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      review: "",
      recommend: "yes",
      additionalComments: "",
    });
  };

  return (
    <div className="px-20 py-8 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Column - Form */}
          <div>
            <div className="mb-6">
              <h3 className="text-primary-600 font-medium uppercase tracking-wider">
                SEND US YOUR TESTIMONIAL
              </h3>
              <h2 className="text-4xl font-bold text-primary-900 mt-1">
                Feel free to write
              </h2>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="First Name"
                  className="w-full p-4 bg-primary-50 rounded-md border border-primary-200 focus:outline-none focus:ring-1 focus:ring-primary-500 text-primary-700"
                  required
                />

                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Last Name"
                  className="w-full p-4 bg-primary-50 rounded-md border border-primary-200 focus:outline-none focus:ring-1 focus:ring-primary-500 text-primary-700"
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  className="w-full p-4 bg-primary-50 rounded-md border border-primary-200 focus:outline-none focus:ring-1 focus:ring-primary-500 text-primary-700"
                  required
                />

                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone"
                  className="w-full p-4 bg-primary-50 rounded-md border border-primary-200 focus:outline-none focus:ring-1 focus:ring-primary-500 text-primary-700"
                />
              </div>

              <textarea
                name="review"
                value={formData.review}
                onChange={handleChange}
                placeholder="Write your review here"
                rows="5"
                className="w-full p-4 bg-primary-50 rounded-md border border-primary-200 focus:outline-none focus:ring-1 focus:ring-primary-500 text-primary-700"
                required
              ></textarea>

              <div className="p-4 bg-primary-50 rounded-md border border-primary-200">
                <p className="mb-2 font-medium text-gray-600">
                  Would you recommend us to your friends?
                </p>
                <div className="flex gap-6">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="recommend"
                      value="yes"
                      checked={formData.recommend === "yes"}
                      onChange={handleChange}
                      className="h-4 w-4 text-primary-600 focus:ring-primary-500"
                    />
                    <span className="text-gray-700">Yes</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="recommend"
                      value="no"
                      checked={formData.recommend === "no"}
                      onChange={handleChange}
                      className="h-4 w-4 text-primary-600 focus:ring-primary-500"
                    />
                    <span className="text-gray-700">No</span>
                  </label>
                </div>
              </div>

              <textarea
                name="additionalComments"
                value={formData.additionalComments}
                onChange={handleChange}
                placeholder="Anything else you would like to add?"
                rows="4"
                className="w-full p-4 bg-primary-50 rounded-md border border-primary-200 focus:outline-none focus:ring-1 focus:ring-primary-500 text-primary-700"
              ></textarea>

              <div>
                <button
                  type="submit"
                  className="bg-primary-600 text-white py-3 px-8 rounded-md hover:bg-primary-700 transition-colors font-medium"
                >
                  SUBMIT
                </button>
              </div>
            </form>
          </div>

          {/* Right Column - Contact Info */}
          <div>
            <div className="mb-6">
              <h3 className="text-primary-600 font-medium uppercase tracking-wider">
                NEED ANY HELP?
              </h3>
              <h2 className="text-4xl font-bold text-primary-900 mt-1">
                Get in touch with us
              </h2>
            </div>

            <p className="text-primary-600 mb-10">
              We value your feedback and testimonials. Your experience helps us
              improve our services and assists others in making informed
              decisions. Feel free to share your journey with us.
            </p>

            <div className="space-y-8">
              <a href="tel:+64225945951" className="flex items-center gap-6 group hover:opacity-80 transition-opacity">
                <div className="w-14 h-14 bg-primary-900 rounded-md flex items-center justify-center flex-shrink-0">
                  <Phone className="text-white w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1 text-primary-900">
                    Have any question?
                  </h3>
                  <p className="text-primary-600">+64 22 594 5951</p>
                </div>
              </a>

              <a href="mailto:hire@gdcgroup.co.nz" className="flex items-center gap-6 group hover:opacity-80 transition-opacity">
                <div className="w-14 h-14 bg-primary-900 rounded-md flex items-center justify-center flex-shrink-0">
                  <Mail className="text-white w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1 text-primary-900">
                    Email
                  </h3>
                  <p className="text-primary-600">hire@gdcgroup.co.nz</p>
                </div>
              </a>

              <a href="https://www.facebook.com/gdcrecruit" target="_blank" rel="noopener noreferrer" className="flex items-center gap-6 group hover:opacity-80 transition-opacity">
                <div className="w-14 h-14 bg-primary-900 rounded-md flex items-center justify-center flex-shrink-0">
                  <Facebook className="text-white w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1 text-primary-900">
                    Follow Us on
                  </h3>
                  <p className="text-primary-600">
                    Facebook
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialForm;
