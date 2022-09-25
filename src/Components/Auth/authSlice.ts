import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
export interface AuthType {
  isAuthenticated: boolean;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  id: string;
  username: string;
}

const initialState: AuthType = {
  isAuthenticated: false,
  username: "",
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  id: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (
      state,
      action: PayloadAction<{
        firstName: string;
        lastName: string;
        username: string;
        email: string;
        phone: string;
        id: string;
      }>
    ) => {
      const { firstName, lastName, username, email, phone, id } =
        action.payload;
      state.email = email;
      state.firstName = firstName;
      state.lastName = lastName;
      state.username = username;
      state.phone = phone;
      state.id = id;
      state.isAuthenticated = true;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      localStorage.removeItem("token");
      localStorage.removeItem("id");
    },
  },
});

// Action creators are generated for each case reducer function
export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
