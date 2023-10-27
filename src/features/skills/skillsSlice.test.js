import { configureStore } from "@reduxjs/toolkit";
import skillsReducer, { editSkills } from "./skillsSlice";

describe("skillsSlice", () => {
  let store;
  beforeEach(() => {
    store = configureStore({
      reducer: {
        skills: skillsReducer,
      },
    });
  });

  it("should change boolean state", () => {
    store.dispatch(editSkills());
    expect(store.getState().skills.isAddingSkills).toEqual(true);

    store.dispatch(editSkills());
    expect(store.getState().skills.isAddingSkills).toEqual(false);
  });
});
