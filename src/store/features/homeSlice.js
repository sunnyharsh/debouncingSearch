import { createSlice } from "@reduxjs/toolkit";

export const homeSlice = createSlice({
  name: "home",
  initialState: {
    data: [],
    isLoading: true,
  },
  reducers: {
    getFetch: (state) => {
      state.isLoading = true;
    },
    getFetchSuccess: (state, action) => {
      state.data = action.payload;
      state.isLoading = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { getFetch, getFetchSuccess, getFetchFailure } = homeSlice.actions;

export default homeSlice.reducer;
