export default function CaseStudies() {
  const caseStudies = [
    {
      title: "Digital Marketing Strategy & Execution",
      points: [
        "Managed 6 supplement brands with unique positioning and strategy.",
        "Executed 50+ campaigns annually across Amazon Ads, Google Ads, and social media.",
        "Improved SEO rankings and organic traffic consistently.",
        "Coordinated seasonal campaigns and discount structures.",
        "Managed email workflows to improve retention and repeat purchases.",
      ],
    },
    {
      title: "E-Commerce Platform Management",
      points: [
        "Oversaw 6+ platforms (Amazon, eBay, Walmart, Shopify, WooCommerce, BigCommerce).",
        "Optimized 200+ product listings including A+ content.",
        "Relaunched key products with rebranded creatives.",
        "Managed POS integrations and backend systems.",
        "Optimized logistics workflow using ShipStation.",
      ],
    },
    {
      title: "Team Leadership & Training",
      points: [
        "Led a team of 8 across marketing, e-commerce, and support.",
        "Conducted weekly KPI strategy meetings.",
        "Trained juniors on customer support and refund processes.",
        "Supervised onboarding for 3+ new hires.",
        "Managed remote productivity scheduling.",
      ],
    },
    {
      title: "Corporate & Cross-Functional Coordination",
      points: [
        "Coordinated with HR, management, and vendors.",
        "Managed Facebook Business Ads and Amazon SAS Core accounts.",
        "Handled corporate communications and vendor follow-ups.",
        "Facilitated employee onboarding and access setup.",
        "Represented company in Amazon strategic exit programs.",
      ],
    },
    {
      title: "Creative & Branding Development",
      points: [
        "Developed brand slogans and positioning strategies.",
        "Enhanced product descriptions with compliant copy.",
        "Reviewed packaging improvements and visual creatives.",
        "Curated mood boards for rebranding projects.",
        "Oversaw Amazon A+ content and storefront redesigns.",
      ],
    },
    {
      title: "International Market Expansion",
      points: [
        "Coordinated U.S. & U.K. Amazon catalog compliance.",
        "Adjusted global pricing strategies.",
        "Explored China market entry strategies.",
        "Supported export compliance and vendor coordination.",
      ],
    },
    {
      title: "Project & Process Management",
      points: [
        "Managed 3+ major website redevelopment projects.",
        "Hosted cross-team stakeholder meetings.",
        "Coordinated product relaunch timelines.",
        "Built structured trackers for PR and campaigns.",
      ],
    },
    {
      title: "Business Development & Side Ventures",
      points: [
        "Conceptualized The Projects Lab (SEO & digital firm).",
        "Researched payment solutions for small businesses.",
        "Evaluated service-based revenue models.",
        "Conducted competitor analysis and market research.",
      ],
    },
  ];

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-8 text-center">Case Studies</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {caseStudies.map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-2xl p-6 border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition duration-300"
          >
            <h2 className="text-lg font-semibold text-gray-800 mb-4">
              {item.title}
            </h2>

            <ul className="list-disc pl-5 space-y-2 text-gray-600 text-sm leading-relaxed">
              {item.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
