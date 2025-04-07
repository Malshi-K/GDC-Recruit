"use client";
import React, { useState } from "react";
import { Phone, Mail, MapPin, Facebook } from "lucide-react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
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
      message: "",
    });
  };

  return (
    <div className="px-20 py-8 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Column - Form */}
          <div>
           

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
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message here"
                rows="5"
                className="w-full p-4 bg-primary-50 rounded-md border border-primary-200 focus:outline-none focus:ring-1 focus:ring-primary-500 text-primary-700"
                required
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

export default ContactForm;
