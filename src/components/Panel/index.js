import React, { useState } from "react";
import { Button, Navigation, PhotoBox } from "../index";
import avatarImg from "../../assets/avatar-medium.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import "./Panel.scss";
import { ReactComponent as HamburgerMenu } from "../../assets/hamburger-menu.svg";

export const Panel = ({ registerTrigger, activeId }) => {
  const [isVisibleSidebar, setIsVisibleSidebar] = useState(true);

  const navigate = useNavigate();
  function backToHomePage() {
    navigate("/");
  }
  function toggleSidebar() {
    setIsVisibleSidebar(!isVisibleSidebar);
  }
  return (
    isVisibleSidebar && (
      <aside className="panel">
        <p className="panel__burgerMenu" onClick={toggleSidebar}>
          <HamburgerMenu />
        </p>

        <PhotoBox name="Dato Tchkadua" avatar={avatarImg} />
        <Navigation registerTrigger={registerTrigger} activeId={activeId} />
        <div className="panel__btn-container">
          <Button
            text="Go back"
            icon={<FontAwesomeIcon icon={faChevronLeft} />}
            clickFunc={backToHomePage}
          />
        </div>
      </aside>
    )
  );
};
