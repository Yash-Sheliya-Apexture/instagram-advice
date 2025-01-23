// import React, { useState } from "react";
// import { FaStar, FaStarHalfAlt } from "react-icons/fa";
// import ultaLogo from "../../assets/Images/ultahost-logo.png";
// import hostingerLogo from "../../assets/Images/Hostinger-Logo.png";
// import ionosLogo from "../../assets/Images/ionos-logo.webp";
// import wixLogo from "../../assets/Images/wix-logo.png";
// import neoxeaLogo from "../../assets/Images/neoxea-logo.png";
// import HostCardMain from "../Host/HostCardMain";
// import HostCardTable from "../Host/HostCardTable";
// import FilterBar from "../Host/FilterBar"; // Import the new FilterBar component

// const HostCard = () => {
//     const initialData = [
//         {
//             id: 1,
//             logo: ultaLogo,
//             offerText: "🔥 Save 40% Today",
//             rating: 3.5,
//             reviews: 1234,
//             planDetails: [
//                 "24/7 Premium Support",
//                 "Free SSL & Security",
//                 "Unlimited Data Transfer",
//                 "30-Day Money-Back Guarantee",
//             ],
//             price: 3.99,
//             originalPrice: 6.99,
//             plansData: {
//                 plans: [
//                     { name: "Basic Plan", price: 1.99, space: "10GB", score: 4.2 },
//                     { name: "Premium Plan", price: 7.99, space: "50GB", score: 3 },
//                     {
//                         name: "Enterprise Plan",
//                         price: 12.99,
//                         space: "Unlimited",
//                         score: 4.9,
//                     },
//                 ],
//             },
//         },
//         {
//             id: 2,
//             logo: hostingerLogo,
//             offerText: "🚀 Best Value Offer",
//             rating: 4.2,
//             reviews: 2567,
//             planDetails: [
//                 "99.9% Uptime Guarantee",
//                 "Free Website Transfer",
//                 "Unmetered Bandwidth",
//                 "45-Day Money-Back Guarantee",
//             ],
//             price: 2.75,
//             originalPrice: 8.99,
//             plansData: {
//                 plans: [
//                     { name: "Starter Plan", price: 2.75, space: "5GB", score: 4.5 },
//                     { name: "Hatchling Plan", price: 5.95, space: "15GB", score: 3.8 },
//                     { name: "Baby Plan", price: 7.95, space: "30GB", score: 4.1 },
//                 ],
//             },
//         },
//         {
//             id: 3,
//             logo: ionosLogo,
//             offerText: "🌟 Recommended Hosting",
//             rating: 4.8,
//             reviews: 5234,
//             planDetails: [
//                 "Fastest Servers",
//                 "Daily Backups",
//                 "Free CDN",
//                 "30-Day Money-Back Guarantee",
//             ],
//             price: 6.99,
//             originalPrice: 14.99,
//             plansData: {
//                 plans: [
//                     { name: "StartUp Plan", price: 6.99, space: "10GB", score: 4.7 },
//                     { name: "GrowBig Plan", price: 9.99, space: "20GB", score: 4.6 },
//                     { name: "GoGeek Plan", price: 14.99, space: "40GB", score: 4.9 },
//                 ],
//             },
//         },
//         {
//             id: 4,
//             logo: wixLogo,
//             offerText: "🎨 Website Builder",
//             rating: 4.5,
//             reviews: 3012,
//             planDetails: [
//                 "Drag and Drop Builder",
//                 "Free Hosting",
//                 "Custom Domain",
//                 "24/7 Support",
//             ],
//             price: 8.5,
//             originalPrice: 12.99,
//             plansData: {
//                 plans: [
//                     { name: "Basic Plan", price: 8.5, space: "3GB", score: 4.4 },
//                     { name: "Combo Plan", price: 12.5, space: "10GB", score: 4.6 },
//                     {
//                         name: "Unlimited Plan",
//                         price: 18.5,
//                         space: "Unlimited",
//                         score: 4.8,
//                     },
//                 ],
//             },
//         },
//         {
//             id: 5,
//             logo: neoxeaLogo,
//             offerText: "💼 Cloud Solutions",
//             rating: 4.0,
//             reviews: 1245,
//             planDetails: [
//                 "Scalable Cloud Hosting",
//                 "Managed Services",
//                 "SSD Storage",
//                 "99.9% Uptime",
//             ],
//             price: 5.5,
//             originalPrice: 9.99,
//             plansData: {
//                 plans: [
//                     { name: "Cloud Starter", price: 5.5, space: "15GB", score: 3.9 },
//                     { name: "Cloud Business", price: 10.5, space: "30GB", score: 4.1 },
//                     { name: "Cloud Enterprise", price: 15.5, space: "50GB", score: 4.5 },
//                 ],
//             },
//         },
//     ];

