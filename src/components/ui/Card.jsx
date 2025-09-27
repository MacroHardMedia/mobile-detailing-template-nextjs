"use client";

import React from "react";
import "./card.scss";

const Card = ({
  image,
  imageAlt = "",
  header,
  description,
  onLearnMore,
  className = "",
}) => {
  return (
    <div className={`card ${className}`}>
      <div className="card__image-wrapper">
        <img src={image} alt={imageAlt} className="card__image" />
      </div>

      <div className="card__content">
        <h3 className="card__header">{header}</h3>
        <p className="card__description">{description}</p>

        <button className="card__button" onClick={onLearnMore}>
          Learn More
        </button>
      </div>
    </div>
  );
};

export default Card;
