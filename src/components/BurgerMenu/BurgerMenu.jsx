import React, { useState } from "react";
import "./BurgerMenu.css";
import Nav from "../Nav/Nav";

const BurgerMenu = () => {
  const [isMenuActive, setIsMenuActive] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuActive((prevState) => !prevState);
  };

  return (
    <>
      <div className="burger__container">
        <button className="burger__button" onClick={handleMenuToggle}></button>
      </div>
      {isMenuActive && (
        <div className="burger__menuContainer">
          <div className="burger__menu">
            <div className="menu__titleContainer">
              <h3 className="menu__title">Menu</h3>
              <button
                className="menu__closeButton"
                onClick={handleMenuToggle}
              ></button>
            </div>
            <div className="burger__links" onClick={handleMenuToggle}>
              <Nav />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default BurgerMenu;
