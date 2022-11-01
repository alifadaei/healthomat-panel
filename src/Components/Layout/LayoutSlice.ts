import { createSlice } from "@reduxjs/toolkit";

export interface LayoutType {
  contentLoading: boolean;
}

const initialState: LayoutType = {
  contentLoading: false,
};

export const layoutSlice = createSlice({
  name: "layout",
  initialState,
  reducers: {
    startLoading: (state) => {
      state.contentLoading = true;
    },
    endLoading: (state) => {
      state.contentLoading = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { endLoading, startLoading } = layoutSlice.actions;

export default layoutSlice.reducer;
