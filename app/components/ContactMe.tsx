import React from "react";

const ContactMe = () => {
  return (
    <div className="relative w-full h-screen md:flex items-center justify-center">
      {/* YouTube Video Background */}
      <div className="absolute top-0 left-0 w-full h-[720px] overflow-hidden">
        <iframe
          className="w-full h-full absolute top-0 left-0 pointer-events-none"
          src="https://www.youtube.com/embed/hKVhJ4xdZSE?autoplay=1&mute=1&loop=1&playlist=hKVhJ4xdZSE&controls=0&showinfo=0&modestbranding=1&rel=0"
          title="Mukta Art & Craft Background Video"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
        ></iframe>
      </div>

      {/* Dark Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/50"></div>

      {/* Content */}
      <div className="relative max-w-6xl mx-auto flex flex-wrap items-center justify-between p-10 rounded-lg bg-[#00000065]">
        {/* Left Side */}
        <div className="w-full md:w-1/2 text-white space-y-6">
          <h2 className="md:text-4xl text-3xl font-bold">Join with me</h2>
          <p className="md:text-lg text-base">
            Unlock your creativity with **Mukta Art & Craft**. Join me on this
            artistic journey!
          </p>
          <div className="flex items-center md:gap-6 gap-2">
            <button className="py-3 md:text-lg text-sm px-6 bg-gradient-to-r from-[#FF5D18] to-[#F6136C] text-white font-semibold md:rounded-lg shadow-lg hover:from-[#FF027C] hover:to-[#ee0979] transition duration-300">
              Contact Me
            </button>
            <p className="md:text-lg text-sm font-medium hover:underline cursor-pointer">
              mukta.officialcontact@gmail.com
            </p>
          </div>
        </div>

        {/* Right Side */}
        <div className="w-full md:w-1/2 bg-white rounded-lg shadow-xl p-8 mt-8 md:mt-0">
          <h3 className="text-2xl font-bold mb-6 text-gray-800">
            Contact Form
          </h3>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First Name"
                className="border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#FF5D18]"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#FF5D18]"
              />
            </div>
            <input
              type="email"
              placeholder="Email Address"
              className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#FF5D18]"
            />
            <button
              type="submit"
              className="py-3 px-6 w-full bg-gradient-to-r from-[#FF5D18] to-[#F6136C] text-white font-semibold rounded-md shadow-lg hover:from-[#FF027C] hover:to-[#ee0979] transition duration-300"
            >
              Join with me now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
