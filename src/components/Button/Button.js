import React from "react";
import { useLocation } from "react-router-dom";
import "./Button.scss";

export const Button = ({
  disabledBtn = false,
  icon,
  text,
  onClickFunc,
  btnClass,
  type,
}) => {
  const location = useLocation();
  return (
    <button
      className={`${btnClass}`}
      disabled={disabledBtn}
      onClick={onClickFunc}
      type={type || "button"}
    >
      {icon}
      <p
        className={`${location.pathname === "/main" ? "btn__text-hide" : null}`}
      >
        {text}
      </p>
    </button>
  );
};