//     const [cardsData, setCardsData] = useState(initialData);
//     const [filteredCards, setFilteredCards] = useState(initialData);

//     const filters = [
//         {
//             name: "Price",
//             options: ["Under $5", "$5-$10", "Over $10"],
//         },
//         {
//             name: "Disk Type",
//             options: ["SSD", "HDD", "NVMe"],
//         },
//         {
//             name: "Disk Space",
//             options: ["10 GB", "50 GB", "100 GB", "Unlimited"],
//         },
//         {
//             name: "Payment Type",
//             options: ["Monthly", "Annually"],
//         },
//         {
//             name: "Sort",
//             options: ["Price High to Low", "Price Low to High", "Rating"],
//         },
//     ];


//     const handleFilterChange = (filterName, selectedOption) => {
//         let newFilteredCards = [...initialData];

//         if (filterName === "Price") {
//             if (selectedOption === "Under $5") {
//                 newFilteredCards = newFilteredCards.filter(card => card.price < 5);
//             } else if (selectedOption === "$5-$10") {
//                 newFilteredCards = newFilteredCards.filter(card => card.price >= 5 && card.price <= 10);
//             } else if (selectedOption === "Over $10") {
//                 newFilteredCards = newFilteredCards.filter(card => card.price > 10);
//             }
//         }

//          if (filterName === "Disk Type") {
//             if (selectedOption === "SSD") {
//                 newFilteredCards = newFilteredCards.filter(card => card.planDetails.some(detail => detail.toLowerCase().includes("ssd")));
//             } else if (selectedOption === "HDD") {
//                     newFilteredCards = newFilteredCards.filter(card => card.planDetails.some(detail => detail.toLowerCase().includes("hdd")));
//             } else if (selectedOption === "NVMe") {
//                     newFilteredCards = newFilteredCards.filter(card => card.planDetails.some(detail => detail.toLowerCase().includes("nvme")));
//             }
//         }

//         if (filterName === "Disk Space") {
//             newFilteredCards = newFilteredCards.filter(card =>
//                 card.plansData.plans.some(plan => plan.space.toLowerCase().includes(selectedOption.toLowerCase().replace(/\s/g, '')))
//             );
//         }


//         if (filterName === "Sort") {
//             if (selectedOption === "Price High to Low") {
//                 newFilteredCards.sort((a, b) => b.price - a.price);
//             } else if (selectedOption === "Price Low to High") {
//                 newFilteredCards.sort((a, b) => a.price - b.price);
//             } else if (selectedOption === "Rating") {
//                 newFilteredCards.sort((a, b) => b.rating - a.rating);
//             }
//         }

//         setFilteredCards(newFilteredCards);
//     };

//     const handleClaimDeal = () => alert("Deal claimed!");
//     const handleGetCoupons = () => alert("Coupons retrieved!");
//     const handleShowAllPlans = (id) => {
//       setFilteredCards((prevFilteredCards) => {
//           return prevFilteredCards.map((card) => {
//               if (card.id === id) {
//                   return { ...card, showAllPlans: !card.showAllPlans };
//               }
//               return card;
//           });
//       });
//     };

