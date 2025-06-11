import { AnimatedPage } from "../../AnimatedPage";

export const SoftwareSolution = () => {
  return (
    <AnimatedPage>
      <div className="relative min-h-screen flex items-end justify-center overflow-hidden pb-6 ">
        {/* Background container with image and color */}
        <div
          className="absolute inset-0 w-full h-full bg-[#0d0d0d]"
          style={{
            backgroundImage: "url('/images/solutions.png')",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center",
          }}
        ></div>

        {/* Content */}
        <div className="relative z-10 text-left sm:text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-6 sm:mb-8 leading-tight px-2">
            <span className="text-red-500">Work Smarter</span> With Custom
            Software
            <br className="hidden sm:block" />
            That Solves Real Problems
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed px-4">
            We design and build software solutions that save time,
            <br className="hidden sm:block" />
            unlock data, and boost performance at scale.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 justify-center items-center max-w-sm sm:max-w-none mx-auto px-4">
            <button className="w-full sm:w-auto bg-red-600 hover:bg-red-700 text-white font-semibold py-3 sm:py- px-6 sm:px-8 rounded-lg transition-all duration-300  hover:shadow-2xl hover:shadow-red-600/25 text-sm sm:text-base lg:text-lg cursor-pointer">
              Request a Quote
            </button>
          </div>
        </div>
      </div>
    </AnimatedPage>
  );
};
