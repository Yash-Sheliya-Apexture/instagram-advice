import React from "react";
import img1 from "../assets/Images/feature-img.jpg";
import img2 from "../assets/Images/feature-img-2.jpg";

const FeatureSection = () => {
  return (
    <div className="bg-gray-900 py-12 relative">
      <div className="container mx-auto px-4 relative z-10">
        {/* First Row: Image on Left, Content on Right */}
        <div className="flex flex-col tablet:flex-row items-start tablet:items-center mb-12">
          <div className="relative rounded-xl overflow-hidden mb-6 tablet:mb-0 tablet:mr-6 w-full tablet:w-1/2">
            <img
              src={img1}
              alt="People chatting"
              className="w-full h-[450px] object-cover object-center rounded-3xl"
            />
          </div>
          <div className="flex-1 text-white">
            <h2 className="text-4xl font-bold mb-4 leading-tight">
              Instagram Growth, Powered By Real People
            </h2>
            <p className="mb-6 leading-relaxed">
              It's time to let social media experts handle your Instagram
              growth. Get 100% real and targeted Instagram followers with your
              new Personal Growth Assistant.
            </p>
            <button className="bg-gradient-to-br from-blue-500 to-blue-600 text-white py-4 px-6 rounded-md transition duration-300 ease-in-out text-sm font-medium">
              Learn More
            </button>
          </div>
        </div>

        {/* Second Row: Content on Left, Image on Right */}
        <div className="flex flex-col items-start tablet:items-center tablet:flex-row-reverse">
          <div className="relative rounded-xl overflow-hidden mb-6 tablet:mb-0 tablet:ml-6 w-full tablet:w-1/2">
            <img
              src={img2}
              alt="People walking in forest"
              className="w-full h-[450px] object-cover object-center rounded-3xl"
            />
          </div>
          <div className="flex-1 text-white">
            <h2 className="text-3xl font-bold mb-4 leading-tight">
              We'll Help You Find Your Real Fans On Instagram
            </h2>
            <p className="mb-6 leading-relaxed">
              There's no Instagram account that we can't grow! We'll help you
              find a real, targeted audience. Any niche. Any country. Any
              language. Any account.
            </p>
            <button className="bg-gradient-to-br from-blue-500 to-blue-600 text-white py-4 px-6 rounded-md transition duration-300 ease-in-out text-sm font-medium">
              Start Your Free Trial
            </button>
          </div>
        </div>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-gray-500 to-transparent"></div>
        <div className="absolute top-0 left-0 right-0 h-1/3 bg-gradient-to-b from-gray-800 to-transparent"></div>       
      </div>
    </div>
  );
};

export default FeatureSection;