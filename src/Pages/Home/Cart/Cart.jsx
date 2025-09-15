import { Wifi } from "lucide-react";
const Cart = () => {
  return (
    <div className="flex flex-cols-4 gap-4">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden relative">
        {/* Header */}
        <div className="p-6 pb-4">
          <div className="flex items-center gap-2 mb-4">
            <Wifi className="w-6 h-6 text-red-500" />
            <h3 className="text-xl font-bold text-gray-800">BIJOYEE</h3>
            <div className="flex gap-1">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              <div className="w-2 h-2 bg-red-400 rounded-full"></div>
              <div className="w-2 h-2 bg-red-300 rounded-full"></div>
            </div>
          </div>

          {/* Price */}
          <div className="mb-6">
            <span className="text-3xl font-bold text-blue-600">1299</span>
            <span className="text-gray-600 ml-1">Tk / Month</span>
          </div>

          {/* Speed */}
          <div className="mb-6">
            <span className="text-6xl font-bold">25</span>
            <span className="text-2xl text-gray-600 ml-2">Mbps</span>

            <div className="text-orange-500 text-sm font-medium mt-1">
              Upload Speed
            </div>
          </div>

          {/* Features */}
          <div className="space-y-2 mb-8">
            <div className="text-gray-600 text-sm">80Mbps Youtube</div>
            <div className="text-gray-600 text-sm">80Mbps BDIX & FTP</div>
          </div>

          {/* Button */}
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full font-medium transition-colors duration-200 relative z-10">
            Get It Now
          </button>
        </div>

        {/* Blue Wave Background */}
        <div className="absolute bottom-0 left-0 right-0 h-24">
          <svg
            className="w-full h-full"
            viewBox="0 0 400 100"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient
                id={`gradient-BIJOYEE`}
                x1="50%"
                y1="50%"
                x2="10%"
                y2="10%"
              >
                {/* <stop offset="60%" stopColor="#3B82F6" stopOpacity="0.8" /> */}
                {/* <stop offset="50%" stopColor="#1D4ED8" stopOpacity="0.6" /> */}
                <stop offset="100%" stopColor="#60A5FA" stopOpacity="0.4" />
              </linearGradient>
            </defs>
            <path
              d="M0,60 C100,20 300,80 400,40 L400,100 L0,100 Z"
              fill={`url(#gradient-BIJOYEE)`}
            />
            <path
              d="M0,80 C150,40 250,90 400,50 L400,100 L0,100 Z"
              fill={`url(#gradient-BIJOYEE)`}
              opacity="0.7"
            />
          </svg>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-lg overflow-hidden relative">
        {/* Header */}
        <div className="p-6 pb-4">
          <div className="flex items-center gap-2 mb-4">
            <Wifi className="w-6 h-6 text-red-500" />
            <h3 className="text-xl font-bold text-gray-800">BIJOYEE</h3>
            <div className="flex gap-1">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              <div className="w-2 h-2 bg-red-400 rounded-full"></div>
              <div className="w-2 h-2 bg-red-300 rounded-full"></div>
            </div>
          </div>

          {/* Price */}
          <div className="mb-6">
            <span className="text-3xl font-bold text-blue-600">1299</span>
            <span className="text-gray-600 ml-1">Tk / Month</span>
          </div>

          {/* Speed */}
          <div className="mb-6">
            <span className="text-6xl font-bold">25</span>
            <span className="text-2xl text-gray-600 ml-2">Mbps</span>

            <div className="text-orange-500 text-sm font-medium mt-1">
              Upload Speed
            </div>
          </div>

          {/* Features */}
          <div className="space-y-2 mb-8">
            <div className="text-gray-600 text-sm">80Mbps Youtube</div>
            <div className="text-gray-600 text-sm">80Mbps BDIX & FTP</div>
          </div>

          {/* Button */}
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full font-medium transition-colors duration-200 relative z-10">
            Get It Now
          </button>
        </div>

        {/* Blue Wave Background */}
        <div className="absolute bottom-0 left-0 right-0 h-24">
          <svg
            className="w-full h-full"
            viewBox="0 0 400 100"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient
                id={`gradient-BIJOYEE`}
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.8" />
                <stop offset="50%" stopColor="#1D4ED8" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#60A5FA" stopOpacity="0.4" />
              </linearGradient>
            </defs>
            <path
              d="M0,60 C100,20 300,80 400,40 L400,100 L0,100 Z"
              fill={`url(#gradient-BIJOYEE)`}
            />
            <path
              d="M0,80 C150,40 250,90 400,50 L400,100 L0,100 Z"
              fill={`url(#gradient-BIJOYEE)`}
              opacity="0.7"
            />
          </svg>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-lg overflow-hidden relative">
        {/* Header */}
        <div className="p-6 pb-4">
          <div className="flex items-center gap-2 mb-4">
            <Wifi className="w-6 h-6 text-red-500" />
            <h3 className="text-xl font-bold text-gray-800">BIJOYEE</h3>
            <div className="flex gap-1">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              <div className="w-2 h-2 bg-red-400 rounded-full"></div>
              <div className="w-2 h-2 bg-red-300 rounded-full"></div>
            </div>
          </div>

          {/* Price */}
          <div className="mb-6">
            <span className="text-3xl font-bold text-blue-600">1299</span>
            <span className="text-gray-600 ml-1">Tk / Month</span>
          </div>

          {/* Speed */}
          <div className="mb-6">
            <span className="text-6xl font-bold">25</span>
            <span className="text-2xl text-gray-600 ml-2">Mbps</span>

            <div className="text-orange-500 text-sm font-medium mt-1">
              Upload Speed
            </div>
          </div>

          {/* Features */}
          <div className="space-y-2 mb-8">
            <div className="text-gray-600 text-sm">80Mbps Youtube</div>
            <div className="text-gray-600 text-sm">80Mbps BDIX & FTP</div>
          </div>

          {/* Button */}
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full font-medium transition-colors duration-200 relative z-10">
            Get It Now
          </button>
        </div>

        {/* Blue Wave Background */}
        <div className="absolute bottom-0 left-0 right-0 h-24">
          <svg
            className="w-full h-full"
            viewBox="0 0 400 100"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient
                id={`gradient-BIJOYEE`}
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.8" />
                <stop offset="50%" stopColor="#1D4ED8" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#60A5FA" stopOpacity="0.4" />
              </linearGradient>
            </defs>
            <path
              d="M0,60 C100,20 300,80 400,40 L400,100 L0,100 Z"
              fill={`url(#gradient-BIJOYEE)`}
            />
            <path
              d="M0,80 C150,40 250,90 400,50 L400,100 L0,100 Z"
              fill={`url(#gradient-BIJOYEE)`}
              opacity="0.7"
            />
          </svg>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-lg overflow-hidden relative">
        {/* Header */}
        <div className="p-6 pb-4">
          <div className="flex items-center gap-2 mb-4">
            <Wifi className="w-6 h-6 text-red-500" />
            <h3 className="text-xl font-bold text-gray-800">BIJOYEE</h3>
            <div className="flex gap-1">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              <div className="w-2 h-2 bg-red-400 rounded-full"></div>
              <div className="w-2 h-2 bg-red-300 rounded-full"></div>
            </div>
          </div>

          {/* Price */}
          <div className="mb-6">
            <span className="text-3xl font-bold text-blue-600">1299</span>
            <span className="text-gray-600 ml-1">Tk / Month</span>
          </div>

          {/* Speed */}
          <div className="mb-6">
            <span className="text-6xl font-bold">25</span>
            <span className="text-2xl text-gray-600 ml-2">Mbps</span>

            <div className="text-orange-500 text-sm font-medium mt-1">
              Upload Speed
            </div>
          </div>

          {/* Features */}
          <div className="space-y-2 mb-8">
            <div className="text-gray-600 text-sm">80Mbps Youtube</div>
            <div className="text-gray-600 text-sm">80Mbps BDIX & FTP</div>
          </div>

          {/* Button */}
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full font-medium transition-colors duration-200 relative z-10">
            Get It Now
          </button>
        </div>

        {/* Blue Wave Background */}
        <div className="absolute bottom-0 left-0 right-0 h-24">
          <svg
            className="w-full h-full"
            viewBox="0 0 400 100"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient
                id={`gradient-BIJOYEE`}
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.8" />
                <stop offset="50%" stopColor="#1D4ED8" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#60A5FA" stopOpacity="0.4" />
              </linearGradient>
            </defs>
            <path
              d="M0,60 C100,20 300,80 400,40 L400,100 L0,100 Z"
              fill={`url(#gradient-BIJOYEE)`}
            />
            <path
              d="M0,80 C150,40 250,90 400,50 L400,100 L0,100 Z"
              fill={`url(#gradient-BIJOYEE)`}
              opacity="0.7"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Cart;
