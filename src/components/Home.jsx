
import React from "react";
import Navbar from "./Navbar";
import ProductCard from "./ProductCard";
import SearchBar from "./SearchBar";
import Cart from "./Cart";
import { useNavigate } from "react-router-dom";

const Home = ({ products, addToCart, search, setSearch, cart }) => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-100 via-pink-100 to-yellow-100">
      
      <Navbar cartCount={cart.length} />

      <div className="p-6 max-w-7xl mx-auto">
        
        <SearchBar setSearch={setSearch} />

       
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
          {products.map(product => (
            <ProductCard
              key={product.id}
              product={product}
              addToCart={addToCart}
            />
          ))}
        </div>

       
        <Cart
          cart={cart}
          onCheckout={() => navigate("/checkout")}
        />
      </div>
    </div>
  );
};

export default Home;

