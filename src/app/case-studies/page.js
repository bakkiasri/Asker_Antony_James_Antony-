"use client";

import React from "react";

export default function CaseStudies() {
  const caseStudies = [
    {
      title: `The "Spillover Commerce" Effect: Driving Amazon Sales Growth through Meta Ads and Shopify Synergies.`,
      points: [
        `Principle: Leveraging the "virtuous cycle" of omnichannel traffic to meet customers where they prefer to buy, increasing both mental and physical availability.`,
      ],
    },
    {
      title: ` Strategic SKU Rationalization: Pruning a 200-SKU Portfolio to Protect 25% Profit Margins.`,
      points: [
        `  Applying "Good Strategy/Bad Strategy" to eliminate product clutter and focus resources on "Hero" SKUs with high market potential`,
      ],
    },
    {
      title: `The "Spillover Commerce" Effect: Driving Amazon Sales Growth through Meta Ads and Shopify Synergies`,
      points: [
        ` Leveraging the "virtuous cycle" of omnichannel traffic to meet customers where they prefer to buy, increasing both mental and physical availability`,
      ],
    },
    {
      title: `Global Market Entry: Navigating Regulatory and Logistical Complexity for U.S. and U.K. Expansion.`,
      points: [
        `Managing a "Start-up" situation within the STARS model by coordinating IP, GS1, and FDA compliance for high-value export shipments`,
      ],
    },
    {
      title: `The Retention Flywheel: Achieving a 22% Lift in LTV through Automated Engagement Loops.`,
      points: [
        `Using the "Hook Model" (Trigger, Action, Reward, Investment) to turn first-time buyers into loyalists and increase customer lifetime value`,
      ],
    },
    {
      title: ` Engineering a High-Output Supply Chain: Implementing an Internal IMS to Identify Production Bottlenecks.`,
      points: [
        `Applying "High Output Management" to create a "window into the black box" for forecasting and maintaining 100% stock availability`,
      ],
    },

    {
      title: `Data-Driven Decision Making: Capturing 8% Market Share through Competitive Pricing and Benchmarking.`,
      points: [
        `Using a "Kernel of Strategy" (Diagnosis, Guiding Policy, Coherent Action) to respond to competitor movements in real-time`,
      ],
    },
    {
      title: ` Advanced Amazon PPC: Utilizing Amazon Marketing Cloud (AMC) to Target High-Value, New-to-Brand Segments.`,
      points: [
        `Moving beyond basic keywords to target specific "customer segments" and full-funnel audiences for a more efficient ACoS`,
      ],
    },
    {
      title: `The "Warehouse to Web" Evolution: Applying Industrial Merchandising Rigor to Omnichannel Operations.`,
      points: [
        `Utilizing the "STARS" transition from "Sustaining Success" in the garment industry to "Accelerated Growth" in CPG e-commerce`,
      ],
    },
    {
      title: `High-Tempo Experimentation: Boosting Conversions by 20% through Systematic A/B Testing and ICE Scoring.`,
      points: [
        `Establishing a "growth hacking" culture that prioritizes marketing ideas based on Impact, Confidence, and Ease `,
      ],
    },
    {
      title: ` The Multiplier Effect: Scaling an 8-Member Cross-Functional Team to Sustain 51% YoY Growth`,
      points: [
        `Transitioning from "Maker to Manager" and identifying the "Native Genius" of team members to increase collective intelligence`,
      ],
    },
    {
      title: `Brand Stewardship in a Marketplace World: Using Brand Registry to Unify Identity Across 7+ Social Channels.`,
      points: [
        `Protecting "Distinctive Brand Assets" to ensure brand consistency and combat the "race to the bottom" caused by unauthorized resellers`,
      ],
    },
    {
      title: `Winning the "Amazon Dilemma": Transitioning from Uncontrolled 3P to a Profitable Blended 1P/3P Model.`,
      points: [
        `Evaluating the "Financial and Operational Tradeoffs" of different Amazon distribution strategies to regain control over pricing and branding`,
      ],
    },
    {
      title: `Contagious Content Strategy: Driving a 30% Lift in Organic Engagement via STEPPS Principles.`,
      points: [
        `Engineering content with "Social Currency" and "Triggers" to build a brand that people naturally talk about and share`,
      ],
    },
    {
      title: ` Implementing "Measure What Matters": Aligning Marketing, Sales, and Ops through OKR Accountability.`,
      points: [
        `Using "Objectives and Key Results" to create transparency and ensure the whole organization is focused on the same "North Star" metric`,
      ],
    },
    {
      title: ` The Creative Longevity Engine: Extending Ad Lifetime via Multi-Stage Iteration and Hook Rate Analysis`,
      points: [
        ` In high-tempo digital environments, a creative has a limited "lifetime value" before it dies out. Optimization requires a scientific framework to find new winners and extend the life of successful concepts`,
      ],
    },
    {
      title: `Breaking the "Immunity to Change": Uncovering Competing Commitments to Drive Team Alignment`,
      points: [
        `Leaders often face "immunity to change," where a team sincerely commits to a goal but is blocked by a "competing commitment"—a hidden personal or professional objective that conflicts with the stated one`,
      ],
    },
    {
      title: `The "Retail Science" Audit: Decoding the Value Equation through In-Store Behavioral Analysis`,
      points: [
        `Shopping is a science based on "Value Equations" that shoppers bring to every experience. Understanding what a customer touches, reads, and bypasses reveals more than simple sales data`,
      ],
    },
    {
      title: `"Creneau" Positioning: Laddering into the Mind in a Leader-Dominated Category`,
      points: [
        `In an over-communicated society, you cannot compete head-on with a leader who already "owns" a rung on the product ladder. Instead, you must find a "creneau" (a hole in the mind) or position yourself as the alternative`,
      ],
    },
    {
      title: `"Creneau" Positioning: Laddering into the Mind in a Leader-Dominated Category`,
      points: [
        `In an over-communicated society, you cannot compete head-on with a leader who already "owns" a rung on the product ladder. Instead, you must find a "creneau" (a hole in the mind) or position yourself as the alternative`,
      ],
    },
    {
      title: `Variable Inspection Management: Calibrating Oversight via Task-Relevant Maturity (TRM)`,
      points: [
        `There is no single "best" management style; the effective style depends entirely on the Task-Relevant Maturity (TRM) of the employee for a specific project`,
      ],
    },
  ];

  return (
    <section className="py-10 ">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl text-orange-500 font-bold text-center mb-12">
          Case Studies
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {caseStudies.map((item, index) => (
            <div
              key={index}
              className="bg-white  shadow-lg hover:shadow-xl transition duration-300 flex flex-col"
            >
              {/* Image */}
              <img
                src="https://images.unsplash.com/photo-1556761175-b413da4baf72"
                alt={item.title}
                className="h-52 w-full object-cover"
              />

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-lg font-semibold mb-4">{item.title}</h3>

                <ul className="text-gray-600 text-sm list-disc pl-5 space-y-2 flex-grow">
                  {item.points.slice(0, 2).map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>

                {/* Buttons */}
                <div className="flex justify-between items-center mt-6">
                  <button className="text-blue-600 text-sm font-medium hover:underline">
                    Share
                  </button>
                  <button className="bg-orange-500 text-white text-sm px-4 py-2 rounded-md hover:bg-orange-400 cursor-pointer transition">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
