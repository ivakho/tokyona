import React from "react";
import "./TourCard.css";
import classNames from "classnames";

const TourCard = ({ day, title, description, img, isReversed }) => {
  const tourCardClass = classNames("tour__card", {
    tour__cardReversed: isReversed,
  });

  const tourInfoClass = classNames("tour__info", {
    tour__infoReversed: isReversed,
  });

  const tourImgClass = classNames("tour__img", {
    tour__imgReversed: isReversed,
  });

  return (
    <article className={tourCardClass}>
      <div className={tourInfoClass}>
        <div className="info__day">Day {day}</div>
        <h3 className="info__title">{title}</h3>
        <p className="info__description">{description}</p>
      </div>
      <img className={tourImgClass} src={img} alt={`day_${day}_image`} />
    </article>
  );
};

export default TourCard;
