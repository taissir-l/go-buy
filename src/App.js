import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/" element={<Home />} />
          <Route path="*" element={<div>Page Not Found</div>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
