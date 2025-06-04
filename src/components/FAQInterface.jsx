import { Plus, Minus } from "lucide-react";
import { useState } from "react";

export const FAQInterface = () => {
  const [activeCategory, setActiveCategory] = useState("Energy");
  const [expandedFAQ, setExpandedFAQ] = useState(0); // First FAQ expanded by default

  const categories = [
    "Energy",
    "Softwares",
    "Vephla Uni",
    "Lurner Dome",
    "Print MLX",
    "Vephla Weblog",
  ];

  const faqData = {
    Energy: [
      {
        question:
          "What minimum investment is required to work with Vephla's energy team?",
        answer:
          "We tailor portfolios to your needs, but most clients start with a $10,000 minimum commitment. Smaller investors are welcome via our pooled funds.",
      },
      {
        question: "How do you manage risk in volatile oil & gas markets?",
        answer:
          "We employ diversified investment strategies, rigorous due diligence, and continuous market monitoring. Our risk management includes geographic diversification, hedging strategies, and partnerships with established operators to minimize exposure to market volatility.",
      },
      {
        question: "What reporting will I receive?",
        answer:
          "Clients receive comprehensive monthly reports detailing portfolio performance, market analysis, and investment updates. Additionally, you'll have access to our investor portal for real-time portfolio tracking and quarterly webinars with our investment team.",
      },
      {
        question: "Can I invest in renewable energy projects through Vephla?",
        answer:
          "Yes, we offer investment opportunities in solar, wind, and other renewable energy projects. Our renewable energy portfolio focuses on established technologies with proven track records and strong regulatory support.",
      },
    ],
    Softwares: [
      {
        question: "How long does it take to build a custom software solution??",
        answer:
          "Timelines vary by complexity. A typical mid-sized project (web app or dashboard) takes 8-12 weeks from kickoff to MVP release",
      },
      {
        question: "What technologies do your team specialize in?",
        answer:
          "Timelines vary by complexity. A typical mid-sized project (web app or dashboard) takes 8-12 weeks from kickoff to MVP release",
      },
      {
        question: "How do you ensure ongoing support?",
        answer:
          "Timelines vary by complexity. A typical mid-sized project (web app or dashboard) takes 8-12 weeks from kickoff to MVP release.",
      },
      {
        question: "Can you integrate with our in-house systems?",
        answer:
          "Timelines vary by complexity. A typical mid-sized project (web app or dashboard) takes 8-12 weeks from kickoff to MVP release.",
      },
    ],
    "Vephla Uni": [
      {
        question: "What's the format of Vephla Uni courses?",
        answer:
          "We offer a mix of self-paced video modules, live online workshops, and hands-on projects reviewed by industry mentors.",
      },
      {
        question: "Do you provide job placement support?",
        answer:
          "We offer a mix of self-paced video modules, live online workshops, and hands-on projects reviewed by industry mentors.",
      },
      {
        question: "Can I learn part-time while working?",
        answer:
          "We offer a mix of self-paced video modules, live online workshops, and hands-on projects reviewed by industry mentors.",
      },
      {
        question: "What certification will I receive?",
        answer:
          "We offer a mix of self-paced video modules, live online workshops, and hands-on projects reviewed by industry mentors.",
      },
    ],
    "Lurner Dome": [
      {
        question: "What age or experience level are Lurner materials for?",
        answer:
          "Our resources span from motivated beginners to experienced professionals—each product's description specifies the ideal audience.",
      },
      {
        question: "Are these digital downloads or physical books?",
        answer:
          "Our resources span from motivated beginners to experienced professionals—each product's description specifies the ideal audience.",
      },
      {
        question: "Can organizations buy in bulk?",
        answer:
          "Our resources span from motivated beginners to experienced professionals—each product's description specifies the ideal audience.",
      },
      {
        question: "Do your resources include exercises or assessments?",
        answer:
          "Our resources span from motivated beginners to experienced professionals—each product's description specifies the ideal audience.",
      },
    ],
    "Print MLX": [
      {
        question: "What types of printing services does PrintMLX offer?",
        answer:
          "We specialize in high-quality custom printing for merchandise, promotional items, corporate gifts, apparel, and branded materials. If you can imagine it, we likely print it.",
      },
      {
        question: "Can I order in bulk for events or corporate campaigns?",
        answer:
          "We specialize in high-quality custom printing for merchandise, promotional items, corporate gifts, apparel, and branded materials. If you can imagine it, we likely print it.",
      },
      {
        question: "Do you offer design assistance for print-ready files?",
        answer:
          "We specialize in high-quality custom printing for merchandise, promotional items, corporate gifts, apparel, and branded materials. If you can imagine it, we likely print it.",
      },
      {
        question: "What’s the turnaround time for orders?",
        answer:
          "We specialize in high-quality custom printing for merchandise, promotional items, corporate gifts, apparel, and branded materials. If you can imagine it, we likely print it.",
      },
    ],
    "Vephla Weblog": [
      {
        question: "Can I contribute an article?",
        answer:
          "We welcome qualified guest writers. Submit your pitch through our “Write for Us” page and our editorial team will review it.",
      },
      {
        question: "How often is the blog updated?",
        answer:
          "We welcome qualified guest writers. Submit your pitch through our “Write for Us” page and our editorial team will review it.",
      },
      {
        question: "Is the content free to access?",
        answer:
          "We welcome qualified guest writers. Submit your pitch through our “Write for Us” page and our editorial team will review it.",
      },
      {
        question: "How can I stay notified of new posts?",
        answer:
          "We welcome qualified guest writers. Submit your pitch through our “Write for Us” page and our editorial team will review it.",
      },
    ],
  };

  const toggleFAQ = (index) => {
    setExpandedFAQ(expandedFAQ === index ? -1 : index);
  };

  return (
    <div className="bg-[#060606] text-white min-h-screen py-12 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-left mb-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl mb-2">
            Your Questions
            <span className="text-red-500 font-normal"> Answered</span>
          </h1>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => {
                setActiveCategory(category);
                setExpandedFAQ(0);
              }}
              className={`px-4 md:px-6 py-2 md:py-3 rounded-lg transition-all duration-300 text-sm md:text-base cursor-pointer ${
                activeCategory === category
                  ? "bg-red-500 text-white shadow-lg"
                  : "bg-[#1B1B1B] text-gray-300 hover:bg-[#1d1a1a] hover:text-white"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqData[activeCategory]?.map((faq, index) => (
            <div
              key={index}
              className="border-b border-gray-800 last:border-b-0"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full py-6 px-2 flex justify-between items-center text-left hover:text-red-400 transition-colors duration-300 group"
              >
                <span className="text-lg md:text-xl pr-4">{faq.question}</span>
                <div className="flex-shrink-0">
                  {expandedFAQ === index ? (
                    <Minus className="w-6 h-6 text-red-500 group-hover:text-red-400" />
                  ) : (
                    <Plus className="w-6 h-6 text-gray-400 group-hover:text-red-400" />
                  )}
                </div>
              </button>

              {/* Expandable Answer */}
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  expandedFAQ === index
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="pb-6 px-2">
                  <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
