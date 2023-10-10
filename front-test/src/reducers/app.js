import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  darkTheme: true,
  list: [],
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setDarkTheme: (state, action) => {
      state.darkTheme = action.payload;
    },
    addToList: (state, action) => {
      state.list = [...state.list, ...action.payload];
    },
  },
});

export default appSlice.reducer;
