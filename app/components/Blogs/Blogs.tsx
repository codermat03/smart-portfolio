"use client";
import React from "react";
import Image from "next/image";

const blogPosts = [
  {
    id: 1,
    title: "5 DIY Home Decor Ideas to Brighten Your Space",
    description:
      "Get creative with these simple yet elegant DIY home decor ideas using affordable materials!",
    image: "https://images.zoomin.com/webresources/blog/24/25-wall-art-design-ideas/travel-memories-on-collage-poster.jpg",
    date: "March 8, 2025",
    link: "https://www.zoomin.com/blog/25-creative-wall-decor-ideas-to-brighten-up-your-favourite-space/",
  },
  {
    id: 2,
    title: "Handmade Greeting Cards: A Personal Touch for Every Occasion",
    description:
      "Learn how to make unique, handcrafted greeting cards to surprise your loved ones.",
    image: "https://www.promateworld.com/storage/blog/blog-images/imresizer-1719996127790.jpg",
    date: "March 12, 2025",
    link: "https://www.promateworld.com/blog/greeting-card-design-a-personal-touch-for-special-occasions",
  },
  {
    id: 3,
    title: "Best Fabric Painting Techniques for Beginners",
    description:
      "Explore different fabric painting techniques and turn plain clothes into art pieces!",
    image: "https://www.skillshare.com/blog/wp-content/uploads/2021/03/Image3.jpg",
    date: "March 15, 2025",
    link: "https://www.skillshare.com/en/blog/how-to-paint-on-fabric-12-expert-tips/?srsltid=AfmBOoq5s4dezezh8Taxg4Jtdpt3bYNZBVJ3pnNbSwAMgyMqT3h0n7lO",
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
