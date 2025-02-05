/* eslint-disable react/no-unescaped-entities */
import React from "react";

const Services = () => {
  return (
    <section className="bg-[#F9F9F9] py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Work With Me
        </h2>
        <p className="text-gray-600 mt-4 text-lg">
          Collaborate for product reviews, sponsorships, and brand promotions.
        </p>
      </div>

      {/* Service Cards */}
      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-200 hover:shadow-xl transition-all transform hover:-translate-y-2">
          <div className="flex items-center space-x-3">
            <span className="text-3xl">📢</span>
            <h3 className="text-xl font-semibold text-gray-900">
              Brand Sponsorships
            </h3>
          </div>
          <p className="text-gray-600 mt-2">
            Promote your brand in my videos and reach a large audience.
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-200 hover:shadow-xl transition-all transform hover:-translate-y-2">
          <div className="flex items-center space-x-3">
            <span className="text-3xl">🎥</span>
            <h3 className="text-xl font-semibold text-gray-900">
              Product Reviews
            </h3>
          </div>
          <p className="text-gray-600 mt-2">
            Get in-depth and honest product reviews on my channel.
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-200 hover:shadow-xl transition-all transform hover:-translate-y-2">
          <div className="flex items-center space-x-3">
            <span className="text-3xl">💰</span>
            <h3 className="text-xl font-semibold text-gray-900">
              Affiliate Marketing
            </h3>
          </div>
          <p className="text-gray-600 mt-2">
            Feature your products with my affiliate marketing strategy.
          </p>
        </div>
      </div>

      {/* Call to Action Button */}
      <div className="text-center mt-12">
        <button
          type="button"
          className="py-3 px-6 text-sm sm:text-base font-semibold text-white bg-[#FF5D18] 
          transition-all duration-500 ease-in-out hover:bg-[#ee0979] rounded-lg shadow-md"
        >
          Let's Collaborate
        </button>
      </div>
    </section>
  );
};

export default Services;
