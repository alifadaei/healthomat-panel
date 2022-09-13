import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
export interface SidebarState {
  physicalSidebarOpen: boolean;
  modalSidebarOpen: boolean;
}

export const setPhycicalSidebarStat = () => {
  return window.innerWidth > 1024;
};

const initialState: SidebarState = {
  physicalSidebarOpen: false,
  modalSidebarOpen: false,
};

export const sidebarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    closeModalSidebar: (state) => {
      state.modalSidebarOpen = false;
    },
    openModalSidebar: (state) => {
      state.modalSidebarOpen = true;
    },
    closePhysicalSidebar: (state) => {
      state.physicalSidebarOpen = false;
    },

    openPhysicalSidebar: (state) => {
      state.physicalSidebarOpen = true;
      state.modalSidebarOpen = false;
    },

    setPhsyicalSidebarOpen: (state, action: PayloadAction<boolean>) => {
      state.physicalSidebarOpen = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  closeModalSidebar,
  closePhysicalSidebar,
  openModalSidebar,
  openPhysicalSidebar,
  setPhsyicalSidebarOpen,
} = sidebarSlice.actions;

export default sidebarSlice.reducer;
