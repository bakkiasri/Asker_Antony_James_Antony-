"use client";
import Image from "next/image";

const caseStudyData = [
  {
    title: "1. Strategic Architecture (The Strategy Kernel)",
    subtitle: `I don't believe in "strategy-in-a-can." I build growth on a Kernel of Strategy: a cold-eyed diagnosis of the market, a guiding policy for budget allocation, and a set of coherent actions.`,
    intro_one: {
      title: `STARS Portfolio Management`,
      content: `I diagnose which stage a brand is in Start-up, Turnaround, Accelerated Growth, Realignment, or Sustaining Success to match the right management style to the situation.`,
    },
    intro_two: {
      title: `P&L Ownership`,
      content: `I take full responsibility for the bottom line, managing DME, COGS, and pricing to protect a 20–25% profit margin.`,
    },
    intro_three: {
      title: `Competitive Benchmarking`,
      content: `Using tools like Helium 10 and Keepa, I build data pipelines to monitor margin guardrails and capture market share.`,
    },
  },
  {
    title: "2. Omnichannel Growth (The Hook & STEPPS)",
    subtitle: `Scaling a brand requires more than just ads; it requires building mental and physical availability through habit-forming experiences.`,
    intro_one: {
      title: `The Hook Model`,
      content: `I design digital experiences that move users through Triggers, Action, Variable Rewards, and Investment, turning first-time buyers into loyalists who provide "stored value" to the brand.`,
    },
    intro_two: {
      title: `STEPPS for Virality`,
      content: ` I apply the principles of Social Currency, Triggers, Emotion, and Practical Value to ensure our brand messaging is contagious and worth talking about.`,
    },
  },
  {
    title: "3. High-Leverage Leadership (The Multiplier Effect)",
    subtitle: `My goal is to be a Multiplier, not a Diminisher. I focus on increasing the Managerial Leverage of my team to ensure our collective output far exceeds the sum of our individual parts.`,
    intro_one: {
      title: `Talent Magnetism`,
      content: `I identify the Native Genius of my team members, giving them challenges that are "a size too big" to force growth while removing "blockers" that stifle intelligence.`,
    },
    intro_two: {
      title: `Task-Relevant Maturity (TRM)`,
      content: `I adjust my leadership style based on an individual's TRM providing high structure for new tasks and minimal monitoring for experts to maximize efficiency.`,
    },
    intro_three: {
      title: `Cross-Functional Alignment`,
      content: `I break down silos between marketing, sales, and supply chain, aligning everyone around shared OKRs (Objectives and Key Results).`,
    },
  },
  {
    title: "4. Data-Driven Optimization (The Growth Cycle)",
    subtitle: `I run a High-Tempo Experimentation machine. We don't guess; we test, analyze, and scale what works.`,
    intro_one: {
      title: ` ICE Scoring`,
      content: `I prioritize marketing ideas based on Impact, Confidence, and Ease to ensure we are always focused on the "Big Rocks" that move the needle.`,
    },
    intro_two: {
      title: ` A/B & Multivariate Testing`,
      content: `I constantly iterate on headlines, images, and "Hook Rates" to optimize ad spend across Meta, Google, and Amazon DSP.`,
    },
    intro_three: {
      title: `SEO & Content Mastery`,
      content: `I implement technical SEO roadmaps that consistently put our branded keywords on the first page of search results`,
    },
  },
  {
    title: "5. Technical Tech Stack",
    subtitle: `I don't believe in "strategy-in-a-can." I build growth on a Kernel of Strategy: a cold-eyed diagnosis of the market, a guiding policy for budget allocation, and a set of coherent actions.`,
    intro_one: {
      title: `Platforms`,
      content: `Amazon Seller Central, Shopify Plus, Walmart Seller Central, Meta Business Suite, Google Ads.`,
    },
    intro_two: {
      title: `Intelligence`,
      content: `Tableau, Power BI, Helium 10, Google Analytics 4,  Microsoft Access.`,
    },
    intro_three: {
      title: `Creative`,
      content: `Adobe Creative Suite (Photoshop, Illustrator, InDesign), Canva, Figma.`,
    },
  },
  {
    title: "6. Brand Strategy & Portfolio Management",
    subtitle: `Brand positioning | Portfolio & SKU lifecycle management | Hero SKU development | NPD & launches | Packaging & creative direction`,
    intro_one: {
      title: `Omnichannel Marketing Strategy | GTM Planning & commercialization | Portfolio role strategy`,
    },
    intro_two: {
      title: `Customer Acquisition & Retention (LTV Optimization) | CRM Lifecycle Automation | Budget & Forecast Ownership`,
    },
  },
  {
    title: "7. Integrated Marketing & Connections Planning",
    intro_one: {
      title: `Annual brand plan development | IMC/360° campaigns (digital, retail, influencer, CRM) | Retail & trade marketing | Channel mix & media optimization | Omnichannel retail & marketplace strategy`,
    },
  },
  {
    title: "8. Consumer Insights & Analytics",
    intro_one: {
      title: `Consumer and shopper insights | Category & competitive analysis | KPI dashboarding | A/B testing | Forecasting & demand planning | Customer Segmentation & Insights `,
    },
  },
  {
    title: "9. Commercial & P&L Ownership",
    intro_one: {
      title: `P&L management | Pricing & promo strategy | DME/budget stewardship | Retailer sell-in & sell-through support | Inventory & margin optimization`,
    },
  },
  {
    title: "10. Leadership & Cross-Functional Collaboration",
    intro_one: {
      title: `Team leadership | Agency & vendor management | Sales, supply chain & operations alignment | Executive reporting`,
    },
  },
  {
    title: "11. Digital & Performance Marketing",
    intro_one: {
      title: `E-Commerce (Shopify Plus, Amazon, Walmart, WooCommerce) | Paid Media (Meta, Google, TikTok, LinkedIn Ads)`,
    },
    intro_two: {
      title: `SEO/SEM | Influencer & Affiliate Marketing | Content & Conversion Optimization | Marketplace Management`,
    },
  },
];
const logos = [
  "/images/logos/Figma-logo.svg.png",
  "/images/logos/Canva_logo.svg.png",
  "/images/logos/Adobe_Photoshop_CC_icon.svg.png",
  "/images/logos/Adobe_Illustrator_CC_icon.svg.png",
  "/images/logos/Adobe_Premiere_Pro_CC_icon.svg.png",
  "/images/logos/Google_Ads_logo.svg.png",
  "/images/logos/Amazon_ads_logo_2x.png",
  "/images/logos/Microsoft-Power-BI-Symbol.png",
  "/images/logos/Sem rush.png",
];
export default function KeySkillStatic() {
  return (
    <div className="relative w-full bg-black">
      {caseStudyData.map((data, index) => (
        <section
          key={index}
          className="relative min-h-screen w-full flex items-center justify-center px-4 sm:px-6 lg:px-10"
        >
          <div className="relative z-10 max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-center py-16 md:py-20">
            {/* LEFT CONTENT */}
            <div className="order-2 md:order-1 h-auto md:h-[70vh] flex flex-col justify-center items-center overflow-visible md:overflow-y-auto pr-0 md:pr-4 space-y-6 md:space-y-8">
              {" "}
              {/* Card 1 */}
              {data.intro_one ? (
                <div className="bg-white p-6 sm:p-8 shadow-xl rounded-lg">
                  <h3 className="font-bold text-base sm:text-lg">
                    {data.intro_one.title}
                  </h3>
                  <div className="w-10 h-[2px] bg-red-500 mt-1 mb-4"></div>
                  <p className="text-gray-900 leading-relaxed text-sm sm:text-base">
                    {data.intro_one.content}
                  </p>
                </div>
              ) : null}
              {/* Card 2 */}
              {data.intro_two ? (
                <div className="bg-white p-6 sm:p-8 shadow-xl rounded-lg">
                  <h3 className="font-bold text-base sm:text-lg">
                    {data.intro_two.title}
                  </h3>
                  <div className="w-10 h-[2px] bg-red-500 mt-1 mb-4"></div>
                  <p className="text-gray-900 leading-relaxed text-sm sm:text-base">
                    {data.intro_two.content}
                  </p>
                </div>
              ) : null}
              {/* Card 3 */}
              {data.intro_three ? (
                <div className="bg-white p-6 sm:p-8 shadow-xl rounded-lg">
                  <h3 className="font-bold text-base sm:text-lg">
                    {data.intro_three.title}
                  </h3>
                  <div className="w-10 h-[2px] bg-red-500 mt-1 mb-4"></div>
                  <p className="text-gray-900 leading-relaxed text-sm sm:text-base">
                    {data.intro_three.content}
                  </p>
                </div>
              ) : null}
            </div>

            {/* RIGHT TITLE */}
            <div className="order-1 md:order-2 text-center md:text-right text-white">
              <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black [text-shadow:0_25px_50px_rgba(0,0,0,0.9)] whitespace-pre-line leading-none tracking-tight">
                {data?.title}
              </h1>

              <p className="text-red-900 font-bold uppercase mt-4 text-sm sm:text-md">
                {data?.subtitle}
              </p>
            </div>
          </div>
        </section>
      ))}
      {/* LOGO SECTION */}
      <section className="w-full py-24 bg-black border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-white text-4xl font-bold text-center mb-16">
            Platforms & Tools
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-10 items-center">
            {logos.map((logo, index) => (
              <div
                key={index}
                className="flex items-center justify-center hover:scale-110 transition duration-300"
              >
                <Image
                  src={logo}
                  alt="logo"
                  width={120}
                  height={60}
                  className="object-contain grayscale hover:grayscale-0"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
