"use client";
import React, { useEffect, useState } from "react";

const videos = [
  { id: "1hL4u1-f1zo", title: "DIY Desk Organizer | Paper Crafts Idea" },
  { id: "ms8SznDnFdI", title: "How to make Stickers at home" },
  { id: "uUc3h_-y1rM", title: "Cute Easy Paper Crafts for Beginners" },
  { id: "lb3wSl1aDZg", title: "DIY Easy Crafts When You’re Bored" },
  { id: "bY-bxFIyUDY", title: "Easy Creative Paper Craft" },
  { id: "pbJJzE8DZcs", title: "DIY Creative Paper Craft" },
  { id: "bN7cYoOYzGk", title: "Paper Craft Ideas for Kids" },
  { id: "YZlJcG1PnFg", title: "Handmade Gift Box Tutorial" },
  { id: "X2l1ovHEm7U", title: "Creative Origami DIY" },
];

const ShowcaseVideos: React.FC = () => {
  const [visibleVideos, setVisibleVideos] = useState(3); // Default to 3 videos for small screens

  useEffect(() => {
    const updateVisibleVideos = () => {
      if (window.innerWidth >= 1024) {
        setVisibleVideos(videos.length); // Show all videos on large screens
      } else if (window.innerWidth >= 768) {
        setVisibleVideos(6); // Show 6 videos on medium screens
      } else {
        setVisibleVideos(3); // Show 3 videos on small screens
      }
    };

    updateVisibleVideos(); // Run on initial render
    window.addEventListener("resize", updateVisibleVideos);

    return () => window.removeEventListener("resize", updateVisibleVideos);
  }, []);

  return (
    <section className="py-10 bg-gray-100">
      <div className="text-center py-10">
        <p className="text-[#ff512f] text-sm sm:text-base lg:text-lg uppercase">
          Latest Videos
        </p>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl py-4 font-bold">
          Explore my latest craft videos and tutorials
        </h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-6 px-5 md:px-6 lg:px-0 max-w-6xl mx-auto">
        {videos.slice(0, visibleVideos).map((video) => (
          <div
            key={video.id}
            className="rounded-lg overflow-hidden shadow-lg bg-white"
          >
            <iframe
              className="w-full aspect-video"
              src={`https://www.youtube.com/embed/${video.id}`}
              title={video.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ShowcaseVideos;
