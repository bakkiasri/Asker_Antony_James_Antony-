"use client";

import Image from "next/image";
import React from "react";
import { LuPlane } from "react-icons/lu";
import { FaCar } from "react-icons/fa";
import { GiPathDistance } from "react-icons/gi";
import { MdHotelClass } from "react-icons/md";
import { GoArrowRight } from "react-icons/go";
import { FaWhatsapp } from "react-icons/fa";
import Link from "next/link";
import { motion } from "framer-motion";

const SSlide = () => {
  return (
    <section className="w-full h-full">
      <div className="relative flex flex-col md:flex-row justify-center items-center md:items-start px-5 md:px-0">
        {/* IMAGE */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            type: "spring",
            damping: 30,
            stiffness: 100,
            duration: 0.5,
          }}
          className="md:w-1/2 flex justify-center"
        >
          <Image
            src="/images/kabuto-imae.avif"
            alt="Shanmuga Travels"
            width={500}
            height={400}
            priority
            className="h-80 w-72 md:h-[500px] md:w-[400px] rounded-2xl object-cover"
          />
        </motion.div>

        {/* CONTENT */}
        <div className="md:w-1/2 flex flex-col mt-5 md:mt-5 items-start">
          <div className="max-w-xl w-full">
            <motion.h1
              initial={{ x: 60, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 100, damping: 30 }}
              className="font-bold mb-3 text-2xl md:text-4xl text-center md:text-left
              bg-gradient-to-r from-primary via-teal to-gold text-transparent bg-clip-text"
            >
              ASKERS JOHN
            </motion.h1>

            <motion.h2
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 100, damping: 30 }}
              className="text-lg md:text-2xl font-semibold text-center md:text-left"
            >
              Cab & Travel Services in Tiruchendur, Thoothukudi & Tirunelveli
            </motion.h2>

            <motion.p
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 100, damping: 30 }}
              className="mt-4 text-gray-700 text-sm md:text-base"
            >
              Welcome to Shanmuga Travels, your trusted local cab and travel
              service provider with over 10+ years of experience. We offer
              comfortable and reliable pickup & drop services, pilgrimage trips,
              sightseeing tours, and local travel across{" "}
              <span className="text-primary font-semibold">
                Tiruchendur, Thoothukudi, and Tirunelveli.
              </span>
            </motion.p>
          </div>

          {/* FEATURES */}
          <div className="hidden md:grid md:grid-cols-3 gap-4 mt-7 -ml-60 z-30">
            {[
              { icon: <FaCar size={26} />, label: "Address Pickup" },
              { icon: <LuPlane size={26} />, label: "Airport Transfer" },
              { icon: <GiPathDistance size={26} />, label: "Long Distance" },
              { icon: <MdHotelClass size={26} />, label: "Taxi Tours" },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ x: 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 30,
                  delay: index * 0.1,
                }}
                className="flex items-center gap-3 bg-white border p-4 rounded-xl shadow-sm"
              >
                {item.icon}
                <p className="text-lg font-medium">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SSlide;
