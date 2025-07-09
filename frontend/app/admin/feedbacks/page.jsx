"use client";
import { useState } from "react";

const dummyFeedback = [
  {
    id: 1,
    user: "Lily Mekonnen",
    rating: 4,
    comment: "RoomieFinder made it so easy to find a roommate. Thank you!",
  },
  {
    id: 2,
    user: "Abel Tadesse",
    rating: 2,
    comment: "Needs more filters and verification for room listings.",
  },
];

const FeedbackPage = () => {
  const [feedbacks, setFeedbacks] = useState(dummyFeedback);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-blue-800 mb-4">User Feedback</h1>
      <div className="space-y-4">
        {feedbacks.map((fb) => (
          <div
            key={fb.id}
            className="bg-white shadow rounded p-4 border border-gray-100"
          >
            <div className="flex justify-between items-center mb-1">
              <h3 className="font-semibold">{fb.user}</h3>
              <span className="text-yellow-500 font-medium">
                {Array(fb.rating).fill("⭐").join("")}
              </span>
            </div>
            <p className="text-gray-700">{fb.comment}</p>
          </div>
        ))}
        {feedbacks.length === 0 && (
          <p className="text-gray-500 text-center">No feedback available yet.</p>
        )}
      </div>
    </div>
  );
};

export default FeedbackPage;
