/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState } from "react";
import Image from "next/image";
import { GrLinkNext, GrLinkPrevious } from "react-icons/gr";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    role: "Tech YouTuber",
    review:
      "CoderMat built an amazing website for me! The design is sleek, and it's super fast!",
    image: "https://i.postimg.cc/6qv5TDS6/1.jpg",
  },
  {
    id: 2,
    name: "Sarah Khan",
    role: "Gaming Influencer",
    review:
      "Loved working with CoderMat! My website is exactly how I imagined it.",
    image: "https://i.postimg.cc/0ydjY1Nb/5.jpg",
  },
  {
    id: 3,
    name: "Michael Smith",
    role: "Vlogger",
    review:
      "Professional service, fast delivery, and stunning design. Highly recommended!",
    image: "https://i.postimg.cc/YSr98D48/7.jpg",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section className="bg-gradient-to-r from-[#FF5D18] to-[#FF7A29] py-16 px-6 md:px-12 w-full">
      <div className="max-w-6xl mx-auto text-center text-white">
        <h2 className="text-3xl md:text-4xl font-bold">
          Testimonials (Influence & Trust)
        </h2>
        <p className="text-lg mt-4">
          What top YouTubers & influencers say about our service.
        </p>
      </div>

      {/* Testimonial Slider */}
      <div className="relative max-w-4xl mx-auto mt-12 flex justify-center items-center overflow-hidden min-h-[320px]">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={testimonials[currentIndex].id}
            initial={{ opacity: 0, x: direction * 200 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -direction * 200 }}
            transition={{ duration: 0.6, ease: "anticipate" }}
            className="bg-white p-8 rounded-2xl shadow-xl border border-gray-200 text-center w-full sm:w-[90%] md:w-[80%] min-h-[250px] flex flex-col justify-center"
          >
            <div className="mx-auto w-24 h-24 relative">
              <Image
                src={testimonials[currentIndex].image}
                alt={testimonials[currentIndex].name}
                fill
                className="rounded-full border-4 border-[#FF5D18] object-cover"
              />
            </div>
            <p className="text-lg text-gray-800 mt-4 italic font-semibold">
              "{testimonials[currentIndex].review}"
            </p>
            <h3 className="mt-4 text-2xl font-bold text-[#FF5D18]">
              {testimonials[currentIndex].name}
            </h3>
            <p className="text-sm text-gray-600">
              {testimonials[currentIndex].role}
            </p>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-4 md:left-0 top-1/2 transform -translate-y-1/2 bg-[#FF5D18] text-white p-4 rounded-full shadow-lg hover:bg-[#ee0979] transition-all duration-300 ease-in-out"
        >
          <GrLinkPrevious />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 md:right-0 top-1/2 transform -translate-y-1/2 bg-[#FF5D18] text-white p-4 rounded-full shadow-lg hover:bg-[#ee0979] transition-all duration-300 ease-in-out"
        >
          <GrLinkNext />
        </button>
      </div>
    </section>
  );
};

export default Testimonials;
