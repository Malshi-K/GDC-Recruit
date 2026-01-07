"use client";
import { usePathname } from "next/navigation";

const CenteredTitleDescription = () => {
  const pathname = usePathname();

  // Content configuration based on path
  const contentConfig = {
    caregivers: {
      title:
        "Explore New Opportunities in New Zealand as Philippines / India Caregivers with GDC International Recruitment Services Ltd!",
      description:
        "Unlock a World of Opportunities in the Breathtaking Land of New Zealand! Are you a dedicated caregiver from the Philippines or India seeking a fulfilling career abroad? Look no further than GDC International Recruitment Services Ltd. We specialize in connecting compassionate caregivers with life-changing opportunities in New Zealand. Join us on this incredible journey to provide care, support, and companionship to those in need, all while experiencing the natural beauty and vibrant culture of New Zealand. Embrace a new chapter in your life as a caregiver and explore the boundless potential that awaits you. Your dream career in New Zealand starts here with GDC International Recruitment Services Ltd!",
    },
    nurses: {
      title:
        "Explore New Opportunities in New Zealand as a Registered Nurse with GDC International Recruitment Services Ltd!",
      description:
        "Are you a skilled and registered nurse from India/ Philippines looking for new career opportunities abroad? Look no further! GDC International Recruitment Services Ltd is your gateway to exciting nursing opportunities in New Zealand.",
    },
  };

  // Determine which content to display based on the current path
  const getContent = () => {
    if (pathname.includes("/caregivers")) {
      return contentConfig.caregivers;
    } else if (pathname.includes("/nurses")) {
      return contentConfig.nurses;
    }
  };

  const content = getContent();

  return (
    <div className="container mx-auto px-4 py-8 md:py-12 lg:py-15">
      <div className="max-w-5xl mx-auto text-center">
        {/* Title */}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 leading-tight text-primary-200">
          {content.title}
        </h1>

        {/* Description */}
        <p className="text-base md:text-lg leading-relaxed text-primary-200">
          {content.description}
        </p>
      </div>
    </div>
  );
};

export default CenteredTitleDescription;
