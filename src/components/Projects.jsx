const projects = [
  { title: "Deep Learning: Pallet Detection", desc: "YOLOv8 pipeline for pallet classification." },
  { title: "Pest Forecasting ML", desc: "Forecasting crop pests with XGBoost & GRU." },
  { title: "PlastiSense AI", desc: "Real-time plastic detection in water." },
  { title: "Cocoon E-commerce", desc: "Dynamic Laravel e-commerce website." },
];

export default function Projects() {
  return (
    <section id="projects" className="py-16 max-w-4xl mx-auto">
      <h2 className="text-4xl font-bold mb-6 border-b-2 border-indigo-500 w-36">Projects</h2>
      <div className="grid sm:grid-cols-2 gap-6">
        {projects.map((proj, i) => (
          <div key={i} className="relative group bg-gray-800 rounded-lg overflow-hidden">
            <div className="p-6">
              <h3 className="text-xl font-semibold">{proj.title}</h3>
              <p className="text-gray-300 mt-1">{proj.desc}</p>
            </div>
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex justify-center items-center transition-opacity duration-300">
              <a href="#" className="bg-indigo-600 px-4 py-2 rounded text-white">View</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
