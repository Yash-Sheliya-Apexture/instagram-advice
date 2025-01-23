// import React from "react";
// import { FaStar, FaStarHalfAlt } from "react-icons/fa";

// const RatingDisplay = ({ rating, reviews }) => {

//   const generateStars = (rating) => {
//         const fullStars = Math.floor(rating);
//         const halfStars = rating % 1 >= 0.5 ? 1 : 0;
//         const emptyStars = 5 - fullStars - halfStars;

//         return (
//             <div className="flex justify-center items-center">
//                 {[...Array(fullStars)].map((_, i) => (
//                     <FaStar key={`full-${i}`} className="text-yellow-400 text-xl" />
//                 ))}
//                 {[...Array(halfStars)].map((_, i) => (
//                     <FaStarHalfAlt
//                         key={`half-${i}`}
//                         className="text-yellow-400 text-xl"
//                     />
//                 ))}
//                 {[...Array(emptyStars)].map((_, i) => (
//                     <FaStar key={`empty-${i}`} className="text-gray-300 text-xl" />
//                 ))}
//             </div>
//         );
//     };

//     return (
//         <div className="text-center">
//             <h2 className="text-lg font-semibold text-gray-800 mb-3">Overall Score</h2>
//             <div className="flex justify-center items-center font-medium mb-2">
//                  <span className="text-lg">{rating}</span>
//                  <span className="text-lg">/5</span>
//             </div>
//             {generateStars(rating)}
//             <p className="text-gray-600 text-sm mt-2">Based on {reviews} Reviews</p>

//         </div>
//     );
// };

// export default RatingDisplay;

// import React, { useState, useEffect, useRef } from "react";
// import { FaStar, FaStarHalfAlt } from "react-icons/fa";

// const RatingBar = ({ label, rating }) => {
//   const widthPercentage = (rating / 5) * 100;
//   return (
//     <div className="mb-3 relative group">
//       <div className="flex justify-between items-center mb-1">
//         <span className="text-gray-800 text-sm font-medium">{label}</span>
//         <span className="text-gray-700 text-sm font-medium">{rating.toFixed(1)}</span>
//       </div>
//       <div className="bg-gray-200 h-2 rounded-md relative overflow-hidden">
//         <div
//           className="bg-yellow-400 h-full rounded-md transition-all duration-300 ease-in-out"
//           style={{ width: `${widthPercentage}%` }}
//         />
//       </div>
//     </div>
//   );
// };

// const RatingDetails = ({ ratings, showDetails }) => {

//     const containerRef = useRef(null);
//     const [barPositions, setBarPositions] = useState([]);

//     useEffect(() => {
//         if (containerRef.current && showDetails) {
//             const elements = Array.from(containerRef.current.children);
//            setBarPositions(elements.map((element, index) => {
//               return {
//                   transform: `translateX(0)`,
//                   opacity: 1,
//                   transitionDelay: `${(index+1) * 0.1}s` // Adjust as needed

//                 }
//             }))
//         }
//         else{
//             setBarPositions([]);
//         }
//     }, [showDetails]);

//   return (
//     <div
//       className="absolute bg-white shadow-md p-4 rounded-md right-0 z-10 w-64 transition-all duration-300 ease-in-out"
//     >
//       <div ref={containerRef}>
//         {ratings.map((item, index) => (
//              <div key={index}
//               style={{
//                     transform: barPositions[index]?.transform || "translateX(100%)",
//                     opacity: barPositions[index]?.opacity || 0,
//                     transition: `transform 0.4s ease-in-out, opacity 0.2s ease-in-out`,
//                     transitionDelay: barPositions[index]?.transitionDelay
//                 }}
//               >
//                 <RatingBar label={item.label} rating={item.rating} />
//             </div>
//         ))}
//     </div>
//     </div>
//   );
// };

// const RatingDisplay = () => {
//     const [showDetails, setShowDetails] = useState(false);

//     const ratingsData = {
//       overall: 4.2,
//       reviews: 120,
//       details: [
//         { label: "Features", rating: 4.6 },
//         { label: "Value for Money", rating: 4.2 },
//         { label: "Ease of Use", rating: 2.7 },
//         { label: "Customer Support", rating: 4.9 },
//       ],
//     };

//     const generateStars = (rating) => {
//       const fullStars = Math.floor(rating);
//       const halfStars = rating % 1 >= 0.5 ? 1 : 0;
//       const emptyStars = 5 - fullStars - halfStars;

