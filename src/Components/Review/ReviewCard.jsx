// import React, { useState, useEffect } from "react";
// import { FaStar } from "react-icons/fa";

// const StarRating = ({ rating, maxRating = 5 }) => {
//     const stars = Array.from({ length: maxRating }, (_, index) => (
//         <FaStar
//             key={index}
//             className={`inline-block ${
//                 index < rating ? "text-yellow-500" : "text-gray-300"
//             }`}
//         />
//     ));

//     return <div className="inline-block">{stars}</div>;
// };

// const ReviewCard = ({
//     reviewerName,
//     avatarUrl,
//     location,
//     rating,
//     comment,
// }) => {
//     return (
//         <div className="bg-gray-800 text-white rounded-lg p-6 flex flex-col items-start relative mt-2">
//             <div className=" top-4 left-4 text-gray-500 text-4xl">“</div>
//             <div className="text-lg mb-4 leading-relaxed">{comment}</div>

//             <div className="flex items-center w-full mt-4">
//                 {avatarUrl && (
//                     <img
//                         src={avatarUrl}
//                         alt={`Avatar of ${reviewerName}`}
//                         className="w-12 h-12 rounded-full object-cover mr-4"
//                     />
//                 )}
//                 <div className="flex-1">
//                     <div className="font-bold ">{reviewerName}</div>
//                     {location && (
//                         <div className="text-sm text-gray-400">{location}</div>
//                     )}
//                 </div>
//                 <div className="flex items-center">
//                     <StarRating rating={rating} />
//                     <span className="ml-2 font-medium">{rating}.0</span>
//                 </div>
//             </div>
//         </div>
//     );
// };

// const ReviewCards = () => {
//     const [reviewGroups, setReviewGroups] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         const fetchReviews = async () => {
//             try {
//                 const response = await fetch("/data.json");
//                 if (!response.ok) {
//                     throw new Error(`HTTP error! status: ${response.status}`);
//                 }
//                 const data = await response.json();
//                 setReviewGroups(data.reviewGroups);
//             } catch (err) {
//                 setError(err);
//             } finally {
//                 setLoading(false);
//             }
//         };
//         fetchReviews();
//     }, []);

//     if (loading) {
//         return <div>Loading reviews...</div>;
//     }

//     if (error) {
//         return <div>Error: {error.message}</div>;
//     }

//     return (
//         <section className="Review py-12">
//             <div className="container mx-auto">
//                 <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//                     {reviewGroups.map((group, index) => (
//                          <div
//                              key={group.id}
//                              className={`marquee-column marquee-column-${index + 1}`}
//                          >
//                            <div className="marquee-content">
//                               {group.reviews.map((review, reviewIndex) => (
//                                    <ReviewCard key={reviewIndex} {...review} />
//                               ))}
//                             </div>
//                         </div>
//                      ))}
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default ReviewCards;

import React, { useState, useEffect, useRef } from "react";
import { FaStar } from "react-icons/fa";

const StarRating = ({ rating, maxRating = 5 }) => {
  const stars = Array.from({ length: maxRating }, (_, index) => (
    <FaStar
      key={index}
      className={`inline-block ${
        index < rating ? "text-yellow-500" : "text-gray-300"
      }`}
    />
  ));

  return <div className="inline-block">{stars}</div>;
};

const ReviewCard = ({ reviewerName, avatarUrl, location, rating, comment }) => {
  return (
    <div className="bg-white border rounded-3xl shadow-main-shadow p-6 flex flex-col items-start relative mt-8">
      <div className=" top-4 left-4 text-gray-500 text-4xl">“</div>
      <div className="text-lg mb-4 leading-relaxed">{comment}</div>

      <div className="flex items-center w-full mt-4">
        {avatarUrl && (
          <img
            src={avatarUrl}
            alt={`Avatar of ${reviewerName}`}
            className="w-12 h-12 rounded-full object-cover mr-4"
          />
        )}
        <div className="flex-1">
          <div className="font-bold ">{reviewerName}</div>
          {location && <div className="text-sm text-gray-400">{location}</div>}
        </div>
        <div className="flex items-center">
          <StarRating rating={rating} />
          <span className="ml-2 font-medium">{rating}.0</span>
        </div>
      </div>
    </div>
  );
};

const ReviewCards = () => {
  const [reviewGroups, setReviewGroups] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const columnRefs = useRef([]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch("/data.json");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setReviewGroups(data.reviewGroups);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    fetchReviews();
  }, []);

  useEffect(() => {
    // Initial positioning and cloning logic for infinite scrolling
    reviewGroups.forEach((group, index) => {
      if (columnRefs.current[index]) {
        const columnContent =
          columnRefs.current[index].querySelector(".marquee-content");
        if (columnContent) {
          const contentHeight = columnContent.offsetHeight;
          columnContent.style.transform = "translateY(0px)";
          // Clone the content and append it
          const clonedContent = columnContent.cloneNode(true);
          columnRefs.current[index].appendChild(clonedContent);
          // start the animation from a point that makes the scroll smoother
          clonedContent.style.transform = `translateY(${contentHeight}px)`;

          // Reset position when animation ends
          columnContent.addEventListener("animationiteration", () => {
            clonedContent.style.transform = `translateY(${contentHeight}px)`;
          });
        }
      }
    });
  }, [reviewGroups]);

  if (loading) {
    return <div>Loading reviews...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <section className="Review py-12 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-5xl font-bold mb-2">
            Trusted by{" "}
            <span className=" bg-gradient-to-br from-yellow-400 to-orange-600 text-transparent bg-clip-text">
              55,000+
            </span>{" "}
            customers all over the world
          </h2>
          <p className="text-lg">
            Don't just take our word for it - see what our satisfied customers
            have to say about their Instagram glow up!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 h-[700px] max-h-[150vh] overflow-hidden relative">
          {reviewGroups.map((group, index) => (
            <div
              key={group.id}
              className={`marquee-column marquee-column-${index + 1}`}
              ref={(el) => (columnRefs.current[index] = el)}
            >
              <div className="marquee-content">
                {group.reviews.map((review, reviewIndex) => (
                  <ReviewCard key={reviewIndex} {...review} />
                ))}
              </div>
            </div>
          ))}
          <div class="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-gray-50"></div>
          <div class="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-gray-50"></div>
        </div>
      </div>
    </section>
  );
};

export default ReviewCards;
