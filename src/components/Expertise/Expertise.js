import React from "react";
import "./Expertise.scss";

export const Expertise = ({ data }) => {
  return (
    <section className="experience" id="experience">
      <h2 className="title">Experience</h2>
      <ul>
        {data.map(({ date, info: { company, job, description } }, i) => {
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
    </section>
  );
};
