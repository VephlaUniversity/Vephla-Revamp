import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-end justify-center overflow-hidden pb-6">
      {/* Container with background fallback */}
      <div
        className="absolute inset-0 bg-contain bg-center bg-no-repeat m-24"
        style={{
          backgroundImage: "url('/images/energy.png')",
        }}
      >
        {/* Dark Overlay to maintain readability */}
        <div className="absolute inset-0 bg-[#0d0d0d]/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-6 sm:mb-8 leading-tight px-2">
          Empowering <span className="text-red-500">Innovation</span> Across
          Energy,
          <br className="hidden sm:block" />
          Technology, And Digital Ecosystems
        </h1>

        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed px-4">
          From building and scaling products to delivering smart funding, oil
          and gas solutions, Talent Development, AI platforms, and
          <br className="hidden sm:block" /> workforce development, we partner
          with innovators, communities, and enterprises to drive measurable
          impact across industries.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 justify-center items-center max-w-sm sm:max-w-none mx-auto px-4">
          <a href="#solutions">
            <button className="w-full sm:w-auto bg-red-500 hover:bg-red-600 text-white font-semibold py-3 sm:py- px-6 sm:px-8 rounded-lg transition-all duration-300  hover:shadow-2xl hover:shadow-red-600/25 text-sm sm:text-base lg:text-lg cursor-pointer">
              Explore our solutions
            </button>
          </a>
          <Link to="/contact">
            <button className="w-full sm:w-auto bg-transparent border-2 border-white text-white hover:bg-white hover:text-black font-semibold py-3 sm:py-3 px-6 sm:px-8 rounded-lg transition-all duration-300  hover:shadow-2xl hover:shadow-white/25 text-sm sm:text-base lg:text-lg cursor-pointer">
              Partner with Vephla
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
