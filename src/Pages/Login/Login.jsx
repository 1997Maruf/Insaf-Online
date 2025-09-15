import { useContext, useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  loadCaptchaEnginge,
  // LoadCanvasTemplate,
  // validateCaptcha,
} from "react-simple-captcha";
import { AuthContext } from "../../Providers/AuthProvider";

import {
  // AlertTriangle,
  Lock,
  Mail,
  // MessageCircle,
  MessageSquare,
  MousePointerClick,
  // Play,
  Triangle,
  // User,
  Wifi,
} from "lucide-react";
// import { Link } from "react-router-dom";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import Swal from "sweetalert2";
// import GoogleSignIn from "../../ShareComponent/GoogleSignIn/GoogleSignIn";
import // User,
// Lock,
// Mail,
// Smartphone,
// Eye,
// EyeOff,
// Loader2,
"lucide-react";
const Login = () => {
  // const captchaRef = useRef(null);
  // const [disabled, setDisable] = useState(true);
  const { signIn } = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.form?.pathname || "/";
  console.log(location);
  // useEffect(() => {
  //   loadCaptchaEnginge(6);
  // }, []);
  const handelLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value; // name="email"
    const password = form.password.value; // name="password"
    console.log(email, password);

    signIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);

        toast.success("Your Login Success", {
          position: "top-right",
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: false,
          progress: undefined,
        });

        navigate(from);
      })
      .catch((error) => {
        console.error(error.message);
        toast.error("Invalid email or password!", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: false,
          progress: undefined,
        });
      });
  };

  // const handeleValidateCaptcha = () => {
  //   const user_captcha_value = captchaRef.current.value;
  //   if (validateCaptcha(user_captcha_value)) {
  //     setDisable(false);
  //   }
  // };
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
              <div className=" backdrop-blur-sm rounded-3xl p-8  border border-white/20">
                {/* Header */}
                <div className="text-center mb-8 ">
                  <div className="flex gap-2">
                    <h1 className="text-4xl font-bold bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent mb-2">
                      Sign
                    </h1>
                    <h2 className="text-4xl font-bold text-gray-800 mb-4">
                      In
                    </h2>
                  </div>
                  <div className="w-full h-1 bg-gradient-to-r from-teal-500 to-cyan-500 mx-auto rounded-full"></div>
                </div>

                {/* Registration Form */}
                <form onSubmit={handelLogin} className="space-y-6">
                  {/* Email */}
                  <div>
                    <label className="block text-sm font-medium text-teal-600 mb-2">
                      Email
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                      <input
                        type="email"
                        name="email"
                        required
                        // value={formData.email}
                        // onChange={handleInputChange}
                        className="w-full pl-10  pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-teal-500 focus:ring-0 transition-colors duration-200 bg-transparent"
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>

                  {/* Password */}
                  <div>
                    <label className="block text-sm font-medium text-teal-600 mb-2">
                      Password
                    </label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                      <input
                        type="password"
                        name="password"
                        required
                        // value={formData.password}
                        // onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-teal-500 focus:ring-0 transition-colors duration-200 bg-transparent"
                        placeholder="Create a password"
                      />
                    </div>
                  </div>

                  {/* Buttons */}
                  <div className="flex space-x-4 pt-4">
                    <div className="flex-1 bg-gradient-to-r from-teal-500 to-cyan-500 text-white py-3 px-6 rounded-xl font-semibold hover:from-teal-600 hover:to-cyan-600 transform hover:scale-105 transition-all duration-200 shadow-lg flex items-center justify-center space-x-2">
                      <MousePointerClick
                        className="w-4 h-4"
                        fill="currentColor"
                      />
                      <input type="submit" value="Submit" />

                      {/* <span>Free Trial</span> */}
                    </div>
                  </div>

                  {/* Terms Text */}
                  <p className="text-xs text-gray-500 text-center leading-relaxed mt-6">
                    I agree to the Terms of Service and Privacy Policy. This
                    service is free for all users. Contact us for any question
                    or info we can help.
                  </p>
                  <p className=" text-center mb-8 ">
                    Have an account{" "}
                    <Link to="/register" className="font-bold text-red-700">
                      Registration
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

export default Login;
