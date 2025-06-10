import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import Product from "./Product";
import Nopage from "./Nopage";
import p from "./p.png";
import q from "./q.png";
import Productsata from "./Productsata";
export default function Main() {
  const x = [
    { id: "001", name: "Product 1", image: p, price: 2000 },
    { id: "002", name: "Product 2", image: q, price: 6000 },
  ];
  return (
    <div>
      <Router>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/product">Product</Link>
          </li>
          <li>
            <Link to="/productdata">Product Data</Link>
          </li>
        </ul>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="*" element={<Nopage />} />
          <Route path="/productdata" element={<Productsata data={x} />} />
        </Routes>
      </Router>
    </div>
  );
}
