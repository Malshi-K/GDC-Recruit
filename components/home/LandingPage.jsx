import React from "react";
import { ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import AboutSection from "@/components/home/AboutSection";
import ContactSection from "@/components/ContactSection";
import UserTypeSelection from "@/components/home/UserTypeSelection";
import Footer from "@/components/Footer";

const LandingPage = () => {
  return (
    <div className="h-screen overflow-y-auto snap-y snap-mandatory">
      <Header className="fixed top-0 left-0 right-0 z-50" />

      {/* Hero Section */}
      <section className="h-screen relative snap-start">
        {/* Full Background Image */}
        <div
          className="absolute inset-0 w-full h-full bg-primary-100"
          style={{
            backgroundImage: `url('/images/hero-bg.jpg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          {/* Overlay with gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary-300/80 to-white/50" />
        </div>

        {/* Background Shape - Extended and repositioned */}
        <div className="absolute -left-24 top-0 h-screen w-1/2 bg-primary-500 transform skew-x-12 md:block hidden" />

        {/* Small Decorative Shapes */}
        <div className="absolute left-[10%] top-[10%] w-8 h-8 border-4 border-primary-500 rounded-full z-10" />
        <div className="absolute left-[30%] top-[40%] w-4 h-4 bg-primary-500 rounded-full z-10" />

        {/* Background Patterns */}
        <div
          className="absolute inset-0 z-10"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #2a9016 1px, transparent 0)`,
            backgroundSize: "30px 30px",
            opacity: 0.03,
          }}
        />

        <div className="container mx-auto relative h-full px-4 lg:px-8 pt-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center h-full">
            <div className="relative lg:block hidden">
              <img
                src="/images/man.png"
                alt="IT Professional"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="z-20">
              <div className="relative max-w-xl p-8">
                <h2 className="text-primary-800 text-lg font-semibold mb-4">
                  WELCOME TO GDC RECRUITMENT LTD
                </h2>
                <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-gray-900">
                  Premier Staffing Solutions
                </h1>
                <p className="text-gray-700 text-lg mb-8">
                  GDC Recruitments is an agency that connects employers to
                  employees with quality as our highest priority.
                </p>
                <div className="flex gap-4">
                  <button className="bg-primary-600 text-white px-8 py-3 rounded-md flex items-center gap-2 hover:bg-primary-700 transition-colors group">
                    Get In Touch
                    <ArrowRight
                      className="group-hover:translate-x-1 transition-transform"
                      size={20}
                    />
                  </button>
                  <button className="bg-white text-gray-700 px-8 py-3 rounded-md hover:bg-gray-50 transition-colors border border-gray-200">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <AboutSection />

      {/* Services Section */}
      <UserTypeSelection />

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default LandingPage;
