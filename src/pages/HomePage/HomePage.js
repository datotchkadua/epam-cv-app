import React from "react";
import { Button, PhotoBox } from "../../components";
import avatarImg from "../../assets/user-avatar.png";
import { useNavigate } from "react-router-dom";
import "./HomePage.scss";

export const HomePage = () => {
  const navigate = useNavigate();
  function handleClick() {
    navigate("/main");
  }
  return (
    <section className="homePage">
      <PhotoBox
        name="Dato Tchkadua"
        title="Programmer. Creative. Innovator"
        description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque"
        avatar={avatarImg}
      />
      <Button text="Know more" clickFunc={handleClick} />
    </section>
  );
};
