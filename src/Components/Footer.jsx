import React from "react";
import { FaTwitter, FaGithub, FaFacebook, FaDribbble } from "react-icons/fa";
import logo from "../assets/Images/insta-logo.png";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-12">
      <div className="container mx-auto px-4">
        {/* Logo and Brand Name */}
        <div className="flex items-center mb-6 md:mb-8">
          <img src={logo} alt="" className="pr-2 w-10 h-auto md:w-12" />
          <a href="/" className="text-xl font-bold md:text-2xl">
            Insta Advice
          </a>
        </div>

        {/* Footer Content Columns */}
        <div className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Contact Column */}
            <div>
              <h4 className="font-semibold tracking-wider text-white mb-4 uppercase">
                Contact
              </h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <p>
                    <strong className="font-medium mr-1">Email:</strong>
                    <a
                      href="mailto:info@instaadvice.com"
                      className="hover:text-gray-100"
                    >
                      info@instaadvice.com
                    </a>
                  </p>
                </li>
                <li>
                  <p>
                    <strong className="font-medium mr-1">Phone:</strong>
                    <a href="tel:+15551234567" className="hover:text-gray-100">
                      +1 (555) 123-4567
                    </a>
                  </p>
                </li>
                <li>
                  <p>
                    <strong className="font-medium mr-1">Address:</strong>
                    <span className="hover:text-gray-100">
                      123 Main Street, Anytown, USA
                    </span>
                  </p>
                </li>
              </ul>
            </div>

            {/* Hosting Types Column */}
            <div>
              <h4 className="font-semibold tracking-wider text-white mb-4 uppercase">
                Hosting Types
              </h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-gray-100">
                    Web Hosting
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-100">
                    Shared Hosting
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-100">
                    WordPress Hosting
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-100">
                    Cloud Hosting
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-100">
                    VPS Hosting
                  </a>
                </li>
                 <li>
                  <a href="#" className="hover:text-gray-100">
                    Reseller Hosting
                  </a>
                </li>
              </ul>
            </div>

            {/* Resources Column */}
            <div>
              <h4 className="font-semibold tracking-wider text-white mb-4 uppercase">
                Resources
              </h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-gray-100">
                    Web Hosting Advicer
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-100">
                    Who is Hosting
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-100">
                    Plans Search
                  </a>
                </li>
                 <li>
                  <a href="#" className="hover:text-gray-100">
                    MarketShare
                  </a>
                </li>
              </ul>
            </div>

            {/* Social Media Column */}
            <div>
              <h4 className="font-semibold tracking-wider text-white mb-4 uppercase">
                Social Media
              </h4>
              <p className="mb-4 text-sm">
                Follow us on social media to find out the latest updates on our
                progress.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-gray-100">
                  <FaTwitter className="h-5 w-5" />
                </a>
                <a href="#" className="hover:text-gray-100">
                  <FaGithub className="h-5 w-5" />
                </a>
                <a href="#" className="hover:text-gray-100">
                  <FaFacebook className="h-5 w-5" />
                </a>
                <a href="#" className="hover:text-gray-100">
                  <FaDribbble className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

         {/* Separator */}
        <hr className="my-6" />

        {/* Bottom Row - Copyright & Terms */}
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <div className="text-xs mb-2 md:mb-0">
            <p>© 2025 Insta Advice. All rights reserved.</p>
          </div>
          <div className="text-xs flex items-center gap-6 md:flex-row">
            <a href="#" className="underline">
              Terms & Service
            </a>
            <a href="#" className="underline">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;