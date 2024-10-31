import React from "react";
import "./Excursion.css";

const Excursion = ({ fullImgs, title, fullDescription }) => {
  return (
    <section className="excursion__section">
      <div className="excursion__imgs">
        {fullImgs.map((item, index) => (
          <img
            className="excursion__img"
            key={index}
            src={item}
            alt="excursion_image"
          />
        ))}
      </div>
      <h4 className="excursion__title">{title}</h4>
      <p className="excursion__description">{fullDescription}</p>
    </section>
  );
};

export default Excursion;
