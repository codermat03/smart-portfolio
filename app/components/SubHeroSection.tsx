'use client'
/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useState } from "react";
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { fetchYouTubeStats } from "../utils/youtube";

const SubHeroSection = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [stats, setStats] = useState<any>(null);
  console.log(stats)
  const datas = [
    {
      platform: "Instagram followers",
      followers: "1M",
      handle: "@alikamaya",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.",
      icon: <FaInstagram className="text-xl" />,
    },
    {
      platform: "Facebook followers",
      followers: "1M",
      handle: "@alikamaya",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.",
      icon: <FaTwitter className="text-xl" />,
    },
    {
      platform: "YouTube subscribers",
      followers: "7M",
      handle: "@mukta_art_craft",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.",
      icon: <FaYoutube className="text-xl" />,
    },
  ];
  useEffect(() => {
    const getYouTubeStats = async () => {
      const data = await fetchYouTubeStats();
      if (data) {
        setStats(data);
      }
    };
    getYouTubeStats();
  }, []);
  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-0">
      <div className="text-center">
        <p className="text-[#ff512f] text-sm sm:text-base lg:text-lg uppercase">
          What Do I Love
        </p>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl py-4 font-bold">
          I'm an YouTube influencer artist <br className="hidden sm:block" />{" "}
          running my own design platform
        </h1>
      </div>
      <div className="py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {datas.map((data, index) => (
            <div
              key={index}
              className="relative lg:w-[380px] lg:h-[450px] p-6 w-full max-w-sm mx-auto rounded-tr-[50px] hover:rounded-none transition-all duration-500 shadow-2xl text-center bg-white group overflow-hidden"
            >
              {/* Content Wrapper */}
              <div className="relative z-10 group-hover:text-white transition-colors duration-500">
                <h2 className="text-3xl sm:text-4xl font-bold pt-10">
                  {data.followers}
                </h2>
                <p className="text-lg sm:text-xl font-medium italic py-2">
                  {data.platform}
                </p>
                <p className="mt-2 text-sm sm:text-lg flex items-center justify-center gap-2">
                  {data.icon}
                  {data.handle}
                </p>
                <div className="bg-[#ececec] p-[0.1px] mx-auto my-4"></div>
                <p className="mt-4 text-sm sm:text-base px-2 sm:px-4 py-4">
                  {data.description}
                </p>
              </div>

              {/* Orange Bar */}
              <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-[#FF5D18] to-[#F6136C] group-hover:h-full transition-all duration-500 ease-in-out z-0 rounded-tr-none"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SubHeroSection;
