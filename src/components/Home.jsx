import { FAQInterface } from "./home/FAQInterface";
import { Hero } from "./home/Hero";
import { LogoSlider } from "./home/Slider";
import { Solutions } from "./home/Solutions";
import { StatsSection } from "./home/Stat";
import { Testimonials } from "./home/Testimonial";

export const Home = () => {
  return (
    <>
      <Hero />
      <LogoSlider />
      <StatsSection />
      <Solutions />
      <Testimonials />
      <FAQInterface />
    </>
  );
};
