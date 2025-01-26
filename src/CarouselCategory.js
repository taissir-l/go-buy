import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { useNavigate, createSearchParams } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import "./styles/CarouselCategory.css";



const CarouselCategory = () => {
  const navigate = useNavigate();

  const searchCategory = (category) => {
    navigate({
      pathname: "search",
      search: `${createSearchParams({
        category: `${category}`,
        searchTerm: ``,
      })}`,
    });
  };

  const categories = [
    { id: 0, name: "Deals", image: "../images/category_0.jpg" },
    { id: 1, name: "Amazon", image: "../images/category_1.jpg" },
    { id: 2, name: "Fashion", image: "../images/category_2.jpg" },
    { id: 3, name: "Computers", image: "../images/category_3.jpg" },
    { id: 4, name: "Home", image: "../images/category_4.jpg" },
    { id: 5, name: "Mobiles", image: "../images/category_5.jpg" },
  ];

  return React.createElement(
    "div",
    { className: "carousel-category-container" },
    React.createElement(
      "div",
      { className: "carousel-title" },
      "Shop by Category"
    ),
    React.createElement(
      Swiper,
      {
        slidesPerView: 5,
        spaceBetween: 10,
        navigation: true,
        modules: [Navigation],
        className: "carousel-swiper",
      },
      categories.map((category) =>
        React.createElement(
          SwiperSlide,
          {
            key: category.id,
            onClick: () => searchCategory(category.name),
            className: "carousel-slide",
          },
          React.createElement("img", {
            src: category.image,
            alt: `${category.name} category`,
            className: "carousel-image",
          })
        )
      )
    )
  );
};

export default CarouselCategory;
