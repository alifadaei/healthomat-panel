import React from "react";
import BabyReport from "../Components/Babies/NewBaby/BabyReport/BabyReport";
const Baby = React.lazy(() => import("../Components/Babies/Baby"));
const MyBabies = React.lazy(() => import("../Components/Babies/Babies"));
const NewBaby = React.lazy(
  () => import("../Components/Babies/NewBaby/NewBaby")
);
const Profile = React.lazy(() => import("../Components/Profile/Profile"));
const Dashboard = React.lazy(() => import("../Components/Dashboard/Dashboard"));
const Appointments = React.lazy(
  () => import("../Components/Appointments/Appointments")
);

export const RouteNames = {
  my_babies: {
    root: "/babies",
    new_baby: "/babies/newbaby",
    baby: "/babies/baby/:id",
    baby_report: "/babies/baby/:id/report",
    edit: "/babies/baby/edit/:id",
  },
  dashboard: "/dashboard",
  profile: "/profile",
  appointments: "/my-appointments",
};
export const Routes = [
  { path: RouteNames.dashboard, element: <Dashboard /> },
  { path: RouteNames.profile, element: <Profile /> },
  { path: RouteNames.appointments, element: <Appointments /> },
  { path: RouteNames.my_babies.root, element: <MyBabies /> },
  { path: RouteNames.my_babies.new_baby, element: <NewBaby /> },
  { path: RouteNames.my_babies.baby, element: <Baby /> },
  { path: RouteNames.my_babies.baby_report, element: <BabyReport /> },
  { path: RouteNames.my_babies.edit, element: <NewBaby edit={true} /> },
];
