import { Link } from "react-router-dom";

export const AboutVephla = () => {
  return (
    <div className="min-h-screen bg-[#0d0d0d] text-white px-4 py-2 lg:py-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div id="about" className="mb-16 lg:mb-24">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            Why Choose
            <span className="text-red-500 font-bold"> Vephla Group</span>?
          </h1>
          {/* Decorative line */}
          <div className="w-full h-px bg-gray-800 mt-8"></div>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left side - Text content */}
          <div className="space-y-8 lg:pr-8">
            <h2 className="text-2xl md:text-3xl lg:text-4xl leading-relaxed">
              You Don’t Have to figure it out Alone, Vephla Connects the Dots
            </h2>

            <p className="text-lg md:text-xl leading-relaxed text-gray-300 ">
              At Vephla Group, we turn bold ideas into lasting impact. Whether
              it's investing in energy through our oil and gas arm, building
              smart tech products, developing skilled talent, or growing vibrant
              tech communities, we align capital, expertise, and opportunity to
              help people and businesses thrive. That’s the power of the Vephla
              ecosystem, and why more visionaries choose to grow with us. &nbsp;
              <Link
                to="/about"
                className="text-white underline hover:text-red-500 text-base md:text-lg lg:text-xl leading-relaxed w-100 transition-colors duration-200"
              >
                Read more
              </Link>
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
                  <source src="video/whyChooseUs.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
