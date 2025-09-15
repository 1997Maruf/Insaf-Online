import React, { useContext, useState } from "react";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import {
  FaHome,
  FaUsers,
  FaChartBar,
  FaCog,
  FaBars,
  FaTimes,
  FaSignOutAlt,
  FaBell,
  FaSearch,
} from "react-icons/fa";
import { AuthContext } from "../Providers/AuthProvider";
import { FaMessage } from "react-icons/fa6";

const Dashboard = () => {
  const { user } = useContext(AuthContext);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();
  const { logOut } = useContext(AuthContext);
  const handelLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };
  const navigation = [
    {
      name: "Dashboard",
      href: "/dashboard",
      icon: FaHome,
      current: location.pathname === "/dashboard",
    },
    {
      name: "All Users",
      href: "/dashboard/allUsers",
      icon: FaUsers,
      current: location.pathname === "/dashboard/allUsers",
    },
    {
      name: "Order Packges",
      href: "/dashboard/Order-packge",
      icon: FaUsers,
      current: location.pathname === "/dashboard/Order-packges",
    },
    {
      name: "Message",
      href: "/dashboard/message",
      icon: FaMessage,
      current: location.pathname === "/dashboard/message",
    },
    {
      name: "Analytics",
      href: "/dashboard/analytics",
      icon: FaChartBar,
      current: false,
    },
    {
      name: "Settings",
      href: "/dashboard/settings",
      icon: FaCog,
      current: false,
    },
  ];

  return (
    <div className="min-h-screen h-screen bg-gray-50">
      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        >
          <div className="fixed inset-0 bg-gray-600 bg-opacity-75"></div>
        </div>
      )}

      {/* Sidebar */}
      <div
        className={`
        fixed h-screen inset-y-0 left-0 z-50 w-64 bg-gradient-to-b from-gray-900 to-gray-800 
        transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
      `}
      >
        <div className="flex items-center justify-between h-16 px-6 bg-gray-900 shadow-lg">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <FaChartBar className="text-white text-sm" />
            </div>
            <h1 className="text-xl font-bold text-white">AdminPanel</h1>
          </div>
          <button
            onClick={() => setSidebarOpen(false)}
            className="lg:hidden text-gray-400 hover:text-white transition-colors"
          >
            <FaTimes className="w-5 h-5" />
          </button>
        </div>

        <nav className="mt-8 px-4 h-[500px]">
          <div className="space-y-2">
            {navigation.map((item) => {
              const Icon = item.icon;
              return (
                <NavLink
                  key={item.name}
                  to={item.href}
                  className={({ isActive }) => `
                    group flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-all duration-200
                    ${
                      isActive
                        ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg transform scale-105"
                        : "text-gray-300 hover:bg-gray-700 hover:text-white hover:transform hover:scale-105"
                    }
                  `}
                  onClick={() => setSidebarOpen(false)}
                >
                  <Icon className="mr-3 w-5 h-5 transition-transform group-hover:scale-110" />
                  {item.name}
                </NavLink>
              );
            })}
          </div>

          <div className="mt-12 pt-6 border-t border-gray-700">
            <Link
              to="/"
              className="group flex items-center px-4 py-3 text-sm font-medium text-gray-300 rounded-lg hover:bg-gray-700 hover:text-white transition-all duration-200 hover:transform hover:scale-105"
            >
              <FaHome className="mr-3 w-5 h-5 transition-transform group-hover:scale-110" />
              Back to Home
            </Link>
            <button
              onClick={handelLogOut}
              className="group flex items-center w-full px-4 py-3 text-sm font-medium text-gray-300 rounded-lg hover:bg-red-600 hover:text-white transition-all duration-200 hover:transform hover:scale-105 mt-2"
            >
              <FaSignOutAlt className="mr-3 w-5 h-5 transition-transform group-hover:scale-110" />
              Sign Out
            </button>
          </div>
        </nav>

        {/* User profile section */}
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gray-800 border-t border-gray-700">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
              <span className="text-white font-semibold text-sm">AD</span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-white truncate">
                Admin User
              </p>
              <p className="text-xs text-gray-400 truncate">{user?.email}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="lg:pl-64 -mt-[600px] flex flex-col min-h-screen">
        {/* Top header */}
        <div className="sticky top-0 z-40 bg-white shadow-sm border-b border-gray-200">
          <div className="px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex items-center">
                <button
                  onClick={() => setSidebarOpen(true)}
                  className="lg:hidden -ml-0.5 -mt-0.5 h-12 w-12 inline-flex items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                >
                  <FaBars className="h-6 w-6" />
                </button>

                {/* Search bar */}
                <div className="hidden md:block ml-4">
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FaSearch className="h-4 w-4 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      placeholder="Search..."
                      className="block w-full  pl-10 pr-3 py-2 border border-gray-300 rounded-lg leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <button className="p-2 text-gray-400 hover:text-gray-500 hover:bg-gray-100 rounded-lg transition-colors">
                  <FaBell className="h-5 w-5" />
                </button>
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-semibold text-sm">AD</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Page content */}
        <main className="flex-1 p-4 sm:p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
