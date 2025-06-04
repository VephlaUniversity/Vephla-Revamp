import "./App.css";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Nav } from "./components/Nav";
import { FAQInterface } from "./components/FAQInterface";
import { Testimonials } from "./components/Testimonial"


function App() {
  return (
    <>
      <Nav />
      <Hero />
      <Testimonials />
      <FAQInterface />
      <Footer />
    </>
  );
}

export default App;
