import React from "react";
import bji from "../img/bji.png";

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="navbar-container">
        <div>Menu</div>
        <div>Shakes & Cocktails</div>
        <div>Locations</div>

        <div className="bji-icon-container">
          <img className="bji-icon" src={bji} />
          <p>Burger Joint</p>
        </div>

        <div>Join BurgerJoint?</div>
        <div>Contact Us</div>
        <div>Order Now</div>
      </div>
    </div>
  );
};

export default NavBar;
