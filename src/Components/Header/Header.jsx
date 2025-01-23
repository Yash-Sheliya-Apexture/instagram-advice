// import React, { useState, useCallback, useEffect } from "react";
// import NavDropdown from "../Header/NavDropdown";
// import SearchBar from "../Header/SearchBar";
// import { FiMenu, FiX } from "react-icons/fi";
// import logo from '../../assets/Images/insta-logo.png'

// const Header = () => {
//     const navLinks = [
//         {
//             label: "Hosting types",
//             dropdownItems: [
//                 { label: "Web Hosting" },
//                 { label: "Shared Hosting" },
//                 { label: "WordPress Hosting", tag: "Trendy" },
//                 { label: "Cloud Hosting" },
//                 { label: "VPS Hosting", tag: "Hot" },
//                 { label: "Dedicated Servers" },
//                 { label: "Cheap VPS", tag: "Popular" },
//                 { label: "Reseller Hosting" },
//                 { label: "Website Builders" },
//                 { label: "Cheap Web Hosting" },
//                 { label: "Offshore Hosting" },
//             ],
//         },
//         {
//             label: "Reviews",
//             dropdownItems: [
//                 { label: "Hostinger", tag: "Best Overall" },
//                 { label: "Ultahost" },
//                 { label: "HostArmada", tag: "Most Affordable" },
//                 { label: "FastComet" },
//                 { label: "Webdock", tag: "Best VPS Hosting" },
//                 { label: "Kamatera" },
//                 { label: "IONOS" },
//                 { label: "Verpex Hosting" },
//                 { label: "InterServer", tag: "Best Value" },
//                 { label: "ChemiCloud" },
//                 { label: "A2 Hosting" },
//             ],
//         },
//         {
//             label: "Comparison",
//             dropdownItems: [
//                 { label: "Hostinger vs IONOS", tag: "Most searched" },
//                 { label: "Hostinger vs A2 Hosting" },
//                 { label: "HostGator vs A2 Hosting", tag: "Trendy" },
//                 { label: "Hostinger vs HostGator" },
//                 { label: "Hostinger vs Bluehost" },
//                 { label: "IONOS vs FastComet" },
//                 { label: "GoDaddy vs Ultahost" },
//                 { label: "Bluehost vs IONOS" },
//             ],
//         },
//         {
//             label: "Resources",
//             dropdownItems: [
//                 { label: "Web Hosting Advisor", tag: "Hot" },
//                 { label: "Who is Hosting?" },
//                 { label: "MarketShare" },
//                 { label: "Plans Search", tag: "Trendy" },
//                 { label: "Articles and Blogs", link: true },
//             ],
//         },
//         {
//             label: "Hosting Coupons",
//             dropdownItems: [
//                 { label: "Kamatera coupon codes", tag: "Hot" },
//                 { label: "Hostinger coupon codes" },
//                 { label: "Verpex Hosting coupon codes" },
//                 { label: "HostArmada coupon codes" },
//                 { label: "Ultahost coupon codes" },
//             ],
//         },
//     ];
//     const [openDropdown, setOpenDropdown] = useState(null);
//     const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//     // Use useCallback to memoize the function, preventing unnecessary re-renders
//     const toggleMobileMenu = useCallback(() => {
//         setIsMobileMenuOpen((prev) => !prev);
//         if (isMobileMenuOpen)
//             setOpenDropdown(null)
//     }, [isMobileMenuOpen]);

//     // Use useCallback to memoize the function, preventing unnecessary re-renders
//     const closeMobileMenu = useCallback(() => {
//         setIsMobileMenuOpen(false);
//     }, []);
    
//      useEffect(() => {
//         const handleResize = () => {
//             if (window.innerWidth >= 1024 && isMobileMenuOpen) {
//                 setIsMobileMenuOpen(false);
//                 setOpenDropdown(null);
//             }
//         };

//         window.addEventListener('resize', handleResize);

//         handleResize()
//         return () => {
//             window.removeEventListener('resize', handleResize);
//         };
//     }, [isMobileMenuOpen,setOpenDropdown, setIsMobileMenuOpen]);

//     return (
//         <header className="sticky top-0 bg-gray-50 py-4 shadow-md z-50">
//             <div className="container mx-auto">
//                 <div className="flex items-center justify-between">
//                     {/* Left Side: Name */}
//                     <div className="flex items-center">
//                         <img src={logo} alt="" className="w-12 h-auto pr-2"/>
//                         <a href="/" className="text-2xl font-bold text-gray-900">
//                             Insta Advice
//                         </a>
//                     </div>

