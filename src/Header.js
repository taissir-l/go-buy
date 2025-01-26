import React from "react";
import "./styles/Header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";
import Search from "./Search";
import { useBasket } from "./BasketContext"; // Use the Basket context



function Header() {
  const [{ basket, user }, dispatch] = useStateValue();
  const { basket2 } = useBasket(); // Use basket from BasketContext
  const totalBasketCount = (basket?.length || 0) + (basket2.length || 0);
  const getNameFromEmail = (email) => email.split('@')[0]; // This will extract part before @ in the email


  const handleAuthenticaton = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <div className="header">
      <Link to="/">
        <img className="header__logo" src="/images/logo.jpg" alt="logo"></img>
      </Link>
      <div className="header__search">
        <Search/>
      </div>
      <div className="header__nav">
        <Link to={!user && "/login"}>
          <div onClick={handleAuthenticaton} className="header__option">
            <span className="header__optionOne">
              Hello {!user ? "Guest" : getNameFromEmail(user.email)}
            </span>
            <span className="header__optionTwo">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>
      
        <Link to="/checkout">
          <div className="header__optionBasket">
            <ShoppingBasketIcon />
            <span className="header__optionLineTwo header__basketCount">
              {totalBasketCount} 
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
