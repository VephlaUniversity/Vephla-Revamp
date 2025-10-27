import VacancyLayout from "./VacancyLayout";

const SoftwareExecutive = () => {
  const breadcrumbs = [
    { label: "Homepage", href: "/" },
    { label: "Vacancies", href: "/vacancies" },
  ];

  return (
    <VacancyLayout
      title="Software Engineering Executive (Full Stack)"
      heroImage="/images/software.jpg"
      breadcrumbs={breadcrumbs}
    >
      <section className="mb-12">
        <div className="mb-6">
          <p className="text-gray-300 text-lg leading-relaxed mb-2">
            <span className="font-semibold text-white">Role:</span> Software
            Engineering Executive (Full Stack)
          </p>
          <p className="text-gray-300 text-lg leading-relaxed mb-2">
            <span className="font-semibold text-white">Employment Type:</span>{" "}
            Permanent, Full Time
          </p>
          <p className="text-gray-300 text-lg leading-relaxed">
            <span className="font-semibold text-white">Location:</span> Remote,
            Vephla Group
          </p>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-white mb-6">Overview</h2>
        <p className="text-gray-300 text-lg leading-relaxed">
          We are recruiting a highly driven Software Engineering Executive to
          join the engineering leadership track at Vephla Group. You will work
          on high impact systems across our conglomerate, partner closely with
          product and design teams, and help shape our interns and next
          generation engineers. This role involves building modern web and
          mobile products, improving internal platforms, and contributing to
          scalable architectures that serve both commercial and educational
          operations across Vephla Group.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-white mb-6">
          What you will do, key responsibilities
        </h2>
        <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
          <p>
            • Build and maintain full stack applications across multiple Vephla
            Group products, from frontend features to backend services,
          </p>
          <p>
            • Collaborate with UI and UX teams to translate designs into well
            structured, performant, and accessible production code,
          </p>
          <p>
            • Support engineering interns by providing code reviews, debugging
            guidance, walkthroughs of best practices, and deployment support,
          </p>
          <p>
            • Lead feature development on key projects, plan technical tasks,
            and ensure seamless integration with existing systems,
          </p>
          <p>
            • Work with DevOps practices including version control, build and
            release pipelines, and cloud deployment,
          </p>
          <p>
            • Write clean, modular, well documented code, maintain adherence to
            coding standards, and actively contribute to our engineering
            guidelines,
          </p>
          <p>
            • Participate in regular product and engineering reviews, identify
            improvements, and implement solutions that scale,
          </p>
          <p>
            • Support mobile application development efforts when needed,
            particularly using React Native and Expo,
          </p>
          <p>
            • Research new technologies, propose adoptable solutions, and
            contribute to a culture of continuous innovation.
          </p>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-white mb-6">
          Required skills and attributes, must have
        </h2>
        <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
          <p>
            • Strong foundation in full stack engineering, able to build both
            client side and server side features end to end,
          </p>
          <p>
            • Clear communication, willingness to teach less experienced
            engineers, and ability to break down complex concepts,
          </p>
          <p>
            • Ability to design and consume APIs, integrate authentication,
            optimize data flows, and debug complex issues,
          </p>
          <p>
            • Organized, reliable, proactive attitude, able to manage workloads
            and deliver to timelines,
          </p>
          <p>
            • Comfort working in cross functional teams where design,
            engineering, and operations collaborate daily,
          </p>
          <p>
            • Passion for learning, mentoring, and professional growth within a
            fast paced technology environment.
          </p>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-white mb-6">
          Preferred Technical Skills and Tools
        </h2>
        <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
          <p>• Strong programming skills using JavaScript and Typescript,</p>
          <p>• Frontend framework proficiency, including React and Next.js,</p>
          <p>• Backend development experience using Node.js with Express.js,</p>
          <p>
            • Database management and integration using MongoDB or Firebase,
          </p>
          <p>
            • State management familiarity such as Zustand or similar libraries,
          </p>
          <p>• Modern styling tools including Tailwind CSS and Bootstrap,</p>
          <p>
            • Version control using Git, comfort working with feature branches
            and pull requests,
          </p>
          <p>• Deployment experience with Vercel, Netlify, or AWS services,</p>
          <p>• Familiarity with build tools and bundlers such as Vite,</p>
          <p>
            • Good understanding of mobile development concepts, React Native or
            Expo experience is a plus.
          </p>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-white mb-6">
          Additional pluses
        </h2>
        <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
          <p>• Hands on mobile development experience,</p>
          <p>
            • Understanding of performance tuning, security basics, and scalable
            architectural patterns,
          </p>
          <p>
            • Python experience for automation and backend scripting is an
            advantage.
          </p>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-white mb-6">
          Experience and preferred background
        </h2>
        <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
          <p>
            • Minimum one to three years of professional engineering experience
            or demonstrable equivalent expertise through substantial projects,
          </p>
          <p>
            • Strong portfolio of shipped products or personal projects hosted
            publicly on Git platforms or deployed environments,
          </p>
          <p>
            • Experience working within agile practices or rapid development
            cycles.
          </p>
        </div>
      </section>

      <section className="mb-12">
        <div className="glass-card p-8 rounded-2xl">
          <h2 className="text-3xl font-bold text-white mb-6">
            Growth progression
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            Joining as a Software Engineering Executive places you within our
            Executive career chain. Successful performance unlocks opportunities
            to progress into Senior Executive roles where you will lead larger
            engineering initiatives and influence technology direction across
            the group.
          </p>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-white mb-6">How to apply</h2>
        <p className="text-gray-300 text-lg leading-relaxed mb-8">
          Please apply via our Careers Portal or send your CV, GitHub link, and
          portfolio to{" "}
          <a
            href="mailto:careers@vephlagroup.com"
            className="text-red-400 hover:text-red-300 underline"
          >
            careers@vephlagroup.com
          </a>
          . Use the role title as your subject. Shortlisted applicants will be
          invited to a technical interview and practical assessment.
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

export default SoftwareExecutive;
