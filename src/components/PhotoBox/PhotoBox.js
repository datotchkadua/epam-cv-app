import React from "react";
import "./PhotoBox.scss";
import { useLocation } from "react-router-dom";
export const PhotoBox = ({ name, title, description, avatar }) => {
  const location = useLocation();

  return (
    <section className="photoBox">
      <div className="photoBox__container">
        <img
          src={avatar}
          alt="name"
          className={`${
            location.pathname === "/main"
              ? "photoBox__container--person-img smImg"
              : "photoBox__container--person-img"
          }`}
        />
        <h1
          className={`${
            location.pathname === "/"
              ? "photoBox__container--person-name visible-name"
              : "photoBox__container--person-name"
          }`}
        >
          {name}
        </h1>
        {/* //<h1 className="photoBox__container--person-name">{name}</h1> */}
        <h3 className="photoBox__container--person-position">{title}</h3>
        <p className="photoBox__container--person-description">{description}</p>
      </div>
    </section>
  );
};
