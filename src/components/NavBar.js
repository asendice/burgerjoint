import React, { useState } from "react";
import bji from "../img/bji.png";

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleNavMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <div className="navbar">
        <div className="bji-icon-container">
          <img className="bji-icon" src={bji} />
          <p>Burger Joint</p>
        </div>
        <ul
          className="nav-links"
          style={{
            display: `${showMenu ? "none" : "flex"}`,
          }}
        >
          <li>
            <a>Menu</a>
          </li>
          <li>
            <a>Beverages</a>
          </li>
          <li>
            <a>Locations</a>
          </li>
          <li>
            <a>Member ?</a>
          </li>
          <li>
            <a>Contact Us</a>
          </li>
          <li>
            <a>Order Now</a>
          </li>
        </ul>
        <div className="nav-burger-container">
          <div onClick={() => toggleNavMenu()} className="nav-burger">
            <div className="line-1"></div>
            <div className="line-2"></div>
            <div className="line-3"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
