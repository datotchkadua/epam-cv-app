import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import {
  getSkillsDataFromLocalStorage,
  saveSkillsDataToLocalStorage,
} from "./helpersStorage";
const initialState = {
  skillsData: { skills: getSkillsDataFromLocalStorage() || [] },
  isAddingSkills: false,
};

export const getSkillsData = createAsyncThunk(
  "skills/getSkillsData",
  async () => {
    try {
      const resp = await axios("/api/skills");
      return resp.data;
    } catch (error) {
      console.error(error.message);
    }
  }
);
export const postSkillsData = createAsyncThunk(
  "skills/postSkillsData",
  async (data) => {
    try {
      const resp = await axios.post("/api/skills", data);
      return resp.data.skills;
    } catch (error) {
      console.error(error.message);
    }
  }
);
const skillsSlice = createSlice({
  name: "skills",
  initialState,
  reducers: {
    editSkills: (state, action) => {
      state.isAddingSkills = !state.isAddingSkills;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getSkillsData.fulfilled, (state, action) => {
        state.skillsData = action.payload;
      })
      .addCase(postSkillsData.fulfilled, (state, action) => {
        if (action.payload) {
          state.skillsData.skills.push(action.payload);
          saveSkillsDataToLocalStorage(state.skillsData.skills);
        }
      });
  },
});

export const { editSkills } = skillsSlice.actions;
export default skillsSlice.reducer;
