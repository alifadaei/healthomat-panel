import Appointments from "../Components/Appointments/Appointments";
import Logout from "../Components/Auth/Logout";
import Babies from "../Components/Babies/Babies";
import Dashboard from "../Components/Dashboard/Dashboard";
import NotFound from "../Components/Layout/NotFound";
import Profile from "../Components/Profile/Profile";

export const RouteNames = {
  dashboard: "/dashboard",
  profile: "/profile",
  appointments: "/my-appointments",
  babies: "/my-babies",
  logout: "/logout",
  not_found: "/404",
};
export const Routes = [
  { path: RouteNames.dashboard, element: <Dashboard /> },
  { path: RouteNames.profile, element: <Profile /> },
  { path: RouteNames.appointments, element: <Appointments /> },
  { path: RouteNames.babies, element: <Babies /> },
  { path: RouteNames.logout, element: <Logout /> },
  { path: RouteNames.not_found, element: <NotFound /> },
];
