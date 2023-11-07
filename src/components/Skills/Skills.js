import React, { useEffect } from "react";
import "./Skills.scss";
import { Button } from "../index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { useSelector, useDispatch } from "react-redux";
import {
  editSkills,
  getSkillsData,
  postSkillsData,
} from "../../features/skills/skillsSlice";
import { useFormik } from "formik";
import { skillSchema } from "../../schemas";
import { v4 } from "uuid";

export const Skills = () => {
  const {
    isAddingSkills,
    skillsData: { skills },
  } = useSelector((store) => store.skills);
  const dispatch = useDispatch();
  function toggleEditSkills() {
    dispatch(editSkills());
  }

  function submitSkills(values) {
    dispatch(postSkillsData(values));
  }
  const {
    values,
    touched,
    errors,
    isValid,
    dirty,
    isSubmitting,
    handleBlur,
    handleChange,
    resetForm,
    handleSubmit,
  } = useFormik({
    initialValues: {
      skill: "",
      range: "",
    },
    validationSchema: skillSchema,
    onSubmit: (values) => {
      submitSkills({ ...values, id: v4() });
      resetForm();
    },
  });

  useEffect(() => {
    if (skills.length === 0) dispatch(getSkillsData());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  return (
    <section className="skills" id="skills">
      <div className="skills__top">
        <h2 className="title">Skills</h2>
        <Button
          btnClass="btn "
          icon={<FontAwesomeIcon icon={faPenToSquare} />}
          text="Open edit"
          onClickFunc={toggleEditSkills}
        />
      </div>
      {isAddingSkills && (
        <div className="skills__edit-container">
          <form
            className="skills__edit-container__form"
            onSubmit={submitSkills}
          >
            <div className="skills__edit-container__form--group">
              <label htmlFor="skill-name">Skill name</label>
              <div>
                <input
                  id="skill"
                  type="text"
                  className={
                    errors.skill && touched.skill
                      ? "skills__edit-container__form--group__input input-error"
                      : "skills__edit-container__form--group__input"
                  }
                  placeholder="Enter skill name"
                  value={values.skill}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.skill && touched.skill && (
                  <p className="text-error">{errors.skill}</p>
                )}
              </div>
            </div>
            <div className="skills__edit-container__form--group">
              <label htmlFor="skill-name">Skill range</label>
              <div>
                <input
                  id="range"
                  type="text"
                  className={
                    errors.range && touched.range
                      ? "skills__edit-container__form--group__input input-error"
                      : "skills__edit-container__form--group__input"
                  }
                  placeholder="Enter skill range"
                  value={values.range}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.range && touched.range && (
                  <p className="text-error">{errors.range}</p>
                )}
              </div>
            </div>

            <Button
              btnClass="btn skills-btn"
              icon={<FontAwesomeIcon icon={faUserPlus} />}
              disabledBtn={!dirty || !isValid || isSubmitting}
              text="Add skill"
              onClickFunc={handleSubmit}
              type={"submit"}
            />
          </form>
        </div>
      )}

      {skills && skills.length ? (
        <div className="skills__charts">
          {skills?.map(({ skill, range, id }) => {
            if (skill) {
              return (
                <div
                  className="skills__charts--bar"
                  style={{ width: `${range}%`, minWidth: "120px" }}
                  key={id}
                >
                  <p>
                    {skill?.length >= 14
                      ? skill.substring(0, 10) + "..."
                      : skill}
                  </p>
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      ) : null}

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
    </section>
  );
};
