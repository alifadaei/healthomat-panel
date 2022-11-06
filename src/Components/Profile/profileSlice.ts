import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface profileType {
  modalOpen: boolean;
  anyFileSelected: boolean;
  avatar: string;
}

const initialState: profileType = {
  modalOpen: false,
  anyFileSelected: false,
  avatar: "",
};

export const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    openModal: (state) => {
      state.modalOpen = true;
    },
    closeModal: (state) => {
      state.modalOpen = false;
    },
    selectFile: (state) => {
      state.anyFileSelected = true;
    },
  },
});

// Action creators are generated for each case reducer function
export const {} = profileSlice.actions;

export default profileSlice.reducer;
