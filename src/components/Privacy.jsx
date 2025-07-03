import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

export const PrivacyPolicy = () => {
  return (
    <div className="pt-20 min-h-screen bg-[#0d0d0d] text-white">
      {/* Navigation Breadcrumb */}
      <nav className="px-4 sm:px-6 lg:px-8 pt-8 pb-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center space-x-2 text-sm text-gray-400">
            <Link
              to="/"
              className="hover:text-white transition-colors duration-200"
            >
              Homepage
            </Link>
            <ChevronRight size={16} />
            <span className="text-white">Privacy Policy</span>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-4xl mx-auto">
          {/* Page Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-center mb-16">
            Privacy Policy
          </h1>

          {/* Content Sections */}
          <div className="space-y-12">
            {/* Information We Collect */}
            <section>
              <h2 className="text-2xl sm:text-3xl font-semibold mb-6">
                Information We Collect
              </h2>
              <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-6">
                We collect limited personal information when you use Vephla
                services. This may include:
              </p>
              <ul className="space-y-3 text-gray-300 text-base md:text-lg leading-relaxed ml-6">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-gray-400 rounded-full mt-3 mr-4 flex-shrink-0"></span>
                  Your name, email address, and contact details
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-gray-400 rounded-full mt-3 mr-4 flex-shrink-0"></span>
                  Usage data, such as pages visited, activity logs, and
                  device/browser types
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-gray-400 rounded-full mt-3 mr-4 flex-shrink-0"></span>
                  Optional profile information for job seekers or students (e.g.
                  resume, skills, career interests)
                </li>
              </ul>
              <p className="text-gray-300 text-base md:text-lg leading-relaxed mt-6">
                We do not collect sensitive data such as financial info, unless
                directly involved in a job, payment, or enrollment transaction.
              </p>
            </section>

            {/* How We Use Your Data */}
            <section>
              <h2 className="text-2xl sm:text-3xl font-semibold mb-6">
                How We Use Your Data
              </h2>
              <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-6">
                We use your data to:
              </p>
              <ul className="space-y-3 text-gray-300 text-base md:text-lg leading-relaxed ml-6">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-gray-400 rounded-full mt-3 mr-4 flex-shrink-0"></span>
                  Deliver services across Vephla platforms
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-gray-400 rounded-full mt-3 mr-4 flex-shrink-0"></span>
                  Communicate with you (e.g. updates, newsletters,
                  opportunities)
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-gray-400 rounded-full mt-3 mr-4 flex-shrink-0"></span>
                  Match you to relevant jobs, training, or projects
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-gray-400 rounded-full mt-3 mr-4 flex-shrink-0"></span>
                  Improve and personalize your experience
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-gray-400 rounded-full mt-3 mr-4 flex-shrink-0"></span>
                  Comply with legal or regulatory requirements
                </li>
              </ul>
            </section>

            {/* Who Has Access */}
            <section>
              <h2 className="text-2xl sm:text-3xl font-semibold mb-6">
                Who Has Access
              </h2>
              <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                Your information is never sold. It may be shared with trusted
                partners or instructors when required to deliver specific
                services (e.g. job matching, mentorship, printing delivery). All
                such partners are bound by confidentiality.
              </p>
            </section>

            {/* Cookies */}
            <section>
              <h2 className="text-2xl sm:text-3xl font-semibold mb-6">
                Cookies
              </h2>
              <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                We use cookies to enhance user experience, remember preferences,
                and gather analytics. You can disable cookies in your browser
                settings.
              </p>
            </section>

            {/* Data Retention */}
            <section>
              <h2 className="text-2xl sm:text-3xl font-semibold mb-6">
                Data Retention
              </h2>
              <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                We keep your data only as long as it's needed to provide you
                services. You can request deletion or access to your stored data
                at any time by emailing{" "}
                <a
                  href="mailto:privacy@vephlagroup.com"
                  className="text-white underline hover:text-gray-300 transition-colors duration-200"
                >
                  privacy@vephlagroup.com
                </a>
                .
              </p>
            </section>

            {/* Security */}
            <section>
              <h2 className="text-2xl sm:text-3xl font-semibold mb-6">
                Security
              </h2>
              <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                We take data protection seriously and use modern security
                measures to safeguard your information. However, no system is
                100% secure. You have the right to access, update, or delete
                your personal data. You can also opt out of communications at
                any time.
              </p>
            </section>

            {/* Contact */}
            <section>
              <h2 className="text-2xl sm:text-3xl font-semibold mb-6">
                Contact
              </h2>
              <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                For any privacy concerns, please email:{" "}
                <a
                  href="mailto:privacy@vephlagroup.com"
                  className="text-white underline hover:text-gray-300 transition-colors duration-200"
                >
                  privacy@vephlagroup.com
                </a>
              </p>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
};
