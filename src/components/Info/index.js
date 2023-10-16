import React from "react";
import "./Info.scss";


export const Info = ({ text }) => {
  return (
    <div className="info">
      <p className="info__description">{text}</p>
    </div>
  );
};
