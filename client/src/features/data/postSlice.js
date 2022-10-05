import { createSlice } from "@reduxjs/toolkit";

export const postSlice = createSlice({
  name: "posts",
  initialState: {
    value: [],
  },
  reducers: {
    setPosts: (state, action) => {
      state.value = action.payload;
    }
  },
});

export const { setPosts } = postSlice.actions;

export default postSlice.reducer;
