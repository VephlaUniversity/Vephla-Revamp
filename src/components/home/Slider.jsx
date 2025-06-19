import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const LogoSlider = () => {
  // Top row logos
  const topLogos = [
    "/images/1.png",
    "/images/2.png",
    "/images/3.png",
    "/images/4.png",
    "/images/5.png",
    "/images/6.png",
    "/images/7.png",
    "/images/8.png",
  ];

  // Bottom row logos
  const bottomLogos = [
    "/images/8.png",
    "/images/7.png",
    "/images/6.png",
    "/images/5.png",
    "/images/4.png",
    "/images/3.png",
    "/images/2.png",
    "/images/1.png",
  ];

  // Settings for the top slider (left to right)
  const topSliderSettings = {
    dots: false,
    infinite: true,
    speed: 3000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    arrows: false,
    pauseOnHover: false,
    pauseOnFocus: false,
    rtl: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  // Settings for the bottom slider (right to left)
  const bottomSliderSettings = {
    dots: false,
    infinite: true,
    speed: 3000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    arrows: false,
    pauseOnHover: false,
    pauseOnFocus: false,
    rtl: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const LogoCard = ({ logoPath, alt }) => (
    <div className="px-3">
      <div className="w-72 h-28 bg-gray-700/40 rounded-xl flex items-center justify-center border border-gray-700 hover:bg-gray-800/10 transition-all duration-300">
        <img
          src={logoPath}
          alt={alt}
          className="max-w-[180px] max-h-[70px] object-contain brightness-90 hover:brightness-100 transition-all duration-300"
        />
      </div>
    </div>
  );

  return (
    <div className=" bg-[#0d0d0d] py-20 px-6">
      <div className="mb-4">
        <Slider {...topSliderSettings}>
          {/* Duplicate logos for seamless infinite scroll */}
          {[...topLogos, ...topLogos].map((logo, index) => (
            <LogoCard
              key={`top-${index}`}
              logoPath={logo}
              alt={`Top Logo ${(index % topLogos.length) + 1}`}
            />
          ))}
        </Slider>
      </div>
      <div>
        <Slider {...bottomSliderSettings}>
          {/* Duplicate logos for seamless infinite scroll */}
          {[...bottomLogos, ...bottomLogos].map((logo, index) => (
            <LogoCard
              key={`bottom-${index}`}
              logoPath={logo}
              alt={`Bottom Logo ${(index % bottomLogos.length) + 1}`}
            />
          ))}
        </Slider>
      </div>
    </div>
  );
};
