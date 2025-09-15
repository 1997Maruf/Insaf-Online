import { Check } from "lucide-react";
import { Dialog } from "@headlessui/react";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import PackageAnimation from "./PackageAnimation";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import { toast } from "react-toastify";
import axios from "axios";

const Pricing = () => {
  const axiosPublic = useAxiosPublic();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedPkg, setSelectedPkg] = useState(null);

  const { data: Packages = [] } = useQuery({
    queryKey: ["Packages"],
    queryFn: async () => {
      const res = await axiosPublic.get("/Package");
      return res.data;
    },
  });
  // console.log(Packages);

  // Handle Form Submit
  const handlePackage = async (e) => {
    e.preventDefault();
    const form = e.target;

    const name = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;

    if (!selectedPkg) {
      toast.error("❌ Please select a package first");
      return;
    }

    const appointmentInfo = {
      name,
      email,
      phone,
      packageId: selectedPkg._id, // DB id
      packageName: selectedPkg.packageName,
      price: selectedPkg.price,
      speed: selectedPkg.speed,
    };

    // console.log("Final Data:", appointmentInfo);

    try {
      const { data } = await axios.post(
        " https://serverw1.vercel.app/orderPackages",
        appointmentInfo
      );

      if (data.insertedId) {
        toast.success("✅ Your Package Request Submitted");
        form.reset();
        setSelectedPkg(null);
        setIsOpen(false);
      }
    } catch (error) {
      // console.error(error);
      toast.error("❌ Something went wrong");
    }
  };

  useEffect(() => {
    AOS.init({ duration: 900, once: false });
  }, []);

  return (
    <section id="pricing" className="bg-white py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div data-aos="zoom-in-right" className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">
            PRICING
          </h2>
          <p className="text-gray-600">
            Choose the perfect plan for your internet needs. All packages
            include 24/7 support and free installation.
          </p>
        </div>

        {/* Package Grid */}
        <div
          data-aos="zoom-out-left"
          className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {Packages.map((pkg, index) => (
            <div
              key={index}
              className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-blue-500 hover:shadow-lg transition-all duration-300"
            >
              <div className="text-center mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {pkg.packageName}
                </h3>
                <div className="text-3xl font-bold text-blue-600 mb-1">
                  ৳{pkg.price}
                </div>
                <p className="text-gray-500 text-sm">per month</p>
                <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium mt-2 inline-block">
                  {pkg.speed}
                </div>
              </div>

              <ul className="space-y-3 mb-6">
                {pkg?.features?.map((feature, i) => (
                  <li
                    key={i}
                    className="flex items-center text-sm text-gray-600"
                  >
                    <Check className="w-4 h-4 text-green-500 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Open Dialog */}
              <button
                onClick={() => {
                  setSelectedPkg(pkg);
                  setIsOpen(true);
                }}
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-300"
              >
                Get Started
              </button>
            </div>
          ))}
        </div>

        {/* Dialog */}
        <Dialog
          open={isOpen}
          onClose={() => setIsOpen(false)}
          className="relative z-10"
        >
          <div className="fixed inset-0 backdrop-blur-sm" aria-hidden="true" />
          <div className="fixed inset-0 flex items-center justify-center p-4">
            <div className="relative bg-white rounded-2xl shadow-2xl max-w-6xl w-full mx-4 overflow-hidden">
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-6 right-6 z-10 p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full"
              >
                ✕
              </button>

              <div className="flex flex-col lg:flex-row items-center min-h-[600px]">
                {/* Left Side */}
                <div className="flex-1 hidden lg:block bg-gradient-to-br from-blue-50 via-purple-50 to-indigo-50 relative">
                  <PackageAnimation />
                </div>

                {/* Right Side */}
                <div className="flex-1 w-full max-w-lg p-8 lg:p-12">
                  <h2 className="text-2xl font-bold mb-4 text-gray-800">
                    WiFi Connection Portal
                  </h2>
                  <form onSubmit={handlePackage} className="space-y-4">
                    <input
                      type="text"
                      name="name"
                      placeholder="Name"
                      className="w-full bg-white p-3 border rounded-xl"
                      required
                    />
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      className="w-full bg-white p-3 border rounded-xl"
                      required
                    />
                    <input
                      type="number"
                      name="phone"
                      placeholder="Phone Number"
                      className="w-full bg-white p-3 border rounded-xl"
                      required
                    />
                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-xl"
                    >
                      Connect to WiFi
                    </button>
                  </form>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="w-full mt-5 bg-gray-100 hover:bg-gray-200 text-gray-700 py-3 rounded-xl"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Dialog>
      </div>
    </section>
  );
};

export default Pricing;