//                     {/* Center: Navigation Links */}
//                     <nav
//                         className={`laptop:flex ${isMobileMenuOpen
//                                 ? "fixed top-0 left-0 w-full h-screen bg-gray-50 flex-col border-b border-gray-300 overflow-y-auto mt-[65px]"
//                                 : "hidden"
//                             }`}
//                     >
//                         {navLinks.map((link, index) => (
//                             <div className={`${isMobileMenuOpen ? "w-full" : ""}`}>
//                                    <NavDropdown
//                                     key={index}
//                                     label={link.label}
//                                     items={link.dropdownItems}
//                                     isOpen={openDropdown === link.label}
//                                     setOpenDropdown={setOpenDropdown}
//                                     isMobileMenuOpen={isMobileMenuOpen}
//                                     closeMobileMenu={closeMobileMenu}
//                                 />
//                             </div>

//                         ))}
//                     </nav>

//                     {/* Right Side: Search Bar and Mobile Menu Icon */}
//                     <div className="flex items-center gap-2">
//                         <div className="hidden sm:block">
//                             <SearchBar />
//                         </div>
//                         {/* Conditional Menu/Close Button */}
//                         <button onClick={toggleMobileMenu} className="block laptop:hidden">
//                             {isMobileMenuOpen ? (
//                                 <FiX className="size-6 " />
//                             ) : (
//                                 <FiMenu className="size-6" />
//                             )}
//                         </button>
//                     </div>
//                 </div>
//             </div>
//         </header>
//     );
// };

// export default Header;







// import React, { useState, useCallback, useEffect } from "react";
// import NavDropdown from "../Header/NavDropdown";
// import SearchBar from "../Header/SearchBar";
// import { FiMenu, FiX } from "react-icons/fi";
// import logo from '../../assets/Images/insta-logo.png'


// const Header = () => {
//     const navLinks = [
//         {
//             label: "Hosting types",
//             dropdownItems: [
//                 { label: "Web Hosting" },
//                 { label: "Shared Hosting" },
//                 { label: "WordPress Hosting", tag: "Trendy" },
//                 { label: "Cloud Hosting" },
//                 { label: "VPS Hosting", tag: "Hot" },
//                 { label: "Dedicated Servers" },
//                 { label: "Cheap VPS", tag: "Popular" },
//                 { label: "Reseller Hosting" },
//                 { label: "Website Builders" },
//                 { label: "Cheap Web Hosting" },
//                 { label: "Offshore Hosting" },
//             ],
//         },
//         {
//             label: "Reviews",
//             dropdownItems: [
//                 { label: "Hostinger", tag: "Best Overall" },
//                 { label: "Ultahost" },
//                 { label: "HostArmada", tag: "Most Affordable" },
//                 { label: "FastComet" },
//                 { label: "Webdock", tag: "Best VPS Hosting" },
//                 { label: "Kamatera" },
//                 { label: "IONOS" },
//                 { label: "Verpex Hosting" },
//                 { label: "InterServer", tag: "Best Value" },
//                 { label: "ChemiCloud" },
//                 { label: "A2 Hosting" },
//             ],
//         },
//         {
//             label: "Comparison",
//             dropdownItems: [
//                 { label: "Hostinger vs IONOS", tag: "Most searched" },
//                 { label: "Hostinger vs A2 Hosting" },
//                 { label: "HostGator vs A2 Hosting", tag: "Trendy" },
//                 { label: "Hostinger vs HostGator" },
//                 { label: "Hostinger vs Bluehost" },
//                 { label: "IONOS vs FastComet" },
//                 { label: "GoDaddy vs Ultahost" },
//                 { label: "Bluehost vs IONOS" },
//             ],
//         },
//         {
//             label: "Resources",
//             dropdownItems: [
//                 { label: "Web Hosting Advisor", tag: "Hot" },
//                 { label: "Who is Hosting?" },
//                 { label: "MarketShare" },
//                 { label: "Plans Search", tag: "Trendy" },
//                 { label: "Articles and Blogs", link: true },
//             ],
//         },
//         {
//             label: "Hosting Coupons",
//             dropdownItems: [
//                 { label: "Kamatera coupon codes", tag: "Hot" },
//                 { label: "Hostinger coupon codes" },
//                 { label: "Verpex Hosting coupon codes" },
//                 { label: "HostArmada coupon codes" },
//                 { label: "Ultahost coupon codes" },
//             ],
//         },
//     ];
//     const [openDropdown, setOpenDropdown] = useState(null);
//     const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//     // Use useCallback to memoize the function, preventing unnecessary re-renders
//     const toggleMobileMenu = useCallback(() => {
//         setIsMobileMenuOpen((prev) => !prev);
//         if (isMobileMenuOpen)
//             setOpenDropdown(null)
//     }, [isMobileMenuOpen]);

