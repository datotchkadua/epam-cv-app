import React from "react";
import { useLocation } from "react-router-dom";
import "./Button.scss";

export const Button = ({
  disabledBtn = false,
  icon,
  text,
  onClickFunc,
  btnClass,
}) => {
  const location = useLocation();

  return (
    <button
      className={`${btnClass}`}
      disabled={disabledBtn}
      onClick={onClickFunc}
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
