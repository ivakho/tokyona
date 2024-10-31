import React from "react";
import "./Mail.css";
import mailIcon from "../../assets/images/icons/mail.svg";

const Mail = () => {
  return (
    <div className="mail__container">
      <a className="mail__link" href="mailto:Tokyona.tours@gmail.com">
      <img className="mail__img" src={mailIcon} alt="email" />
        Tokyona.tours@gmail.com
      </a>
    </div>
  );
};

export default Mail;
