import React from "react";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800 text-white my-7 py-24 px-7 md:px-10 overflow-hidden rounded-b-3xl shadow-xl">
      {/* Decorative abstract background shapes */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-72 h-72 bg-blue-400 opacity-20 rounded-full blur-3xl transform -translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 opacity-20 rounded-full blur-3xl transform translate-x-1/4 translate-y-1/4"></div>
      </div>

      {/* Main hero content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6">
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight leading-tight drop-shadow-lg hover:scale-105 transition-transform duration-500">
          Discover Your Next Favorite Read
        </h1>

        <p className="text-lg md:text-2xl opacity-90 leading-relaxed max-w-2xl mx-auto">
          Dive into a universe of captivating stories, timeless classics, and
          thought-provoking adventures. Your journey begins here.
        </p>

        <button className="mt-6 bg-white text-blue-800 font-semibold py-3 px-10 rounded-full shadow-lg hover:bg-blue-900 hover:text-white transform hover:scale-105 transition duration-300 ease-in-out">
          Explore the Collection
        </button>
      </div>

      {/* Decorative bottom wave shape */}
      <svg
        className="absolute bottom-0 left-0 w-full text-white opacity-10"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
      >
        <path
          fill="currentColor"
          d="M0,64L48,90.7C96,117,192,171,288,181.3C384,192,480,160,576,160C672,160,768,192,864,197.3C960,203,1056,181,1152,181.3C1248,181,1344,203,1392,213.3L1440,224V320H0Z"
        ></path>
      </svg>
    </section>
  );
};

export default Hero;
