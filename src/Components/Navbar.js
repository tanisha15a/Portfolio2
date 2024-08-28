import React from "react";
import "./Navbar.css";
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <nav>
      <div className="nav-logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="nav-links">
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">About</a>
          </li>
          <li>
            <a href="/services">Services</a>
          </li>

          <li>
            <a href="/works">Portfolio</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
