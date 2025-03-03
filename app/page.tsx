import AboutMe from "./components/AboutMe";
import Blog from "./components/Blogs/Blogs";
import ContactMe from "./components/ContactMe";
import HeroSection from "./components/HeroSection";
import MiddleHeroSection from "./components/MiddleHeroSection";
import Services from "./components/Services/Services";
import ShowcaseVideos from "./components/ShowcaseVideos";
import Statistics from "./components/Statistics";
import SubHeroSection from "./components/SubHeroSection";
import Testimonials from "./components/Testimonial/Testimonial";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <div className="bg-[#F9F9F9] md:pt-20 pt-10 md:py-0">
        <MiddleHeroSection />
      </div>

      <div className="bg-[#F9F9F9]  md:py-10">
        <ShowcaseVideos />
      </div>

      <div className="bg-[#F9F9F9] py-10">
        <SubHeroSection />
      </div>
      <div className="bg-[#F9F9F9] py-10">
        <Services />
      </div>
      <div id="social-statistics" className="bg-[#F9F9F9]  py-10">
        <Testimonials></Testimonials>
      </div>
      <div id="about" className="bg-[#F9F9F9] md:py-20">
        <AboutMe />
      </div>
      <div id="social-statistics" className="bg-[#F9F9F9] md:py-20 py-12">
        <Statistics />
      </div>

      <div id="contact" className="bg-white md:pt-5">
        <ContactMe />
      </div>
      <div id="contact" className="bg-[#F9F9F9] md:pt-10">
        <Blog></Blog>
      </div>
    </div>
  );
}
