import { useState, useEffect } from "react";
import { MapPin, Mail, Phone, Send } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { toast, ToastContainer } from "react-toastify";
import { IoLogoTwitter } from "react-icons/io";
import { FaLinkedinIn } from "react-icons/fa6";
import DOMPurify from "dompurify"; // ✅ HTML sanitize করার জন্য

const Contact = () => {
  useEffect(() => {
    AOS.init({
      duration: 900,
      once: false,
    });
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // ✅ handleChange updated
  const handleChange = (e) => {
    const { name, value } = e.target;

    // শুধু name ফিল্ড sanitize করা হবে
    const cleanValue =
      name === "name" ? DOMPurify.sanitize(value, { ALLOWED_TAGS: [] }) : value;

    setFormData({
      ...formData,
      [name]: cleanValue,
    });
  };

  const axiosPublic = useAxiosPublic();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;

    try {
      const appointmentInfo = {
        formData,
      };
      console.log(appointmentInfo);

      axiosPublic.post("/message", appointmentInfo).then((res) => {
        if (res.data.insertedId) {
          toast.success("Your message has been submitted!");
        } else {
          toast.error("Failed to submit message!");
        }
      });
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong!");
    }
  };

  return (
    <section id="contact" className="bg-gray-50 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div data-aos="fade-down-left" className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            CONTACT
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            আমাদের সাথে যোগাযোগ করুন আপনার ইন্টারনেট সেবার জন্য। আমরা আপনাকে
            সর্বোত্তম সেবা প্রদান করতে প্রতিশ্রুতিবদ্ধ।
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div data-aos="fade-down-right" className="space-y-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <MapPin className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Location:
                  </h3>
                  <p className="text-gray-600">
                    Baridhara DOHS, Dhaka
                    <br />
                    বারিধারা ডিওএইচএস, ঢাকা
                    <br />
                    Bangladesh
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <Mail className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Email:</h3>
                  <p className="text-gray-600">insafonline89@gmail.com</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <Phone className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Call:</h3>
                  <p className="text-gray-600">
                    +8801897677205
                    <br />
                    +8801897677205
                  </p>
                </div>
              </div>
            </div>

            {/* Interactive Google Map */}
            <div className="bg-white p-4 rounded-lg shadow-lg">
              <div className="rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d229.43266225240956!2d91.01056042573407!3d23.063299182827567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjPCsDAzJzQ3LjkiTiA5McKwMDAnMzguMiJF!5e0!3m2!1sen!2sbd!4v1756376007069!5m2!1sen!2sbd"
                  width="100%"
                  height="250"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Our Location - Baridhara DOHS, Dhaka"
                  className="rounded-lg"
                ></iframe>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div
            data-aos="fade-down-left"
            className="bg-white p-8 rounded-lg shadow-lg"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-white px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-white px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className="w-full bg-white px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Write your message here..."
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-300 flex items-center justify-center space-x-2"
              >
                <Send className="w-5 h-5" />
                <span>Send Message</span>
              </button>
            </form>
            <div className="flex gap-6 mt-24 justify-center lg:flex-row flex-col ">
              <div className="bg-[#DBEAFE] p-3 rounded-full text-[#2563EB] hover:bg-[#2563EB] hover:text-white duration-1000">
                <FaFacebookF className="lg:w-7 lg:h-7" />
              </div>
              <div className="bg-[#DBEAFE] p-3 rounded-full text-[#2563EB] hover:bg-[#2563EB] hover:text-white duration-1000">
                <FaInstagram className="lg:w-7 lg:h-7" />
              </div>
              <div className="bg-[#DBEAFE] p-3 rounded-full text-[#2563EB] hover:bg-[#2563EB] hover:text-white duration-1000">
                <IoLogoTwitter className="lg:w-7 lg:h-7" />
              </div>
              <div className="bg-[#DBEAFE] p-3 rounded-full text-[#2563EB] hover:bg-[#2563EB] hover:text-white duration-1000">
                <FaLinkedinIn className="lg:w-7 lg:h-7" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </section>
  );
};

export default Contact;
