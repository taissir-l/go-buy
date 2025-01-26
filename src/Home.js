import React from "react";
import "./styles/Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img className="home__image" src="/images/banner.jpg" alt="banner" />
        <div className="home__row">
          <Product
            id={123665}
            title="Makeup brushes"
            price={26.85}
            image="https://beautystore.tn/23657-large_default/solde-kit-multi--kit-multi-midi-glow-eponge-.jpg"
            rating={5}
          />
          <Product 
          id={125341}
          title="Blush essance"
          price={30.25}
          image="https://beautystore.tn/15462-large_default/blush-liquide-joues-et-l%C3%A8vres--what-a-tint-lip-cheek-tint-.jpg"
          rating={4}/>
          <Product id={124765}
            title="Face cleaner"
            price={10.50}
            image="https://beautystore.tn/21634-medium_default/physiopure-gel%C3%A9e-moussante-400ml.jpg"
            rating={4} />
        </div>
        <div className="home__row">
          <Product 
          id={121965}
          title="Hair vitamines"
          price={40.25}
          image="https://beautystore.tn/23808-medium_default/gummies-collag%C3%A8ne-anti-%C3%A2ge-sans-sucre.jpg"
          rating={4} />
          <Product
          id={123725}
          title="Mackeup remover"
          price={8.75}
          image="https://beautystore.tn/19900-medium_default/d%C3%A9maquillant-2-en-1-express-biphasique-150ml.jpg"
          rating={5} />
          <Product 
          id={121265}
          title="Eyeshadows"
          price={45.05}
          image="https://beautystore.tn/23675-medium_default/solde-highlighter--reloaded-.jpg"
          rating={3}/>
          <Product
          id={174665}
          title="Hair oil"
          price={26.99}
          image="https://beautystore.tn/23663-medium_default/solde-huile-amincissante-jardin-secret-150ml.jpg"
          rating={4} />
        </div>
        <div className="home__row">
          <Product 
          id={124565}
          title="sunscrean"
          price={10.20}
          image="https://beautystore.tn/20230-medium_default/sun-secure-blur-spf-50-sans-parfum-50-ml.jpg"
          rating={5}/>
          <Product  id={133665}
            title="Face mask"
            price={8.99}
            image="https://beautystore.tn/23595-medium_default/solde-masque-hyaluronique.jpg"
            rating={5}/>
          <Product
          id={193665}
          title="hair styler"
          price={386.75}
          image="https://beautystore.tn/23559-medium_default/solde-fer-%C3%A0-friser-automatique-210%C2%B0c.jpg"
          rating={3} />
        </div>
      </div>
    </div>
  );
}

export default Home;
