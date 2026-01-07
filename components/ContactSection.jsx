import React from "react";

const ContactSection = () => {
  return (
    <section
      className="h-screen relative snap-start flex items-center bg-cover bg-center"
      style={{ backgroundImage: "url('/images/contact.webp')" }}
    >
      {/* Overlay to ensure text readability */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Left Content */}
            <div className="space-y-6 text-white">
              <h2 className="text-4xl font-bold tracking-tight">
                Connect with us
              </h2>
              <p className="text-lg">
                Ready to take your IT infrastructure to the next level? Book a
                consultation with our experts today.
              </p>
            </div>

            <div className="relative">
              {/* Shadow layer that shows only on left and bottom */}
              <div
                className="absolute bg-gray-300"
                style={{
                  top: "20px",
                  left: "-20px",
                  right: "20px",
                  bottom: "-20px",
                  zIndex: 0,
                }}
              ></div>

              {/* Main form card */}
              <div className="relative bg-white shadow-sm p-8 z-10">
                <form className="space-y-4">
                  <div>
                    <label className="block text-gray-700 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-1 focus:ring-primary-200"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-1 focus:ring-primary-200"
                      placeholder="Enter your email"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-1 focus:ring-primary-200"
                      placeholder="Enter your phone number"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 mb-2">Message</label>
                    <textarea
                      rows={4}
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-1 focus:ring-primary-200 resize-none"
                      placeholder="Tell us about your project"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-primary-100 text-white py-3 px-6 rounded-full hover:bg-primary-100 transition-colors duration-200 font-medium mt-2"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
