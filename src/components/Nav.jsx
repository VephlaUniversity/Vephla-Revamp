import logo from "/src/assets/images/favicon.png";
import { useState } from "react";
import {
  Menu,
  X,
  ChevronDown,
  Zap,
  Code,
  GraduationCap,
  Printer,
  BookOpen,
  Globe,
} from "lucide-react";

export const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const [isCareersOpen, setIsCareersOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const solutions = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "ENERGY INVESTMENT ADVISORY",
      description:
        "Investment portfolios in oil & gas, with strategic guidance",
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "SOFTWARE & DATA SOLUTIONS",
      description: "Build custom software, platforms, and analytics tools",
    },
    {
      icon: <GraduationCap className="w-6 h-6" />,
      title: "TECH EDUCATION (VEPHLA UNI)",
      description: "Learn UI/UX, Data, Cybersecurity, Frontend & more",
    },
    {
      icon: <Printer className="w-6 h-6" />,
      title: "PRINTMILK (PREMIUM PRINTING)",
      description: "Order high-quality merch, packaging, and branded prints",
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "LURNER",
      description: "Buy innovative self-growth books and learning materials",
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "VEPHLA WEBLOG",
      description: "Read articles, product updates, and student projects",
    },
  ];

  const careers = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "INSOURCE EXPERTISE",
      description: "Use your own team's skills to get work done",
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "ACCESS THE TALENT PIPELINE",
      description: "Quickly find ready candidates for your projects",
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "JOIN A TECH COMMUNITY",
      description: "Connect with others, learn, and grow together",
    },
  ];

  return (
    <nav className="bg-[#0f0f0f] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-2">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="flex items-center">
              <div className="w-8 h-8 flex items-center justify-center">
                <img src={logo} alt="" />
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {/* Solutions Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setIsSolutionsOpen(!isSolutionsOpen)}
                  className="flex items-center text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors duration-200 cursor-pointer"
                >
                  Solutions
                  <ChevronDown
                    className={`ml-1 h-4 w-4 transition-transform duration-200 ${
                      isSolutionsOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
              </div>

              {/* Careers Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setIsCareersOpen(!isCareersOpen)}
                  className="flex items-center text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors duration-200 cursor-pointer"
                >
                  Careers
                  <ChevronDown
                    className={`ml-1 h-4 w-4 transition-transform duration-200 ${
                      isCareersOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
              </div>

              {/* Contact Us */}
              <a
                href="#"
                className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors duration-200 cursor-pointer"
              >
                Contact Us
              </a>
            </div>
          </div>

          {/* CTA Button - Hidden on medium screens and below */}
          <div className="hidden lg:block">
            <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-lg text-sm font-medium transition-colors duration-200 cursor-pointer">
              Explore our solutions
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center space-x-4">
            {/* Hamburger Menu */}
            <button
              onClick={toggleMenu}
              className="text-gray-300 hover:text-white focus:outline-none focus:text-white"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Desktop Solutions Mega Menu */}
        {isSolutionsOpen && (
          <div className="hidden md:block absolute top-full left-0 w-full bg-[#353535] border-t border-gray-700 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
              <div className="mb-6">
                <h3 className="text-sm font-medium text-gray-400 uppercase tracking-wider mb-4">
                  WHAT WE OFFER ACROSS INDUSTRIES
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {solutions.map((solution, index) => (
                    <div
                      key={index}
                      className="flex items-start space-x-4 p-4 rounded-lg hover:bg-gray-700 transition-colors duration-200 cursor-pointer"
                    >
                      <div className="flex-shrink-0 text-white">
                        {solution.icon}
                      </div>
                      <div>
                        <h4 className="text-white font-medium text-sm mb-2">
                          {solution.title}
                        </h4>
                        <p className="text-[#ccc] text-sm leading-relaxed">
                          {solution.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Desktop Careers Mega Menu */}
        {isCareersOpen && (
          <div className="hidden md:block absolute top-full left-0 w-full bg-[#353535] border-t border-gray-700 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
              <div className="mb-6">
                <h3 className="text-sm font-medium text-gray-400 uppercase tracking-wider mb-4">
                  TALENT ACQUISITION & COMMUNITY ENGAGEMENT
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {careers.map((career, index) => (
                    <div
                      key={index}
                      className="flex items-start space-x-4 p-4 rounded-lg hover:bg-gray-700 transition-colors duration-200 cursor-pointer"
                    >
                      <div className="flex-shrink-0 text-white">
                        {career.icon}
                      </div>
                      <div>
                        <h4 className="text-white font-medium text-sm mb-2">
                          {career.title}
                        </h4>
                        <p className="text-[#CCC] text-sm leading-relaxed">
                          {career.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="lg:hidden h-auto fixed inset-0 top-16 bg-[#353535] z-50 overflow-y-auto">
            <div className="px-4 py-6">
              {/* Solutions */}
              <div className="mb-6">
                <button
                  onClick={() => setIsSolutionsOpen(!isSolutionsOpen)}
                  className="flex items-center justify-between w-full text-white px-3 py-3 text-lg font-medium border-b border-gray-700"
                >
                  Solutions
                  <ChevronDown
                    className={`h-5 w-5 transition-transform ${
                      isSolutionsOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {isSolutionsOpen && (
                  <div className="mt-4 space-y-4">
                    <div className="mb-4">
                      <h3 className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-3">
                        WHAT WE OFFER ACROSS INDUSTRIES
                      </h3>
                    </div>
                    {solutions.map((solution, index) => (
                      <div
                        key={index}
                        className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-800 transition-colors duration-200"
                      >
                        <div className="flex-shrink-0 text-white">
                          {solution.icon}
                        </div>
                        <div>
                          <h4 className="text-white font-medium text-sm mb-1">
                            {solution.title}
                          </h4>
                          <p className="text-[#ccc] text-xs leading-relaxed">
                            {solution.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Careers */}
              <div className="mb-6">
                <button
                  onClick={() => setIsCareersOpen(!isCareersOpen)}
                  className="flex items-center justify-between w-full text-white px-3 py-3 text-lg font-medium border-b border-gray-700"
                >
                  Careers
                  <ChevronDown
                    className={`h-5 w-5 transition-transform ${
                      isCareersOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {isCareersOpen && (
                  <div className="mt-4 space-y-4">
                    <div className="mb-4">
                      <h3 className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-3">
                        TALENT ACQUISITION & COMMUNITY ENGAGEMENT
                      </h3>
                    </div>
                    {careers.map((career, index) => (
                      <div
                        key={index}
                        className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-800 transition-colors duration-200"
                      >
                        <div className="flex-shrink-0 text-white">
                          {career.icon}
                        </div>
                        <div>
                          <h4 className="text-white font-medium text-sm mb-1">
                            {career.title}
                          </h4>
                          <p className="text-[#ccc] text-xs leading-relaxed">
                            {career.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Contact Us */}
              <div className="mb-8">
                <a
                  href="#"
                  className="block text-white px-3 py-3 text-lg font-medium border-b border-gray-700"
                >
                  Contact Us
                </a>
              </div>

              {/* Mobile CTA Button */}
              <div className="px-3">
                <button className="w-full bg-red-500 hover:bg-red-600 text-white py-3 rounded-lg text-sm font-medium transition-colors duration-200 cursor-pointer">
                  Explore our solutions
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
