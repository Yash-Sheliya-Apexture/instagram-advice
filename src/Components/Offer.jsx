import React from "react";
import banner from "../assets/Images/banner.jpg";

const OfferSection = () => {
  return (
    <section className="Offer-banner py-12 overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        <div className="bg-gradient-to-t from-sky-300 to-sky-600 rounded-3xl overflow-hidden shadow-xl">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
            <div className="overflow-hidden lg:w-auto w-full">
              <img
                src={banner}
                alt="Summer Sale with huge discount"
                className="w-full h-auto object-cover object-center hover:scale-105 transform transition-transform duration-300"
                loading="lazy"
              />
            </div>

            <div className="text-center md:text-left p-4">
            <h3 className="text-3xl font-extrabold text-white mb-4 md:text-4xl leading-tight tracking-tight drop-shadow-md">
              <span className="block">Grab Your</span>
              <span className="block">Coupons Today!</span>
            </h3>

              <p className="text-white mb-6 md:text-lg font-medium drop-shadow-sm">
                Don't miss out on HUGE savings! This incredible offer is valid
                for today only. Exclusive Offers for Hostadvice Customers Act
                Fast.
              </p>
              <p className="text-2xl font-bold text-white mb-4 md:text-3xl drop-shadow-md">
                Up to <span className="text-yellow-300">90% Discount!</span>
              </p>

              <button
              aria-label="claim your discount now"
                className="inline-block bg-gradient-to-br from-blue-500 to-blue-600 text-white py-3 px-6 rounded-lg font-medium overflow-hidden  transition-all duration-300 hover:scale-105 focus:scale-105 focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
              >
                <span>Claim Your Offer Now</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfferSection;