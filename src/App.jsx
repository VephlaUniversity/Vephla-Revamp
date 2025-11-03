import "./App.css";
import { Footer } from "./components/Footer";
import { Nav } from "./components/Nav";
import { Route, Routes, useLocation } from "react-router-dom";
import { ContactPage } from "./components/contact/Contact";
import { Home } from "./components/Home";
import { AnimatePresence } from "framer-motion";
import { TermsAndService } from "./components/Terms";
import { PrivacyPolicy } from "./components/Privacy";
import { About } from "./components/about/About";
import ScrollToTop from "./components/ScrollToTop";
import DesignIntern from "./components/vacancies/DesignIntern";
import OperationsIntern from "./components/vacancies/OperationsIntern";
import { Vacancies } from "./components/vacancies/Vacancies";
import SoftwareExecutive from "./components/vacancies/SoftwareExecutive";
import DataAnalyticsIntern from "./components/vacancies/DataAnalyticsIntern";
import { useEffect } from "react";
import CybersecurityExecutive from "./components/vacancies/CybersecurityExecutive";
import CybersecurityIntern from "./components/vacancies/CybersecurityIntern";

// Custom hook to set page title
function usePageTitle(title) {
  useEffect(() => {
    document.title = title;
  }, [title]);
}

function HomeWithTitle() {
  usePageTitle("The Foremost Pan-Global Innovator | Vephla Group ®");
  return <Home />;
}

function ContactWithTitle() {
  usePageTitle("Contact Us | Vephla Group ®");
  return <ContactPage />;
}

function AboutWithTitle() {
  usePageTitle("About Us | Vephla Group ®");
  return <About />;
}

function TermsWithTitle() {
  usePageTitle("Terms of Service | Vephla Group ®");
  return <TermsAndService />;
}

function PrivacyWithTitle() {
  usePageTitle("Privacy Policy | Vephla Group ®");
  return <PrivacyPolicy />;
}

function DesignInternWithTitle() {
  usePageTitle("Design & Media Internship | Vephla Group ®");
  return <DesignIntern />;
}

function OperationsInternWithTitle() {
  usePageTitle("Operations Internship | Vephla Group ®");
  return <OperationsIntern />;
}

function SoftwareExecutiveWithTitle() {
  usePageTitle("Software Engineering Executive | Vephla Group ®");
  return <SoftwareExecutive />;
}

function DataAnalyticsInternWithTitle() {
  usePageTitle("Data Analytics Internship | Vephla Group ®");
  return <DataAnalyticsIntern />;
}
function CybersecurityExecutiveWithTitle() {
  usePageTitle("Cybersecurity Executive | Vephla Group ®");
  return <CybersecurityExecutive />;
}
function CybersecurityInternWithTitle() {
  usePageTitle("Cybersecurity Internship | Vephla Group ®");
  return <CybersecurityIntern />;
}

function VacanciesWithTitle() {
  usePageTitle("Vacancies | Vephla Group ®");
  return <Vacancies />;
}

function NotFoundWithTitle() {
  usePageTitle("Page Not Found | Vephla Group ®");
  return (
    <div className="flex items-center justify-center h-screen text-gray-500">
      <h1 className="text-3xl font-bold">Page Not Found</h1>
      <button
        onClick={() => (window.location.href = "/")}
        className="ml-4 px-4 py-2 bg-red-500 hover:bg-red-700 text-white rounded transition-colors"
      >
        Go to Homepage
      </button>
    </div>
  );
}

function App() {
  const location = useLocation();
  const hideFooterPaths = ["/contact"];
  const hideFooter = hideFooterPaths.includes(location.pathname);

  return (
    <>
      <ScrollToTop />
      <Nav />
      <div className="app-container">
        <AnimatePresence exitBeforeEnter>
          <Routes key={location.pathname} location={location}>
            <Route index element={<HomeWithTitle />} />
            <Route path="/contact" element={<ContactWithTitle />} />
            <Route path="/about" element={<AboutWithTitle />} />
            <Route path="/terms" element={<TermsWithTitle />} />
            <Route path="/privacy" element={<PrivacyWithTitle />} />
            <Route
              path="/design-media-internship"
              element={<DesignInternWithTitle />}
            />
            <Route
              path="/operations-internship"
              element={<OperationsInternWithTitle />}
            />
            <Route
              path="/software-engineering-executive"
              element={<SoftwareExecutiveWithTitle />}
            />
            <Route
              path="/data-analytics-internship"
              element={<DataAnalyticsInternWithTitle />}
            />
            <Route
              path="/cybersecurity-executive"
              element={<CybersecurityExecutiveWithTitle />}
            />
            <Route
              path="/cybersecurity-internship"
              element={<CybersecurityInternWithTitle />}
            />
            <Route path="/vacancies" element={<VacanciesWithTitle />} />
            <Route path="*" element={<NotFoundWithTitle />} />
          </Routes>
        </AnimatePresence>
      </div>
      {!hideFooter && <Footer />}
    </>
  );
}

export default App;