//     // Use useCallback to memoize the function, preventing unnecessary re-renders
//     const closeMobileMenu = useCallback(() => {
//         setIsMobileMenuOpen(false);
//     }, []);

//     useEffect(() => {
//         const handleResize = () => {
//             if (window.innerWidth >= 1024 && isMobileMenuOpen) {
//                 setIsMobileMenuOpen(false);
//                 setOpenDropdown(null);
//             }
//         };

//         window.addEventListener('resize', handleResize);

//         handleResize()
//         return () => {
//             window.removeEventListener('resize', handleResize);
//         };
//     }, [isMobileMenuOpen, setOpenDropdown, setIsMobileMenuOpen]);


//     return (
//         <header className="sticky top-0 bg-gray-50 py-4 shadow-md z-50">
//             <div className="container mx-auto">
//                 <div className="flex items-center justify-between">
//                     {/* Left Side: Name */}
//                     <div className="flex items-center">
//                         <img src={logo} alt="" className="w-12 h-auto pr-2" />
//                         <a href="/" className="text-2xl font-bold text-gray-900">
//                             Insta Advice
//                         </a>
//                     </div>

//                     {/* Center: Navigation Links */}
//                      <nav
//                         className={`laptop:flex fixed top-0 right-0 bg-gray-50 
//                         transition-transform duration-300 ease-in-out transform
//                         ${isMobileMenuOpen ? "translate-x-0 w-full flex flex-col h-screen overflow-y-auto mt-[65px]" : "translate-x-full w-0  laptop:translate-x-0  laptop:w-auto  laptop:static laptop:flex  "}
//                     `}>
//                         <div className="laptop:flex laptop:items-center">
//                         {navLinks.map((link, index) => (
//                                 <NavDropdown
//                                     key={index}
//                                     label={link.label}
//                                     items={link.dropdownItems}
//                                     isOpen={openDropdown === link.label}
//                                     setOpenDropdown={setOpenDropdown}
//                                     isMobileMenuOpen={isMobileMenuOpen}
//                                     closeMobileMenu={closeMobileMenu}
//                                 />
//                         ))}
//                         </div>
//                      </nav>

//                     {/* Right Side: Search Bar and Mobile Menu Icon */}
//                     <div className="flex items-center gap-2">
//                         <div className="hidden sm:block">
//                             <SearchBar />
//                         </div>
//                         {/* Conditional Menu/Close Button */}
//                         <button onClick={toggleMobileMenu} className="block laptop:hidden">
//                             {isMobileMenuOpen ? (
//                                 <FiX className="size-6 " />
//                             ) : (
//                                 <FiMenu className="size-6" />
//                             )}
//                         </button>
//                     </div>
//                 </div>
//             </div>
//         </header>
//     );
// };

// export default Header;



import React, { useState, useCallback, useEffect } from "react";
import NavDropdown from "../Header/NavDropdown";
import SearchBar from "../Header/SearchBar";
import { FiMenu, FiX } from "react-icons/fi";
import logo from '../../assets/Images/insta-logo.png'
import classNames from 'classnames';

