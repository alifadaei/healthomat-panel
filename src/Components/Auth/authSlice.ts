import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { API_ROUTES } from "../../utils/API_Routes";

export type AuthState = "YES" | "NO" | "?";
export type UserRole = "Patient" | "Doctor" | "ADMIN";
export interface AuthType {
  role: UserRole | null;
  isAuthenticated: AuthState;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  avatar: string | null;
  username: string;
}

const initialState: AuthType = {
  isAuthenticated: "YES",
  role: null,
  avatar: null,
  username: "alifadaei",
  firstName: "علی",
  lastName: "فدائی منش",
  email: "alifadaeimanesh@gmail.com",
  phone: "a",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUserInfo: (
      state,
      action: PayloadAction<{
        role: UserRole;
        firstName: string;
        lastName: string;
        username: string;
        email: string;
        phone: string;
        avatar: string | null;
      }>
    ) => {
      const { firstName, lastName, username, email, phone, role, avatar } =
        action.payload;
      state.email = email;
      state.firstName = firstName;
      state.lastName = lastName;
      state.username = username;
      state.phone = phone;
      state.role = role;
      state.avatar = avatar;
    },
    logout: (state) => {
      state.isAuthenticated = "NO";
      window.location.replace(API_ROUTES.Logout);
    },
    login: (state) => {
      state.isAuthenticated = "YES";
    },
    changeAvatar: (state, action: PayloadAction<string>) => {
      state.avatar = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { logout, setUserInfo, login, changeAvatar } = authSlice.actions;

export default authSlice.reducer;
