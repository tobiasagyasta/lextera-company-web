// components/IconGrid.js

import React from "react";

const IconGrid = () => {
  // Array of data for each section
  const sections = [
    {
      title: "Telecom",
      description:
        "Integrated solutions featuring essential telecom hardware and software for network and service management.",
    },
    {
      title: "IT",
      description:
        "Tailored IT software solutions delivered through full-stack development, specializing in high-performance applications, including ERP and CRM systems for enterprise clients.",
    },
    {
      title: "Networking",
      description:
        "Supply of core networking hardware (e.g., Access Points and switches) complemented by specialized software for security, monitoring, and network optimization.",
    },
    {
      title: "Infra",
      description:
        "Complete infrastructure hardware offerings, including all Fiber-to-the-Home (FTTH) components, paired with software and support for efficient deployment and management.",
    },
  ];

  // Custom icons for each section
  const SectionIcon = ({ title }: { title: string }) => {
    switch (title) {
      case "Telecom":
        // Antenna/Signal icon
        return (
          <div className="flex items-center justify-center w-8 h-8">
            <svg
              className="w-full h-full text-[#061d61]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <circle cx="12" cy="12" r="2" strokeWidth="2" />
              <path
                d="M12 2v2m0 16v2m10-10h-2M4 12H2m15.07-7.07l-1.41 1.41M6.34 17.66l-1.41 1.41M17.66 17.66l-1.41-1.41M6.34 6.34L4.93 4.93"
                strokeWidth="2"
              />
            </svg>
          </div>
        );
      case "IT":
        // Code/Monitor icon
        return (
          <div className="flex items-center justify-center w-8 h-8">
            <svg
              className="w-full h-full text-[#061d61]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <rect x="3" y="5" width="18" height="14" rx="2" strokeWidth="2" />
              <path d="M8 19v2h8v-2" strokeWidth="2" />
              <path d="M8 9l-2 2 2 2M16 9l2 2-2 2" strokeWidth="2" />
            </svg>
          </div>
        );
      case "Networking":
        // Network nodes icon
        return (
          <div className="flex items-center justify-center w-8 h-8">
            <svg
              className="w-full h-full text-[#061d61]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <circle cx="6" cy="6" r="2" strokeWidth="2" />
              <circle cx="18" cy="6" r="2" strokeWidth="2" />
              <circle cx="12" cy="18" r="2" strokeWidth="2" />
              <path d="M6 8v2a4 4 0 004 4h0a4 4 0 004-4V8" strokeWidth="2" />
            </svg>
          </div>
        );
      case "Infra":
        // Building/Infrastructure icon
        return (
          <div className="flex items-center justify-center w-8 h-8">
            <svg
              className="w-full h-full text-[#061d61]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <rect x="4" y="10" width="16" height="8" rx="2" strokeWidth="2" />
              <rect x="8" y="6" width="8" height="4" rx="1" strokeWidth="2" />
              <path d="M12 2v4" strokeWidth="2" />
            </svg>
          </div>
        );
      default:
        // Fallback generic icon
        return (
          <div className="flex items-center justify-center w-8 h-8">
            <svg
              className="w-full h-full text-[#061d61]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
          </div>
        );
    }
  };

  // components/IconGrid.js

  return (
    <div className="p-4 md:p-8 m-4">
      <div className="grid grid-cols-1 md:grid-cols-2">
        {sections.map((section, index) => (
          <div
            key={index}
            // Add a right border for the first column and a bottom border for the top row
            className="p-8 md:p-12 md:[&:nth-child(odd)]:border-r [&:nth-child(-n+2)]:border-b"
          >
            {/* Icon and Title */}
            <div className="flex items-center gap-4 mb-4">
              <SectionIcon title={section.title} />
              <h3 className="text-3xl font-bold text-neutral-800">
                {section.title}
              </h3>
            </div>
            {/* Description */}
            <p className="text-lg text-neutral-600 leading-relaxed font-merriweather">
              {section.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IconGrid;
