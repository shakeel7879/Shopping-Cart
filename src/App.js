import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { NavBar } from "./Components/NavBar";
import { Home } from "./Components/Home";
import { Register } from "./Components/Register";
import { Cart } from "./Components/Cart";
import { useState } from "react";
import { Product } from "./Components/Product";

function App() {
  const [cart, setCart] = useState([]);
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route
            path="/home"
            element={<Home cart={cart} setCart={setCart} />}
          />
          <Route
            path="/product"
            element={<Product cart={cart} setCart={setCart} />}
          />
          <Route path="/register" element={<Register />} />

          <Route
            path="/cart"
            element={<Cart cart={cart} setCart={setCart} />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
