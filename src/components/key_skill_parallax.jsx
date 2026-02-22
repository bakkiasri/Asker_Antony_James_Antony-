"use client";

import { useEffect, useRef, useState } from "react";

export default function KeySkillParallax() {
  const sectionRef = useRef(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Only animate when section is visible
      if (rect.top <= windowHeight && rect.bottom >= 0) {
        const progress = (windowHeight - rect.top) / windowHeight;
        setOffset(progress * 80); // control speed here
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const skills = [
    {
      title: "Digital First",
      description:
        "Building modern, responsive, and scalable digital solutions optimized for performance and user experience.",
    },
    {
      title: "Page Count",
      description:
        "Focusing on clarity over volume — every page is structured for impact, engagement, and strategic value.",
    },
    {
      title: "Audience Understanding",
      description:
        "Transforming audience behavior insights into intuitive, user-centered digital experiences.",
    },
    {
      title: "Governance & Assurance",
      description:
        "Ensuring quality, compliance, and consistency across every digital reporting initiative.",
    },
    {
      title: "Demystifying AI",
      description:
        "Simplifying complex AI systems into actionable business intelligence and measurable outcomes.",
    },
    {
      title: "The Reporting Ecosystem",
      description:
        "Designing interconnected reporting systems that turn raw data into powerful decision-making tools.",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative h-screen overflow-hidden flex items-center justify-center"
    >
      {/* ================= PARALLAX BACKGROUND ================= */}
      <div className="absolute inset-0 bg-cover bg-center will-change-transform" />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* ================= CONTENT ================= */}
      <div className="relative z-10 px-6 py-20 text-center text-white max-w-6xl w-full">
        <h1 className="text-4xl md:text-6xl font-bold mb-16 tracking-wide">
          The Reporting Renaissance
        </h1>

        {/* Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skills.map((item, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-lg hover:scale-105 hover:bg-white/20 transition-all duration-300"
            >
              <h2 className="text-xl font-semibold">{item.title}</h2>
              <p className="text-sm mt-3 opacity-90 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Button */}
        <button className="mt-16 bg-white text-black px-8 py-3 rounded-md font-semibold hover:bg-gray-200 transition duration-300">
          Explore the Renaissance →
        </button>
      </div>
    </section>
  );
}
