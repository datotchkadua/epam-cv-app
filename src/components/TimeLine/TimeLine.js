import React, { useEffect } from "react";
import "./Timeline.scss";
import { useSelector, useDispatch } from "react-redux";
import { getEducationsData } from "../../features/timeline/educationSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSyncAlt } from "@fortawesome/free-solid-svg-icons";

export const TimeLine = () => {
  const { isLoading, isError, educationsData } = useSelector(
    (store) => store.educations
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getEducationsData());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className="timeline" id="education">
      <h2 className="title">Education</h2>
      {isError || isLoading ? (
        <div className="centred-div">
          {isLoading ? (
            <FontAwesomeIcon className="loading-icon" icon={faSyncAlt} />
          ) : (
            <p style={{ color: "red" }}>
              Something went wrong; please review your server connection!
            </p>
          )}
        </div>
      ) : (
        <ul className="timeline__list">
          {educationsData?.educations
            ?.slice()
            .sort((a, b) => a.date - b.date)
            .map((education, i) => {
              return (
                <li className="timeline__list--item" key={i}>
                  <div className="timeline__list--item__date">
                    {education.date}
                  </div>
                  <div className="timeline__list--item__info">
                    <div className="timeline__list--item__info--div">
                      <h3 className="timeline__list--item__info--div__title">
                        {`Title ${i + 1}`}
                      </h3>
                      <p className="timeline__list--item__info--div__description">
                        {education.text}
                      </p>
                    </div>
                  </div>
                </li>
              );
            })}
        </ul>
      )}
    </section>
  );
};