//       return (
//         <div className="flex justify-center items-center">
//           {[...Array(fullStars)].map((_, i) => (
//             <FaStar key={`full-${i}`} className="text-yellow-400 text-xl" />
//           ))}
//           {[...Array(halfStars)].map((_, i) => (
//             <FaStarHalfAlt
//               key={`half-${i}`}
//               className="text-yellow-400 text-xl"
//             />
//           ))}
//           {[...Array(emptyStars)].map((_, i) => (
//             <FaStar key={`empty-${i}`} className="text-gray-300 text-xl" />
//           ))}
//         </div>
//       );
//     };

//     return (
//       <div
//         className="text-center relative"
//         onMouseEnter={() => setShowDetails(true)}
//         onMouseLeave={() => setShowDetails(false)}
//       >
//         <h2 className="text-lg font-semibold text-gray-800 mb-3">Overall Score</h2>
//         <div className="flex justify-center items-center font-medium mb-2">
//           <span className="text-lg">{ratingsData.overall}</span>
//           <span className="text-lg">/5</span>
//         </div>
//         {generateStars(ratingsData.overall)}
//         <p className="text-gray-600 text-sm mt-2">
//           Based on {ratingsData.reviews} Reviews
//         </p>
//         <RatingDetails ratings={ratingsData.details} showDetails={showDetails}/>
//       </div>
//     );
//   };

//   export default RatingDisplay;

// import React, { useState, useRef, useEffect } from "react";
// import { FaStar, FaStarHalfAlt } from "react-icons/fa";

// const RatingBar = ({ label, rating }) => {
//     const widthPercentage = (rating / 5) * 100;
//     return (
//       <div className="mb-3 relative group">
//         <div className="flex justify-between items-center mb-1">
//           <span className="text-gray-800 text-sm font-medium">{label}</span>
//           <span className="text-gray-700 text-sm font-medium">{rating.toFixed(1)}</span>
//         </div>
//         <div className="bg-gray-200 h-2 rounded-md relative overflow-hidden">
//           <div
//             className="bg-yellow-400 h-full rounded-md transition-all duration-300 ease-in-out"
//             style={{ width: `${widthPercentage}%` }}
//           />
//         </div>
//       </div>
//     );
//   };

// const OverallRatingBar = ({ rating, showDetails, reviews }) => {
//   const widthPercentage = (rating / 5) * 100;
//     const containerRef = useRef(null);
//     const [barPosition, setBarPosition] = useState({transform: 'translateX(100%)', opacity: 0})

//     useEffect(() => {
//         if (containerRef.current && showDetails) {
//             setBarPosition({transform: 'translateX(0)', opacity: 1})
//         }
//         else{
//             setBarPosition({transform: 'translateX(100%)', opacity: 0});
//         }
//     }, [showDetails])

//     return (
//         <div
//         className="absolute bg-white shadow-md p-4 rounded-md right-0 z-10 w-64 transition-all duration-300 ease-in-out"
//         style={{
//             transform: barPosition.transform,
//             opacity: barPosition.opacity,
//             transition: 'transform 0.4s ease-in-out, opacity 0.4s ease-in-out'
//         }}>
//             <div ref={containerRef} >
//                 <div className="flex justify-between items-center mb-1">
//                     <span className="text-gray-800 text-sm font-medium">Overall Score</span>
//                     <span className="text-gray-700 text-sm font-medium">{rating.toFixed(1)}/5</span>
//                 </div>
//                <div className="bg-gray-200 h-2 rounded-md relative overflow-hidden">
//                   <div
//                    className="bg-yellow-400 h-full rounded-md transition-all duration-300 ease-in-out"
//                        style={{ width: `${widthPercentage}%` }}
//                     />
//                 </div>
//               <p className="text-gray-600 text-sm mt-2">
//                    Based on {reviews} Reviews
//               </p>
//             </div>
//         </div>
//     )
// }

// const RatingDetails = ({ ratings, showDetails }) => {
//   const containerRef = useRef(null);
//     const [containerPosition, setContainerPosition] = useState({transform: "translateX(0)", opacity: 1});

//     useEffect(() => {
//           if (containerRef.current && showDetails) {
//                 setContainerPosition({transform: "translateX(-100%)", opacity: 0});
//           }
//           else {
//               setContainerPosition({transform: "translateX(0)", opacity: 1});
//           }
//     }, [showDetails])

//   return (
//     <div
//       className="absolute bg-white shadow-md p-4 rounded-md right-0 z-10 w-64 transition-all duration-300 ease-in-out"
//          style={{
//             transform: containerPosition.transform,
//             opacity: containerPosition.opacity,
//             transition: 'transform 0.4s ease-in-out, opacity 0.4s ease-in-out'
//         }}
//     >
//         <div ref={containerRef}>
//       {ratings.map((item, index) => (
//         <RatingBar key={index} label={item.label} rating={item.rating} />
//       ))}
//         </div>
//     </div>
//   );
// };

