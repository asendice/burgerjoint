import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import bji from "../img/bji.png";

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleNavMenu = () => {
    setShowMenu(!showMenu);
  };

  const closeMenu = () => {
    setShowMenu(false);
  };

  return (
    <>
      <div className="navbar">
        <div className="bji-icon-container">
          <NavLink
            onClick={() => closeMenu()}
            className="bji-icon-container-link"
            to="/"
          >
            <img alt="bji icon" className="bji-icon" src={bji} />
            <p>Burger Joint</p>
          </NavLink>
        </div>
        <ul className="nav-links" id={showMenu === true ? "hidden" : ""}>
          <li>
            <NavLink
              onClick={() => closeMenu()}
              className="nav-links-link"
              to="/menu"
            >
              Menu
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={() => closeMenu()}
              className="nav-links-link"
              to="/"
            >
              Membership
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={() => closeMenu()}
              className="nav-links-link"
              to="/"
            >
              Locations
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={() => closeMenu()}
              className="nav-links-link"
              to="/"
            >
              Contact Us
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={() => closeMenu()}
              className="nav-links-link"
              to="/order"
            >
              <button className="nav-btn">Order Now</button>
            </NavLink>
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