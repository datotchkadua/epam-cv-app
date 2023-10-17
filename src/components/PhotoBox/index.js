import React from "react";
import "./PhotoBox.scss";

export const PhotoBox = ({ name, title, description, avatar }) => {
  return (
    <div className="photoBox">
      <div className="photoBox__container">
        <img
          src={avatar}
          alt="name"
          className="photoBox__container--person-img"
        />
        <h1 className="photoBox__container--person-name">{name}</h1>
        <h3 className="photoBox__container--person-position">{title}</h3>
        <p className="photoBox__container--person-description">{description}</p>
      </div>
    </div>
  );
};
