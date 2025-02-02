import AboutMe from "./components/AboutMe";
import ContactMe from "./components/ContactMe";
import HeroSection from "./components/HeroSection";
import MiddleHeroSection from "./components/MiddleHeroSection";
import ShowcaseVideos from "./components/ShowcaseVideos";
import Statistics from "./components/Statistics";
import SubHeroSection from "./components/SubHeroSection";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <div className="bg-[#F9F9F9] md:py-20 py-10"><MiddleHeroSection /></div>
      <div className="bg-[#F9F9F9] md:py-20 py-10"><SubHeroSection /></div>
      <div className="bg-[#F9F9F9] md:py-20 py-10"><ShowcaseVideos /></div>
      <div id="about" className="bg-[#F9F9F9] md:py-20"><AboutMe /></div>
      <div id="social-statistics" className="bg-[#F9F9F9] md:py-20 py-12"><Statistics /></div>
      <div id="contact" className="bg-[#F9F9F9] md:pt-20"><ContactMe /></div>
    </div>
  );
}
