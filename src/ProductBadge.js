import React from 'react';
import './styles/ProductBadge.css';


const ProductBadge = ({ badge }) => {
  if (badge === "choice") {
    return (
      <span className="badge choice">
        Amazon's <span className="highlight">Choice</span>
      </span>
    );
  } else if (badge === "seller") {
    return (
      <span className="badge seller">
        #1 Best Seller
      </span>
    );
  } else if (badge === "limited") {
    return (
      <span className="badge limited">
        Limited Time Deal
      </span>
    );
  }

  return <div></div>;
};

export default ProductBadge;
