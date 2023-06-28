import { createSlice } from "@reduxjs/toolkit";

export const resturantDetailSlice = createSlice({
  name: "resturantDetail",
  initialState: {
    data: {},
  },
  reducers: {
    getDetail: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { getDetail } = resturantDetailSlice.actions;

export default resturantDetailSlice.reducer;
