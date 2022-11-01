import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./../Components/Auth/authSlice";
import sidebarSlice from "../Components/Layout/Sidebar/sidebarSlice";
import babyReportSlice from "./../Components/Babies/NewBaby/BabyReport/babyReportSlice";
import layoutSlice from "../Components/Layout/LayoutSlice";

export const store = configureStore({
  reducer: {
    sidebar: sidebarSlice,
    auth: authSlice,
    babyReport: babyReportSlice,
    layout: layoutSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
