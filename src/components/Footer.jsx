import { ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-[#0d0d0d] text-white py-8 md:py-12 lg:py-16 px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-10 lg:gap-12 mb-8 md:mb-12 lg:mb-16">
          {/* Quick Links */}
          <div className="order-1">
            <h3 className="text-red-500 text-xs md:text-sm font-semibold mb-4 md:mb-6 tracking-wider">
              QUICK LINKS
            </h3>
            <ul className="space-y-2 md:space-y-4">
              <li>
                <Link
                  to="/"
                  className="text-gray-300 hover:text-white transition-colors text-sm md:text-base"
                >
                  Home
                </Link>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-gray-300 hover:text-white transition-colors text-sm md:text-base"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors text-sm md:text-base"
                >
                  Careers
                </a>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-300 hover:text-white transition-colors text-sm md:text-base"
                >
                  Contact
                </Link>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors text-sm md:text-base"
                >
                  Resources
                </a>
              </li>
            </ul>
          </div>

          {/* Our Solutions */}
          <div className="order-2">
            <h3 className="text-red-500 text-xs md:text-sm font-semibold mb-4 md:mb-6 tracking-wider">
              OUR SOLUTIONS
            </h3>
            <ul className="space-y-2 md:space-y-4">
              <li>
                <Link
                  to="/energy"
                  className="text-gray-300 hover:text-white transition-colors text-sm md:text-base"
                >
                  Energy Investments
                </Link>
              </li>
              <li>
                <Link
                  to="/vephlauni"
                  className="text-gray-300 hover:text-white transition-colors text-sm md:text-base"
                >
                  Vephla University
                </Link>
              </li>
              <li>
                <Link
                  to="/printmlx"
                  className="text-gray-300 hover:text-white transition-colors text-sm md:text-base"
                >
                  PrintMLX
                </Link>
              </li>
              <li>
                <Link
                  to="/lurner"
                  className="text-gray-300 hover:text-white transition-colors text-sm md:text-base"
                >
                  Lumer
                </Link>
              </li>
              <li>
                <Link
                  to="/qnduit"
                  className="text-gray-300 hover:text-white transition-colors text-sm md:text-base"
                >
                  Qnduit
                </Link>
              </li>
              <li>
                <Link
                  to="/weblog"
                  className="text-gray-300 hover:text-white transition-colors text-sm md:text-base"
                >
                  Tech Weblog
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="order-3">
            <h3 className="text-red-500 text-xs md:text-sm font-semibold mb-4 md:mb-6 tracking-wider">
              SOCIAL MEDIA
            </h3>
            <ul className="space-y-2 md:space-y-4">
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors flex items-center gap-2 text-sm md:text-base"
                >
                  Twitter <ExternalLink size={12} className="md:w-4 md:h-4" />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors flex items-center gap-2 text-sm md:text-base"
                >
                  Instagram <ExternalLink size={12} className="md:w-4 md:h-4" />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors flex items-center gap-2 text-sm md:text-base"
                >
                  LinkedIn <ExternalLink size={12} className="md:w-4 md:h-4" />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors flex items-center gap-2 text-sm md:text-base"
                >
                  Facebook <ExternalLink size={12} className="md:w-4 md:h-4" />
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Line */}
          <div className="order-4 sm:order-5 md:order-4">
            <h3 className="text-red-500 text-xs md:text-sm font-semibold mb-4 md:mb-6 tracking-wider">
              CONTACT LINE
            </h3>
            <div className="space-y-2 md:space-y-4">
              <p className="text-gray-300 text-sm md:text-base">
                +234-701-361-7059
              </p>
              <a
                href="mailto:Hello@Vephlagroup.com"
                className="text-gray-300 hover:text-white transition-colors underline text-sm md:text-base break-all"
              >
                Hello@Vephlagroup.com
              </a>
            </div>
          </div>

          {/* Physical Addresses */}
          <div className="order-5 sm:order-4 md:order-5 sm:col-span-2 md:col-span-1">
            <h3 className="text-red-500 text-xs md:text-sm font-semibold mb-4 md:mb-6 tracking-wider">
              PHYSICAL ADDRESSES
            </h3>
            <div className="space-y-4 md:space-y-6 text-gray-300 text-xs md:text-sm">
              <div>
                <p className="font-medium text-white">West Africa 1:</p>
                <p>No 2, Itesiwaju Street, Akoka, Yaba.</p>
                <p>Lagos, Nigeria</p>
              </div>

              <div>
                <p className="font-medium text-white">West Africa 2:</p>
                <p>No 21,ComMunity Rd, Lagos Mainland,</p>
                <p>Lagos.</p>
              </div>

              <div>
                <p className="font-medium text-white">Annex:</p>
                <p>900 Stinson Way, West Palm Beach, Florida,</p>
                <p>United States. 33411.</p>
              </div>

              <div>
                <p className="font-medium text-white">Annex:</p>
                <p>900 Stinson Way, West Palm Beach, Florida,</p>
                <p>United States. 33411.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-6 md:pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-gray-400 text-xs md:text-sm">
              © 2025 Vephla Group
            </p>
            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-6 md:space-x-8 text-center sm:text-left">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors text-xs md:text-sm"
              >
                Terms & Service
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors text-xs md:text-sm"
              >
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
