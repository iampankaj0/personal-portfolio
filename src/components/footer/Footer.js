import React from "react";
import "./footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Pankaj Yadav</h1>

        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>
          <li>
            <a href="#portfolio" className="footer__link">
              Projects
            </a>
          </li>
          <li>
            <a href="#testimonials" className="footer__link">
              Testimonials
            </a>
          </li>
        </ul>

        <div className="footer__social">
          <a
            href="https://www.facebook.com/iampankaj0"
            rel="noreferrer"
            title="Facebook"
            className="footer__social-link"
            target="_blank"
          >
            <i className="bx bxl-facebook"></i>
          </a>
          <a
            href="https://instagram.com/_iampankaj"
            target="_blank"
            rel="noreferrer"
            title="Instagram"
            className="footer__social-link"
          >
            <i className="bx bxl-instagram"></i>
          </a>
          <a
            href="https://twitter.com/iampankaj0"
            target="_blank"
            rel="noreferrer"
            title="Twitter"
            className="footer__social-link"
          >
            <i className="bx bxl-twitter"></i>
          </a>
        </div>

        <span className="footer__copy">
          &#169; Pankaj Yadav. All rights reserved
        </span>
      </div>
    </footer>
  );
};

export default Footer;
