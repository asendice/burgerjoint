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
          <a>Locations</a>
        </li>
        <li>
          <a>Contact Us</a>
        </li>
        <li>
          <a>About</a>
        </li>
        <li>
          <a>Membership</a>
        </li>
      </ul>
      <ul className="footer-links">
        <li>
          <a>Privacy Policy</a>
        </li>
        <li>
          <a>Accessibility</a>
        </li>
        <li>
          <a>Terms & Conditions</a>
        </li>
        <li>
          <a>Supply Chain</a>
        </li>
      </ul>
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
    </div>
  );
};

export default Footer;
