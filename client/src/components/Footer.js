import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <ul className="footer-links">
        <li>
          <Link to="/">Locations</Link>
        </li>
        <li>
          <Link to="/">Contact Us</Link>
        </li>
        <li>
          <Link to="/">About</Link>
        </li>
        <li>
          <Link to="/">Membership</Link>
        </li>
      </ul>
      <ul className="footer-links">
        <li>
          <Link to="/">Privacy Policy</Link>
        </li>
        <li>
          <Link to="/">Accessibility</Link>
        </li>
        <li>
          <Link to="/">Terms & Conditions</Link>
        </li>
        <li>
          <Link to="/">Supply Chain</Link>
        </li>
      </ul>
      <div className="footer-section-right">
        <div className="footer-icons">
          <span>
            <FaLinkedin />
          </span>
          <span>
            <FaTwitter />
          </span>
          <span>
            <FaFacebook />
          </span>
          <span>
            <FaInstagram />
          </span>
        </div>
        <div className="footer-copyright">
          © 2021 Burger Joint International All Rights Reserved Menu items and
          pricing may vary by location and are subject to change.
        </div>
      </div>
    </div>
  );
};

export default Footer;
