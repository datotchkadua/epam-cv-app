import React from "react";
import { Button, Navigation, PhotoBox } from "../index";
import avatarImg from "../../assets/avatar-medium.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import "./Panel.scss";
import hamburgerMenu from "../../assets/hamburger-menu.svg";

export const Panel = ({ isVisibleSidebar, setIsVisibleSidebar }) => {
  const navigate = useNavigate();
  function backToHomePage() {
    navigate("/");
  }
  function toggleSidebar() {
    setIsVisibleSidebar(!isVisibleSidebar);
  }
  return (
    <aside className={`${!isVisibleSidebar ? "panel hide-panel" : "panel"}`}>
      <Button
        onClickFunc={toggleSidebar}
        btnClass="burger-btn"
        icon={<img src={hamburgerMenu} alt="burger-menu" />}
      />

      <PhotoBox name="Dato Tchkadua" avatar={avatarImg} />
      <Navigation />
      <div className="panel__btn-container">
        <Button
          btnClass="btn navbar-btn"
          text="Go back"
          icon={<FontAwesomeIcon icon={faChevronLeft} />}
          onClickFunc={backToHomePage}
        />
      </div>
    </aside>
  );
};
