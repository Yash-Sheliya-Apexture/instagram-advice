import React, { useMemo } from "react";
import { FaStar } from "react-icons/fa";
import { GiCheckMark } from "react-icons/gi";

const HostCard = React.memo(({ logo, rating, features, reviews }) => {
  const filledStars = useMemo(() => Math.floor(rating), [rating]);
  const hasHalfStar = useMemo(() => rating % 1 !== 0, [rating]);

  const renderStars = useMemo(() => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      if (i < filledStars) {
        stars.push(
          <FaStar
            key={`filled-${i}`}
            className="inline-block mr-1 text-yellow-500 size-6"
          />
        );
      } else if (i === filledStars && hasHalfStar) {
        stars.push(
          <FaStar
            key={`half-${i}`}
            className="inline-block mr-1 text-yellow-500 opacity-50 size-6"
          />
        );
      } else {
        stars.push(
          <FaStar
            key={`empty-${i}`}
            className="inline-block mr-1 text-yellow-500 opacity-30 size-6"
          />
        );
      }
    }
    return stars;
  }, [filledStars, hasHalfStar]);

  return (
    <div className="bg-white p-5 rounded-xl shadow-main-shadow transition-shadow duration-300 overflow-hidden flex flex-col justify-between min-h-[300px]">
      {/* Image */}
      <div>
        <img src={logo} alt="" className="h-12" />
      </div>
  
      <div className="mt-3">
        <span>{renderStars}</span>
      </div>

      <div className="flex justify-between">
        <div className="inline-flex gap-1">
          <span className="text-sm text-gray-500">Rating:</span>
          <span className="text-sm font-semibold text-gray-900">{rating}/5</span>
        </div>
        <div className="inline-flex gap-1">
          <span className="text-sm text-gray-500">Reviews:</span>
          <span className="text-sm font-semibold text-gray-900">{reviews}</span>
        </div>
      </div>

      <div className="mt-3">
        {features.map((feature, index) => (
          <p
            key={index}
            className="text-gray-700 text-sm flex items-center mb-2 max-w-fit"
          >
            <GiCheckMark className="mr-1 text-blue-500" />
            {feature}
          </p>
        ))}
      </div>
      <div className="">
        <button className="text-white font-medium bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg transition-colors p-2 w-full">
          visit site
        </button>
      </div>
    </div>
  );
});

export default HostCard;