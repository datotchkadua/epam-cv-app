import React, { useState } from "react";
import "./Skills.scss";
import { Button } from "../index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
//

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
    range: 10,
  },
  {
    skill: "React",
    range: 75,
  },
  {
    skill: "Node.js",
    range: 10,
  },
];

export const Skills = () => {
  const [isAddingSkills, setIsAddingSkills] = useState(false);

  function editSkills() {
    setIsAddingSkills(!isAddingSkills);
    console.log("edited skills");
  }

  function addSkill(e) {
    e.preventDefault();
    console.log(1);
  }

  return (
    <div className="skills">
      <div className="skills__top">
        <h2 className="skills__top--header">Skills</h2>
        <Button
          icon={<FontAwesomeIcon icon={faPenToSquare} />}
          text="Open edit"
          clickFunc={editSkills}
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

            <Button disabledBtn={true} text="Add skill" clickFunc={addSkill} />
          </form>
        </div>
      )}
      <div className="skills__charts">
        {apiData.map((skillInfo) => {
          const { skill, range } = skillInfo;

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
    </div>
  );
};
