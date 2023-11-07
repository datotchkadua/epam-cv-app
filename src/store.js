import { configureStore } from "@reduxjs/toolkit";
import educationReducer from "./features/timeline/educationSlice";
import skillsReducer from "./features/skills/skillsSlice";
export const store = configureStore({
  reducer: {
    educations: educationReducer,
    skills: skillsReducer,
  },
});
