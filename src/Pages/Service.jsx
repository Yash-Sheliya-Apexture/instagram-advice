import React from "react";
import img1 from '../assets/Images/1.png'
import img2 from '../assets/Images/2.png'
import img3 from '../assets/Images/3.png'
import img4 from '../assets/Images/4.png'
import img5 from '../assets/Images/5.png'
import img6 from '../assets/Images/6.png'


const ServiceCard = ({ title, description, icon }) => {
    return (
      <div className="rounded-xl p-6  flex flex-col items-start space-y-4 transition-shadow duration-300 shadow-main-shadow bg-white">
        <div className="flex items-center justify-center w-16 h-16 rounded-xl bg-secondary-100 mb-4">
           <img src={icon} alt="" className="w-14 h-14"/>
        </div>
        <h3 className="text-2xl font-semibold text-gray-800">{title}</h3>
        <p className="text-light-gray text-justify text-base">{description}</p>
      </div>
    );
  };

const ServiceSection = () => {
    const services = [
        {
          title: '100% Real Followers',
          description:
            'Say goodbye to fake followers and bots. We guarantee that all your new followers are authentic, engaged, and genuinely interested in your content.',
            icon:  img1
    
        },
        {
          title: '24/7 Automatic Growth',
          description:
            'Enjoy round-the-clock Instagram growth and engagement without lifting a finger. Our system works for you 24 hours a day - unlike a full time employee.',
            icon: img2
    
        },
        {
          title: 'Safe & Secure',
          description:
            "UpGrow is fully Instagram-compliant. Since 2016, we've helped our users gain millions of followers organically. It's safe and works for everyone.",
            icon: img3
    
        },
        {
          title: 'Active & Engaging Followers',
          description:
            "It's quantity + quality. UpGrow only attracts active and engaged followers who are eager to interact with your IG posts & stories.",
            icon: img4,
    
        },
        {
          title: 'Smart Al-Targeting',
          description:
            'Let our Al attract more followers based on your filters: location, age, gender, language, interests, hashtags - or let our Al do it automatically for you.',
            icon: img5
        },
        {
          title: 'Save time, save money',
          description:
            'UpGrow replaces a full social media marketing team. Focus on what matters for your business and let us build your Instagram following - automagically!',
            icon: img6,
        },
      ];
  return (
    <section className="Service py-12 relative overflow-hidden">
      {/* <div className="absolute inset-0 bg-gradient-to-br from-[#833ab4] via-[#fd1d1d] to-[#fcb045] opacity-30  pointer-events-none"></div> */}
    <div className="container mx-auto relative z-10">
      <div className="bg-gradient-to-br from-[#833ab479] via-[#fd1d1d74] to-[#fcb045ac]  rounded-3xl  p-14  shadow-xl">
      <div className="mb-12 text-center">
        <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
          Why Choose Insta Advice ?
        </h2>
        <div className=" flex flex-col mt-4">
            <p className="text-2xl sm:text-4xl font-semibold text-light-gray">
              Grow your Instagram account. <br />
              No bots. No spam. No gimmicks.
            </p>
            <p className="max-w-3xl mx-auto mt-4 text-light-gray text-base font-medium">
              Insta Advice uses powerful AI models, 1M+ proven growth patterns,
              paid advertising, micro-interactions and real-human magic to
              bring you next-gen social media growth.
            </p>
        </div>
      </div>
      <div className="grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
      </div>
    </div>
    </section>
  );
};

export default ServiceSection;