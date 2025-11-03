import VacancyLayout from "./VacancyLayout";

const CybersecurityIntern = () => {
  const breadcrumbs = [
    { label: "Homepage", href: "/" },
    { label: "Vacancies", href: "/vacancies" },
  ];

  return (
    <VacancyLayout
      title="Cybersecurity Intern"
      heroImage="/images/cyber-2.jpg"
      breadcrumbs={breadcrumbs}
    >
      <section className="mb-12">
        <div className="mb-6">
          <p className="text-gray-300 text-lg leading-relaxed mb-2">
            <span className="font-semibold text-white">Role:</span>{" "}
            Cybersecurity Intern
          </p>
          <p className="text-gray-300 text-lg leading-relaxed mb-2">
            <span className="font-semibold text-white">Fixed Employment:</span>{" "}
            10 month paid Internship
          </p>
          <p className="text-gray-300 text-lg leading-relaxed">
            <span className="font-semibold text-white">Type:</span> Remote,
            Vephla Group
          </p>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-white mb-6">Overview</h2>
        <p className="text-gray-300 text-lg leading-relaxed">
          We are recruiting a Cybersecurity Intern for a structured 10 month
          internship at Vephla Group. You will work with our cybersecurity team
          to strengthen system security, support vulnerability scanning and
          monitoring workflows, and assist in day to day defensive security
          activities across our organisation. This role builds real world cyber
          operational skills and gives exposure to enterprise security tooling
          and practices.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-white mb-6">
          Key Responsibilities
        </h2>
        <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
          <p>• Monitor systems and logs for potential security alerts,</p>
          <p>• Assist in basic vulnerability assessments and reporting,</p>
          <p>
            • Support identity access reviews and security configuration checks,
          </p>
          <p>• Help maintain security documentation and tracking files,</p>
          <p>• Assist in system hardening practices and patch tracking,</p>
          <p>
            • Participate in internal security awareness and compliance
            initiatives,
          </p>
          <p>
            • Perform guided research on emerging threats and security trends,
          </p>
          <p>
            • Collaborate with engineering and IT teams when security tasks
            arise.
          </p>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-white mb-6">
          Required Skills and Attributes
        </h2>
        <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
          <p>
            • Enthusiasm for cybersecurity, security tooling, and system
            protection,
          </p>
          <p>
            • Basic understanding of networks, operating systems, and
            authentication concepts,
          </p>
          <p>• Familiarity with Linux and Windows usage,</p>
          <p>
            • Ability to follow structured security procedures and document
            findings,
          </p>
          <p>
            • Strong attention to detail, analytical mindset, and good
            communication,
          </p>
          <p>
            • Responsible handling of sensitive information and system access,
          </p>
          <p>
            • Willingness to learn, take feedback, and develop new skills
            quickly.
          </p>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-white mb-6">
          Preferred Technical Skills and Learning Areas
        </h2>
        <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
          <p>• Networking fundamentals and OSI model basics,</p>
          <p>
            • Knowledge of common attack methods such as phishing and malware
            types,
          </p>
          <p>
            • Introduction to encryption concepts, certificates, and secure
            communication,
          </p>
          <p>
            • Awareness of secure configuration, patching, and access control
            practices,
          </p>
          <p>• Familiarity with cloud platform concepts is a plus.</p>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-white mb-6">
          Tools Familiarity
        </h2>
        <p className="text-gray-300 text-lg leading-relaxed mb-6">
          Exposure or willingness to learn tools such as:
        </p>
        <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
          <p>• Burp Suite or OWASP ZAP for web testing,</p>
          <p>• Nmap for network scanning,</p>
          <p>• Wireshark or tcpdump for packet analysis,</p>
          <p>
            • SIEM or log monitoring platforms such as Splunk or Microsoft
            Sentinel,
          </p>
          <p>• Antivirus and EDR tools,</p>
          <p>• Linux command line basics,</p>
          <p>• Git version control basics,</p>
          <p>• Python or Bash for basic automation or scripting tasks.</p>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-white mb-6">
          Experience and Background
        </h2>
        <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
          <p>
            • Completion of cyber labs, Capture the Flag practice, or personal
            projects is a plus,
          </p>
          <p>
            • Any certification learning path such as Security Plus or similar
            is helpful but not required.
          </p>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-white mb-6">
          What you will learn, growth opportunities
        </h2>
        <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
          <p>• Hands on cybersecurity workflow experience,</p>
          <p>
            • Practical system hardening and vulnerability management exposure,
          </p>
          <p>• Threat detection and monitoring fundamentals,</p>
          <p>• Cloud and network security foundations,</p>
          <p>• Professional documentation and reporting discipline,</p>
          <p>• Direct mentorship from cybersecurity and engineering teams.</p>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-white mb-6">
          Duration and Working Pattern
        </h2>
        <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
          <p>• Fixed term, 10 months.</p>
          <p>• Remote internship with collaborative work schedules.</p>
        </div>
      </section>

      <section className="mb-12">
        <div className="glass-card p-8 rounded-2xl">
          <h2 className="text-3xl font-bold text-white mb-6">
            Growth Progression
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            Successful interns gain eligibility for the Cybersecurity Executive
            track at Vephla Group, progressing into higher responsibility roles
            in network security, cloud security, and incident response.
          </p>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-white mb-6">How to apply</h2>
        <p className="text-gray-300 text-lg leading-relaxed mb-8">
          Please apply using the Apply button on our Careers Portal or send an
          interest mail with your CV and dashboard samples to{" "}
          <a
            href="mailto:careers@vephlagroup.com"
            className="text-red-400 hover:text-red-300 underline"
          >
            careers@vephlagroup.com
          </a>
          . Include the role title as your subject. Shortlisted applicants will
          attend a skills review and interview with the analytics team.
        </p>

        <div className="flex justify-center">
          <a
            href="http://careers.vephla.com"
            target="_blank"
            className="bg-red-500 hover:bg-red-600 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300"
          >
            Apply Now
          </a>
        </div>
      </section>
    </VacancyLayout>
  );
};

export default CybersecurityIntern;
