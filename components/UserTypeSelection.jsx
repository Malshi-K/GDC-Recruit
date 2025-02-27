import React from "react";
import { ArrowRight } from "lucide-react";

// Single card component that can be used dynamically
const RoleCard = ({ icon, title, description, link = "#" }) => {
  return (
    <div className="flex-1 relative">
      {/* Card content with top right border */}
      <div className="relative">
        {/* Top right border */}
        <div className="absolute -top-2 right-0 w-28 h-20 border-t-2 border-r-2 border-primary-600 rounded-tr-3xl"></div>

        {/* Icon */}
        <div className="bg-primary-600 text-white w-16 h-16 rounded-lg flex items-center justify-center shadow-xl mb-4">
          {icon}
        </div>
        <h3 className="text-xl font-bold mb-3 text-primary-600">{title}</h3>
        <p className="text-gray-600 mb-6">{description}</p>

        <div className="relative">
          <a
            href={link}
            className="inline-flex items-center text-primary-600 font-medium"
          >
            Find here
            <ArrowRight size={16} className="ml-2" />
          </a>

          {/* Bottom left border */}
          <div className="absolute -bottom-6 -left-6 w-28 h-20 border-l-2 border-b-2 border-primary-600 rounded-bl-3xl"></div>
        </div>
      </div>
    </div>
  );
};

const UserTypeSelection = ({ roles = [] }) => {
  // Default roles if none provided
  const defaultRoles = [
    {
      title: "Employer?",
      description:
        "Access our talent pool of qualified professionals in global development and humanitarian sectors. Post jobs, manage applications, and find the perfect candidates for your organization.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
      link: "#employer",
      benefits: [
        "Access specialized talent in international development, humanitarian aid, and global health",
        "Streamlined recruitment process with personalized service",
        "Comprehensive candidate screening and vetting",
        "Global reach with expertise in remote and international placements",
        "Dedicated account manager to support your hiring needs",
      ],
    },
    {
      title: "Job Seeker?",
      description:
        "Discover opportunities in global development, humanitarian, and international organizations worldwide. Create a profile, get matched with relevant positions, and advance your career in making a global impact.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
          />
        </svg>
      ),
      link: "#employee",
      benefits: [
        "Access to exclusive positions with leading NGOs, international organizations, and development agencies",
        "Career guidance and application support from industry specialists",
        "Personalized job matching based on your skills and experience",
        "Resume and interview preparation services",
        "Global opportunities across humanitarian, development, and global health sectors",
      ],
    },
  ];

  // Use provided roles or default roles
  const displayRoles = roles.length > 0 ? roles : defaultRoles;

  return (
    <section className="h-screen relative snap-start flex items-center bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-16 text-primary-700">
          Choose Your Role
        </h2>

        <div className="flex flex-col md:flex-row justify-center gap-16 max-w-6xl mx-auto">
          {displayRoles.map((role, index) => (
            <RoleCard
              key={index}
              title={role.title}
              description={role.description}
              icon={role.icon}
              link={role.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default UserTypeSelection;
