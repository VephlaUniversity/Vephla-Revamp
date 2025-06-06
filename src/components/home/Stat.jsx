import { useState, useEffect, useRef } from "react";
import { AboutVephla } from "./WhyChooseUs";

export const StatsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const stats = [
    {
      id: 1,
      number: 7381,
      suffix: "+",
      label: "Clients",
      description:
        "Clients who have chosen us as their go-to strategic solution partner.",
      hoverColor: "hover:border-red-500",
    },
    {
      id: 2,
      number: 372,
      suffix: "",
      label: "Projects",
      description:
        "Successfully launched with valuable experiences and proven track record.",
      hoverColor: "hover:border-red-500",
    },
    {
      id: 3,
      number: 4463,
      suffix: "+",
      label: "Hours",
      description:
        "Of tailored consultations to ensure every project meets your exact needs.",
      hoverColor: "hover:border-red-500",
    },
    {
      id: 4,
      number: 38,
      suffix: "",
      label: "Experts",
      description:
        "Delivering deep domain knowledge and hands-on collaboration on projects.",
      hoverColor: "hover:border-red-500",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const CountUpNumber = ({ target, suffix, isVisible }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!isVisible) return;

      const duration = 2000; // 2 seconds
      const steps = 60;
      const increment = target / steps;
      const stepDuration = duration / steps;

      let current = 0;
      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          setCount(target);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, stepDuration);

      return () => clearInterval(timer);
    }, [target, isVisible]);

    const formatNumber = (num) => {
      return num.toLocaleString();
    };

    return (
      <span>
        {formatNumber(count)}
        {suffix}
      </span>
    );
  };

  return (
    <>
      <AboutVephla />
      <div className="bg-[#0d0d0d] p-6 md:p-12 flex items-center justify-center">
        <div className="max-w-7xl mx-auto w-full" ref={sectionRef}>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8">
            {stats.map((stat) => (
              <div
                key={stat.id}
                className={`group relative bg-[#1d1d1d] rounded-2xl p-8 border-1 border-gray-400 transition-all duration-300  ${stat.hoverColor}`}
              >
                <div className="flex flex-col h-full">
                  <div className="mb-8">
                    <div
                      className={`w-4 h-4 rounded-full transition-colors duration-300 bg-gray-400 group-hover:bg-red-500`}
                    ></div>
                  </div>

                  <div className="mb-4">
                    <h2 className="text-4xl lg:text-5xl font-bold text-white mb-2">
                      <CountUpNumber
                        target={stat.number}
                        suffix={stat.suffix}
                        isVisible={isVisible}
                      />
                    </h2>
                    <h3 className="text-2xl lg:text-3xl font-bold text-white">
                      {stat.label}
                    </h3>
                  </div>

                  <p className="text-gray-300 text-base lg:text-lg leading-relaxed">
                    {stat.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
