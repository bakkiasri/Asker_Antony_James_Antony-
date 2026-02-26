"use client";
import { motion } from "framer-motion";
import { useState } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

// ===== DATA OBJECTS =====
const contactInfo = [
  { label: "Name", value: "Asker Antony James Antony" },
  { label: "Email", value: "askerantony@live.com" },
  { label: "Phone", value: "437-339-7365" },
  { label: "LinkedIn", value: "https://kabuto.vercel.app" },
];

// ===== COMPONENT =====
export default function ResumePage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Message Sent Successfully 🚀");
  };

  return (
    <main className="bg-black text-white min-h-screen">
      {/* ===== Header Section ===== */}
      <section
        className="relative pt-8 text-center"
        style={{
          backgroundImage: "url('/textures/resume-bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <motion.h1
          className="text-5xl text-orange-500 font-bold tracking-wide"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
        >
          My Resume
        </motion.h1>
      </section>

      {/* ===== Content Section ===== */}
      <section className="flex flex-col items-center justify-content max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-20">
        {/* Contact Info */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-4xl text-gray-400 font-bold mb-8">
            Contact Info
          </h2>

          <div className="space-y-6 text-lg">
            {contactInfo.map((item, index) => (
              <div key={index} className="flex gap-6">
                <span className="text-gray-400 w-28">{item.label}</span>
                <span className="text-white break-all">
                  {item.label === "LinkedIn" ? (
                    <a
                      href={item.value}
                      target="_blank"
                      className="text-orange-500 underline"
                    >
                      {item.value}
                    </a>
                  ) : (
                    item.value
                  )}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* ===== Contact Form ===== */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-4xl text-gray-400 d-flex justify-center font-bold mb-8">
            Contact Form
          </h2>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col items-center justify-content space-y-9 bg-[#1A1A1B]/60 p-15 rounded-xl shadow-lg"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-lg bg-black border-1 border-gray-500 focus:border-orange-500 outline-none"
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-lg bg-black border border-gray-500 focus:border-orange-500 outline-none"
            />

            <textarea
              name="message"
              rows="4"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-lg bg-black border border-gray-500 focus:border-orange-500 outline-none"
            />

            <button
              type="submit"
              className="w-50 bg-orange-500 hover:bg-orange-400 cursor-pointer transition duration-300 p-3 rounded-lg font-semibold"
            >
              Send Message
            </button>
          </form>
        </motion.div>
      </section>
    </main>
  );
}
