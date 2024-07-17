import React from "react";
import "./CSS/Dresses.css";

export const Dresses = ({ data, cart, setCart }) => {
  const name =
    data.name.length > 16 ? data.name.substring(0, 15) + "..." : data.name;
  const addCart = () => {
    setCart([...cart, data]);
  };
  const removeCart = () => {
    setCart(cart.filter((c) => c.id !== data.id));
  };
  return (
    <>
      <div className="dress-body">
        <div className="dresses">
          <div className="img">
            <img src={data.image} alt={data.name} />
          </div>
          <div className="dress-details">
            <h3>{name}</h3>
            <p>Product Price : ${data.price}</p>
            {cart.includes(data) ? (
              <button className="btnremove" onClick={removeCart}>
                Remove
              </button>
            ) : (
              <button className="btnAdd" onClick={addCart}>
                Add
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