//     const generateSingleStar = (score) => {
//         return (
//             <div className="flex items-center gap-2">
//                 <FaStar className="text-yellow-400 text-base" />
//             </div>
//         );
//     };

//     const generateStars = (rating, size = "text-xl") => {
//         const fullStars = Math.floor(rating);
//         const halfStars = rating % 1 >= 0.5 ? 1 : 0;
//         const emptyStars = 5 - fullStars - halfStars;

//         return (
//             <div className="flex items-center space-x-1">
//                 {[...Array(fullStars)].map((_, i) => (
//                     <FaStar key={`full-${i}`} className={`text-yellow-400 ${size}`} />
//                 ))}
//                 {[...Array(halfStars)].map((_, i) => (
//                     <FaStarHalfAlt
//                         key={`half-${i}`}
//                         className={`text-yellow-400 ${size}`}
//                     />
//                 ))}
//                 {[...Array(emptyStars)].map((_, i) => (
//                     <FaStar key={`empty-${i}`} className={`text-gray-300 ${size}`} />
//                 ))}
//             </div>
//         );
//     };
//     return (
//         <section className="HostCard py-12">
//             <div className="container mx-auto">
//             <FilterBar filters={filters} onFilterChange={handleFilterChange} />
//                 {filteredCards.map((data) => (
//                     <div
//                         key={data.id}
//                         className="border-2 shadow-main-shadow rounded-2xl overflow-hidden flex flex-col mb-8"
//                     >
//                         <HostCardMain
//                             data={data}
//                             handleClaimDeal={handleClaimDeal}
//                             handleGetCoupons={handleGetCoupons}
//                             generateStars={generateStars}
//                         />
//                         <HostCardTable
//                             showAllPlans={data.showAllPlans}
//                             plansData={data.plansData}
//                             handleShowAllPlans={() => handleShowAllPlans(data.id)}
//                             generateSingleStar={generateSingleStar}
//                         />
//                     </div>
//                 ))}
//             </div>
//         </section>
//     );
// };

// export default HostCard;







import React, { useState } from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import ultaLogo from "../../assets/Images/ultahost-logo.png";
import hostingerLogo from "../../assets/Images/Hostinger-Logo.png";
import ionosLogo from "../../assets/Images/ionos-logo.webp";
import wixLogo from "../../assets/Images/wix-logo.png";
import neoxeaLogo from "../../assets/Images/neoxea-logo.png";
import HostCardMain from "../Host/HostCardMain";
import HostCardTable from "../Host/HostCardTable";
import FilterBar from "../Host/FilterBar"; 
import StarRating from "../StarRating";

