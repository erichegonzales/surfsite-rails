import { createSlice } from "@reduxjs/toolkit";

export const renderSlice = createSlice({
  name: "render",
  initialState: {
    value: false,
  },
  reducers: {
    fetch: (state) => {
      state.value = !state.value;
    },
  },
});

export const { fetch } = renderSlice.actions;

export default renderSlice.reducer;
