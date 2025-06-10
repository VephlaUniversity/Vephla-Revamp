import "./App.css";
import { Footer } from "./components/Footer";
import { Nav } from "./components/Nav";
import { Route, Routes, useLocation } from "react-router-dom";
import { ContactPage } from "./components/contact/Contact";
import { Home } from "./components/Home";
import { PrintMLX } from "./components/solutionPages/PrintMLX";
import { Lurner } from "./components/solutionPages/Lurner";
import { SoftwareSolution } from "./components/solutionPages/SoftwareSolution";
import { VephlaUni } from "./components/solutionPages/VephlaUni";
import { Energy } from "./components/solutionPages/Energy";
import { Weblog } from "./components/solutionPages/Weblog";
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();
  const hideFooterPaths = [
    "/contact",
    "/printmlx",
    "/lurner",
    "/vephlauni",
    "/weblog",
    "/solution",
    "/energy",
    "/insource expertise",
    "/talent pipeline",
    "/tech community",
  ];
  const hideFooter = hideFooterPaths.includes(location.pathname);

  return (
    <>
      <Nav />
      <div className="app-container">
        <AnimatePresence exitBeforeEnter>
          <Routes key={location.pathname} location={location}>
            <Route index element={<Home />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/printmlx" element={<PrintMLX />} />
            <Route path="/lurner" element={<Lurner />} />
            <Route path="/solution" element={<SoftwareSolution />} />
            <Route path="/vephlauni" element={<VephlaUni />} />
            <Route path="/energy" element={<Energy />} />
            <Route path="/weblog" element={<Weblog />} />
          </Routes>
        </AnimatePresence>
      </div>
      {!hideFooter && <Footer />}
    </>
  );
}
export default App;
