import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X, Wifi } from "lucide-react";
import { AuthContext } from "../../../Providers/AuthProvider";
import UseRole from "../../../hooks/UseRole/UseRole";
import BkashPaymentButton from "./BkashPaymentButton";
import logo from "../../../assets/img/logo.png";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, logOut } = useContext(AuthContext);
  const [role, isLoading] = UseRole();
  const navigate = useNavigate();

  const handelLogOut = async () => {
    try {
      await logOut();
      setIsMenuOpen(false); // Close mobile menu
      navigate("/"); // Navigate to home after logout
    } catch (error) {
      console.log(error);
    }
  };

  const handleNavClick = () => {
    setIsMenuOpen(false); // Close mobile menu when any nav item is clicked
  };

  return (
    <div>
      <header className="bg-gray-900 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo Section */}
            <div className="">
              <img className="w-32 h-16" src={logo} alt="" />
            </div>

            {/* Navigation Menu */}
            <nav className="hidden md:flex items-center space-x-8">
              <a
                href="#home"
                className="text-blue-400 cursor-pointer hover:text-blue-300 transition-colors duration-200 font-medium"
              >
                Home
              </a>
              <a
                href="#about"
                className="text-white cursor-pointer hover:text-blue-300 transition-colors duration-200 font-medium"
              >
                About
              </a>
              <a
                href="#services"
                className="text-white cursor-pointer hover:text-blue-300 transition-colors duration-200 font-medium"
              >
                Services
              </a>
              <a
                href="#pricing"
                className="text-white cursor-pointer hover:text-blue-300 transition-colors duration-200 font-medium"
              >
                Pricing
              </a>
              <a
                href="#contact"
                className="text-white cursor-pointer hover:text-blue-300 transition-colors duration-200 font-medium"
              >
                Contact
              </a>

              {user ? (
                <>
                  <button
                    onClick={handelLogOut}
                    className="text-white hover:text-blue-300 transition-colors duration-200 font-medium cursor-pointer"
                  >
                    LogOut
                  </button>
                </>
              ) : (
                <>
                  <Link
                    to="/login"
                    className="text-white cursor-pointer hover:text-blue-300 transition-colors duration-200 font-medium"
                  >
                    Login
                  </Link>
                  <Link
                    to="/register"
                    className="text-white cursor-pointer hover:text-blue-300 transition-colors duration-200 font-medium"
                  >
                    Sign Up
                  </Link>
                </>
              )}

              {!isLoading && role === "admin" && (
                <Link
                  to="/dashboard"
                  className="text-white hover:text-blue-300 transition-colors duration-200 font-medium cursor-pointer"
                >
                  Dashboard
                </Link>
              )}
            </nav>
            <div className="hidden md:block">
              <a
                href=""
                className="bg-transparent   hover:text-white px-6 py-2  duration-300 font-medium cursor-pointer"
              >
                <div className="hidden md:block">
                  <BkashPaymentButton />
                </div>
              </a>
            </div>
            {/* Get Started Button */}
            <div className="hidden md:block">
              <a
                href="#pricing"
                className="bg-transparent border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-6 py-2 rounded-full transition-all duration-300 font-medium cursor-pointer"
              >
                Get Started
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white hover:text-blue-300 focus:outline-none"
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-gray-800">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a
                href="#home"
                onClick={handleNavClick}
                className="text-blue-400 block px-3 py-2 rounded-md text-base font-medium cursor-pointer"
              >
                Home
              </a>
              <a
                href="#about"
                onClick={handleNavClick}
                className="text-white hover:text-blue-300 block px-3 py-2 rounded-md text-base font-medium cursor-pointer"
              >
                About
              </a>
              <a
                href="#services"
                onClick={handleNavClick}
                className="text-white hover:text-blue-300 block px-3 py-2 rounded-md text-base font-medium cursor-pointer"
              >
                Services
              </a>
              <a
                href="#pricing"
                onClick={handleNavClick}
                className="text-white hover:text-blue-300 block px-3 py-2 rounded-md text-base font-medium cursor-pointer"
              >
                Pricing
              </a>
              <a
                href="#contact"
                onClick={handleNavClick}
                className="text-white hover:text-blue-300 block px-3 py-2 rounded-md text-base font-medium cursor-pointer"
              >
                Contact
              </a>
              {user ? (
                <>
                  <button
                    onClick={handelLogOut}
                    className="text-white hover:text-blue-300 block px-3 py-2 rounded-md text-base font-medium cursor-pointer w-full text-left"
                  >
                    LogOut
                  </button>
                </>
              ) : (
                <>
                  <Link
                    to="/login"
                    onClick={handleNavClick}
                    className="text-white cursor-pointer hover:text-blue-300 block px-3 py-2 rounded-md text-base font-medium"
                  >
                    Login
                  </Link>
                  <Link
                    to="/register"
                    onClick={handleNavClick}
                    className="text-white cursor-pointer hover:text-blue-300 block px-3 py-2 rounded-md text-base font-medium"
                  >
                    Sign Up
                  </Link>
                </>
              )}

              {!isLoading && role === "admin" && (
                <Link
                  to="/dashboard"
                  onClick={handleNavClick}
                  className="text-white hover:text-blue-300 block px-3 py-2 rounded-md text-base font-medium cursor-pointer"
                >
                  Dashboard
                </Link>
              )}
              <div className="px-3 py-2">
                <button
                  onClick={handleNavClick}
                  className="w-full bg-transparent border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-4 py-2 rounded-full transition-all duration-300 font-medium cursor-pointer"
                >
                  Get Started
                </button>
              </div>
            </div>
          </div>
        )}
      </header>
    </div>
  );
};

export default Header;
