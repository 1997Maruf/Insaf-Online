import { Router, Globe, Smartphone, Laptop, Zap } from "lucide-react";
const WifiHeroAnimation = () => {
  return (
    <div className="relative w-full max-w-md mx-auto">
      {/* Main Router with Animated Signals */}
      <div className="relative z-10 flex justify-center">
        <div className="relative bg-gradient-to-br from-blue-500 to-purple-600 p-8 rounded-3xl shadow-2xl">
          <Router className="w-10 h-10 text-white" />

          {/* Animated WiFi Rings */}
          {[1, 2, 3, 4, 5].map((index) => (
            <div
              key={index}
              className="absolute inset-0 border-4 border-blue-400 rounded-full opacity-20 animate-ping"
              style={{
                width: `${100 + index * 40}px`,
                height: `${100 + index * 40}px`,
                top: `${-20 - index * 20}px`,
                left: `${-20 - index * 20}px`,
                animationDelay: `${index * 0.6}s`,
                animationDuration: "4s",
              }}
            />
          ))}
        </div>
      </div>

      {/* Floating Connected Devices */}
      <div
        className="absolute -top-8 -left-8 animate-bounce"
        style={{ animationDelay: "0.5s", animationDuration: "3s" }}
      >
        <div className="bg-green-100 p-4 rounded-2xl shadow-lg border-2 border-green-200">
          <Smartphone className="w-8 h-8 text-green-600" />
        </div>
        <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full animate-pulse"></div>
      </div>

      <div
        className="absolute -top-12 -right-8 animate-bounce"
        style={{ animationDelay: "1.2s", animationDuration: "3.5s" }}
      >
        <div className="bg-purple-100 p-4 rounded-2xl shadow-lg border-2 border-purple-200">
          <Laptop className="w-8 h-8 text-purple-600" />
        </div>
        <div className="absolute -top-1 -right-1 w-4 h-4 bg-purple-500 rounded-full animate-pulse"></div>
      </div>

      <div
        className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
        style={{ animationDelay: "2s", animationDuration: "4s" }}
      >
        <div className="bg-orange-100 p-4 rounded-2xl shadow-lg border-2 border-orange-200">
          <Globe className="w-8 h-8 text-orange-600" />
        </div>
        <div className="absolute -top-1 -right-1 w-4 h-4 bg-orange-500 rounded-full animate-pulse"></div>
      </div>

      {/* Speed Indicator */}
      <div className="absolute -bottom-16 -right-8 bg-white rounded-2xl p-4 shadow-xl border border-gray-100">
        <div className="flex items-center space-x-2 mb-2">
          <Zap className="w-5 h-5 text-yellow-500" />
          <span className="text-sm font-bold text-gray-800">High Speed</span>
        </div>
        <div className="bg-gray-200 rounded-full h-2 w-20 overflow-hidden">
          <div
            className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 h-full animate-pulse"
            style={{ width: "90%" }}
          ></div>
        </div>
        <p className="text-xs text-gray-600 mt-1">100+ Mbps</p>
      </div>

      {/* Connection Lines */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ zIndex: 1 }}
      >
        <defs>
          <linearGradient
            id="connectionGradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.3" />
          </linearGradient>
        </defs>

        {/* Animated connection lines */}
        <path
          d="M 200 150 Q 100 50 50 80"
          stroke="url(#connectionGradient)"
          strokeWidth="3"
          fill="none"
          strokeDasharray="10,5"
          className="animate-pulse"
        />
        <path
          d="M 200 150 Q 300 50 350 80"
          stroke="url(#connectionGradient)"
          strokeWidth="3"
          fill="none"
          strokeDasharray="10,5"
          className="animate-pulse"
          style={{ animationDelay: "1s" }}
        />
        <path
          d="M 200 150 Q 200 250 200 280"
          stroke="url(#connectionGradient)"
          strokeWidth="3"
          fill="none"
          strokeDasharray="10,5"
          className="animate-pulse"
          style={{ animationDelay: "2s" }}
        />
      </svg>

      {/* Floating Data Particles */}
      {[...Array(6)].map((_, index) => (
        <div
          key={index}
          className="absolute w-2 h-2 bg-blue-400 rounded-full opacity-60 animate-ping"
          style={{
            top: `${Math.random() * 300}px`,
            left: `${Math.random() * 400}px`,
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${2 + Math.random() * 2}s`,
          }}
        />
      ))}

      {/* Background Decorative Elements */}
      <div className="absolute -top-4 -right-4 bg-blue-100 rounded-full p-4 opacity-80">
        {/* <div className="w-8 h-8 bg-blue-600 rounded-full animate-pulse"></div> */}
      </div>
      <div className="absolute -bottom-4 -left-4 bg-purple-100 rounded-full p-4 opacity-80">
        <div
          className="w-6 h-6 bg-purple-600 rounded-full animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>
    </div>
  );
};

export default WifiHeroAnimation;
