import logo from "/src/assets/images/logo.png";
import { useState } from "react";
import {
  Menu,
  X,
  ChevronDown,
  LightbulbIcon,
  Command,
  GraduationCap,
  BookOpen,
  Users,
  BriefcaseBusiness,
  BookMarkedIcon,
  LucideShoppingBag,
  CopySlashIcon,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

export const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const [isCareersOpen, setIsCareersOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Function to close all dropdowns
  const closeDropdowns = () => {
    setIsSolutionsOpen(false);
    setIsCareersOpen(false);
    setIsMenuOpen(false);
  };

  const solutions = [
    {
      icon: <LightbulbIcon className="w-6 h-6" />,
      title: "ENERGY INVESTMENT ADVISORY",
      description:
        "Investment portfolios in oil & gas, with strategic guidance",
      link: "/energy",
    },
    {
      icon: <GraduationCap className="w-6 h-6" />,
      title: "TECH EDUCATION (VEPHLA UNI)",
      description: "Learn UI/UX, Data, Cybersecurity, Frontend & more",
      link: "/vephlauni",
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "LURNER",
      description: "Buy innovative self-growth books and learning materials",
      link: "/lurner",
    },
    {
      icon: <Command className="w-6 h-6" />,
      title: "SOFTWARE & DATA SOLUTIONS",
      description: "Build custom software, platforms, and analytics tools",
      link: "/solution",
    },

    {
      icon: <LucideShoppingBag className="w-6 h-6" />,
      title: "PRINTMLX (PREMIUM PRINTING)",
      description: "Order high-quality merch, packaging, and branded prints",
      link: "/printmlx",
    },
    {
      icon: <CopySlashIcon className="w-6 h-6" />,
      title: "VEPHLA WEBLOG",
      description: "Read articles, product updates, and student projects",
      link: "/weblog",
    },
  ];

  const careers = [
    {
      icon: <BookMarkedIcon className="w-6 h-6" />,
      title: "INSOURCE EXPERTISE",
      description: "Use your own team's skills to get work done",
      link: "/insource expertise",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "ACCESS THE TALENT PIPELINE",
      description: "Quickly find ready candidates for your projects",
      link: "/talent pipeline",
    },
    {
      icon: <BriefcaseBusiness className="w-6 h-6" />,
      title: "JOIN A TECH COMMUNITY",
      description: "Connect with others, learn, and grow together",
      link: "/tech community",
    },
  ];

  // Animation variants
  const dropdownVariants = {
    hidden: {
      opacity: 0,
      y: -10,
      transition: {
        duration: 0.2,
        ease: "easeInOut",
      },
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut",
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: -5,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.2,
        ease: "easeOut",
      },
    },
  };

  const mobileMenuVariants = {
    hidden: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
    visible: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        ease: "easeOut",
        staggerChildren: 0.1,
      },
    },
  };

  const mobileDropdownVariants = {
    hidden: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.2,
        ease: "easeInOut",
      },
    },
    visible: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        ease: "easeOut",
        staggerChildren: 0.05,
      },
    },
  };

  return (
    <nav
      className={`${
        isCareersOpen || isSolutionsOpen ? "bg-[#353535]" : "bg-[#0d0d0d]"
      } text-white fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ease-in-out`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-2">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="flex items-center">
              <div className="flex items-center justify-center">
                <Link to="/" onClick={closeDropdowns}>
                  <img src={logo} alt="" />
                </Link>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="lg:ml-10 flex items-baseline space-x-4 lg:space-x-8">
              {/* Solutions Dropdown */}
              <div className="relative">
                <button
                  onClick={() => {
                    setIsSolutionsOpen(!isSolutionsOpen);
                    setIsCareersOpen(false);
                  }}
                  className="flex items-center text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors duration-300 cursor-pointer"
                >
                  Solutions
                  <motion.div
                    animate={{ rotate: isSolutionsOpen ? 180 : 0 }}
                    transition={{ duration: 0.2, ease: "easeInOut" }}
                  >
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </motion.div>
                </button>
              </div>

              {/* Careers Dropdown */}
              <div className="relative">
                <button
                  onClick={() => {
                    setIsCareersOpen(!isCareersOpen);
                    setIsSolutionsOpen(false);
                  }}
                  className="flex items-center text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors duration-300 cursor-pointer"
                >
                  Careers
                  <motion.div
                    animate={{ rotate: isCareersOpen ? 180 : 0 }}
                    transition={{ duration: 0.2, ease: "easeInOut" }}
                  >
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </motion.div>
                </button>
              </div>

              {/* Contact Us */}
              <Link
                to="/contact"
                className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors duration-200 cursor-pointer"
                onClick={closeDropdowns}
              >
                Contact Us
              </Link>
            </div>
          </div>

          {/* CTA Button - Hidden on medium screens and below */}
          <div className="hidden md:block">
            <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-lg text-sm font-medium transition-colors duration-200 cursor-pointer">
              Explore our solutions
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
            {/* Hamburger Menu */}
            <button
              onClick={toggleMenu}
              className="text-gray-300 hover:text-white focus:outline-none focus:text-white"
            >
              <AnimatePresence mode="wait" initial={false}>
                {isMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="h-6 w-6" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="h-6 w-6" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>

        {/* Desktop Solutions Mega Menu */}
        <AnimatePresence>
          {isSolutionsOpen && (
            <motion.div
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={dropdownVariants}
              className="hidden md:block absolute top-full left-0 w-full bg-[#353535] border-t border-gray-700 z-50"
            >
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="mb-6">
                  <motion.h3
                    variants={itemVariants}
                    className="text-sm font-medium text-gray-400 uppercase tracking-wider mb-4"
                  >
                    WHAT WE OFFER ACROSS INDUSTRIES
                  </motion.h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {solutions.map((solution, index) => (
                      <motion.div key={index} variants={itemVariants}>
                        <Link
                          to={solution.link}
                          onClick={closeDropdowns}
                          className="flex items-start space-x-4 p-4 rounded-lg  transition-colors duration-200 cursor-pointer group"
                        >
                          <div className="flex-shrink-0 text-white group-hover:text-red-500 transition-colors duration-200">
                            {solution.icon}
                          </div>
                          <div>
                            <h4 className="text-white font-medium text-sm mb-2 group-hover:text-white pb-1 flex items-center">
                              <span className="group-hover:border-b group-hover:border-white">
                                {solution.title}
                              </span>
                              <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                                <ArrowRight className="w-4 h-4" />
                              </span>
                            </h4>
                            <p className="text-[#ccc] text-sm leading-relaxed">
                              {solution.description}
                            </p>
                          </div>
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Desktop Careers Mega Menu */}
        <AnimatePresence>
          {isCareersOpen && (
            <motion.div
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={dropdownVariants}
              className="hidden md:block absolute top-full left-0 w-full bg-[#353535] border-t border-gray-700 z-50"
            >
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="mb-6">
                  <motion.h3
                    variants={itemVariants}
                    className="text-sm font-medium text-gray-400 uppercase tracking-wider mb-4"
                  >
                    TALENT ACQUISITION & COMMUNITY ENGAGEMENT
                  </motion.h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {careers.map((career, index) => (
                      <motion.div key={index} variants={itemVariants}>
                        <Link
                          to={career.link}
                          onClick={closeDropdowns}
                          className="flex items-start space-x-4 p-4 rounded-lg transition-colors duration-200 cursor-pointer group"
                        >
                          <div className="flex-shrink-0 text-white group-hover:text-red-500 transition-colors duration-200">
                            {career.icon}
                          </div>
                          <div>
                            <h4 className="text-white font-medium text-sm mb-2 group-hover:text-white pb-1 flex items-center">
                              <span className="group-hover:border-b group-hover:border-white">
                                {career.title}
                              </span>
                              <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                                <ArrowRight className="w-4 h-4" />
                              </span>
                            </h4>
                            <p className="text-[#CCC] text-sm leading-relaxed">
                              {career.description}
                            </p>
                          </div>
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={mobileMenuVariants}
            className="md:hidden bg-[#353535] border-t border-gray-700 overflow-hidden"
          >
            <div className="px-4 py-6">
              {/* Solutions */}
              <motion.div variants={itemVariants} className="mb-6">
                <button
                  onClick={() => setIsSolutionsOpen(!isSolutionsOpen)}
                  className="flex items-center justify-between w-full text-white px-3 py-3 text-lg font-medium border-b border-gray-700"
                >
                  Solutions
                  <motion.div
                    animate={{ rotate: isSolutionsOpen ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <ChevronDown className="h-5 w-5" />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {isSolutionsOpen && (
                    <motion.div
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                      variants={mobileDropdownVariants}
                      className="mt-4 space-y-4 overflow-hidden"
                    >
                      <motion.div variants={itemVariants} className="mb-4">
                        <h3 className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-3">
                          WHAT WE OFFER ACROSS INDUSTRIES
                        </h3>
                      </motion.div>
                      {solutions.map((solution, index) => (
                        <motion.div key={index} variants={itemVariants}>
                          <Link
                            to={solution.link}
                            onClick={closeDropdowns}
                            className="flex items-start space-x-3 p-3 rounded-lg cursor-pointer transition-colors duration-200 group"
                          >
                            <div className="flex-shrink-0 text-white group-hover:text-red-500 transition-colors duration-200">
                              {solution.icon}
                            </div>
                            <div>
                              <h4 className="text-white font-medium text-sm mb-1 group-hover:text-white pb-1 flex items-center">
                                <span className="group-hover:border-b group-hover:border-white">
                                  {solution.title}
                                </span>
                                <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                                  <ArrowRight className="w-4 h-4" />
                                </span>
                              </h4>
                              <p className="text-[#ccc] text-xs leading-relaxed">
                                {solution.description}
                              </p>
                            </div>
                          </Link>
                        </motion.div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>

              {/* Careers */}
              <motion.div variants={itemVariants} className="mb-6">
                <button
                  onClick={() => setIsCareersOpen(!isCareersOpen)}
                  className="flex items-center justify-between w-full text-white px-3 py-3 text-lg font-medium border-b border-gray-700"
                >
                  Careers
                  <motion.div
                    animate={{ rotate: isCareersOpen ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <ChevronDown className="h-5 w-5" />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {isCareersOpen && (
                    <motion.div
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                      variants={mobileDropdownVariants}
                      className="mt-4 space-y-4 overflow-hidden"
                    >
                      <motion.div variants={itemVariants} className="mb-4">
                        <h3 className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-3">
                          TALENT ACQUISITION & COMMUNITY ENGAGEMENT
                        </h3>
                      </motion.div>
                      {careers.map((career, index) => (
                        <motion.div key={index} variants={itemVariants}>
                          <Link
                            to={career.link}
                            onClick={closeDropdowns}
                            className="flex items-start space-x-3 p-3 rounded-lg cursor-pointer transition-colors duration-200 group"
                          >
                            <div className="flex-shrink-0 text-white group-hover:text-red-500 transition-colors duration-200">
                              {career.icon}
                            </div>
                            <div>
                              <h4 className="text-white font-medium text-sm mb-1 group-hover:text-white pb-1 flex items-center">
                                <span className="group-hover:border-b group-hover:border-white">
                                  {career.title}
                                </span>
                                <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                                  <ArrowRight className="w-4 h-4" />
                                </span>
                              </h4>
                              <p className="text-[#ccc] text-xs leading-relaxed">
                                {career.description}
                              </p>
                            </div>
                          </Link>
                        </motion.div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>

              {/* Contact Us */}
              <motion.div variants={itemVariants} className="mb-8">
                <Link
                  to="/contact"
                  className="block text-white px-3 py-3 text-lg font-medium border-b border-gray-700"
                  onClick={closeDropdowns}
                >
                  Contact Us
                </Link>
              </motion.div>

              {/* Mobile CTA Button */}
              <motion.div variants={itemVariants} className="px-3">
                <button className="w-full bg-red-500 hover:bg-red-600 text-white py-3 rounded-lg text-sm font-medium transition-colors duration-200 cursor-pointer">
                  Explore our solutions
                </button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
