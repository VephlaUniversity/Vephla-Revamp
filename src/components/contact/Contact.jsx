import { ArrowRight, PhoneCallIcon, Mails } from "lucide-react";
import { useState } from "react";

export const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    services: [],
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const services = [
    "Education (Vephla Uni)",
    "Software Solutions",
    "Investment Advisory",
    "Printing Services (PrintMLX)",
    "Educational (Lurner Dome)",
    "Blog Insights (Vephla Weblog)",
    "Career & Mentorship",
    "General Inquiry",
    "Other",
  ];

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!formData.email.includes("@") || !formData.email.includes(".")) {
      newErrors.email = "Email is invalid";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (formData.phone.trim().length < 10) {
      newErrors.phone = "Phone number is too short";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    if (formData.services.length === 0) {
      newErrors.services = "Please select at least one service";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleServiceChange = (service) => {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter((s) => s !== service)
        : [...prev.services, service],
    }));

    if (errors.services) {
      setErrors((prev) => ({
        ...prev,
        services: "",
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      alert("Message sent successfully!");
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
        services: [],
      });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-[#0d0d0d] text-white pt-16">
      <div className="container mx-auto px-4 py-12 max-w-7xl">
        {/* Header Section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
          {/* Left Column - Main Header */}
          <div className="md:col-span-2 lg:col-span-1">
            <h1 className="text-4xl md:text-5xl mb-6">CONTACT US</h1>
            <p className="text-gray-300 text-lg mb-12 leading-relaxed">
              Whether you're looking to explore a service, join our talent
              network, or collaborate across industries
            </p>
          </div>

          {/* Middle Column - Contact Details */}
          <div className="space-y-8 w-full max-w-sm">
            <div>
              <h3 className="text-gray-400 text-sm uppercase tracking-wider mb-4">
                GENERAL INQUIRIES
              </h3>
              <div className="space-y-3">
                <a
                  href="mailto:Hello@vephlagroup.com"
                  className="inline-flex items-center text-white hover:text-red-400 transition-colors underline"
                >
                  Hello@vephlagroup.com <Mails className="w-5 h-5 ml-2" />
                </a>{" "}
                <br />
                <a
                  href="tel:+234-701-361-7059"
                  className="inline-flex items-center text-white hover:text-red-400 transition-colors underline"
                >
                  +234-701-361-7059
                  <PhoneCallIcon className="w-5 h-5 ml-2" />
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-gray-400 text-sm uppercase tracking-wider mb-4">
                JOIN OUR TALENT COMMUNITY
              </h3>
              <a
                href="#"
                className="inline-flex items-center text-white hover:text-red-400 transition-colors underline"
              >
                Explore Career Opportunities
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </div>
          </div>

          {/* Right Column - Business Info */}
          <div className="lg:text-left w-full max-w-sm">
            <div className="mb-8">
              <h3 className="text-gray-400 text-sm uppercase tracking-wider mb-4">
                BUSINESS & PARTNERSHIPS
              </h3>
              <a
                href="mailto:Partnerships@vephla.com"
                className="inline-flex items-center justify-start lg:justify-start text-white hover:text-red-400 transition-colors underline"
              >
                Partnerships@vephla.com
                <Mails className="w-5 h-5 ml-2" />
              </a>
            </div>

            <div>
              <h3 className="text-gray-400 text-sm uppercase tracking-wider mb-4">
                NEED A QUOTE OR CUSTOM PLAN?
              </h3>
              <a
                href="#"
                className="inline-flex items-center text-white hover:text-red-400 transition-colors underline"
              >
                Request a Custom Quote
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </div>
          </div>
        </div>
        {/* Form Section */}
        <div className="border-t border-gray-700 pt-12">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Column - Form Header */}
            <div>
              <h2 className="text-4xl md:text-5xl mb-6">SHOOT US A MESSAGE</h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                We're happy to create tailored solutions for your team or
                business. Shoot us a custom message
              </p>
            </div>

            {/* Right Column - Form */}
            <div>
              <div className="space-y-6">
                {/* Services Selection */}
                <div>
                  <label className="block text-gray-400 text-sm uppercase tracking-wider mb-4">
                    WHAT SERVICE ARE YOU INTERESTED IN? *
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {services.map((service) => (
                      <label
                        key={service}
                        className="flex items-center cursor-pointer"
                      >
                        <input
                          type="checkbox"
                          checked={formData.services.includes(service)}
                          onChange={() => handleServiceChange(service)}
                          className="w-5 h-5 text-red-500 bg-[#1b1b1b] border-gray-600 rounded focus:ring-red-500 focus:ring-2"
                        />
                        <span className="ml-3 text-sm text-white">
                          {service}
                        </span>
                      </label>
                    ))}
                  </div>
                  {errors.services && (
                    <p className="text-red-400 text-sm mt-2">
                      {errors.services}
                    </p>
                  )}
                </div>

                {/* Name Field */}
                <div>
                  <label className="block text-gray-400 text-sm mb-2">
                    What should we call you? *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your name"
                    className={`w-full px-4 py-3 bg-[#1b1b1b] border ${
                      errors.name ? "border-red-400" : "border-gray-600"
                    } rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-red-400 transition-colors`}
                  />
                  {errors.name && (
                    <p className="text-red-400 text-sm mt-1">{errors.name}</p>
                  )}
                </div>

                {/* Email Field */}
                <div>
                  <label className="block text-gray-400 text-sm mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="youremail@example.com"
                    className={`w-full px-4 py-3 bg-[#1b1b1b] border ${
                      errors.email ? "border-red-400" : "border-gray-600"
                    } rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-red-400 transition-colors`}
                  />
                  {errors.email && (
                    <p className="text-red-400 text-sm mt-1">{errors.email}</p>
                  )}
                </div>

                {/* Phone Field */}
                <div>
                  <label className="block text-gray-400 text-sm mb-2">
                    Phone number *
                  </label>
                  <div className="flex">
                    <select className="px-3 py-3 bg-[#1b1b1b] border border-gray-600 rounded-l-lg text-white focus:outline-none focus:border-red-400">
                      <option>US</option>
                      <option>NG</option>
                      <option>UK</option>
                    </select>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+1 (555) 000-0000"
                      className={`flex-1 px-4 py-3 bg-[#1b1b1b] border ${
                        errors.phone ? "border-red-400" : "border-gray-600"
                      } rounded-r-lg text-white placeholder-gray-400 focus:outline-none focus:border-red-400 transition-colors border-l-0`}
                    />
                  </div>
                  {errors.phone && (
                    <p className="text-red-400 text-sm mt-1">{errors.phone}</p>
                  )}
                </div>

                {/* Message Field */}
                <div>
                  <label className="block text-gray-400 text-sm mb-2">
                    Message Box *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Enter your message here"
                    rows="5"
                    className={`w-full px-4 py-3 bg-[#1b1b1b] border ${
                      errors.message ? "border-red-400" : "border-gray-600"
                    } rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-red-400 transition-colors resize-vertical`}
                  />
                  {errors.message && (
                    <p className="text-red-400 text-sm mt-1">
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="button"
                  disabled={isSubmitting}
                  onClick={handleSubmit}
                  className="w-full bg-red-500 hover:bg-red-600 disabled:bg-red-400 text-white font-semibold py-4 px-6 rounded-lg transition-colors flex items-center justify-center"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                  {!isSubmitting && <ArrowRight className="w-4 h-4 ml-2" />}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
