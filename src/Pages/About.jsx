import React from "react";
import expert1 from '../assets/Images/expert-1.jpg'
import expert2 from '../assets/Images/expert-2.jpg'
import expert3 from '../assets/Images/expert-3.jpg'
import expert4 from '../assets/Images/expert-4.jpg'
import expert5 from '../assets/Images/expert-5.jpg'
import expert6 from '../assets/Images/expert-6.jpg'


const ExpertSection = () => {
  const experts = [
    {
      name: "Alex Johnson",
      title: "Server Hosting Expert",
      image: expert1,
      description:
        "Alex has over a decade of experience in server hosting, ensuring maximum uptime and seamless performance for businesses of all sizes. This is a longer description to test the dynamic height.",
    },
    {
      name: "Sarah Chen",
      title: "Web Hosting Specialist",
      image: expert2,
      description:
        "Sarah specializes in web hosting solutions, delivering fast and reliable hosting environments for websites and applications.",
    },
    {
      name: "David Kim",
      title: "Database Hosting Expert",
      image: expert3,
      description:
        "David is an expert in managing database hosting solutions, ensuring high availability and scalability for data-intensive applications.",
    },
    {
      name: "Emily White",
      title: "Cloud Hosting Consultant",
      image: expert4,
      description:
        "Emily helps businesses transition to the cloud with tailored hosting solutions that maximize efficiency and reduce costs.",
    },
    {
      name: "Michael Brown",
      title: "Cybersecurity Hosting Specialist",
      image: expert5,
      description:
        "Michael focuses on secure hosting solutions, protecting your data and systems from cyber threats and vulnerabilities. This is another long description to test the dynamic height.",
    },
    {
      name: "Olivia Davis",
      title: "Customer Support for Hosting",
      image: expert6,
      description:
        "Olivia leads our customer support team, ensuring that clients receive timely assistance for all their hosting-related needs.",
    },
  ];

  return (
    <section className="py-16 relative overflow-hidden">
      <div className="container mx-auto">
        <div className="mb-6 space-y-3">
          <h2 className="text-3xl font-bold">Meet Our Hosting Experts</h2>
          <p className="text-gray-700 text-base">
            At Insta Advice for Hosting, our team of skilled professionals is dedicated to
            providing top-notch hosting solutions. From servers to cybersecurity, we
            have the expertise to keep your digital presence running smoothly.
          </p>
        </div>

        <div className="p-3">
          <div className="relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {experts.map((expert, index) => (
                <div key={index} className="border bg-blue-100 shadow-main-shadow rounded-xl p-6 w-full">
                  <div className="flex justify-center items-center mb-4">
                    <div className="relative rounded-full overflow-hidden w-32 h-32">
                      <img
                        src={expert.image}
                        alt={expert.name}
                        className="object-cover w-full h-full transform hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h2 className="text-xl font-bold">{expert.name}</h2>
                    <h3 className="text-lg font-medium">{expert.title}</h3>
                    <p className="text-gray-700 text-sm">
                      {expert.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertSection;