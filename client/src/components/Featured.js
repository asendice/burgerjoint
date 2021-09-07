import React from "react";
import { NavLink } from "react-router-dom";

const Featured = () => {
  return (
    <div className="landing-section">
      <h1 className="landing-section-title">Burger Joint's Features </h1>
      <div className="card-container">
        <div
          key="burger"
          className="card"
          style={{ backgroundColor: "#F8AC6A" }}
        >
          <h2>Classic Joint Burger</h2>
          <img
            alt="classic joint buger"
            src="https://burgerjoint.s3.us-west-1.amazonaws.com/classic-joint-burger.png"
          />
        </div>
        <div
          key="salad"
          className="card"
          style={{ backgroundColor: "#F58220" }}
        >
          <h2>Cobb Salad</h2>
          <img
            alt="cobb salad"
            src="https://burgerjoint.s3.us-west-1.amazonaws.com/Grilled-Chicken_Cobb-Salad_Web.png"
          />
        </div>
        <div
          key="fries"
          className="card"
          style={{ backgroundColor: "#2092F5" }}
        >
          <h2>Sweet Potatoe Fries</h2>
          <img
            alt="fries"
            src="https://burgerjoint.s3.us-west-1.amazonaws.com/Sweet-Potato-Fries_web.png"
          />
        </div>
      </div>
      <button>
        <NavLink to="/menu">See Full Menu</NavLink>
      </button>
    </div>
  );
};

export default Featured;
