import React from "react";
import "./Timeline.scss";
export const TimeLine = ({ data, registerSection }) => {
  //   console.log(data);
  return (
    <div className="timeline" ref={registerSection("education")}>
      <h2 className="timeline__header">Education</h2>
      <ul className="timeline__list">
        {data
          .slice()
          .sort((a, b) => a.date - b.date)
          .map((experience, i) => {
            return (
              <li className="timeline__list--item" key={i}>
                <div className="timeline__list--item__date">
                  {experience.date}
                </div>
                <div className="timeline__list--item__info">
                  <div className="timeline__list--item__info--div">
                    <h3 className="timeline__list--item__info--div__header">
                      {`Title ${i + 1}`} {/* {experience.title} */}
                    </h3>
                    <p className="timeline__list--item__info--div__description">
                      {experience.text}
                    </p>
                  </div>
                </div>
              </li>
            );
          })}
        {/*  */}
      </ul>
    </div>
  );
};
