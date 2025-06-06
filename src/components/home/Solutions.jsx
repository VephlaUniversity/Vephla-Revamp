import {
  LightbulbIcon,
  Command,
  GraduationCap,
  BookOpen,
  LucideShoppingBag,
  CopySlashIcon,
  ExternalLink,
} from "lucide-react";

export const Solutions = () => {
  const solutions = [
    {
      id: 1,
      icon: LightbulbIcon,
      title: "Energy Investment Advisory",
      description:
        "We help you make informed decisions in oil and gas investments through deep market intelligence and strategy collectively valued at over $150 million.",
      detailText:
        "Our analysts blend proprietary data models with on-the-ground expertise to safeguard returns and navigate market volatility. It's not just capital, it's calculated impact for those who trust us for disciplined, accurate strategies.",
      cta: "Direct Contact to Our Energy Advisors",
      hoverColor: "hover:border-red-500 group-hover:text-red-500",
    },
    {
      id: 2,
      icon: Command,
      title: "Tech Software & Data Solutions",
      description:
        "Our 58 + engineers have shipped over 200 enterprise platforms, from automated workflows to real-time analytics dashboards. Solutions into every line of code.",
      detailText:
        "When downtime is not an option and performance, security, scalability, and seamless integration matters, companies turn to Vephla for software solutions that solve real business problems, and scale production.",
      cta: "Request a Quote to Scale Business",
      hoverColor: "hover:border-red-500 group-hover:text-red-500",
      featured: true,
    },
    {
      id: 3,
      icon: GraduationCap,
      title: "Vephla Uni - Elite Tech Education",
      description:
        "Vephla Uni trains tomorrow's leaders in UI/UX, software engineering, data analytics, cybersecurity, and front-end development.",
      detailText:
        "Our curriculum is co-developed with hiring managers at top firms, structured to provide graduates with ready knowledge for the industry market. We don't teach theory, we prepare industry-ready experts.",
      cta: "Enroll your Course at Vephla Uni",
      hoverColor: "hover:border-red-500 group-hover:text-red-500",
    },
    {
      id: 4,
      icon: BookOpen,
      title: "Lurner Dome - Learning Resources",
      description:
        "Lurner Dome is your go-to library for growth-focused learning tools. We curate each book and resource with hands-on exercises and real-world examples.",
      detailText:
        "Whether you're sharpening creative thinking, tackling a new skill, or leading a team, our materials give you practical steps to make progress today, so you're not just reading theory, you're applying it.",
      cta: "Browse Lurner Learning Resources",
      hoverColor: "hover:border-red-500 group-hover:text-red-500",
    },
    {
      id: 5,
      icon: LucideShoppingBag,
      title: "PrintMLX - Precision Brand Printing",
      description:
        "PrintMLX delivers large-bulk and bespoke print solutions for brands. Our workflow integrates colour-calibrated proofs, and rapid production to ensure standard.",
      detailText:
        "From branded merchandise to one-off pieces, we will help any brands, creators, and organizations stand out with high-quality prints. If your brand demands flawless execution, PrintMLX is the benchmark.",
      cta: "Explore Works at Print MLX",
      hoverColor: "hover:border-red-500 group-hover:text-red-500",
      featured: true,
    },
    {
      id: 6,
      icon: CopySlashIcon,
      title: "Vephla Weblog for Decision-Makers",
      description:
        "The Vephla Weblog delivers clear, concise insights on technology, business, and education. It's where busy professionals go to stay informed without the fluff.",
      detailText:
        "Every week, we break down the trends that matter, new tools, student projects, and market shifts into articles you can read in minutes yet, keeping you informed, inspired, and ready to make smarter decisions.",
      cta: "Go to the Latest Insights",
      hoverColor: "hover:border-red-500 group-hover:text-red-500",
    },
  ];

  return (
    <div className="min-h-screen bg-[#0d0d0d] p-6 lg:p-12">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl lg:text-5xl font-bold text-white mb-2">
          Our <span className="text-red-500">Solutions</span>
        </h1>

        <div className="w-full h-px bg-gray-700 mb-12"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
          {solutions.map((solution) => {
            const IconComponent = solution.icon;
            return (
              <div
                key={solution.id}
                className={`group relative bg-[#1b1b1b] rounded-2xl p-8 border-1 border-gray-400 transition-all duration-300 cursor-pointer ${
                  solution.hoverColor
                } ${solution.featured ? "lg:col-span-1" : ""}`}
              >
                <div className="flex flex-col h-full">
                  <div className="mb-6">
                    <IconComponent
                      className={`w-12 h-12 text-gray-400 transition-colors duration-300 ${
                        solution.hoverColor.split(" ")[1]
                      }`}
                      strokeWidth={1.5}
                    />
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-4 leading-tight">
                    {solution.title}
                  </h3>

                  <p className="text-gray-300 mb-6 leading-relaxed flex-grow">
                    {solution.description}
                  </p>

                  <p className="text-gray-400 text-sm mb-8 leading-relaxed">
                    {solution.detailText}
                  </p>

                  <div className="mt-auto">
                    <button className="flex items-center justify-between w-full text-gray-300 hover:text-white transition-colors duration-300 group-hover:text-white">
                      <span className="text-sm font-medium">
                        {solution.cta}
                      </span>
                      <ExternalLink
                        className={`w-4 h-4 ml-2 ${
                          solution.hoverColor.split(" ")[1]
                        }`}
                        strokeWidth={1.5}
                      />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
