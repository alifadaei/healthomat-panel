import { LoginResponse } from "./GetUser";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export type UserRole = "Doctor" | "ADMIN";

export interface AuthType {
  role: UserRole | null;
  isAuthenticated: boolean;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  avatar: string | null;
  username: string;
  login: (data: LoginData) => void;
  changeAvatar: (link: string) => void;
}

type LoginData = {
  email: string;
  firstName: string;
  lastName: string;
  username: string;
  phone: string;
  avatar: string;
  isAuthenticated: boolean;
};

const useAuthStore = create<AuthType>()(
  persist(
    (set, get) => ({
      isAuthenticated: false,
      role: null,
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      avatar: "",
      username: "",
      login: (data) => set(() => ({ ...data, isAuthenticated: true })),
      changeAvatar: (link) => set((state) => ({ ...state, avatar: link })),
    }),
    {
      name: "auth-storage", // unique name
    }
  )
);

export default useAuthStore;
