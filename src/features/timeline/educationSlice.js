import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  educationsData: [],
  isLoading: false,
  isError: false,
};

export const getEducationsData = createAsyncThunk(
  "educations/getEducationsData",
  async (thunkAPI) => {
    try {
      const resp = await axios("/api/educations");
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("something went wrong");
    }
  }
);

const educationSlice = createSlice({
  name: "educations",
  initialState,

  extraReducers: (builder) => {
    builder
      .addCase(getEducationsData.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getEducationsData.fulfilled, (state, action) => {
    
        state.educationsData = action.payload;
        state.isLoading = false;
      })
      .addCase(getEducationsData.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export default educationSlice.reducer;
