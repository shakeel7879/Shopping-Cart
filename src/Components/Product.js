import React from "react";
import { Dresses } from "./Dresses";
import data from "../Assets/Data.json";
import "./CSS/Product.css";

export const Product = ({ cart, setCart }) => {
  return (
    <>
      <div className="product-container">
        {data.map((data) => (
          <Dresses key={data.id} data={data} cart={cart} setCart={setCart} />
        ))}
      </div>
    </>
  );
};
