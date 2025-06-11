export const AboutVephla = () => {
  return (
    <div className="min-h-screen bg-[#0d0d0d] text-white px-4 py-2 lg:py-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div id="about" className="mb-16 lg:mb-24">
          <h1 className="text-4xl md:text-5xl lg:text-6xl">
            Why Choose{" "}
            <span className="text-red-500 font-normal">Vephla Group</span>?
          </h1>
          {/* Decorative line */}
          <div className="w-full h-px bg-gray-800 mt-8"></div>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left side - Text content */}
          <div className="space-y-8 lg:pr-8">
            <h2 className="text-2xl md:text-3xl lg:text-4xl leading-relaxed">
              You don't have to figure it out alone, Vephla connects the dots
            </h2>

            <p className="text-lg md:text-xl leading-relaxed text-gray-300 ">
              At Vephla, we believe innovation should be grounded in results.
              Whether it's investing in the future of energy through oil and gas
              portfolios, building practical technology solutions, or equipping
              people with the skills to grow, we focus on what truly moves the
              needle. That's what sets us apart, and why more people choose to
              grow with us.
            </p>
          </div>
        </div>

        <div className="flex justify-center mt-8">
          <div className="relative w-[80%]">
            <div className="relative z-10 p-1  rounded-3xl">
              <div>
                <video
                  className="w-full h-auto rounded-2xl object-cover shadow-lg"
                  autoPlay
                  loop
                  muted
                  playsInline
                >
                  <source src="whyChooseUs.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
