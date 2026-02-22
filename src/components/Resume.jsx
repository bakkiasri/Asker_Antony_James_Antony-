"use client";
import { motion } from "framer-motion";

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
];

const writingSkills = [
  "Content Writing",
  "Email Campaigns",
  "Social Media Copywriting",
  "Website Copy",
  "SEO Optimization",
  "Blog Content",
];

const workExperience = [
  {
    company: "Maplelife Nutrition Corporation",
    role: " Brand & Digital Marketing Manager – Multi-Brand Portfolio",
    duration: "December 2022 - Present",
  },
  {
    company: "Maplelife Nutrition Corporation ",
    role: "Brand & Digital Marketing Specialist",
    duration: "May 2022 - November 2022",
  },
  {
    company: "Everrich Wears",
    role: "Brand & Digital Marketing Executive (Concurrent with Studies)",
    duration: "December 2020 - May 2022",
  },
  {
    company: "Euro Trousers MFG",
    role: "Assistant Merchandiser",
    duration: "January 2017-December 2017",
  },
  {
    company: "Everrich Wears",
    role: "Executive – Design & Marketing",
    duration: "June 2013-November 2016",
  },
];

const softwarePlatforms = [
  "WordPress",
  "Photoshop",
  "Canva",
  "Slack",
  "Asana",
  "Buffer",
  "Hootsuite",
  "Microsoft Office / Office 365",
  "Google Workspace / G Suite",
];

// ===== COMPONENT =====
export default function ResumePage() {
  return (
    <main className="bg-black   text-white">
      {/* ===== Header Section ===== */}
      <section
        className="relative py-24 text-center"
        style={{
          backgroundImage: "url('/textures/resume-bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <motion.h1
          className="text-5xl text-gray-600 font-bold tracking-wide"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
        >
          My Resume
        </motion.h1>
      </section>

      {/* ===== Content Section ===== */}
      <section className="max-w-7xl mx-auto px-6 py-20 space-y-24 flex flex-col items-center">
        {/* ===== Row 1 ===== */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-20 items-start w-full"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Contact Info */}
          <div>
            <h2 className="text-5xl text-gray-500 font-bold mb-8">
              Contact Info
            </h2>

            <div className="space-y-6 text-lg">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex">
                  <span className="text-gray-500 w-28">{item.label}</span>
                  <span>{item.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Writing Skills */}
          <div>
            <h2 className="text-5xl text-gray-500 font-bold mb-8">
              Writing Skills
            </h2>

            <div className="grid grid-cols-2 gap-x-12 gap-y-4 text-lg">
              {writingSkills.map((skill, index) => (
                <span key={index}>{skill}</span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* ===== Row 2 ===== */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-20 items-start w-full"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Work Experience */}
          <div>
            <h2 className="text-5xl font-bold text-gray-500 mb-10">
              Work Experience
            </h2>

            <div className="space-y-8 text-lg">
              {workExperience.map((job, index) => (
                <div
                  key={index}
                  className="flex flex-col md:flex-row md:justify-between gap-2"
                >
                  <div>
                    <p className="font-semibold">{job.company}</p>
                    <p className="italic text-gray-600">{job.role}</p>
                  </div>
                  <span className="text-gray-500 md:text-right">
                    {job.duration}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Software & Platforms */}
          <div>
            <h2 className="text-5xl text-gray-500 font-bold mb-10">
              Software & Platforms
            </h2>

            <ul className="space-y-3 text-lg list-disc list-inside text-gray-700">
              {softwarePlatforms.map((tool, index) => (
                <li key={index}>{tool}</li>
              ))}
            </ul>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
