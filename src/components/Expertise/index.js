import React from "react";
import "./Expertise.scss";

export const Expertise = ({ data, registerSection }) => {
  return (
    <div className="experience" ref={registerSection("experience")}>
      <h2 className="experience__header">Experience</h2>
      <ul>
        {data.map((experience, i) => {
          //   console.log(experience);
          const {
            date,
            info: { company, job, description },
          } = experience;
          return (
            <li className="experience__list" key={i}>
              <div className="experience__list--company-year">
                <h3 className="experience__list--company-year__company">
                  {company}
                </h3>
                <p className="experience__list--company-year__year">{date}</p>
              </div>
              <div className="experience__list--position-description">
                <h3 className="experience__list--position-description__position">
                  {job}
                </h3>
                <p className="experience__list--position-description__description">
                  {description}
                </p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
