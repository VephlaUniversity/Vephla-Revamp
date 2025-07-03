import { BatchSlider } from "./BatchSlider";
import { AboutHero } from "./AboutHero";
import { LogoSlider } from "../home/Slider";

export const About = () => {
  return (
    <div className="bg-[#0d0d0d]">
      <AboutHero />
      <BatchSlider />
      <LogoSlider />
    </div>
  );
};
