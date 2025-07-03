import { useState, useEffect } from "react";

const branches = [
  {
    id: 1,
    name: "Vephla Investments",
    description:
      "Our energy investment team. We help clients invest wisely in oil and gas portfolios, with expert advisors guiding every step.",
    number: "01",
  },
  {
    id: 2,
    name: "Vephla Uni",
    description:
      "We train the next generation of tech professionals through practical, mentorship programs in design, software, and data.",
    number: "02",
  },
  {
    id: 3,
    name: "Zcriptta",
    description:
      "We build custom digital solutions for startups, teams, and enterprises that need reliable, high-performing platforms.",
    number: "03",
  },
  {
    id: 4,
    name: "PrintMLX",
    description:
      "Our custom merchandise and printing service. From branded T-shirts to personalized items, we deliver high-quality prints that stand out.",
    number: "04",
  },
  {
    id: 5,
    name: "VNCX",
    description:
      "A versatile platform for connecting, collaborating, and growing. Whether you're hiring or job hunting, it helps you build meaningful connections and advance with confidence.",
    number: "05",
  },
  {
    id: 6,
    name: "Qnduit",
    description:
      "A career and job platform for all. Users can find jobs, apply with ease, prepare for interviews, and grow their careers.",
    number: "06",
  },
];

export const BatchSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % branches.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const currentBranch = branches[currentSlide];
  const nextBranch = branches[(currentSlide + 1) % branches.length];

  return (
    <div className="relative min-h-screen bg-[#0d0d0d] overflow-hidden">
      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Header */}
        <div className="p-6 md:p-8 lg:p-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2">
            Vephla Group <span className="text-red-500">Branches</span>
          </h1>
        </div>

        {/* Desktop/Tablet Content */}
        <div className="hidden md:flex flex-1 items-center justify-center px-6 md:px-8 lg:px-12">
          <div className="w-full max-w-7xl">
            <div className="grid grid-cols-2 gap-8 lg:gap-16 items-center">
              {/* Left Side - Current Branch Number and Details */}
              <div className="flex items-center gap-8">
                {/* Branch Number */}
                <div className="text-8xl md:text-9xl lg:text-[12rem] xl:text-[16rem] font-semibold text-white/90 leading-none flex-shrink-0">
                  {currentBranch.number}
                </div>
                {/* Branch Details */}
                <div className="space-y-4">
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-red-500">
                    {currentBranch.name}
                  </h2>
                  <p className="text-gray-300 text-base md:text-lg lg:text-xl leading-relaxed w-100">
                    {currentBranch.description}
                  </p>
                </div>
              </div>

              {/* Right Side - Next Branch Number Preview */}
              <div className="flex justify-end items-center">
                <div className="text-6xl md:text-7xl lg:text-8xl  font-semibold text-white/70 leading-none transition-all duration-700 ease-in-out">
                  {nextBranch.number}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Content - Static list without slider */}
        <div className="md:hidden flex-1 px-6 pb-8">
          <div className="space-y-12">
            {branches.map((branch) => (
              <div key={branch.id} className="space-y-4">
                {/* Branch Number */}
                <div className="text-7xl font-semibold text-white/90 leading-none">
                  {branch.number}
                </div>

                {/* Branch Details */}
                <div className="space-y-3">
                  <h2 className="text-2xl font-semibold text-red-500">
                    {branch.name}
                  </h2>
                  <p className="text-gray-300 text-base leading-relaxed">
                    {branch.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Progress Indicator - Desktop/Tablet only */}
        <div className="hidden md:block px-6 md:px-8 lg:px-12 pb-8">
          <div className="relative">
            {/* White background track */}
            <div className="w-full h-2 bg-white rounded-full overflow-hidden">
              {/* Red sliding indicator */}
              <div
                className="h-full bg-red-500 rounded-full transition-all duration-700 ease-out"
                style={{
                  width: `${100 / branches.length}%`,
                  transform: `translateX(${currentSlide * 100}%)`,
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
