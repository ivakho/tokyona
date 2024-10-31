import React from "react";
import "./Header.css";
import Logo from "../Logo/Logo";
import Nav from "../Nav/Nav";
import Social from "../Social/Social";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import Mail from "../Mail/Mail";

const Header = () => {
  return (
    <header className="header">
      <div className="header__row">
        <Mail />
        <Social />
      </div>
      <div className="header__row">
        <Logo />
        <Nav />
        <BurgerMenu />
      </div>
    </header>
  );
};

export default Header;
