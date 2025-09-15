import { Wifi, Database, Network, Users } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const Services = () => {
  useEffect(() => {
    AOS.init({
      duration: 900, // animation সময়
      once: false, // স্ক্রল করলে বারবার animate হবে
    });
  }, []);
  const services = [
    {
      icon: <Wifi className="w-12 h-12" />,
      title: "Dedicated Bandwidth",
      description:
        "We provide dedicated internet bandwidth with guaranteed speed and reliability for your business needs.",
    },
    {
      icon: <Database className="w-12 h-12" />,
      title: "Data Connectivity",
      description:
        "Secure and fast data connectivity solutions for enterprises and organizations of all sizes.",
    },
    {
      icon: <Network className="w-12 h-12" />,
      title: "Networking",
      description:
        "Complete networking solutions including LAN, WAN setup and network infrastructure management.",
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: "Conferencing & Collaboration",
      description:
        "Video conferencing and collaboration tools to keep your team connected and productive.",
    },
  ];

  return (
    <section id="services" className="bg-gray-50 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div data-aos="zoom-in-right" className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            SERVICES
          </h2>
          <p className="text-gray-600">
            We are providing you the best service from our side, service first
          </p>
        </div>

        <div
          data-aos="zoom-out-left"
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {services.map((service, index) => (
            <div
              data-aos="zoom-out-down"
              key={index}
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 text-center"
            >
              <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <div className="text-blue-600">{service.icon}</div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
