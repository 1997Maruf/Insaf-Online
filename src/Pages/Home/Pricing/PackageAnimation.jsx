import { Wifi, Router, Signal, Globe, Smartphone, Laptop } from "lucide-react";
const PackageAnimation = () => {
  return (
    <div className="flex flex-col items-center justify-center space-y-8 p-8">
      {/* Main WiFi Router Animation */}
      <div className="relative">
        {/* Router Icon */}
        <div className="relative z-10 bg-gradient-to-br from-blue-500 to-purple-600 p-6 rounded-2xl shadow-2xl">
          <Router className="w-16 h-16 text-white" />
        </div>

        {/* Animated WiFi Signals */}
        {[1, 2, 3, 4].map((index) => (
          <div
            key={index}
            className="absolute inset-0 border-4 border-blue-400 rounded-full opacity-30 animate-ping"
            style={{
              width: `${80 + index * 30}px`,
              height: `${80 + index * 30}px`,
              top: `${-15 - index * 15}px`,
              left: `${-15 - index * 15}px`,
              animationDelay: `${index * 0.5}s`,
              animationDuration: "3s",
            }}
          />
        ))}

        {/* Floating Devices */}
        <div
          className="absolute -top-8 -left-12 animate-bounce"
          style={{ animationDelay: "0.5s" }}
        >
          <div className="bg-green-100 p-3 rounded-full shadow-lg">
            <Smartphone className="w-6 h-6 text-green-600" />
          </div>
        </div>

        <div
          className="absolute -top-8 -right-12 animate-bounce"
          style={{ animationDelay: "1s" }}
        >
          <div className="bg-purple-100 p-3 rounded-full shadow-lg">
            <Laptop className="w-6 h-6 text-purple-600" />
          </div>
        </div>

        <div
          className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
          style={{ animationDelay: "1.5s" }}
        >
          <div className="bg-orange-100 p-3 rounded-full shadow-lg">
            <Globe className="w-6 h-6 text-orange-600" />
          </div>
        </div>
      </div>

      {/* Connection Steps */}
      <div className="space-y-4 w-full max-w-xs">
        <div className="flex items-center space-x-4 bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-white/20">
          <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center animate-pulse">
            <Signal className="w-5 h-5 text-white" />
          </div>
          <div>
            <p className="font-semibold text-gray-800">Detecting Networks</p>
            <p className="text-sm text-gray-600">Scanning available WiFi</p>
          </div>
        </div>

        <div className="flex items-center space-x-4 bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-white/20">
          <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center">
            <Wifi className="w-5 h-5 text-white" />
          </div>
          <div>
            <p className="font-semibold text-gray-800">Connecting</p>
            <p className="text-sm text-gray-600">Establishing connection</p>
          </div>
        </div>

        <div className="flex items-center space-x-4 bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-white/20">
          <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center">
            <Globe className="w-5 h-5 text-white" />
          </div>
          <div>
            <p className="font-semibold text-gray-800">Connected</p>
            <p className="text-sm text-gray-600">Ready to browse</p>
          </div>
        </div>
      </div>

      {/* Speed Indicator */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 w-full max-w-xs border border-blue-100">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-2 mb-3">
            <Signal className="w-5 h-5 text-blue-600" />
            <span className="text-lg font-bold text-gray-800">
              High Speed WiFi
            </span>
          </div>
          <p className="text-sm text-gray-600 mb-3">
            Experience blazing fast internet
          </p>
          <div className="bg-white rounded-full h-3 overflow-hidden shadow-inner">
            <div
              className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 h-full animate-pulse"
              style={{ width: "85%" }}
            ></div>
          </div>
          <p className="text-xs text-gray-500 mt-2">Speed: 100+ Mbps</p>
        </div>
      </div>
    </div>
  );
};

export default PackageAnimation;