// const RatingDisplay = () => {
//   const [showDetails, setShowDetails] = useState(false);

//   const ratingsData = {
//     overall: 4.2,
//     reviews: 120,
//     details: [
//       { label: "Features", rating: 4.6 },
//       { label: "Value for Money", rating: 4.2 },
//       { label: "Ease of Use", rating: 2.7 },
//       { label: "Customer Support", rating: 4.9 },
//     ],
//   };

//   const generateStars = (rating) => {
//     const fullStars = Math.floor(rating);
//     const halfStars = rating % 1 >= 0.5 ? 1 : 0;
//     const emptyStars = 5 - fullStars - halfStars;

//     return (
//       <div className="flex justify-center items-center">
//         {[...Array(fullStars)].map((_, i) => (
//           <FaStar key={`full-${i}`} className="text-yellow-400 text-xl" />
//         ))}
//         {[...Array(halfStars)].map((_, i) => (
//           <FaStarHalfAlt
//             key={`half-${i}`}
//             className="text-yellow-400 text-xl"
//           />
//         ))}
//         {[...Array(emptyStars)].map((_, i) => (
//           <FaStar key={`empty-${i}`} className="text-gray-300 text-xl" />
//         ))}
//       </div>
//     );
//   };

//   return (
//     <div
//       className="text-center relative"
//       onMouseEnter={() => setShowDetails(true)}
//       onMouseLeave={() => setShowDetails(false)}
//     >
//       <h2 className="text-lg font-semibold text-gray-800 mb-3">Overall Score</h2>
//       <div className="flex justify-center items-center font-medium mb-2">
//         <span className="text-lg">{ratingsData.overall}</span>
//         <span className="text-lg">/5</span>
//       </div>
//       {generateStars(ratingsData.overall)}
//         <OverallRatingBar
//             rating={ratingsData.overall}
//             reviews={ratingsData.reviews}
//             showDetails={showDetails}
//          />
//      <RatingDetails ratings={ratingsData.details} showDetails={showDetails}/>
//     </div>
//   );
// };

// export default RatingDisplay;








// RatingDisplay.js
import React, { useState } from "react";

const RatingDisplay = ({ ratingData, reviews, StarRating }) => {
    const { individualScores } = ratingData;
    const [isHovered, setIsHovered] = useState(false);

    // Calculate the average score from individualScores
    const calculateOverallScore = () => {
        const scores = Object.values(individualScores);
        if (scores.length === 0) return 0;
        const sum = scores.reduce((acc, score) => acc + score, 0);
        return (sum / scores.length).toFixed(1); // round the value to 1 decimal place
    };
    const overallScore = calculateOverallScore();


    const generateBar = (score) => {
        return (
            <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                <div
                    className="bg-yellow-500 h-2.5 rounded-full"
                    style={{ width: `${(score / 5) * 100}%` }}
                ></div>
            </div>
        );
    };

    return (
        <div
            className="relative w-full overflow-hidden cursor-pointer h-40"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div
                className={`absolute w-full h-full transition-transform duration-300 flex items-center justify-center ${isHovered ? "-translate-x-full" : "translate-x-0"
                    }`}
            >
                {/* Rating star and review */}
                <div className="w-full text-center">
                    <div>
                        <h2 className="text-lg font-semibold text-gray-800 mb-3">
                            Overall Score
                        </h2>
                        <div className="flex justify-center items-center font-medium mb-2">
                            <span className="text-lg">{overallScore}</span>
                            <span className="text-lg">/5</span>
                        </div>
                    </div>
                    <div>
                         <StarRating rating={overallScore} />
                        <p className="text-gray-600 text-sm mt-2">
                            Based on {reviews} Reviews
                        </p>
                    </div>
                </div>
            </div>

            {/* Rating Bar */}
            <div
                className={`absolute w-full h-full transition-transform duration-300 flex items-center justify-center ${isHovered ? "translate-x-0" : "translate-x-full"
                    }`}
            >
                <div className="w-full">
                    {Object.entries(individualScores).map(([key, score]) => (
                        <div key={key} className="mb-2">
                            <div className="flex justify-between mb-1">
                                <span className="text-sm font-semibold text-gray-700">
                                    {key.charAt(0).toUpperCase() + key.slice(1)}
                                </span>
                                <span className="text-sm font-medium text-gray-700">
                                    {score}
                                </span>
                            </div>
                            {generateBar(score)}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default RatingDisplay;
