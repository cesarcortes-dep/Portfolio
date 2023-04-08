import React from "react";
import "./footer.css"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">César</h1>
        <ul className="footer__list">
          <li>
            <a href="#" className="footer__link">
              About
            </a>
          </li>
          <li>
            <a href="#" className="footer__link">
              Projects
            </a>
          </li>
        </ul>

        <div className="footer__social">
          <a
            href="https://www.linkedin.com/in/cesar-mateo-cortes-leon-b823a2206/"
            className="footer__social-link"
            target="_blank"
          >
            <i class="bx bxl-linkedin"></i>
          </a>

          <a
            href="https://github.com/cesarcortes-dep"
            className="footer__social-link"
            target="_blank"
          >
            <i class="bx bxl-github"></i>
          </a>
        </div>
        <span className="footer__copy">
            &#169; CésarCortes. All rights reserved
        </span>
      </div>
    </footer>
  );
};

export default Footer;
