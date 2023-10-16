import React from "react";
import { PhotoBox } from "../../components";
import avatarImg from "../../assets/user-avatar.png";
 
export const HomePage = () => {
  return (
    <>
      <PhotoBox
        name="Dato Tchkadua"
        title="Programmer. Creative. Innovator"
        description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque"
        avatar={avatarImg}
      />
    </>
  );
};
