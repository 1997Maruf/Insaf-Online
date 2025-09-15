import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Lock,
  Mail,
  MessageSquare,
  MousePointerClick,
  Triangle,
  User,
  Wifi,
  Phone,
  Upload,
  Eye,
  EyeOff,
} from "lucide-react";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";
import { AuthContext } from "../../Providers/AuthProvider";
import useAxiosPublic from "../../hooks/useAxiosPublic";
// import GoogleSignIn from "../../ShareComponent/GoogleSignIn/GoogleSignIn";
import "react-toastify/dist/ReactToastify.css";

const Registration = () => {
  const [loading, setLoading] = useState(false);
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const axiosPublic = useAxiosPublic();
  const role = "user";
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const image = form.image.files[0];
    const password = form.password.value;

    const formData = new FormData();
    formData.append("image", image);

    try {
      const { data } = await axios.post(
        `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_API_KEY}`,
        formData
      );

      // user Registration
      const result = await createUser(email, password);
      console.log(result);

      // update profile
      await updateUserProfile(name, data.data.display_url);
      console.log(data);

      const userInfo = {
        name,
        email,
        password,
        phone: phone,
        image: data.data.display_url,
        role,
      };

      axiosPublic.post("/users", userInfo).then((res) => {
        if (res.data.insertedId) {
          toast.success("✅ Registration Success!", {
            position: "top-right",
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            theme: "colored",
            style: { marginTop: "65px" },
          });
        }
      });

      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="">
      <div className="min-h-screen bg-gradient-to-br from-teal-50 via-blue-50 to-cyan-100 overflow-hidden">
        <div className="container mx-auto px-4 py-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-4rem)]">
            {/* Left Side - Illustration Area */}
            <div className="relative">
              {/* Background Organic Shapes */}
              <div className="absolute inset-0">
                <div className="absolute top-0 left-0 w-64 h-64 bg-white/60 rounded-full blur-3xl"></div>
                <div className="absolute bottom-10 right-10 w-48 h-48 bg-teal-200/40 rounded-full blur-2xl"></div>
                <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-orange-200/30 rounded-full blur-xl"></div>
              </div>

              {/* Main Illustration Container */}
              <div className="relative z-10 flex flex-col items-center">
                {/* Warning Triangle */}
                <div className="absolute top-8 right-16 animate-bounce">
                  <div className="bg-gradient-to-br from-orange-400 to-orange-500 p-3 rounded-lg shadow-lg transform rotate-3">
                    <Triangle
                      className="w-6 h-6 text-white"
                      fill="currentColor"
                    />
                  </div>
                </div>

                {/* WiFi Signal Decorative */}
                <div className="absolute top-20 left-12 animate-pulse">
                  <Wifi className="w-12 h-12 text-teal-500" />
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-orange-400 rounded-full animate-ping"></div>
                </div>

                {/* Central Character and Device */}
                <div className="relative mt-16">
                  {/* Device/Laptop Mockup */}
                  <div className="bg-gradient-to-br from-teal-600 to-teal-700 p-6 rounded-2xl shadow-2xl transform -rotate-2 hover:rotate-0 transition-transform duration-500">
                    <div className="bg-white rounded-lg p-4 space-y-3">
                      {/* Browser Header */}
                      <div className="flex space-x-2">
                        <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                        <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                        <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                      </div>

                      {/* Content Area */}
                      <div className="space-y-2">
                        <div className="flex items-center justify-center py-4">
                          <Wifi className="w-8 h-8 text-teal-600" />
                        </div>
                        <div className="h-2 bg-gray-200 rounded w-3/4"></div>
                        <div className="h-2 bg-gray-200 rounded w-1/2"></div>
                        <div className="h-2 bg-teal-300 rounded w-2/3"></div>
                      </div>
                    </div>
                  </div>

                  {/* Character Figure */}
                  <div className="absolute -bottom-12 -left-8">
                    <div className="relative">
                      {/* Person */}
                      <div className="w-16 h-16 bg-gradient-to-br from-teal-700 to-teal-800 rounded-full border-4 border-white shadow-lg"></div>
                      <div className="absolute top-2 left-2 w-4 h-4 bg-orange-400 rounded-full"></div>
                      <div className="absolute -top-4 -right-2 w-8 h-8 bg-yellow-400 rounded-full opacity-80"></div>
                    </div>
                  </div>
                </div>

                {/* Message Bubbles */}
                <div className="absolute bottom-16 right-8">
                  <div className="space-y-3">
                    <div className="bg-teal-500 p-3 rounded-2xl rounded-br-sm shadow-lg transform rotate-2">
                      <MessageSquare className="w-4 h-4 text-white" />
                    </div>
                    <div className="bg-orange-500 p-3 rounded-2xl rounded-br-sm shadow-lg transform -rotate-1">
                      <div className="w-8 h-2 bg-orange-200 rounded"></div>
                    </div>
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute bottom-8 left-16">
                  <div className="flex space-x-2">
                    {[1, 2, 3, 4, 5].map((item) => (
                      <div
                        key={item}
                        className="w-6 h-6 bg-orange-500 rounded transform rotate-45 animate-pulse"
                        style={{ animationDelay: `${item * 0.2}s` }}
                      ></div>
                    ))}
                  </div>
                </div>

                {/* Network Nodes */}
                <div className="absolute top-1/2 right-4">
                  <div className="relative">
                    <div className="w-4 h-4 bg-teal-500 rounded-full"></div>
                    <div className="absolute top-6 left-2 w-3 h-3 bg-teal-400 rounded-full"></div>
                    <div className="absolute -top-4 left-6 w-2 h-2 bg-teal-300 rounded-full"></div>
                    <div className="absolute top-2 -left-6 w-3 h-3 bg-green-400 rounded-full"></div>

                    {/* Connecting Lines */}
                    <svg
                      className="absolute inset-0 w-12 h-12"
                      viewBox="0 0 48 48"
                    >
                      <path
                        d="M16 16 L20 24 M16 16 L8 20 M16 16 L24 8"
                        stroke="currentColor"
                        strokeWidth="1"
                        className="text-teal-300"
                      />
                    </svg>
                  </div>
                </div>

                {/* Decorative Plants/Leaves */}
                <div className="absolute bottom-0 left-0">
                  <div className="flex space-x-2">
                    <div className="w-8 h-12 bg-teal-600 rounded-t-full transform -rotate-12"></div>
                    <div className="w-6 h-10 bg-teal-500 rounded-t-full transform rotate-6"></div>
                    <div className="w-10 h-14 bg-teal-700 rounded-t-full transform -rotate-6"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Registration Form */}
            <div className="relative">
              <div className="backdrop-blur-sm rounded-3xl p-8 border border-white/20 bg-white/10">
                {/* Header */}
                <div className="text-center mb-8">
                  <div className="flex justify-center gap-2">
                    <h1 className="text-4xl font-bold bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent mb-2">
                      Sign
                    </h1>
                    <h2 className="text-4xl font-bold text-gray-800 mb-4">
                      Up
                    </h2>
                  </div>
                  <div className="w-full h-1 bg-gradient-to-r from-teal-500 to-cyan-500 mx-auto rounded-full"></div>
                </div>

                {/* Registration Form */}
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Full Name */}
                  <div>
                    <label className="block text-sm font-medium text-teal-600 mb-2">
                      Full Name *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                      <input
                        type="text"
                        name="name"
                        required
                        className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-teal-500 focus:ring-0 transition-colors duration-200 bg-white/50 backdrop-blur-sm"
                        placeholder="Enter your full name"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-medium text-teal-600 mb-2">
                      Email Address *
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                      <input
                        type="email"
                        name="email"
                        required
                        className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-teal-500 focus:ring-0 transition-colors duration-200 bg-white/50 backdrop-blur-sm"
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-sm font-medium text-teal-600 mb-2">
                      Phone Number *
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                      <input
                        type="number"
                        name="phone"
                        required
                        className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-teal-500 focus:ring-0 transition-colors duration-200 bg-white/50 backdrop-blur-sm"
                        placeholder="Enter your phone number"
                      />
                    </div>
                  </div>

                  {/* Profile Image */}
                  <div>
                    <label className="block text-sm font-medium text-teal-600 mb-2">
                      Profile Image *
                    </label>
                    <div className="relative">
                      <Upload className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                      <input
                        type="file"
                        name="image"
                        required
                        className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-teal-500 focus:ring-0 transition-colors duration-200 bg-white/50 backdrop-blur-sm file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-teal-50 file:text-teal-700 hover:file:bg-teal-100"
                      />
                    </div>
                  </div>

                  {/* Password */}
                  <div>
                    <label className="block text-sm font-medium text-teal-600 mb-2">
                      Password *
                    </label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                      <input
                        type={showPassword ? "text" : "password"}
                        name="password"
                        required
                        className="w-full pl-10 pr-12 py-3 border-2 border-gray-200 rounded-xl focus:border-teal-500 focus:ring-0 transition-colors duration-200 bg-white/50 backdrop-blur-sm"
                        placeholder="Create a password"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
                      >
                        {showPassword ? (
                          <EyeOff className="w-5 h-5" />
                        ) : (
                          <Eye className="w-5 h-5" />
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-4">
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full bg-gradient-to-r from-teal-500 to-cyan-500 text-white py-3 px-6 rounded-xl font-semibold hover:from-teal-600 hover:to-cyan-600 transform hover:scale-105 transition-all duration-200 shadow-lg flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                    >
                      {loading ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                          <span>Creating Account...</span>
                        </>
                      ) : (
                        <>
                          <MousePointerClick
                            className="w-4 h-4"
                            fill="currentColor"
                          />
                          <span>Create Account</span>
                        </>
                      )}
                    </button>
                  </div>

                  {/* Terms Text */}
                  <p className="text-xs text-gray-500 text-center leading-relaxed mt-6">
                    By creating an account, you agree to our Terms of Service
                    and Privacy Policy. This service is free for all users.
                    Contact us for any questions.
                  </p>

                  {/* Login Link */}
                  <p className="text-center">
                    Already have an account?{" "}
                    <Link
                      to="/login"
                      className="font-bold text-teal-600 hover:text-teal-700 transition-colors"
                    >
                      Sign In
                    </Link>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Registration;
