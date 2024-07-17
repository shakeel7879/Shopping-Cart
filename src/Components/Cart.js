import React, { useEffect, useState } from "react";
import "./CSS/Cart.css";

export const Cart = ({ cart, setCart }) => {
  const [total, setTotal] = useState(0);
  useEffect(() => {
    setTotal(cart.reduce((acc, curr) => acc + parseInt(curr.price), 0));
  }, [cart]);
  return (
    <>
      <div className="cart-body">
        <h1 className="head">Cart Page</h1>
        <p className="discription">
          This time around, visitors to the exhibit hall filled with cannabis
          educational and farm displays will be able to scan QR codes next to
          displays of this year’s California State Fair Cannabis Award winners
          and add the goods to an online shopping cart.The online store’s sales
          surged, profits tripled, and popularity soared as people clicked away
          on their shopping carts from home.The suspect then pushed the shopping
          cart toward an exit and fled the store while carrying the child,
          officials From simple to slightly advanced, discovering these nuggets
          of wisdom has resulted in a full Amazon shopping cart and excitement
          for my next plane ride.
        </p>
        <div className="cart-container">
          {cart.map((data) => (
            <div className="cart-product">
              <div className="img">
                <img src={data.image} alt="images" />
              </div>
              <div className="details">
                <h3>{data.name}</h3>
                <p>Product Price : {data.price}</p>
              </div>
            </div>
          ))}
        </div>

        <h2 className="amt">Total Amount : {total}</h2>
        <button className="checkBtn">Check Out</button>
      </div>
    </>
  );
};
