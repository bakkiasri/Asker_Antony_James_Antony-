"use client";

const caseStudyData = [
  {
    title: "ZON \n ZON TEA",
    subtitle: "Bubble Tea Shop",
    intro:
      "A new bubble tea brand was entering a competitive market full of similar concepts.",
    challenge:
      "Create a visual identity and communication tools that clearly differentiate the brand.",
    solutions: [
      "Designed a distinctive brand identity with a playful mascot.",
      "Created a clear, illustrative menu.",
      "Developed a franchise presentation.",
      "Achieved strong customer growth in the first month.",
    ],
  },
  {
    title: "DIGITAL \n ANALYTICS HUB",
    subtitle: "Reporting Platform",
    intro:
      "A centralized analytics system was required to streamline reporting.",
    challenge: "Reports were fragmented and lacked real-time insights.",
    solutions: [
      "Built unified dashboards.",
      "Automated weekly reports.",
      "Implemented KPI tracking.",
      "Reduced reporting time by 40%.",
    ],
  },
  {
    title: "ECOM \n GROWTH",
    subtitle: "E-Commerce Optimization",
    intro:
      "An online retail brand needed improved conversion and better targeting.",
    challenge: "Low conversion rates and unclear user behavior limited growth.",
    solutions: [
      "Optimized landing pages.",
      "Improved checkout experience.",
      "Enhanced SEO visibility.",
      "Increased conversions by 25%.",
    ],
  },
];

export default function KeySkillStatic() {
  return (
    <div className="relative w-full bg-black">
      {caseStudyData.map((data, index) => (
        <section
          key={index}
          className="relative min-h-screen w-full flex items-center justify-center px-4 sm:px-6 lg:px-10"
          style={{
            backgroundImage: "url('/images/key_skill.png')",
            backgroundAttachment: "fixed",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Dark Overlay */}
          <div className="absolute inset-0  z-0" />

          <div className="relative z-10 max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-center py-16 md:py-20">
            {/* LEFT CONTENT */}
            <div className="order-2 md:order-1 h-auto md:h-[70vh] overflow-visible md:overflow-y-auto pr-0 md:pr-4 space-y-6 md:space-y-8">
              {/* Intro + Challenge */}
              <div className="bg-white p-6 sm:p-8 shadow-xl rounded-lg">
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                  {data.intro}
                </p>

                <h3 className="mt-6 font-bold text-base sm:text-lg">
                  CHALLENGE
                </h3>
                <div className="w-10 h-[2px] bg-red-500 mt-1 mb-4"></div>

                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                  {data.challenge}
                </p>
              </div>

              {/* Solutions */}
              <div className="bg-white p-6 sm:p-8 shadow-xl rounded-lg">
                <h3 className="font-bold text-base sm:text-lg">SOLUTIONS</h3>
                <div className="w-10 h-[2px] bg-red-500 mt-1 mb-4"></div>

                <ul className="text-gray-600 space-y-3 list-disc pl-5 text-sm sm:text-base">
                  {data.solutions.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* RIGHT TITLE */}
            <div className="order-1 md:order-2 text-center md:text-right text-white">
              <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black whitespace-pre-line leading-none tracking-tight">
                {data.title}
              </h1>

              <p className="text-red-500 font-bold uppercase tracking-[0.3em] sm:tracking-[0.5em] mt-4 text-xs sm:text-sm">
                {data.subtitle}
              </p>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}
