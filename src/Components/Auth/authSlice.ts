import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { API_ROUTES } from "../../utils/API_Routes";

export type AuthState = "YES" | "NO" | "?";
export type UserRole = "Patient" | "Doctor" | "ADMIN";
export interface AuthType {
  role: UserRole;
  isAuthenticated: AuthState;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  id: string;
  username: string;
}

const initialState: AuthType = {
  isAuthenticated: "?",
  role: "Patient",
  username: "alifadaei",
  firstName: "ali",
  lastName: "fadaei",
  email: "d",
  phone: "a",
  id: "ds",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUserInfo: (
      state,
      action: PayloadAction<{
        firstName: string;
        role: UserRole;
        lastName: string;
        username: string;
        email: string;
        phone: string;
        id: string;
      }>
    ) => {
      const { firstName, lastName, username, email, phone, id, role } =
        action.payload;
      state.email = email;
      state.firstName = firstName;
      state.lastName = lastName;
      state.username = username;
      state.phone = phone;
      state.id = id;
      state.role = role;
    },
    logout: (state) => {
      state.isAuthenticated = "NO";
      localStorage.removeItem("token");
      localStorage.removeItem("id");
      window.location.replace(API_ROUTES.Logout);
    },
    login: (state) => {
      state.isAuthenticated = "YES";
    },
  },
});

// Action creators are generated for each case reducer function
export const { logout, setUserInfo, login } = authSlice.actions;

export default authSlice.reducer;