const HostCard = () => {
    const initialData = [
        {
            id: 1,
            logo: ultaLogo,
            offerText: "🔥 Save 40% Today",
            rating: 3.5,
            reviews: 1234,
            planDetails: [
                "24/7 Premium Support",
                "Free SSL & Security",
                "Unlimited Data Transfer",
                "30-Day Money-Back Guarantee",
            ],
            price: 3.99,
            originalPrice: 6.99,
            plansData: {
                plans: [
                    { name: "Basic Plan", price: 1.99, space: "10GB", score: 4.2 },
                    { name: "Premium Plan", price: 7.99, space: "50GB", score: 3 },
                    {
                        name: "Enterprise Plan",
                        price: 12.99,
                        space: "Unlimited",
                        score: 4.9,
                    },
                ],
            },
            individualScores: {
                features: 4.6,
                valueForMoney: 4.2,
                easeOfUse: 2.7,
                customerSupport: 4.9,
            }
        },
        {
            id: 2,
            logo: hostingerLogo,
            offerText: "🚀 Best Value Offer",
            rating: 4.2,
            reviews: 2567,
            planDetails: [
                "99.9% Uptime Guarantee",
                "Free Website Transfer",
                "Unmetered Bandwidth",
                "45-Day Money-Back Guarantee",
            ],
            price: 2.75,
            originalPrice: 8.99,
            plansData: {
                plans: [
                    { name: "Starter Plan", price: 2.75, space: "5GB", score: 4.5 },
                    { name: "Hatchling Plan", price: 5.95, space: "15GB", score: 3.8 },
                    { name: "Baby Plan", price: 7.95, space: "30GB", score: 4.1 },
                ],
            },
            individualScores: {
                features: 4.9,
                valueForMoney: 4.6,
                easeOfUse: 3.8,
                customerSupport: 4.5,
            }
        },
        {
            id: 3,
            logo: ionosLogo,
            offerText: "🌟 Recommended Hosting",
            rating: 4.8,
            reviews: 5234,
            planDetails: [
                "Fastest Servers",
                "Daily Backups",
                "Free CDN",
                "30-Day Money-Back Guarantee",
            ],
            price: 6.99,
            originalPrice: 14.99,
            plansData: {
                plans: [
                    { name: "StartUp Plan", price: 6.99, space: "10GB", score: 4.7 },
                    { name: "GrowBig Plan", price: 9.99, space: "20GB", score: 4.6 },
                    { name: "GoGeek Plan", price: 14.99, space: "40GB", score: 4.9 },
                ],
            },
             individualScores: {
                features: 4.7,
                valueForMoney: 4.8,
                easeOfUse: 4.9,
                customerSupport: 4.6,
            }
        },
        {
            id: 4,
            logo: wixLogo,
            offerText: "🎨 Website Builder",
            rating: 4.5,
            reviews: 3012,
            planDetails: [
                "Drag and Drop Builder",
                "Free Hosting",
                "Custom Domain",
                "24/7 Support",
            ],
            price: 8.5,
            originalPrice: 12.99,
            plansData: {
                plans: [
                    { name: "Basic Plan", price: 8.5, space: "3GB", score: 4.4 },
                    { name: "Combo Plan", price: 12.5, space: "10GB", score: 4.6 },
                    {
                        name: "Unlimited Plan",
                        price: 18.5,
                        space: "Unlimited",
                        score: 4.8,
                    },
                ],
            },
             individualScores: {
                features: 4.5,
                valueForMoney: 4.1,
                easeOfUse: 4.6,
                customerSupport: 4.7,
            }
        },
        {
            id: 5,
            logo: neoxeaLogo,
            offerText: "💼 Cloud Solutions",
            rating: 4.0,
            reviews: 1245,
            planDetails: [
                "Scalable Cloud Hosting",
                "Managed Services",
                "SSD Storage",
                "99.9% Uptime",
            ],
            price: 5.5,
            originalPrice: 9.99,
            plansData: {
                plans: [
                    { name: "Cloud Starter", price: 5.5, space: "15GB", score: 3.9 },
                    { name: "Cloud Business", price: 10.5, space: "30GB", score: 4.1 },
                    { name: "Cloud Enterprise", price: 15.5, space: "50GB", score: 4.5 },
                ],
            },
             individualScores: {
                features: 3.8,
                valueForMoney: 4.3,
                easeOfUse: 4.1,
                customerSupport: 4.2,
            }
        },
    ];

    const [cardsData, setCardsData] = useState(initialData);
    const [filteredCards, setFilteredCards] = useState(initialData);

    const filters = [
        {
            name: "Price",
            options: ["Under $5", "$5-$10", "Over $10"],
        },
        {
            name: "Disk Type",
            options: ["SSD", "HDD", "NVMe"],
        },
        {
            name: "Disk Space",
            options: ["10 GB", "50 GB", "100 GB", "Unlimited"],
        },
        {
            name: "Payment Type",
            options: ["Monthly", "Annually"],
        },
        {
            name: "Sort",
            options: ["Price High to Low", "Price Low to High", "Rating"],
        },
    ];


    const handleFilterChange = (filterName, selectedOption) => {
        let newFilteredCards = [...initialData];

        if (filterName === "Price") {
            if (selectedOption === "Under $5") {
                newFilteredCards = newFilteredCards.filter(card => card.price < 5);
            } else if (selectedOption === "$5-$10") {
                newFilteredCards = newFilteredCards.filter(card => card.price >= 5 && card.price <= 10);
            } else if (selectedOption === "Over $10") {
                newFilteredCards = newFilteredCards.filter(card => card.price > 10);
            }
        }

        if (filterName === "Disk Type") {
            if (selectedOption === "SSD") {
                newFilteredCards = newFilteredCards.filter(card => card.planDetails.some(detail => detail.toLowerCase().includes("ssd")));
            } else if (selectedOption === "HDD") {
                newFilteredCards = newFilteredCards.filter(card => card.planDetails.some(detail => detail.toLowerCase().includes("hdd")));
            } else if (selectedOption === "NVMe") {
                newFilteredCards = newFilteredCards.filter(card => card.planDetails.some(detail => detail.toLowerCase().includes("nvme")));
            }
        }

        if (filterName === "Disk Space") {
            newFilteredCards = newFilteredCards.filter(card =>
                card.plansData.plans.some(plan => plan.space.toLowerCase().includes(selectedOption.toLowerCase().replace(/\s/g, '')))
            );
        }


        if (filterName === "Sort") {
            if (selectedOption === "Price High to Low") {
                newFilteredCards.sort((a, b) => b.price - a.price);
            } else if (selectedOption === "Price Low to High") {
                newFilteredCards.sort((a, b) => a.price - b.price);
            } else if (selectedOption === "Rating") {
                newFilteredCards.sort((a, b) => b.rating - a.rating);
            }
        }

        setFilteredCards(newFilteredCards);
    };

    const handleClaimDeal = () => alert("Deal claimed!");
    const handleGetCoupons = () => alert("Coupons retrieved!");
    const handleShowAllPlans = (id) => {
        setFilteredCards((prevFilteredCards) => {
            return prevFilteredCards.map((card) => {
                if (card.id === id) {
                    return { ...card, showAllPlans: !card.showAllPlans };
                }
                return card;
            });
        });
    };

    //     const fullStars = Math.floor(rating);
    //     const halfStars = rating % 1 >= 0.5 ? 1 : 0;
    //     const emptyStars = 5 - fullStars - halfStars;

    //     return (
    //         <div className="flex items-center ju space-x-1">
    //             {[...Array(fullStars)].map((_, i) => (
    //                 <FaStar key={`full-${i}`} className={`text-yellow-400 ${size}`} />
    //             ))}
    //             {[...Array(halfStars)].map((_, i) => (
    //                 <FaStarHalfAlt
    //                     key={`half-${i}`}
    //                     className={`text-yellow-400 ${size}`}
    //                 />
    //             ))}
    //             {[...Array(emptyStars)].map((_, i) => (
    //                 <FaStar key={`empty-${i}`} className={`text-gray-300 ${size}`} />
    //             ))}
    //         </div>
    //     );
    // };
    return (
        <section className="HostCard py-12">
            <div className="container mx-auto">
                <FilterBar filters={filters} onFilterChange={handleFilterChange} />
                {filteredCards.map((data) => (
                    <div
                        key={data.id}
                        className="border-2 shadow-main-shadow rounded-2xl overflow-hidden flex flex-col mb-8"
                    >
                        <HostCardMain
                            data={data}
                            handleClaimDeal={handleClaimDeal}
                            handleGetCoupons={handleGetCoupons}
                            StarRating={StarRating}
                            id={data.id}
                        />
                        <HostCardTable
                            showAllPlans={data.showAllPlans}
                            plansData={data.plansData}
                            handleShowAllPlans={() => handleShowAllPlans(data.id)}
                        />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default HostCard;