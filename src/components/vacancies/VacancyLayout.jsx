import { Link } from "react-router-dom";
import { AnimatedPage } from "../../AnimatedPage";

const ArticleLayout = ({
  title,
  heroImage,
  children,
  breadcrumbs = [{ label: "Homepage", href: "/" }, { label: "Vacancies" }],
}) => {
  return (
    <AnimatedPage>
      <div className="min-h-screen bg-background mt-24">
        {/* Navigation Breadcrumbs */}
        <nav className="pt-8 pb-4 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center space-x-2 text-sm text-gray-400">
              {breadcrumbs.map((crumb, index) => (
                <div key={index} className="flex items-center justify-center">
                  <Link
                    to={crumb.href}
                    className="hover:text-white transition-colors underline"
                  >
                    {crumb.label}
                  </Link>
                  {index < breadcrumbs.length - 1 && (
                    <span className="mx-2">›</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <header className="px-6 pb-12">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              {title}
            </h1>
          </div>
        </header>

        {/* Hero Image */}
        <div className="px-6 mb-16">
          <div className="max-w-5xl mx-auto">
            <div className="relative rounded-2xl overflow-hidden bg-gray-800">
              <img
                src={heroImage}
                alt={title}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>

        {/* Article Content */}
        <main className="px-6 pb-20">
          <div className="max-w-4xl mx-auto">
            <article className="prose prose-lg prose-invert max-w-none">
              {children}
            </article>
          </div>
        </main>
      </div>
    </AnimatedPage>
  );
};

export default ArticleLayout;
