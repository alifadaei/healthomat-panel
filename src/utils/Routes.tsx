import Appointments from "../Components/Appointments/Appointments";
import Logout from "../Components/Auth/Logout";
import MyBabies from "../Components/Babies/MyBabies";
import NewBaby from "../Components/Babies/NewBaby/NewBaby";
import Dashboard from "../Components/Dashboard/Dashboard";
import Profile from "../Components/Profile/Profile";

export const RouteNames = {
  my_babies: {
    root: "/babies",
    new_baby: "/babies/newbaby",
  },
  dashboard: "/dashboard",
  profile: "/profile",
  appointments: "/my-appointments",
  logout: "/logout",
};
export const Routes = [
  { path: RouteNames.dashboard, element: <Dashboard /> },
  { path: RouteNames.profile, element: <Profile /> },
  { path: RouteNames.appointments, element: <Appointments /> },
  { path: RouteNames.my_babies.root, element: <MyBabies /> },
  { path: RouteNames.my_babies.new_baby, element: <NewBaby /> },
  { path: RouteNames.logout, element: <Logout /> },
];
