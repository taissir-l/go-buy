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

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

function AppContent() {
  const location = useLocation();

  // Define paths where the Header should be displayed
  const showHeader = ["/", "/checkout"].includes(location.pathname);

  return (
    <div className="app">
      {showHeader && <Header />}
      <Routes>
        <Route path="/Login" element={<Login />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/" element={<Home />} />
        <Route path="*" element={<div> 💔Page Not Found</div>} />
      </Routes>
    </div>
  );
}

export default App;
