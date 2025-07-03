import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
export const TermsAndService = () => {
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
            <span className="text-white">Terms & Service</span>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-4xl mx-auto">
          {/* Page Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-center mb-16">
            Terms & Service
          </h1>

          {/* Content Sections */}
          <div className="space-y-12">
            {/* Acceptance of Terms */}
            <section>
              <h2 className="text-2xl sm:text-3xl font-semibold mb-6">
                Acceptance of Terms
              </h2>
              <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                By accessing or using any part of the Vephla Group platform,
                services, or affiliated sites (including Vephla Uni, Zcriptta,
                Qnduit, PprintMLx, VCNX, or Vephla Investment), you agree to be
                bound by these Terms of Service. If you do not agree, please do
                not use our services.
              </p>
            </section>

            {/* Use of Services */}
            <section>
              <h2 className="text-2xl sm:text-3xl font-semibold mb-6">
                Use of Services
              </h2>
              <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                You agree to use Vephla’s services responsibly and in accordance
                with all applicable laws. You may not use our platform to
                violate any legal regulation or to harm, disrupt, or exploit
                others.
              </p>
            </section>

            {/* User Accounts */}
            <section>
              <h2 className="text-2xl sm:text-3xl font-semibold mb-6">
                User Accounts
              </h2>
              <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                To access some services, you may be required to create an
                account. You’re responsible for maintaining the confidentiality
                of your account details and for all activities under your
                account.
              </p>
            </section>

            {/* Content Ownership */}
            <section>
              <h2 className="text-2xl sm:text-3xl font-semibold mb-6">
                Content Ownership
              </h2>
              <div className="space-y-4">
                <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                  All content provided by Vephla, including text, logos, media,
                  and, is managed by Vephla Group
                </p>
                <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                  Any content you create or upload through Vephla platforms
                  (e.g. coursework, design files, portfolios) remains yours, but
                  you grant Vephla a license to use it in connection with
                  service delivery, marketing, and internal operations.
                </p>
              </div>
            </section>

            {/* Service Limitations */}
            <section>
              <h2 className="text-2xl sm:text-3xl font-semibold mb-6">
                Service Limitations
              </h2>
              <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                We reserve the right to update, suspend, or terminate any
                service at any time. Vephla is not liable for downtime,
                third-party issues, or data loss, though we do our best to
                maintain stable services.
              </p>
            </section>
            {/* Termination */}
            <section>
              <h2 className="text-2xl sm:text-3xl font-semibold mb-6">
                Termination
              </h2>
              <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                We may suspend or terminate access if a user violates these
                terms or attempts to misuse the platform. You can also
                deactivate your account at any time by contacting our team.
              </p>
            </section>
            {/* Modification */}
            <section>
              <h2 className="text-2xl sm:text-3xl font-semibold mb-6">
                Modification
              </h2>
              <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                We may update these Terms from time to time. By continuing to
                use Vephla’s platforms, you agree to the current version posted
                here.
              </p>
            </section>
            {/* Contact */}
            <section>
              <h2 className="text-2xl sm:text-3xl font-semibold mb-6">
                Contact
              </h2>
              <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                For questions or concerns about these terms, please contact us
                at:
                <a
                  href="mailto:legal@vephlagroup.com"
                  className="text-white underline hover:text-gray-300 transition-colors duration-200"
                >
                  legal@vephlagroup.com
                </a>
              </p>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
};
