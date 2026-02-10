
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProductCard from "./components/ProductCard";
import SearchBar from "./components/SearchBar";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import Home from "./components/Home";

function App() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [cart, setCart] = useState([]);

  // API CALL
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const filteredProducts = products.filter(item =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <BrowserRouter>
      <Routes>
        
        <Route
          path="/"
          element={
            <Home
              products={filteredProducts}
              addToCart={addToCart}
              search={search}
              setSearch={setSearch}
              cart={cart}
            />
          }
        />

        
        <Route path="/checkout" element={<Checkout cart={cart} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
