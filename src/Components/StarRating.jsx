// StarRating.js
import React from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

const StarRating = ({ rating, size = "text-xl", color = "text-yellow-400", emptyColor = "text-gray-300" }) => {
    const fullStars = Math.floor(rating);
    const halfStars = rating % 1 >= 0.5 ? 1 : 0;
    const emptyStars = 5 - fullStars - halfStars;

    return (
        <div className="flex justify-center items-center space-x-1">
            {[...Array(fullStars)].map((_, i) => (
                <FaStar key={`full-${i}`} className={`${color} ${size}`} />
            ))}
            {[...Array(halfStars)].map((_, i) => (
                <FaStarHalfAlt
                    key={`half-${i}`}
                    className={`${color} ${size}`}
                />
            ))}
            {[...Array(emptyStars)].map((_, i) => (
                <FaStar key={`empty-${i}`} className={`${emptyColor} ${size}`} />
            ))}
        </div>
    );
};

export default StarRating;