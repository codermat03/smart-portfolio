import React from "react";
import SubscribeForm from "./SubscribeForm";
import Link from "next/link";
import { FaCirclePlay } from "react-icons/fa6";

const HeroSection = () => {
  return (
    <div
      id="home"
      className="lg:mx-auto md:mx-8 md:py-10 mt-10 flex flex-col md:flex-row items-center justify-center max-w-6xl"
    >
      {/* Text Content */}
      <div className="grid gap-6 md:w-1/2 px-6 md:px-0 text-center md:text-left">
        <h1 className="text-4xl md:text-7xl font-bold">
          Hi, I AM <br /> Mukta Akter
        </h1>
        <p className="text-lg text-[#888888] md:w-2/3 mx-auto md:mx-0">
          A Photographer & Business Strategist who empowers entrepreneurs to
          build a brand, market it on social media, and create a life they love.
        </p>
        <Link
          href="https://www.youtube.com/watch?v=bk7McNUjWgw"
          className="popup-youtube video-btn flex items-center gap-2 justify-center md:justify-start text-blue-500 hover:text-blue-600 transition-colors duration-300"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaCirclePlay className="text-5xl text-[#FF4150] animate-pulse" />
          <span className="text-black font-semibold text-lg">Watch Video</span>
        </Link>
        <SubscribeForm />
      </div>

      {/* Video Content (Replacing Image) */}
      <div className="flex items-end justify-center w-full md:w-1/2 mt-8 md:mt-0 relative overflow-hidden">
        <div className="relative w-full h-[300px] md:h-[324px]">
          <iframe
            className="w-full h-full absolute top-0 left-0 pointer-events-none"
            src="https://www.youtube.com/embed/hKVhJ4xdZSE?autoplay=1&mute=1&loop=1&playlist=hKVhJ4xdZSE&controls=0&showinfo=0&modestbranding=1&rel=0&fs=0&cc_load_policy=1"
            title="Mukta Akter - Photography & Strategy"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
