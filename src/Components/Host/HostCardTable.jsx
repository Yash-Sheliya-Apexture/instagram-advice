// import React from "react";
// import { IoIosArrowDown } from "react-icons/io"; // Import only one arrow icon

// const HostCardTable = ({
//   showAllPlans,
//   plansData,
//   handleShowAllPlans,
//     generateSingleStar
// }) => {
//   return (
//     <>
//       <div
//         className={`overflow-hidden transition-max-height duration-500 ease-in-out ${
//           showAllPlans ? "max-h-96" : "max-h-0"
//         }`}
//       >
//         {showAllPlans && (
//           <div className="overflow-x-auto">
//             <table className="w-full border-collapse table-auto">
//               <thead>
//                 <tr className=" border-b text-nowrap">
//                   <th className=" p-3 font-bold text-left">Plan Name</th>
//                   <th className=" p-3 text-left">Features</th>
//                   <th className=" text-left">Price</th>
//                   <th className=" p-3 text-left">Score</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {plansData.plans.map((plan, index) => (
//                     <tr key={index} className="text-nowrap">
//                       <td className="border-b p-3">{plan.name}</td>
//                       <td className="border-b p-3">{plan.space}</td>
//                       <td className="border-b p-3">${plan.price}/mo</td>
//                         <td className="border-b p-3 flex items-center gap-2">
//                              {generateSingleStar(plan.score)}
//                             <span className="text-gray-700">{plan.score}</span>
//                         </td>
//                     </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         )}
//       </div>
//         <hr/>
//       {/* Modified button with single rotating arrow */}
//       <button
//         onClick={handleShowAllPlans}
//         className="w-full text-center font-semibold py-4 rounded transition-colors flex items-center justify-center gap-2"
//       >
//         {showAllPlans ? "Hide All Plans" : "Show All Plans"}
//         <span
//           className={`transition-transform duration-300 ${
//             showAllPlans ? "rotate-180" : "rotate-0"
//           }`}
//         >
//           <IoIosArrowDown />
//         </span>
//       </button>
//     </>
//   );
// };

// export default HostCardTable;





// HostCardTable.js
import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import StarRating from "../StarRating"; // Import the StarRating component


const HostCardTable = ({
    showAllPlans,
    plansData,
    handleShowAllPlans,
}) => {


    return (
        <>
            <div
                className={`overflow-hidden transition-all duration-500 ease-linear ${
                    showAllPlans ? "max-h-96" : "max-h-0"
                }`}
            >
                {showAllPlans && (
                    <div className="overflow-x-auto">
                        <table className="w-full border-collapse table-auto bg-gray-100">
                             <thead>
                            <tr className=" border-b text-nowrap bg-gray-100">
                                <th className=" p-3 font-bold text-left text-gray-700">Plan Name</th>
                                <th className=" p-3 text-left text-gray-700">Features</th>
                                <th className=" text-left text-gray-700">Price</th>
                                <th className=" p-3 text-left text-gray-700">Score</th>
                            </tr>
                            </thead>
                            <tbody>
                            {plansData.plans.map((plan, index) => (
                                <tr key={index} className="text-nowrap hover:bg-gray-50 transition">
                                    <td className="border-b p-3 text-gray-700">{plan.name}</td>
                                    <td className="border-b p-3 text-gray-700">{plan.space}</td>
                                    <td className="border-b p-3 text-gray-700">${plan.price}/mo</td>
                                    <td className="border-b p-3 flex items-center gap-2">
                                       <StarRating rating={plan.score} size="text-base" />
                                        <span className="text-gray-700">{plan.score}</span>
                                    </td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
            <hr className="border border-gray-100"/>
            {/* Modified button with single rotating arrow */}
            <button
                onClick={handleShowAllPlans}
                className={`w-full text-center font-medium py-4 rounded transition-colors flex items-center justify-center gap-2 text-gray-700 hover:text-blue-600 ${
                  showAllPlans ? "bg-gray-100" : ""
               }`}
            >
                {showAllPlans ? "Hide All Plans" : "Show All Plans"}
                <span
                    className={`transition-transform duration-300 ${
                        showAllPlans ? "rotate-180" : "rotate-0"
                    }`}
                >
                    <IoIosArrowDown />
                </span>
            </button>
        </>
    );
};

export default HostCardTable;