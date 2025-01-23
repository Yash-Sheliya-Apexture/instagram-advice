// import React, { useState, useRef, useEffect } from "react";
// import { IoIosArrowDown } from "react-icons/io";
// import { FaArrowRight } from "react-icons/fa6";
// import { Link } from "react-router-dom"; // Import Link

// const tagStyles = {
//     Hot: "bg-orange-100 text-orange-600",
//     Trendy: "bg-green-100 text-green-600",
//     Popular: "bg-blue-100 text-blue-600",
//     "Best Overall": "bg-purple-100 text-purple-600",
//     "Most Affordable": "bg-yellow-100 text-yellow-600",
//     "Best VPS Hosting": "bg-pink-100 text-pink-600",
//     "Best Value": "bg-gray-100 text-gray-600",
//     "Most searched": "bg-lime-100 text-lime-600",
//     // Add more tags and corresponding Tailwind classes here
// };

// const NavDropdown = ({
//     label,
//     items,
//     isOpen,
//     setOpenDropdown,
//     isMobileMenuOpen,
//     closeMobileMenu,
// }) => {
//     const dropdownRef = useRef(null);
//     const buttonRef = useRef(null);
//     const [isDropdownOpen, setIsDropdownOpen] = useState(false);

//     const toggleDropdown = () => {
//         setOpenDropdown(isOpen ? null : label);
//         setIsDropdownOpen(!isDropdownOpen);
//     };

//     useEffect(() => {
//         const handleOutsideClick = (event) => {
//             if (buttonRef.current && buttonRef.current.contains(event.target)) {
//                 return;
//             }
//             if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//                 setOpenDropdown(null);
//                 setIsDropdownOpen(false);
//             }
//         };

//         if (isOpen) {
//             const timerId = setTimeout(() => {
//                 document.addEventListener("mousedown", handleOutsideClick);
//             }, 0);

//             return () => {
//                 document.removeEventListener("mousedown", handleOutsideClick);
//                 clearTimeout(timerId);
//             };
//         } else {
//             document.removeEventListener("mousedown", handleOutsideClick);
//         }
//     }, [isOpen, setOpenDropdown]);

//     useEffect(() => {
//         setIsDropdownOpen(isOpen);
//     }, [isOpen]);

//     useEffect(() => {
//         if (!isMobileMenuOpen) {
//             setIsDropdownOpen(false);
//         }
//     }, [isMobileMenuOpen]);

//     return (
//         <div
//             className={`px-3 py-2 relative ${
//                 isDropdownOpen && isMobileMenuOpen ? "z-20" : ""
//             }`}
//             ref={dropdownRef}
//         >
//             <button
//                 onClick={toggleDropdown}
//                 ref={buttonRef}
//                 className="text-base font-medium focus:outline-none flex items-center justify-between w-full"
//             >
//                 {label}
//                 <IoIosArrowDown
//                     className={`ml-1 h-4 w-4 fill-current ${isOpen ? "rotate-180" : ""}`}
//                 />
//             </button>
//             {isOpen && (
//                 <nav
//                     className={`absolute top-[40px] lg:top-[56px] w-max bg-white border rounded shadow-lg z-10 ${
//                         isMobileMenuOpen ? " w-screen left-0 top-full  overflow-y-auto max-h-[calc(100vh_-_150px)]" : ""
//                     }`}
//                 >
//                     <ul className="">
//                         {items.map((item, index) => (
//                             <li key={index} className="">
//                                 <Link
//                                     to={
//                                         item.link
//                                             ? "#"
//                                             : `/${item.label.toLowerCase().replace(/ /g, "-")}`
//                                     }
//                                     onClick={closeMobileMenu}
//                                     className={`block px-3 py-2 relative flex items-center justify-between text-sm
//                                      ${
//                                          item.link
//                                              ? "text-blue-600 hover:text-blue-800"
//                                              : "text-light-gray hover:text-black rounded-lg"
//                                      }
//                                     `}
//                                 >
//                                     {item.label}
//                                     {item.tag && (
//                                         <span
//                                             className={`ml-2 text-xs font-medium px-2 py-0.5 rounded ${
//                                                 tagStyles[item.tag] || ""
//                                             }`}
//                                         >
//                                             {item.tag}
//                                         </span>
//                                     )}
//                                     {item.link && <FaArrowRight className="w-4 h-4 ml-1" />}
//                                 </Link>
//                             </li>
//                         ))}
//                         <li>
//                             <Link
//                                 to="/all-tools"
//                                 onClick={closeMobileMenu}
//                                 className="px-4 py-2 text-blue-600 hover:text-blue-800 flex items-center justify-between"
//                             >
//                                 See All Tools
//                                 <FaArrowRight className="w-4 h-4 ml-1" />
//                             </Link>
//                         </li>
//                     </ul>
//                 </nav>
//             )}
//         </div>
//     );
// };

