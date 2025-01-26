import React, { useEffect, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { ProductDetails } from "./";
import { callAPI } from "./utils/axios";
import { GB_CURRENCY } from "./utils/constants";
import { useBasket } from "./BasketContext"; // Use the Basket context
import "./styles/SearchResults.css";

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const [products, setProducts] = useState(null);
  const { addToBasket, removeFromBasket, basket2 } = useBasket(); // Access addToBasket and removeFromBasket from BasketContext

  const getSearchResults = () => {
    const searchTerm = searchParams.get("searchTerm");
    const category = searchParams.get("category");

    callAPI("data/search.json").then((searchResults) => {
      const categoryResults = searchResults[category];
      if (searchTerm) {
        const results = categoryResults.filter((product) =>
          product.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setProducts(results);
      } else {
        setProducts(categoryResults);
      }
    });
  };

  useEffect(() => {
    getSearchResults();
  }, [searchParams]);

  // Check if a product is already in the basket
  const isInBasket = (productId) => basket2.some((product) => product.id === productId);

  return (
    <div className="search-results-container">
      {products &&
        products.map((product, key) => (
          <Link key={key} to={`/product/${product.id}`}>
            <div className="product-card">
              <div className="product-image">
                <img
                  className="image"
                  src={product.image_small}
                  alt="Search result product"
                />
              </div>
              <div className="product-details">
                <div className="product-info">
                  <ProductDetails product={product} ratings={true} />
                  <div className="product-price">
                    {GB_CURRENCY.format(product.price)}
                  </div>
                  {!isInBasket(product.id) ? (
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        addToBasket(product); // Use addToBasket to add the product
                      }}
                      className="add-to-cart-button"
                    >
                      Add to Basket
                    </button>
                  ) : (
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        removeFromBasket(product.id); // Remove the product from the basket
                      }}
                      className="remove-from-cart-button"
                    >
                      Remove from Basket
                    </button>
                  )}
                </div>
              </div>
            </div>
          </Link>
        ))}
    </div>
  );
};

export default SearchResults;
