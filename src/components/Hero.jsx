import React from "react";

const Hero = () => {
  return (
    <section className="h-screen relative flex flex-col justify-center items-center bg-gradient-to-r from-cyan-700 to-purple-900 text-white overflow-hidden">
      {/* Particle Background Placeholder */}
      <div id="tsparticles" className="absolute top-0 left-0 w-full h-full z-0"></div>

      {/* Hero Content */}
      <div className="relative z-10 text-center">
        <h1 className="text-6xl font-bold mb-4 animate__animated animate__fadeInDown">
          Hi, I'm Dhruhil Patel
        </h1>

        <p className="text-2xl mb-6 h-8">
          <span id="typed-output"></span>
        </p>

        <a
          href="#about"
          className="px-8 py-3 bg-cyan-400 text-gray-900 font-semibold rounded-lg shadow-lg hover:bg-cyan-500 animate__animated animate__fadeInUp"
        >
          Discover More
        </a>
      </div>
    </section>
  );
};

export default Hero;
