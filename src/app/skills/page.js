"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import KeySkillScroll from "@/components/Key_skill_scroll";

export default function KeySkills() {
  const [stage, setStage] = useState(0);
  const sentence = "Transforming Strategy Into Scalable Growth...";

  // 0 = intro center
  // 1 = move up
  // 2 = show main content

  useEffect(() => {
    const timer1 = setTimeout(() => setStage(1), 3000); // move up
    const timer2 = setTimeout(() => setStage(2), 4200); // show content after animation

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <div className="w-full min-h-screen  relative overflow-hidden">
      {/* Animated Intro */}
      <AnimatePresence>
        {stage !== 2 && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black text-white"
            initial={{ y: "100vh", opacity: 0 }}
            animate={
              stage === 0 ? { y: 0, opacity: 1 } : { y: "-100vh", opacity: 0 }
            }
            exit={{ y: "-100vh", opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
          >
            <motion.h1
              className="font-bold text-center text-6xl flex flex-wrap justify-center px-4"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.05,
                  },
                },
              }}
            >
              {sentence.split("").map((char, index) => (
                <motion.span
                  key={index}
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.4 }}
                  style={{ display: "inline-block" }}
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </motion.h1>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      {stage === 2 && (
        <motion.div
          className=""
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {/* <div className="bg-black  mx-auto  ">
            <h2 className="text-6xl text-white font-bold text-center py-24 px-6">
              Key Skills
            </h2>
          </div> */}

          <div className="">
            {/* <Key_skill_parallax /> */}
            <KeySkillScroll />
          </div>
        </motion.div>
      )}
    </div>
  );
}
