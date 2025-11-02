import React, { useState } from "react";
import { motion } from "framer-motion";

const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const skills = {
    Languages: ["Python", "JavaScript", "C++", "Java", "R"],
    "AI / ML": ["TensorFlow", "PyTorch", "Scikit-learn", "Keras", "OpenCV"],
    "Web Development": ["React", "Node.js", "TailwindCSS", "Flask", "Django"],
    Tools: ["Git", "Docker", "VS Code", "Postman", "Jupyter Notebook"],
    Other: ["SQL", "Linux", "Firebase"],
  };

  const categories = ["All", ...Object.keys(skills)];

  return (
    <section id="skills" className="section-padding bg-gray-900 text-center">
      <motion.h2
        className="text-4xl font-bold text-cyan-400 mb-10"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        Skills
      </motion.h2>

      {/* Filter Buttons */}
      <motion.div
        className="flex justify-center flex-wrap gap-4 mb-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        viewport={{ once: true }}
      >
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-5 py-2 rounded-lg font-semibold transition-all duration-300 ${
              selectedCategory === cat
                ? "bg-cyan-400 text-gray-900"
                : "bg-gray-800 text-cyan-300 hover:bg-cyan-600 hover:text-white"
            }`}
          >
            {cat}
          </button>
        ))}
      </motion.div>

      {/* Skills Grid */}
      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-5xl mx-auto"
        initial="hidden"
        whileInView="visible"
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.07,
            },
          },
        }}
        viewport={{ once: true }}
      >
        {Object.entries(skills).map(([category, items]) =>
          (selectedCategory === "All" || selectedCategory === category)
            ? items.map((skill) => (
                <motion.div
                  key={skill}
                  className="bg-gray-800 p-4 rounded-xl shadow-md hover:shadow-cyan-400/40 transition transform hover:-translate-y-1"
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: { opacity: 1, y: 0 },
                  }}
                >
                  <p className="text-cyan-300 font-medium">{skill}</p>
                </motion.div>
              ))
            : null
        )}
      </motion.div>
    </section>
  );
};

export default Skills;
