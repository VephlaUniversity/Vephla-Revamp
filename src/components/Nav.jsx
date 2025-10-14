import logo from "/images/logo.png";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
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
  Network,
  LinkIcon,
  BadgePlus,
  User,
  LogIn,
  UserPlus,
} from "lucide-react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

export const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const [isCareersOpen, setIsCareersOpen] = useState(false);
  const [isStaffOpen, setIsStaffOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Function to close all dropdowns
  const closeDropdowns = () => {
    setIsSolutionsOpen(false);
    setIsCareersOpen(false);
    setIsStaffOpen(false);
    setIsMenuOpen(false);
  };

  const solutions = [
    {
      icon: <LightbulbIcon className="w-6 h-6" />,
      title: "ENERGY INVESTMENT ADVISORY",
      description:
        "Investment portfolios in oil & gas, with strategic guidance",
      link: "https://energies.vephla.com",
    },
    {
      icon: <GraduationCap className="w-6 h-6" />,
      title: "TECH EDUCATION (VEPHLA UNI)",
      description: "Learn UI/UX, Data, Cybersecurity, Frontend & more",
      link: "https://university.vephla.com",
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "LURNER",
      description: "Buy innovative self-growth books and learning materials",
      link: "https://lurner.vephla.com",
    },
    {
      icon: <Command className="w-6 h-6" />,
      title: "SOFTWARE & DATA SOLUTIONS",
      description: "Build custom software, platforms, and analytics tools",
      link: "https://zcriptta.vephla.com",
    },
    {
      icon: <LucideShoppingBag className="w-6 h-6" />,
      title: "PRINTMLX (PREMIUM PRINTING)",
      description: "Order high-quality merch, packaging, and branded prints",
      link: "https://printmlx.vephla.com",
    },
    {
      icon: <CopySlashIcon className="w-6 h-6" />,
      title: "VEPHLA DAILYS",
      description: "Read articles, product updates, and student projects",
      link: "https://daily.vephla.com",
    },
    {
      icon: <Network className="w-6 h-6" />,
      title: "VNCX",
      description: "Connect, collaborate, and grow with confidence",
      link: "https://vncx.vephla.com",
    },
    {
      icon: <LinkIcon className="w-6 h-6" />,
      title: "QNDUIT",
      description: "Bridging th egap between Tech Talents and the Job Market",
      link: "https://qnduit.vephla.com",
    },
  ];

  const staff = [
    {
      icon: <User className="w-6 h-6" />,
      title: "OandR",
      description: "Operations and Resources",
      link: "http://dashboard.vephla.com?utm_source=chatgpt.com",
    },
    {
      icon: <LogIn className="w-6 h-6" />,
      title: "STAFF LOGIN",
      description: "Access your staff account",
      link: "http://staff.vephla.com",
    },
    {
      icon: <UserPlus className="w-6 h-6" />,
      title: "STAFF SIGN UP",
      description: "Create a new staff account",
      link: "https://staff.vephla.com/sign-up",
    },
  ];

  const careers = [
    {
      icon: <BookMarkedIcon className="w-6 h-6" />,
      title: "INSOURCE EXPERTISE",
      description: "Use your own team's skills to get work done",
      link: "mailto:qnduit@vephlagroup.com",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "ACCESS THE TALENT PIPELINE",
      description: "Quickly find ready candidates for your projects",
      link: "mailto:qnduit@vephlagroup.com",
    },
    {
      icon: <Network className="w-6 h-6" />,
      title: "JOIN A TECH COMMUNITY",
      description: "Connect with others, learn, and grow together",
      link: "https://vncx.vephla.com",
    },
    {
      icon: <BadgePlus className="w-6 h-6" />,
      title: "VACANCIES",
      description: "We're hiring—come aboard!",
      link: "/vacancies",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "JOIN US",
      description: "Build your career with us",
      link: "http://careers.vephla.com",
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

  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigateToSection = () => {
    if (location.pathname === "/") {
      const element = document.getElementById("solutions");
      if (element) {
        const headerHeight = 130;
        const elementPosition = element.offsetTop - headerHeight;
        window.scrollTo({
          top: elementPosition,
          behavior: "smooth",
        });
      }
    } else {
      navigate("/", { replace: true });
      setTimeout(() => {
        const element = document.getElementById("solutions");
        if (element) {
          const headerHeight = 130;
          const elementPosition = element.offsetTop - headerHeight;
          window.scrollTo({
            top: elementPosition,
            behavior: "smooth",
          });
        }
      }, 500);
    }
    setIsMenuOpen(false);
  };

  return (
    <nav
      className={`${
        isCareersOpen || isSolutionsOpen || isStaffOpen
          ? "bg-[#353535]"
          : "bg-[#0d0d0d]"
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
                    setIsStaffOpen(false);
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
                    setIsStaffOpen(false);
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

              {/* Staff Dropdown */}
              <div className="relative">
                <button
                  onClick={() => {
                    setIsStaffOpen(!isStaffOpen);
                    setIsSolutionsOpen(false);
                    setIsCareersOpen(false);
                  }}
                  className="flex items-center text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors duration-300 cursor-pointer"
                >
                  Staff
                  <motion.div
                    animate={{ rotate: isStaffOpen ? 180 : 0 }}
                    transition={{ duration: 0.2, ease: "easeInOut" }}
                  >
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </motion.div>
                </button>
              </div>

              {/* About Us */}
              <Link
                to="/about"
                className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors duration-200 cursor-pointer"
                onClick={closeDropdowns}
              >
                About Us
              </Link>

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
            <button
              onClick={handleNavigateToSection}
              className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-lg text-sm font-medium transition-colors duration-200 cursor-pointer"
            >
              Explore our solutions
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
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
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 ">
                <div className="mb-6">
                  <motion.h3
                    variants={itemVariants}
                    className="text-sm font-medium text-gray-400 uppercase tracking-wider mb-4"
                  >
                    WHAT WE OFFER ACROSS INDUSTRIES
                  </motion.h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
                    {solutions.map((solution, index) => (
                      <motion.div key={index} variants={itemVariants}>
                        <a
                          href={solution.link}
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
                        </a>
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
                        <a
                          href={career.link}
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
                        </a>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Desktop Staff Mega Menu */}
        <AnimatePresence>
          {isStaffOpen && (
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
                    STAFF PORTAL ACCESS
                  </motion.h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {staff.map((item, index) => (
                      <motion.div key={index} variants={itemVariants}>
                        <Link
                          to={item.link}
                          onClick={closeDropdowns}
                          className="flex items-start space-x-4 p-4 rounded-lg transition-colors duration-200 cursor-pointer group"
                        >
                          <div className="flex-shrink-0 text-white group-hover:text-red-500 transition-colors duration-200">
                            {item.icon}
                          </div>
                          <div>
                            <h4 className="text-white font-medium text-sm mb-2 group-hover:text-white pb-1 flex items-center">
                              <span className="group-hover:border-b group-hover:border-white">
                                {item.title}
                              </span>
                              <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                                <ArrowRight className="w-4 h-4" />
                              </span>
                            </h4>
                            <p className="text-[#CCC] text-sm leading-relaxed">
                              {item.description}
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
            className="md:hidden bg-[#353535] border-t border-gray-700 max-h-[calc(100vh-4rem)] overflow-y-auto"
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
                      className="mt-4 space-y-4"
                    >
                      <motion.div variants={itemVariants} className="mb-4">
                        <h3 className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-3">
                          WHAT WE OFFER ACROSS INDUSTRIES
                        </h3>
                      </motion.div>
                      {solutions.map((solution, index) => (
                        <motion.div key={index} variants={itemVariants}>
                          <a
                            href={solution.link}
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
                          </a>
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
                      className="mt-4 space-y-4"
                    >
                      <motion.div variants={itemVariants} className="mb-4">
                        <h3 className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-3">
                          TALENT ACQUISITION & COMMUNITY ENGAGEMENT
                        </h3>
                      </motion.div>
                      {careers.map((career, index) => (
                        <motion.div key={index} variants={itemVariants}>
                          <a
                            href={career.link}
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
                          </a>
                        </motion.div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>

              {/* Staff */}
              <motion.div variants={itemVariants} className="mb-6">
                <button
                  onClick={() => setIsStaffOpen(!isStaffOpen)}
                  className="flex items-center justify-between w-full text-white px-3 py-3 text-lg font-medium border-b border-gray-700"
                >
                  Staff
                  <motion.div
                    animate={{ rotate: isStaffOpen ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <ChevronDown className="h-5 w-5" />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {isStaffOpen && (
                    <motion.div
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                      variants={mobileDropdownVariants}
                      className="mt-4 space-y-4"
                    >
                      <motion.div variants={itemVariants} className="mb-4">
                        <h3 className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-3">
                          STAFF PORTAL ACCESS
                        </h3>
                      </motion.div>
                      {staff.map((item, index) => (
                        <motion.div key={index} variants={itemVariants}>
                          <Link
                            to={item.link}
                            onClick={closeDropdowns}
                            className="flex items-start space-x-3 p-3 rounded-lg cursor-pointer transition-colors duration-200 group"
                          >
                            <div className="flex-shrink-0 text-white group-hover:text-red-500 transition-colors duration-200">
                              {item.icon}
                            </div>
                            <div>
                              <h4 className="text-white font-medium text-sm mb-1 group-hover:text-white pb-1 flex items-center">
                                <span className="group-hover:border-b group-hover:border-white">
                                  {item.title}
                                </span>
                                <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                                  <ArrowRight className="w-4 h-4" />
                                </span>
                              </h4>
                              <p className="text-[#ccc] text-xs leading-relaxed">
                                {item.description}
                              </p>
                            </div>
                          </Link>
                        </motion.div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>

              {/* About Us */}
              <motion.div variants={itemVariants} className="mb-8">
                <Link
                  to="/about"
                  className="block text-white px-3 py-3 text-lg font-medium border-b border-gray-700"
                  onClick={closeDropdowns}
                >
                  About Us
                </Link>
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
                <button
                  onClick={handleNavigateToSection}
                  className="w-full bg-red-500 hover:bg-red-600 text-white py-3 rounded-lg text-sm font-medium transition-colors duration-200 cursor-pointer"
                >
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
