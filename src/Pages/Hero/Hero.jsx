import React, { useMemo } from "react";
import heroImg from "../../assets/Images/hosting.jpg";
import ionosLogo from "../../assets/Images/ionos-logo.webp";
import ultaLogo from "../../assets/Images/ultahost-logo.png";
import hostingerLogo from "../../assets/Images/hostinger-logo.png";
import HostCard from '../Hero/HeroHostCard'; //importing the updated component

const Hero = () => {
  const hostData = useMemo(
    () => [
      {
        id: 1,
        logo: ionosLogo,
        rating: 5,
        reviews: "1,856", // Added reviews here
        features: [
          "Top Security with SSL Certificates",
          "Unlimited websites",
          "30-day Money-back Guarantee",
        ],
      },
      {
        id: 2,
        logo: ultaLogo,
        rating: 3,
        reviews: "1,237",// Added reviews here
        features: [
          "Free Daily Backups",
          "High Performance Servers",
          "Free Trial – 30 Day Money Back",
        ],
      },
      {
        id: 3,
        logo: hostingerLogo,
        rating: 4.7,
        reviews:"987",// Added reviews here
        features: [
          "99.9% Uptime Guarantee",
          "Free Domain Registration",
          "risk-free 30 Days Moneyback guarantee",
        ],
      },
    ],
    []
  );

  return (
    <section className="relative bg-gradient-to-br from-teal-600 to-blue-500 text-white py-8 md:py-16 overflow-hidden">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* Text Content */}
          <div className="lg:w-1/2 mb-8 lg:mb-0">
            <span className="text-lg text-gray-300">Updated on December 7, 2024</span>
            <h1 className="text-4xl md:text-5xl font-bold mt-4 leading-tight">
              Start, grow and manage your online business
            </h1>
            <p className="text-lg mt-6">
              Experience the difference: Our expertise transforms websites into
              lucrative ventures, setting new standards for online success.
            </p>
            <button className="bg-gradient-to-br from-blue-500 to-blue-600 text-white font-semibold py-3 px-6 rounded-lg shadow-main-shadow transition duration-300 mt-4">
              Get Started Today
            </button>
          </div>

          {/* Hero Image */}
          <div className="lg:w-1/2 hidden justify-center md:flex">
            <img
              src={heroImg}
              alt="Illustration of online growth"
              className="max-w-full h-auto rounded-lg"
            />
          </div>
        </div>

        {/* Host Cards */}
        <div className="mt-5 md:mt-10 grid grid-cols-1 gap-5 md:grid-cols-3">
          {hostData.map((host) => (
            <HostCard key={host.id} {...host} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;