import React from "react";
import { useLocation } from "react-router-dom";
import "./Button.scss";
export const Button = ({ disabledBtn = false, icon, text, clickFunc }) => {
  const location = useLocation();

  return (
    <button disabled={disabledBtn} className="btn" onClick={clickFunc}>
      {icon}
      <p
        className={`${location.pathname === "/main" ? "btn__text-hide" : null}`}
      >
        {text}
      </p>
    </button>
  );
};
