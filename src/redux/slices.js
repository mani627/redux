// reducers/someReducer.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  // Initial state properties
};

const someSlice = createSlice({
  name: "some",
  initialState,
  reducers: {
    // Define your reducers here
  },
});

export const { actions, reducer } = someSlice;
export default someSlice.reducer;