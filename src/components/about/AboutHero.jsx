export const AboutHero = () => {
  return (
    <div className="relative min-h-screen bg-[#0d0d0d] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-center bg-no-repeat bg-contain opacity-60"
        style={{
          backgroundImage: "url(images/about.png)",
        }}
      ></div>

      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-black/20"></div>

      {/* Main Content */}
      <div className="relative z-10 w-full px-6 md:px-8 lg:px-12 h-screen flex flex-col">
        {/* Desktop/Tablet Layout */}
        <div className="hidden md:flex flex-1 flex-col">
          {/* Title at top left */}
          <div className="pt-40">
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight">
              About <span className="text-red-500">Vephla</span>
              <br />
              <span className="text-red-500">Group</span>
            </h1>
          </div>

          {/* Spacer to push paragraph to bottom */}
          <div className="flex-1"></div>

          {/* Paragraph at bottom right */}
          <div className="pb-16 flex justify-end">
            <div className="max-w-2xl">
              <p className="text-gray-300 text-lg md:text-xl lg:text-2xl leading-relaxed text-left">
                Vephla Group is a multi-arm modern company helping people and
                businesses grow through smart investments, digital solutions,
                and skill development. Each brand solves a clear problem, but
                together, they create a powerful system that helps ideas grow,
                talent thrive, and businesses scale. At Vephla, we don't just
                build for today, we build for what's next.
              </p>
            </div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden flex flex-col justify-center flex-1 space-y-8">
          {/* Title */}
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white leading-tight">
              About <span className="text-red-500">Vephla</span>
              <br />
              <span className="text-red-500">Group</span>
            </h1>
          </div>

          {/* Paragraph */}
          <div>
            <p className="text-gray-300 text-lg leading-relaxed text-center">
              Vephla Group is a multi-arm modern company helping people and
              businesses grow through smart investments, digital solutions, and
              skill development. Each brand solves a clear problem, but
              together, they create a powerful system that helps ideas grow,
              talent thrive, and businesses scale. At Vephla, we don't just
              build for today, we build for what's next.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
