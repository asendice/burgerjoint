import React from "react";
import { NavLink } from "react-router-dom";

const Landing = () => {
  return (
    <div className="landing">
      <div className="title">
        <h1>MOUTH </h1>
        <h1> WATERING </h1>
        <h1> TASTE</h1>
        <NavLink to="/menu">
          <button className="orange-button">See Full Menu</button>
        </NavLink>
      </div>
    </div>
  );
};

export default Landing;
