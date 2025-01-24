import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import "./App.css";
import Login from "./Login";
import { useEffect } from "react";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import Payment from "./Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";


const promise = loadStripe("pk_test_51Qkkx4KdLRsFeXSdOgtYG2hJhFnEozw4MlMisT0NSZQCe4JmSVs0ffUWWa6F7qTZilubMhW1iEfK6eQxI9ZEsN8W00iFfhnpef");


function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <Router>
      <AppContent />
    </Router>
  );
}

function AppContent() {
  const location = useLocation();

  // Define paths where the Header should be displayed
  const showHeader = ["/", "/checkout", "/payment"].includes(location.pathname);

  return (
    <div className="app">
      {showHeader && <Header />}
      <Routes>
        <Route path="/Login" element={<Login />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route
        path="/payment"
        element={
          <>
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </>
        }
      />
        <Route path="/" element={<Home />} />
        <Route path="*" element={<div> 💔Page Not Found</div>} />
      </Routes>
    </div>
  );
}

export default App;
