import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const containerRef = useRef(null);

  const testimonialSets = [
    {
      id: 1,
      testimonials: [
        {
          category: "BASED ON JUST CONCLUDED RESEARCH",
          title: "90%",
          subtitle:
            "of those who start with one Vephla service, grow into all.",
          author: "",
          position: "",
          isStatistic: true,
        },
        {
          category: "SOFTWARE & DATA SOLUTIONS",
          title:
            "Working with Vephla's development team felt like unlocking a new level of precision. What started as a simple app idea turned into an enterprise-grade platform with room to scale. They didn't just build software, they built our future.",
          author: "Chinaza E.",
          position: "Product Lead at Gridworks Africa",
        },
        {
          category: "ENERGY INVESTMENT ADVISORY",
          title:
            "Vephla's advisory team helped us navigate a volatile energy market with confidence. Their insights into oil and gas portfolios weren't just smart, they were strategic. We've seen steady growth since onboarding.",
          author: "Tunde M.",
          position: "Private Energy Portfolio Manager",
        },
      ],
    },
    {
      id: 2,
      testimonials: [
        {
          category: "TECH EDUCATION (VEPHLA UNI)",
          title:
            "Enrolling in Vephla Uni's UI/UX track changed everything. The curriculum was real-world, the mentors were responsive, and I landed a paid internship before graduation. It wasn't just a course, it was a launchpad.",
          author: "Fatima B.",
          position: "Junior Product Designer",
        },
        {
          category: "PRINTMLX (CUSTOM PRINTING)",
          title:
            "Our rebrand came to life with Vephla's PrintMLX. From merch to internal swag, their quality, speed, and support made them feel like an extension of our team. We've never looked sharper.",
          author: "Ibrahim A.",
          position: "Brand Manager, Halux Designs",
        },
        {
          category: "LURNER DOME (BOOKS & EDUCATIONAL PRODUCTS)",
          title:
            "The Lurner collection is everything traditional textbooks aren't, diving deep into creative, digestible, and deeply motivating contents. It's now a standard resource across our youth empowerment workshops.",
          author: "Omowumi R.",
          position: "Founder, Ignite MindSpace",
        },
        {
          category: "VEPHLA Dailys",
          title:
            "Vephla Dailys keeps me plugged into what matters. From spotlighting student innovations to breaking down real trends in tech and business, it's more than news, it's signal in the noise.",
          author: "Richard E.",
          position: "Product Strategist",
        },
      ],
    },
    {
      id: 3,
      testimonials: [
        {
          category: "PRINTMLX (CUSTOM PRINTING)",
          title:
            "Our rebrand came to life with Vephla's PrintMLX. From merch to internal swag, their quality, speed, and support made them feel like an extension of our team. We've never looked sharper.",
          author: "Ibrahim A.",
          position: "Brand Manager, Halux Designs",
        },
        {
          category: "LURNER DOME (BOOKS & EDUCATIONAL PRODUCTS)",
          title:
            "The Lurner collection is everything traditional textbooks aren't, diving deep into creative, digestible, and deeply motivating contents. It's now a standard resource across our youth empowerment workshops.",
          author: "Omowumi R.",
          position: "Founder, Ignite MindSpace",
        },
        {
          category: "VEPHLA DAILYS (TECH INSIGHTS)",
          title:
            "Vephla Dailys keeps me plugged into what matters. From spotlighting student innovations to breaking down real trends in tech and business, it's more than news, it's signal in the noise.",
          author: "Richard E.",
          position: "Product Strategist & Startup Advisor",
        },
      ],
    },
  ];

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - containerRef.current.offsetLeft);
    setScrollLeft(containerRef.current.scrollLeft);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    containerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleTouchStart = (e) => {
    setIsDragging(true);
    setStartX(e.touches[0].pageX - containerRef.current.offsetLeft);
    setScrollLeft(containerRef.current.scrollLeft);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    const x = e.touches[0].pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    containerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  const totalTestimonials = testimonialSets.reduce(
    (acc, set) => acc + set.testimonials.length,
    0
  );

  const handleScroll = () => {
    if (containerRef.current) {
      const scrollPosition = containerRef.current.scrollLeft;
      const cardWidth = 392; // card width + margin
      const newIndex = Math.round(scrollPosition / cardWidth);
      setCurrentIndex(Math.min(newIndex, totalTestimonials - 1));
    }
  };

  const scrollToTestimonial = (index) => {
    if (containerRef.current) {
      const cardWidth = 392;
      containerRef.current.scrollTo({
        left: index * cardWidth,
        behavior: "smooth",
      });
    }
  };

  const handlePrevious = () => {
    const newIndex = Math.max(0, currentIndex - 1);
    setCurrentIndex(newIndex);
    scrollToTestimonial(newIndex);
  };

  const handleNext = () => {
    const newIndex = Math.min(totalTestimonials - 1, currentIndex + 1);
    setCurrentIndex(newIndex);
    scrollToTestimonial(newIndex);
  };

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
      return () => container.removeEventListener("scroll", handleScroll);
    }
  }, []);

  return (
    <div className="bg-[#0d0d0d] text-white min-h-screen p-6 md:p-12">
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-12">
        <h1 className="text-4xl md:text-6xl mb-2 font-bold">
          Honest Feedback From{" "}
          <span className="text-red-500">Valued Clients</span>
        </h1>
        <div className="w-full h-px bg-gray-700 mt-8"></div>
      </div>

      {/* Carousel Container */}
      <div className="max-w-7xl mx-auto overflow-hidden">
        <div
          ref={containerRef}
          className="flex overflow-x-auto scrollbar-hide cursor-grab active:cursor-grabbing bg-[#3F3F3F] rounded-lg"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {testimonialSets.map((set, setIndex) =>
            set.testimonials.map((testimonial, index) => (
              <div
                key={`${setIndex}-${index}`}
                className="p-6 hover:bg-[#1B1B1B] transition-all duration-300 border-r-1 hover:border-r-1 hover:border-red-500 min-h-[500px] w-[392px] flex-shrink-0 flex flex-col justify-between cursor-pointer select-none"
              >
                <div className="flex flex-col gap-[5rem]">
                  <p className="text-gray-400 text-sm mb-6 uppercase tracking-wide">
                    {testimonial.category}
                  </p>

                  {testimonial.isStatistic ? (
                    <div className="mb-8 flex flex-col justify-baseline">
                      <h2 className="text-6xl md:text-8xl font-light mb-4">
                        {testimonial.title}
                      </h2>
                      <p className="text-gray-300 text-lg leading-relaxed">
                        {testimonial.subtitle}
                      </p>
                    </div>
                  ) : (
                    <p className="text-gray-300 text-base leading-relaxed mb-8">
                      {testimonial.title}
                    </p>
                  )}
                </div>

                {testimonial.author && (
                  <div className="mt-auto">
                    <p className="text-white font-medium mb-1">
                      {testimonial.author}
                    </p>
                    <p className="text-gray-400 text-sm">
                      {testimonial.position}
                    </p>
                  </div>
                )}
              </div>
            ))
          )}
        </div>

        {/* Navigation Controls */}
        <div className="flex justify-center items-center mt-8 px-4 space-x-6">
          {/* Previous Button */}
          <button
            onClick={handlePrevious}
            disabled={currentIndex === 0}
            className="bg-[#3F3F3F] hover:bg-red-600 disabled:bg-gray-400 disabled:cursor-not-allowed rounded-full p-2 transition-all duration-200"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={20} />
          </button>

          {/* Three-Dot Indicator */}
          <div className="flex items-center space-x-2">
            {[0, 1, 2].map((position) => {
              let dotIndex;
              let isVisible = true;

              if (totalTestimonials <= 3) {
                dotIndex = position;
                isVisible = position < totalTestimonials;
              } else if (currentIndex <= 1) {
                dotIndex = position;
              } else if (currentIndex >= totalTestimonials - 2) {
                dotIndex = totalTestimonials - 3 + position;
              } else {
                dotIndex = currentIndex - 1 + position;
              }

              if (!isVisible) return null;

              return (
                <button
                  key={position}
                  onClick={() => scrollToTestimonial(dotIndex)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 cursor-pointer ${
                    dotIndex === currentIndex
                      ? "bg-red-500 scale-125"
                      : "bg-gray-600 hover:bg-gray-500"
                  }`}
                  aria-label={`Go to testimonial ${dotIndex + 1}`}
                />
              );
            })}
          </div>

          {/* Next Button */}
          <button
            onClick={handleNext}
            disabled={currentIndex === totalTestimonials - 1}
            className="bg-[#3F3F3F] hover:bg-red-600 disabled:bg-gray-400 disabled:cursor-not-allowed rounded-full p-2 transition-all duration-200 cursor-pointer"
            aria-label="Next testimonial"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};
