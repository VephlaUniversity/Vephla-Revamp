import "./App.css";
import { Footer } from "./components/Footer";
import { Nav } from "./components/Nav";
import { Route, Routes, useLocation } from "react-router-dom";
import { ContactPage } from "./components/contact/Contact";
import { Home } from "./components/Home";

function App() {
  const location = useLocation();
  const hideFooter = location.pathname === "/contact";

  return (
    <>
      <Nav />
      <Routes>
        <Route path="/contact" element={<ContactPage />}></Route>
        <Route path="/" element={<Home />}></Route>
      </Routes>
      {!hideFooter && <Footer />}
    </>
  );
}

export default App;
