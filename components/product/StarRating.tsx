import React from "react";
import { FaStar } from "react-icons/fa";

const StarRating = () => {
  return (
    <div className="flex  p-2 rounded">
      {[...Array(5)].map((_, index) => (
        <FaStar key={index} className="text-orange-400 w-6 h-6" />
      ))}
    </div>
  );
};

export default StarRating;
