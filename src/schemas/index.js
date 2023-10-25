import * as Yup from "yup";

export const skillSchema = Yup.object().shape({
  skill: Yup.string("Skill name must be a 'string' type").required(
    "Skill name is a required field"
  ),
  range: Yup.number("Skill range must be a 'number' type")
    .min(10, "Skill range must be at least 10")
    .max(100, "Skill range must not exceed 100")
    .required("Skill range is a required field"),
});
