export const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-end justify-center overflow-hidden pb-6">
      {/* Container with background fallback */}
      <div
        className="absolute inset-0 w-full h-full"
        style={{ backgroundColor: "#0d0d0d" }}
      >
        <video
          className="absolute inset-0 w-full h-full object-cover object-[62%_25%] md:object-[70%_25%] lg:object-[72%_25%] xl:object-[78%_25%]"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="hero.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-6 sm:mb-8 leading-tight px-2">
          Empowering <span className="text-red-500">Innovation</span> Across
          Energy,
          <br className="hidden sm:block" />
          Technology, And Media
        </h1>

        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed px-4">
          From portfolio management to full-scale development and quality tech
          <br className="hidden sm:block" />
          education, we partner with you to drive measurable growth.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 justify-center items-center max-w-sm sm:max-w-none mx-auto px-4">
          <button className="w-full sm:w-auto bg-red-600 hover:bg-red-700 text-white font-semibold py-3 sm:py- px-6 sm:px-8 rounded-lg transition-all duration-300  hover:shadow-2xl hover:shadow-red-600/25 text-sm sm:text-base lg:text-lg cursor-pointer">
            Explore our solutions
          </button>
          <button className="w-full sm:w-auto bg-transparent border-2 border-white text-white hover:bg-white hover:text-black font-semibold py-3 sm:py-3 px-6 sm:px-8 rounded-lg transition-all duration-300  hover:shadow-2xl hover:shadow-white/25 text-sm sm:text-base lg:text-lg cursor-pointer">
            Partner with Vephla
          </button>
        </div>
      </div>
    </div>
  );
};
