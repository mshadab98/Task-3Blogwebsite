import React, { useState, useEffect } from "react";
import { GiJetFighter } from "react-icons/gi";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import HomeBlogs from "../HomeBlogs/HomeBlogs";

const HomeCrouser = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 2000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  return (
    <>
    <div className="relative w-full h-screen overflow-hidden dark:bg-gray-800">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 w-full h-full bg-cover bg-center transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
          style={{ backgroundImage: `url(${slide.image})` }}
        >
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4 sm:p-8 md:p-12 lg:p-16">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 flex items-center gap-2 drop-shadow-lg">
              {slide.title} <GiJetFighter />
            </h1>
            <p className="text-white text-lg sm:text-xl md:text-2xl font-bold max-w-3xl px-4 sm:px-6 drop-shadow-lg">
              {slide.description}
            </p>
            <button className="mt-4 sm:mt-6 px-5 sm:px-6 py-3 bg-blue-900 text-white rounded-lg text-lg hover:bg-blue-800 transition-all duration-300">
              Explore More
            </button>
          </div>
        </div>
      ))}

      
      <button
        className="absolute left-5 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-3 rounded-full hover:bg-gray-900 transition"
        onClick={prevSlide}
      >
        <FaArrowLeft size={20} />
      </button>
      <button
        className="absolute right-5 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-3 rounded-full hover:bg-gray-900 transition"
        onClick={nextSlide}
      >
        <FaArrowRight size={20} />
      </button>
    </div>

    <HomeBlogs />
    </>
  );
};

export default HomeCrouser;
