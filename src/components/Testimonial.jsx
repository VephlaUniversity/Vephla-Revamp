import { useState, useRef, useEffect } from "react";

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
        {
          category: "TECH EDUCATION",
          title:
            "Enrolling in Vephla Uni's UI/UX track changed everything. The curriculum was real-world, the mentors were responsive, and I landed a paid internship before graduation. It wasn't just a course, it was a launchpad.",
          author: "Fatima B.",
          position: "Junior Product Designer",
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
          category: "VEPHLA WEBLOG",
          title:
            "Vephla Weblog keeps me plugged into what matters. From spotlighting student innovations to breaking down real trends in tech and business, it's more than news, it's signal in the noise.",
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
          category: "VEPHLA WEBLOG (TECH INSIGHTS)",
          title:
            "Vephla Weblog keeps me plugged into what matters. From spotlighting student innovations to breaking down real trends in tech and business, it's more than news, it's signal in the noise.",
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
      const cardWidth = 320 + 24; // card width + margin
      const newIndex = Math.round(scrollPosition / cardWidth);
      setCurrentIndex(Math.min(newIndex, totalTestimonials - 1));
    }
  };

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
      return () => container.removeEventListener("scroll", handleScroll);
    }
  }, []);

  return (
    <div className="bg-[#060606] text-white min-h-screen p-6 md:p-12">
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-12">
        <h1 className="text-4xl md:text-6xl  mb-2">
          Honest Feedback From{" "}
          <span className="text-red-500">Valued Clients</span>
        </h1>
        <div className="w-full h-px bg-gray-700 mt-8"></div>
      </div>

      {/* Carousel Container */}
      <div className="max-w-7xl mx-auto">
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
                className="p-6 hover:bg-[#1B1B1B]  transition-all duration-300 border-r-1 hover:border-r-1 hover:border-red-500 min-h-[500px] w-[392px] flex-shrink-0 flex flex-col justify-between cursor-pointer select-none"
              >
                <div>
                  <p className="text-gray-400 text-sm mb-6 uppercase tracking-wide">
                    {testimonial.category}
                  </p>

                  {testimonial.isStatistic ? (
                    <div className="mb-8">
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
      </div>
    </div>
  );
};
