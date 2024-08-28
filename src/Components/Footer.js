import React from "react";
import logo from "../assets/logo.png";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer-logo">
        <img src={logo} lang="logo" />
      </div>

      {/*Copyright*/}
      <div className="footer-copyright">
        <p>© 2024 I-Novotek Acedemy.All Right Reserved</p>
      </div>

      {/*Social*/}
      <ul className="footer-social-media">
        <li>
          <a href="https://www.youtube.com/c/inovotek-academy">
            <i class="fa-brands fa-facebook"></i>
          </a>
        </li>
        <li>
          <a href="https://www.youtube.com/c/inovotek-academy">
            <i class="fa-brands fa-twitter"></i>
          </a>
        </li>
        <li>
          <a href="https://www.youtube.com/c/inovotek-academy">
            <i class="fa-brands fa-instagram"></i>
          </a>
        </li>
        <li>
          <a href="https://www.youtube.com/c/inovotek-academy">
            <i class="fa-brands fa-youtube"></i>
          </a>
        </li>
        <li>
          <a href="https://www.youtube.com/c/inovotek-academy">
            <i class="fa-brands fa-linkedin"></i>
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
