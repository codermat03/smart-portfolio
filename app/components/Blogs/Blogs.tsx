"use client";
import React from "react";
import Image from "next/image";

const blogPosts = [
  {
    id: 1,
    title: "How to Build Stunning Websites in 2025",
    description:
      "A comprehensive guide to web design trends, tips, and tricks for creating beautiful and functional websites in 2025.",
    image: "https://i.postimg.cc/wMh4XZvP/5.jpg",
    date: "March 5, 2025",
    link: "#",
  },
  {
    id: 2,
    title: "The Future of Web Development: What's Next?",
    description:
      "Explore the future of web development, including emerging technologies and practices that will shape the digital landscape in the coming years.",
    image: "https://i.postimg.cc/hPWHXbj6/2.jpg",
    date: "March 12, 2025",
    link: "#",
  },
  {
    id: 3,
    title: "Top 5 Web Design Trends You Can't Miss",
    description:
      "Stay ahead of the curve with the latest web design trends that are changing the way users interact with websites.",
    image: "https://i.postimg.cc/CLG9kBn1/3.jpg",
    date: "March 20, 2025",
    link: "#",
  },
];

const Blog = () => {
  return (
    <section className="bg-[#F9F9F9] py-16 px-6 md:px-12 lg:px-0 max-w-6xl mx-auto">
      <div className=" text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          📰 Blog & News
        </h2>
        <p className="text-lg text-gray-600 mt-4">
          Stay updated with the latest trends, tips, and news in the world of
          web design and development.
        </p>
      </div>

      {/* Blog Post Grid */}
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <div
            key={post.id}
            className="bg-white p-6 rounded-xl shadow-lg transition-all duration-300 ease-in-out hover:shadow-xl hover:scale-105"
          >
            <div className="relative w-full h-60 mb-6">
              <Image
                src={post.image}
                alt={post.title}
                layout="fill"
                className="rounded-xl object-cover"
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-900">
              {post.title}
            </h3>
            <p className="text-sm text-gray-600 mt-2">{post.description}</p>
            <p className="text-xs text-gray-400 mt-2">{post.date}</p>
            <a
              href={post.link}
              className="inline-block mt-4 text-[#FF5D18] font-semibold hover:text-[#ee0979] transition-all duration-300 ease-in-out"
            >
              Read More →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blog;
