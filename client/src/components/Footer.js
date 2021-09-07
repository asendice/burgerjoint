import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <ul className="footer-links">
        <li>
          <a href="#">Locations</a>
        </li>
        <li>
          <a href="#">Contact Us</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Membership</a>
        </li>
      </ul>
      <ul className="footer-links">
        <li>
          <a href="#">Privacy Policy</a>
        </li>
        <li>
          <a href="#">Accessibility</a>
        </li>
        <li>
          <a href="#">Terms & Conditions</a>
        </li>
        <li>
          <a href="#">Supply Chain</a>
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
