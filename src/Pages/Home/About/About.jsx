import { Wifi, Users, Shield, Headphones } from "lucide-react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 900, // animation সময়
      once: false, // স্ক্রল করলে বারবার animate হবে
    });
  }, []);
  const features = [
    {
      icon: <Wifi className="w-6 h-6" />,
      title: "Home Broadband Internet",
      description: "High-speed internet for your home",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Corporate/SME Internet",
      description: "Business solutions for enterprises",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Network Security",
      description: "Secure and protected connections",
    },
    {
      icon: <Headphones className="w-6 h-6" />,
      title: "24/7 Hours Technical Support",
      description: "Round the clock customer service",
    },
  ];

  return (
    <section id="about" className="bg-gray-50 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            ABOUT US
          </h2>
        </div>

        <div
          data-aos="zoom-out-left"
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
        >
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="text-blue-600">{feature.icon}</div>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>

        <div
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          className="bg-white rounded-lg p-8 shadow-lg"
        >
          <p className="text-gray-600 leading-relaxed">
            Insaf Online provides an extensive range of high quality data &
            voice connectivity services throughout the country. We offer wide
            range of services including Dedicated Internet, Broadband Internet,
            Corporate Internet, IPLC, IIG and many more. We provide great
            opportunity to generate profitable and recurring monthly revenue for
            our partners while offering a superior digital lifestyle to the
            majority of people in Bangladesh.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
