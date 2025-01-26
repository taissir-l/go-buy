import React from "react";
import { ProductBadge, ProductRatings } from "./";
import "./styles/ProductDetails.css";

const ProductDetails = ({ product, ratings }) => {
  return React.createElement(
    "div",
    { className: "product-details-container" },
    React.createElement(
      "div",
      { className: "product-title" },
      product.title
    ),
    React.createElement(
      "div",
      { className: "product-brand" },
      "by ",
      React.createElement("span", { className: "product-brand-name" }, product.brand)
    ),
    ratings &&
      React.createElement(
        "div",
        { className: "product-ratings" },
        React.createElement(ProductRatings, {
          avgRating: product.avgRating,
          ratings: product.ratings,
        })
      ),
    React.createElement(
      "div",
      { className: "product-attribute" },
      product.attribute
    ),
    React.createElement(ProductBadge, { badge: product.badge })
  );
};

export default ProductDetails;
