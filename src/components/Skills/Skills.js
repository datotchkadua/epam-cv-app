import React, { useState } from "react";
import "./Skills.scss";
import { Button } from "../index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faUserPlus } from "@fortawesome/free-solid-svg-icons";


const apiData = [
  {
    skill: "html",
    range: 100,
  },
  {
    skill: "css",
    range: 85,
  },
  {
    skill: "Javascript",
    range: 70,
  },
  {
    skill: "React",
    range: 45,
  },
  {
    skill: "Node.js",
    range: 20,
  },
];

export const Skills = () => {
  const [isAddingSkills, setIsAddingSkills] = useState(false);

  function editSkills() {
    setIsAddingSkills(!isAddingSkills);
  }

  function addSkill(e) {
    e.preventDefault();
    console.log(1);
  }

  return (
    <section className="skills" id="skills">
      <div className="skills__top">
        <h2 className="title">Skills</h2>
        <Button
          btnClass="btn "
          icon={<FontAwesomeIcon icon={faPenToSquare} />}
          text="Open edit"
          onClickFunc={editSkills}
        />
      </div>
      {isAddingSkills && (
        <div className="skills__edit-container">
          <form className="skills__edit-container__form">
            <div className="skills__edit-container__form--group">
              <label htmlFor="skill-name">Skill name:</label>
              <input
                type="text"
                className="skills__edit-container__form--group__input"
                id="skill-name"
                placeholder="Enter skill name"
              />
            </div>
            <div className="skills__edit-container__form--group">
              <label htmlFor="skill-name">Skill range:</label>
              <input
                type="number"
                min={10}
                max={100}
                className="skills__edit-container__form--group__input"
                id="skill-name"
                placeholder="Enter skill range"
              />
            </div>

            <Button
              btnClass="btn skills-btn"
              icon={<FontAwesomeIcon icon={faUserPlus} />}
              disabledBtn={true}
              text="Add skill"
              onClickFunc={addSkill}
            />
          </form>
        </div>
      )}
      <div className="skills__charts">
        {apiData.map(({ skill, range }) => {
          return (
            <div
              className="skills__charts--bar"
              style={{ width: `${range}%`, minWidth: "120px" }}
              key={skill}
            >
              <p>
                {skill.length >= 14 ? skill.substring(0, 10) + "..." : skill}
              </p>
            </div>
          );
        })}

        <div className="skills__charts--div">
          <div className="skills__charts--div__ruler"></div>
          <div className="skills__charts--div__ruler"></div>
          <div className="skills__charts--div__ruler"></div>
        </div>

        <div className="skills__charts--labels">
          <div className="skills__charts--labels__label">Beginner</div>
          <div className="skills__charts--labels__label">Proficient</div>
          <div className="skills__charts--labels__label">Expert</div>
          <div className="skills__charts--labels__label">Master</div>
        </div>
      </div>
    </section>
  );
};
