import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
export interface SidebarState {
  modalOpen: boolean;
}

const initialState: SidebarState = {
    modalOpen: false,
  }

export const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState,
  reducers: {
    closeModal: (state) => {
        state.modalOpen = false;
        console.log('closemodal')
    },
    openModal: (state)=>{
        state.modalOpen = true;
        console.log('openmodal')
    },

  },
})

// Action creators are generated for each case reducer function
export const {closeModal, openModal} = sidebarSlice.actions

export default sidebarSlice.reducer