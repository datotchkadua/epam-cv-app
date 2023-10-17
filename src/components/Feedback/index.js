import React from "react";
import { Info } from "../index";
import "./Feedback.scss";
export const Feedback = ({ data, registerSection }) => {
  return (
    <div ref={registerSection("feedback")}>
      <h2 className="feedback-header">Feedbacks</h2>
      {data.map((personFeedback) => {
        const { id, person, img, job, website, websiteLink, feedback } =
          personFeedback;
        return (
          <div className="feedback" key={id}>
            <>
              <Info text={feedback} />
              <div className="feedback__person-info">
                <img
                  src={img}
                  alt={person}
                  className="feedback__person-info__image"
                />
                <p className="feedback__person-info__description">
                  {`${person}, ${job}, `}
                  <a
                    className="feedback__person-info__description--link"
                    href={websiteLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {website}
                  </a>
                </p>
              </div>
            </>
          </div>
        );
      })}
    </div>
  );
};
