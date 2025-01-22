import React from "react";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="/images/banner.png"
          alt="banner"
        ></img>
        <div className="home__row">
          <div className="home__rowOne">
            <h1>Shop</h1>
          </div>
          <div className="home__rowTwo">
            <h1>Shop</h1>
          </div>
        </div>

        <div className="home__row">
          <div className="home__rowOne">
            <h1>Shop</h1>
          </div>
          <div className="home__rowTwo">
            <h1>Shop</h1>
          </div>
          <div className="home__rowThree">
            <h1>Shop</h1>
          </div>
          <div className="home__rowFour">
            <h1>Shop</h1>
          </div>
        </div>

        <div className="home__row">
          <div className="home__rowOne">
            <h1>Shop</h1>
          </div>
          <div className="home__rowTwo">
            <h1>Shop</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
