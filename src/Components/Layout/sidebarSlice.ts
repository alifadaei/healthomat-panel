import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
export interface SidebarState {
  physicalSidebarOpen: boolean;
  drawerSidebarOpen: boolean;
}

export const setPhycicalSidebarStat = () => {
  return window.innerWidth > 1024;
};

const initialState: SidebarState = {
  physicalSidebarOpen: false,
  drawerSidebarOpen: false,
};

export const sidebarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    closeDrawerSidebar: (state) => {
      state.drawerSidebarOpen = false;
    },
    openDrawerSidebar: (state) => {
      state.drawerSidebarOpen = true;
    },
    closePhysicalSidebar: (state) => {
      state.physicalSidebarOpen = false;
    },

    openPhysicalSidebar: (state) => {
      state.physicalSidebarOpen = true;
      state.drawerSidebarOpen = false;
    },

    setPhsyicalSidebarOpen: (state, action: PayloadAction<boolean>) => {
      state.physicalSidebarOpen = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  closePhysicalSidebar,
  openPhysicalSidebar,
  setPhsyicalSidebarOpen,
  closeDrawerSidebar,
  openDrawerSidebar,
} = sidebarSlice.actions;

export default sidebarSlice.reducer;
