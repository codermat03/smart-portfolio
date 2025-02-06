import Link from "next/link";
import React from "react";
import { FaCirclePlay } from "react-icons/fa6";

const MiddleHeroSection = () => {
  return (
    <div className="flex flex-wrap items-center justify-center mx-auto max-w-6xl md:py-8 px-4 lg:px-0">
      {/* Left Side - Background Video */}
      <div className="w-full md:w-1/2 relative h-[300px] md:h-[324px]">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <iframe
            className="w-full h-full absolute top-0 left-0 pointer-events-none"
            src="https://www.youtube.com/embed/WgPQHOPPkA4?autoplay=1&mute=1&loop=1&playlist=WgPQHOPPkA4&controls=0&showinfo=0&modestbranding=1&rel=0"
            title="How to make a paper Umbrella that open and close"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      {/* Right Side - About Me Section */}
      <div className="w-full md:w-1/2 flex justify-center md:justify-start">
        <div className="max-w-[400px] flex flex-col gap-4 text-center md:text-left mx-auto">
          <p className="uppercase text-[#FF4150] text-lg">About Me</p>
          <h1 className="text-3xl md:text-4xl font-bold">Meet the Creator</h1>
          <p className="text-[#525252] text-base md:text-lg">
            Welcome to Mukta Art & Craft! I’m a passionate artist who loves
            sharing creative DIY ideas, from paper crafts to home décor. My goal
            is to make crafting fun and easy for everyone.
          </p>
          <ul className="list-disc list-inside text-[#525252] text-base md:text-lg">
            <li>🎨 1M+ Subscribers</li>
            <li>📺 500M+ Views</li>
            <li>🏆 Inspiring Creativity Worldwide</li>
          </ul>
          <Link
            href="https://www.youtube.com/c/MuktaArtCraft"
            className="popup-youtube video-btn flex items-center gap-2 justify-center md:justify-start text-blue-500 hover:text-blue-600 transition-colors duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaCirclePlay className="text-5xl text-[#FF4150] animate-pulse" />
            <span className="text-black font-semibold text-lg">
              Visit My Channel
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MiddleHeroSection;
