import React from "react";
import "./CSS/Register.css";

export const Register = () => {
  return (
    <>
      <div className="reg-container">
        <div className="form">
          <h2>Register</h2>
          <div className="input-group">
            <input type="text" placeholder="User Name" />
          </div>
          <div className="input-group">
            <input type="mail" placeholder="E Mail" />
          </div>
          <div className="input-group">
            <input type="password" placeholder="Password" />
          </div>
          <div className="input-group">
            <input type="password" placeholder="Confirm Password" />
          </div>
          <div className="check-boxes">
            <input type="checkbox" />
            <p>Accept The Terms And Condition</p>
          </div>
          <button>Register</button>
        </div>
      </div>
    </>
  );
};
