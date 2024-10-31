import React from "react";
import "./Logo.css";
import logoImg from "../../assets/images/logo_1.png";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/" className="logo__link">
      <div className="logo__imgContainer">
      <img className="logo__img" src={logoImg} alt="logo" />
      </div>
      <div className="logo__text">Tokyona</div>
    </Link>
  );
};

export default Logo;
