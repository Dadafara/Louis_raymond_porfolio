import React from "react";
import "../../assets/css/footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <footer className="footer__container container">
        <ul className="footer__list">
          <div className="footer__social">
            <a
              href="https://www.facebook.com/maminirina.orlando"
              className="footer__social-link"
              target="blank"
            >
              <i class="bx bxl-facebook"></i>
            </a>
            <a
              href="https://www.instagram.com"
              className="footer__social-link"
              target="blank"
            >
              <i class="bx bxl-instagram"></i>
            </a>
            <a
              href="https://www.linkedin.com"
              className="footer__social-link"
              target="blank"
            >
              <i class="bx bxl-linkedin"></i>
            </a>
          </div>
          <span className="footer__copy">
            © 2023 by Louis Raymond. All rigths reserved
          </span>
        </ul>
      </footer>
    </div>
  );
};

export default Footer;
