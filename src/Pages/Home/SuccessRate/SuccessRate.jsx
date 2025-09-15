import { Users, Globe, Award, Headphones } from "lucide-react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const SuccessRate = () => {
  const stats = [
    {
      icon: <Users className="w-8 h-8" />,
      label: "Happy Clients",
      value: "98%",
    },
    {
      icon: <Globe className="w-8 h-8" />,
      label: "Network Coverage",
      value: "95%",
    },
    {
      icon: <Award className="w-8 h-8" />,
      label: "Service Quality",
      value: "99%",
    },
    {
      icon: <Headphones className="w-8 h-8" />,
      label: "Customer Support",
      value: "97%",
    },
  ];

  useEffect(() => {
    AOS.init({
      duration: 900, // animation সময়
      once: false, // স্ক্রল করলে বারবার animate হবে
    });
  }, []);
  return (
    <section className="bg-white py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div data-aos="fade-down-left" className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            OUR COMPANY SUCCESS RATE
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            We've worked with our clients Quality first, where Client different
            types clients such as government and non-government organization,
            corporate house, educational institute etc.
          </p>
        </div>

        <div
          data-aos="fade-up-left"
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <div data-aos="fade-down-left" key={index} className="text-center">
              <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="text-blue-600">{stat.icon}</div>
              </div>
              <div className="mb-2">
                <div className="text-3xl font-bold text-gray-900">
                  {stat.value}
                </div>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                <div
                  className="bg-blue-600 h-2 rounded-full transition-all duration-1000"
                  style={{ width: stat.value }}
                ></div>
              </div>
              <p className="text-gray-600 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessRate;
