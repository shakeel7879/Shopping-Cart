import React from "react";
import "./CSS/NavBar.css";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <>
      <div className="navbar-container">
        <div className="logo">
          <h1>NIA</h1>
        </div>
        <ul className="nav-menu">
          <li>
            <Link to={"/home"}>Home</Link>
          </li>
          <li>
            <Link to={"/product"}>Product</Link>
          </li>
          <li>
            <Link to={"/register"}>Register</Link>
          </li>
          <li>
            <Link to={"/cart"}>Cart</Link>
          </li>
        </ul>
        <div className="search">
          <input type="text" placeholder="Search" />
        </div>
      </div>
    </>
  );
};
