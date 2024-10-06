import React from "react";

const reviews = [
  {
    reviewer: "Sara Jhon",
    comment: "This is a very nice phone in low budget.",
    rating: 4,
    avatar: "https://via.placeholder.com/40",
  },
  {
    reviewer: "Danish Josh",
    comment: "The brand apple is original!",
    rating: 4,
    avatar: "https://via.placeholder.com/40",
  },
  {
    reviewer: "Jhon Doe",
    comment: "Excellent product and awesome quality.",
    rating: 5,
    avatar: "https://via.placeholder.com/40",
  },
  {
    reviewer: "Christine",
    comment: "The brand apple is original!",
    rating: 3,
    avatar: "https://via.placeholder.com/40",
  },
  {
    reviewer: "Michle",
    comment: "The brand apple is original!",
    rating: 4,
    avatar: "https://via.placeholder.com/40",
  },
];

const ReviewCard = ({ review }) => {
  return (
    <>
      <div className=" py-3 border-b">
        <div className="flex items-center space-x-4">
          <img
            src={review.avatar}
            alt="avatar"
            className="w-10 h-10 rounded-full"
          />
          <div>
            <p className="text-sm text-cyan-800 font-bold">{review.reviewer}</p>
            <div className="flex items-center">
              {Array(5)
                .fill(0)
                .map((_, index) => (
                  <svg
                    key={index}
                    xmlns="http://www.w3.org/2000/svg"
                    fill={index < review.rating ? "currentColor" : "none"}
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className={`w-5 h-5 ${
                      index < review.rating
                        ? "text-yellow-400"
                        : "text-gray-300"
                    }`}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.212c.969 0 1.371 1.24.588 1.81l-3.411 2.482a1 1 0 00-.364 1.118l1.286 3.957c.3.921-.755 1.688-1.54 1.118l-3.411-2.482a1 1 0 00-1.176 0l-3.411 2.482c-.785.57-1.84-.197-1.54-1.118l1.286-3.957a1 1 0 00-.364-1.118L2.317 9.384c-.783-.57-.381-1.81.588-1.81h4.212a1 1 0 00.95-.69l1.286-3.957z"
                    />
                  </svg>
                ))}
            </div>
            <p className="text-sm text-gray-400">{review.comment}</p>
          </div>
        </div>
      </div>
    </>
  );
};

const CustomerReviewCard = () => {
  return (
    <div className="bg-white p-6 rounded-lg w-full max-h-[38rem] max-w-4xl mx-auto">
      <h2 className="text-lg font-semibold mb-4">Customer Review</h2>
      <div className="space-y-3">
        {reviews.slice(0, 5).map((review, index) => (
          <ReviewCard key={index} review={review} />
        ))}
        <div className="flex justify-center">
          <button className="text-cyan-800 font-bold cursor-pointer hover:text-blue-600 mt-2">
            View More Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default CustomerReviewCard;
