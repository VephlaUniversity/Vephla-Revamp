import "./App.css";
import { Footer } from "./components/Footer";
import { Nav } from "./components/Nav";
import { Route, Routes, useLocation } from "react-router-dom";
import { ContactPage } from "./components/contact/Contact";
import { Home } from "./components/Home";
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();
  const hideFooterPaths = ["/contact"];
  const hideFooter = hideFooterPaths.includes(location.pathname);

  return (
    <>
      <Nav />
      <div className="app-container">
        <AnimatePresence exitBeforeEnter>
          <Routes key={location.pathname} location={location}>
            <Route index element={<Home />} />
            <Route path="/contact" element={<ContactPage />} />
            {/* Catch-all for 404 */}
            <Route
              path="*"
              element={
                <div className="flex items-center justify-center h-screen text-gray-500">
                  <h1 className="text-3xl font-bold">Page Not Found</h1>
                  <button
                    onClick={() => (window.location.href = "/")}
                    className="ml-4 px-4 py-2 bg-red-500 hover:bg-red-700 text-white rounded transition-colors"
                  >
                    Go to Homepage
                  </button>
                </div>
              }
            />
          </Routes>
        </AnimatePresence>
      </div>
      {!hideFooter && <Footer />}
    </>
  );
}
export default App;
