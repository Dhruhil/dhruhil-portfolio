const skills = [
  { name: "Python", desc: "ML, Data Analysis, TensorFlow, PyTorch" },
  { name: "C/C++", desc: "Competitive Programming, Algorithms" },
  { name: "JavaScript / React", desc: "Frontend Development" },
  { name: "Node.js / Express", desc: "Backend APIs" },
  { name: "SQL / PostgreSQL / MySQL", desc: "Database Management" },
  { name: "Flask / Django", desc: "Web Frameworks" },
  { name: "HTML / CSS / Tailwind", desc: "Web Design" },
];

export default function Skills() {
  return (
    <section id="skills" className="py-16 max-w-4xl mx-auto">
      <h2 className="text-4xl font-bold mb-6 border-b-2 border-indigo-500 w-36">Skills</h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {skills.map((skill, i) => (
          <div key={i} className="bg-gray-800 p-6 rounded-lg hover:scale-105 transition-transform duration-300">
            <h3 className="text-xl font-semibold">{skill.name}</h3>
            <p className="text-gray-300 mt-1">{skill.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
