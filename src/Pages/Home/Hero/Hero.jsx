import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import WifiHeroAnimation from "./WifiHeroAnimation";
const Hero = () => {
  useEffect(() => {
    AOS.init({
      duration: 900, // animation সময়
      once: false, // স্ক্রল করলে বারবার animate হবে
    });
  }, []);
  return (
    <section id="home" className="bg-white py-20 px-4">
      <div className="max-w-7xl mx-auto py-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div data-aos="fade-down-right " className="pb-64 lg:pb-0">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Insaf Online & <br />
              <span className="text-blue-600">Internet Service</span> <br />
              Provider
            </h1>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Your internet service provider in Bangladesh which provides high
              speed internet service with uninterrupted service and connection.
              We're committed to meeting your needs and delivering reliable
              broadband customer service.
            </p>
            <a
              href="#pricing"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300"
            >
              Get Started
            </a>
          </div>

          {/* Right Content - 3D Illustration */}
          <div data-aos="" className="flex  justify-center">
            <div className="relative">
              <WifiHeroAnimation></WifiHeroAnimation>
              <div className="absolute -top-4 -right-4 bg-blue-100 rounded-full p-4">
                <div className="w-8 h-8 bg-blue-600 rounded-full"></div>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-purple-100 rounded-full p-4">
                <div className="w-6 h-6 bg-purple-600 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
