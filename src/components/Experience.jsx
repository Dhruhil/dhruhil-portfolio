export default function Experience() {
  return (
    <section data-aos="fade-up">
      <h2 className="text-3xl font-bold mb-4 border-b-2 border-purple-500 w-40">Experience</h2>

      <div className="mb-6 p-4 bg-gray-800 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
        <h3 className="font-bold text-xl">Helicore Info Pvt. Ltd. – Web Developer</h3>
        <p className="text-gray-400 text-sm">Aug 2022 – Mar 2023 | Ahmedabad, India</p>
        <ul className="list-disc list-inside mt-2 text-gray-300">
          <li>Built dynamic web applications using Django and Flask.</li>
          <li>Designed responsive front-end with HTML, CSS, Bootstrap, JavaScript.</li>
          <li>Managed MySQL/PostgreSQL databases and integrated payment APIs.</li>
        </ul>
      </div>

      <div className="mb-6 p-4 bg-gray-800 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
        <h3 className="font-bold text-xl">iCreative Technologies – Trainee PHP Developer</h3>
        <p className="text-gray-400 text-sm">Jan 2022 – May 2022 | Ahmedabad, India</p>
        <ul className="list-disc list-inside mt-2 text-gray-300">
          <li>Developed websites using PHP & Laravel.</li>
          <li>Designed interactive front-end using HTML, CSS, JS, jQuery.</li>
        </ul>
      </div>
    </section>
  );
}
