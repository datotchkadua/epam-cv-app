import React from "react";
import "./Navigation.scss";
import { ReactComponent as AboutMeSvg } from "../../assets/about-me.svg";
import { ReactComponent as EducationSvg } from "../../assets/education.svg";
import { ReactComponent as ExperienceSvg } from "../../assets/experience.svg";
import { ReactComponent as SkillsSvg } from "../../assets/Skills.svg";
import { ReactComponent as PortfolioSvg } from "../../assets/Portfolio.svg";
import { ReactComponent as ContactsSvg } from "../../assets/Contacts.svg";
import { ReactComponent as FeedbackSvg } from "../../assets/Feedbacks.svg";

export const Navigation = ({ registerTrigger, activeId }) => {
  const navData = [
    {
      id: 1,
      SvgComponent: AboutMeSvg,
      navText: "About me",
      register: "about-section",
    },
    {
      id: 2,
      SvgComponent: EducationSvg,
      navText: "Education",
      register: "education",
    },
    {
      id: 3,
      SvgComponent: ExperienceSvg,
      navText: "Experience",
      register: "experience",
    },
    {
      id: 4,
      SvgComponent: SkillsSvg,
      navText: "Skills",
      register: "skills",
    },
    {
      id: 5,
      SvgComponent: PortfolioSvg,
      navText: "Portfolio",
      register: "portfolio",
    },
    {
      id: 6,
      SvgComponent: ContactsSvg,
      navText: "Contacts",
      register: "contacts",
    },
    {
      id: 7,
      SvgComponent: FeedbackSvg,
      navText: "Feedback",
      register: "feedback",
    },
  ];
  return (
    <nav className="navbar">
      <ul className="navbar__ul">
        {navData.map((nav) => {
          const { id, SvgComponent, navText, register } = nav;

          return (
            <li key={id} className="navbar__ul--list">
              <SvgComponent className="navbar__ul--list__svg" />
              <button
                type="button"
                className={`navbar__ul--list__header ${
                  activeId === register ? "active" : null
                } `}
                ref={registerTrigger(register)}
              >
                {navText}
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
