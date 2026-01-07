import React from 'react';
import { CheckCircle, Check } from 'lucide-react';

const AboutSection = () => {
  return (
    <section className="min-h-screen relative snap-start bg-white">
      <div className="container mx-auto px-4 lg:px-8 py-28 flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image */}
          <div className="relative">
            <div className="relative w-full h-[350px] rounded-2xl overflow-hidden">
              <img
                src="/images/about.jpg"
                alt="Team Meeting"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Chat Bubble */}
            <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-2xl shadow-lg">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
                  <CheckCircle className="text-primary-200 w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Since</p>
                  <p className="text-sm font-semibold text-primary-200">2006</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="space-y-6">
            <div className="space-y-3">
              <p className="text-primary-200 font-semibold">About GDC Recruitment</p>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                DRIVING CAREERS FORWARD
              </h2>
              <p className="text-lg font-medium text-gray-700">Serving Businesses & Job Seekers</p>
            </div>

            <div className="bg-white rounded-xl p-5 shadow-lg space-y-3">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Check className="text-primary-200 w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2 text-primary-200">Comprehensive Services</h3>
                  <p className="text-gray-600 text-sm">
                    With our extensive background in engineering and architectural services, we provide 
                    high-quality candidates for commercial, industrial, and local government clients. 
                    Our services cover both temporary and permanent positions across all sectors.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-5 shadow-lg space-y-3">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Check className="text-primary-200 w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2 text-primary-200">Expert HR-Based Recruitment</h3>
                  <p className="text-gray-600 text-sm">
                    Our recruitment staff brings strong HR expertise, skilled at identifying the perfect 
                    candidate fit while avoiding time and financial losses. We prioritize building quality 
                    relationships and ensure the best outcomes for both clients and candidates.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-8">
              <div className="text-center">
                <h3 className="text-3xl font-bold text-primary-100 mb-1">17+</h3>
                <p className="text-gray-600 text-sm">Years Experience</p>
              </div>
              <div className="text-center">
                <h3 className="text-3xl font-bold text-primary-100 mb-1">100%</h3>
                <p className="text-gray-600 text-sm">Client Satisfaction</p>
              </div>
            </div>

            <div className="flex gap-4">
              <button className="bg-primary-200 text-white px-6 py-2.5 rounded-lg hover:bg-primary-100 transition-colors">
                Learn More
              </button>
              <button className="bg-white text-gray-700 px-6 py-2.5 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;