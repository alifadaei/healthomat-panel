import authSlice from "./../Components/Auth/authSlice";
import { configureStore } from "@reduxjs/toolkit";
import sidebarSlice from "../Components/Layout/sidebarSlice";

export const store = configureStore({
  reducer: {
    sidebar: sidebarSlice,
    auth: authSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
