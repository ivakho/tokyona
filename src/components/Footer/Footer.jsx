import React from "react";
import "./Footer.css";
import Mail from "../Mail/Mail";
import Social from "../Social/Social";
import Logo from "../Logo/Logo";
import Contacts from "../Contacts/Contacts";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="footer__column">
          <Mail />
          <Social />
          <Logo />
        </div>
        <div className="footer__column">
          <Contacts />
        </div>
      </div>
      <div className="credits">
        Designed and built by{" "}
        <a className="credits__link" href="mailto:zgintoki@gmail.com">
          IKHO
        </a>
      </div>
    </footer>
  );
};

export default Footer;
