import React from "react";
import "./OptionCard.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const OptionCard = ({ id, img, title, description, link, titleSize }) => {
  const navigate = useNavigate();

  const handleOptionCardClick = () => {
    if (id) {
      navigate(`${link}/${id}`);
    } else {
      navigate(link);
    }
  };

  return (
    <article className="card" onClick={handleOptionCardClick}>
      <img className="card__img" src={img} alt="option_image" />
      <div className="card__info">
        <h4 className="card__title" style={{ fontSize: titleSize }}>
          {title}
        </h4>
        {description && <p className="card__description">{description}</p>}
      </div>
      <Link to={link} className="card__link">
        Learn More
      </Link>
    </article>
  );
};

export default OptionCard;
