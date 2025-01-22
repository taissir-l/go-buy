import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img className="home__image" src="/images/banner.png" alt="banner" />
        <div className="home__row">
          <Product
            title="the watch"
            price={26.85}
            image="https://beautystore.tn/23657-large_default/solde-kit-multi--kit-multi-midi-glow-eponge-.jpg"
            rating={5}
          />
          <Product />
          <Product />
        </div>
        <div className="home__row">
          <Product />
          <Product />
          <Product />
          <Product />
        </div>
        <div className="home__row">
          <Product />
          <Product />
          <Product />
        </div>
      </div>
    </div>
  );
}

export default Home;
