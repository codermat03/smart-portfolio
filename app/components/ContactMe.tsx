import React from "react";

const ContactMe = () => {
  return (
    <div className="relative w-full lg:h-screen flex items-center justify-center px-4 md:px-6">
      {/* YouTube Video Background */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <iframe
          className="w-full lg:h-full absolute top-0 left-0 pointer-events-none hidden lg:block"
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
      <div className="relative max-w-6xl w-full mx-auto flex flex-col lg:flex-row items-center justify-center p-6 md:p-8 rounded-lg lg:bg-[#00000065]">
        {/* Left Side */}
        <div className="w-full text-white space-y-4 md:space-y-6 text-left md:text-center lg:text-left">
          <h2 className="text-2xl md:text-5xl font-bold leading-snug text-center">
            Unlock Your Creativity <br />
            <span className="text-[#FF5D18]">Join with Me</span>
          </h2>
          <p className="text-base md:text-lg leading-relaxed md:max-w-lg hidden lg:block">
            Step into the world of <b>Mukta Art & Craft</b> and bring your
            artistic vision to life. Join me on this creative journey and
            explore endless possibilities!
          </p>
          <div className="md:flex flex-col sm:flex-row items-start sm:items-center md:gap-6 gap-3 justify-center grid">
            <button className="py-3 px-6 text-sm md:text-lg bg-gradient-to-r from-[#FF5D18] to-[#F6136C] text-white font-semibold rounded-md shadow-lg hover:from-[#FF027C] hover:to-[#ee0979] transition duration-300">
              Contact Me
            </button>
            <p className="text-sm md:text-lg font-medium hover:underline cursor-pointer">
              mukta.officialcontact@gmail.com
            </p>
          </div>
        </div>

        {/* Right Side */}
        <div className="w-full bg-white rounded-lg shadow-xl p-6 md:p-8 mt-6 lg:mt-0">
          <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-gray-800 text-center">
            Get in Touch
          </h3>
          <form className="space-y-4 md:space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First Name"
                className="border border-gray-300 rounded-md p-3 text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-[#FF5D18]"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="border border-gray-300 rounded-md p-3 text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-[#FF5D18]"
              />
            </div>
            <input
              type="email"
              placeholder="Email Address"
              className="w-full border border-gray-300 rounded-md p-3 text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-[#FF5D18]"
            />
            <button
              type="submit"
              className="py-3 px-6 w-full bg-gradient-to-r from-[#FF5D18] to-[#F6136C] text-white font-semibold rounded-md shadow-lg hover:from-[#FF027C] hover:to-[#ee0979] transition duration-300"
            >
              Join with Me Now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
