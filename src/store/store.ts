import { configureStore } from "@reduxjs/toolkit";
import sidebarSlice from "../Components/Layout/Sidebar/sidebarSlice";
import babyReportSlice from "./../Components/Babies/NewBaby/BabyReport/babyReportSlice";
import layoutSlice from "../Components/Layout/LayoutSlice";
import newBabySlice from "../Components/Babies/NewBaby/newBabySlice";
import profileSlice from "../Components/Profile/profileSlice";

export const store = configureStore({
  reducer: {
    sidebar: sidebarSlice,
    babyReport: babyReportSlice,
    layout: layoutSlice,
    newBaby: newBabySlice,
    profile: profileSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
