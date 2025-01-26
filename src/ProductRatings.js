import React from "react";
import { Star, StarBorder } from "@mui/icons-material"; // Import MUI icons
import './styles/ProductRatings.css'; // Import the CSS file

const ProductRatings = (props) => {
  const starNumber = props.avgRating;
  const ratingNumber = props.ratings;

  return (
    <div className="ratings-container">
      {/* Render filled stars */}
      {Array.from({ length: starNumber }, (_, i) => (
        <Star key={i} className="star filled" />
      ))}
      {/* Render empty stars */}
      {Array.from({ length: 5 - starNumber }, (_, i) => (
        <StarBorder key={i} className="star" />
      ))}
      <span className="rating-text">{ratingNumber} ratings</span>
    </div>
  );
};

export default ProductRatings;
