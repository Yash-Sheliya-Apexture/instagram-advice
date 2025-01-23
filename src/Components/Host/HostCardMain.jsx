// import React from "react";
// import { GiCheckMark } from "react-icons/gi";

// const HostCardMain = ({ data, handleClaimDeal, handleGetCoupons, generateStars }) => {
//   return (
//     <div className="flex flex-col md:flex-row">
//       {/* Left Section: Logo and Offer */}
//       <div className="w-full md:w-1/4  text-black flex flex-col items-center justify-center p-4 relative">
//         <img
//           src={data.logo}
//           alt="Hosting Logo"
//           className="w-44 mx-auto bg-white p-2"
//         />
//         <h2 className="text-2xl font-bold mt-4">Ultimate Hosting Plan</h2>
//         <p className="text-sm mt-1">Get fast, secure, and reliable hosting</p>
//       </div>

//       {/* Center Section: Pricing and Plan Details */}
//       <div className="w-full md:w-1/2 p-4 bg-white">
//         {/* Rating and Reviews */}
//         <div className="bg-yellow-500 text-white text-sm px-3 py-1 rounded-md w-fit ml-auto text-right">
//           {data.offerText}
//         </div>
//         <div className="border-b border-gray-200 py-4">
//             {generateStars(data.rating)}
//           <p className="text-gray-700 text-sm font-semibold mt-2">
//             {data.rating}/5 from {data.reviews.toLocaleString()} reviews
//           </p>
//         </div>

//         {/* Plan Details */}
//         <div className="py-2">
//           <h3 className="text-lg font-semibold text-gray-800 mb-3">
//             What's Included
//           </h3>
//           <ul className="">
//             {data.planDetails.map((detail, index) => (
//               <li key={index} className="flex items-center mb-2">
//                 <span className="flex items-center justify-center w-6 h-6 text-green-500 rounded-full mr-3">
//                   <GiCheckMark />
//                 </span>
//                 <span className="text-gray-700">{detail}</span>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//       {/* Right Section: Price and CTA */}
//       <div className="w-full md:w-1/4 bg-gray-50 p-4 flex flex-col justify-center items-center">
//         <div className="text-gray-800 text-center">
//           <p className="text-2xl font-extrabold">
//             ${data.price}
//             <span className="text-lg">/mo</span>
//           </p>
//           <p className="text-gray-500 text-sm line-through">
//             ${data.originalPrice}/mo
//           </p>
//         </div>
//         <div className="mt-4 flex flex-row gap-2 w-full md:flex-col">
//           <button
//             onClick={handleClaimDeal}
//             className="block w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 rounded-lg font-medium hover:opacity-90 transition text-sm"
//           >
//             Claim Deal
//           </button>
//           <button
//             onClick={handleGetCoupons}
//             className="block w-full bg-gray-200 text-gray-800 py-3 rounded-lg font-medium hover:bg-gray-300 transition text-sm"
//           >
//             Get Coupons
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HostCardMain;






// HostCardMain.js
import React from "react";
import { GiCheckMark } from "react-icons/gi";
import RatingDisplay from '../Host/RatingDisplay';

const HostCardMain = ({ data, handleClaimDeal, handleGetCoupons, id, StarRating }) => { // Receive StarRating as prop
    return (
        <div className="flex flex-col tablet:flex-row">
            {/* Left Section: Logo and Brief */}
            <div className="w-full tablet:w-1/4 p-4 text-black flex flex-col items-center justify-center bg-white">
                <img
                    src={data.logo}
                    alt="Hosting Logo"
                    className="w-32 tablet:w-44 mx-auto bg-white p-2 mb-2 tablet:mb-4"
                />
                <div className="text-center">
                    <h2 className="text-lg tablet:text-xl font-bold mb-1 tablet:mb-2">Ultimate Hosting Plan</h2>
                    <p className="text-sm text-gray-600">Get fast, secure, and reliable hosting</p>
                </div>
            </div>

            {/* Center Section: Plan Details and Rating */}
            <div className="w-full tablet:w-1/2 p-4 bg-white flex flex-col justify-center">
                {/* Offer Text */}
                 {/* Plan Details and Rating */}
                <div className="flex items-center justify-between pb-4 flex-col tablet:flex-row">
                      {/* Plan Details */}
                      <div className="w-full tablet:w-1/2 mb-4 tablet:mb-0">
                            <h3 className="text-md tablet:text-lg font-semibold text-gray-800 mb-2 tablet:mb-3">
                                What's Included
                            </h3>
                            <ul className="">
                                {data.planDetails.map((detail, index) => (
                                    <li key={index} className="flex items-center mb-1 tablet:mb-2">
                                        <span className="flex items-center justify-center w-5 h-5 tablet:w-6 tablet:h-6 text-green-500 rounded-full mr-2 tablet:mr-3">
                                            <GiCheckMark />
                                        </span>
                                        <span className="text-gray-700 text-sm">{detail}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                         {/* Rating and Reviews */}
                         <div className="w-full h-full tablet:w-1/2 text-right">
                             <RatingDisplay ratingData={{ individualScores:data.individualScores}} reviews={data.reviews.toLocaleString()} id={id} StarRating={StarRating}/> {/** Pass the StarRating component as a prop */}
                        </div>
                    </div>
                </div>

            {/* Right Section: Price and CTA */}
            <div className="w-full tablet:w-1/4 border-l p-4 flex flex-col justify-center items-center">
                <div className="text-gray-800 text-center">
                    <p className="text-xl tablet:text-2xl font-extrabold">
                        ${data.price}
                        <span className="text-lg">/mo</span>
                    </p>
                    <p className="text-gray-500 text-sm line-through">
                        ${data.originalPrice}/mo
                    </p>
                </div>
                <div className="mt-4 flex flex-col w-full gap-2">
                    <button
                        onClick={handleClaimDeal}
                        className="block w-full bg-gradient-to-br from-blue-500 to-blue-600 text-white py-2 tablet:py-3 rounded-lg font-medium hover:opacity-90 transition text-sm"
                    >
                        Claim Deal
                    </button>
                    <button
                        onClick={handleGetCoupons}
                        className="block w-full bg-gray-200 text-gray-800 py-2 tablet:py-3 rounded-lg font-medium hover:bg-gray-300 transition text-sm"
                    >
                        Get Coupons
                    </button>
                </div>
            </div>
        </div>
    );
};

export default HostCardMain;