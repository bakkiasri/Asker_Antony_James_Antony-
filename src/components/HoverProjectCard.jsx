"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const slideUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function ProjectShowcase() {
  return (
    <section className="max-w-7xl mx-auto px-6 space-y-24 py-20">
      {/* ===== Project 1 ===== */}
      <motion.div
        variants={slideUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="group grid grid-cols-1 md:grid-cols-2 items-stretch cursor-pointer"
      >
        {/* Text Panel */}
        <div
          className="
            p-12 flex flex-col justify-center
            bg-transparent text-black
            transition-all duration-500
            group-hover:bg-[#b7d7e3]
            group-hover:text-white
          "
        >
          <h2 className="text-3xl font-serif mb-4">Ramen Kaido</h2>

          <p className="mb-6 max-w-sm">
            Branding and visual identity system for a modern Japanese bistro
          </p>

          <span className="text-sm mb-6">2025</span>

          <span className="font-semibold flex items-center gap-2 w-fit">
            VIEW PROJECT →
          </span>
        </div>

        {/* Image Hover */}
        <div className="relative overflow-hidden">
          <Image
            src="/images/ramen-1.avif"
            alt="Ramen default"
            width={900}
            height={600}
            priority
            className="
              w-full h-full object-cover
              transition-all duration-500
              group-hover:opacity-0
              group-hover:scale-105
            "
          />

          <Image
            src="/images/ramen-2.avif"
            alt="Ramen hover"
            width={900}
            height={600}
            className="
              absolute inset-0 w-full h-full object-cover
              opacity-0
              transition-all duration-500
              group-hover:opacity-100
              group-hover:scale-105
            "
          />
        </div>
      </motion.div>

      {/* ===== Project 2 ===== */}
      <motion.div
        variants={slideUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="group grid grid-cols-1 md:grid-cols-2 items-stretch cursor-pointer"
      >
        {/* Image Hover */}
        <div className="relative overflow-hidden">
          <Image
            src="/images/ramen-1.avif"
            alt="Ramen default"
            width={900}
            height={600}
            className="
              w-full h-full object-cover
              transition-all duration-500
              group-hover:opacity-0
              group-hover:scale-105
            "
          />

          <Image
            src="/images/ramen-2.avif"
            alt="Ramen hover"
            width={900}
            height={600}
            className="
              absolute inset-0 w-full h-full object-cover
              opacity-0
              transition-all duration-500
              group-hover:opacity-100
              group-hover:scale-105
            "
          />
        </div>

        {/* Text Panel */}
        <div
          className="
            p-12 flex flex-col justify-center
            bg-transparent text-black
            transition-all duration-500
            group-hover:bg-[#b7d7e3]
            group-hover:text-white
          "
        >
          <h2 className="text-3xl font-serif mb-4">Ramen Kaido</h2>

          <p className="mb-6 max-w-sm">
            Branding and visual identity system for a modern Japanese bistro
          </p>

          <span className="text-sm mb-6">2025</span>

          <span className="font-semibold flex items-center gap-2 w-fit">
            VIEW PROJECT →
          </span>
        </div>
      </motion.div>
    </section>
  );
}