const Header = () => {
    const navLinks = [
        {
            label: "Hosting types",
            dropdownItems: [
                { label: "Web Hosting" },
                { label: "Shared Hosting" },
                { label: "WordPress Hosting", tag: "Trendy" },
                { label: "Cloud Hosting" },
                { label: "VPS Hosting", tag: "Hot" },
                { label: "Dedicated Servers" },
                { label: "Cheap VPS", tag: "Popular" },
                { label: "Reseller Hosting" },
                { label: "Website Builders" },
                { label: "Cheap Web Hosting" },
                { label: "Offshore Hosting" },
                { label: "See all hosting types", link: true },
            ],
        },
        {
            label: "Reviews",
            dropdownItems: [
                { label: "Hostinger", tag: "Best Overall" },
                { label: "Ultahost" },
                { label: "HostArmada", tag: "Most Affordable" },
                { label: "FastComet" },
                { label: "Webdock", tag: "Best VPS Hosting" },
                { label: "Kamatera" },
                { label: "IONOS" },
                { label: "Verpex Hosting" },
                { label: "InterServer", tag: "Best Value" },
                { label: "ChemiCloud" },
                { label: "A2 Hosting" },
                { label: "See all hosting providers", link: true },
            ],
        },
        {
            label: "Comparison",
            dropdownItems: [
                { label: "Hostinger vs IONOS", tag: "Most searched" },
                { label: "Hostinger vs A2 Hosting" },
                { label: "HostGator vs A2 Hosting", tag: "Trendy" },
                { label: "Hostinger vs HostGator" },
                { label: "Hostinger vs Bluehost" },
                { label: "IONOS vs FastComet" },
                { label: "GoDaddy vs Ultahost" },
                { label: "Bluehost vs IONOS" },
            ],
        },
        {
            label: "Resources",
            dropdownItems: [
                { label: "Web Hosting Advisor", tag: "Hot" },
                { label: "Who is Hosting?" },
                { label: "MarketShare" },
                { label: "Plans Search", tag: "Trendy" },
                { label: "Articles and Blogs", link: true },
                { label: "See all tools", link: true },
            ],
        },
        {
            label: "Hosting Coupons",
            dropdownItems: [
                { label: "Kamatera coupon codes", tag: "Hot" },
                { label: "Hostinger coupon codes" },
                { label: "Verpex Hosting coupon codes" },
                { label: "HostArmada coupon codes" },
                { label: "Ultahost coupon codes" },
            ],
        },
    ];
     const [openDropdown, setOpenDropdown] = useState(null);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = useCallback(() => {
        setIsMobileMenuOpen((prev) => !prev);
    }, []);


   const closeMobileMenu = useCallback(() => {
        setIsMobileMenuOpen(false);
         setOpenDropdown(null);
   }, [setOpenDropdown]);


    useEffect(() => {
       const handleResize = () => {
            if (window.innerWidth >= 1025 && isMobileMenuOpen) {
                setIsMobileMenuOpen(false);
                 setOpenDropdown(null);
            }
        };

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [isMobileMenuOpen, setOpenDropdown, setIsMobileMenuOpen]);



    return (
        <header className="sticky top-0 bg-gray-50 py-4 shadow-md z-50">
               {/* Overlay when Mobile Menu is open */}
            {isMobileMenuOpen && (
                <div
                    className="fixed top-0 left-0 w-full h-full bg-black opacity-50 z-40 blur-sm  laptop:hidden"
                    onClick={closeMobileMenu}
                />
            )}
            <div className="container mx-auto">
                <div className="flex items-center justify-between">
                    {/* Left Side: Name */}
                    <div className="flex items-center">
                        <img src={logo} alt="" className="w-10 h-auto mr-2" />
                        <a href="/" className="text-xl font-bold text-gray-900">
                            Insta Advice
                        </a>
                    </div>

                    {/* Center: Navigation Links */}
                    <nav
                        className={classNames(
                            "laptop:flex fixed top-0 right-0 bg-gray-50 transition-transform duration-700 ease-in-out transform z-50",
                            isMobileMenuOpen
                                ? "translate-x-0  flex flex-col h-screen overflow-y-auto w-[350px] max-w-[80%] shadow-lg"
                                : "translate-x-full w-0 laptop:translate-x-0  laptop:w-auto  laptop:static laptop:flex "
                        )}
                    >
                       {/* Logo, Website Name and Close Button (Mobile Menu) */}
                        {isMobileMenuOpen && (
                            <div className="flex items-center justify-between p-4 border-b border-gray-200">
                                <div className="flex items-center">
                                    <img src={logo} alt="" className="w-8 h-auto mr-2" />
                                    <a href="/" className="text-xl font-bold text-gray-900">
                                        Insta Advice
                                    </a>
                                </div>
                                <button onClick={closeMobileMenu} className="focus:outline-none ml-auto">
                                    <FiX className="size-6" />
                                </button>
                            </div>
                        )}
                        <div className="laptop:flex laptop:items-center space-y-2 laptop:space-y-0">
                            {navLinks.map((link, index) => (
                                <NavDropdown
                                    key={index}
                                    label={link.label}
                                    items={link.dropdownItems}
                                    isOpen={openDropdown === link.label}
                                    setOpenDropdown={setOpenDropdown}
                                    isMobileMenuOpen={isMobileMenuOpen}
                                    closeMobileMenu={closeMobileMenu}
                                />
                            ))}
                        </div>
                    </nav>

                    {/* Right Side: Search Bar and Mobile Menu Icon */}
                    <div className="flex items-center gap-2">
                        <div className="hidden sm:block">
                            <SearchBar />
                        </div>
                        {/* Conditional Menu/Open Button */}
                        <button onClick={toggleMobileMenu} className="block laptop:hidden">
                            <FiMenu className="size-6" />
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;