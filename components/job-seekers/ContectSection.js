"use client"
import React from "react";
import { Check } from "lucide-react";
import { usePathname } from "next/navigation";

const ContentSection = () => {
  const pathname = usePathname();
  
  // Dynamic content based on path
  const contentConfig = {
    caregivers: {
      requirements: [
        "18 years old or older.",
        "Relevant caregiver certification.",
        "IELTS Academic with a minimum score of 7 for reading, listening, and speaking, and a minimum score of 6.5 for writing. Overall - 7 Band.",
        "Valid passport and willing to relocate to New Zealand",
        "Minimum 2 Year experience"
      ],
      benefits: [
        {
          title: "Comprehensive Support",
          description: "We offer a range of services, from assistance with visa applications, making your journey stress-free and seamless."
        },
        {
          title: "Career Advancement",
          description: "New Zealand offers a high standard of living, top-quality healthcare facilities, and a growing healthcare sector. Advance your career while experiencing the natural beauty and rich cultural heritage of New Zealand."
        }
      ],
      requirementsTitle: "Caregivers Requirement:",
      benefitsTitle: "Why Choose GDC International Recruitment Services Ltd?",
      benefitsSubtitle: "Our experienced team understands the Caregiver's requirements and will guide you through the entire process, ensuring a smooth transition to your new career in New Zealand.",
      requirementImage: "/images/caregivers-1.avif",
      benefitImage: "/images/caregivers-2.avif"
    },
    nurses: {
      requirements: [
        "Have a recognized nursing qualification from India.",
        "Minimum 2 years of experience in the last 5 years (after gaining registration from India/Philippines).",
        "IELTS Academic with a minimum score of 7 for reading, listening, and speaking, and a minimum score of 6.5 for writing.",
        "Pass the Nursing Council's Competency Assessment process.",
      ],
      benefits: [
        {
          title: "Comprehensive Support",
          description: "We offer a range of services, from assistance with visa applications, making your journey stress-free and seamless."
        },
        {
          title: "Career Advancement",
          description: "New Zealand offers a high standard of living, top-quality healthcare facilities, and a growing healthcare sector. Advance your career while experiencing the natural beauty and rich cultural heritage of New Zealand."
        },
      ],
      requirementsTitle: "The Nursing Council Requirement:",
      benefitsTitle: "Why Choose GDC International Recruitment Services Ltd?",
      benefitsSubtitle: "Our experienced team understands the Caregiver's requirements and will guide you through the entire process, ensuring a smooth transition to your new career in New Zealand.",
      requirementImage: "/images/nursing-1.avif",
      benefitImage: "/images/nursing-2.avif"
    }
  };

  // Determine which content to use based on path
  const getContent = () => {
    if (pathname.includes("/caregivers")) {
      return contentConfig.caregivers;
    } else if (pathname.includes("/nurses")) {
      return contentConfig.nurses;
    }
    
    // Default to caregivers if path doesn't match
    return contentConfig.caregivers;
  };
  
  const content = getContent();

  // Sections data based on dynamic content
  const sections = [
    {
      id: "requirements",
      title: content.requirementsTitle,
      subtitle: "",
      background: "bg-white",
      image: content.requirementImage,
      imageAlt: "Professional Requirements",
      list: content.requirements,
      isSimpleList: true,
      reversed: false
    },
    {
      id: "benefits",
      title: content.benefitsTitle,
      subtitle: content.benefitsSubtitle,
      background: "bg-gray-50",
      image: content.benefitImage,
      imageAlt: "Professional Benefits",
      list: content.benefits,
      isSimpleList: false,
      reversed: true
    }
  ];

  // Render a requirement item (simple list item)
  const renderRequirementItem = (item, index) => (
    <div key={index} className="flex items-start gap-4 p-5 bg-gray-50 rounded-xl border border-gray-100 transition-all hover:shadow-md">
      <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
        <Check className="text-primary-100 w-5 h-5" />
      </div>
      <p className="text-gray-700 font-medium py-1">
        {item}
      </p>
    </div>
  );

  // Render a benefit item (title + description)
  const renderBenefitItem = (item, index) => (
    <div key={index} className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
      <div className="flex items-start gap-4">
        <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
          <Check className="text-primary-100 w-5 h-5" />
        </div>
        <div>
          <h3 className="font-semibold text-lg mb-2 text-gray-800">
            {item.title}
          </h3>
          <p className="text-gray-600">
            {item.description}
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {sections.map((section) => (
        <section key={section.id} className={`p-5 lg:p-10 ${section.background}`}>
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Content Column */}
              <div className={`space-y-6 ${section.reversed ? 'order-1 lg:order-2' : ''}`}>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
                  {section.title}
                </h2>
                
                {section.subtitle && (
                  <p className="text-lg text-gray-600 mb-8">
                    {section.subtitle}
                  </p>
                )}

                {/* List Items */}
                <div className="space-y-4">
                  {section.isSimpleList 
                    ? section.list.map(renderRequirementItem) 
                    : section.list.map(renderBenefitItem)
                  }
                </div>
              </div>

              {/* Image Column */}
              <div className={`relative ${section.reversed ? 'order-2 lg:order-1' : ''}`}>
                <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src={section.image}
                    alt={section.imageAlt}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}
    </>
  );
};

export default ContentSection;