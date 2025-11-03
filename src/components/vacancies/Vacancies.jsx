import { Search, ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";
import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { AnimatedPage } from "../../AnimatedPage";

export const Vacancies = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const articles = [
    {
      id: 1,
      title: "Design & Media Intern",
      description:
        "We are excited to recruit a Design and Media Intern for a 10 months placement at Vephla Group. This is a structured learning placement where you will be mentored...",
      image: "/images/0.jpg",
      link: "/design-media-internship",
    },
    {
      id: 2,
      title: "Operations Intern",
      description:
        "This is a structured, hands-on internship where you will support day to day operations across our conglomerate, work closely with cross functional tea...",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=600&fit=crop&crop=center",
      link: "/operations-internship",
    },
    {
      id: 3,
      title: "Software Engineering Executive (Full Stack)",
      description:
        "This role involves building modern web and mobile products, improving internal platforms, and contributing to scalable architectures that serve both commercial...",
      image: "/images/software.jpg",
      link: "/software-engineering-executive",
    },
    {
      id: 4,
      title: "Data Analytics Intern",
      description:
        "This role is designed to build strong analytical capability while contributing directly to real business insights across our conglomerate. You will support our anal...",
      image: "/images/data.jpg",
      link: "/data-analytics-internship",
    },
    {
      id: 5,
      title: "Cybersecurity Executive",
      description:
        "Vephla Group is hiring a Cybersecurity Executive to support protection of our infrastructure, implement security best practices, strengthen our security posture...",
      image: "/images/cyber-1.jpg",
      link: "/cybersecurity-executive",
    },
    {
      id: 6,
      title: "Cybersecurity Intern",
      description:
        "We are recruiting a Cybersecurity Intern for a structured 10 month internship at Vephla Group. You will work with our cybersecurity team to strengthen system....",
      image: "/images/cyber-2.jpg",
      link: "/cybersecurity-internship",
    },
  ];

  const filteredArticles = useMemo(() => {
    if (searchTerm.trim()) {
      return articles.filter(
        (article) =>
          article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          article.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    return articles;
  }, [searchTerm]);

  const ArticleCard = ({ article }) => (
    <div className="group cursor-pointer">
      <Link to={article.link}>
        <div className="relative overflow-hidden rounded-xl bg-[#0d0d0d] backdrop-blur-sm border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 hover:transform hover:scale-[1.02]">
          <div className="aspect-video relative overflow-hidden">
            <div className="absolute inset-0">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute bottom-4 right-4 w-8 h-8 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
              <ArrowUpRight className="w-4 h-4 text-white" />
            </div>
          </div>
          <div className="p-6">
            <h3 className="text-white text-xl font-semibold mb-3 group-hover:text-gray-200 transition-colors">
              {article.title}
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              {article.description}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );

  const NotFoundMessage = () => (
    <div className="flex flex-col items-center justify-center py-16 text-center">
      <div className="w-24 h-24 mb-6 rounded-full bg-gray-800/50 flex items-center justify-center">
        <Search className="w-10 h-10 text-gray-500" />
      </div>
      <h3 className="text-2xl font-semibold text-white mb-3">No Vacancy</h3>
      <p className="text-gray-400 max-w-md">
        We couldn't find any vacancy matching "{searchTerm}".
      </p>
      <button
        onClick={() => setSearchTerm("")}
        className="mt-6 px-6 py-2 bg-red-500 hover:bg-red-700 text-white rounded-lg transition-colors"
      >
        Clear search
      </button>
    </div>
  );

  return (
    <AnimatedPage>
      <div className="container mx-auto px-4 py-16">
        <div className=" text-white overflow-hidden py-4">
          {/* Navigation */}
          <nav className="flex items-center justify-center pt-6 pb-4 px-4 sm:pt-8 sm:pb-6">
            <div className="flex items-center space-x-2 sm:space-x-4 text-gray-400 text-sm sm:text-base">
              <Link
                to="/"
                className="hover:text-white transition-colors duration-200"
              >
                Homepage
              </Link>

              <span className="text-gray-600">›</span>
              <span className="text-white">Vacancies</span>
            </div>
          </nav>

          <div className="flex flex-col items-center justify-center px-4 lg:px-16">
            {/* Heading */}
            <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-center mb-8 sm:mb-12 lg:mb-16 tracking-tight leading-tight max-w-6xl">
              Shaping The Future of Tech
            </h1>
          </div>
        </div>

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-12">
          <h2 className="text-xl md:text-4xl font-bold mb-8 lg:mb-0 text-white">
            Our Latest Roles
          </h2>

          {/* Search */}
          <div className="relative max-w-md w-full lg:w-auto">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 z-10" />
            <input
              type="text"
              placeholder="Search vacancies..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-6 py-3 bg-[#1b1b1b] border border-gray-700 rounded-lg focus:outline-none focus:border-gray-600 text-white placeholder-gray-400 backdrop-blur-sm"
            />
          </div>
        </div>

        {/* Results count */}
        {searchTerm && (
          <div className="mb-6">
            <p className="text-gray-400 text-sm">
              {filteredArticles.length} vacanc
              {filteredArticles.length !== 1 ? "ies" : "y"} found
              {searchTerm && ` for "${searchTerm}"`}
            </p>
          </div>
        )}

        {/* Articles Grid or Not Found Message */}
        {filteredArticles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {filteredArticles.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        ) : (
          <NotFoundMessage />
        )}
      </div>
    </AnimatedPage>
  );
};
