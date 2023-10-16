import React from "react";
import "./Button.scss";
export const Button = ({ disabledBtn = false, icon, text, clickFunc }) => {
  return (
    <button disabled={disabledBtn} className="btn" onClick={clickFunc}>
      {icon} {text}
    </button>
  );
};

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
/* <Button icon={<FontAwesomeIcon icon={faChevronLeft} />} text="Know more" />; */
