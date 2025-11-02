import React from "react";
import { motion } from "framer-motion";

const Experience = () => {
  const timeline = [
    {
      title: "Master’s in Artificial Intelligence",
      place: "Jönköping University, Sweden",
      period: "2024 – 2026",
      description:
        "Focused on machine learning, deep learning, NLP, and computer vision research.",
    },
    {
      title: "AI Developer Intern",
      place: "Tech Innovation Lab",
      period: "2023 – 2024",
      description:
        "Built and deployed ML models for NLP and predictive analytics projects.",
    },
    {
      title: "Bachelor’s in Information Technology",
      place: "Silver Oak College, India",
      period: "2018 – 2022",
      description:
        "Specialized in software development, data analysis, and AI foundations.",
    },
  ];

  return (
    <section id="experience" className="section-padding bg-gray-800">
      <motion.h2
        className="text-4xl font-bold text-cyan-400 text-center mb-10"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        Experience & Education
      </motion.h2>

      <motion.div
        className="relative border-l border-cyan-400 max-w-3xl mx-auto pl-8 space-y-10"
        initial="hidden"
        whileInView="visible"
        variants={{
          visible: { transition: { staggerChildren: 0.15 } },
        }}
        viewport={{ once: true }}
      >
        {timeline.map((item, i) => (
          <motion.div
            key={i}
            className="relative"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <div className="absolute w-3 h-3 bg-cyan-400 rounded-full -left-1.5 border border-gray-900"></div>
            <h3 className="text-xl font-semibold text-cyan-300">{item.title}</h3>
            <p className="text-gray-400 italic">
              {item.place} | {item.period}
            </p>
            <p className="text-gray-300 mt-2">{item.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Experience;
