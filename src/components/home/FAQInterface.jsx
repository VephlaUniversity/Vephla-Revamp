import { Plus, Minus } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const FAQInterface = () => {
  const [activeCategory, setActiveCategory] = useState("Energy");
  const [expandedFAQ, setExpandedFAQ] = useState(0);

  const categories = [
    "Energy",
    "Softwares",
    "Vephla Uni",
    "Lurner Dome",
    "Print MLX",
    "Vephla Dailys",
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
        question: "What technologies do your team specialize in?",
        answer: `At <Strong>Vephla Group</strong>, our teams specialize in a wide array of modern technologies across software development, cloud solutions, AI, cybersecurity, and digital transformation. We bring deep expertise to every project, training, or consulting engagement.Our teams are composed of certified professionals and specialists with real-world implementation experience across Africa, Europe, and North America.`,
      },
      {
        question: "How do you ensure ongoing support?",
        answer: `At <Strong>Vephla Group</strong>, we’re committed to long-term success for our clients, partners, and learners. We don’t stop at delivery—we ensure ongoing support through structured systems and responsive engagement. Need tailored support or have specific SLA requirements?  <a href="https://zcriptta.com/contact.htm" class="text-red-500 hover:text-red-600 underline">Contact us</a>.`,
      },
      {
        question: "Can you integrate with our in-house systems?",
        answer: `<Strong>Yes, Vephla Group can integrate seamlessly with your in-house systems</strong>. Whether you’re using legacy platforms or modern cloud-based tools, our engineering and consulting teams are experienced in working within a wide range of enterprise environments.<Strong>Want to discuss your current system architecture or integration roadmap?</strong> Schedule a <a href="https://zcriptta.com/contact.htm" class="text-red-500 hover:text-red-600 underline">free consultation</a>.`,
      },
    ],
    "Vephla Uni": [
      {
        question: "Do you provide job placement support?",
        answer: `While we cannot guarantee job placement for every student, Vephla University is deeply committed to helping our students transition into their professional careers. We actively recommend top-performing students for <strong>internships</strong> and <strong>entry-level roles</strong> through our extensive network of industry partners. Additionally, we host <strong>graduate fairs</strong> and provide career coaching sessions to help you prepare for job interviews, improve your resume, and sharpen your networking skills. Our focus is on equipping you with the practical, hands-on skills that employers are looking for, giving you an edge in the job market. Many of our past students have successfully secured internships and roles shortly after graduation, thanks to the combination of the skills they gained and the support we provide. Our dedicated career services team is available to assist you in your job search, and we continue to offer support even after you’ve completed your course.`,
      },
      {
        question: "Can I learn part-time while working?",
        answer: `Yes, Vephla Uni is designed to support part-time learning for busy professionals and students with other commitments. Our programs are flexible and accessible, allowing you to balance your education with work, family, or other responsibilities.Whether you're working full-time or managing a busy schedule, Vephla Uni makes it possible to learn on your terms. Still have questions about part-time learning? Contact our <a href="https://www.vephlauni.com/contact" class="text-red-500 hover:text-red-600 underline">Admissions Team</a>.`,
      },
      {
        question: "What certification will I receive?",
        answer: `Upon successful completion of your program, you will receive an American-recognized certification from Vephla Uni.This certificate validates your skills and knowledge in your chosen field and can be used to enhance your resume, LinkedIn profile, or job applications. Looking for a sample certificate or more details about accreditation? View Our 
          <a href="https://www.vephlauni.com/accreditation" class="text-red-500 hover:text-red-600 underline">Accreditation Page</a>.`,
      },
    ],
    "Lurner Dome": [
      {
        question: "Are these digital downloads or physical books?",
        answer:
          "Most of our learning materials and resources are delivered as digital downloads by default.",
      },
      {
        question: "Can organizations buy in bulk?",
        answer:
          "Yes, organizations can purchase our products and services in bulk. Whether you're planning a large-scale training rollout, corporate gifting, or team development initiative, we offer tailored solutions to meet your goals at scale.",
      },
      {
        question: "Do your resources include exercises or assessments?",
        answer:
          "No, our standard learning resources do not include built-in exercises or assessments. They are designed primarily for self-paced learning, team reference, or foundational instruction.",
      },
    ],
    "Print MLX": [
      {
        question: "Can I order in bulk for events or corporate campaigns?",
        answer:
          "Yes, Vephla Group offers bulk ordering solutions for organizations running events, training initiatives, or corporate campaigns. Whether you’re planning a company-wide upskilling program, onboarding event, conference, or branded learning campaign—we’ve got you covered.",
      },
      {
        question: "Do you offer design assistance for print-ready files?",
        answer:
          "Yes, Vephla Group offers professional design assistance for print-ready files to support your events, campaigns, training materials, and branded assets.",
      },
      {
        question: "What's the turnaround time for orders?",
        answer:
          "Turnaround time depends on the type of service or product you’re ordering, but we always prioritize speed without compromising quality.",
      },
    ],
    "Vephla Dailys": [
      {
        question: "Can I contribute an article?",
        answer: `Yes, you can contribute an article by sending an e-mail to  <a href="mailto:daily@vephla.com" class="text-red-500 hover:text-red-600 underline">Vephla Daily</a>.`,
      },
      {
        question: "What does vephla daily talk about?",
        answer:
          "Our blog features diverse categories including Energy, Technology News, Oil & Gas, Design, EdTech, and Sports, reflecting the breadth of Vephla Group’s interests and expertise.",
      },
      {
        question: "Is the content free to access?",
        answer:
          "Yes, all content on the Daily Vephla blog is completely free to access.There are no paywalls, subscriptions, or login requirements. You can read articles, insights, and news updates anytime, directly from the blog—whether you're browsing on desktop or mobile.",
      },
      {
        question: "How can I stay notified of new posts?",
        answer: `You can stay up to date with new content from the Daily Vephla blog by subscribing to the newsletter. Simply enter your email address in the subscription box located on the blog page. Visit: <a href="https://daily.vephla.com/news-blog" class="text-red-500 hover:text-red-600 underline">Our news blog</a> and scroll to the subscription section to sign up.`,
      },
    ],
  };

  const toggleFAQ = (index) => {
    setExpandedFAQ(expandedFAQ === index ? -1 : index);
  };

  return (
    <div className="bg-[#0d0d0d] text-white min-h-screen py-12 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-left mb-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl mb-2 font-bold">
            Your Questions
            <span className="text-red-500 font-bold"> Answered</span>
          </h1>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
          {categories.map((category) => (
            <motion.button
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
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              {category}
            </motion.button>
          ))}
        </div>

        {/* FAQ Items */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="space-y-4"
          >
            {faqData[activeCategory]?.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1, duration: 0.3 }}
                className="border-b border-gray-800 last:border-b-0"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full py-6 px-2 flex justify-between items-center text-left hover:text-red-400 transition-colors duration-300 group"
                >
                  <span className="text-lg md:text-xl pr-4">
                    {faq.question}
                  </span>
                  <motion.div
                    className="flex-shrink-0"
                    animate={{ rotate: expandedFAQ === index ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    {expandedFAQ === index ? (
                      <Minus className="w-6 h-6 text-red-500 group-hover:text-red-400" />
                    ) : (
                      <Plus className="w-6 h-6 text-gray-400 group-hover:text-red-400" />
                    )}
                  </motion.div>
                </button>

                {/* Expandable Answer */}
                <AnimatePresence>
                  {expandedFAQ === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <motion.div
                        initial={{ y: -10 }}
                        animate={{ y: 0 }}
                        exit={{ y: -10 }}
                        transition={{ duration: 0.2, delay: 0.1 }}
                        className="pb-6 px-2"
                      >
                        <div
                          className="text-gray-300 text-base md:text-lg leading-relaxed"
                          dangerouslySetInnerHTML={{ __html: faq.answer }}
                        />
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};
