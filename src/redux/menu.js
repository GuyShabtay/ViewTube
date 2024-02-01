import { createSlice } from "@reduxjs/toolkit";

export const menuSlice = createSlice({
  name: "menu",
  initialState: {
    isMenuPressed: true
  },
  reducers: {
    toggle: (state) => {
      state.isMenuPressed = !state.isMenuPressed; 
    }
  }
});

// Action creators are generated for each case reducer function
export const { toggle } = menuSlice.actions;

export default menuSlice.reducer;
