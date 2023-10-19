import React from "react";
import "./Info.scss";

export const Info = ({ text }) => {
  return (
    <section className="info">
      <p className="info__description">{text}</p>
    </section>
  );
};