// export default NavDropdown;







import React, { useRef, useEffect } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import classNames from "classnames";

const tagStyles = {
    Hot: "bg-orange-100 text-orange-600",
    Trendy: "bg-green-100 text-green-600",
    Popular: "bg-blue-100 text-blue-600",
    "Best Overall": "bg-purple-100 text-purple-600",
    "Most Affordable": "bg-yellow-100 text-yellow-600",
    "Best VPS Hosting": "bg-pink-100 text-pink-600",
    "Best Value": "bg-gray-100 text-gray-600",
    "Most searched": "bg-lime-100 text-lime-600",
};

const NavDropdown = ({
    label,
    items,
    isOpen,
    setOpenDropdown,
    isMobileMenuOpen,
    closeMobileMenu,
}) => {
    const dropdownRef = useRef(null);
    const buttonRef = useRef(null);

    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (buttonRef.current && buttonRef.current.contains(event.target)) {
                return;
            }
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setOpenDropdown(null);
            }
        };

        if (isOpen) {
            document.addEventListener("mousedown", handleOutsideClick);
        } else {
            document.removeEventListener("mousedown", handleOutsideClick);
        }
        return () => {
            document.removeEventListener("mousedown", handleOutsideClick);
        };
    }, [isOpen, setOpenDropdown]);


    return (
        <div
            className={classNames("px-3 py-2 relative", {
                "z-20": isOpen && isMobileMenuOpen,
            })}
            ref={dropdownRef}
        >
            <button
                onClick={() => setOpenDropdown(isOpen ? null : label)}
                ref={buttonRef}
                className="text-base font-medium focus:outline-none flex items-center justify-between w-full"
                aria-haspopup="true"
                aria-expanded={isOpen}
            >
                {label}
                <IoIosArrowDown
                    className={`ml-1 h-4 w-4 fill-current transition-transform duration-300 ${isOpen ? "rotate-180" : ""
                        }`}
                />
            </button>
            <nav
                className={classNames(
                    "absolute top-[40px] laptop:top-[56px] bg-white border rounded-xl shadow-md z-10 transform transition-all duration-300 ease-in-out text-nowrap",
                    isOpen
                        ? "opacity-100 scale-100 translate-y-0"
                        : "opacity-0 scale-95 -translate-y-2 pointer-events-none",
                    {
                        "w-full left-0 top-full overflow-y-auto": isMobileMenuOpen,
                         "max-h-[calc(100vh_-_220px)]": isMobileMenuOpen,
                         "w-96": isOpen && !isMobileMenuOpen
                    }
                )}
            >
                <ul className="">
                    {items.map((item, index) => (
                        <li key={index} className="">
                            <Link
                                to={
                                    item.link
                                        ? "#"
                                        : `/${item.label.toLowerCase().replace(/ /g, "-")}`
                                }
                                onClick={closeMobileMenu}
                                className={classNames(
                                    "block px-5 py-2.5 relative flex items-center justify-between text-sm",
                                    item.link
                                        ? "text-blue-600 font-medium hover:text-blue-800"
                                        : "text-light-gray hover:text-black rounded-lg"
                                )}
                            >
                                {item.label}
                                {item.tag && (
                                    <span
                                        className={`ml-2 text-xs font-medium px-2 py-0.5 rounded ${tagStyles[item.tag] || ""
                                            }`}
                                    >
                                        {item.tag}
                                    </span>
                                )}
                                {item.link && <FaArrowRight className="w-4 h-4 ml-1" />}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
};

export default NavDropdown;