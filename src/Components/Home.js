import React from "react";
import "./CSS/Home.css";
import hero from "../Assets/hero.png";

export const Home = (cart, setCart) => {
  return (
    <>
      <div className="home-container">
        <div className="banner-1">
          <div className="banner-left">
            <h2>Great Offers!!!</h2>
            <p>Don't Miss the Offers This offer will expired soon</p>
            <p>To Order NOW!!!</p>
            <button>OFFERS</button>
          </div>
          <div className="banner-right">
            <div className="img">
              <img src={hero} alt="" />
            </div>
          </div>
        </div>
        <div className="line">
          <hr />
        </div>
      </div>
    </>
  );
};
